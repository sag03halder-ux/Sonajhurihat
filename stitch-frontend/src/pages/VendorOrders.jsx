import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const orders = [
  {
    id: 'ORD-2024-001',
    product: 'Hand-knitted Wool Scarf',
    variant: 'Teal, One Size',
    customer: 'Alice Smith',
    customerInitials: 'AS',
    date: 'Oct 24, 2023',
    amount: 45.00,
    status: 'Pending',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO5pD0KGn53I1-aFbreXm-cdq_pvuxWmpIoQYlKkIhV7sml5e-ldLqOTnrvJBS4uLf1_l0fBvAChMb2-EHPKCuWiQ9oJZnaNKYoOI_OPIzXIB37rbvLATM8xXIakxYxhOQx-R-lbQyAFIanxYZBEAcZlvHYc-tDkWqJ0BG68DQVDnHmkKEpy6NUz8F1dVzGsaLiDAWWEgLM1W3aPJqEUqpfQo0WRkNBNBTOzGVZ-csUArxvFN2LJB9h_5H6JHTAUO0Fk_4gJpCoLsn'
  },
  {
    id: 'ORD-2024-002',
    product: 'Ceramic Flower Vase',
    variant: 'Speckled White',
    customer: 'John Doe',
    customerInitials: 'JD',
    date: 'Oct 23, 2023',
    amount: 82.50,
    status: 'Shipped',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLzMWbkR7F6L_rPvUJA2amewUQHdyxPVrTO8KAmirxgbpu9jNKWoNr115MxYGqgJ470j4D-LDrp_5thrcFhfLWmdnbQyO6acrQB83wvj4Y6_MpYaxXrRjepzvdTUL4py_TWlhmOyYBkmd5XKUrzB1_XK4jpoxNrcYLNUaPWXgQn9VNlmds66-9lOhql4i8cXHpqLQ1Nz4Nn_dT4k1riRAP-52PAeq9_fqLhI0Rz_4HxDmOBOZFkdT71hcaWKTDRSfEI_0vcNUpRt5_'
  },
  {
    id: 'ORD-2024-003',
    product: 'Olive Wood Spoon Set',
    variant: 'Set of 3',
    customer: 'Maria Rodriguez',
    customerInitials: 'MR',
    date: 'Oct 21, 2023',
    amount: 120.00,
    status: 'Delivered',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpjwOm_Lu4vnZK5zlLCUu1M_lBt3oHKwsysnQtvo9cul3_vTxhhU3NOJnebLimki7XQvOPmTJg2s_QcsgQIs1dMylDHPFjxwY_Kd4yDcbY6glo3sc9pbvfcuObVujWiQm2KQzWZJ3bkulxj6v14ZERevvH7J7_6SewoBPYa6B4-TOuDhajji_-hQBLlqmgj3vK6z5caTCFHk-eyhrvP5IAhKLOF0n-ykzdaXW4nMiG24NTMabahC8kw2sIAkqrqV4at0ygVDrZaXfp'
  },
  {
    id: 'ORD-2024-004',
    product: 'Macrame Wall Hanging',
    variant: 'Natural Cotton',
    customer: 'Elena Kim',
    customerInitials: 'EK',
    date: 'Oct 20, 2023',
    amount: 65.00,
    status: 'Pending',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPmuw7IppcSj4NKoCpv0FFW9STYiYNp62ZAnMUlh8B5xH7Z2hlE4MgJ2Lwrwl_Ofi0PVYhWlorwrMCmH24Bmynxb3mkgJZMHiMHEyJJiuY3V51o112k8OrL4WmrxQziqXkNpcPkeTsceOVIYM7zoGZ-nJx1KfQFJTqWJTzlch2cRhFhSIPnZhmNHhHSb23H6uZPlAVGlhbYEfGC6aQS2uh4Ox1GBtcJxX4yzLh0QjOUj1LRHqaP_y0-rQIhCnx1RqKurae1x7kibdA'
  },
  {
    id: 'ORD-2024-005',
    product: 'Leather Journal',
    variant: 'Brown, A5',
    customer: 'Michael Brown',
    customerInitials: 'MB',
    date: 'Oct 19, 2023',
    amount: 35.00,
    status: 'Processing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLzMWbkR7F6L_rPvUJA2amewUQHdyxPVrTO8KAmirxgbpu9jNKWoNr115MxYGqgJ470j4D-LDrp_5thrcFhfLWmdnbQyO6acrQB83wvj4Y6_MpYaxXrRjepzvdTUL4py_TWlhmOyYBkmd5XKUrzB1_XK4jpoxNrcYLNUaPWXgQn9VNlmds66-9lOhql4i8cXHpqLQ1Nz4Nn_dT4k1riRAP-52PAeq9_fqLhI0Rz_4HxDmOBOZFkdT71hcaWKTDRSfEI_0vcNUpRt5_'
  },
  {
    id: 'ORD-2024-006',
    product: 'Handwoven Basket',
    variant: 'Medium, Natural',
    customer: 'Sarah Wilson',
    customerInitials: 'SW',
    date: 'Oct 18, 2023',
    amount: 55.00,
    status: 'Cancelled',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO5pD0KGn53I1-aFbreXm-cdq_pvuxWmpIoQYlKkIhV7sml5e-ldLqOTnrvJBS4uLf1_l0fBvAChMb2-EHPKCuWiQ9oJZnaNKYoOI_OPIzXIB37rbvLATM8xXIakxYxhOQx-R-lbQyAFIanxYZBEAcZlvHYc-tDkWqJ0BG68DQVDnHmkKEpy6NUz8F1dVzGsaLiDAWWEgLM1W3aPJqEUqpfQo0WRkNBNBTOzGVZ-csUArxvFN2LJB9h_5H6JHTAUO0Fk_4gJpCoLsn'
  }
];

