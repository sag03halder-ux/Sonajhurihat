import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser, registerUser } from '../services/appwrite'

export default function Login() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await loginUser(formData.email, formData.password)
      console.log('Logged in via Appwrite')
      navigate('/dashboard')
    } catch (err) {
      console.error('Auth error:', err)
      setError(err.message || 'Authentication failed')
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await registerUser(formData.email, formData.password, formData.name)
      console.log('Registered via Appwrite')
      navigate('/dashboard')
    } catch (err) {
      console.error('Auth error:', err)
      setError(err.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

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
          <Link to="/faq" className="hover:text-primary transition-colors">About</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/search" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">search</span>
          </Link>
          <Link to="/cart" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">shopping_bag</span>
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
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-xl">mail</span>
                    <input
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-slate-900 dark:text-white"
                      placeholder="you@example.com"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                    <a className="text-xs font-medium text-primary hover:text-orange-700" href="#">Forgot Password?</a>
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-xl">lock</span>
                    <input
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-slate-900 dark:text-white"
                      placeholder="••••••••"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-orange-600 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all flex justify-center items-center gap-2"
                >
                  {loading ? 'Processing...' : 'Sign In'}
                </button>
              </form>
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-slate-700"></div></div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-slate-900 text-slate-500">Or continue with</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center w-full px-4 py-2 border border-slate-200 rounded-lg bg-white dark:bg-slate-800 text-sm font-medium">
                    <img alt="Google" className="h-5 w-5 mr-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBRFQiPIO48PpfE_om8T79rkEgtkp5TwCpsRQ4bTcoj_gkxBtXJKTAh0eE94KvAgKU9FKOB0J1OurK8VT6QZBQSqkdFRWZQnKCPW5b2pC1m3Gn4eUJO8ozTvDz7ESaSzsM1Zj68r-zFsEZvLLj0cqhYJU4pbb0b0_zn23_yZFWOgcMbRdRnHlw4TSjkA4EDqYlbPPY9oxwdOHTM0HI2Yg1NvCTOryuWpxOz4wndujlfOP8gZndqASPyVXDap240HJh8dVcVrnR9U5-" />
                    Google
                  </button>
                  <button className="flex items-center justify-center w-full px-4 py-2 border border-slate-200 rounded-lg bg-white dark:bg-slate-800 text-sm font-medium">
                    <img alt="Facebook" className="h-5 w-5 mr-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsZTbKGFVZxp016krQu3MJo2IzrdkPVJM4TZi5ZBG-lCSBZvGH62Rb49r8N71xkMrMWlVI2myU2uKDd6ylCkbvm3OgXexZJ2c3pSpVbBWDZrEPhylo26FVk07Vr0lvdAietSFd8gTLrMvxdnDlrkPjoZ2HSXrwOP5p6n6qviECNLtSb-c2xw2yuMz6e87M87bW5wQC3wecStjaHEH8abNaat8xNG-pbdQF7Dsy9Xd-7LqMXl9iDVnujFhoehMvNHvOvY8OsDu9kQAN" />
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBpUNfj1Ftr6aSDdOOiq4F3Pngzz0zCE84W3OXk5oal1fpgBeiyLFu2Hp_qw_aWmfY-Iur78PAP8HpWRBkQUiaa5Ux2DNI-lHHX1LMQi251-SacMSjx1VG65Cj3tNzn1Usu3VAryJP9xMElFtkVgoqd4T5GmFN2hPPcd0EdXm0RhwlhYMDpP1AxosvmYDKRkZrvq58dwvhMvwMi9bbhgVbVf-41TL5MzfustmbLTdJqSlWWs5GZl1t9OORVTDBIu0hLES4cGtEOBRW5)' }}></div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="mb-8">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">New Customer?</span>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Join our Community</h2>
                <p className="text-slate-500 dark:text-slate-400">Create an account to track orders and discover unique handcrafted items.</p>
              </div>
              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                  <input
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary text-slate-900 dark:text-white"
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary text-slate-900 dark:text-white"
                    placeholder="you@example.com"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Password</label>
                  <input
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary text-slate-900 dark:text-white"
                    placeholder="Min. 8 characters"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-semibold py-3 px-4 rounded-lg shadow-md transition-all disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Create Account'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-slate-900 py-6 text-center border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500">
        <p>© 2023 Artisan Market. All rights reserved.</p>
      </footer>
    </div>
  )
}
