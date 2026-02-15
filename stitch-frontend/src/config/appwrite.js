// Appwrite Configuration for Stitch Frontend
// This file contains the configuration for connecting to Appwrite services

export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  projectId: 'YOUR_PROJECT_ID',
  databaseId: 'YOUR_DATABASE_ID',
  usersCollectionId: 'users',
  productsCollectionId: 'products',
  ordersCollectionId: 'orders',
  buckets: {
    products: 'YOUR_PRODUCTS_BUCKET_ID',
    avatars: 'YOUR_AVATARS_BUCKET_ID',
  },
};

// For local development, you can use these values
export const appwriteConfigDev = {
  endpoint: 'http://localhost/v1',
  projectId: 'stitch-dev',
  databaseId: 'stitch-db',
  usersCollectionId: 'users',
  productsCollectionId: 'products',
  ordersCollectionId: 'orders',
  buckets: {
    products: 'products',
    avatars: 'avatars',
  },
};

export default appwriteConfig;
