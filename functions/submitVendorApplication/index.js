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
    userId,
    shopName,
    description,
    location,
    story,
    certifications = [],
    socialLinks = {}
  } = req.payload;

  if (!userId || !shopName) {
    return res.json({ success: false, message: 'userId and shopName required' }, 400);
  }

  try {
    const shopSlug = shopName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') + '-' + Date.now().toString(36);

    const vendorData = {
      user_id: userId,
      shop_name: shopName,
      shop_slug: shopSlug,
      description: description || '',
      logo: '',
      banner: '',
      story: story || '',
      location: location || '',
      certifications,
      social_links: socialLinks,
      payout_method: {},
      payout_schedule: 'monthly',
      commission_rate: 15.0,
      rating: 0,
      total_sales: 0,
      total_revenue: 0,
      status: 'pending',
      approved_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    const vendor = await databases.createDocument(
      process.env.APPWRITE_DATABASE_ID,
      'vendors',
      ID.unique(),
      vendorData
    );

    const profiles = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      'profiles',
      [Query.equal('user_id', userId)]
    );

    if (profiles.documents.length > 0) {
      await databases.updateDocument(
        process.env.APPWRITE_DATABASE_ID,
        'profiles',
        profiles.documents[0].$id,
        {
          role: 'vendor',
          updated_at: new Date().toISOString()
        }
      );
    }

    return res.json({
      success: true,
      message: 'Vendor application submitted',
      data: {
        vendorId: vendor.$id,
        shopSlug: vendor.shop_slug,
        status: vendor.status
      }
    });
  } catch (error) {
    console.error('Vendor application error:', error);
    
    if (error.code === 409) {
      return res.json({ success: false, message: 'Vendor account already exists' }, 409);
    }
    
    return res.json({ success: false, message: error.message }, 500);
  }
};
