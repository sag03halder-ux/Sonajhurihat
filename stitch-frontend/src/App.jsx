import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/Home'
import Login from './pages/Login'
import ProductCatalog from './pages/ProductCatalog'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import OrderTracking from './pages/OrderTracking'
import SearchFilter from './pages/SearchFilter'
import AddressManagement from './pages/AddressManagement'
import FAQ from './pages/FAQ'
import ArtisanStories from './pages/ArtisanStories'
import PaymentFailure from './pages/PaymentFailure'
import UserDashboard from './pages/UserDashboard'
import VendorDashboard from './pages/VendorDashboard'
import VendorLogin from './pages/VendorLogin'
import VendorOrders from './pages/VendorOrders'
import VendorProducts from './pages/VendorProducts'
import VendorStore from './pages/VendorStore'
import VendorSupport from './pages/VendorSupport'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/search" element={<SearchFilter />} />
        <Route path="/addresses" element={<AddressManagement />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/artisans" element={<ArtisanStories />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/vendor" element={<VendorDashboard />} />
        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/vendor/orders" element={<VendorOrders />} />
        <Route path="/vendor/products" element={<VendorProducts />} />
        <Route path="/vendor/store" element={<VendorStore />} />
        <Route path="/vendor/support" element={<VendorSupport />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
