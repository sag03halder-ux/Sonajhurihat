import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function VendorDashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden w-64 overflow-y-auto border-r border-gray-200 bg-white dark:bg-[#362a22] dark:border-gray-800 md:block flex-shrink-0">
        <div className="flex h-16 items-center justify-center border-b border-gray-200 dark:border-gray-800 px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#ec6d13] flex items-center justify-center text-white">
              <span className="material-icons text-xl">handyman</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">CraftMarket</span>
          </div>
        </div>
        <div className="px-4 py-6">
          <p className="px-4 text-xs font-semibold uppercase tracking-wider text-[#8d7f76] mb-4">Main Menu</p>
          <nav className="space-y-1">
            <Link to="/" className="flex items-center gap-3 rounded-lg bg-[#ec6d13]/10 px-4 py-3 text-[#ec6d13] transition-colors">
              <span className="material-icons">dashboard</span>
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link to="/products" className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="material-icons text-[#8d7f76]">inventory_2</span>
              <span className="font-medium">My Products</span>
            </Link>
            <Link to="/orders" className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="material-icons text-[#8d7f76]">shopping_bag</span>
              <span className="font-medium">Orders</span>
              <span className="ml-auto rounded-full bg-[#ec6d13] px-2 py-0.5 text-xs text-white">3</span>
            </Link>
            <Link to="/analytics" className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="material-icons text-[#8d7f76]">bar_chart</span>
              <span className="font-medium">Analytics</span>
            </Link>
            <Link to="/messages" className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="material-icons text-[#8d7f76]">mail</span>
              <span className="font-medium">Messages</span>
            </Link>
          </nav>
          <p className="px-4 text-xs font-semibold uppercase tracking-wider text-[#8d7f76] mt-8 mb-4">Shop Management</p>
          <nav className="space-y-1">
            <Link to="/settings" className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="material-icons text-[#8d7f76]">storefront</span>
              <span className="font-medium">Shop Settings</span>
            </Link>
            <Link to="/payouts" className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="material-icons text-[#8d7f76]">payment</span>
              <span className="font-medium">Payouts</span>
            </Link>
          </nav>
        </div>
        <div className="absolute bottom-0 w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#362a22] p-4">
          <div className="flex items-center gap-3">
            <img alt="Vendor profile picture" className="h-10 w-10 rounded-full object-cover border-2 border-[#ec6d13]/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHfkaCsMHMq37MOBXHxq4IC_3eXt9W5oQXedGV-vAGci9UFnq8hI90CAj0GoFlYweMlTpHQwPiiRNQ8DNheRBKIQsK4TjHh6553C2hFaGaUn6CtsYnL1GrvOyj6ZVQq1TiaL4rY38kc-vJlo-fJSW4LvZoV7xmPlRE09cV79Q1bC0tDmKY9ekP5ldWkO2O-D6K2i0cjSIJTiRXvxDleWTVlknLZz0ZCgzPWDR7kD464LMew2wxhaqPULg6l1HfwqBMAwvavyQyNRhb" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Marcus Artisan</p>
              <p className="text-xs text-[#8d7f76] truncate">marcus@handcrafted.com</p>
            </div>
            <button className="text-[#8d7f76] hover:text-[#ec6d13] transition-colors">
              <span className="material-icons">logout</span>
            </button>
          </div>
        </div>
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#362a22] px-6 lg:px-8">
          <div className="flex items-center gap-4 lg:hidden">
            <button className="text-gray-500 hover:text-[#ec6d13]">
              <span className="material-icons">menu</span>
            </button>
            <span className="text-lg font-bold text-gray-900 dark:text-white">CraftMarket</span>
          </div>
          <div className="hidden lg:flex w-full max-w-xl items-center">
            <div className="relative w-full">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">search</span>
              <input className="w-full rounded-lg border-0 bg-[#f8f7f6] dark:bg-[#221810] py-2.5 pl-10 pr-4 text-sm text-gray-900 focus:ring-2 focus:ring-[#ec6d13] placeholder-gray-400 dark:text-white" placeholder="Search orders, products, or customers..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-icons text-2xl">notifications</span>
              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white dark:border-[#362a22]"></span>
            </button>
            <button className="bg-[#ec6d13] hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-sm shadow-orange-200 dark:shadow-none">
              <span className="material-icons text-sm">add</span>
              <span>Add New Product</span>
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-[#f8f7f6] dark:bg-[#221810] p-6 lg:p-8">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Overview</h1>
              <p className="text-[#8d7f76] mt-1">Here's what's happening with your store today.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#8d7f76] bg-white dark:bg-[#362a22] px-3 py-1.5 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm">
              <span className="material-icons text-base">calendar_today</span>
              <span>Last 30 Days</span>
              <span className="material-icons text-base">expand_more</span>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="rounded-xl bg-white dark:bg-[#362a22] p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-2">
                  <span className="material-icons text-green-600 dark:text-green-400">payments</span>
                </div>
                <span className="flex items-center text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 px-2 py-0.5 rounded-full">
                  <span className="material-icons text-xs mr-0.5">trending_up</span> 12%
                </span>
              </div>
              <p className="text-sm font-medium text-[#8d7f76]">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">$12,450.00</p>
            </div>
            <div className="rounded-xl bg-white dark:bg-[#362a22] p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-2">
                  <span className="material-icons text-blue-600 dark:text-blue-400">shopping_cart</span>
                </div>
                <span className="flex items-center text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 px-2 py-0.5 rounded-full">
                  <span className="material-icons text-xs mr-0.5">trending_up</span> 8%
                </span>
              </div>
              <p className="text-sm font-medium text-[#8d7f76]">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">45</p>
            </div>
            <div className="rounded-xl bg-white dark:bg-[#362a22] p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-lg bg-orange-50 dark:bg-orange-900/20 p-2">
                  <span className="material-icons text-[#ec6d13]">analytics</span>
                </div>
                <span className="flex items-center text-xs font-medium text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 px-2 py-0.5 rounded-full">
                  <span className="material-icons text-xs mr-0.5">trending_down</span> 2%
                </span>
              </div>
              <p className="text-sm font-medium text-[#8d7f76]">Avg. Order Value</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">$276.00</p>
            </div>
            <div className="rounded-xl bg-white dark:bg-[#362a22] p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-2">
                  <span className="material-icons text-purple-600 dark:text-purple-400">visibility</span>
                </div>
                <span className="flex items-center text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 px-2 py-0.5 rounded-full">
                  <span className="material-icons text-xs mr-0.5">trending_up</span> 24%
                </span>
              </div>
              <p className="text-sm font-medium text-[#8d7f76]">Shop Views</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">1,240</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2 rounded-xl bg-white dark:bg-[#362a22] border border-gray-100 dark:border-gray-800 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 dark:text-white">Sales Performance</h3>
                <button className="text-sm text-[#ec6d13] font-medium hover:underline">View Report</button>
              </div>
              <div className="relative h-64 w-full flex items-end justify-between gap-2 px-2 pt-8">
                <div className="absolute inset-0 top-8 flex flex-col justify-between pointer-events-none">
                  <div className="w-full border-t border-dashed border-gray-200 dark:border-gray-700"></div>
                  <div className="w-full border-t border-dashed border-gray-200 dark:border-gray-700"></div>
                  <div className="w-full border-t border-dashed border-gray-200 dark:border-gray-700"></div>
                  <div className="w-full border-t border-dashed border-gray-200 dark:border-gray-700"></div>
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                <div className="relative z-10 w-full flex items-end justify-between h-full pl-8 pb-1">
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#8d7f76] pr-2">
                    <span>$5k</span>
                    <span>$2.5k</span>
                    <span>$1k</span>
                    <span>$0</span>
                  </div>
                  <div className="group relative flex flex-col items-center gap-2 h-[40%] w-8">
                    <div className="w-full h-full bg-[#ec6d13]/20 rounded-t-md hover:bg-[#ec6d13]/40 transition-all cursor-pointer"></div>
                    <span className="text-xs text-[#8d7f76]">Mon</span>
                    <div className="absolute -top-8 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$1,200</div>
                  </div>
                  <div className="group relative flex flex-col items-center gap-2 h-[65%] w-8">
                    <div className="w-full h-full bg-[#ec6d13]/20 rounded-t-md hover:bg-[#ec6d13]/40 transition-all cursor-pointer"></div>
                    <span className="text-xs text-[#8d7f76]">Tue</span>
                    <div className="absolute -top-8 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$3,100</div>
                  </div>
                  <div className="group relative flex flex-col items-center gap-2 h-[50%] w-8">
                    <div className="w-full h-full bg-[#ec6d13]/20 rounded-t-md hover:bg-[#ec6d13]/40 transition-all cursor-pointer"></div>
                    <span className="text-xs text-[#8d7f76]">Wed</span>
                  </div>
                  <div className="group relative flex flex-col items-center gap-2 h-[80%] w-8">
                    <div className="w-full h-full bg-[#ec6d13] rounded-t-md shadow-lg shadow-orange-200 dark:shadow-none cursor-pointer"></div>
                    <span className="text-xs font-semibold text-[#ec6d13]">Thu</span>
                    <div className="absolute -top-8 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-100">$4,500</div>
                  </div>
                  <div className="group relative flex flex-col items-center gap-2 h-[55%] w-8">
                    <div className="w-full h-full bg-[#ec6d13]/20 rounded-t-md hover:bg-[#ec6d13]/40 transition-all cursor-pointer"></div>
                    <span className="text-xs text-[#8d7f76]">Fri</span>
                  </div>
                  <div className="group relative flex flex-col items-center gap-2 h-[70%] w-8">
                    <div className="w-full h-full bg-[#ec6d13]/20 rounded-t-md hover:bg-[#ec6d13]/40 transition-all cursor-pointer"></div>
                    <span className="text-xs text-[#8d7f76]">Sat</span>
                  </div>
                  <div className="group relative flex flex-col items-center gap-2 h-[45%] w-8">
                    <div className="w-full h-full bg-[#ec6d13]/20 rounded-t-md hover:bg-[#ec6d13]/40 transition-all cursor-pointer"></div>
                    <span className="text-xs text-[#8d7f76]">Sun</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white dark:bg-[#362a22] border border-gray-100 dark:border-gray-800 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6">Top Selling Items</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <img alt="Handmade ceramic vase" className="h-12 w-12 rounded-lg object-cover bg-gray-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYgsqFti8PAEl_LowDF2tLgxPY8w37yNPqbOR2CL_xco6k3fJyKJAZb0YQVLeynXC2XltIAlqZglLNH8bIb-ZFECUsJU6QJTfHpDfH5CpxIAoSwmBqIaYfTSgwNUtiCFMSNRgpx7eNemk65odjOm723T5aynUIN6Qng9e6kzEZ7Pk_OqC79-mvc9Qlzdn7KfH5IUGP1CwZyChG66cpV5t3pjAWEAebNzwmjiwwXW2MtoGSxnVbkvtOIvg2ZwH6Yj53Nwdn9NYSbRVt" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Artisan Clay Vase</p>
                    <p className="text-xs text-[#8d7f76]">24 sales this week</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">$120</span>
                </div>
                <div className="flex items-center gap-4">
                  <img alt="Woven basket" className="h-12 w-12 rounded-lg object-cover bg-gray-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEzHG0JSTWUAg743SA74OOO49uOrM6p8atxKxWxKHVQJjXiZk-vTiKlOFQ3guuoJqFSnzXl9_CmGrzqPt7AaQcTjJ77AS3uc_6T-FO6lyzz_gx1gaCIWlpzCwcnFRJ2vkEPg12NxfZEKSGFieb5U29rkhw1IQw4pG7abGIDlOmfq-jN4tC86d4-tYbvKBTBgKCVzNaTmIfV8HE0ROBFsm57VV8N3BPLL5CuK2HnpeYgxiDvuE8UpnOpOuSfU1iCLx1ykRCH7kkT5zI" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Woven Storage Basket</p>
                    <p className="text-xs text-[#8d7f76]">18 sales this week</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">$45</span>
                </div>
                <div className="flex items-center gap-4">
                  <img alt="Wooden cutting board" className="h-12 w-12 rounded-lg object-cover bg-gray-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALovzqJf_KRPB7rn0pVVRjVIxUmZXwACPqdww24XiZv7JLiI8JJkjgLcncS4722_gucauLGyHe7Dfit8vx72iKfNigG3I4z9Zgc1W9LVoBoowLVhtky3e2gQWMw1KlUeR9G-W__kjmaxxo5hwcKX1v1P3isFB919C7kJKOnGYRna_j648j8pi8VxjQDLBij2Ry0tyTCezNUqD5wVlYxj87u97KUDhVzGGL1YdAvrS_uNR7VVShlM-rS_CNUNemEliICNn9lNbjTiZH" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Walnut Cutting Board</p>
                    <p className="text-xs text-[#8d7f76]">12 sales this week</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">$85</span>
                </div>
              </div>
              <button className="mt-6 w-full py-2 text-sm text-[#8d7f76] hover:text-[#ec6d13] border border-dashed border-gray-300 dark:border-gray-700 rounded-lg transition-colors">
                View All Products
              </button>
            </div>
          </div>
          <div className="rounded-xl bg-white dark:bg-[#362a22] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <h3 className="font-bold text-gray-900 dark:text-white">Recent Orders</h3>
              <div className="flex gap-2">
                <button className="p-1.5 text-gray-400 hover:text-[#ec6d13] transition-colors">
                  <span className="material-icons text-xl">filter_list</span>
                </button>
                <button className="p-1.5 text-gray-400 hover:text-[#ec6d13] transition-colors">
                  <span className="material-icons text-xl">download</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-[#8d7f76]">
                <thead className="bg-gray-50 dark:bg-gray-800/50 text-xs uppercase text-gray-500 font-medium">
                  <tr>
                    <th className="px-6 py-4" scope="col">Order ID</th>
                    <th className="px-6 py-4" scope="col">Product</th>
                    <th className="px-6 py-4" scope="col">Customer</th>
                    <th className="px-6 py-4" scope="col">Date</th>
                    <th className="px-6 py-4" scope="col">Amount</th>
                    <th className="px-6 py-4" scope="col">Status</th>
                    <th className="px-6 py-4 text-right" scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">#ORD-001</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img alt="Product thumbnail" className="h-8 w-8 rounded object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtR9DrbcVyaTPjvBuuEeenxRj7oAX35uARclKnNyJTSliyN3YQVDQyXjf6fFQaTKfGSHkQ0c5K_21QYp_Xqlt8Do-UP5tqxKKzzbka4QhJsS2_lQdknqQBhSfGnbyQ_AznbrumghPA63w6IL0IAviHt3cGc7HPJX9BX_uMsWBflLP_iMjnfQiefEjLPM-ItbBMzxuveUJMKuduekAdkYGhQVh9WGyUik-bYNLTl3WSSDm0FdDzRvE0zjiBQCBMZLp4A0uP8PBsY4KV" />
                        <span className="truncate max-w-[150px]">Artisan Clay Vase</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Alice Smith</td>
                    <td className="whitespace-nowrap px-6 py-4">Oct 24, 2023</td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">$120.00</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/20 dark:text-green-400">Shipped</span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-[#ec6d13] transition-colors">
                        <span className="material-icons text-base">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">#ORD-002</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img alt="Product thumbnail" className="h-8 w-8 rounded object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz0vVfByGEClGuEzdkVivgfwxBlIyV9u-PNWqdkUl3endPNQ7wm-7mYuPzTinP-asN9IkttMbSebtlYmNbbt5XXjw4G_Sf87A_SJAeucEgK_F1ZoihwZUw4rzOERYdqZuSGFoR0lm6yRH9grEkndS6DVYz5sVy0iscRDdoBjGO1sWMU4ibif6ess_vz8B7ihTJMdaisi7cIxG1WHhLo8bA3sjvizQu4eDAJ_TZ65ZSEPzdVVm1E3MW7kfwNDX6m5tsX56j0e1ZCKEH" />
                        <span className="truncate max-w-[150px]">Woven Storage Basket</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Bob Jones</td>
                    <td className="whitespace-nowrap px-6 py-4">Oct 23, 2023</td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">$45.00</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 dark:bg-yellow-900/20 dark:text-yellow-400">Pending</span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-[#ec6d13] transition-colors">
                        <span className="material-icons text-base">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">#ORD-003</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img alt="Product thumbnail" className="h-8 w-8 rounded object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPHmHwRzEC7h0oTNJcPYT1x4L6EK2HjbrqpocNqBiAISE0i10Nk81aEJKO0H2TpviVXTqcJ2OOPJ2skGOim-xoD6nXLNYMH38ZIu6sDlq70A0H8CY5mUahbIguSdqdR96z5P3GN6zfv35BoXLP4xwzKapwG0RbhWvJZPRm8C_Z-RVlKeI0Hl8PchBte4o0zyemNwkftjZi46ZVU94iBkuIQeEp4Y2hbXhprp1a-II_j14-wVLnOK2EoBtgHvj5YjLWszrcGLYHaI0r" />
                        <span className="truncate max-w-[150px]">Walnut Cutting Board</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Elena Rodriguez</td>
                    <td className="whitespace-nowrap px-6 py-4">Oct 22, 2023</td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">$85.00</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400">Delivered</span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-[#ec6d13] transition-colors">
                        <span className="material-icons text-base">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <Outlet />
    </div>
  );
}
