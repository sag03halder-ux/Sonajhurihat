import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Rustic Glazed Mug',
    price: 24.00,
    originalPrice: 28.00,
    artisan: 'Earthy Studios',
    rating: 4.5,
    reviews: 42,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhDJejVtxn6RvLogPObjQYYXftkeX8yktMgggBJFpQjQ_RNJrIKI0mYewkn48VAVZ0S1hTvClZs0Z1rwxRkdTVBFiAxVG7DhvZCSbmCbXS0-fpENlIO8mtgp_tsPeo04FuSl_KCdDedUOqNC0i1IYr6bEokp0q6RXBV3RiNg4g3q52P6kjjKyPsWYiSnAO95Z8rodzwarhgRptjpjeh4mLKESkDXuWyt0q3qn4y6sV6TMLTdThN3jbaWKUGfNQ_IkzQ1qZiihEPCU6',
    sale: true,
    discount: 15
  },
  {
    id: 2,
    name: 'Minimalist Vase',
    price: 65.00,
    artisan: 'The Clay Collective',
    rating: 4,
    reviews: 18,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcl77pgkG5405py5NYYSiTRWeB7lzwb3-r9KFX13rTuCWlbU9YQXH_w7ymKKslT6tBmK3AhhGHdB9fR3LYGuDkIMIwk9830xA90KTvNd3sX_zMWWEhEJi5UzeNwKQFqYsOdlZyMXrjUJrpxvy6pNqRCSNarsXvTbJJILTUzrWGIM9mHSlwyZD6qmAYjK2NIQZgDnVo0gRdUU7jfqhlQMfo0e7ZEzWy0yjmEHw2Z2oIqqxhBbZjkqLMGidAo2bmPSnT6G7-PpXBYyMW'
  },
  {
    id: 3,
    name: 'Speckled Bowl Set',
    price: 85.00,
    artisan: 'Ocean Pottery',
    rating: 5,
    reviews: 124,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv4AyVcYWrGkhowSioJt3nya4xAHMGwzwur_z9vp0vCezPokjXrH_-WOtqjQP4P2TcImZM43HfhXkOZgwq-xRGawajzM9avOjYhFJq6KnKT80LGcyg76jJT8Nqg7-iZPI8I7dUg-oMuQ2gXgLBYlkSMFH2MGGsK9QR5l3x09s5lgWRgurlsNccXOxotRaEw-7G7SocFsk8HPk9GPkRyD1-Zr4-EfaZ2fRzrlSm7ROtSRdbx3pk3SmcmViGt9dGK4WOtI0XbLZoJDaD'
  },
  {
    id: 4,
    name: 'Terracotta Platter',
    price: 55.00,
    artisan: 'Jane Doe Pottery',
    rating: 3,
    reviews: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKM-lJmEZ21hXI5uGlasMR2XD3ejmkpUvYgSLh922FNe2v4Exd1zDODiV2U-RKg6YYFwSy6lIqnPsR_OEh5gjfw5lIcqDAD4d9SyHz6oWZXUYoV9d70yowmgBCThihwjCzBq54Gjsp1e6BkIcChNR1Dtqlxa_Yuk5edt3eWCwXIYUPUFvZqbDC-g7YwDV2WmdkeQU2eMvv1ESDwh3HKNSE1-RCSl_G9xQbpe41UFmCBh6V-5DLns65oAKmtPNiHy0nDyJRSyIhlWF3'
  },
  {
    id: 5,
    name: 'Textured Planter',
    price: 42.00,
    artisan: 'Earthy Studios',
    rating: 4.5,
    reviews: 67,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-x7Af-OgG3sXJqVdn2D2Y4RbISpcX5Pzxi4gRyLmiMHF7q-lW5NSMgvkH9x-07m3Vvt8LxBOW7PUo7TNX9jSXwfSkUxdu-gvrncuJ1oe2kLAffMmMtieRYfogklBfqQMGGhGnWsv33JE4DrToiosmN3hNez7xT1tXhmowSberUL-HBCvjH-gtDdEaBu_McKRAZECJSGnODtjYsyvO2lLNaxbVQ7vSRU4ag9btOH8ohcx6tkw6K0tgz5bCbuYwz1w1Xb3lHfMhMRQN'
  },
  {
    id: 6,
    name: 'Painted Art Plate',
    price: 120.00,
    artisan: 'Artisan Hands',
    rating: 5,
    reviews: 12,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJnvR3XPX24LWAcncu79g6ZS6LJVUA9mynNUwT9KpfdVQcGBzo1YZcdlZP0-P_QyNyO_iJgkgYHMUzXY19SNL0w0BTSx5uy1q5if4cOojxg4uj16uKzvO7gL7-UuR8T_FZb0MNUqIZKcu_j83uAwP6cuKfH2VCYkdklsZtdo4OfnTgqKxw77JmzoRs7x-2CmMux2sLK2w7tnwisnPjU7PELf1bAzZolKu2CX7NPWDm5H8RDUnV4e-0y0vMhNoUCrBFk_07eMVqfa2X',
    soldOut: true
  }
];

