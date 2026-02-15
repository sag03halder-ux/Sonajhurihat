import React from 'react'
import { Link } from 'react-router-dom'

const OrderTracking = () => {
  const orderData = {
    orderId: '84920119',
    email: 'jane.doe@example.com',
    estimatedDelivery: 'Friday, Oct 24th',
    onTime: true,
    carrier: 'UPS Ground',
    trackingId: '1Z999AA10130',
    orderPlaced: 'Oct 18, 2023',
    currentStatus: 'out_for_delivery',
    items: [
      {
        id: 1,
        name: 'Artisan Ceramic Vase',
        quantity: 1,
        variant: 'Earth Tone',
        price: 45.00,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-03pwgt-2JlKbPO0ZYcprsiMFueLqR0ATrvd5dWFikNHJh4MlObe8g0uoG82r8JFckEQRc48ZJI141h_pxu0moUJVTKpdbFOri8zAYFLasF_dWM8mT1wtMj0Lb8fmJzCeBgoCfUVUrwP8BjZJspMNu-eyIoSh6_hxIcueW1Ntd0kEXKLh2LjJrFCeT375044eHWdqe3mrbbTHeK-FgLS_0fUcdCi1SDe70Df6hH_yQ738lpu2HC96Lfuo4AYMDY12-jEOeBZ1x5WP'
      },
      {
        id: 2,
        name: 'Handwoven Wool Throw',
        quantity: 1,
        variant: 'Cream',
        price: 120.00,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlnbSEoxZzaYAOOKT9Er7zOhrdAlLaKIO_iaE505LsISxSsQkaRxza7nzX_VnxSCVfwm4WhYvUWK1f77L4TAPjnkuPt2KKym_jrQkOHC1xgUH26h8PLUlBhPa01FfKJRjBapBJ4rivi_QDz1KwWNhKjef6mI2a084f6oZ17g7v8fUKEfXcaAn5wWvn5f0nucIyWJZh6kKqVroVDqtxDpNqCMob64PpUN9THPf44axefickJJfPKKFKRgYrlDczoOTl_qV8Bu1ckKkF'
      }
    ],
    shippingAddress: {
      street: '123 Maple Street',
      city: 'Portland',
      state: 'OR',
      zip: '97205'
    },
    timeline: [
      { status: 'Ordered', date: 'Oct 18', completed: true },
      { status: 'Processing', date: 'Oct 19', completed: true },
      { status: 'Shipped', date: 'Oct 20', completed: true },
      { status: 'Out for Delivery', date: 'Today', completed: false, current: true },
      { status: 'Delivered', date: '--', completed: false }
    ],
    updates: [
      {
        id: 1,
        status: 'Out for delivery',
        description: 'The package is out for delivery in your area.',
        time: 'Today 8:30 AM',
        location: 'Portland, OR',
        icon: 'local_shipping'
      },
      {
        id: 2,
        status: 'Arrived at local facility',
        time: 'Oct 23, 6:00 PM',
        location: 'Portland, OR',
        icon: 'storefront'
      },
      {
        id: 3,
        status: 'Departed from hub',
        time: 'Oct 22, 9:15 AM',
        location: 'Denver, CO',
        icon: 'flight_takeoff'
      },
      {
        id: 4,
        status: 'Label Created',
        description: 'The shipper has created a label for this shipment.',
        time: 'Oct 18, 2:30 PM',
        location: 'Austin, TX',
        icon: 'inventory'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-[#f8f7f6] text-[#332c26] flex flex-col">
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                <span className="material-icons-round text-[#ec6d13] text-3xl">handyman</span>
                <span className="font-bold text-2xl tracking-tight">Artisan<span className="text-[#ec6d13]">Works</span></span>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <Link to="/" className="border-transparent text-[#7a7269] hover:text-[#ec6d13] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">Shop</Link>
                <Link to="/" className="border-transparent text-[#7a7269] hover:text-[#ec6d13] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">Artisans</Link>
                <Link to="/" className="border-transparent text-[#7a7269] hover:text-[#ec6d13] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">About Us</Link>
                <Link to="/order-tracking" className="border-[#ec6d13] text-[#ec6d13] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Track Order</Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-[#7a7269] hover:text-[#ec6d13] transition-colors">
                <span className="material-icons-round">search</span>
              </button>
              <button className="p-2 text-[#7a7269] hover:text-[#ec6d13] transition-colors relative">
                <span className="material-icons-round">shopping_bag</span>
                <span className="absolute top-1 right-0 block h-2 w-2 rounded-full bg-[#ec6d13] ring-2 ring-white"></span>
              </button>
              <div className="h-8 w-8 rounded-full bg-[#ec6d13]/20 flex items-center justify-center text-[#ec6d13] font-bold cursor-pointer hover:bg-[#ec6d13] hover:text-white transition-colors">
                JD
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-10">
        <section className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ec6d13]/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ec6d13]/5 rounded-full -ml-16 -mb-16 pointer-events-none"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Track your handmade goods</h1>
                <p className="text-[#7a7269]">Enter your order details below to see the status of your shipment and when it will arrive at your doorstep.</p>
              </div>
              <form className="space-y-4 max-w-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="order-id">Order Number</label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-400 text-sm">#</span>
                      </div>
                      <input 
                        className="focus:ring-[#ec6d13] focus:border-[#ec6d13] block w-full pl-7 sm:text-sm border-gray-300 rounded-md py-2.5" 
                        id="order-id" 
                        name="order-id" 
                        placeholder="12345678" 
                        type="text" 
                        defaultValue={orderData.orderId}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address</label>
                    <input 
                      className="focus:ring-[#ec6d13] focus:border-[#ec6d13] block w-full sm:text-sm border-gray-300 rounded-md py-2.5" 
                      id="email" 
                      name="email" 
                      placeholder="you@example.com" 
                      type="email" 
                      defaultValue={orderData.email}
                    />
                  </div>
                </div>
                <button 
                  className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ec6d13] hover:bg-[#d15c0b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ec6d13] transition-colors" 
                  type="submit"
                >
                  Track Order
                </button>
              </form>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <div className="w-full h-48 bg-gradient-to-tr from-[#ec6d13]/10 to-[#ec6d13]/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                <span className="material-icons-round text-[#ec6d13]/40 text-9xl absolute -bottom-4 -right-4 transform rotate-12">local_shipping</span>
                <div className="text-center z-10">
                  <span className="material-icons-round text-[#ec6d13] text-5xl mb-2">inventory_2</span>
                  <p className="text-[#ec6d13] font-medium">Your package is on the way!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex flex-wrap justify-between items-start mb-8 gap-4">
                <div>
                  <p className="text-sm text-[#7a7269] font-medium uppercase tracking-wide">Estimated Delivery</p>
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    {orderData.estimatedDelivery}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      On Time
                    </span>
                  </h2>
                  <p className="text-sm mt-1 text-[#7a7269]">Carrier: <span className="font-medium text-gray-900">{orderData.carrier}</span> • Tracking ID: <span className="font-medium text-gray-900 font-mono">{orderData.trackingId}</span></p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[#7a7269]">Order Placed</p>
                  <p className="font-medium text-gray-900">{orderData.orderPlaced}</p>
                </div>
              </div>

              <div className="relative my-8">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gray-200"></div>
                </div>
                <div className="relative flex justify-between">
                  {orderData.timeline.map((step, index) => (
                    <div key={step.status} className="flex flex-col items-center group">
                      {step.completed ? (
                        <span className="h-10 w-10 rounded-full bg-[#ec6d13] flex items-center justify-center ring-4 ring-white z-10">
                          <span className="material-icons-round text-white text-sm">check</span>
                        </span>
                      ) : step.current ? (
                        <div className="relative">
                          <span className="h-10 w-10 rounded-full bg-white border-2 border-[#ec6d13] flex items-center justify-center ring-4 ring-white z-10 animate-pulse">
                            <span className="h-3 w-3 bg-[#ec6d13] rounded-full"></span>
                          </span>
                        </div>
                      ) : (
                        <span className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center ring-4 ring-white z-10">
                          <span className="material-icons-round text-gray-400 text-sm">home</span>
                        </span>
                      )}
                      <span className={`mt-3 text-sm font-medium ${step.current ? 'text-gray-900' : step.completed ? 'text-[#ec6d13]' : 'text-gray-500'}`}>
                        {step.status}
                      </span>
                      <span className="text-xs text-[#7a7269] mt-1 hidden sm:block">{step.date}</span>
                    </div>
                  ))}
                </div>
                <div aria-hidden="true" className="absolute inset-0 flex items-center pointer-events-none">
                  <div className="w-[75%] border-t-2 border-[#ec6d13]"></div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Items in this shipment</h3>
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex-shrink-0 w-64 group bg-[#f8f7f6] p-3 rounded-lg flex items-center gap-4 border border-transparent hover:border-gray-200 transition-colors cursor-pointer">
                      <div className="h-16 w-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                        <img alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src={item.image} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                        <p className="text-xs text-[#7a7269]">Qnty: {item.quantity} • {item.variant}</p>
                        <p className="text-xs font-semibold text-[#ec6d13] mt-1">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Shipment Activity</h3>
              <div className="flow-root">
                <ul className="-mb-8" role="list">
                  {orderData.updates.map((update, index) => (
                    <li key={update.id}>
                      <div className={`relative ${index < orderData.updates.length - 1 ? 'pb-8' : ''}`}>
                        {index < orderData.updates.length - 1 && (
                          <span aria-hidden="true" className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"></span>
                        )}
                        <div className="relative flex space-x-3">
                          <div>
                            <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${index === 0 ? 'bg-[#ec6d13]' : 'bg-gray-100'}`}>
                              <span className={`material-icons-round text-sm ${index === 0 ? 'text-white' : 'text-gray-500'}`}>{update.icon}</span>
                            </span>
                          </div>
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-sm font-medium text-gray-900">{update.status}</p>
                              {update.description && <p className="text-sm text-[#7a7269]">{update.description}</p>}
                            </div>
                            <div className="text-right text-sm whitespace-nowrap text-[#7a7269]">
                              <p>{update.time}</p>
                              <p className="text-xs">{update.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-1 border border-gray-100 h-96 lg:h-[28rem] flex flex-col">
              <div className="relative flex-grow rounded-lg overflow-hidden bg-gray-200">
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuATETQrD2fi66rqlIhAnYpDiAcNMl_s2lcXvu0AKkK_fiveFg4dcB6SkRaz1qNM7k85-2RhY5Ma9d92ryPFpKJAgD14duAhmoCljPq9CXDzU8GfExOGTN2dk88cbThDD_X9gcbasSRyIbZNebcuXVzpF_V3x2qGkVisY02HYBM7dzCuQk2vGfGwW-EY6v0aJgmpL5en_N9Aj8NupAssNL_HIkK6nJaZKRWyE2Myi22ojM2XGrq6xT8-K2-6DKX0ava8aJl2g_ypJ5D8')", opacity: 0.9}}></div>
                <div className="absolute inset-0 bg-[#ec6d13]/10 mix-blend-multiply"></div>
                <div className="absolute top-4 right-4 bg-white p-2 rounded shadow-lg flex flex-col gap-2">
                  <button className="text-gray-500 hover:text-[#ec6d13]"><span className="material-icons-round">add</span></button>
                  <div className="h-px bg-gray-200"></div>
                  <button className="text-gray-500 hover:text-[#ec6d13]"><span className="material-icons-round">remove</span></button>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <span className="h-4 w-4 bg-[#ec6d13] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></span>
                    <span className="material-icons-round text-[#ec6d13] text-4xl drop-shadow-md">location_on</span>
                  </div>
                  <div className="bg-white px-3 py-1 rounded shadow-lg absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <p className="text-xs font-bold text-gray-900">Delivery Truck</p>
                    <p className="text-[10px] text-[#7a7269]">4 stops away</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-b-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#f8f7f6] rounded-full">
                    <span className="material-icons-round text-[#ec6d13]">navigation</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Destination</p>
                    <p className="text-sm text-[#7a7269]">{orderData.shippingAddress.street}, {orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zip}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ec6d13]/5 rounded-xl border border-[#ec6d13]/20 p-6">
              <h3 className="text-lg font-semibold text-[#ec6d13] mb-2">Need help?</h3>
              <p className="text-sm text-[#7a7269] mb-4">Questions about your order? Our artisans are here to help you.</p>
              <div className="flex flex-col gap-2">
                <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#ec6d13] transition-colors p-2 bg-white rounded border border-gray-200 shadow-sm">
                  <span className="material-icons-round text-[#ec6d13] text-sm">chat_bubble_outline</span>
                  Live Chat
                </Link>
                <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#ec6d13] transition-colors p-2 bg-white rounded border border-gray-200 shadow-sm">
                  <span className="material-icons-round text-[#ec6d13] text-sm">help_outline</span>
                  Visit Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <a className="text-gray-400 hover:text-gray-500" href="#">
                <span className="sr-only">Facebook</span>
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                </svg>
              </a>
              <a className="text-gray-400 hover:text-gray-500" href="#">
                <span className="sr-only">Instagram</span>
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 019.673 2.06c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm0 2h.165c2.404 0 2.716.01 3.734.057 1.01.046 1.56.23 1.936.376.5.195.856.425 1.23.8.375.374.605.73.8 1.229.146.376.33.926.376 1.936.047 1.018.057 1.33.057 3.734v.165c0 2.404-.01 2.716-.057 3.734-.046 1.01-.23 1.56-.376 1.936-.195.5-.425.856-.8 1.23-.374.375-.73.605-1.229.8-.376.146-.926.33-1.936.376-1.018.047-1.33.057-3.734.057h-.165c-2.404 0-2.716-.01-3.734-.057-1.01-.046-1.56-.23-1.936-.376-.5-.195-.856-.425-1.23-.8-.375-.374-.605-.73-.8-1.229-.146-.376-.33-.926-.376-1.936-.047-1.018-.057-1.33-.057-3.734v-.165c0-2.404.01-2.716.057-3.734.046-1.01.23-1.56.376-1.936.195-.5.425.856.8-1.23.374-.375.73-.605 1.229-.8.376-.146.926-.33 1.936-.376 1.018-.047 1.33-.057 3.734-.057zm0 4.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1.9a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zm5.83-3.67a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1z" fillRule="evenodd"></path>
                </svg>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-sm text-gray-400">© 2023 Artisan Works, Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default OrderTracking
