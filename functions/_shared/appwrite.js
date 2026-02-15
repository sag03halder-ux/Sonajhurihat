const { Client, Databases, Users } = require('node-appwrite');

function getClient() {
    const client = new Client();

    if (process.env.APPWRITE_ENDPOINT) {
        client.setEndpoint(process.env.APPWRITE_ENDPOINT);
    }
    if (process.env.APPWRITE_PROJECT) {
        client.setProject(process.env.APPWRITE_PROJECT);
    }
    if (process.env.APPWRITE_API_KEY) {
        client.setKey(process.env.APPWRITE_API_KEY);
    }

    return client;
}

const client = getClient();
const databases = new Databases(client);
const users = new Users(client);

module.exports = {
    client,
    databases,
    users
};
