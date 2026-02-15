import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart, cartCount } = useCart()
  const product = products.find(p => p.id === parseInt(id))
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/products" className="text-primary hover:underline">Back to products</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#f8f7f6]">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ec6d13] text-3xl">spa</span>
              <span className="text-xl font-bold tracking-tight">Artisan<span className="text-[#ec6d13]">Craft</span></span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/products" className="text-gray-500 hover:text-[#ec6d13] transition-colors font-medium">Shop</Link>
              <Link to="/artisans" className="text-gray-500 hover:text-[#ec6d13] transition-colors font-medium">Artisans</Link>
              <Link to="/faq" className="text-gray-500 hover:text-[#ec6d13] transition-colors font-medium">About</Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/search" className="text-gray-500 hover:text-[#ec6d13] transition-colors">
                <span className="material-symbols-outlined">search</span>
              </Link>
              <Link to="/login" className="text-gray-500 hover:text-[#ec6d13] transition-colors">
                <span className="material-symbols-outlined">person</span>
              </Link>
              <Link to="/cart" className="text-gray-500 hover:text-[#ec6d13] transition-colors relative">
                <span className="material-symbols-outlined">shopping_bag</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-[#ec6d13] text-[10px] text-white flex items-center justify-center rounded-full">{cartCount}</span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-[#f8f7f6] pt-6 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#ec6d13] text-sm">Home</Link></li>
              <li><span className="text-gray-300">/</span></li>
              <li><Link to="/products" className="text-gray-400 hover:text-[#ec6d13] text-sm">{product.category}</Link></li>
              <li><span className="text-gray-300">/</span></li>
              <li><span className="text-gray-800 font-medium text-sm">{product.name}</span></li>
            </ol>
          </nav>
        </div>
      </div>

      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-4">
              <div className="aspect-[4/3] w-full bg-gray-100 rounded-xl overflow-hidden relative group">
                <img alt={product.name} className="w-full h-full object-cover" src={product.image} />
                {product.isNew && <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#ec6d13] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">New</span>}
                {product.bestseller && <span className="absolute top-4 left-4 bg-[#ec6d13] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Best Seller</span>}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col h-full">
              <div className="sticky top-24">
                <div className="mb-6 border-b border-gray-200 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{product.name}</h1>
                    <button className="text-gray-400 hover:text-red-500 transition-colors p-1">
                      <span className="material-symbols-outlined text-2xl">favorite_border</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-base">{i < Math.floor(product.rating) ? 'star' : i < product.rating ? 'star_half' : 'star_border'}</span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 underline cursor-pointer hover:text-[#ec6d13]">({product.reviews} Reviews)</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">By <span className="text-[#ec6d13] font-medium">{product.artisan}</span></p>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-[#ec6d13]">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.materials?.map((material, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">{material}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Quantity</label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#ec6d13]">
                        <span className="material-symbols-outlined">remove</span>
                      </button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#ec6d13]">
                        <span className="material-symbols-outlined">add</span>
                      </button>
                    </div>
                    <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={handleAddToCart} className="flex-1 bg-[#ec6d13] hover:bg-[#b8530b] text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    {addedToCart ? (
                      <>
                        <span className="material-symbols-outlined">check</span>
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined">shopping_cart</span>
                        Add to Cart
                      </>
                    )}
                  </button>
                  <button className="w-14 h-14 flex items-center justify-center border border-gray-200 rounded-lg hover:border-[#ec6d13] hover:text-[#ec6d13] transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                </div>

                <div className="mt-8 space-y-4">
                  {['description', 'artisan', 'shipping'].map((section) => (
                    <div key={section} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button onClick={() => setOpenAccordion(openAccordion === section ? null : section)} className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors">
                        <span className="font-medium text-gray-900 capitalize">{section === 'artisan' ? 'Artisan Info' : section === 'shipping' ? 'Shipping & Returns' : section}</span>
                        <span className="material-symbols-outlined text-gray-400">{openAccordion === section ? 'expand_less' : 'expand_more'}</span>
                      </button>
                      {openAccordion === section && (
                        <div className="p-4 bg-gray-50 text-gray-600 text-sm">
                          {section === 'description' && product.description}
                          {section === 'artisan' && `This beautiful piece was crafted by ${product.artisan}, a skilled artisan with years of experience in ${product.category}. Each item is made with care and attention to detail.`}
                          {section === 'shipping' && 'Free shipping on orders over $50. Standard delivery takes 5-7 business days. 30-day return policy for unused items in original packaging.'}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link key={item.id} to={`/products/${item.id}`} className="group">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img alt={item.name} src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-gray-500 text-sm">By {item.artisan}</p>
                  <p className="text-[#ec6d13] font-bold mt-1">${item.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>© 2023 ArtisanCraft Inc. Handmade with love.</p>
        </div>
      </footer>
    </div>
  )
}
