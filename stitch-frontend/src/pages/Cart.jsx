import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const cartItems = [
  {
    id: 1,
    name: 'Hand-woven Rattan Basket',
    variant: 'Large, Natural',
    price: 45.00,
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYmPB39NNejxIuw7-CJ-wf-IkIiwM7474oWPZsnLM_uk5EvTS6kZsZfJGqBTVFLUa8yYiCwJHlGyH7r6kakrvZvS1SDlZ5dAkrh7t9SX3_JXVV3b51cQQ-e9t42wqhxgV9X9lT_5TcR17vHEEZ-NeatHh0bzi1DYAKWUs7jCGxyPVRECpn4pYdyKxChBmfmMuEDDfBzeQJsdCMQSfVUGoeBRkn3i8NiJk6R1Sd6tAxQpMi7h63FLf3MwelGyTPT7Ti2vBNPv3SdNQ7',
    lowStock: true,
  },
  {
    id: 2,
    name: 'Ceramic Glazed Mug',
    variant: 'Teal, Finish: Matte',
    price: 22.00,
    quantity: 2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjj3xcWWg8ElUlscPiDrbfZ3LDtMvIYe1jNSPFDvSIPOrx6f66oeqxh-u6uj-xi22hngoJw7KK6BE8WjZI8vQ_oPCHTVR5tyvN-M4qgAYxNMBIz9iSmHDZ8GGEhOzVBk5vCU4ZN925YWV1gtPU9g8y6UzIarpGoCHGshakTbwYjMy8OPYe1RVEdvhhVc493ub3f-upDa1ZUdC3Gai2m5DnAE_aBUgCOxFCv0wBO2YzwL3MGxxwiWtsLehkwENicFWy-dRonaGNxqXu',
  },
  {
    id: 3,
    name: 'Macrame Wall Hanging',
    variant: 'Size: 40x60cm',
    price: 60.00,
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADsFetReGZpknGHThulAArw_JDs6wVSkrY5bXEFHLf6sIKBLJUcJJRGzNiQnxtihEglMFNUplYfHbVo8KGuT-3sY1RuIGHE9pAlm0H8PNeYu9lNjcMuM2WQhW5yN368XVvTQeu4Lb5R_n-WP8MZ7f3Rqmoorp1FpXZvjIIg1YY3SAJnOGuusc_53gi2dLPLBWnv7K4r_cIbmQviYrVQdjXHqrFNt-FLKtjsOGvPX0QFzd3dDgkVEkEWd08XDe64hDO-pbLEPdF5oP7',
  },
];

const recentlyViewed = [
  {
    id: 4,
    name: 'Rustic Clay Bowl',
    price: 28.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtkMSdFWERmi3IexNtdAO22zvjo028vqexilQXb6TdI-BQ9jbVw7IW_Pil_94fkkOb8JWJVOnfjg79NDFiFoEDWkVVOJkESXnqjVXDDBeTh1lJX2kBUlA4R1_DKYIK0e20LVK8sQhziARHYJIv4U1mPcB1h075clZpGCKzSPyDhIhU7kK2GcNOPjeFLJDs-SgR1pHWMepMJX49jG8az3Ka7Y2UXkt5h2OojndhGhonySxDqi5qi1UxiFfio_XwUETlWRXTE4rqQLts',
  },
  {
    id: 5,
    name: 'Olive Wood Spoons',
    price: 35.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5T3ffkI82TOlG9ORjDWUBUfc1bJJ8qTW32QGw-REzhGfjFqhUxB5aXH3Lpj3_o71D02416CHXlaLU4lboTO6rjYl7gUaHrFZ5UmIsSSwG2CntmziFgC38iYxMcm6gGy-NTSY-fz2Nb5d09CQiP7-vw6UPFAN63seiFZ67ylL-YpBhQtPThgujwI9yd_Jf8erQFlC4gLIUBKLbqVDhWEm5po_xYf7VFSxoDz6zpVvnMiJZBHQmx0GHQ1bYEvVKlU7f0KaOBMjFvVL0',
  },
  {
    id: 6,
    name: 'Linen Napkins (Set of 4)',
    price: 42.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDqkk7As6rQKbCqHWYk2AaJVHtFvql-hBTC3yCV7naXa5vYZxHOsj8COAgAb7WWTTSpU6LupxAiVcW6Yp9cCTRzwWNORwy2NQSjfgPSa1lBfEI5UQW7WK3KrasjZFTszz1Q77E2d740Dxfdbcnxod4ngV-88pB8DjGRshnM5DO0MItMCcA8E8S_DwfbhJfGo5PKoeY0wSkIH51tqM6-2ve3aYRDSSPj6_e05JXD9W6wPWrJVAiRQBr-fZ_KeVLBjhIOYFVABciEfH8',
  },
  {
    id: 7,
    name: 'Amber Jar Candle',
    price: 18.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVDMEu3gdIWGg6MXXDN1nqX9l7_o6eO30273GrUdUkllHIhxNh11etY1qja640GWm_KQxNFjE8m8I5EFfeFXC33GOITTFVqU8YO-9y3BYLHD4Hcz7DO72p6PQkd53E5EhWCBcU0vJlbIfFaFxStZzhvuzWkL73jJw5Ww6942vfBJjMSIWl78okdo9vG-LosiasiMjF8Xen1a5feAtQqaoGdfMkXwJZlcU_7Ob44jeH-jb1TCawvXFSey4phnfks8HfO17RVbFgaV_Xsr',
  },
];

