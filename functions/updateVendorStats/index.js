const { Client, Databases, Query } = require('node-appwrite');

module.exports = async function (req, res) {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);

  if (!req.payload || !req.payload.vendorId) {
    return res.json({ success: false, message: 'vendorId required' }, 400);
  }

  const vendorId = req.payload.vendorId;

  try {
    const orderItems = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      'order_items',
      [Query.equal('vendor_id', vendorId)]
    );

    let totalRevenue = 0;
    let totalSales = 0;
    const orderIds = new Set();

    for (const item of orderItems.documents) {
      if (item.status !== 'cancelled' && item.status !== 'refunded') {
        totalRevenue += item.total;
        totalSales += item.quantity;
        orderIds.add(item.order_id);
      }
    }

    const completedOrders = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      'orders',
      [
        Query.equal('vendor_id', vendorId),
        Query.equal('status', 'delivered')
      ]
    );

    let averageRating = 0;
    const products = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      'products',
      [Query.equal('vendor_id', vendorId)]
    );

    if (products.documents.length > 0) {
      const totalRating = products.documents.reduce((sum, p) => sum + (p.rating || 0), 0);
      averageRating = totalRating / products.documents.length;
    }

    await databases.updateDocument(
      process.env.APPWRITE_DATABASE_ID,
      'vendors',
      vendorId,
      {
        total_revenue: Math.round(totalRevenue * 100) / 100,
        total_sales: totalSales,
        rating: Math.round(averageRating * 10) / 10,
        updated_at: new Date().toISOString()
      }
    );

    return res.json({
      success: true,
      data: {
        vendorId,
        totalRevenue: Math.round(totalRevenue * 100) / 100,
        totalSales,
        orderCount: orderIds.size,
        averageRating: Math.round(averageRating * 10) / 10
      }
    });
  } catch (error) {
    console.error('Update vendor stats error:', error);
    return res.json({ success: false, message: error.message }, 500);
  }
};
