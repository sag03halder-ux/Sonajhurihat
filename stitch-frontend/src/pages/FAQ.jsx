import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'general', name: 'General', icon: 'help_outline' },
  { id: 'orders', name: 'Orders', icon: 'receipt_long' },
  { id: 'shipping', name: 'Shipping', icon: 'local_shipping' },
  { id: 'returns', name: 'Returns', icon: 'replay' },
  { id: 'account', name: 'Account', icon: 'person' },
];

const faqData = {
  general: [
    {
      question: 'What is your company about?',
      answer: 'We are a premier destination for high-quality stitching and tailoring services. Our expert craftsmen bring years of experience to deliver perfect fits and beautiful designs.'
    },
    {
      question: 'What are your business hours?',
      answer: 'Our stores are open Monday through Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays. Online support is available 24/7.'
    },
    {
      question: 'Do you offer custom designs?',
      answer: 'Yes! We specialize in custom stitching and alterations. Simply visit our store or contact us to discuss your requirements.'
    }
  ],
  orders: [
    {
      question: 'How can I place an order?',
      answer: 'You can place orders through our website, visit our store in person, or call our customer service line. For custom work, we recommend visiting our store for measurements and fabric selection.'
    },
    {
      question: 'Can I modify or cancel my order?',
      answer: 'Orders can be modified or cancelled within 24 hours of placing them, provided production has not yet begun. Contact our support team as soon as possible.'
    },
    {
      question: 'How do I track my order?',
      answer: 'You can track your order using the tracking number provided in your confirmation email. Alternatively, log in to your account and visit the Order Tracking page.'
    }
  ],
  shipping: [
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide! International shipping times vary by destination and local customs processing. Shipping costs are calculated at checkout based on weight and destination.'
    },
    {
      question: 'How long will it take to receive my order?',
      answer: 'Delivery times vary: In-stock items ship within 1-3 business days. Made-to-order items can take 1-2 weeks for creation before shipping. You will receive a tracking number once your package is dispatched.'
    },
    {
      question: 'My package is lost or damaged. What do I do?',
      answer: 'We are sorry to hear that! Please contact our support team within 48 hours of receiving a damaged item with photos of the damage. If your package is lost in transit, we will work with the carrier to locate it or issue a replacement.'
    }
  ],
  returns: [
    {
      question: 'What is your return policy?',
      answer: 'We accept returns on most items within 30 days of delivery. Items must be unused and in original packaging. Custom-made or personalized items are final sale unless they arrive damaged or defective.'
    },
    {
      question: 'How do I initiate a return?',
      answer: 'To initiate a return, please contact our customer service team with your order number and reason for return. We will provide you with a return shipping label and further instructions.'
    },
    {
      question: 'When will I receive my refund?',
      answer: 'Refunds are typically processed within 5-7 business days after we receive and inspect your returned item. The amount will be credited to your original payment method.'
    }
  ],
  account: [
    {
      question: 'How do I create an account?',
      answer: 'Click on the "Sign Up" button in the top right corner of the website. Fill in your details including name, email address, and create a password. You can also sign up using your Google or Facebook account.'
    },
    {
      question: 'How do I reset my password?',
      answer: 'Click on "Login" and then select "Forgot Password". Enter your email address and we will send you a link to reset your password.'
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Yes, we take data security seriously. All your personal information is encrypted and stored securely. We never share your data with third parties without your consent.'
    }
  ]
};

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 hover:shadow-md">
      <summary 
        className="flex justify-between items-center cursor-pointer p-6 list-none"
        onClick={(e) => { e.preventDefault(); onToggle(); }}
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white pr-6">{question}</h3>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <span className="material-icons text-[#ec6d13]">expand_more</span>
        </span>
      </summary>
      <div className={`px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed ${isOpen ? 'block' : 'hidden'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const filteredFaqs = searchQuery
    ? Object.entries(faqData).reduce((acc, [category, items]) => {
        const filtered = items.filter(
          item => 
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filtered.length > 0) {
          acc[category] = filtered;
        }
        return acc;
      }, {})
    : faqData;

  return (
    <div className="min-h-screen bg-[#f8f7f6] dark:bg-[#221810] font-sans">
      <nav className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-[#ec6d13] tracking-tighter">
                Stitch<span className="text-gray-900 dark:text-white">Pro</span>
              </Link>
            </div>
            <div className="hidden sm:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
              <Link to="/" className="hover:text-[#ec6d13] transition-colors">Shop</Link>
              <Link to="/" className="hover:text-[#ec6d13] transition-colors">Services</Link>
              <Link to="/" className="hover:text-[#ec6d13] transition-colors">About</Link>
              <Link to="/faq" className="text-[#ec6d13]">Help</Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="material-icons text-gray-500 hover:text-[#ec6d13] cursor-pointer">shopping_bag</span>
              <Link to="/login">
                <span className="material-icons text-gray-500 hover:text-[#ec6d13] cursor-pointer">person</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500 dark:text-gray-400">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="hover:text-[#ec6d13]">Home</Link></li>
              <li><span className="material-icons text-base">chevron_right</span></li>
              <li><Link to="/" className="hover:text-[#ec6d13]">Help Center</Link></li>
              <li><span className="material-icons text-base">chevron_right</span></li>
              <li className="font-medium text-gray-900 dark:text-white">FAQ</li>
            </ol>
          </nav>
        </div>

        <div className="relative bg-white dark:bg-zinc-900 shadow-sm border-b border-gray-200 dark:border-zinc-800 pb-16 pt-10 px-4 sm:px-6 lg:px-8 mb-10 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#ec6d13]/10 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-[#ec6d13]/5 blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">How can we help you?</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Find answers to common questions about our stitching services.</p>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-icons text-gray-400 text-2xl">search</span>
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 border-2 border-transparent bg-[#f8f7f6] dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent rounded-lg shadow-sm transition-all text-lg"
                placeholder="Search for answers (e.g., shipping, orders)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#ec6d13] hover:bg-orange-600 text-white px-6 rounded-md font-medium transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <aside className="lg:col-span-3 mb-8 lg:mb-0">
              <nav className="space-y-1 sticky top-24">
                <h3 className="uppercase text-xs font-bold text-gray-400 dark:text-gray-500 tracking-wider mb-4 px-3">Categories</h3>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg w-full text-left transition-colors ${
                      activeCategory === category.id
                        ? 'bg-[#ec6d13]/10 text-[#ec6d13]'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <span className={`material-icons text-lg mr-3 ${
                      activeCategory === category.id
                        ? 'text-[#ec6d13]'
                        : 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300'
                    }`}>
                      {category.icon}
                    </span>
                    {category.name}
                  </button>
                ))}
              </nav>
            </aside>

            <div className="lg:col-span-9">
              {searchQuery ? (
                <div className="space-y-8">
                  {Object.entries(filteredFaqs).map(([category, items]) => (
                    <div key={category} className="mb-12">
                      <div className="flex items-center mb-6 border-b border-gray-200 dark:border-zinc-800 pb-2">
                        <span className="material-icons text-[#ec6d13] mr-3 text-2xl">
                          {categories.find(c => c.id === category)?.icon}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                          {category}
                        </h2>
                      </div>
                      <div className="space-y-4">
                        {items.map((item, idx) => (
                          <AccordionItem
                            key={idx}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openItems[`${category}-${idx}`] || false}
                            onToggle={() => toggleItem(`${category}-${idx}`)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                  {Object.keys(filteredFaqs).length === 0 && (
                    <div className="text-center py-12">
                      <span className="material-icons text-6xl text-gray-300 dark:text-gray-600 mb-4">search_off</span>
                      <p className="text-gray-500 dark:text-gray-400 text-lg">No results found for "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-8">
                  {categories.map((category) => (
                    <div key={category.id} className="mb-12">
                      <div className="flex items-center mb-6 border-b border-gray-200 dark:border-zinc-800 pb-2">
                        <span className="material-icons text-[#ec6d13] mr-3 text-2xl">{category.icon}</span>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.name}</h2>
                      </div>
                      <div className="space-y-4">
                        {faqData[category.id]?.map((item, idx) => (
                          <AccordionItem
                            key={idx}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openItems[`${category.id}-${idx}`] || false}
                            onToggle={() => toggleItem(`${category.id}-${idx}`)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-[#ec6d13]/10 rounded-full mb-6">
              <span className="material-icons text-[#ec6d13] text-3xl">support_agent</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Still need help?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Can't find the answer you're looking for? Our friendly support team is here to assist you with any questions about our services or your order.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#ec6d13] hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl">
                Contact Support
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#221810] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-[#ec6d13] tracking-tighter block mb-4">
              Stitch<span className="text-white">Pro</span>
            </span>
            <p className="text-gray-400 max-w-sm text-sm">Professional stitching and tailoring services with perfect fits and beautiful designs.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#ec6d13]">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white">Custom Stitching</Link></li>
              <li><Link to="/" className="hover:text-white">Alterations</Link></li>
              <li><Link to="/" className="hover:text-white">Measurements</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#ec6d13]">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white">About Us</Link></li>
              <li><Link to="/" className="hover:text-white">Contact</Link></li>
              <li><Link to="/" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          © 2024 StitchPro Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
