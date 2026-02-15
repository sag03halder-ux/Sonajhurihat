import React from 'react';
import { Link } from 'react-router-dom';

const tickets = [
  {
    id: 'TKT-001',
    subject: 'Refund Request: Broken Ceramic Vase',
    customer: 'Sarah Jenkins',
    date: 'Oct 24, 2023',
    status: 'Open',
    priority: 'High',
    orderId: '#12345'
  },
  {
    id: 'TKT-002',
    subject: 'Shipping Inquiry: Wool Scarf',
    customer: 'Michael Chen',
    date: 'Oct 23, 2023',
    status: 'Pending',
    priority: 'Low',
    orderId: '#12342'
  },
  {
    id: 'TKT-003',
    subject: 'Custom Order Question',
    customer: 'Emma Watson',
    date: 'Oct 22, 2023',
    status: 'Resolved',
    priority: 'Medium',
    orderId: 'Pre-Sale'
  },
  {
    id: 'TKT-004',
    subject: 'Return: Wooden Bowl Set',
    customer: "Liam O'Connor",
    date: 'Oct 20, 2023',
    status: 'Open',
    priority: 'Low',
    orderId: '#12330'
  }
];

const refundRequests = [
  {
    id: 'REF-001',
    orderId: '#12345',
    customer: 'Sarah Jenkins',
    amount: '$45.00',
    reason: 'Damaged Item',
    date: 'Oct 24, 2023',
    status: 'Pending'
  },
  {
    id: 'REF-002',
    orderId: '#12330',
    customer: "Liam O'Connor",
    amount: '$120.00',
    reason: 'Wrong Size',
    date: 'Oct 20, 2023',
    status: 'Approved'
  }
];

const faqs = [
  {
    question: 'How do I process a refund?',
    answer: 'Go to the refund request section, review the customer\'s reason, and click Approve or Reject. The refund will be processed within 5-7 business days.'
  },
  {
    question: 'What is the return policy for customers?',
    answer: 'Customers can return items within 30 days of delivery if they are damaged, defective, or not as described.'
  },
  {
    question: 'How do I respond to support tickets?',
    answer: 'Click on a ticket to open the conversation, type your response in the message box, and click Send Reply.'
  },
  {
    question: 'Can I issue partial refunds?',
    answer: 'Yes, you can issue partial refunds for items that are partially damaged or if the customer agrees to keep the item at a reduced price.'
  }
];

const getStatusBadge = (status) => {
  const styles = {
    Open: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
    Pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
    Resolved: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
    Approved: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
  };
  return styles[status] || 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
};

const getPriorityBadge = (priority) => {
  const styles = {
    High: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
    Medium: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    Low: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
  };
  return styles[priority] || 'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20';
};

