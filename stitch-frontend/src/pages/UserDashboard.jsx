import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function UserDashboard() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f8f7f6]">
      <aside className="w-full md:w-72 bg-white dark:bg-[#2a1e16] border-r border-gray-100 dark:border-gray-800 flex flex-col justify-between shrink-0">
        <div>
          <div className="p-8 pb-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#ec6d13]/10 rounded-xl flex items-center justify-center text-[#ec6d13]">
                <span className="material-icons">local_florist</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Artisan<span className="text-[#ec6d13]">Crafts</span>
              </span>
            </div>
          </div>
          <div className="px-6 mb-8">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f8f7f6] dark:bg-[#221810]/50 border border-transparent dark:border-gray-800">
              <img
                alt="Profile picture of Sarah Jenkins"
                className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgXzC7N9G5rvL7HQDocdB7BLpe-hpXzPsO0UujSNlY5eFFdoZ567hGgWt_NbNm3Sk5bR856snPUyXc6bo4SqJDmXR3NNoPvkaOfp3oggZqci3biKhi6z3cQl5-iSF411ViKusyqCWibIhEsA-y9iVcbE6E2MWrsu8TXDIDViMfWPqIqoAOZsZIZv7xcXdb4jcZXnO0lNy-7e8HkXCZhEGDITUV9I38NkSd_IXlYS6djEFQf0KmRpiEd_C-BPILcBk4VjCkqZUQtpJb"
              />
              <div>
                <h3 className="font-semibold text-sm text-gray-900 dark:text-white">Sarah Jenkins</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Member since 2021</p>
              </div>
            </div>
          </div>
          <nav className="px-4 space-y-1">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-3 text-[#ec6d13] bg-[#ec6d13]/10 rounded-lg font-medium transition-colors"
            >
              <span className="material-icons text-[20px]">dashboard</span>
              Dashboard
            </Link>
            <Link
              to="/dashboard/orders"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#ec6d13] dark:hover:text-[#ec6d13] rounded-lg font-medium transition-colors group"
            >
              <span className="material-icons text-[20px] group-hover:text-[#ec6d13] transition-colors">
                shopping_bag
              </span>
              Recent Orders
            </Link>
            <Link
              to="/dashboard/addresses"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#ec6d13] dark:hover:text-[#ec6d13] rounded-lg font-medium transition-colors group"
            >
              <span className="material-icons text-[20px] group-hover:text-[#ec6d13] transition-colors">
                location_on
              </span>
              Address Book
            </Link>
            <Link
              to="/dashboard/wishlist"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#ec6d13] dark:hover:text-[#ec6d13] rounded-lg font-medium transition-colors group"
            >
              <span className="material-icons text-[20px] group-hover:text-[#ec6d13] transition-colors">
                favorite
              </span>
              Wishlist
              <span className="ml-auto bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold px-2 py-0.5 rounded-full">
                4
              </span>
            </Link>
            <Link
              to="/dashboard/settings"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#ec6d13] dark:hover:text-[#ec6d13] rounded-lg font-medium transition-colors group"
            >
              <span className="material-icons text-[20px] group-hover:text-[#ec6d13] transition-colors">
                settings
              </span>
              Account Settings
            </Link>
          </nav>
        </div>
        <div className="p-4 border-t border-gray-100 dark:border-gray-800">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-500 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/10 hover:text-red-600 dark:hover:text-red-400 rounded-lg font-medium transition-colors transition-all">
            <span className="material-icons text-[20px]">logout</span>
            Log Out
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome back, Sarah!
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Here's what's happening with your handcrafted collection today.
            </p>
          </div>
          <button className="bg-[#ec6d13] hover:bg-[#ec6d13]/90 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-[#ec6d13]/20 transition-all">
            <span className="material-icons text-sm">shopping_cart</span>
            Continue Shopping
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-[#2a1e16] p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Orders</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">24</h3>
              <p className="text-xs text-green-600 mt-2 font-medium flex items-center gap-1">
                <span className="material-icons text-xs">trending_up</span>
                +2 this month
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#ec6d13]/10 flex items-center justify-center text-[#ec6d13]">
              <span className="material-icons">receipt_long</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#2a1e16] p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Loyalty Points</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">1,250</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Next reward at 1,500 pts</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-600 dark:text-yellow-500">
              <span className="material-icons">stars</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#2a1e16] p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Support Tickets</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">0</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">No active issues</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-500">
              <span className="material-icons">support_agent</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-[#2a1e16] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent Activity</h2>
                <a className="text-sm text-[#ec6d13] font-medium hover:underline" href="#">
                  View All Orders
                </a>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                <div className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-20 h-20 shrink-0 bg-gray-100 rounded-lg overflow-hidden relative group">
                    <img
                      alt="Handmade ceramic vase"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7RgCMpRCD18isDqAlTS9O8MjFp0JPSKDLYGNkCWkn3SDL8NFupWJ2LUlZ7p3CjgNcDNOVLuYcoMWXCZJ0deYeWaaa61KHlJr8j2Jr6kUBEyQ6O0lCJ9fbrm8e08t72LtMPb-fr_1h0rkn287GLxSUv0Ru2Can5vgcFHKTETD3M1RywojHemIZLwEaVUKJBYJPuUH73nmiY5slgk-AT6guJhv0g0-bnc5A3Mq1htuAgy5fR761rbUJMBjV0wqxd4lttYRL41EMXj2Z"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                      <h4 className="font-bold text-gray-900 dark:text-white">Order #8492-JK</h4>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 inline-block w-fit mx-auto sm:mx-0 mt-2 sm:mt-0">
                        Shipped
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Placed on Oct 24, 2023</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Terracotta Vase Set, Woven Placemats
                    </p>
                    <div className="mt-3 sm:hidden">
                      <button className="text-sm text-[#ec6d13] border border-[#ec6d13]/30 px-3 py-1.5 rounded bg-[#ec6d13]/5 hover:bg-[#ec6d13]/10">
                        Track Order
                      </button>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right">
                    <p className="text-lg font-bold text-gray-900 dark:text-white mb-2">$85.00</p>
                    <button className="text-sm text-[#ec6d13] font-medium hover:text-[#ec6d13]/80 transition-colors flex items-center justify-end gap-1">
                      Track Order <span className="material-icons text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>

                <div className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-20 h-20 shrink-0 bg-gray-100 rounded-lg overflow-hidden relative group">
                    <img
                      alt="Woven bamboo basket"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAKDj3skdY4CrROi24KxyN_-Ov09THoPxcJV5te7TeQEECwU_YDhOMBLQaoLRi75wO3SkmUrHNvO0FE7wBhF2S4rQ3pxUHhw8KVPmcf3Ya6IXj40mSdOsxNZw8-wLTONYVq8lcKPr33gI4K1AgBlJgcKRQaVH5yGujB1kHUwGAlfYPRX3D7771UE0oT1ZU1ANgVlXBj_3OFSL3IeO6orA55a_rjxw5vZTKZMhCBWzx6bwys7iRRz4uybnSe6RnWMCPcrMMA7uba_ZG"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                      <h4 className="font-bold text-gray-900 dark:text-white">Order #8455-JK</h4>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 inline-block w-fit mx-auto sm:mx-0 mt-2 sm:mt-0">
                        Delivered
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Placed on Oct 10, 2023</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Handwoven Bamboo Basket
                    </p>
                    <div className="mt-3 sm:hidden">
                      <button className="text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded hover:bg-gray-50 dark:hover:bg-white/5">
                        View Receipt
                      </button>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right">
                    <p className="text-lg font-bold text-gray-900 dark:text-white mb-2">$42.00</p>
                    <button className="text-sm text-gray-500 dark:text-gray-400 font-medium hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                      View Receipt
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#2a1e16] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Default Shipping Address
                </h2>
                <button className="text-[#ec6d13] hover:text-[#ec6d13]/80 transition-colors p-2 hover:bg-[#ec6d13]/5 rounded-full">
                  <span className="material-icons text-xl">edit</span>
                </button>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 text-gray-500">
                  <span className="material-icons">home</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Sarah Jenkins</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1 leading-relaxed text-sm">
                    124 Artisan Way, Apt 4B
                    <br />
                    Portland, OR 97205
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-[#2a1e16] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm p-6">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Your Wishlist</h2>
                  <p className="text-xs text-gray-500 mt-1">4 items saved for later</p>
                </div>
                <a className="text-xs font-semibold text-[#ec6d13] uppercase tracking-wide hover:underline" href="#">
                  View All
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <a className="group block" href="#">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-2 relative">
                    <img
                      alt="Ceramic blue mug"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbKA-0yxgwh2teSmYWfAql7l_lic2YlRvUN2LevhM6P49xlqWUeK85cDDgj8BtsUMXNGqoDmTami5InS_K_b-OFTnZSzIU59dX7UW18zx9S4CqYUPYMYoGrHf9hVyekiQtVtcaMYXnlF0HrljCrqQZdivdVAis-Yc3j6q1nmsGSupuI9paN2MCy1kkkcYgmUhySY74-KRzRF55AQfG3EIV5L46Y2mzAUTfOgziLOH-E7VmbdQmAQNA1j0XrAYVVFUQbt37KLpBL4ja"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    Azure Glaze Mug
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">$24.00</p>
                </a>
                <a className="group block" href="#">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-2 relative">
                    <img
                      alt="Macrame wall hanging"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD53wct4NLhi5JRR1Qy-FtB8Kk7DdHA4b5m-Jhkn6eW0gT8P_9VCE-aS4V3xTqjCmB_3OoWMVRE0SWTTpKkwshIlOxpoFYVM-ADMQt3RCDmOKj-cAbtGij13_K96u61kD5wGY_1noiS-C0ml6qKcLXKAjL1Pwunmdw05VL96bou_pCROG7ob7d-xnVdBajmdsGqDgU1Sy9TKg0W613g9JWy_9KH35E3lKAVN2547QgAtqhWi_l0vQXm-UvfI3L-ECpoaVpON92XghjC"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Boho Macrame</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">$45.00</p>
                </a>
                <a className="group block" href="#">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-2 relative">
                    <img
                      alt="Wooden serving spoon"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnYKa6bytwlYH-S0ezyK-HjzIvLuwvIBEjD2_QM4ItTVLJLychmrIQoiNQ8D35Yez3L1NRZhb93cilFwOR16nMTFc9MLwVhr32-YkeQVEbDZsgjQ3R2Z4LU3Ij0K2VeFCEU8NeqB_6IwnH1VTYmj76wpjg9PduCAY0-1kbFctxHUv6rUf8WOn6DFfrjr72oY6HpXn7sR4kT8k6OR7XfehMaMtr_DojwmdV1-WhStvUsiN-tHGO0lED1kQkFG1kbv_6CpgFNCjkjy6B"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    Olive Wood Spoon
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">$18.00</p>
                </a>
                <a
                  className="group flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg aspect-square hover:border-[#ec6d13]/50 hover:bg-[#ec6d13]/5 transition-all"
                  href="#"
                >
                  <span className="text-xs font-medium text-gray-400 group-hover:text-[#ec6d13] transition-colors">
                    +1 More
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-[#ec6d13] text-white rounded-xl shadow-lg shadow-[#ec6d13]/30 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl -ml-10 -mb-10 pointer-events-none"></div>
              <div className="relative z-10">
                <span className="inline-block px-2 py-1 bg-white/20 rounded text-[10px] font-bold tracking-wider uppercase mb-3 backdrop-blur-sm">
                  Trending Now
                </span>
                <h3 className="font-bold text-xl mb-2">Artisan Pottery Workshop</h3>
                <p className="text-white/80 text-sm mb-6">
                  Join our online masterclass with master potter Elena Rossi. Learn to shape your own
                  story.
                </p>
                <button className="w-full bg-white text-[#ec6d13] font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-center gap-2">
                  Book Now
                  <span className="material-icons text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center md:text-left text-sm text-gray-400">
          <p>
            © 2023 Artisan Crafts Inc. All rights reserved.{' '}
            <a className="hover:text-[#ec6d13] transition-colors" href="#">
              Privacy Policy
            </a>{' '}
            •{' '}
            <a className="hover:text-[#ec6d13] transition-colors" href="#">
              Terms of Service
            </a>
          </p>
        </footer>
      </main>

      <Outlet />
    </div>
  );
}
