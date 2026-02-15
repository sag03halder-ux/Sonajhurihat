const { Client, Databases } = require('node-appwrite');

module.exports = async function (req, res) {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);

  const payload = req.payload || {};
  const eventType = req.headers['x-webhook-event'] || payload.type;

  if (eventType !== 'payment_intent.succeeded') {
    return res.json({ success: true, message: 'Not a successful payment event' });
  }

  const paymentIntentId = payload.data?.object?.id;
  
  if (!paymentIntentId) {
    return res.json({ success: false, message: 'No payment intent ID' }, 400);
  }

  try {
    const payments = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      'payments',
      [Query.equal('gateway_transaction_id', paymentIntentId)]
    );

    if (payments.documents.length === 0) {
      console.log('Payment record not found for:', paymentIntentId);
      return res.json({ success: true, message: 'Payment record not found, ignoring' });
    }

    const payment = payments.documents[0];

    if (payment.status === 'completed') {
      return res.json({ success: true, message: 'Payment already processed' });
    }

    await databases.updateDocument(
      process.env.APPWRITE_DATABASE_ID,
      'payments',
      payment.$id,
      {
        status: 'completed',
        gateway_response: payload.data?.object || {}
      }
    );

    if (payment.order_id) {
      await databases.updateDocument(
        process.env.APPWRITE_DATABASE_ID,
        'orders',
        payment.order_id,
        {
          payment_status: 'paid',
          status: 'confirmed',
          updated_at: new Date().toISOString()
        }
      );
    }

    return res.json({
      success: true,
      message: 'Payment verified and order updated',
      paymentId: payment.$id,
      orderId: payment.order_id
    });
  } catch (error) {
    console.error('Verify payment error:', error);
    return res.json({ success: false, message: error.message }, 500);
  }
};
