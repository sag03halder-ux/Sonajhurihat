import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function VendorStore() {
  const [storeData, setStoreData] = useState({
    storeName: 'Earth & Clay Studio',
    tagline: 'Handcrafted ceramics for slow living.',
    description: "Hi! I'm Sarah, a ceramic artist based in Portland. I draw inspiration from the raw textures of the Pacific Northwest coastline. Every piece is thrown on the wheel and glazed by hand in my small home studio.",
    businessType: 'sole_proprietor',
    taxId: '',
    email: 'sarah@earthclaystudio.com',
    phone: '+1 (555) 123-4567',
    address: '742 Evergreen Terrace',
    city: 'Portland',
    state: 'OR',
    zipCode: '97201',
    country: 'United States',
    shippingProcessing: 'standard',
    returnsAccepted: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStoreData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving store data:', storeData);
  };

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
            <Link to="/store" className="flex items-center gap-3 rounded-lg bg-[#ec6d13]/10 px-4 py-3 text-[#ec6d13] transition-colors">
              <span className="material-icons text-[#ec6d13]">storefront</span>
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
              <span>Add Product</span>
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-[#f8f7f6] dark:bg-[#221810] p-6 lg:p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Store Settings</h1>
                <p className="text-[#8d7f76] mt-1">Manage your store information and preferences</p>
              </div>
              <button type="submit" className="bg-[#ec6d13] hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-sm shadow-orange-200 dark:shadow-none">
                <span className="material-icons text-sm">save</span>
                <span>Save Changes</span>
              </button>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="rounded-xl bg-white dark:bg-[#362a22] p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                  <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    <span className="material-icons text-[#ec6d13]">storefront</span> Store Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="storeName">Store Name</label>
                      <input className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#221810] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent sm:text-sm py-2.5 px-3" id="storeName" name="storeName" type="text" value={storeData.storeName} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="tagline">Tagline</label>
                      <input className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#221810] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent sm:text-sm py-2.5 px-3" id="tagline" name="tagline" type="text" value={storeData.tagline} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="description">Description</label>
                      <textarea className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#221810] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent sm:text-sm py-2.5 px-3" id="description" name="description" rows="4" value={storeData.description} onChange={handleChange} />
                      <p className="mt-1 text-xs text-gray-500 text-right">{storeData.description.length}/1000 characters</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Store Logo</label>
                      <div className="flex items-center gap-6">
                        <div className="relative group cursor-pointer">
                          <img className="h-20 w-20 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiq93PWbPWO-b8iKMcFIqzyB0b-RejQgVxy9C_Pyw3TUDP2jfzdQiEuhgfpXx3MUUloB88Mj87TdPqRcM6P4haAeKf3ovpwdwGptKmP-Wu6eV3g3oLkfuYiikiG574W4po3TfQZDTcyvV2SdyGPgBk3B-DmzaSfL2HL7-Dyqn6cLzUoPif9QB2Dc3KtHDTE0ke59VNreUvcXDT7OlJeRaOJcDp4VF63tez5s1-R69m3cP71sX6PwMGyWEgsANkeT6cUQHRTopQivHT" alt="Store logo" />
                          <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="material-icons text-white">edit</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Recommended: 400x400px</p>
                          <button type="button" className="text-sm text-[#ec6d13] font-medium hover:text-orange-600">Change Logo</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white dark:bg-[#362a22] p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                  <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    <span className="material-icons text-[#ec6d13]">business</span> Business Details
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="businessType">Business Type</label>
                      <select className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#221810] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent sm:text-sm py-2.5 px-3" id="businessType" name="businessType" value={storeData.businessType} onChange={handleChange}>
                        <option value="sole_proprietor">Sole Proprietor</option>
                        <option value="llc">Limited Liability Company (LLC)</option>
                        <option value="corporation">Corporation</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="taxId">Tax ID / EIN</label>
                      <input className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#221810] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent sm:text-sm py-2.5 px-3" id="taxId" name="taxId" type="text" placeholder="XX-XXXXXXX" value={storeData.taxId} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white dark:bg-[#362a22] p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                  <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    <span className="material-icons text-[#ec6d13]">contact_mail</span> Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">Email Address</label>
                      <input className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#221810] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent sm:text-sm py-2.5 px-3" id="email" name="email" type="email" value={storeData.email} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="phone">Phone Number</label>
                      <input className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#221810] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent sm:text-sm py-2.5 px-3" id="phone" name="phone" type="tel" value={storeData.phone} onChange={handleChange} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl bg-white dark:bg-[#362a22] p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                  <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    <span className="material-icons text-[#ec6d13]">location_on</span> Location / Address
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="address">Street Address</label>
                      <input className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#221810] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent sm:text-sm py-2.5 px-3" id="address" name="address" type="text" value={storeData.address} onChange={handleChange} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="city">City</label>
                        <input className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#221810] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent sm:text-sm py-2.5 px-3" id="city" name="city" type="text" value={storeData.city} onChange={handleChange} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="state">State</label>
                        <input className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#221810] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent sm:text-sm py-2.5 px-3" id="state" name="state" type="text" value={storeData.state} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="zipCode">ZIP Code</label>
                        <input className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#221810] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent sm:text-sm py-2.5 px-3" id="zipCode" name="zipCode" type="text" value={storeData.zipCode} onChange={handleChange} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="country">Country</label>
                        <input className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#221810] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent sm:text-sm py-2.5 px-3" id="country" name="country" type="text" value={storeData.country} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white dark:bg-[#362a22] p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                  <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    <span className="material-icons text-[#ec6d13]">local_shipping</span> Shipping Settings
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="shippingProcessing">Processing Time</label>
                      <select className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#221810] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent sm:text-sm py-2.5 px-3" id="shippingProcessing" name="shippingProcessing" value={storeData.shippingProcessing} onChange={handleChange}>
                        <option value="standard">Standard (3-5 business days)</option>
                        <option value="made_to_order">Made to Order (1-2 weeks)</option>
                        <option value="custom">Custom (Contact for details)</option>
                        <option value="express">Express (1-2 business days)</option>
                      </select>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#ec6d13]/5 rounded-lg border border-[#ec6d13]/10">
                      <span className="material-icons text-[#ec6d13] text-sm mt-0.5">info</span>
                      <p className="text-xs text-gray-600 dark:text-gray-300">Set accurate processing times to manage customer expectations.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white dark:bg-[#362a22] p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                  <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    <span className="material-icons text-[#ec6d13]">policy</span> Return Policy
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Returns</label>
                      <div className="flex gap-4 mt-2">
                        <label className="inline-flex items-center">
                          <input checked={storeData.returnsAccepted} className="form-radio text-[#ec6d13] focus:ring-[#ec6d13]" name="returnsAccepted" type="radio" value="true" onChange={() => setStoreData(prev => ({ ...prev, returnsAccepted: true }))} />
                          <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Accept returns</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input checked={!storeData.returnsAccepted} className="form-radio text-[#ec6d13] focus:ring-[#ec6d13]" name="returnsAccepted" type="radio" value="false" onChange={() => setStoreData(prev => ({ ...prev, returnsAccepted: false }))} />
                          <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">No returns</span>
                        </label>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#ec6d13]/5 rounded-lg border border-[#ec6d13]/10">
                      <span className="material-icons text-[#ec6d13] text-sm mt-0.5">info</span>
                      <p className="text-xs text-gray-600 dark:text-gray-300">Clear policies help build trust with buyers and reduce disputes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