export default function VendorSupport() {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden w-64 overflow-y-auto border-r border-gray-200 bg-white dark:border-gray-800 md:block flex-shrink-0">
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
            <Link to="/" className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="material-icons text-[#8d7f76]">dashboard</span>
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link to="/products" className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="material-icons text-[#8d7f76]">inventory_2</span>
              <span className="font-medium">My Products</span>
            </Link>
            <Link to="/orders" className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="material-icons text-[#8d7f76]">shopping_bag</span>
              <span className="font-medium">Orders</span>
            </Link>
            <Link to="/support" className="flex items-center gap-3 rounded-lg bg-[#ec6d13]/10 px-4 py-3 text-[#ec6d13] transition-colors">
              <span className="material-icons">support_agent</span>
              <span className="font-medium">Support & Refunds</span>
            </Link>
            <Link to="/analytics" className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="material-icons text-[#8d7f76]">bar_chart</span>
              <span className="font-medium">Analytics</span>
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
        <div className="absolute bottom-0 w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-white p-4">
          <div className="flex items-center gap-3">
            <img alt="Vendor profile picture" className="h-10 w-10 rounded-full object-cover border-2 border-[#ec6d13]/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHfkaCsMHMq37MOBXHxq4IC_3eXt9W5oAGci9UFnq8hQXedGV-vI90CAj0GoFlYweMlTpHQwPiiRNQ8DNheRBKIQsK4TjHh6553C2hFaGaUn6CtsYnL1GrvOyj6ZVQq1TiaL4rY38kc-vJlo-fJSW4LvZoV7xmPlRE09cV79Q1bC0tDmKY9ekP5ldWkO2O-D6K2i0cjSIJTiRXvxDleWTVlknLZz0ZCgzPWDR7kD464LMew2wxhaqPULg6l1HfwqBMAwvavyQyNRhb" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-900 truncate">Marcus Artisan</p>
              <p className="text-xs text-[#8d7f76] truncate">marcus@handcrafted.com</p>
            </div>
            <button className="text-[#8d7f76] hover:text-[#ec6d13] transition-colors">
              <span className="material-icons">logout</span>
            </button>
          </div>
        </div>
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-white px-6 lg:px-8">
          <div className="flex items-center gap-4 lg:hidden">
            <button className="text-gray-500 hover:text-[#ec6d13]">
              <span className="material-icons">menu</span>
            </button>
            <span className="text-lg font-bold text-gray-900">CraftMarket</span>
          </div>
          <div className="hidden lg:flex w-full max-w-xl items-center">
            <div className="relative w-full">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">search</span>
              <input className="w-full rounded-lg border-0 bg-[#f8f7f6] py-2.5 pl-10 pr-4 text-sm text-gray-900 focus:ring-2 focus:ring-[#ec6d13] placeholder-gray-400" placeholder="Search tickets, orders..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 transition-colors">
              <span className="material-icons text-2xl">notifications</span>
              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white"></span>
            </button>
            <button className="bg-[#ec6d13] hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-sm shadow-orange-200">
              <span className="material-icons text-sm">add</span>
              <span>Add Product</span>
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-[#f8f7f6] p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Support & Refunds</h1>
            <p className="text-[#8d7f76] mt-1">Manage support tickets and refund requests</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-lg bg-red-50 p-2">
                  <span className="material-icons text-red-600">confirmation_number</span>
                </div>
              </div>
              <p className="text-sm font-medium text-[#8d7f76]">Open Tickets</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-lg bg-yellow-50 p-2">
                  <span className="material-icons text-yellow-600">hourglass_empty</span>
                </div>
              </div>
              <p className="text-sm font-medium text-[#8d7f76]">Pending Refunds</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">5</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-lg bg-green-50 p-2">
                  <span className="material-icons text-green-600">check_circle</span>
                </div>
              </div>
              <p className="text-sm font-medium text-[#8d7f76]">Resolved Today</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-lg bg-blue-50 p-2">
                  <span className="material-icons text-blue-600">star</span>
                </div>
              </div>
              <p className="text-sm font-medium text-[#8d7f76]">Avg. Response</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">2.4h</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Support Tickets</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-xs font-medium text-[#8d7f76]">{ticket.id}</span>
                      <h3 className="font-semibold text-gray-900 mt-1">{ticket.subject}</h3>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusBadge(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#8d7f76] mb-3">
                    <span className="flex items-center gap-1">
                      <span className="material-icons text-base">person</span>
                      {ticket.customer}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-icons text-base">calendar_today</span>
                      {ticket.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${getPriorityBadge(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 border border-gray-200">
                      {ticket.orderId}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Refund Requests</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-500 font-medium">
                    <tr>
                      <th className="px-6 py-4">Refund ID</th>
                      <th className="px-6 py-4">Order ID</th>
                      <th className="px-6 py-4">Customer</th>
                      <th className="px-6 py-4">Amount</th>
                      <th className="px-6 py-4">Reason</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {refundRequests.map((refund) => (
                      <tr key={refund.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{refund.id}</td>
                        <td className="px-6 py-4 text-gray-600">{refund.orderId}</td>
                        <td className="px-6 py-4 text-gray-600">{refund.customer}</td>
                        <td className="px-6 py-4 font-medium text-gray-900">{refund.amount}</td>
                        <td className="px-6 py-4 text-gray-600">{refund.reason}</td>
                        <td className="px-6 py-4 text-gray-600">{refund.date}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusBadge(refund.status)}`}>
                            {refund.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#ec6d13] hover:text-orange-600 font-medium text-sm">
                            Review
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Contact Support</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#ec6d13]/10 p-3">
                    <span className="material-icons text-[#ec6d13]">email</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Support</h3>
                    <p className="text-sm text-[#8d7f76] mt-1">support@craftmarket.com</p>
                    <p className="text-xs text-[#8d7f76] mt-1">Response within 24h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#ec6d13]/10 p-3">
                    <span className="material-icons text-[#ec6d13]">phone</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Support</h3>
                    <p className="text-sm text-[#8d7f76] mt-1">1-800-CRAFT</p>
                    <p className="text-xs text-[#8d7f76] mt-1">Mon-Fri, 9am-6pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#ec6d13]/10 p-3">
                    <span className="material-icons text-[#ec6d13]">chat</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Live Chat</h3>
                    <p className="text-sm text-[#8d7f76] mt-1">Available 24/7</p>
                    <button className="text-xs text-[#ec6d13] hover:text-orange-600 font-medium mt-1">
                      Start Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="material-icons text-[#ec6d13] text-lg">help_outline</span>
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[#8d7f76] ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
