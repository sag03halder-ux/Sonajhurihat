const { Client, Databases, Query } = require('node-appwrite');

module.exports = async function (req, res) {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);

  if (!req.payload || !req.payload.userId) {
    return res.json({ success: false, message: 'userId required' }, 400);
  }

  const { userId, address, shippingMethod = 'standard' } = req.payload;

  try {
    const cartItems = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      'cart_items',
      [Query.equal('user_id', userId)]
    );

    if (cartItems.documents.length === 0) {
      return res.json({
        success: false,
        message: 'Cart is empty'
      }, 400);
    }

    let subtotal = 0;
    let totalItems = 0;
    const items = [];
    const outOfStock = [];

    for (const cartItem of cartItems.documents) {
      try {
        const product = await databases.getDocument(
          process.env.APPWRITE_DATABASE_ID,
          'products',
          cartItem.product_id
        );

        if (!product.is_active) {
          return res.json({
            success: false,
            message: `Product "${product.name}" is no longer available`
          }, 400);
        }

        if (product.stock_quantity < cartItem.quantity) {
          outOfStock.push({
            productId: product.$id,
            name: product.name,
            available: product.stock_quantity,
            requested: cartItem.quantity
          });
        }

        const price = product.price;
        const lineTotal = price * cartItem.quantity;

        subtotal += lineTotal;
        totalItems += cartItem.quantity;

        items.push({
          productId: product.$id,
          name: product.name,
          price,
          quantity: cartItem.quantity,
          lineTotal,
          image: product.is_featured
        });
      } catch (prodError) {
        console.error('Error fetching product:', prodError);
      }
    }

    if (outOfStock.length > 0) {
      return res.json({
        success: false,
        message: 'Some items are out of stock',
        outOfStock
      }, 400);
    }

    let shippingCost = 0;
    const shippingOptions = {
      standard: 5.99,
      express: 12.99,
      free: 0
    };
    shippingCost = shippingOptions[shippingMethod] || 5.99;

    if (subtotal >= 100) {
      shippingCost = 0;
    }

    const taxRate = 0.08;
    const taxAmount = Math.round(subtotal * taxRate * 100) / 100;

    const total = subtotal + shippingCost + taxAmount;

    return res.json({
      success: true,
      data: {
        items,
        itemCount: totalItems,
        subtotal: Math.round(subtotal * 100) / 100,
        shippingCost,
        shippingMethod,
        taxAmount,
        total: Math.round(total * 100) / 100,
        currency: 'USD',
        freeShipping: subtotal >= 100
      }
    });
  } catch (error) {
    console.error('Calculate totals error:', error);
    return res.json({ success: false, message: error.message }, 500);
  }
};
