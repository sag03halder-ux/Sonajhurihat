import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
  const [favorites, setFavorites] = useState({});
  const [cartCount, setCartCount] = useState(2);

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    { id: 'home-decor', name: 'Home Decor', icon: 'home', count: 124, active: true },
    { id: 'jewelry', name: 'Jewelry', icon: 'diamond', count: null, active: false },
    { id: 'textiles', name: 'Textiles & Wearables', icon: 'checkroom', count: null, active: false },
    { id: 'ceramics', name: 'Ceramics & Pottery', icon: 'restaurant', count: null, active: false },
    { id: 'art', name: 'Art & Prints', icon: 'brush', count: null, active: false },
  ];

  const materials = [
    'Sustainable Wood',
    'Organic Cotton',
    'Recycled Glass',
    'Hand-thrown Clay',
  ];

  const artisans = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCC1EtiTCc5dpZBOzX8fHvf3aDxe0Q6em6OdUBx0o0L31leYdHb5OfDT88bcZ6C_4VsIdfIO3Had69TIIYwrvDIna8HFpA771RS_Ejnlvy8d3T5YqdvLnfOWfTiymH6FB3y2EmuJtEjmbsThAY-Kw7bek6oZyl-LUlrVvoNmka_uzVNenNl684QG0FMvDl5q8KOMXLZoa_9VxcKMJb84GoZugS_baRZN6nXkP0ASoKFlVqL-agP3pncWX6JCeRhWZRSDnF6CJokvqTk',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBvBqUgn-uArGD_6dSxOO_fxjTCUjjkEd3YhhrxFJ3zStESo-ERzQ2U2UHdhdEgaBtmAJRYJwEUgWenjLKfIAxruUpwggCE_Wzlg9JqJW-p0ye2rJbAC-GgPig5PtndbkjdSyWJfTqwZTK-haH11bnxtDU-WqAUjosNpL7ztVUCLH2s3axhBaZvdea9FQhVrWTeuAcNoYYx_J-oqWivsv2aNfZuN1Tz9p0rfF2oZkzmk-_LqBMmxlvE-2EMyUkt_Iq1YMuXbdKi-63B',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC7WNDyV5dsw_Etd7pw8MKWB9pCTZHhEYVJttG53dd22ZSRzPFS5V9J1om0YSwGtuvBevP91Ip-K7ih_iWQqbg487bFxoLec3BDDOwOIl8b1astG7mRLLLVVEifLo64vBoILZ7agEF8S7lG5qcdWvmajGxwc2mYCA5GaD9F78BWAMHhCyEtalAywRaq0J1-H6sXqkX-T308FBuvBsnZC4i5DuG-LlAWL0CBVBdWugIATSGVQMT-YGpaWnv_U80Yi8XJ2-0dDKHvJfB_',
  ];

  const products = [
    {
      id: 1,
      name: 'Rustic Terra Vase',
      artisan: 'Elena Woods',
      price: 45.00,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf5ocjFDUVZ4bXk5xl3ed9tlbquugEEhmbMw9gQ-O5DXbU5bYPOfvaAlD0S8qRfJuzJVd1vhzD16Ttamfx7tzVH1N6o5FNqiWVf1MCrcyCHKzUDDbkoTxLdCC7ENe4UtRw-POMz1Sv-kOy3ENth1cRbNh-uOtzR-Da9iSPyUdM8wV4YaRS6TzieoN6cZIX-lJji9XkZXKVhi6kEX10R-t0wJayWwyvKjBsKzJBc74754P-VsQvv7YlbF5mNIfBZ-arC3gTxDC6E8uU',
      badge: 'Bestseller',
      rating: 4,
      reviews: 24,
    },
    {
      id: 2,
      name: 'Boho Wall Hanging',
      artisan: 'Studio K',
      price: 120.00,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwUIxBo8lRyrPUd3FCmzCBedk1e2kPQNzXmZChiUMP3soowxHO8-TH0sAe5fy_ZhbFRCANKOLFyxZdGVMKeumCTKLm_s_Nl5NaeJk7tJAqz-dokI8w3a0MC8pzYf07N-Rw3qJDjlkqZoH79hYeGQo6zBR3X4DHIjhB8vJ0NzQSxe9I2en2OM32_x10S3h0hMDzipX7CsKILbEIDyHI5ShUnRU4UUduZnwQaZB29LJ9JbwNBBvHRLcab-Lwno_z_ZV90K4sS4uBbQeY',
      badge: null,
      rating: null,
      reviews: 0,
    },
    {
      id: 3,
      name: 'Olive Wood Bowl',
      artisan: 'Timber Crafts',
      price: 65.00,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs9FzAmpKzyI0Uvt5_W_BrffCwc8wtUEjuxlD9mOIfDW4WcnmH-qxOp0rtdvAj_KXEbVrBd6YMJRwvQgbpONcDorfJCPSSOpl17_EhctHa9dTCP3bgCGMgN5ecoXir4cVqNdj_3guFUQjHJav1xQwGUcJtx2avK6a2F0z4_50nQS-xZntarpvSFXYj9_AAd74AMQXVJnoEZcMgYvHZ_M1TZZPcIo132BvJb7bTHwXcCDGTfIuCiUEHuQdKv76iIhrCqqG9x7vX_47x',
      badge: 'New',
      rating: null,
      reviews: 0,
    },
    {
      id: 4,
      name: 'Organic Cotton Throw',
      artisan: 'Weave Works',
      price: 89.00,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp1frsBHDHqAAKg8KuuNLxODY3tOxN1n2eEdKQg-dfFzzbL-9JT_ipUOELLWgbc6w73DUmHP7S-NbqCO4wJBFy_umkIVAleysTfeAgzzxjps0UeHOreOytQ7XiSJQ_Fz_2SHyor5KCAAWjbQwTM26Gpr2G0d8E79YNYdToaEN73cWtzB-bS0r3mRPWL9vJUMzmCzysWoudJWohKqXfZgxoPbciKWpLpc5rSn1UyV-9ul7sXmuWs5PJox-76GLoxkN9sCcQnZVaV45T',
      badge: null,
      rating: 4.5,
      reviews: 42,
    },
    {
      id: 5,
      name: 'Sandalwood Soy Candle',
      artisan: 'Pure Scents',
      price: 28.00,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6B8s7eyrjlBNFqubznAS8qnI26Cz21_Kq-MIb4kIpnad1bSGylEnUPNkITe3qDYCtnC9d4u4YRh6a_ROsFP9bxudHQ_awpJpoymPeAQ8k4G2T8dpsTy9fOm8hHwVoAdPkSMKKqMaFJJch6HTv2gJ1plksuRGUQsCk16XYtKZC8VUWK5TleDQ8GdISnDeyy1Pt83GQcQtfPL6GS-YY3xVUV-MH5pwbi9TEGiMHM8W5pERZUyBOe9VMpcgxChilGHqPqJgPnnxc8TXt',
      badge: null,
      rating: null,
      reviews: 0,
    },
    {
      id: 6,
      name: 'Linen Cushion Cover',
      artisan: 'Weave Works',
      price: 35.00,
      originalPrice: 48.00,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp28hDkjoOzy124dWZ_w2TF3FGLf0ddLKPvQVar-hQHATnH86sCILIPSRo0ebES8BIXuArYGeZbTW4q_tHOgGz7wynD0nlEtFyee_jWxIe2cB1EqwPbP_Wwyt4_ce6URlr0RqF4e75Lx6yMfSPjPtW3pd5eiKRU9knG_o82iJict6MJmkysCIaZLrZ0Y0Kpyjc6ZwWj8kI7dp24RaQ52z1tjihc_373JhmolPvzQd2F-P-kTIpzxkzX8pD2lA61zSPrnJV448AE3C3',
      badge: 'Sale',
      rating: null,
      reviews: 0,
    },
  ];

  const renderStars = (rating) => {
    if (!rating) return null;
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="material-icons text-sm text-yellow-500">star</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="material-icons text-sm text-yellow-500">star_half</span>);
      } else {
        stars.push(<span key={i} className="material-icons text-sm text-gray-300">star</span>);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-[#f8f7f6] dark:bg-[#221810] font-['Work_Sans',sans-serif] text-gray-800 dark:text-gray-100 antialiased flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#3a2d24]/80 backdrop-blur-md border-b border-[#e8e6e4] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <span className="material-icons text-[#ec6d13] text-3xl">handyman</span>
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">Artisan<span className="text-[#ec6d13]">Kraft</span></span>
            </Link>
            
            <div className="hidden md:flex flex-1 max-w-lg mx-8 relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-icons text-gray-400 group-focus-within:text-[#ec6d13] transition-colors">search</span>
              </div>
              <input 
                className="block w-full pl-10 pr-3 py-2.5 border border-[#e8e6e4] dark:border-white/10 rounded-lg leading-5 bg-[#f8f7f6] dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#ec6d13] focus:border-[#ec6d13] sm:text-sm transition-all shadow-sm hover:shadow-md" 
                placeholder="Search for ceramics, textiles, artisans..." 
                type="text"
              />
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="text-gray-500 dark:text-gray-300 hover:text-[#ec6d13] dark:hover:text-[#ec6d13] transition-colors relative">
                <span className="material-icons">favorite_border</span>
              </button>
              <button className="text-gray-500 dark:text-gray-300 hover:text-[#ec6d13] dark:hover:text-[#ec6d13] transition-colors relative">
                <span className="material-icons">shopping_bag</span>
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-[#ec6d13] text-white text-[10px] flex items-center justify-center rounded-full font-bold">{cartCount}</span>
              </button>
              <button className="text-gray-500 dark:text-gray-300 hover:text-[#ec6d13] dark:hover:text-[#ec6d13] transition-colors flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img 
                    alt="User profile" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHcVlIwtFr-Az8p1p5BI9Ayzavh_zKu83OIN8zCvS-ZniuS2VGnv1rp4FQP_5kNgN_levNDK237dsPhAXQJwuAArq5uK6a8pfiBxSuBkO_zDjSu1i-yR8PhL5KSO7IaPIpd6V6w66asf9RqeXyd1R3iVpiKjkWVxdw21kU1l1cnZpQyQDog3Eo248yp3OqKugs4k2pZowm4S-qu3yawpOaNZCrpUELKZAZIUzhtGlGiqFaSldfZWsFKzmd0i9NE2CFrVbbmbQs6xXQ"
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        <aside className="hidden lg:block w-64 flex-shrink-0 space-y-8 sticky top-28 h-[calc(100vh-8rem)] overflow-y-auto pr-2">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Collections</h3>
            <nav className="space-y-1">
              {categories.map((cat) => (
                <Link 
                  key={cat.id} 
                  to={`/category/${cat.id}`}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg group transition-all ${
                    cat.active 
                      ? 'bg-[#ec6d13]/10 text-[#ec6d13] font-medium' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-[#e8e6e4] dark:hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center">
                    <span className={`material-icons text-lg mr-3 ${cat.active ? 'text-[#ec6d13]' : 'text-gray-400 group-hover:text-[#ec6d13]'}`}>
                      {cat.icon}
                    </span>
                    {cat.name}
                  </div>
                  {cat.count && (
                    <span className="bg-[#ec6d13] text-white py-0.5 px-2 rounded-full text-xs">{cat.count}</span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
          
          <hr className="border-[#e8e6e4] dark:border-white/10"/>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Price Range</h3>
            <div className="px-2">
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                <span>$0</span>
                <span>$500+</span>
              </div>
              <div className="relative h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="absolute left-0 top-0 h-1 bg-[#ec6d13] rounded-full w-1/2"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#ec6d13] rounded-full shadow cursor-pointer"></div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Material</h3>
            <div className="space-y-2">
              {materials.map((material, idx) => (
                <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                  <input 
                    className="form-checkbox h-4 w-4 text-[#ec6d13] border-gray-300 rounded focus:ring-[#ec6d13] bg-transparent group-hover:border-[#ec6d13] transition-colors" 
                    type="checkbox"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-[#ec6d13] transition-colors">{material}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Top Artisans</h3>
            <div className="flex -space-x-2 overflow-hidden p-1">
              {artisans.map((img, idx) => (
                <img 
                  key={idx}
                  alt={`Artisan ${idx + 1}`} 
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#3a2d24] object-cover" 
                  src={img}
                />
              ))}
              <div className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#3a2d24] bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300">+4</div>
            </div>
          </div>
        </aside>

        <section className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-[#e8e6e4] dark:border-white/10">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Home Decor</h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Showing 1-12 of 124 handcrafted items</p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-4">
              <button className="lg:hidden flex items-center px-4 py-2 bg-white dark:bg-white/5 border border-[#e8e6e4] dark:border-white/10 rounded-lg shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10">
                <span className="material-icons text-base mr-2">filter_list</span> Filters
              </button>
              <div className="relative group">
                <button className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#ec6d13] transition-colors">
                  <span>Sort by: <span className="text-gray-900 dark:text-white font-bold">Featured</span></span>
                  <span className="material-icons text-base">expand_more</span>
                </button>
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-[#3a2d24] border border-[#e8e6e4] dark:border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                  <Link to="#" className="block px-4 py-2 text-sm text-[#ec6d13] bg-[#ec6d13]/5 hover:bg-[#ec6d13]/10">Featured</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">Price: Low to High</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">Price: High to Low</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">New Arrivals</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col h-full bg-white dark:bg-[#3a2d24] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#e8e6e4] dark:hover:border-white/10">
                <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 dark:bg-gray-800">
                  <img 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                    src={product.image}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button className="bg-white dark:bg-[#3a2d24] text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#ec6d13] hover:text-white dark:hover:bg-[#ec6d13] border border-transparent flex items-center gap-2">
                      <span className="material-icons text-sm">visibility</span> Quick View
                    </button>
                  </div>
                  {product.badge && (
                    <div className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide shadow-sm ${
                      product.badge === 'Sale' ? 'bg-red-500 text-white' :
                      product.badge === 'New' ? 'bg-[#3a2d24] dark:bg-gray-700 text-white' :
                      'bg-[#ec6d13] text-white'
                    }`}>
                      {product.badge}
                    </div>
                  )}
                  <button 
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-black/50 rounded-full hover:bg-white dark:hover:bg-black/80 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <span className="material-icons text-lg">
                      {favorites[product.id] ? 'favorite' : 'favorite_border'}
                    </span>
                  </button>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-[#ec6d13] transition-colors cursor-pointer">{product.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1">
                    by <span className="font-medium text-gray-700 dark:text-gray-300 hover:underline cursor-pointer">{product.artisan}</span>
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {product.originalPrice ? (
                        <>
                          <span className="text-xl font-bold text-red-500">${product.price.toFixed(2)}</span>
                          <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                        </>
                      ) : (
                        <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
                      )}
                    </div>
                    {product.rating && (
                      <div className="flex text-yellow-500 text-xs">
                        {renderStars(product.rating)}
                        <span className="ml-1 text-gray-400">({product.reviews})</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 mb-8 flex flex-col items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Showing 6 of 124 products</p>
            <div className="w-full max-w-xs h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-8">
              <div className="h-1 bg-[#ec6d13] rounded-full" style={{ width: '10%' }}></div>
            </div>
            <button className="px-8 py-3 bg-white dark:bg-white/5 border border-[#e8e6e4] dark:border-white/10 rounded-lg text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-white/10 hover:border-[#ec6d13]/30 transition-all shadow-sm">
              Load More Products
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-[#3a2d24] border-t border-[#e8e6e4] dark:border-white/10 mt-auto py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-icons text-[#ec6d13]">handyman</span>
            <span className="font-bold text-lg text-gray-900 dark:text-white">Artisan<span className="text-[#ec6d13]">Kraft</span></span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 ArtisanKraft Inc. Handmade with love.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductCatalog;
