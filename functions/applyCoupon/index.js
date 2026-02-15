const { Client, Databases, Query } = require('node-appwrite');

module.exports = async function (req, res) {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);

  if (!req.payload || !req.payload.code || !req.payload.subtotal) {
    return res.json({ success: false, message: 'Code and subtotal required' }, 400);
  }

  const { code, subtotal, userId, vendorId, productIds = [] } = req.payload;
  const codeUpper = code.toUpperCase().trim();

  try {
    const coupons = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      'coupons',
      [Query.equal('code', codeUpper)]
    );

    if (coupons.documents.length === 0) {
      return res.json({ success: false, message: 'Invalid coupon code' }, 400);
    }

    const coupon = coupons.documents[0];

    if (!coupon.is_active) {
      return res.json({ success: false, message: 'Coupon is no longer active' }, 400);
    }

    const now = new Date();
    
    if (coupon.starts_at && new Date(coupon.starts_at) > now) {
      return res.json({ success: false, message: 'Coupon is not yet valid' }, 400);
    }
    
    if (coupon.expires_at && new Date(coupon.expires_at) < now) {
      return res.json({ success: false, message: 'Coupon has expired' }, 400);
    }

    if (coupon.max_uses && coupon.used_count >= coupon.max_uses) {
      return res.json({ success: false, message: 'Coupon usage limit reached' }, 400);
    }

    if (coupon.min_order_amount && subtotal < coupon.min_order_amount) {
      return res.json({
        success: false,
        message: `Minimum order of $${coupon.min_order_amount} required`
      }, 400);
    }

    if (coupon.user_uses_limit && userId) {
      const userUsage = await databases.listDocuments(
        process.env.APPWRITE_DATABASE_ID,
        'coupon_usage',
        [
          Query.equal('user_id', userId),
          Query.equal('coupon_id', coupon.$id)
        ]
      );

      if (userUsage.documents.length >= coupon.user_uses_limit) {
        return res.json({
          success: false,
          message: 'You have reached the usage limit for this coupon'
        }, 400);
      }
    }

    if (coupon.applicable_products && coupon.applicable_products.length > 0) {
      const hasValidProduct = productIds.some(id => 
        coupon.applicable_products.includes(id)
      );
      if (!hasValidProduct) {
        return res.json({
          success: false,
          message: 'This coupon is not valid for items in your cart'
        }, 400);
      }
    }

    let discount = 0;
    if (coupon.type === 'percentage') {
      discount = (subtotal * coupon.value) / 100;
    } else {
      discount = coupon.value;
    }

    discount = Math.round(discount * 100) / 100;

    return res.json({
      success: true,
      data: {
        code: coupon.code,
        type: coupon.type,
        value: coupon.value,
        discount,
        description: `$${discount} off your order`
      }
    });
  } catch (error) {
    console.error('Coupon error:', error);
    return res.json({ success: false, message: error.message }, 500);
  }
};
