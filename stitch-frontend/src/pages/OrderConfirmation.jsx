import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function OrderConfirmation() {
  const navigate = useNavigate();

  const orderDetails = {
    orderId: 'ORD-8923',
    customerName: 'Elena',
    estimatedDelivery: 'Oct 30 - Nov 2',
    shippingAddress: {
      name: 'Elena Rodriguez',
      street: '452 Artisan Way, Studio 8B',
      city: 'Portland, OR 97204',
      country: 'United States'
    },
    items: [
      {
        id: 1,
        name: 'Woven Seagrass Basket',
        variant: 'Large, Natural',
        artisan: 'Sofia M.',
        price: 45.00,
        quantity: 1,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdI_I85NQKDpZLQTQ5uEZj0hKVBM5RKjV_fAJ8tIH2cIAIXOE0nfsnsnWLChjvUNkFKukM71PbkcKLNUvl8eYU9fPUHM8cL-gf-DDd_ina-TUg3KHRR1gvVBGk0uIyaf1zv9oLhG4FFDQDbj3hkjfu16t1QOYGUuLAonWvshxzkj3XpjMTr-8wvvDemwoprYn3r63NpuAL-Y-t7x_sjuzTEtpdSh1-_16GeE6MThc9_ZjbEg1dMnq7wCbZ4-zlDqowBHZffCkY7Ci5'
      },
      {
        id: 2,
        name: 'Minimalist Clay Vase',
        variant: 'Terracotta',
        artisan: 'Kai T.',
        price: 32.00,
        quantity: 2,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGFvdnjuS1CFziFyYmQTcPkVMHq1tDfgmna3_rXSa2pHiuMs76KZ7DVmwq9mTbZ9arjfnkUCp1bI9G_8rj7n880L5AD3dVUWTDm0SbWMg0GCXNT_PxfkUHL-BbAwvDw7lyLcaJLDoTDN_uJHxDtya50fVDAnKIpoPTAKgS2eA_ZZI_DfLOqPaqle_-HsQmDF3FBSrNoFKrwIupWC_5LD8m2BpIpG1G2Y-uKqY1etd7IZzbyUyFKOJNtEaozk57YC08Wh-423XsD41v'
      }
    ],
    summary: {
      subtotal: 109.00,
      shipping: 12.00,
      tax: 8.72,
      discount: -10.90,
      total: 118.82
    },
    paymentMethod: {
      type: 'Visa',
      last4: '4242',
      expiry: '12/25'
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f7f6]">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#ec6d13]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#ec6d13] flex items-center justify-center text-white font-bold text-lg">A</div>
              <span className="font-bold text-xl tracking-tight text-[#ec6d13]">Artisan</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/shop" className="text-sm font-medium hover:text-[#ec6d13] transition-colors">Shop</Link>
              <Link to="/stories" className="text-sm font-medium hover:text-[#ec6d13] transition-colors">Stories</Link>
              <Link to="/about" className="text-sm font-medium hover:text-[#ec6d13] transition-colors">About</Link>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-[#ec6d13]/10 transition-colors">
                <span className="material-icons text-xl">person_outline</span>
              </button>
              <button className="p-2 rounded-full hover:bg-[#ec6d13]/10 transition-colors relative">
                <span className="material-icons text-xl">shopping_bag</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#ec6d13]/10 mb-6 relative">
              <span className="material-icons text-5xl text-[#ec6d13]">check_circle</span>
              <div className="absolute inset-0 rounded-full border border-[#ec6d13]/20 animate-ping opacity-75"></div>
            </div>
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Order Confirmed!</h1>
            <p className="text-lg text-[#6b5d52] max-w-lg mx-auto">
              Thank you, <span className="font-semibold text-[#ec6d13]">{orderDetails.customerName}</span>. We've received your order and the artisans are getting it ready.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#ec6d13]/10 shadow-sm text-sm font-medium">
              <span className="text-[#6b5d52]">Order ID:</span>
              <span className="font-mono text-[#ec6d13]">#{orderDetails.orderId}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-[#ec6d13]/10 overflow-hidden">
                <div className="p-6 border-b border-[#ec6d13]/5">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="material-icons text-[#ec6d13] text-xl">local_shipping</span>
                    Delivery Estimate
                  </h2>
                </div>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                      <p className="text-3xl font-bold text-[#ec6d13]">{orderDetails.estimatedDelivery}</p>
                      <p className="text-sm text-[#6b5d52] mt-1">Estimated arrival date</p>
                    </div>
                    <button 
                      onClick={() => navigate(`/track/${orderDetails.orderId}`)}
                      className="w-full sm:w-auto px-6 py-3 bg-[#ec6d13] hover:bg-[#d55f0e] text-white rounded-lg font-medium transition-colors shadow-lg shadow-[#ec6d13]/20 flex items-center justify-center gap-2"
                    >
                      Track Your Order
                      <span className="material-icons text-sm">arrow_forward</span>
                    </button>
                  </div>
                  <div className="relative mb-2">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#ec6d13]/10">
                      <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#ec6d13] rounded" style={{ width: '25%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs font-medium text-[#6b5d52]">
                      <div className="text-[#ec6d13] font-bold">Confirmed</div>
                      <div className="text-center">Processing</div>
                      <div className="text-center">Shipped</div>
                      <div className="text-right">Delivered</div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8f7f6] p-6 border-t border-[#ec6d13]/5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6b5d52] mb-3">Shipping To</h3>
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-[#ec6d13]/60 mt-1">place</span>
                    <div>
                      <p className="font-medium">{orderDetails.shippingAddress.name}</p>
                      <p className="text-[#6b5d52]">{orderDetails.shippingAddress.street}</p>
                      <p className="text-[#6b5d52]">{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.country}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-[#ec6d13]/10 overflow-hidden">
                <div className="p-6 border-b border-[#ec6d13]/5">
                  <h2 className="text-lg font-semibold">Items in Your Order ({orderDetails.items.length})</h2>
                </div>
                <ul className="divide-y divide-[#ec6d13]/5">
                  {orderDetails.items.map((item) => (
                    <li key={item.id} className="p-6 flex flex-col sm:flex-row gap-4">
                      <div className="w-24 h-24 flex-shrink-0 bg-[#f8f7f6] rounded-lg overflow-hidden border border-[#ec6d13]/10 relative group">
                        <img 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          src={item.image} 
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-lg">{item.name}</h3>
                            <p className="text-sm text-[#6b5d52]">Variant: {item.variant}</p>
                            <p className="text-sm text-[#ec6d13] mt-1">Artisan: {item.artisan}</p>
                          </div>
                          <p className="font-semibold">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="mt-2 text-sm text-[#6b5d52]">Qty: {item.quantity}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-[#ec6d13]/10 p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
                <div className="space-y-3 text-sm pb-6 border-b border-[#ec6d13]/10">
                  <div className="flex justify-between text-[#6b5d52]">
                    <span>Subtotal</span>
                    <span>${orderDetails.summary.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#6b5d52]">
                    <span>Shipping (Standard)</span>
                    <span>${orderDetails.summary.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#6b5d52]">
                    <span>Tax</span>
                    <span>${orderDetails.summary.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#ec6d13] font-medium">
                    <span>Discount (WELCOME10)</span>
                    <span>${orderDetails.summary.discount.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-6 font-bold text-xl">
                  <span>Total</span>
                  <span>${orderDetails.summary.total.toFixed(2)}</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#f8f7f6] p-4 rounded-lg border border-[#ec6d13]/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-[#6b5d52]">credit_card</span>
                      <div>
                        <p className="font-medium text-sm">{orderDetails.paymentMethod.type} ending in {orderDetails.paymentMethod.last4}</p>
                        <p className="text-xs text-[#6b5d52]">Exp {orderDetails.paymentMethod.expiry}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="block w-full text-center py-3 border border-[#ec6d13]/20 text-[#ec6d13] hover:bg-[#ec6d13]/5 rounded-lg font-medium transition-colors text-sm" href="#">
                  Download Invoice
                </a>
                <Link 
                  to="/shop" 
                  className="block w-full text-center py-3 text-[#6b5d52] hover:text-[#ec6d13] transition-colors text-sm underline decoration-[#ec6d13]/30 underline-offset-4"
                >
                  Continue Shopping
                </Link>
              </div>

              <div className="bg-[#ec6d13]/5 rounded-xl p-6 text-center border border-[#ec6d13]/10">
                <h3 className="font-semibold mb-2 text-[#ec6d13]">Need Help?</h3>
                <p className="text-sm text-[#6b5d52] mb-4">
                  Questions about your handmade goods? We're here.
                </p>
                <a className="text-sm font-medium hover:underline text-[#ec6d13]" href="#">Contact Support</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-[#ec6d13]/10 mt-auto">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#ec6d13]">Support</h5>
              <ul className="space-y-2 text-sm text-[#6b5d52]">
                <li><a className="hover:text-[#ec6d13] transition-colors" href="#">Order Status</a></li>
                <li><a className="hover:text-[#ec6d13] transition-colors" href="#">Shipping Info</a></li>
                <li><a className="hover:text-[#ec6d13] transition-colors" href="#">Returns & Exchanges</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#ec6d13]">Company</h5>
              <ul className="space-y-2 text-sm text-[#6b5d52]">
                <li><a className="hover:text-[#ec6d13] transition-colors" href="#">Our Story</a></li>
                <li><a className="hover:text-[#ec6d13] transition-colors" href="#">Artisans</a></li>
                <li><a className="hover:text-[#ec6d13] transition-colors" href="#">Careers</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-2">
              <h5 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#ec6d13]">Join the Community</h5>
              <p className="text-sm text-[#6b5d52] mb-4">Subscribe to receive updates on new artisans and seasonal collections.</p>
              <div className="flex gap-2">
                <input className="flex-1 bg-[#f8f7f6] border-[#ec6d13]/20 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent outline-none" placeholder="Enter your email" type="email"/>
                <button className="bg-[#ec6d13] hover:bg-[#d55f0e] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="border-t border-[#ec6d13]/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#6b5d52]">
            <p>© 2023 Artisan Market. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a className="hover:text-[#ec6d13] transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-[#ec6d13] transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
