const { Client, Databases } = require('node-appwrite');

const VALID_STATUSES = [
  'pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'
];

const STATUS_TRANSITIONS = {
  pending: ['confirmed', 'cancelled'],
  confirmed: ['processing', 'cancelled'],
  processing: ['shipped', 'cancelled'],
  shipped: ['delivered'],
  delivered: ['refunded'],
  cancelled: [],
  refunded: []
};

module.exports = async function (req, res) {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);

  if (!req.payload || !req.payload.orderId || !req.payload.status) {
    return res.json({ success: false, message: 'orderId and status required' }, 400);
  }

  const { orderId, status, trackingNumber, carrier, adminNotes } = req.payload;

  if (!VALID_STATUSES.includes(status)) {
    return res.json({ success: false, message: 'Invalid status' }, 400);
  }

  try {
    const order = await databases.getDocument(
      process.env.APPWRITE_DATABASE_ID,
      'orders',
      orderId
    );

    const currentStatus = order.status;
    const allowedTransitions = STATUS_TRANSITIONS[currentStatus] || [];

    if (!allowedTransitions.includes(status) && currentStatus !== status) {
      return res.json({
        success: false,
        message: `Cannot change status from ${currentStatus} to ${status}`
      }, 400);
    }

    const updateData = {
      status,
      updated_at: new Date().toISOString()
    };

    if (status === 'shipped') {
      updateData.shipped_at = new Date().toISOString();
      updateData.tracking_number = trackingNumber || '';
      updateData.carrier = carrier || '';
    }

    if (status === 'delivered') {
      updateData.delivered_at = new Date().toISOString();
    }

    if (status === 'cancelled') {
      updateData.cancelled_at = new Date().toISOString();
    }

    if (adminNotes) {
      updateData.admin_notes = adminNotes;
    }

    const updatedOrder = await databases.updateDocument(
      process.env.APPWRITE_DATABASE_ID,
      'orders',
      orderId,
      updateData
    );

    const orderItems = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      'order_items',
      [Query.equal('order_id', orderId)]
    );

    for (const item of orderItems.documents) {
      await databases.updateDocument(
        process.env.APPWRITE_DATABASE_ID,
        'order_items',
        item.$id,
        { status }
      );
    }

    return res.json({
      success: true,
      data: {
        orderId: updatedOrder.$id,
        orderNumber: updatedOrder.order_number,
        previousStatus: currentStatus,
        status: updatedOrder.status,
        updatedAt: updatedOrder.updated_at
      }
    });
  } catch (error) {
    console.error('Update order status error:', error);
    return res.json({ success: false, message: error.message }, 500);
  }
};
