import { createContext, useContext, useState, useEffect } from 'react'
import { getCurrentUser, createOrder } from '../services/appwrite'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadUser()
    loadCart()
  }, [])

  const loadUser = async () => {
    try {
      const userData = await getCurrentUser()
      setUser(userData)
    } catch {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const loadCart = () => {
    const savedCart = localStorage.getItem('stitch-cart')
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch {
        setCart([])
      }
    }
  }

  const saveCart = (newCart) => {
    localStorage.setItem('stitch-cart', JSON.stringify(newCart))
    setCart(newCart)
  }

  const addToCart = async (product, quantity = 1) => {
    const existing = cart.find(item => item.id === product.id)
    let newCart
    
    if (existing) {
      newCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
    } else {
      newCart = [...cart, { ...product, quantity }]
    }
    
    saveCart(newCart)
    
    console.log('Added to cart (Appwrite):', { product, quantity, userId: user?.$id })
  }

  const removeFromCart = (productId) => {
    const newCart = cart.filter(item => item.id !== productId)
    saveCart(newCart)
    console.log('Removed from cart (Appwrite):', { productId })
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    const newCart = cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    )
    saveCart(newCart)
    console.log('Updated quantity (Appwrite):', { productId, quantity })
  }

  const clearCart = () => {
    saveCart([])
  }

  const checkout = async (orderData) => {
    const orderItems = cart.map(item => ({
      productId: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
    }))

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const orderPayload = {
      userId: user?.$id || 'guest',
      items: orderItems,
      total,
      status: 'pending',
      shippingAddress: orderData.shippingAddress,
      paymentMethod: orderData.paymentMethod,
      createdAt: new Date().toISOString(),
    }

    try {
      const order = await createOrder(orderPayload)
      console.log('Order created in Appwrite:', order)
      clearCart()
      return order
    } catch (error) {
      console.error('Checkout error:', error)
      throw error
    }
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, clearCart,
      cartTotal, cartCount, user, checkout, loading
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
