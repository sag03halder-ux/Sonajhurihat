const { Client, Databases, Query } = require('node-appwrite');

module.exports = async function (req, res) {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);

  const event = req.events?.[0] || '';
  
  if (!event.includes('orders') || !event.includes('create')) {
    return res.json({ success: true, message: 'Not an order creation event' });
  }

  const orderId = req.payload?.$id || req.payload?.order_id;
  
  if (!orderId) {
    return res.json({ success: false, message: 'No order ID' }, 400);
  }

  try {
    const order = await databases.getDocument(
      process.env.APPWRITE_DATABASE_ID,
      'orders',
      orderId
    );

    const user = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      'profiles',
      [Query.equal('user_id', order.user_id)]
    );

    const userProfile = user.documents[0];
    const customerName = userProfile 
      ? `${userProfile.first_name} ${userProfile.last_name}`
      : 'Valued Customer';

    const orderItems = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      'order_items',
      [Query.equal('order_id', orderId)]
    );

    const itemsList = orderItems.documents.map(item => 
      `<li>${item.name} x${item.quantity} - $${item.total.toFixed(2)}</li>`
    ).join('');

    const emailHtml = `
      <div style="font-family: 'Work Sans', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #ec6d13;">Artisan Crafted</h1>
        </div>
        <h2>Order Confirmation</h2>
        <p>Dear ${customerName},</p>
        <p>Thank you for your order! We've received your order and it's being processed.</p>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Order Number:</strong> ${order.order_number}</p>
          <p><strong>Date:</strong> ${new Date(order.created_at).toLocaleDateString()}</p>
          <p><strong>Status:</strong> ${order.status}</p>
        </div>

        <h3>Order Details</h3>
        <ul>${itemsList}</ul>

        <div style="border-top: 2px solid #eee; padding-top: 20px; margin-top: 20px;">
          <p><strong>Subtotal:</strong> $${order.subtotal.toFixed(2)}</p>
          <p><strong>Shipping:</strong> $${order.shipping_cost.toFixed(2)}</p>
          <p><strong>Tax:</strong> $${order.tax_amount.toFixed(2)}</p>
          ${order.discount_amount > 0 ? `<p><strong>Discount:</strong> -$${order.discount_amount.toFixed(2)}</p>` : ''}
          <p><strong>Total:</strong> <strong style="font-size: 18px;">$${order.total.toFixed(2)}</strong></p>
        </div>

        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Shipping Address</h3>
          <p>${order.shipping_address.first_name} ${order.shipping_address.last_name}</p>
          <p>${order.shipping_address.address_line1}</p>
          ${order.shipping_address.address_line2 ? `<p>${order.shipping_address.address_line2}</p>` : ''}
          <p>${order.shipping_address.city}, ${order.shipping_address.state} ${order.shipping_address.postal_code}</p>
          <p>${order.shipping_address.country}</p>
        </div>

        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          Thank you for supporting artisan creators!<br>
          Best regards,<br>The Artisan Crafted Team
        </p>
      </div>
    `;

    console.log(`Order confirmation email prepared for order: ${order.order_number}`);

    return res.json({
      success: true,
      message: 'Order confirmation sent',
      orderNumber: order.order_number,
      customerId: order.user_id
    });
  } catch (error) {
    console.error('Order confirmation error:', error);
    return res.json({ success: false, message: error.message }, 500);
  }
};
