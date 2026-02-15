const { Client, Databases } = require('node-appwrite');

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
    return res.json({ success: false, message: 'No order ID in payload' }, 400);
  }

  try {
    const order = await databases.getDocument(
      process.env.APPWRITE_DATABASE_ID,
      'orders',
      orderId
    );

    const orderItems = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      'order_items',
      [Query.equal('order_id', orderId)]
    );

    for (const item of orderItems.documents) {
      try {
        const product = await databases.getDocument(
          process.env.APPWRITE_DATABASE_ID,
          'products',
          item.product_id
        );

        const newStock = Math.max(0, (product.stock_quantity || 0) - item.quantity);
        const newSold = (product.sold_count || 0) + item.quantity;

        await databases.updateDocument(
          process.env.APPWRITE_DATABASE_ID,
          'products',
          item.product_id,
          {
            stock_quantity: newStock,
            sold_count: newSold,
            updated_at: new Date().toISOString()
          }
        );
      } catch (prodError) {
        console.error(`Error updating product ${item.product_id}:`, prodError);
      }
    }

    return res.json({
      success: true,
      message: 'Stock updated for order',
      orderId,
      itemsUpdated: orderItems.documents.length
    });
  } catch (error) {
    console.error('Stock update error:', error);
    return res.json({ success: false, message: error.message }, 500);
  }
};
