import React from 'react';
import { Link } from 'react-router-dom';

const VendorProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Hand-woven Bamboo Basket',
      category: 'Home Decor',
      price: 45.00,
      stock: 12,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?w=150&h=150&fit=crop',
      sku: 'BMB-001',
      lastUpdated: 'Oct 24, 2023'
    },
    {
      id: 2,
      name: 'Ceramic Flower Vase',
      category: 'Pottery',
      price: 120.00,
      stock: 0,
      status: 'Draft',
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=150&h=150&fit=crop',
      sku: 'CER-045',
      lastUpdated: '2 hours ago'
    },
    {
      id: 3,
      name: 'Merino Wool Scarf',
      category: 'Textiles',
      price: 85.00,
      stock: 3,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=150&h=150&fit=crop',
      sku: 'TXT-892',
      lastUpdated: 'Yesterday'
    },
    {
      id: 4,
      name: 'Silver Leaf Ring',
      category: 'Jewelry',
      price: 65.00,
      stock: 25,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=150&h=150&fit=crop',
      sku: 'JWL-220',
      lastUpdated: 'Oct 20, 2023'
    },
    {
      id: 5,
      name: 'Oak Serving Board',
      category: 'Woodwork',
      price: 55.00,
      stock: 8,
      status: 'Draft',
      image: 'https://images.unsplash.com/photo-1605433246452-28d0d82ff457?w=150&h=150&fit=crop',
      sku: 'WDK-101',
      lastUpdated: 'Oct 18, 2023'
    },
    {
      id: 6,
      name: 'Hand-painted Ceramic Bowl',
      category: 'Pottery',
      price: 38.00,
      stock: 0,
      status: 'Out of Stock',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=150&h=150&fit=crop',
      sku: 'CER-102',
      lastUpdated: 'Oct 15, 2023'
    },
  ];

  const stats = [
    { label: 'Total Products', value: '124', icon: 'inventory', color: 'bg-orange-100 text-[#ec6d13]', textColor: 'text-gray-900' },
    { label: 'Active', value: '112', icon: 'visibility', color: 'bg-green-100 text-green-600', textColor: 'text-green-600' },
    { label: 'Draft', value: '8', icon: 'edit_note', color: 'bg-orange-100 text-[#ec6d13]', textColor: 'text-gray-900' },
    { label: 'Out of Stock', value: '4', icon: 'error_outline', color: 'bg-red-100 text-red-500', textColor: 'text-red-500' },
  ];

  const filters = ['All', 'Active', 'Draft', 'Out of Stock'];
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'All' || product.status === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status) => {
    const styles = {
      'Active': 'bg-green-100 text-green-800 border-green-200',
      'Draft': 'bg-orange-100 text-[#ec6d13] border-orange-200',
      'Out of Stock': 'bg-red-100 text-red-800 border-red-200',
    };
    return styles[status] || styles['Draft'];
  };

  const getStockDisplay = (stock, status) => {
    if (stock === 0 || status === 'Out of Stock') {
      return <span className="text-red-500 font-medium flex items-center gap-1">0 in stock <span className="material-icons text-sm">error_outline</span></span>;
    }
    if (stock <= 3) {
      return <span className="text-orange-600 font-medium">{stock} in stock</span>;
    }
    return <span className="text-gray-600">{stock} in stock</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#ec6d13] flex items-center justify-center text-white">
            <span className="material-icons">storefront</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">ArtisanHub</span>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-[#ec6d13] rounded-lg transition-colors">
            <span className="material-icons">dashboard</span>
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-[#ec6d13] rounded-lg transition-colors">
            <span className="material-icons">shopping_bag</span>
            <span className="font-medium">Orders</span>
            <span className="ml-auto bg-orange-200 text-[#ec6d13] text-xs font-bold px-2 py-0.5 rounded-full">3</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 bg-orange-50 text-[#ec6d13] rounded-lg transition-colors border-l-4 border-[#ec6d13]">
            <span className="material-icons">inventory_2</span>
            <span className="font-medium">Products</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-[#ec6d13] rounded-lg transition-colors">
            <span className="material-icons">analytics</span>
            <span className="font-medium">Analytics</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-[#ec6d13] rounded-lg transition-colors">
            <span className="material-icons">settings</span>
            <span className="font-medium">Settings</span>
          </Link>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <img alt="Profile" className="w-10 h-10 rounded-full object-cover border border-gray-200" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Elena Woods</p>
              <p className="text-xs text-gray-500">Woodcraft Shop</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Product Manager</h1>
            <p className="text-gray-500 text-sm">Manage your inventory, pricing, and stock levels.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
              <span className="material-icons text-xl">file_download</span>
              <span className="hidden sm:inline font-medium">Export</span>
            </button>
            <button className="flex items-center gap-2 bg-[#ec6d13] hover:bg-[#d55e0f] text-white px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <span className="material-icons text-xl">add</span>
              <span className="font-bold">Add Product</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                <h3 className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <span className="material-icons">{stat.icon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="p-5 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-96">
                <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">search</span>
                <input 
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent transition-all"
                  placeholder="Search products by name, SKU..."
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                      activeFilter === filter
                        ? 'bg-[#ec6d13] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  <th className="p-4 w-10 text-center">
                    <input className="rounded border-gray-300 text-[#ec6d13] focus:ring-[#ec6d13] bg-gray-100" type="checkbox"/>
                  </th>
                  <th className="p-4">Product</th>
                  <th className="p-4">SKU</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Stock</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Last Updated</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="p-4 text-center">
                      <input className="rounded border-gray-300 text-[#ec6d13] focus:ring-[#ec6d13] bg-gray-100" type="checkbox"/>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0">
                          <img alt={product.name} className="w-full h-full object-cover" src={product.image} />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{product.name}</div>
                          <div className="text-xs text-gray-500">{product.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-600">{product.sku}</td>
                    <td className="p-4 font-medium text-gray-900">${product.price.toFixed(2)}</td>
                    <td className="p-4">
                      {getStockDisplay(product.stock, product.status)}
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusBadge(product.status)}`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-500">{product.lastUpdated}</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-gray-500 hover:text-[#ec6d13] hover:bg-orange-50 rounded-lg transition-colors" title="Edit">
                          <span className="material-icons text-xl">edit</span>
                        </button>
                        <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                          <span className="material-icons text-xl">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 p-4 flex items-center justify-between">
            <div className="text-sm text-gray-500 hidden sm:block">
              Showing <span className="font-medium text-gray-900">1</span> to <span className="font-medium text-gray-900">{filteredProducts.length}</span> of <span className="font-medium text-gray-900">124</span> results
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50">
                <span className="material-icons text-base">chevron_left</span>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#ec6d13] text-white text-sm font-medium">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 text-sm font-medium">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 text-sm font-medium hidden sm:flex">3</button>
              <span className="text-gray-400 hidden sm:block">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 text-sm font-medium hidden sm:flex">12</button>
              <button className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
                <span className="material-icons text-base">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VendorProducts;
