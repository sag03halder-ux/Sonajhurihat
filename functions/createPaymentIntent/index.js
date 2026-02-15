const { Client, Databases, ID } = require('node-appwrite');

module.exports = async function (req, res) {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);

  if (!req.payload || !req.payload.amount || !req.payload.currency) {
    return res.json({ success: false, message: 'amount and currency required' }, 400);
  }

  const { amount, currency = 'usd', orderId, userId, email } = req.payload;
  const amountInCents = Math.round(parseFloat(amount) * 100);

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.json({
      success: false,
      message: 'Payment configuration error'
    }, 500);
  }

  try {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency.toLowerCase(),
      metadata: {
        orderId: orderId || '',
        userId: userId || ''
      },
      receipt_email: email,
      automatic_payment_methods: {
        enabled: true
      }
    });

    const paymentData = {
      order_id: orderId || '',
      user_id: userId || '',
      amount: parseFloat(amount),
      currency: currency.toUpperCase(),
      method: 'stripe',
      gateway_transaction_id: paymentIntent.id,
      gateway_response: {
        client_secret: paymentIntent.client_secret
      },
      status: 'pending',
      created_at: new Date().toISOString()
    };

    let paymentDoc = null;
    if (orderId) {
      paymentDoc = await databases.createDocument(
        process.env.APPWRITE_DATABASE_ID,
        'payments',
        ID.unique(),
        paymentData
      );
    }

    return res.json({
      success: true,
      data: {
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
        paymentId: paymentDoc?.$id || null,
        amount: parseFloat(amount),
        currency: currency.toUpperCase()
      }
    });
  } catch (error) {
    console.error('Payment intent error:', error);
    return res.json({ success: false, message: error.message }, 500);
  }
};
