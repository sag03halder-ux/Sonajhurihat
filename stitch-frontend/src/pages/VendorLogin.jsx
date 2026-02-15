import { Link, useNavigate } from 'react-router-dom'

export default function VendorLogin() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
      <nav className="absolute top-0 w-full z-20 px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-white font-bold text-2xl tracking-tighter drop-shadow-md">Handicraft<span className="text-primary">Hub</span></span>
        </Link>
        <Link to="/" className="text-white/90 hover:text-white text-sm font-medium drop-shadow-md flex items-center gap-1 transition-colors">
          <span className="material-icons text-base">arrow_back</span> Back to Shop
        </Link>
      </nav>

      <main className="flex-grow flex flex-col lg:flex-row h-screen overflow-hidden">
        <section className="relative lg:w-1/2 w-full h-64 lg:h-full flex flex-col justify-end p-8 lg:p-16">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Artisan working on pottery wheel in workshop" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgYJ9vw0qKz2xtRAFi3MKE6805YXozNWpMI8uC7eXbck1jsL8NTZYMpQUVzHEsS4YVnaygdB-4VRyuZeEUbrjzFlM3ZLkIhchCQrtpuFEgjg_02Jcfh8gXyh214s535qaJHLoN2zkqeqxTrZNa6Dq6GI2LUS_caFAB3MZZnNXTKEwmz7KH2dG_D0RoxVf47GKUBwQ9RljZMdJpd3j67lO5fHmaapBElaFBfvvK8KN-B4rEnXQ_OiyQbPNQ7BvgRfiNB5Na3CxdwbCM"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
          </div>
          <div className="relative z-10 text-white max-w-lg mb-4 lg:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold tracking-wide uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Vendor Portal
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">Craft Your Legacy.</h1>
            <p className="text-white/90 text-lg lg:text-xl font-light leading-relaxed">
              Join the world's largest community of authentic artisans. Connect directly with customers who value the soul in your work.
            </p>
            <div className="mt-8 flex items-center gap-4 pt-8 border-t border-white/20">
              <div className="flex -space-x-3">
                <img alt="Artisan portrait" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCHIADMPWqNc87ervzW6dYkAXJi37es_SMa1EzBLxhQouTusIn2B5-4bjmVbAKU1-PEb7P5XFKAczOeHPfx37fjhvhS-LdvsOuLD2gBBZiwvt8uXd7IhEdNdEknRurT7EpgSRurrjaqOjaMyGP0HoKtg4s_k_vAuL_NEuNXIoxgTzPbEEepWcoS8Vl8PGCljidL5h86t3DBpwEw06ElQP77zMFez0DTwnFWk4ijdAXLO4vXrBvhENvGSksUo04fdOj6AUhNHSIoq5V"/>
                <img alt="Artisan portrait" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNUcwd1Iv41z8AQHBLrq2Yq7rT7p9D9og7vsBZcERh4pvpxRo8p-SwxYz5VXH-ZivSmTBQJyXN01wBsAezHO4YrZ8GPN-I_H4EKEDpJAp0kEwGRFr0y72i9f0-ObNy62U6M_CygUpewWxfK8tPLI7DSAt5zZTLnKliKJfEYmgXGWBkreImfJtU-AI_eOvyJMa102RCZuSohSSMz0TBxPjro7GWVEkykwIX9-kFKtKRqtJ7jiWxIsaLNGH_ZcxVKzUbcfPW8fvsE9nE"/>
                <img alt="Artisan portrait" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYD9cxYe42KscEww7_OXtWaaUdgXa25o5N5Wbif8taLNo8eccGqyb7S60pxuYOhm7nQh34ZaBYkf2j0BpM9Gc61I6EiR7k0G5AX5HWt9fdEzFVrvbdNxqD_B2AK7kC0pbtPPOUOhks-VvfZTtlHH7_WPJqy2E3nzl9DGRv-1fZrcaQ7xXTHq64oNPPijHZSO9mHsIyGlTN4-mcCx6qj12JXmknXcyudbxKiYWXqFRDD9EZzWcNcw15IdjZD1-MUsZulLU0pSrei6ZW"/>
              </div>
              <div>
                <p className="font-bold text-sm">Trusted by 5,000+ Artisans</p>
                <div className="flex text-primary text-xs">
                  <span className="material-icons text-[14px]">star</span>
                  <span className="material-icons text-[14px]">star</span>
                  <span className="material-icons text-[14px]">star</span>
                  <span className="material-icons text-[14px]">star</span>
                  <span className="material-icons text-[14px]">star</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:w-1/2 w-full h-full bg-background-light dark:bg-background-dark flex items-center justify-center p-6 lg:p-12 overflow-y-auto">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back, Maker.</h2>
              <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your shop dashboard.</p>
            </div>
            
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); navigate('/vendor-dashboard'); }}>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 ml-2">Email Address</label>
                <div className="relative">
                  <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">email</span>
                  <input 
                    className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 dark:text-white" 
                    placeholder="your@email.com" 
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 ml-2">Password</label>
                <div className="relative">
                  <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">lock</span>
                  <input 
                    className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 dark:text-white" 
                    placeholder="••••••••" 
                    type="password"
                  />
                </div>
                <div className="flex justify-between items-center pt-1">
                  <div className="flex items-center gap-2">
                    <input className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer" id="remember-me" type="checkbox" />
                    <label className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer" htmlFor="remember-me">Remember me</label>
                  </div>
                  <a className="text-sm font-medium text-primary hover:text-primary/80" href="#">Forgot Password?</a>
                </div>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-full shadow-lg shadow-primary/30 transition-transform transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2" type="submit">
                Access Dashboard <span className="material-icons text-sm">arrow_forward</span>
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background-light dark:bg-background-dark text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <img alt="Google" className="h-5 w-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBRFQiPIO48PpfE_om8T79rkEgtkp5TwCpsRQ4bTcoj_gkxBtXJKTAh0eE94KvAgKU9FKOB0J1OurK8VT6QZBQSqkdFRWZQnKCPW5b2pC1m3Gn4eUJO8ozTvDz7ESaSzsM1Zj68r-zFsEZvLLj0cqhYJU4pbb0b0_zn23_yZFWOgcMbRdRnHlw4TSjkA4EDqYlbPPY9oxwdOHTM0HI2Yg1NvCTOryuWpxOz4wndujlfOP8gZndqASPyVXDap240HJh8dVcVrnR9U5-" />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <img alt="Facebook" className="h-5 w-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsZTbKGFVZxp016krQu3MJo2IzrdkPVJM4TZi5ZBG-lCSBZvGH62Rb49r8N71xkMrMWlVI2myU2uKDd6ylCkbvm3OgXexZJ2c3pSpVbBWDZrEPhylo26FVk07Vr0lvdAietSFd8gTLrMvxdnDlrkPjoZ2HSXrwOP5p6n6qviECNLtSb-c2xw2yuMz6e87M87bW5wQC3wecStjaHEH8abNaat8xNG-pbdQF7Dsy9Xd-7LqMXl9iDVnujFhoehMvNHvOvY8OsDu9kQAN" />
                Facebook
              </button>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Join as a Vendor</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-primary text-lg mt-0.5">store</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Create your online storefront in minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-primary text-lg mt-0.5">analytics</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Access real-time analytics and insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-primary text-lg mt-0.5">payments</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Secure payments with low transaction fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-primary text-lg mt-0.5">group</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Reach millions of customers worldwide</span>
                  </li>
                </ul>
                <button className="w-full mt-6 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-semibold py-3 rounded-full transition-colors flex items-center justify-center gap-2">
                  Start Selling <span className="material-icons text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <span className="material-icons text-sm">lock</span> Secure Vendor Portal
            </div>

            <div className="pt-4 text-center border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-500">
                Need help onboarding? <a className="text-primary font-medium hover:underline" href="#">Contact Support</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
