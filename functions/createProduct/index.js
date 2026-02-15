const { Client, Databases, ID } = require('node-appwrite');

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
    vendorId, 
    categoryId, 
    name, 
    description, 
    shortDescription,
    price, 
    comparePrice,
    stockQuantity,
    sku,
    weight,
    dimensions,
    materials,
    origin,
    tags,
    isActive = true,
    isFeatured = false,
    isDigital = false,
    handlingTime = 3,
    images = []
  } = req.payload;

  if (!vendorId || !categoryId || !name || !price) {
    return res.json({ success: false, message: 'Missing required fields' }, 400);
  }

  try {
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') + '-' + Date.now().toString(36);

    const productData = {
      vendor_id: vendorId,
      category_id: categoryId,
      name,
      slug,
      description,
      short_description: shortDescription || '',
      price: parseFloat(price),
      compare_price: comparePrice ? parseFloat(comparePrice) : null,
      cost_per_item: null,
      stock_quantity: parseInt(stockQuantity) || 0,
      sku: sku || '',
      weight: weight ? parseFloat(weight) : null,
      dimensions: dimensions || {},
      materials: materials || [],
      origin: origin || '',
      tags: tags || [],
      is_active: isActive,
      is_featured: isFeatured,
      is_digital: isDigital,
      handling_time: parseInt(handlingTime) || 3,
      rating: 0,
      review_count: 0,
      view_count: 0,
      sold_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const product = await databases.createDocument(
      process.env.APPWRITE_DATABASE_ID,
      'products',
      ID.unique(),
      productData
    );

    for (let i = 0; i < images.length; i++) {
      const imageData = {
        product_id: product.$id,
        image_url: images[i].url,
        thumbnail_url: images[i].thumbnailUrl || images[i].url,
        alt_text: images[i].alt || name,
        sort_order: i,
        is_primary: i === 0
      };

      await databases.createDocument(
        process.env.APPWRITE_DATABASE_ID,
        'product_images',
        ID.unique(),
        imageData
      );
    }

    return res.json({
      success: true,
      message: 'Product created',
      data: product
    });
  } catch (error) {
    console.error('Create product error:', error);
    return res.json({ success: false, message: error.message }, 500);
  }
};
