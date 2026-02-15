import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const navigate = useNavigate()
  const { cart, cartTotal, clearCart, checkout } = useCart()
  const [processing, setProcessing] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    cardName: '',
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)

    try {
      await checkout({
        shippingAddress: {
          name: `${formData.firstName} ${formData.lastName}`,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
          phone: formData.phone,
        },
        paymentMethod: 'credit_card',
        email: formData.email,
      })
      
      console.log('Order placed successfully!')
      navigate('/order-confirmation')
    } catch (error) {
      console.error('Checkout failed:', error)
      alert('Checkout failed. Please try again.')
    } finally {
      setProcessing(false)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f7f6]">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">shopping_cart</span>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Add some items to your cart first.</p>
          <Link to="/products" className="bg-[#ec6d13] hover:bg-[#b8530b] text-white font-semibold py-3 px-6 rounded-lg">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  const shipping = 12.0
  const tax = cartTotal * 0.08
  const total = cartTotal + shipping + tax

  return (
    <div className="min-h-screen bg-[#f8f7f6]">
      <nav className="bg-white border-b border-neutral-200 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ec6d13] text-3xl">spa</span>
            <span className="text-2xl font-bold tracking-tight">Artisan<span className="text-[#ec6d13]">Craft</span></span>
          </Link>
          <Link to="/cart" className="text-sm font-medium text-neutral-500 hover:text-[#ec6d13]">
            Return to Cart
          </Link>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 mb-2">Secure Checkout</h1>
              <p className="text-sm text-neutral-500">Processing order via Appwrite</p>
            </div>

            <section className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-[#ec6d13]">mail</span>
                Contact Information
              </h2>
              <input
                className="w-full rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 focus:border-[#ec6d13] focus:ring-[#ec6d13] shadow-sm px-4 py-2.5"
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </section>

            <section className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-[#ec6d13]">location_on</span>
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="w-full rounded-lg border-neutral-300 bg-neutral-50 px-4 py-2.5" placeholder="First Name" id="firstName" value={formData.firstName} onChange={handleInputChange} />
                <input className="w-full rounded-lg border-neutral-300 bg-neutral-50 px-4 py-2.5" placeholder="Last Name" id="lastName" value={formData.lastName} onChange={handleInputChange} />
                <div className="col-span-1 md:col-span-2">
                  <input className="w-full rounded-lg border-neutral-300 bg-neutral-50 px-4 py-2.5" placeholder="Address" id="address" value={formData.address} onChange={handleInputChange} />
                </div>
                <input className="w-full rounded-lg border-neutral-300 bg-neutral-50 px-4 py-2.5" placeholder="City" id="city" value={formData.city} onChange={handleInputChange} />
                <div className="grid grid-cols-2 gap-4">
                  <input className="w-full rounded-lg border-neutral-300 bg-neutral-50 px-4 py-2.5" placeholder="State" id="state" value={formData.state} onChange={handleInputChange} />
                  <input className="w-full rounded-lg border-neutral-300 bg-neutral-50 px-4 py-2.5" placeholder="ZIP" id="zip" value={formData.zip} onChange={handleInputChange} />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <input className="w-full rounded-lg border-neutral-300 bg-neutral-50 px-4 py-2.5" placeholder="Phone" id="phone" value={formData.phone} onChange={handleInputChange} />
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-[#ec6d13]">credit_card</span>
                Payment
              </h2>
              <div className="space-y-4">
                <input className="w-full rounded-lg border-neutral-300 bg-neutral-50 px-4 py-2.5" placeholder="Card Number" id="cardNumber" value={formData.cardNumber} onChange={handleInputChange} />
                <div className="grid grid-cols-2 gap-4">
                  <input className="w-full rounded-lg border-neutral-300 bg-neutral-50 px-4 py-2.5" placeholder="MM/YY" id="cardExpiry" value={formData.cardExpiry} onChange={handleInputChange} />
                  <input className="w-full rounded-lg border-neutral-300 bg-neutral-50 px-4 py-2.5" placeholder="CVC" id="cardCvc" value={formData.cardCvc} onChange={handleInputChange} />
                </div>
                <input className="w-full rounded-lg border-neutral-300 bg-neutral-50 px-4 py-2.5" placeholder="Name on Card" id="cardName" value={formData.cardName} onChange={handleInputChange} />
              </div>
            </section>

            <button 
              onClick={handleSubmit} 
              disabled={processing}
              className="w-full bg-[#ec6d13] hover:bg-[#b8530b] disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all"
            >
              {processing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
            </button>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-8 bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              <div className="max-h-[400px] overflow-y-auto mb-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 mb-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-neutral-200">
                      <img alt={item.name} className="w-full h-full object-cover" src={item.image} />
                      <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-neutral-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">{item.quantity}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold">{item.name}</h3>
                      <p className="text-xs text-neutral-500">By {item.artisan}</p>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-neutral-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-sm"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
                <div className="flex justify-between text-sm"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t"><span>Total</span><span className="text-[#ec6d13]">${total.toFixed(2)}</span></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
