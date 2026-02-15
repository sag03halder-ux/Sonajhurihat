import { Client, Databases, Account, Storage, ID, Query } from 'appwrite'

const PROJECT_ID = 'stitch-demo'
const DATABASE_ID = 'stitch-db'
const ENDPOINT = 'https://cloud.appwrite.io/v1'

const client = new Client()
  .setEndpoint(ENDPOINT)
  .setProject(PROJECT_ID)

export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)

export { client, ID, Query, DATABASE_ID }

export async function loginUser(email, password) {
  try {
    await account.createEmailSession(email, password)
    return await account.get()
  } catch (error) {
    console.error('Login error:', error)
    throw error
  }
}

export async function registerUser(email, password, name) {
  try {
    await account.create(ID.unique(), email, password, name)
    await account.createEmailSession(email, password)
    return await account.get()
  } catch (error) {
    console.error('Register error:', error)
    throw error
  }
}

export async function logoutUser() {
  try {
    await account.deleteSession('current')
  } catch (error) {
    console.error('Logout error:', error)
  }
}

export async function getCurrentUser() {
  try {
    return await account.get()
  } catch {
    return null
  }
}

export async function getProducts() {
  try {
    const response = await databases.listDocuments(DATABASE_ID, 'products')
    return response.documents
  } catch (error) {
    console.error('Get products error:', error)
    return []
  }
}

export async function getProduct(id) {
  try {
    return await databases.getDocument(DATABASE_ID, 'products', id)
  } catch (error) {
    console.error('Get product error:', error)
    return null
  }
}

export async function createOrder(orderData) {
  try {
    return await databases.createDocument(DATABASE_ID, 'orders', ID.unique(), orderData)
  } catch (error) {
    console.error('Create order error:', error)
    throw error
  }
}

export async function getOrders(userId) {
  try {
    return await databases.listDocuments(DATABASE_ID, 'orders', [
      Query.equal('userId', userId)
    ])
  } catch (error) {
    console.error('Get orders error:', error)
    return { documents: [] }
  }
}

export async function getAddresses(userId) {
  try {
    return await databases.listDocuments(DATABASE_ID, 'addresses', [
      Query.equal('userId', userId)
    ])
  } catch (error) {
    console.error('Get addresses error:', error)
    return { documents: [] }
  }
}

export async function createAddress(addressData) {
  try {
    return await databases.createDocument(DATABASE_ID, 'addresses', ID.unique(), addressData)
  } catch (error) {
    console.error('Create address error:', error)
    throw error
  }
}

export default client
