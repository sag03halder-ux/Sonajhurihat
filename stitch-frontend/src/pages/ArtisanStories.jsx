import { Link } from 'react-router-dom'

const artisans = [
  {
    id: 1,
    name: 'Elena Vance',
    location: 'Oaxaca, Mexico',
    specialty: 'Weaver',
    experience: '40 yrs exp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUGwBd1JDKSO3_qbHvGfB7xcuAIDlOQ76iD0xGGjzVOuByvJoWaCvypeFID-NpmN2vOA2BwqfsT5aZI-rtOpK2aqp9G9DGs3YFjO2EClH-Iw_bav_lCT8Vwsu88U-QSHmOOYceJCe06BscBa9DH8MV7k6USu31j_KcHkD3fN2_980VBMDfNfXYU1ItDzGJQcY5A4IFKw_HJtWOiUKeb0VMOohfzTATfIgp2kRYIGVmiNBcAFjMjl9ArNS8VoKALFhU1fqf_ujf3bzM',
    story: 'For 40 years, I have dyed wool using natural pigments from my garden. The colors change with the seasons, just like life itself.',
    height: 'tall'
  },
  {
    id: 2,
    name: 'Kenji Sato',
    location: 'Kyoto, Japan',
    specialty: 'Potter',
    experience: '25 yrs exp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBpo40fdxZLW-vEjwAE49F-zBMr4lvyC0uCUV4elpkKgDZ3hi6CQXzvb_ecWnWVCYuFQLT4sa9PDkDey-qKwp0EOSXZRINthP2sOVJzp2NW_r16jPq0j_1YbOC3Lasokb2BAM2DdgCmQovlnXIfoLPOEbWKGexI-QQ-eudnBav4_MJYQnNr21_gW97hky1FeUutaV3KQc3GmysM0f0qaVN74DwpQDutkYI6v5KHfiQp759---1ZTZlNfCU8rUMgWlKpXUvqNgK77ee',
    story: 'Bringing the ancient art of Raku firing into the 21st century with minimalist forms.',
    height: 'short'
  },
  {
    id: 3,
    name: 'Marcus Thorne',
    location: 'Portland, USA',
    specialty: 'Woodworker',
    experience: '15 yrs exp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9HY4OJZW-uk8Z_S66T6U1U4oZ84JgEa2dJrs7k5oEt350q-tlhk3Y6KMSwL_jULIBoHLppHuuTXxKCoG6R5WvxLQGVdsbY0K0pRTtMp-CxOjSr9UcZpl4F2iAGahEPZD1ceVOot_ioXhTcaRpIHgQIILtTwOieerXfIpzilYw4se30ii0EzKzTxoaAk6ZU406s1slzilzwRuMsoO82_zow9q3Tn5az7VuXuJqGZe1Z7y-buOcth0EQx3YhWbhuLO0xGrkr8vek4MZ',
    story: 'Reclaimed timber finds a second life in Marcus\'s workshop. Each knot and grain pattern dictates the final form of his furniture.',
    height: 'tall'
  },
  {
    id: 4,
    name: 'Aarav Patel',
    location: 'Jaipur, India',
    specialty: 'Jeweler',
    experience: '20 yrs exp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB3MJsj4ivLLbfqjMVpu8VnyyOpyxZAJPc8yX_zquiHL6nvsNSo5uX-E7HTVzoXVNk33AmueNuGDeFdgajCpcWVx67joA7jrK2g96yLYQeD34su6wVZ4JGU-bfQ7nHK67riAjZ9f0I83pNz7aLKlvtPA6IpEyIIIzS-RGzOY9heyE1K172k5FsuydH2FCf9XMDYbY832RTLCOW7qziDH4YDpZCIbu1lTIyKtg4_7MRFpHdSVDjc-UEDFQFv72PQOPz6OMs6kK4iWxM',
    story: 'A fourth-generation silversmith merging traditional Kundan techniques with contemporary geometric designs.',
    height: 'medium'
  },
  {
    id: 5,
    name: 'Sophie Dubois',
    location: 'Provence, France',
    specialty: 'Skincare',
    experience: '12 yrs exp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAewevWBDdKUt83iyBHx5HsUbtMpmcgdwtToI8wX5rkVzQBXftKaZXG8Ap7Wp8kKgqzrUZpu6WQi_IbW1SDJICyW1LFgSeAHVTwHFXMU53ha-ry_gcCAeP_erZd6Pskp7hIWa6zf7mbKWsxSi9KpVxJOqxaOwzvmU3UJe_xnxu4Y_mh_5v3dN_fulP8nFBCpJj3PdYLadCVXtasILrreXW2SzZl72Az8hbvBQz7odgWBgVtv_7dUXexwtr5B9scqlbrH0aj_QZfw58L',
    story: 'Creating organic skincare and soaps from the lavender fields of her family estate. Nature\'s purity bottled by hand.',
    height: 'medium'
  }
]