export default function Cart() {
  const [items, setItems] = useState(cartItems);
  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id, delta) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 12.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-[#f8f7f6]">
      {/* Header */}
      <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <span className="material-icons-outlined text-[#ec6d13] text-3xl">spa</span>
              <span className="text-2xl font-bold text-neutral-900 tracking-tight">
                Artisan<span className="text-[#ec6d13]">Craft</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-neutral-600 font-medium">
              <Link to="/" className="hover:text-[#ec6d13] transition-colors">Shop</Link>
              <Link to="/" className="hover:text-[#ec6d13] transition-colors">Collections</Link>
              <Link to="/" className="hover:text-[#ec6d13] transition-colors">Artisans</Link>
              <Link to="/" className="hover:text-[#ec6d13] transition-colors">About</Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-neutral-500 hover:text-[#ec6d13] transition-colors">
                <span className="material-icons-outlined">search</span>
              </button>
              <Link to="/login" className="p-2 text-neutral-500 hover:text-[#ec6d13] transition-colors">
                <span className="material-icons-outlined">person</span>
              </Link>
              <Link to="/cart" className="p-2 relative text-[#ec6d13]">
                <span className="material-icons-outlined">shopping_bag</span>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-neutral-800 rounded-full">
                  {items.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex mb-8 text-sm text-neutral-500">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center hover:text-[#ec6d13] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-icons-outlined text-base mx-2">chevron_right</span>
                <Link to="/" className="hover:text-[#ec6d13] transition-colors">Shop</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="material-icons-outlined text-base mx-2">chevron_right</span>
                <span className="text-neutral-900 font-medium">Shopping Cart</span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
          Your Cart ({items.length} {items.length === 1 ? 'Item' : 'Items'})
        </h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Cart Items */}
          <div className="lg:col-span-8">
            {/* Table Header for Desktop */}
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-neutral-200 text-sm font-medium text-neutral-500 uppercase tracking-wider">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {/* Cart Items List */}
            <div className="flex flex-col space-y-6 md:space-y-0">
              {items.map((item) => (
                <div key={item.id} className="md:grid md:grid-cols-12 md:gap-4 items-center py-6 border-b border-neutral-200 group">
                  {/* Product Details */}
                  <div className="col-span-6 flex gap-6">
                    <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-neutral-100 relative group-hover:shadow-md transition-shadow">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-semibold text-neutral-900">{item.name}</h3>
                      <p className="text-sm text-neutral-500 mt-1">{item.variant}</p>
                      {item.lowStock && (
                        <p className="text-xs text-[#ec6d13] mt-2 font-medium">Only 2 left in stock!</p>
                      )}
                    </div>
                  </div>

                  {/* Price (Mobile hidden, Desktop shown) */}
                  <div className="hidden md:block col-span-2 text-center text-neutral-900 font-medium">
                    ${item.price.toFixed(2)}
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex justify-between md:justify-center items-center col-span-2 mt-4 md:mt-0">
                    <label className="md:hidden text-sm font-medium text-neutral-500">Qty:</label>
                    <div className="flex items-center border border-neutral-200 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-[#ec6d13] hover:bg-neutral-50 transition-colors rounded-l-lg"
                      >
                        <span className="material-icons-outlined text-sm">remove</span>
                      </button>
                      <input
                        className="w-10 h-8 text-center text-sm border-none bg-transparent focus:ring-0 p-0 text-neutral-900"
                        readOnly
                        type="text"
                        value={item.quantity}
                      />
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-[#ec6d13] hover:bg-neutral-50 transition-colors rounded-r-lg"
                      >
                        <span className="material-icons-outlined text-sm">add</span>
                      </button>
                    </div>
                  </div>

                  {/* Total & Remove */}
                  <div className="flex justify-between md:block col-span-2 mt-4 md:mt-0 text-right">
                    <div className="md:hidden text-lg font-bold text-neutral-900">${(item.price * item.quantity).toFixed(2)}</div>
                    <div className="hidden md:block text-lg font-bold text-neutral-900">${(item.price * item.quantity).toFixed(2)}</div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-2 text-sm text-neutral-400 hover:text-red-500 transition-colors flex items-center justify-end w-full md:w-auto gap-1"
                    >
                      <span className="material-icons-outlined text-base">delete</span>
                      <span className="md:hidden">Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/" className="inline-flex items-center text-[#ec6d13] font-medium hover:underline">
                <span className="material-icons-outlined text-lg mr-2">west</span>
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <div className="bg-white border border-neutral-200 rounded-xl p-6 lg:p-8 shadow-sm lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-neutral-900 mb-6 border-b border-neutral-100 pb-4">Order Summary</h2>

              {/* Cost Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <div className="flex flex-col">
                    <span>Shipping Estimate</span>
                    <a className="text-xs text-[#ec6d13] hover:underline mt-0.5" href="#">Calculate shipping</a>
                  </div>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Tax Estimate</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Coupon Input */}
              <div className="mb-6 pt-6 border-t border-neutral-100">
                <label className="block text-sm font-medium text-neutral-700 mb-2">Coupon Code</label>
                <div className="flex gap-2">
                  <input
                    className="block w-full rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:border-[#ec6d13] focus:ring-[#ec6d13] sm:text-sm"
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

              {/* Grand Total */}
              <div className="flex justify-between items-center py-6 border-t border-neutral-100 mb-6">
                <span className="text-lg font-bold text-neutral-900">Total</span>
                <span className="text-2xl font-bold text-[#ec6d13]">${total.toFixed(2)}</span>
              </div>

              {/* Main Action */}
              <button className="w-full bg-[#ec6d13] hover:bg-[#b8530b] text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group">
                Proceed to Checkout
                <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">east</span>
              </button>

              {/* Trust Signals */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="material-icons-outlined text-lg text-[#ec6d13]/80">verified_user</span>
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="material-icons-outlined text-lg text-[#ec6d13]/80">local_shipping</span>
                  <span>Free returns</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="material-icons-outlined text-lg text-[#ec6d13]/80">eco</span>
                  <span>Carbon Neutral</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="material-icons-outlined text-lg text-[#ec6d13]/80">support_agent</span>
                  <span>24/7 Support</span>
                </div>
              </div>

              {/* Accepted Payments */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex justify-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="h-6 w-10 bg-neutral-200 rounded flex items-center justify-center text-[8px] font-bold text-neutral-500">VISA</div>
                <div className="h-6 w-10 bg-neutral-200 rounded flex items-center justify-center text-[8px] font-bold text-neutral-500">MC</div>
                <div className="h-6 w-10 bg-neutral-200 rounded flex items-center justify-center text-[8px] font-bold text-neutral-500">AMEX</div>
                <div className="h-6 w-10 bg-neutral-200 rounded flex items-center justify-center text-[8px] font-bold text-neutral-500">PP</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Viewed Section */}
        <div className="mt-20 pt-10 border-t border-neutral-200">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recentlyViewed.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden relative mb-4">
                  <img
                    alt={item.name}
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#ec6d13] hover:text-white transition-colors text-neutral-900">
                    <span className="material-icons-outlined text-sm">add_shopping_cart</span>
                  </button>
                </div>
                <h3 className="font-medium text-neutral-900">{item.name}</h3>
                <p className="text-neutral-500 text-sm">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-neutral-500">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="material-icons-outlined text-[#ec6d13] text-xl">spa</span>
            <span className="text-lg font-bold text-neutral-900 tracking-tight">
              Artisan<span className="text-[#ec6d13]">Craft</span>
            </span>
          </div>
          <p>© 2023 ArtisanCraft Inc. Handmade with love.</p>
        </div>
      </footer>
    </div>
  );
}
