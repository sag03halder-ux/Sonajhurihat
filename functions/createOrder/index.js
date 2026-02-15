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
    userId,
    items = [],
    shippingAddress,
    billingAddress,
    paymentMethod,
    paymentId,
    subtotal,
    shippingCost,
    taxAmount,
    discountAmount = 0,
    total,
    couponCode,
    notes
  } = req.payload;

  if (!userId || !items.length || !shippingAddress || !paymentMethod) {
    return res.json({
      success: false,
      message: 'Missing required fields: userId, items, shippingAddress, paymentMethod'
    }, 400);
  }

  const orderNumber = 'ORD-' + Date.now().toString(36).toUpperCase();

  try {
    const orderData = {
      order_number: orderNumber,
      user_id: userId,
      status: 'pending',
      subtotal: parseFloat(subtotal),
      shipping_cost: parseFloat(shippingCost),
      tax_amount: parseFloat(taxAmount),
      discount_amount: parseFloat(discountAmount),
      total: parseFloat(total),
      currency: 'USD',
      shipping_address: shippingAddress,
      billing_address: billingAddress || shippingAddress,
      payment_method: paymentMethod,
      payment_id: paymentId || '',
      payment_status: 'pending',
      notes: notes || '',
      admin_notes: '',
      tracking_number: '',
      carrier: '',
      shipped_at: null,
      delivered_at: null,
      cancelled_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const order = await databases.createDocument(
      process.env.APPWRITE_DATABASE_ID,
      'orders',
      ID.unique(),
      orderData
    );

    const vendorOrders = {};

    for (const item of items) {
      const product = await databases.getDocument(
        process.env.APPWRITE_DATABASE_ID,
        'products',
        item.productId
      );

      if (!vendorOrders[product.vendor_id]) {
        vendorOrders[product.vendor_id] = [];
      }

      vendorOrders[product.vendor_id].push(item);

      const orderItemData = {
        order_id: order.$id,
        product_id: item.productId,
        variant_id: item.variantId || null,
        vendor_id: product.vendor_id,
        name: item.name || product.name,
        sku: item.sku || product.sku,
        image_url: item.imageUrl || '',
        price: parseFloat(item.price),
        quantity: parseInt(item.quantity),
        total: parseFloat(item.price) * parseInt(item.quantity),
        status: 'pending',
        created_at: new Date().toISOString()
      };

      await databases.createDocument(
        process.env.APPWRITE_DATABASE_ID,
        'order_items',
        ID.unique(),
        orderItemData
      );

      const newStock = Math.max(0, (product.stock_quantity || 0) - item.quantity);
      const newSold = (product.sold_count || 0) + item.quantity;

      await databases.updateDocument(
        process.env.APPWRITE_DATABASE_ID,
        'products',
        item.productId,
        {
          stock_quantity: newStock,
          sold_count: newSold,
          updated_at: new Date().toISOString()
        }
      );
    }

    for (const cartItem of items) {
      const cartItems = await databases.listDocuments(
        process.env.APPWRITE_DATABASE_ID,
        'cart_items',
        [
          Query.equal('user_id', userId),
          Query.equal('product_id', cartItem.productId)
        ]
      );

      for (const ci of cartItems.documents) {
        await databases.deleteDocument(
          process.env.APPWRITE_DATABASE_ID,
          'cart_items',
          ci.$id
        );
      }
    }

    if (couponCode) {
      const coupons = await databases.listDocuments(
        process.env.APPWRITE_DATABASE_ID,
        'coupons',
        [Query.equal('code', couponCode.toUpperCase())]
      );

      if (coupons.documents.length > 0) {
        const coupon = coupons.documents[0];
        await databases.updateDocument(
          process.env.APPWRITE_DATABASE_ID,
          'coupons',
          coupon.$id,
          {
            used_count: (coupon.used_count || 0) + 1
          }
        );
      }
    }

    return res.json({
      success: true,
      data: {
        orderId: order.$id,
        orderNumber: order.order_number,
        total: order.total,
        status: order.status,
        createdAt: order.created_at
      }
    });
  } catch (error) {
    console.error('Create order error:', error);
    return res.json({ success: false, message: error.message }, 500);
  }
};
