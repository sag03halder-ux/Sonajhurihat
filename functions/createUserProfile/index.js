const { Client, Databases, Users } = require('node-appwrite');

module.exports = async function (req, res) {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);
  const users = new Users(client);

  if (!req.payload || !req.payload.userId) {
    return res.json({ success: false, message: 'No userId provided' }, 400);
  }

  const userId = req.payload.userId;

  try {
    const user = await users.get(userId);
    const email = user.email || '';
    const name = user.name || '';
    const nameParts = name.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const profileData = {
      user_id: userId,
      first_name: firstName,
      last_name: lastName,
      phone: '',
      avatar: '',
      role: 'customer',
      is_verified: user.emailVerification || false,
      newsletter_subscribed: false,
      preferences: {},
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    await databases.createDocument(
      process.env.APPWRITE_DATABASE_ID,
      'profiles',
      userId,
      profileData
    );

    return res.json({
      success: true,
      message: 'Profile created',
      data: profileData
    });
  } catch (error) {
    console.error('Profile creation error:', error);
    
    if (error.code === 409) {
      return res.json({ success: true, message: 'Profile already exists' });
    }
    
    return res.json({ success: false, message: error.message }, 500);
  }
};
