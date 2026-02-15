import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

export const products = [
  {
    id: 1,
    name: 'Rustic Clay Mug',
    artisan: 'Elena Rossi',
    price: 28,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTmxDIe6UATJiV3f7ms3uR5iJGsN9pvB-OrGf-j4TO-wOHv9uiojD92LI4MB04nrMzCpRDx0Pw3yaRSIH24UAVZbnW4FC7K2VAyMzoLJ8VlkAS00qbevkze6ZBk-ZE46Tg-JKL_OUsirCwZAQ0wAlwjJmHQFts8ZfTmeo0mBCaQ_bF72PyeKp6M0Hlh8VLgmSdBh5fiNEdOhXEgYUt34WIDgh7hqGQUPQEYLJCoye-ZVqZTbZp-cEWuzPDrDyoY1bzUw89Ce0s6YnZ',
    isNew: true,
  },
  {
    id: 2,
    name: 'Woven Wall Hanging',
    artisan: 'Sarah Jenkins',
    price: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdFZrtaHGE-r8mqatMbVf9bn9I3WXTA5vQUHiOvsNye43MCY_VGZjrT1DU7g1h8Zxyp0TyA7ICibmQK4TDHAkfb2QZX-wlZzGZoqifWmhKN03gprIt5PAdqKXwklG9Sw700zzvdO-brLm9kZdao7rpwm6R88V3Y9FWm0KYqhfiE8xgk2vv0fBS2slppF0rrYM-rtBh1zwm-csbwtgCZ8lfehybQA6-CN13DMFmxUtbZyWYgo91MShdtdaW8DvGuGYIwimiClxU95rY',
  },
  {
    id: 3,
    name: 'Olive Wood Spoon',
    artisan: 'Crafts of Kenya',
    price: 18,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPTuikscfF5qZUgVoR-RfW0WhRrZTZwIEYwpUf3fX6Kls7Cgt9TVq97MRg0pCfjVesSQ9wCO5lcd4tX9BSfsgWfYESr1etu5anh0QZMRVdxxsBjOuw4I_PYO52uQRUnpACNoYefxBDWCCherM0wMoslgXIoWSGLnq8jqSxqJcMt0C3nh9E0wQj3uFK2TN5IoDascVD3u7piz8uaiPkI3FRO1hN4Gxeb4EvQm8o3sgGFiRKisS79yTSaST7-SFGqm1aGYu_C5XwzaxR',
  },
  {
    id: 4,
    name: 'Modern Planter',
    artisan: 'Studio Klay',
    price: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBndh_VyZurwjUWJmN6jwiiVJgdteGcev1C-bBb7i0CTq4eV1QvJ-EoVyO1wwsQk1TUVvWuvgm9VPrtXj_wh2XqRJe-ATkQHUD2P7Dbhih6f1sdyi6jSNSiXksM-GiDfdHLbsspj3OU48wOkdUwUI1yLzQW9m-TdYdQuhmoF94UxRQ8DbAKDMooLkmgA3Eg46V8hgaEwfgeeq07_l6WqpBRHFf78N3ecSvSCFRxw2EaK15EI_noEUjAAXsPuSAHSc54zepE2wzIlB0H',
  },
]

const collections = [
  {
    name: 'Pottery',
    subtitle: 'Earthy Tones',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHkGT7cGcSj6GaKmoIMvFm7LN2JI6ovzIUzE6wLL-Gac67IqPEDZfs6_-mhRj3dniorgMQ21TWUrc-Qrs7bETD-szcQSj2zBTha1k_Idi_aEIsY3yBthJ9nm5BOkdN3wJ7ljM94KpAou7XV9dVJv2TFHijwPuIfGUMjKbj6BfNEDuiFum__jaGvdbJdkt4GFY5ECW2TSYs2U8BesYc_h1hHPIROx5N-20rK_XWoGU4ouwP69o55iUvWqYbWbncY2FGn1olz2xEJV2f',
  },
  {
    name: 'Textiles',
    subtitle: 'Natural Fibers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8RoYDDcuJow92MYPquHO5RjJyChUQ40uEzOMaB6UpiB0YlRpcDYV4HD_3KCFWWWUCJt4QOwbG81fHEId5cL0xsa02NPoOD9Ip4QhdXUV7UDHNMnFX1v9rbPDya-nNSPqGLE1mZkIaudutAwbC6TChfVFnmXW2wtUrkZoETei-KiA7aEW6TCiOTmBM08Nh-Z9Wj_8UnrJylM6X12kWzNCknEyw4apY6KBUSFL1h4nDF0AeuyzCXM3qWO2FgEl9xesJFqaXwBxhfggC',
  },
  {
    name: 'Woodwork',
    subtitle: 'Hand Carved',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcMwTVh1FmEvUq0G3uwZXv7_ecaOwvIQmE6Onle-VPRxoQbyQ1pGdfenL35z752LO1tEonulkVVlsxFvzTy_g0VU-XpneXbls1pt0xJs8X8sIUuUckSUGO8epIKeDV__W9tf7p6cnJnLkI1psdDUCXkrUo9VaIBaXb3Mvy3KKhfOZiuS901jyjKv7rSrFJ6c51S6xVwE7y3weB2MMQruwAKHBuuoI38XoyfEwgp48lEub5VcXpW3l_Jw_6t00V7MIsU0di1YM5rZTk',
  },
]