const filterTabs = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

const statusColors = {
  Pending: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200',
  Processing: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200',
  Shipped: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200',
  Delivered: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200',
  Cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200'
};

const sidebarLinks = [
  { name: 'Dashboard', icon: 'dashboard', path: '/vendor' },
  { name: 'My Products', icon: 'inventory_2', path: '/vendor/products' },
  { name: 'Orders', icon: 'shopping_bag', path: '/vendor/orders' },
  { name: 'Analytics', icon: 'bar_chart', path: '/vendor/analytics' },
  { name: 'Messages', icon: 'mail', path: '/vendor/messages' },
  { name: 'Shop Settings', icon: 'storefront', path: '/vendor/settings' },
  { name: 'Payouts', icon: 'payment', path: '/vendor/payouts' }
];

export default function VendorOrders() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = {
    Pending: 5,
    Processing: 3,
    Shipped: 8,
    Delivered: 126
  };

  const filteredOrders = orders.filter(order => {
    const matchesFilter = activeFilter === 'All' || order.status === activeFilter;
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.product.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f7f6] dark:bg-[#221810]">
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
            {sidebarLinks.slice(0, 5).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                  link.name === 'Orders'
                    ? 'bg-[#ec6d13]/10 text-[#ec6d13]'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <span className="material-icons">{link.icon}</span>
                <span className="font-medium">{link.name}</span>
                {link.name === 'Orders' && (
                  <span className="ml-auto rounded-full bg-[#ec6d13] px-2 py-0.5 text-xs text-white">6</span>
                )}
              </Link>
            ))}
          </nav>
          <p className="px-4 text-xs font-semibold uppercase tracking-wider text-[#8d7f76] mt-8 mb-4">Shop Management</p>
          <nav className="space-y-1">
            {sidebarLinks.slice(5).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="material-icons text-[#8d7f76]">{link.icon}</span>
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 dark:bg-[#362a22] dark:border-gray-800">
          <div className="flex items-center gap-4 md:hidden">
            <button className="p-2 text-gray-600 dark:text-gray-300">
              <span className="material-icons">menu</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#ec6d13] flex items-center justify-center text-white">
                <span className="material-icons text-xl">handyman</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">CraftMarket</span>
            </div>
          </div>
          <div className="hidden md:flex md:w-64 lg:w-96">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="material-icons text-gray-400">search</span>
              </span>
              <input
                type="text"
                placeholder="Search products, orders..."
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-[#ec6d13] focus:outline-none focus:ring-1 focus:ring-[#ec6d13] dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <span className="material-icons">notifications</span>
            </button>
            <Link
              to="/vendor/products/new"
              className="hidden items-center gap-2 rounded-lg bg-[#ec6d13] px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 md:flex"
            >
              <span className="material-icons text-sm">add</span>
              Add Product
            </Link>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#ec6d13] flex items-center justify-center text-white text-sm font-bold">
                AA
              </div>
              <span className="hidden text-sm font-medium text-gray-700 dark:text-gray-200 lg:block">Artisan Alex</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Order Management</h1>
                <p className="mt-1 text-slate-500 dark:text-slate-400">Track and fulfill your handmade creations.</p>
              </div>
              <div className="flex gap-3">
                <button className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                  <span className="material-icons text-base mr-2">download</span>
                  Export CSV
                </button>
                <button className="inline-flex items-center rounded-lg bg-[#ec6d13] px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 shadow-sm">
                  <span className="material-icons text-base mr-2">add</span>
                  Create Order
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              <div className="rounded-xl border border-orange-100 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#2a2018]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Pending</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{stats.Pending}</p>
                  </div>
                  <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
                    <span className="material-icons text-[#ec6d13]">hourglass_empty</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-orange-100 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#2a2018]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Processing</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{stats.Processing}</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                    <span className="material-icons text-blue-600">sync</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-orange-100 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#2a2018]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Shipped</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{stats.Shipped}</p>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
                    <span className="material-icons text-purple-600">local_shipping</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-orange-100 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#2a2018]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Delivered</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{stats.Delivered}</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                    <span className="material-icons text-green-600">check_circle</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-orange-100 bg-white shadow-sm dark:border-white/5 dark:bg-[#2a2018]">
              <div className="flex flex-col items-center justify-between gap-4 border-b border-slate-100 p-4 dark:border-white/5 sm:flex-row">
                <div className="flex space-x-1 overflow-x-auto pb-2 sm:pb-0">
                  {filterTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveFilter(tab)}
                      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        activeFilter === tab
                          ? 'bg-[#ec6d13] text-white shadow-sm'
                          : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5'
                      }`}
                    >
                      {tab}
                      {tab !== 'All' && tab !== 'Shipped' && tab !== 'Cancelled' && (
                        <span className="ml-1 rounded bg-orange-100 px-1.5 py-0.5 text-xs dark:bg-orange-900/40 dark:text-orange-300">
                          {tab === 'Pending' ? stats.Pending : tab === 'Processing' ? stats.Processing : tab === 'Delivered' ? stats.Delivered : ''}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="material-icons text-slate-400">search</span>
                    </span>
                    <input
                      type="text"
                      placeholder="Search orders, customers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-[#ec6d13] focus:outline-none focus:ring-1 focus:ring-[#ec6d13] sm:w-64 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                    />
                  </div>
                  <button className="rounded-lg border border-gray-300 bg-white p-2 text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <span className="material-icons">filter_list</span>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-white/5">
                  <thead className="bg-slate-50 dark:bg-white/5">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Status
                      </th>
                      <th className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white dark:divide-white/5 dark:bg-[#2a2018]">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="group cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-white/5">
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-[#ec6d13]">
                          {order.id}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img className="h-10 w-10 rounded object-cover" src={order.image} alt={order.product} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm text-gray-900 dark:text-white">{order.product}</div>
                              <div className="text-xs text-slate-500">{order.variant}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600 dark:bg-slate-700 dark:text-slate-300 mr-3">
                              {order.customerInitials}
                            </div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{order.customer}</div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                          {order.date}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          ${order.amount.toFixed(2)}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusColors[order.status]}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <button className="text-[#ec6d13] opacity-0 transition-opacity group-hover:opacity-100 hover:text-orange-700 dark:hover:text-orange-400 font-semibold">
                            Manage
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3 dark:border-white/5 sm:px-6">
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredOrders.length}</span> of <span className="font-medium">{orders.length}</span> results
                    </p>
                  </div>
                  <nav className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm">
                    <button className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                      <span className="sr-only">Previous</span>
                      <span className="material-icons text-sm">chevron_left</span>
                    </button>
                    <button className="relative inline-flex items-center border border-[#ec6d13] bg-orange-50 px-4 py-2 text-sm font-medium text-[#ec6d13] dark:bg-[#ec6d13]/20">
                      1
                    </button>
                    <button className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                      2
                    </button>
                    <button className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                      3
                    </button>
                    <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
                      ...
                    </span>
                    <button className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                      <span className="sr-only">Next</span>
                      <span className="material-icons text-sm">chevron_right</span>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