const categories = [
  { id: 1, name: 'Clay & Terracotta', count: 42, checked: true },
  { id: 2, name: 'Stoneware', count: 28, checked: false },
  { id: 3, name: 'Porcelain', count: 15, checked: false },
  { id: 4, name: 'Wood & Bamboo', count: 8, checked: false }
];

const artisans = [
  { id: 1, name: 'Earthy Studios', checked: true },
  { id: 2, name: 'The Clay Collective', checked: false },
  { id: 3, name: 'Jane Doe Pottery', checked: false },
  { id: 4, name: "Nature's Mold", checked: false }
];

const colors = [
  { name: 'Brown', hex: '#8B5E3C' },
  { name: 'Beige', hex: '#E5D3B3' },
  { name: 'Terracotta', hex: '#D46B47', selected: true },
  { name: 'Navy', hex: '#2C3E50' },
  { name: 'Sage', hex: '#5D6D5E' },
  { name: 'White', hex: '#FFFFFF' }
];

export default function SearchFilter() {
  return (
    <div className="min-h-screen bg-[#f8f7f6]">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <span className="material-icons-outlined text-[#ec6d13] text-3xl">local_florist</span>
              <span className="text-xl font-bold tracking-tight text-gray-900">Artisan<span className="text-[#ec6d13]">Soul</span></span>
            </Link>
            <div className="hidden md:flex flex-1 max-w-lg mx-8 relative group">
              <input 
                className="w-full pl-12 pr-4 py-3 rounded-full bg-[#f8f7f6] border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-[#ec6d13] focus:bg-white transition-all shadow-sm text-sm" 
                placeholder="Search for ceramics, textiles, wood..." 
                type="text"
                defaultValue="Ceramics"
              />
              <span className="material-icons-outlined absolute left-4 top-3 text-gray-400 group-focus-within:text-[#ec6d13] transition-colors">search</span>
            </div>
            <div className="flex items-center gap-6 text-gray-500">
              <button className="hover:text-[#ec6d13] transition-colors">
                <span className="material-icons-outlined">favorite_border</span>
              </button>
              <button className="hover:text-[#ec6d13] transition-colors relative">
                <span className="material-icons-outlined">shopping_bag</span>
                <span className="absolute -top-1 -right-1 bg-[#ec6d13] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
              </button>
              <div className="w-8 h-8 rounded-full bg-[#ec6d13]/10 overflow-hidden border border-[#ec6d13]/20">
                <img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnNYUCealgKC06AX3xkFVJSeKmQDHZ68dbi-Xyjr3LMAMbHYNli_8fTdprfXgmGKCTU_UczEvCmWz78sTBXm4Hu7oLu9AKyBlHWNsm9yNBh6Br9p_LTFBSvArqaFb_VOsMc3nTAJfmfA7l1QthPStX2Wyu4cZy4KCbTLBjSLni0riYPNutEWZq_CjlnN7m9IfeYS6EyBsqlD6B0nYUrrtPP07tvKNIeVpAu1gi4z7XmmtnOSyr8i-jphHNpofHVJN0dxMvxSUDhcEE" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <nav className="text-sm text-gray-500 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-[#ec6d13]">Home</Link>
            <span className="material-icons-outlined text-xs">chevron_right</span>
            <span className="font-medium text-gray-900">Handmade Ceramics</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Ceramics & Pottery</h1>
              <p className="text-gray-600">Showing 1-12 of 142 unique artisan pieces</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-2.5 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ec6d13] focus:border-[#ec6d13] cursor-pointer text-sm font-medium shadow-sm">
                  <option>Most Popular</option>
                  <option>Newest Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <span className="material-icons-outlined text-lg">expand_more</span>
                </div>
              </div>
              <button className="md:hidden p-2.5 rounded-lg bg-white border border-gray-200 shadow-sm">
                <span className="material-icons-outlined text-gray-700">filter_list</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block w-72 flex-shrink-0 space-y-8 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto pr-4">
            <div className="border-b border-gray-200 pb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Price Range</h3>
              </div>
              <div className="px-2">
                <div className="relative h-1.5 bg-gray-200 rounded-full mt-6 mb-6">
                  <div className="absolute h-full bg-[#ec6d13] rounded-full" style={{ left: '10%', right: '30%' }}></div>
                  <div className="absolute top-1/2 -mt-2 -ml-2 w-4 h-4 rounded-full bg-white border-2 border-[#ec6d13] shadow cursor-pointer transform hover:scale-110 transition-transform" style={{ left: '10%' }}></div>
                  <div className="absolute top-1/2 -mt-2 -ml-2 w-4 h-4 rounded-full bg-white border-2 border-[#ec6d13] shadow cursor-pointer transform hover:scale-110 transition-transform" style={{ left: '70%' }}></div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="bg-white border border-gray-200 px-3 py-1.5 rounded-md text-gray-700 font-medium w-24 text-center">$24</div>
                  <span className="text-gray-400">-</span>
                  <div className="bg-white border border-gray-200 px-3 py-1.5 rounded-md text-gray-700 font-medium w-24 text-center">$150</div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Material</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center group cursor-pointer">
                    <input 
                      className="w-5 h-5 rounded border-gray-300 text-[#ec6d13] focus:ring-[#ec6d13]/25 cursor-pointer" 
                      type="checkbox"
                      defaultChecked={category.checked}
                    />
                    <span className="ml-3 text-gray-600 group-hover:text-[#ec6d13] transition-colors">{category.name}</span>
                    <span className="ml-auto text-xs text-gray-400">({category.count})</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Color Palette</h3>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button 
                    key={color.name}
                    aria-label={color.name}
                    className={`w-8 h-8 rounded-full border-2 hover:border-[#ec6d13] focus:border-[#ec6d13] focus:ring-2 ring-offset-2 ring-[#ec6d13] transition-all shadow-sm ${color.selected ? 'border-[#ec6d13] ring-2 ring-[#ec6d13]' : 'border-transparent'}`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Artisan Studio</h3>
              <div className="relative mb-4">
                <input 
                  className="w-full text-sm pl-9 pr-3 py-2 rounded-lg border-gray-200 bg-white focus:ring-1 focus:ring-[#ec6d13] focus:border-[#ec6d13]" 
                  placeholder="Search artisan..." 
                  type="text"
                />
                <span className="material-icons-outlined absolute left-2.5 top-2 text-gray-400 text-lg">search</span>
              </div>
              <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                {artisans.map((artisan) => (
                  <label key={artisan.id} className="flex items-center group cursor-pointer">
                    <input 
                      className="w-4 h-4 rounded border-gray-300 text-[#ec6d13] focus:ring-[#ec6d13]/25 cursor-pointer" 
                      type="checkbox"
                      defaultChecked={artisan.checked}
                    />
                    <span className="ml-3 text-sm text-gray-600 group-hover:text-[#ec6d13] transition-colors">{artisan.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full py-2 text-[#ec6d13] hover:text-white hover:bg-[#ec6d13] border border-[#ec6d13] rounded-lg transition-colors text-sm font-medium">Clear All Filters</button>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#ec6d13]/10 text-[#ec6d13] border border-[#ec6d13]/20">
                Price: $24 - $150
                <button className="ml-2 hover:text-[#ec6d13]/70">
                  <span className="material-icons-outlined text-sm">close</span>
                </button>
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#ec6d13]/10 text-[#ec6d13] border border-[#ec6d13]/20">
                Clay & Terracotta
                <button className="ml-2 hover:text-[#ec6d13]/70">
                  <span className="material-icons-outlined text-sm">close</span>
                </button>
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#ec6d13]/10 text-[#ec6d13] border border-[#ec6d13]/20">
                <span className="w-2 h-2 rounded-full bg-[#D46B47] mr-2"></span> Terracotta
                <button className="ml-2 hover:text-[#ec6d13]/70">
                  <span className="material-icons-outlined text-sm">close</span>
                </button>
              </div>
              <button className="text-xs text-gray-500 hover:text-[#ec6d13] underline ml-2">Clear All</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={product.image} 
                    />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors">
                        <span className="material-icons-outlined text-xl block">favorite</span>
                      </button>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button className="w-full bg-white/90 backdrop-blur text-[#ec6d13] font-semibold py-3 rounded-lg shadow-lg hover:bg-[#ec6d13] hover:text-white transition-colors flex items-center justify-center gap-2">
                        <span className="material-icons-outlined">add_shopping_cart</span>
                        Add to Cart
                      </button>
                    </div>
                    {product.sale && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-{product.discount}%</div>
                    )}
                    {product.soldOut && (
                      <div className="absolute top-3 left-3 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded">Sold Out</div>
                    )}
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#ec6d13] transition-colors cursor-pointer">{product.name}</h3>
                      <div className="flex flex-col items-end">
                        <span className="text-[#ec6d13] font-bold">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">by {product.artisan}</p>
                    <div className="mt-auto flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`material-icons text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          {i < product.rating ? 'star' : product.rating > i ? 'star_half' : 'star'}
                        </span>
                      ))}
                      <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-1">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-50 transition-colors">
                  <span className="material-icons-outlined text-lg">chevron_left</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#ec6d13] text-white font-medium shadow-md transition-colors">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-colors">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-colors">3</button>
                <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-colors">12</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
                  <span className="material-icons-outlined text-lg">chevron_right</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#f8f7f6] border-t border-gray-200 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-icons-outlined text-[#ec6d13] text-2xl">local_florist</span>
            <span className="text-lg font-bold text-gray-900">Artisan<span className="text-[#ec6d13]">Soul</span></span>
          </div>
          <p className="text-gray-500 text-sm">© 2023 ArtisanSoul. Celebrating craftsmanship worldwide.</p>
        </div>
      </footer>
    </div>
  );
}
