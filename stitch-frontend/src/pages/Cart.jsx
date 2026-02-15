import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart()
  const [promoCode, setPromoCode] = useState('')

  const shipping = cart.length > 0 ? 12.00 : 0
  const tax = cartTotal * 0.08
  const total = cartTotal + shipping + tax

  const recentlyViewed = products.slice(0, 4)

  return (
    <div className="min-h-screen bg-[#f8f7f6]">
      <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ec6d13] text-3xl">spa</span>
              <span className="text-2xl font-bold text-neutral-900 tracking-tight">
                Artisan<span className="text-[#ec6d13]">Craft</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-neutral-600 font-medium">
              <Link to="/" className="hover:text-[#ec6d13] transition-colors">Shop</Link>
              <Link to="/artisans" className="hover:text-[#ec6d13] transition-colors">Artisans</Link>
              <Link to="/faq" className="hover:text-[#ec6d13] transition-colors">About</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/search" className="p-2 text-neutral-500 hover:text-[#ec6d13] transition-colors">
                <span className="material-symbols-outlined">search</span>
              </Link>
              <Link to="/login" className="p-2 text-neutral-500 hover:text-[#ec6d13] transition-colors">
                <span className="material-symbols-outlined">person</span>
              </Link>
              <Link to="/cart" className="p-2 relative text-[#ec6d13]">
                <span className="material-symbols-outlined">shopping_bag</span>
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-neutral-800 rounded-full">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="flex mb-8 text-sm text-neutral-500">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center hover:text-[#ec6d13] transition-colors">Home</Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-base mx-2">chevron_right</span>
                <Link to="/products" className="hover:text-[#ec6d13] transition-colors">Shop</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-base mx-2">chevron_right</span>
                <span className="text-neutral-900 font-medium">Shopping Cart</span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
          Your Cart ({cart.length} {cart.length === 1 ? 'Item' : 'Items'})
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-neutral-300 mb-4">shopping_cart</span>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Your cart is empty</h2>
            <p className="text-neutral-500 mb-6">Looks like you haven't added any items yet.</p>
            <Link to="/products" className="inline-flex bg-[#ec6d13] hover:bg-[#b8530b] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
            <div className="lg:col-span-8">
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-neutral-200 text-sm font-medium text-neutral-500 uppercase tracking-wider">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <div className="flex flex-col space-y-6 md:space-y-0">
                {cart.map((item) => (
                  <div key={item.id} className="md:grid md:grid-cols-12 md:gap-4 items-center py-6 border-b border-neutral-200 group">
                    <div className="col-span-6 flex gap-6">
                      <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-neutral-100 relative group-hover:shadow-md transition-shadow">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="text-lg font-semibold text-neutral-900">{item.name}</h3>
                        <p className="text-sm text-neutral-500 mt-1">By {item.artisan}</p>
                      </div>
                    </div>

                    <div className="hidden md:block col-span-2 text-center text-neutral-900 font-medium">
                      ${item.price.toFixed(2)}
                    </div>

                    <div className="flex justify-between md:justify-center items-center col-span-2 mt-4 md:mt-0">
                      <div className="flex items-center border border-neutral-200 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-[#ec6d13] hover:bg-neutral-50 transition-colors rounded-l-lg"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="w-10 h-8 flex items-center justify-center text-sm border-none bg-transparent text-neutral-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-[#ec6d13] hover:bg-neutral-50 transition-colors rounded-r-lg"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between md:block col-span-2 mt-4 md:mt-0 text-right">
                      <div className="hidden md:block text-lg font-bold text-neutral-900">${(item.price * item.quantity).toFixed(2)}</div>
                      <div className="md:hidden text-lg font-bold text-neutral-900">${(item.price * item.quantity).toFixed(2)}</div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-2 text-sm text-neutral-400 hover:text-red-500 transition-colors flex items-center justify-end w-full md:w-auto gap-1"
                      >
                        <span className="material-symbols-outlined text-base">delete</span>
                        <span className="md:hidden">Remove</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/products" className="inline-flex items-center text-[#ec6d13] font-medium hover:underline">
                  <span className="material-symbols-outlined text-lg mr-2">west</span>
                  Continue Shopping
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 mt-12 lg:mt-0">
              <div className="bg-white border border-neutral-200 rounded-xl p-6 lg:p-8 shadow-sm lg:sticky lg:top-28">
                <h2 className="text-xl font-bold text-neutral-900 mb-6 border-b border-neutral-100 pb-4">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-neutral-600">
                    <span>Subtotal</span>
                    <span className="font-medium">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mb-6 pt-6 border-t border-neutral-100">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Coupon Code</label>
                  <div className="flex gap-2">
                    <input
                      className="block w-full rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:border-[#ec6d13] focus:ring-[#ec6d13] sm:text-sm px-3 py-2"
                      placeholder="Enter code"
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button className="px-4 py-2 border border-[#ec6d13] text-[#ec6d13] font-medium rounded-lg hover:bg-[#ec6d13] hover:text-white transition-all text-sm whitespace-nowrap">
                      Apply
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center py-6 border-t border-neutral-100 mb-6">
                  <span className="text-lg font-bold text-neutral-900">Total</span>
                  <span className="text-2xl font-bold text-[#ec6d13]">${total.toFixed(2)}</span>
                </div>

                <Link to="/checkout" className="w-full bg-[#ec6d13] hover:bg-[#b8530b] text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group">
                  Proceed to Checkout
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">east</span>
                </Link>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="material-symbols-outlined text-lg text-[#ec6d13]/80">verified_user</span>
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="material-symbols-outlined text-lg text-[#ec6d13]/80">local_shipping</span>
                    <span>Free returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {cart.length > 0 && (
        <div className="mt-20 pt-10 border-t border-neutral-200">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recentlyViewed.map((item) => (
              <Link key={item.id} to={`/products/${item.id}`} className="group cursor-pointer">
                <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden relative mb-4">
                  <img alt={item.name} src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-medium text-neutral-900">{item.name}</h3>
                <p className="text-neutral-500 text-sm">${item.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <footer className="bg-white border-t border-neutral-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-neutral-500">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[#ec6d13] text-xl">spa</span>
            <span className="text-lg font-bold text-neutral-900 tracking-tight">Artisan<span className="text-[#ec6d13]">Craft</span></span>
          </div>
          <p>© 2023 ArtisanCraft Inc. Handmade with love.</p>
        </div>
      </footer>
    </div>
  )
}
