import { Client, Databases, Account, Storage, ID, Query } from 'appwrite'

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT

const client = new Client()
  .setEndpoint(ENDPOINT)
  .setProject(PROJECT_ID)

export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)

export { client, ID, Query, DATABASE_ID }

const DEMO_MODE = false

export async function loginUser(email, password) {
  console.log('🔐 Appwrite: Attempting login for:', email)

  if (DEMO_MODE) {
    console.log('📝 Demo mode: Simulating login')
    return { $id: 'demo-user', email, name: 'Demo User' }
  }

  try {
    const session = await account.createEmailSession(email, password)
    console.log('✅ Appwrite: Session created', session.$id)
    const user = await account.get()
    console.log('✅ Appwrite: User logged in', user)
    return user
  } catch (error) {
    console.error('❌ Appwrite Login failed:', error.message)
    throw error
  }
}

export async function registerUser(email, password, name) {
  console.log('🔐 Appwrite: Attempting registration for:', email)

  if (DEMO_MODE) {
    console.log('📝 Demo mode: Simulating registration')
    return { $id: 'demo-user-' + Date.now(), email, name }
  }

  try {
    await account.create(ID.unique(), email, password, name)
    console.log('✅ Appwrite: User created')
    const session = await account.createEmailSession(email, password)
    console.log('✅ Appwrite: Session created after registration')
    const user = await account.get()
    console.log('✅ Appwrite: User registered and logged in', user)
    return user
  } catch (error) {
    console.error('❌ Appwrite Registration failed:', error.message)
    throw error
  }
}

export async function logoutUser() {
  console.log('🔐 Appwrite: Logging out')

  if (DEMO_MODE) {
    console.log('📝 Demo mode: Simulating logout')
    return
  }

  try {
    await account.deleteSession('current')
    console.log('✅ Appwrite: Logged out')
  } catch (error) {
    console.error('❌ Appwrite Logout failed:', error.message)
  }
}

export async function getCurrentUser() {
  if (DEMO_MODE) {
    return null
  }

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
  console.log('📦 Appwrite: Creating order:', orderData)

  if (DEMO_MODE) {
    console.log('📝 Demo mode: Simulating order creation')
    return { $id: 'demo-order-' + Date.now(), ...orderData }
  }

  try {
    const order = await databases.createDocument(DATABASE_ID, 'orders', ID.unique(), orderData)
    console.log('✅ Appwrite: Order created', order.$id)
    return order
  } catch (error) {
    console.error('❌ Appwrite Order creation failed:', error.message)
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
