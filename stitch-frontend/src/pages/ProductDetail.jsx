import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDldZJJFuboMtfMv2BJFawxZtVkpvW2HUwcI3GeEkStnknGngoovGRpvZbbJe-wD-WE8mwQgxxiXf_Cs8HiwfRZZ8l5kWFr7pxL0qVdJ1KUuPsPgELVftGuwjkIvNOJ-RbQYuOgAk3i0-gBC0V3sVO84TdDD7LsA5AZSeHbA5CUoWN0wgVOQnRO4b1_SvUK6cO0RJuaZhTiNwqx6zsEkbnWNmDdXoJrktgFRFvVyR36dTsvZ66I72GlILgwjtNhYbn4fY5V3Egth9JF",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCs3mqFmTrrv8uyqNpcRPP_4ANpJw-vAXzUIL1Zu-pFby88h-25py2RzRB4MSEwCL26zP1DxA8qyRPm4LKLKLDsb0NnQtQKLtyI5pxc1ZltUH5ZMuFvnEatD8sgq0_8wbR4k-DlAzy0NAckoJw5DTVYnmp7ahTE-YkZ0gxy0KQhoKTL6ZOK8DAws3jz0MLZ2nRc0HdQrtTTssK0X8eEdyZB8o1uqiWQXwy9oFf_pQW_l5ImX38jhY2qQh9cKMoAW-W0xZ9ygg5Oz6po",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCqOdNe49GK9igenFTlhxqhr5vKI5Uqskqu2J-HUOtEv577_39-QP5VN0M5N-pg1FNqUDAkBBEAKgEjSDobMfSVOsYDeLONXjsdZri6manGOGejdspXzoOJBkrv1ZoiyDAbp0wXSQsbuFt8Jrdu3TSS2DeJIEMPL4dlNjPpMZDc1iUTWby07dBnrS0KEJBdKYJkus64dMaB2pXNvJ_buSZb-yrR_IKyzcOGmJARECFwHwM40K9aYw8yViy0RzKuMN6d3HiP-_S_-xVB",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDEj0RcQbuyZoYNq8QikysivVWzHHEpLre5AKsprLSMY_CsI6vWOqZB1bO2_7Obxf6IEquM9jfPKAv-EGzuRvKw5zhsuZhX-IqKupH2tIpsUqOn_B8C4u5v0CRdqymE4fnLZnZY54qEaIMkzYAxasp1K5osakNc4twQJgB7jPSdN8vAAEWFIbZJIf5fE-j2ZT05BY7rFUWO6KuHNsgVikATkTF6UIt96COuHRMqzEXqdxIGGO88GOxSrmBHP8HoJ21Reif1CrvkZNx1"
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "Speckled Serving Bowl",
      artisan: "Ceramics by Elena",
      price: 45,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPG4dnRJDeFub4-drruQBYMf4jtWInBpXb-88etDwUmqD5Hr6BQmIXe2HFdu8tDLFK3HjNUAsQ_0txIQF1QCyYJvh2rZRkfa2ctWT_DumjMe0nGTv4e0fmrsIsLrv7bQ1q00hsxr7nLPsnNYStWFqXr-JsjdOzQPrGLyqbfTc07ZNI8KRa0c1KRDACl5ke9wY4z0Y3U9pVJTwBEIwTkDzM1WsZ_8OaO2xsIHNQx2X-Wuk07mMQPJTADzHuh0U6lQoVVf3q8B8QDZ1t"
    },
    {
      id: 2,
      name: "Woven Seagrass Basket",
      artisan: "Weaves & Co.",
      price: 89,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4x9dAgzpKUYq6ELfXGowlJI062PK2CcoffDAhkszuVvbKJacgmhmDmewhLlr33VYCOK6_8fZZhl8NmWwVeIVgdxbde14-_2d7Kqbr_oLhuLMp4qRcWGT9H5tRGYE5KY6kVtR3_S_KEiye-yl-SeFFrKEGqdcZ0HYRsqkk0bhL5sWA1g9o5OQHa1xEVZghufE4db1pzq9xxtgAKHTRWCnZaiTk0Oa32jnfQ-VK_hdC6b12UcAKjm_c3O2jZqNvCxRQL51IFLZwTiAH"
    },
    {
      id: 3,
      name: "Abstract Earth Print",
      artisan: "Studio Art",
      price: 120,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBght1dq5ecP9olNs5Z9PE_lI8BRcfDziVDkQ6zPBoHFwuvaxOukFl5gWS13tBYKtcbs3xzn524Jn2CQ9Ym5V1lxfEdM7Z1PlKodNaBRIR_4ndaWGy8haMwl3U8deWOBeBTk2La7GrauBCl8FcXnLMelKcqxWitFnwrKDSsrkxcmfS8i-A1nIV-TWqif-0_sZ4hzrVX0WliyY_3suqbm2QBbmsrmdiE3lxJlxTzqtGhhC_ZIotY-BVr0dpwxMFiHV3GwC74wa504xa",
      lowStock: true
    },
    {
      id: 4,
      name: "Oak Candle Holder",
      artisan: "Timber Works",
      price: 35,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2nMPIFEKYteyMKoN0-Ausk2fosM1nlCMMBglEBmKLqDCHvuloM_9iTHLuUjqkMex4SfC9NI4pynCpdL-HgHGQtrmxEwUenZOs9qROT_A-5IPiPVHTolvsDomGKJ5SfE_WINHjxDBgEFAuGo9hXhix7XLzbsva06L9Uzmu8c1fUdwaEnJUc2b3cj0kqfT9u3niz9B6VCWGuGtij3C5SxnWQL2Eho56rKuc-60yGAnvIbvWOZFQ4KXaLzpeOVAPrsV8hNuPfnjAY_a2"
    }
  ];

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#f8f7f6] font-['Work_Sans',sans-serif]">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-[#ec6d13] rounded-lg flex items-center justify-center text-white">
                <span className="material-icons text-lg">local_florist</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">Artisan<span className="text-[#ec6d13]">Hub</span></span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-500 hover:text-[#ec6d13] transition-colors font-medium">New Arrivals</Link>
              <Link to="/catalog/ceramics" className="text-[#ec6d13] font-medium">Ceramics</Link>
              <Link to="/catalog/textiles" className="text-gray-500 hover:text-[#ec6d13] transition-colors font-medium">Textiles</Link>
              <Link to="/catalog/woodwork" className="text-gray-500 hover:text-[#ec6d13] transition-colors font-medium">Woodwork</Link>
              <Link to="/about" className="text-gray-500 hover:text-[#ec6d13] transition-colors font-medium">Our Story</Link>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-gray-500 hover:text-[#ec6d13] transition-colors">
                <span className="material-icons">search</span>
              </button>
              <button className="text-gray-500 hover:text-[#ec6d13] transition-colors relative">
                <span className="material-icons">shopping_bag</span>
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-[#ec6d13] text-[10px] text-white flex items-center justify-center rounded-full">2</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-[#f8f7f6] pt-6 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#ec6d13] text-sm">Home</Link></li>
              <li><span className="text-gray-300">/</span></li>
              <li><Link to="/catalog/ceramics" className="text-gray-400 hover:text-[#ec6d13] text-sm">Ceramics</Link></li>
              <li><span className="text-gray-300">/</span></li>
              <li><span className="text-gray-800 font-medium text-sm">Vases</span></li>
            </ol>
          </nav>
        </div>
      </div>

      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-4">
              <div className="aspect-[4/3] w-full bg-gray-100 rounded-xl overflow-hidden relative group">
                <img 
                  alt="Handcrafted terracotta vase" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                  src={images[activeImage]} 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur text-[#ec6d13] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Best Seller</span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === idx 
                        ? 'border-[#ec6d13] ring-2 ring-[#ec6d13]/20' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img className="w-full h-full object-cover hover:opacity-80 transition-opacity" src={img} alt={`Thumbnail ${idx + 1}`} />
                  </button>
                ))}
                <button className="aspect-square rounded-lg overflow-hidden border border-transparent hover:border-gray-300 transition-all flex items-center justify-center bg-gray-100 text-gray-400">
                  <span className="material-icons text-3xl">play_circle_outline</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col h-full">
              <div className="sticky top-24">
                <div className="mb-6 border-b border-gray-200 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Terracotta Sun Vase</h1>
                    <button className="text-gray-400 hover:text-red-500 transition-colors p-1">
                      <span className="material-icons text-2xl">favorite_border</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400 text-sm">
                      <span className="material-icons text-base">star</span>
                      <span className="material-icons text-base">star</span>
                      <span className="material-icons text-base">star</span>
                      <span className="material-icons text-base">star</span>
                      <span className="material-icons text-base">star_half</span>
                    </div>
                    <span className="text-sm text-gray-500 underline cursor-pointer hover:text-[#ec6d13]">(128 Reviews)</span>
                  </div>
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-3xl font-bold text-[#ec6d13]">$145.00</span>
                    <span className="text-lg text-gray-400 line-through mb-1">$180.00</span>
                  </div>
                  <p className="text-sm text-gray-500">Free shipping on all domestic orders.</p>
                </div>

                <div className="bg-[#ec6d13]/5 rounded-xl p-5 mb-8 border border-[#ec6d13]/10">
                  <div className="flex items-center gap-4 mb-3">
                    <img 
                      alt="Portrait of artisan" 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB6aOCWk7SErzgiXl-R5WNPF6Yj78R9KxqA5DaOSdKD48sD6YKOdoMGakdUK1cMpQXG4_peCkzZ-AEmu29Vhf9NkjRTzV7t6ybVl3wDoygs1q82q11vjEL90hZ6ngugqMPCMPn2ffT8Lq161fLDWorxgrKk0HTS0FwszRH71-rAm7Uo2nhSMs0Nn9jBYVoOFfdkolqhaPIC0dRdFzHdTWXFM7bXQL2Xqf2MtgVLRZgf-2iyXplLq00rWPpOWgTBuQS2OHDrIA_Cr3g" 
                    />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Handcrafted By</p>
                      <a className="font-bold text-gray-900 hover:text-[#ec6d13] transition-colors" href="#">Elena Rossi</a>
                    </div>
                    <span className="ml-auto text-xs bg-white px-2 py-1 rounded text-[#ec6d13] border border-[#ec6d13]/20">Tuscany, Italy</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    "Every piece I throw carries the warmth of the Tuscan sun. I use clay sourced from the riverbed near my studio, ensuring each vase has a unique connection to the land."
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <span className="block text-gray-500 text-xs mb-1">Material</span>
                      <span className="font-medium text-gray-900">Raw Stoneware Clay</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <span className="block text-gray-500 text-xs mb-1">Dimensions</span>
                      <span className="font-medium text-gray-900">12" H x 6" W</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-24 relative">
                    <label className="sr-only" htmlFor="quantity">Quantity</label>
                    <select 
                      className="w-full h-12 rounded-lg border-gray-300 bg-white text-gray-900 focus:border-[#ec6d13] focus:ring-[#ec6d13]" 
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <button className="flex-1 bg-[#ec6d13] hover:bg-orange-700 text-white h-12 rounded-lg font-semibold shadow-lg shadow-[#ec6d13]/30 transition-all transform active:scale-95 flex items-center justify-center gap-2">
                    <span className="material-icons text-sm">shopping_cart</span>
                    Add to Cart
                  </button>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-2 text-[#ec6d13]">
                      <span className="material-icons text-xl">eco</span>
                    </div>
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wide">Eco-Friendly</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-2 text-[#ec6d13]">
                      <span className="material-icons text-xl">handshake</span>
                    </div>
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wide">Direct Trade</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-2 text-[#ec6d13]">
                      <span className="material-icons text-xl">verified_user</span>
                    </div>
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wide">Lifetime Warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-20 border-t border-gray-200 bg-white py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Details</h2>
                <div className="w-16 h-1 bg-[#ec6d13] mx-auto rounded-full"></div>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleAccordion('description')}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">Description</span>
                    <span className={`material-icons transition-transform ${openAccordion === 'description' ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {openAccordion === 'description' && (
                    <div className="p-4 border-t border-gray-200 text-gray-600">
                      <p className="mb-4">
                        The Terracotta Sun Vase is not just a vessel; it's a piece of Italian heritage brought to life. Inspired by the golden hour over Tuscan vineyards, the glazing technique involves a triple-firing process that brings out deep, earthy hues unique to each creation.
                      </p>
                      <p>
                        Perfect for dried floral arrangements or as a standalone sculptural piece, this vase brings an organic, grounded aesthetic to any modern interior.
                      </p>
                    </div>
                  )}
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleAccordion('artisan')}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">Artisan Info</span>
                    <span className={`material-icons transition-transform ${openAccordion === 'artisan' ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {openAccordion === 'artisan' && (
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex items-center gap-4 mb-4">
                        <img 
                          alt="Elena Rossi" 
                          className="w-16 h-16 rounded-full object-cover" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB6aOCWk7SErzgiXl-R5WNPF6Yj78R9KxqA5DaOSdKD48sD6YKOdoMGakdUK1cMpQXG4_peCkzZ-AEmu29Vhf9NkjRTzV7t6ybVl3wDoygs1q82q11vjEL90hZ6ngugqMPCMPn2ffT8Lq161fLDWorxgrKk0HTS0FwszRH71-rAm7Uo2nhSMs0Nn9jBYVoOFfdkolqhaPIC0dRdFzHdTWXFM7bXQL2Xqf2MtgVLRZgf-2iyXplLq00rWPpOWgTBuQS2OHDrIA_Cr3g" 
                        />
                        <div>
                          <p className="font-bold text-gray-900">Elena Rossi</p>
                          <p className="text-sm text-gray-500">Tuscany, Italy</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Elena Rossi adheres to techniques passed down through four generations. No molds are used—every curve is shaped by hand on a kick-wheel, ensuring that while dimensions are consistent, the soul of each piece remains individual.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="material-icons text-[#ec6d13] text-sm">check_circle</span>
                          <span>Ethically sourced local clay</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-icons text-[#ec6d13] text-sm">check_circle</span>
                          <span>Lead-free, food-safe glazes</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-icons text-[#ec6d13] text-sm">check_circle</span>
                          <span>Kiln-fired at 1200°C for durability</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleAccordion('shipping')}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">Shipping & Returns</span>
                    <span className={`material-icons transition-transform ${openAccordion === 'shipping' ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {openAccordion === 'shipping' && (
                    <div className="p-4 border-t border-gray-200 text-gray-600">
                      <p className="mb-4">
                        <strong>Shipping:</strong> Free domestic shipping. International shipping available at checkout. Orders typically ship within 3-5 business days.
                      </p>
                      <p className="mb-4">
                        <strong>Returns:</strong> We want you to love your purchase. If you're not completely satisfied, you may return the item within 30 days for a full refund. Please note that personalized or custom orders may not be eligible for return.
                      </p>
                      <p>
                        <strong>Care Instructions:</strong> Hand wash recommended. Not microwave safe. Avoid extreme temperature changes.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#f8f7f6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Curated For You</h2>
                  <p className="text-gray-500 mt-1">Pieces that complement the Terracotta Sun Vase</p>
                </div>
                <a className="hidden sm:inline-flex items-center text-[#ec6d13] font-medium hover:text-orange-700 transition-colors" href="#">
                  View Collection <span className="material-icons ml-1 text-sm">arrow_forward</span>
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <div key={product.id} className="group">
                    <div className="relative aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden mb-4">
                      <img 
                        alt={product.name} 
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                        src={product.image} 
                      />
                      {product.lowStock && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">LOW STOCK</div>
                      )}
                      <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                        <span className="material-icons text-lg">favorite_border</span>
                      </button>
                    </div>
                    <h3 className="font-medium text-gray-900 group-hover:text-[#ec6d13] transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.artisan}</p>
                    <p className="text-[#ec6d13] font-bold mt-1">${product.price}.00</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#ec6d13] rounded-lg flex items-center justify-center text-white">
                  <span className="material-icons text-lg">local_florist</span>
                </div>
                <span className="font-bold text-xl tracking-tight text-gray-900">Artisan<span className="text-[#ec6d13]">Hub</span></span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Connecting global artisans with modern homes. Every purchase supports traditional craftsmanship and sustainable livelihoods.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a className="hover:text-[#ec6d13] transition-colors" href="#">New Arrivals</a></li>
                <li><a className="hover:text-[#ec6d13] transition-colors" href="#">Ceramics</a></li>
                <li><a className="hover:text-[#ec6d13] transition-colors" href="#">Textiles</a></li>
                <li><a className="hover:text-[#ec6d13] transition-colors" href="#">Woodwork</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Help</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a className="hover:text-[#ec6d13] transition-colors" href="#">Shipping & Returns</a></li>
                <li><a className="hover:text-[#ec6d13] transition-colors" href="#">Track Order</a></li>
                <li><a className="hover:text-[#ec6d13] transition-colors" href="#">Care Guide</a></li>
                <li><a className="hover:text-[#ec6d13] transition-colors" href="#">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Newsletter</h4>
              <p className="text-sm text-gray-500 mb-4">Subscribe for latest drops and artisan stories.</p>
              <form className="flex gap-2">
                <input className="w-full rounded-lg border-gray-300 bg-white text-sm focus:border-[#ec6d13] focus:ring-[#ec6d13]" placeholder="Email address" type="email"/>
                <button className="bg-[#ec6d13] hover:bg-orange-700 text-white rounded-lg px-4 flex items-center justify-center transition-colors">
                  <span className="material-icons text-sm">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">© 2023 ArtisanHub Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
