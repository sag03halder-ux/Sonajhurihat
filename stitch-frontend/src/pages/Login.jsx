import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
      <nav className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">local_florist</span>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Artisan<span className="text-primary">Market</span></span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <Link to="/products" className="hover:text-primary transition-colors">Shop</Link>
          <Link to="/artisans" className="hover:text-primary transition-colors">Artisans</Link>
          <Link to="/artisans" className="hover:text-primary transition-colors">About Us</Link>
          <Link to="/faq" className="hover:text-primary transition-colors">Blog</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">search</span>
          </button>
          <Link to="/cart" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">shopping_bag</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </Link>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-6xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-900 rounded-full items-center justify-center z-10 shadow-lg border border-slate-100 dark:border-slate-800">
            <span className="text-slate-400 text-xs font-semibold">OR</span>
          </div>
          
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800 relative group">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h2>
                <p className="text-slate-500 dark:text-slate-400">Sign in to access your saved items and order history.</p>
              </div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="login-email">Email Address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-xl">mail</span>
                    <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-white" id="login-email" placeholder="you@example.com" type="email" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="login-password">Password</label>
                    <a className="text-xs font-medium text-primary hover:text-orange-700 transition-colors" href="#">Forgot Password?</a>
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-xl">lock</span>
                    <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-white" id="login-password" placeholder="••••••••" type="password" />
                  </div>
                </div>
                <div className="flex items-center">
                  <input className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer" id="remember-me" type="checkbox" />
                  <label className="ml-2 block text-sm text-slate-600 dark:text-slate-400 cursor-pointer" htmlFor="remember-me">
                    Remember me for 30 days
                  </label>
                </div>
                <Link to="/dashboard" className="w-full bg-primary hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex justify-center items-center gap-2">
                  <span>Sign In</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </form>
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-slate-900 text-slate-500">Or continue with</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    <img alt="Google" className="h-5 w-5 mr-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBRFQiPIO48PpfE_om8T79rkEgtkp5TwCpsRQ4bTcoj_gkxBtXJKTAh0eE94KvAgKU9FKOB0J1OurK8VT6QZBQSqkdFRWZQnKCPW5b2pC1m3Gn4eUJO8ozTvDz7ESaSzsM1Zj68r-zFsEZvLLj0cqhYJU4pbb0b0_zn23_yZFWOgcMbRdRnHlw4TSjkA4EDqYlbPPY9oxwdOHTM0HI2Yg1NvCTOryuWpxOz4wndujlfOP8gZndqASPyVXDap240HJh8dVcVrnR9U5-" />
                    Google
                  </button>
                  <button className="flex items-center justify-center w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    <img alt="Facebook" className="h-5 w-5 mr-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsZTbKGFVZxp016krQu3MJo2IzrdkPVJM4TZi5ZBG-lCSBZvGH62Rb49r8N71xkMrMWlVI2myU2uKDd6ylCkbvm3OgXexZJ2c3pSpVbBWDZrEPhylo26FVk07Vr0lvdAietSFd8gTLrMvxdnDlrkPjoZ2HSXrwOP5p6n6qviECNLtSb-c2xw2yuMz6e87M87bW5wQC3wecStjaHEH8abNaat8xNG-pbdQF7Dsy9Xd-7LqMXl9iDVnujFhoehMvNHvOvY8OsDu9kQAN" />
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBpUNfj1Ftr6aSDdOOiq4F3Pngzz0zCE84W3OXk5oal1fpgBeiyLFu2Hp_qw_aWmfY-Iur78PAP8HpWRBkQUiaa5Ux2DNI-lHHX1LMQi251-SacMSjx1VG65Cj3tNzn1Usu3VAryJP9xMElFtkVgoqd4T5GmFN2hPPcd0EdXm0RhwlhYMDpP1AxosvmYDKRkZrvq58dwvhMvwMi9bbhgVbVf-41TL5MzfustmbLTdJqSlWWs5GZl1t9OORVTDBIu0hLES4cGtEOBRW5)'}}></div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="mb-8">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">New Customer?</span>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Join our Community</h2>
                <p className="text-slate-500 dark:text-slate-400">Create an account to track orders and discover unique handcrafted items.</p>
              </div>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="reg-firstname">First Name</label>
                    <input className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-white" id="reg-firstname" placeholder="Jane" type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="reg-lastname">Last Name</label>
                    <input className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-white" id="reg-lastname" placeholder="Doe" type="text" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="reg-email">Email Address</label>
                  <input className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-white" id="reg-email" placeholder="you@example.com" type="email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="reg-password">Create Password</label>
                  <input className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-white" id="reg-password" placeholder="Min. 8 characters" type="password" />
                  <p className="mt-1 text-xs text-slate-500">Must contain at least one number and one uppercase letter.</p>
                </div>
                <div className="flex items-start mt-4">
                  <input className="h-4 w-4 mt-1 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer" id="terms" type="checkbox" />
                  <label className="ml-2 block text-sm text-slate-600 dark:text-slate-400" htmlFor="terms">
                    I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
                  </label>
                </div>
                <button className="w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 mt-2" type="button">
                  Create Account
                </button>
              </form>
              <div className="mt-8 flex items-center justify-center gap-6 text-slate-400">
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-2xl text-primary/60">verified_user</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold">Secure</span>
                </div>
                <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-2xl text-primary/60">support_agent</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold">Support</span>
                </div>
                <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-2xl text-primary/60">local_shipping</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold">Fast Ship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-slate-900 py-6 text-center border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400">
        <p>© 2023 Artisan Market. All rights reserved.</p>
      </footer>
    </div>
  )
}