export default function Home() {
  const { addToCart, cartCount } = useCart()
  const [addedToast, setAddedToast] = useState(null)

  const handleAddToCart = (product) => {
    addToCart(product)
    setAddedToast(product.id)
    setTimeout(() => setAddedToast(null), 2000)
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-neutral-light dark:border-neutral-dark">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-10 py-3">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-text-main dark:text-white">
              <span className="material-symbols-outlined text-[32px] text-primary">manufacturing</span>
              <h2 className="text-xl font-bold tracking-tight">Artisan Crafted</h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/products" className="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors">Shop</Link>
              <Link to="/artisans" className="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors">Artisans</Link>
              <Link to="/artisans" className="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors">Our Story</Link>
              <Link to="/faq" className="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors">Journal</Link>
            </nav>
            <div className="flex items-center justify-end gap-4 flex-1 md:flex-none">
              <Link to="/search" className="hidden lg:flex w-64 items-center rounded-full bg-neutral-light dark:bg-neutral-dark px-3 py-2 transition-all focus-within:ring-2 focus-within:ring-primary/50">
                <span className="material-symbols-outlined text-text-muted dark:text-gray-400 text-[20px]">search</span>
                <input className="w-full bg-transparent border-none text-sm text-text-main dark:text-white placeholder:text-text-muted focus:ring-0 px-2" placeholder="Search handcrafted goods..." readOnly />
              </Link>
              <div className="flex gap-3">
                <Link to="/login" className="flex items-center justify-center size-10 rounded-full hover:bg-neutral-light dark:hover:bg-neutral-dark text-text-main dark:text-white transition-colors">
                  <span className="material-symbols-outlined">person</span>
                </Link>
                <Link to="/cart" className="relative flex items-center justify-center size-10 rounded-full hover:bg-neutral-light dark:hover:bg-neutral-dark text-text-main dark:text-white transition-colors group">
                  <span className="material-symbols-outlined">shopping_bag</span>
                  {cartCount > 0 && <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white group-hover:scale-110 transition-transform">{cartCount}</span>}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 lg:px-10 py-6 md:py-10 flex flex-col gap-12 md:gap-16">
        <section className="@container">
          <div className="relative flex min-h-[500px] w-full flex-col justify-center overflow-hidden rounded-2xl bg-cover bg-center shadow-lg" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuAStMGjrdZzOwDHIX1bshNJtjZSJzrz0Rxhhoov-9RX1EwyxMTXZMvSpUog9kCC4LTnPt4SrVeTSgXNT2jEIPsqwy3qKte1yuQWbgpmRVqzqxMQx2EKmfX4lN3u5jWTCcRRjF19hcyeLUWgzQ2f0v-g_mChSMIBBDzgFdy-Ow4Gh6D7ImLMxonHKP_icnFD1f83tS5VBAbWwBPAIHshMIH2HtMj75J-xJvUQerae6sCoxHdbNmtaUmgRX-PQTqcvZOMCpW-aHpz96pM)'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            <div className="relative z-10 flex flex-col items-start gap-6 px-6 py-12 md:px-16 md:py-20 max-w-2xl">
              <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white uppercase tracking-wider border border-white/10">
                Ethically Sourced
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white drop-shadow-sm">
                Handcrafted with <span className="text-primary italic">Soul</span>
              </h1>
              <p className="text-lg text-gray-100 max-w-lg leading-relaxed font-light">
                Discover unique, one-of-a-kind pieces directly from master artisans around the globe. Every item tells a story of tradition and skill.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <Link to="/products" className="flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-[1.02] transition-all">
                  Shop Collection
                </Link>
                <Link to="/artisans" className="flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/30 px-8 py-3 text-base font-bold text-white hover:bg-white/20 transition-all">
                  Meet the Makers
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white">Featured Collections</h2>
            <Link to="/products" className="group flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              View All <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <div key={collection.name} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url(${collection.image})`}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-sm font-medium text-white/80 mb-1">{collection.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white">{collection.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-[#eaddd5] dark:bg-[#3a2a20] overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center gap-6">
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                <span className="material-symbols-outlined text-sm">handshake</span>
                <span>Fair Trade Certified</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white leading-tight">
                Every purchase supports an artist's livelihood.
              </h2>
              <p className="text-text-main/80 dark:text-gray-300 leading-relaxed">
                We believe in the power of hands. By connecting you directly with artisans, we ensure fair wages and help preserve traditional crafts that have been passed down for generations.
              </p>
              <Link to="/artisans" className="inline-flex items-self-start border-b-2 border-primary pb-1 text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors">
                Read Our Story
              </Link>
            </div>
            <div className="flex-1 min-h-[300px] bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBl6Dfuum28SWcQXces6NWzovXEVd5BnaEWV2_fC5QmYb6I7dKedWlTUtKOOufNuyv9WFVCxxn9ECezyPuFt-UxHyFp_JcJniHSaMbwHeVl14AdG1ftTxu8jPYsTwDHuM13DxFonh3E9T3wmjGGfjJK_I93kYBIlHd_W7kdf9KTgExaKtn5SLW0pYVvhn8sGSZiAuQzGfDeU7pNXZ_tAIcTrdAvnRV7uDwFyltXMex9z32nD-fBsvNdVBPf7PfRDLwEPI4OqgiF9cRB)'}}></div>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white">New Arrivals</h2>
            <div className="hidden md:flex gap-2">
              <button className="px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium">All</button>
              <button className="px-4 py-1.5 rounded-full bg-transparent border border-gray-300 dark:border-gray-700 text-text-main dark:text-gray-300 hover:border-primary hover:text-primary transition-colors text-sm font-medium">Ceramics</button>
              <button className="px-4 py-1.5 rounded-full bg-transparent border border-gray-300 dark:border-gray-700 text-text-main dark:text-gray-300 hover:border-primary hover:text-primary transition-colors text-sm font-medium">Decor</button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col gap-3">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-[#3a2a20]">
                  <Link to={`/products/${product.id}`}>
                    <img alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={product.image} />
                  </Link>
                  <button 
                    onClick={(e) => { e.preventDefault(); handleAddToCart(product); }}
                    className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full bg-white text-text-main shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    <span className="material-symbols-outlined text-[18px]">add</span>
                  </button>
                  {product.isNew && <span className="absolute top-3 left-3 bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-text-main rounded-sm">New</span>}
                  {addedToast === product.id && (
                    <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">Added!</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                    <Link to={`/products/${product.id}`} className="text-base font-bold text-text-main dark:text-white leading-tight group-hover:text-primary transition-colors">{product.name}</Link>
                    <p className="text-sm font-bold text-primary">${product.price}.00</p>
                  </div>
                  <p className="text-xs text-text-muted dark:text-gray-400">By {product.artisan}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-auto bg-[#eaddd5]/30 dark:bg-[#1a120b] border-t border-neutral-light dark:border-neutral-dark">
        <div className="border-b border-neutral-light dark:border-neutral-dark">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-2 max-w-md text-center md:text-left">
              <h3 className="text-2xl font-bold text-text-main dark:text-white">Join our community</h3>
              <p className="text-text-muted dark:text-gray-400">Subscribe for stories from our artisans and early access to new collections.</p>
            </div>
            <form className="flex w-full md:w-auto flex-1 max-w-md gap-3" onSubmit={(e) => e.preventDefault()}>
              <input className="flex-1 rounded-lg border-none bg-white dark:bg-[#3a2a20] px-4 py-3 text-sm text-text-main focus:ring-2 focus:ring-primary dark:text-white shadow-sm" placeholder="Enter your email" type="email" />
              <button className="bg-primary text-white font-bold rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors shadow-sm" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-text-main dark:text-white mb-2">
              <span className="material-symbols-outlined text-[24px] text-primary">manufacturing</span>
              <h2 className="text-lg font-bold">Artisan Crafted</h2>
            </div>
            <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">Connecting you with the world's most talented creators through fair trade and sustainable practices.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-text-main dark:text-white">Shop</h4>
            <ul className="flex flex-col gap-2 text-sm text-text-muted dark:text-gray-400">
              <li><Link to="/products" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Pottery</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Textiles</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Woodwork</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-text-main dark:text-white">Company</h4>
            <ul className="flex flex-col gap-2 text-sm text-text-muted dark:text-gray-400">
              <li><Link to="/artisans" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/artisans" className="hover:text-primary transition-colors">Our Artisans</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-text-main dark:text-white">Support</h4>
            <ul className="flex flex-col gap-2 text-sm text-text-muted dark:text-gray-400">
              <li><Link to="/faq" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Returns</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Shipping</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-10 py-6 border-t border-neutral-light dark:border-neutral-dark flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted dark:text-gray-500">© 2023 Artisan Crafted Inc. All rights reserved.</p>
          <div className="flex gap-4 text-text-muted dark:text-gray-500">
            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">public</span></a>
            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">photo_camera</span></a>
            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">mail</span></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
