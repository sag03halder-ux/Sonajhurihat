const { Client, Databases, Query } = require('node-appwrite');

module.exports = async function (req, res) {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);

  if (!req.payload || !req.payload.productId) {
    return res.json({ success: false, message: 'productId required' }, 400);
  }

  const productId = req.payload.productId;

  try {
    const reviews = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      'reviews',
      [
        Query.equal('product_id', productId),
        Query.equal('status', 'approved')
      ]
    );

    if (reviews.documents.length === 0) {
      return res.json({
        success: true,
        message: 'No reviews found',
        rating: 0,
        count: 0
      });
    }

    const totalRating = reviews.documents.reduce((sum, r) => sum + (r.rating || 0), 0);
    const averageRating = totalRating / reviews.documents.length;
    const roundedRating = Math.round(averageRating * 10) / 10;

    await databases.updateDocument(
      process.env.APPWRITE_DATABASE_ID,
      'products',
      productId,
      {
        rating: roundedRating,
        review_count: reviews.documents.length,
        updated_at: new Date().toISOString()
      }
    );

    return res.json({
      success: true,
      rating: roundedRating,
      count: reviews.documents.length
    });
  } catch (error) {
    console.error('Rating update error:', error);
    return res.json({ success: false, message: error.message }, 500);
  }
};
