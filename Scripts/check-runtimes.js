const sdk = require('node-appwrite');
require('dotenv').config();

const client = new sdk.Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_API_KEY);

const functions = new sdk.Functions(client);

async function listRuntimes() {
    try {
        console.log('Attempting to create function with invalid runtime to get supported list...');
        await functions.create(
            sdk.ID.unique(),
            'temp-runtime-check',
            'invalid-runtime'
        );
    } catch (error) {
        console.log('Received expected error. details:', error.message);
        if (error.response) {
            console.log('Response:', JSON.stringify(error.response, null, 2));
        }
    }
}

listRuntimes();
