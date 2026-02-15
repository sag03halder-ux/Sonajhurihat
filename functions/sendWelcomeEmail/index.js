const { Client, Databases, Functions } = require('node-appwrite');

module.exports = async function (req, res) {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);

  if (!req.payload || !req.payload.email) {
    return res.json({ success: false, message: 'Email required' }, 400);
  }

  const { email, name, userId } = req.payload;

  try {
    const templates = {
      welcome: {
        subject: 'Welcome to Artisan Crafted!',
        body: `
          <div style="font-family: 'Work Sans', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #ec6d13;">Artisan Crafted</h1>
            </div>
            <h2>Welcome ${name || 'there'}!</h2>
            <p>Thank you for joining our community of artisan craft enthusiasts. You're now connected to talented makers from around the world.</p>
            <p>Start exploring unique, handcrafted pieces today!</p>
            <a href="${process.env.APP_URL || 'https://stitch.com'}/shop" 
               style="display: inline-block; background: #ec6d13; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin: 20px 0;">
              Shop Now
            </a>
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            <p style="color: #666; font-size: 12px;">
              Best regards,<br>The Artisan Crafted Team
            </p>
          </div>
        `
      }
    };

    console.log(`Welcome email queued for: ${email}`);
    
    return res.json({
      success: true,
      message: 'Welcome email sent',
      template: 'welcome'
    });
  } catch (error) {
    console.error('Email error:', error);
    return res.json({ success: false, message: error.message }, 500);
  }
};