const featuredArtisan = {
  name: 'Elena Vance',
  location: 'Oaxaca, Mexico',
  specialty: 'Master Weaver',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUGwBd1JDKSO3_qbHvGfB7xcuAIDlOQ76iD0xGGjzVOuByvJoWaCvypeFID-NpmN2vOA2BwqfsT5aZI-rtOpK2aqp9G9DGs3YFjO2EClH-Iw_bav_lCT8Vwsu88U-QSHmOOYceJCe06BscBa9DH8MV7k6USu31j_KcHkD3fN2_980VBMDfNfXYU1ItDzGJQcY5A4IFKw_HJtWOiUKeb0VMOohfzTATfIgp2kRYIGVmiNBcAFjMjl9ArNS8VoKALFhU1fqf_ujf3bzM',
  quote: 'For 40 years, I have dyed wool using natural pigments from my garden. The colors change with the seasons, just like life itself.'
}

function ArtisanStories() {
  const getImageHeight = (height) => {
    switch (height) {
      case 'tall': return 'h-[450px]'
      case 'medium': return 'h-[350px]'
      case 'short': return 'h-[300px]'
      default: return 'h-[350px]'
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f7f6] text-stone-800 font-sans">
      <nav className="sticky top-0 z-50 bg-[#f8f7f6]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="material-icons text-[#ec6d13] text-3xl">handyman</span>
              <span className="font-bold text-xl tracking-tight text-stone-900">HANDCRAFTED</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/products" className="text-stone-600 hover:text-[#ec6d13] font-medium transition-colors">Shop</Link>
              <Link to="/stories" className="text-[#ec6d13] font-medium transition-colors border-b-2 border-[#ec6d13]">Stories</Link>
              <Link to="/about" className="text-stone-600 hover:text-[#ec6d13] font-medium transition-colors">About</Link>
              <Link to="/impact" className="text-stone-600 hover:text-[#ec6d13] font-medium transition-colors">Impact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-stone-600 hover:text-[#ec6d13] transition-colors">
                <span className="material-icons">search</span>
              </button>
              <button className="text-stone-600 hover:text-[#ec6d13] transition-colors">
                <span className="material-icons">shopping_bag</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <header className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-stone-900/40 z-10"></div>
        <img 
          alt="Close up of artisan hands working on pottery wheel" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYTh1uG8Kh2f358pTOdf6ck9LnxTaD-w2UMkhPlgdVC4uKMezDK6_RkAV0wrMhmIUUA8eSu4UPPEDkdku9r06ihdpU2iK0yQq2rLR7lhosj7lHKMKGtqi6TdcRcGs544e1jZBy9oc14q0DSr3Kr50UlhXbZLPv1d3GxMKk4Osnqqgukie5FtixpxuZBKSwa7TkZNMIce0s87xkjYcxHFR_xHtkUPdUrPPQWuVHcmz7EJ4IwCtnuiZ9iz6IwdkizNxtI-bNBby1o0CS"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="uppercase tracking-[0.2em] text-sm md:text-base font-semibold text-stone-200 mb-4 block">Behind the Brand</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Meet the <span className="text-[#ec6d13]">Makers</span></h1>
          <p className="text-lg md:text-xl text-stone-100 max-w-2xl mx-auto font-light leading-relaxed">
            Every imperfection tells a story. Meet the master craftsmen and women preserving heritage techniques in a modern world.
          </p>
        </div>
      </header>

      <section className="py-10 bg-[#f8f7f6] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <button className="text-[#ec6d13] font-semibold border-b-2 border-[#ec6d13] pb-1">All Artisans</button>
              <button className="text-stone-500 hover:text-[#ec6d13] transition-colors pb-1">Weavers</button>
              <button className="text-stone-500 hover:text-[#ec6d13] transition-colors pb-1">Potters</button>
              <button className="text-stone-500 hover:text-[#ec6d13] transition-colors pb-1">Woodworkers</button>
              <button className="text-stone-500 hover:text-[#ec6d13] transition-colors pb-1">Jewelers</button>
            </div>
            <div className="flex items-center text-sm text-stone-500">
              <span className="mr-2">Sort by:</span>
              <select className="bg-transparent border-none font-medium text-stone-800 focus:ring-0 cursor-pointer pr-8">
                <option>Featured</option>
                <option>Newest</option>
                <option>Location</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.2em] text-sm font-semibold text-[#ec6d13] mb-4 block">Featured Artisan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Spotlight</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-lg h-[500px]">
              <img 
                alt={`Portrait of ${featuredArtisan.name}`} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                src={featuredArtisan.image}
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#ec6d13] font-semibold text-sm tracking-wide uppercase">{featuredArtisan.location}</span>
                <span className="text-stone-400 text-xs">•</span>
                <span className="text-stone-500 text-sm">{featuredArtisan.specialty}</span>
              </div>
              <h3 className="text-3xl font-bold text-stone-900 mb-4">{featuredArtisan.name}</h3>
              <blockquote className="text-lg text-stone-600 italic leading-relaxed mb-6">
                "{featuredArtisan.quote}"
              </blockquote>
              <Link 
                to={`/stories/${featuredArtisan.id}`} 
                className="inline-flex items-center text-[#ec6d13] font-medium hover:underline"
              >
                View Full Story 
                <span className="material-icons ml-1 text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan) => (
              <article key={artisan.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className={`relative overflow-hidden ${getImageHeight(artisan.height)}`}>
                    <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors z-10"></div>
                    <img 
                      alt={`Portrait of ${artisan.name}`} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                      src={artisan.image}
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#ec6d13] font-semibold text-sm tracking-wide uppercase">{artisan.location}</span>
                      <span className="text-stone-400 text-xs flex items-center">
                        <span className="material-icons text-sm align-middle mr-1">schedule</span> 
                        {artisan.experience}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-[#ec6d13] transition-colors">{artisan.name}</h2>
                    <p className="text-stone-600 mb-6 font-light leading-relaxed">
                      "{artisan.story}"
                    </p>
                    <Link 
                      to={`/stories/${artisan.id}`} 
                      className="inline-flex items-center text-[#ec6d13] font-medium group/link"
                    >
                      View Full Story 
                      <span className="material-icons ml-1 text-sm transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 bg-white border border-stone-300 rounded-full text-stone-600 hover:bg-[#ec6d13] hover:text-white hover:border-[#ec6d13] transition-all duration-300 shadow-sm font-medium">
              Load More Stories
            </button>
          </div>
        </div>
      </main>

      <section className="bg-white py-20 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="material-icons text-[#ec6d13] text-5xl mb-6">volunteer_activism</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Support the Craft</h2>
          <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            By purchasing from our artisans, you are directly supporting their livelihood and helping preserve cultural heritage that is at risk of disappearing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/products" 
              className="px-8 py-4 bg-[#ec6d13] text-white rounded-lg font-semibold shadow-lg hover:bg-[#ec6d13]/90 transition-colors transform hover:-translate-y-1"
            >
              Shop The Collection
            </Link>
            <Link 
              to="/impact" 
              className="px-8 py-4 bg-stone-100 text-stone-800 rounded-lg font-semibold hover:bg-stone-200 transition-colors"
            >
              Learn About Our Impact
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">Stay Connected</h2>
            <p className="text-stone-600 mb-6">Subscribe for stories from the workshop.</p>
            <div className="flex">
              <input 
                className="bg-white border-none rounded-l-md px-4 py-3 w-full text-sm focus:ring-1 focus:ring-[#ec6d13] text-stone-800 shadow-sm" 
                placeholder="Enter your email" 
                type="email"
              />
              <button className="bg-[#ec6d13] text-white px-6 py-3 rounded-r-md hover:bg-[#ec6d13]/90 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <span className="material-icons text-[#ec6d13] text-2xl">handyman</span>
                <span className="font-bold text-lg text-white tracking-tight">HANDCRAFTED</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Connecting conscious consumers with master artisans around the globe.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products" className="hover:text-[#ec6d13] transition-colors">New Arrivals</Link></li>
                <li><Link to="/products?category=home-decor" className="hover:text-[#ec6d13] transition-colors">Home Decor</Link></li>
                <li><Link to="/products?category=jewelry" className="hover:text-[#ec6d13] transition-colors">Jewelry</Link></li>
                <li><Link to="/products?category=textiles" className="hover:text-[#ec6d13] transition-colors">Textiles</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-[#ec6d13] transition-colors">About Us</Link></li>
                <li><Link to="/stories" className="hover:text-[#ec6d13] transition-colors">Artisan Stories</Link></li>
                <li><Link to="/impact" className="hover:text-[#ec6d13] transition-colors">Sustainability</Link></li>
                <li><Link to="/contact" className="hover:text-[#ec6d13] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Stay Connected</h3>
              <p className="text-sm mb-4">Subscribe for stories from the workshop.</p>
              <div className="flex">
                <input className="bg-stone-800 border-none rounded-l-md px-4 py-2 w-full text-sm focus:ring-1 focus:ring-[#ec6d13] text-white" placeholder="Email address" type="email"/>
                <button className="bg-[#ec6d13] text-white px-4 py-2 rounded-r-md hover:bg-[#ec6d13]/90 transition-colors">
                  <span className="material-icons text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-12 pt-8 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>© 2023 Handcrafted Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ArtisanStories
