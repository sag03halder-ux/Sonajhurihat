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

  const { vendorId, status, commissionRate, adminNotes } = req.payload;

  const validStatuses = ['approved', 'suspended', 'pending'];
  if (status && !validStatuses.includes(status)) {
    return res.json({ success: false, message: 'Invalid status' }, 400);
  }

  try {
    const vendor = await databases.getDocument(
      process.env.APPWRITE_DATABASE_ID,
      'vendors',
      vendorId
    );

    const updateData = {
      updated_at: new Date().toISOString()
    };

    if (status) {
      updateData.status = status;
      
      if (status === 'approved') {
        updateData.approved_at = new Date().toISOString();
      }
    }

    if (commissionRate !== undefined) {
      updateData.commission_rate = parseFloat(commissionRate);
    }

    if (adminNotes) {
      updateData.admin_notes = adminNotes;
    }

    const updatedVendor = await databases.updateDocument(
      process.env.APPWRITE_DATABASE_ID,
      'vendors',
      vendorId,
      updateData
    );

    return res.json({
      success: true,
      data: {
        vendorId: updatedVendor.$id,
        shopName: updatedVendor.shop_name,
        status: updatedVendor.status,
        approvedAt: updatedVendor.approved_at
      }
    });
  } catch (error) {
    console.error('Approve vendor error:', error);
    return res.json({ success: false, message: error.message }, 500);
  }
};
