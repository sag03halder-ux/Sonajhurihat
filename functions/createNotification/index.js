const { Client, Databases, ID } = require('node-appwrite');

module.exports = async function (req, res) {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);

  if (!req.payload || !req.payload.userId || !req.payload.type || !req.payload.title || !req.payload.message) {
    return res.json({ 
      success: false, 
      message: 'userId, type, title, and message required' 
    }, 400);
  }

  const { userId, type, title, message, data = {} } = req.payload;

  try {
    const notificationData = {
      user_id: userId,
      type,
      title,
      message,
      data,
      is_read: false,
      read_at: null,
      created_at: new Date().toISOString()
    };

    const notification = await databases.createDocument(
      process.env.APPWRITE_DATABASE_ID,
      'notifications',
      ID.unique(),
      notificationData
    );

    return res.json({
      success: true,
      data: {
        notificationId: notification.$id,
        userId,
        type,
        title
      }
    });
  } catch (error) {
    console.error('Create notification error:', error);
    return res.json({ success: false, message: error.message }, 500);
  }
};
