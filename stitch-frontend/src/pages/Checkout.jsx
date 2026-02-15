import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Checkout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    country: 'United States',
    firstName: 'Amelia',
    lastName: 'Harper',
    address: '123 Artisan Way, Apt 4B',
    city: 'Portland',
    state: 'Oregon',
    zip: '97205',
    phone: '+1 (555) 123-4567',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    cardName: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  const products = [
    {
      id: 1,
      name: 'Handwoven Seagrass Basket',
      size: 'Large',
      price: 48.0,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu_WsSMidYV-o4k3mvs8b6PrPNeXsCZi20yDbIE2MASnwOkrKs4NnA80FDJlknYMDU2EP5Y0Zf4KkRdE_o2kLtjJGfrH3sAEZVsIuvrZtSAbMbVF9FGktKTAUEseL8C-ZxO5ic9rIDGr2pf9rkuye44p8PK1L2MX4zt1OaZ7TpqgX5ucoUzBG6yuKVKyf_U59T9EOAvRzOJGrHg92vLM1r6_TmWJYuaUCkARzKxMVxSfDlAHMdJcykNTh-VGMJD4poH0CBpLOY2sq1',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Artisan Ceramic Mug',
      color: 'Earth Speckle',
      price: 24.0,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-kAUSI-7L-Vl-G7v0yrcN1MAu83I32-QpJ_r723xzM6dawJb2W7mCLnjz5qeL-8mR9Thg6ZRXm2NyQEHyYsQMRjnmK2g-AfTYhVKXR0qOuiphm_xIXuy_aVzryNiI6AqikLPMAT2DIMnJAfJR_YSjd2FgJaO0EAx-u5xOrDj3WL5D1suloOC4IN6IKmqAFD8mFylwKUd4HECogH9pNT1R2z1VXSah0Ow-nosjEJ818Cof5F_4Bv0qQxOQNnxNfdV0CrqZBuggzuSC',
      quantity: 2,
    },
    {
      id: 3,
      name: 'Linen Napkin Set',
      color: 'Sage Green',
      price: 32.0,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAehvdpVcKOTHU5MwPCbk7E3i9mxzBVeAWlD0ajAP2pJ9QBbjJTLUBhkw1jytf3AjueAAaz23SoQ1bmR5gSWRYvAps9r8xvIZLwML7w1KVnbaxelH_6ARJov_bXXkKi1zs02Oi5O8tiyKCMuanWN5rNBSdwPYGUNYIvdFEwTpPMgRChRL_CSmMmuq7h7UWsf-DsgF6wPvRp76nn6IlUlcMjINrownKvbpdRaEWU57SAaDhQSyhmfmaW5FYJVeTMbe5RjygD71cGhVg6',
      quantity: 1,
    },
  ];

  const subtotal = products.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 12.0;
  const tax = 10.24;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-[#f8f7f6] text-neutral-800 font-sans">
      <nav className="bg-white border-b border-neutral-200 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="material-icons text-[#ec6d13] text-3xl">storefront</span>
            <span className="text-2xl font-bold tracking-tight text-neutral-900">
              Artisan<span className="text-[#ec6d13]">.</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center text-sm font-medium text-neutral-500 gap-4">
            <span className="flex items-center gap-1 text-[#ec6d13]">
              <span className="material-icons text-lg">check_circle</span>
              Cart
            </span>
            <span className="w-8 h-[1px] bg-neutral-300"></span>
            <span className="flex items-center gap-1 text-[#ec6d13]">
              <span className="material-icons text-lg">check_circle</span>
              Information
            </span>
            <span className="w-8 h-[1px] bg-neutral-300"></span>
            <span className="flex items-center gap-1 text-neutral-900">
              <span className="w-5 h-5 rounded-full bg-[#ec6d13] text-white flex items-center justify-center text-xs mr-1">
                3
              </span>
              Payment
            </span>
            <span className="w-8 h-[1px] bg-neutral-300"></span>
            <span className="flex items-center gap-1">Confirmation</span>
          </div>
          <Link to="/cart" className="text-sm font-medium text-neutral-500 hover:text-[#ec6d13] transition-colors">
            Return to Cart
          </Link>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 mb-2">Secure Checkout</h1>
              <p className="text-neutral-500 text-sm">
                Please review your shipping details and select a payment method.
              </p>
            </div>

            <section className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="material-icons text-[#ec6d13]">local_shipping</span>
                  Contact Information
                </h2>
                <button className="text-[#ec6d13] text-sm font-medium hover:text-[#ec6d13]/80">
                  Edit Details
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <label
                    className="block text-sm font-medium text-neutral-700 mb-1"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 focus:border-[#ec6d13] focus:ring-[#ec6d13] shadow-sm"
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    defaultValue="amelia.harper@email.com"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="material-icons text-[#ec6d13]">local_shipping</span>
                  Shipping Address
                </h2>
                <button className="text-[#ec6d13] text-sm font-medium hover:text-[#ec6d13]/80">
                  Edit Details
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <label
                    className="block text-sm font-medium text-neutral-700 mb-1"
                    htmlFor="country"
                  >
                    Country / Region
                  </label>
                  <select
                    className="w-full rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 focus:border-[#ec6d13] focus:ring-[#ec6d13] shadow-sm"
                    id="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-neutral-700 mb-1"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 focus:border-[#ec6d13] focus:ring-[#ec6d13] shadow-sm"
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-neutral-700 mb-1"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 focus:border-[#ec6d13] focus:ring-[#ec6d13] shadow-sm"
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label
                    className="block text-sm font-medium text-neutral-700 mb-1"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    className="w-full rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 focus:border-[#ec6d13] focus:ring-[#ec6d13] shadow-sm"
                    id="address"
                    type="text"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-neutral-700 mb-1"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    className="w-full rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 focus:border-[#ec6d13] focus:ring-[#ec6d13] shadow-sm"
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium text-neutral-700 mb-1"
                      htmlFor="state"
                    >
                      State
                    </label>
                    <input
                      className="w-full rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 focus:border-[#ec6d13] focus:ring-[#ec6d13] shadow-sm"
                      id="state"
                      type="text"
                      value={formData.state}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-neutral-700 mb-1"
                      htmlFor="zip"
                    >
                      ZIP Code
                    </label>
                    <input
                      className="w-full rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 focus:border-[#ec6d13] focus:ring-[#ec6d13] shadow-sm"
                      id="zip"
                      type="text"
                      value={formData.zip}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label
                    className="block text-sm font-medium text-neutral-700 mb-1"
                    htmlFor="phone"
                  >
                    Phone Number (for delivery updates)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 material-icons text-sm">
                      phone
                    </span>
                    <input
                      className="pl-9 w-full rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 focus:border-[#ec6d13] focus:ring-[#ec6d13] shadow-sm"
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="material-icons text-[#ec6d13]">local_shipping</span>
                  Shipping Method
                </h2>
              </div>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 rounded-lg border-2 border-[#ec6d13] bg-[#ec6d13]/5 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      defaultChecked
                      className="w-4 h-4 text-[#ec6d13] focus:ring-[#ec6d13]"
                    />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Standard Shipping</p>
                      <p className="text-xs text-neutral-500">5-7 business days</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-neutral-900">$12.00</span>
                </label>
                <label className="flex items-center justify-between p-4 rounded-lg border border-neutral-200 cursor-pointer hover:bg-neutral-50">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      className="w-4 h-4 text-[#ec6d13] focus:ring-[#ec6d13]"
                    />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Express Shipping</p>
                      <p className="text-xs text-neutral-500">2-3 business days</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-neutral-900">$24.00</span>
                </label>
              </div>
            </section>

            <section className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="material-icons text-[#ec6d13]">credit_card</span>
                  Payment Method
                </h2>
                <div className="flex space-x-1">
                  <img
                    alt="Visa"
                    className="h-6 object-contain opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi1VowCHPXcYld0wSN0Bk7cDqxZCOhxcNXeun1NmglNtHYzNma7IjBmlNkU2miPXgJu16xnstxQgBnnsrU8489itb0yUTVyLRsK6E1YVagz_8mfHISufVetNc0d4PrTb-EK7HGf1YE-zJ13vhdJ6qDre3B4foFDn9GDUy29BoKENY18Fp35nagPuQeJRsgKzayx6LqBEVb7BZV91f-Dm4QjdPFYrG1XDDQJVVQHANMdCeyjrN3bbx-ta2JyblE1v-_BqjZZ8_7UlW-/s80-c"
                  />
                  <img
                    alt="Mastercard"
                    className="h-6 object-contain opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpPpoX4Rl7dqh6J9Ds2VLGPb07j5xBeU8qKNB9_Fp_2LZN6PmV5dHW0zjNliskHIhAakJswiF_EJVNrAzdFjAlFFvNpVXkvbttnBu29ZMS3qx0FfLdPZSrGd-PcXtOmnnmd9KHvHMIfJZRqlMmegQx2Y-QzlmAu1Ypi8QLDVwzEqgIHlboDa6XNfA7-fRPuyJtGIhvtTR1EPveuN_yxR8_cJ0OQYd7tsUdx_0YljqnRbT1WdxppZR3KyKvuXRYUm78QzIKZg4oUmRT/s80-c"
                  />
                  <img
                    alt="Paypal"
                    className="h-6 object-contain opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOHUrCd7Nd0ulgAGpwdpJb6O7BsumawAb4z-s0ZOOxdgy-z0ehenPR5mo9zYWAjHC2llcR5xI8GnlD-xGBS5pX5r2ZVnUKC4IQH1Ir8CU2chYCEaK_KAytSP5jIN-UitO9d7l3byviUD-8begZi8AVCmJ8LiwVWzQ6ZRuOCKwCqDAVjzojknGAZ_k1LtbRNCqjkafHRHON4WUCQsKNcZjF-G8KhT7p_ls9-4nkhL_baRK0MkSeKUQJfxIYe4l_rDPIy75ukbbb_yXn/s80-c"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 border-[#ec6d13] bg-[#ec6d13]/10 text-[#ec6d13] font-medium transition-all">
                  <span className="material-icons text-sm">credit_score</span>
                  Credit Card
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-50 transition-all">
                  <span className="material-icons text-sm">account_balance_wallet</span>
                  PayPal
                </button>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <label
                    className="block text-sm font-medium text-neutral-700 mb-1"
                    htmlFor="cardNumber"
                  >
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 focus:border-[#ec6d13] focus:ring-[#ec6d13] shadow-sm placeholder-neutral-400"
                      id="cardNumber"
                      placeholder="0000 0000 0000 0000"
                      type="text"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                    />
                    <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-lg">
                      payment
                    </span>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs font-semibold">
                      VISA
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium text-neutral-700 mb-1"
                      htmlFor="cardExpiry"
                    >
                      Expiry Date
                    </label>
                    <input
                      className="w-full rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 focus:border-[#ec6d13] focus:ring-[#ec6d13] shadow-sm placeholder-neutral-400"
                      id="cardExpiry"
                      placeholder="MM / YY"
                      type="text"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-neutral-700 mb-1"
                      htmlFor="cardCvc"
                    >
                      CVC
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 focus:border-[#ec6d13] focus:ring-[#ec6d13] shadow-sm placeholder-neutral-400"
                        id="cardCvc"
                        placeholder="123"
                        type="text"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                      />
                      <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-lg cursor-help">
                        help_outline
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-neutral-700 mb-1"
                    htmlFor="cardName"
                  >
                    Name on Card
                  </label>
                  <input
                    className="w-full rounded-lg border-neutral-300 bg-neutral-50 text-neutral-900 focus:border-[#ec6d13] focus:ring-[#ec6d13] shadow-sm placeholder-neutral-400"
                    id="cardName"
                    placeholder="Full Name"
                    type="text"
                    value={formData.cardName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6 flex items-start gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                <span className="material-icons text-green-600">lock</span>
                <div className="text-sm text-neutral-600">
                  <p className="font-medium text-neutral-900">
                    Your transaction is secured with SSL encryption.
                  </p>
                  <p className="mt-1 text-xs">We do not store your credit card details on our servers.</p>
                </div>
              </div>
            </section>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
              <Link
                to="/shipping"
                className="flex items-center text-neutral-600 hover:text-[#ec6d13] transition-colors font-medium"
              >
                <span className="material-icons text-sm mr-1">arrow_back</span>
                Back to shipping
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
                <div className="p-6 bg-[#fdfbf9] border-b border-neutral-200">
                  <h2 className="text-lg font-bold text-neutral-900">Order Summary</h2>
                </div>
                <div className="p-6 max-h-[400px] overflow-y-auto">
                  {products.map((product) => (
                    <div key={product.id} className="flex gap-4 mb-6 last:mb-0">
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-neutral-200">
                        <img
                          alt={product.name}
                          className="w-full h-full object-cover"
                          src={product.image}
                        />
                        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-neutral-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
                          {product.quantity}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-neutral-900">{product.name}</h3>
                        <p className="text-xs text-neutral-500 mb-1">
                          {product.size
                            ? `Size: ${product.size}`
                            : product.color
                            ? `Color: ${product.color}`
                            : ''}
                        </p>
                        <p className="text-sm font-medium text-neutral-700">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-neutral-50 p-6 border-t border-neutral-200 space-y-3">
                  <div className="flex justify-between text-sm text-neutral-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-neutral-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-neutral-600">
                    <span>Shipping</span>
                    <span className="font-medium text-neutral-900">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-neutral-600">
                    <span>Estimated Taxes</span>
                    <span className="font-medium text-neutral-900">${tax.toFixed(2)}</span>
                  </div>
                  <div className="pt-4 mt-4 border-t border-neutral-200 flex justify-between items-center">
                    <span className="text-base font-bold text-neutral-900">Total</span>
                    <div className="text-right">
                      <span className="text-sm text-neutral-500 mr-1">USD</span>
                      <span className="text-2xl font-bold text-[#ec6d13]">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 bg-neutral-50">
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#ec6d13] hover:bg-[#ec6d13]/90 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all transform active:scale-[0.99] flex justify-center items-center gap-2"
                  >
                    <span className="material-icons text-white">lock</span>
                    Pay ${total.toFixed(2)}
                  </button>
                  <p className="text-center text-xs text-neutral-400 mt-3">
                    By clicking "Pay", you agree to our Terms of Service.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-neutral-400">
                <Link to="/refund-policy" className="hover:text-[#ec6d13] transition-colors hover:underline">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="hover:text-[#ec6d13] transition-colors hover:underline">
                  Shipping Policy
                </Link>
                <Link to="/privacy-policy" className="hover:text-[#ec6d13] transition-colors hover:underline">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="hover:text-[#ec6d13] transition-colors hover:underline">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto border-t border-neutral-200 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center text-neutral-500 text-sm">
          © 2023 Artisan Handicrafts. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
