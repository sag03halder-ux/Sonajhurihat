const { Client, Databases, ID, Query } = require('node-appwrite');

module.exports = async function (req, res) {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);

  if (!req.payload) {
    return res.json({ success: false, message: 'No payload provided' }, 400);
  }

  const {
    productId,
    userId,
    orderId,
    rating,
    title,
    content,
    images = []
  } = req.payload;

  if (!productId || !userId || !rating) {
    return res.json({ success: false, message: 'productId, userId, and rating required' }, 400);
  }

  if (rating < 1 || rating > 5) {
    return res.json({ success: false, message: 'Rating must be between 1 and 5' }, 400);
  }

  try {
    const existingReview = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      'reviews',
      [
        Query.equal('product_id', productId),
        Query.equal('user_id', userId)
      ]
    );

    if (existingReview.documents.length > 0) {
      return res.json({ 
        success: false, 
        message: 'You have already reviewed this product' 
      }, 409);
    }

    let verifiedPurchase = false;
    if (orderId) {
      const orders = await databases.listDocuments(
        process.env.APPWRITE_DATABASE_ID,
        'orders',
        [
          Query.equal('$id', orderId),
          Query.equal('user_id', userId)
        ]
      );
      verifiedPurchase = orders.documents.length > 0 && 
        ['delivered', 'shipped', 'processing'].includes(orders.documents[0].status);
    }

    const reviewData = {
      product_id: productId,
      user_id: userId,
      order_id: orderId || '',
      rating: parseInt(rating),
      title: title || '',
      content: content || '',
      images,
      verified_purchase: verifiedPurchase,
      helpful_count: 0,
      status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    const review = await databases.createDocument(
      process.env.APPWRITE_DATABASE_ID,
      'reviews',
      ID.unique(),
      reviewData
    );

    const reviews = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      'reviews',
      [
        Query.equal('product_id', productId),
        Query.equal('status', 'approved')
      ]
    );

    if (reviews.documents.length > 0) {
      const totalRating = reviews.documents.reduce((sum, r) => sum + (r.rating || 0), 0);
      const averageRating = Math.round((totalRating / reviews.documents.length) * 10) / 10;

      await databases.updateDocument(
        process.env.APPWRITE_DATABASE_ID,
        'products',
        productId,
        {
          rating: averageRating,
          review_count: reviews.documents.length,
          updated_at: new Date().toISOString()
        }
      );
    }

    return res.json({
      success: true,
      message: 'Review submitted',
      data: {
        reviewId: review.$id,
        status: review.status
      }
    });
  } catch (error) {
    console.error('Submit review error:', error);
    return res.json({ success: false, message: error.message }, 500);
  }
};
