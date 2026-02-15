import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function PaymentFailure() {
  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-[#f8f6f6] flex flex-col">
      <header className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#ec6d13] font-bold text-2xl tracking-tight">HandiCraft.</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="hidden sm:inline">Secure Payment</span>
            <span className="material-icons-outlined text-lg">lock</span>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 lg:max-w-2xl">
            <div className="mb-8 flex items-center justify-center lg:justify-start">
              <div className="h-20 w-20 rounded-full bg-[#ec6d13]/10 flex items-center justify-center ring-8 ring-[#ec6d13]/5">
                <span className="material-icons-outlined text-5xl text-[#ec6d13]">gpp_bad</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
              Payment Unsuccessful
            </h1>
            <p className="text-lg text-gray-600 mb-8 text-center lg:text-left leading-relaxed">
              We couldn't process your transaction. Don't worry, no funds have been deducted from your account. Your cart has been saved.
            </p>

            <div className="bg-[#ec6d13]/5 border border-[#ec6d13]/20 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="material-icons-outlined text-[#ec6d13] mt-1">info</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Reason for failure:</h3>
                  <p className="text-gray-600 text-sm">
                    The bank declined the transaction. This often happens due to insufficient funds, an expired card, or a mismatch in the billing address.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Order ID:</span>
                <span className="text-sm font-semibold text-gray-900">#ORD-2024-12345</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={handleTryAgain}
                className="flex-1 bg-[#ec6d13] hover:bg-[#d55f0f] text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span className="material-icons-outlined group-hover:-translate-y-0.5 transition-transform">refresh</span>
                Try Again
              </button>
              <Link
                to="/checkout"
                className="flex-1 bg-white border border-gray-300 hover:border-[#ec6d13] text-gray-700 font-medium py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-center"
              >
                <span className="material-icons-outlined">credit_card</span>
                Use Different Method
              </Link>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="material-icons-outlined text-gray-400">help_outline</span>
                Common Solutions
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-icons-outlined text-green-600 text-sm mt-1">check_circle</span>
                  <span className="text-gray-600 text-sm">Check your card details (number, expiry, CVV).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons-outlined text-green-600 text-sm mt-1">check_circle</span>
                  <span className="text-gray-600 text-sm">Ensure your billing address matches your bank records.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons-outlined text-green-600 text-sm mt-1">check_circle</span>
                  <span className="text-gray-600 text-sm">Contact your bank to authorize the payment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons-outlined text-green-600 text-sm mt-1">check_circle</span>
                  <span className="text-gray-600 text-sm">Try again with a different payment method.</span>
                </li>
              </ul>
              <div className="mt-6 text-sm text-gray-500">
                Need help? <Link to="/support" className="text-[#ec6d13] hover:underline font-medium">Chat with Support</Link>
              </div>
            </div>
          </div>

          <div className="lg:w-96 w-full lg:sticky lg:top-8 h-fit">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-lg font-semibold text-gray-900 flex justify-between items-center">
                  Order Summary
                  <span className="text-xs font-normal bg-[#ec6d13]/10 text-[#ec6d13] px-2 py-1 rounded-full">Pending</span>
                </h2>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden relative group">
                    <img
                      alt="Hand-woven beige wicker basket"
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu1bVhZm_HpI7q7iBPF5mH6x4np0wWe4HECHsKU8bCLmqJiV7pt04vsY6pvfjRMOYMSTpyQAK0_dhuJU69v2nBV7_j0xqlplO6mQrWJejNcOwXBcPEYYeliO9xIrDUB5ltcbo7g8f1M3reu2Isnts-kNrlikVSabkDwh7ltaFqbqGViwHvbu773MuSZ3rYMOfz2JToZ131WIISzAz5hh4qAtAyPHsoHf_qnZ3gvXFEoekB7cnCZBfxGVcRnc1lAOJobdHLwooo1PDw"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">Woven Seagrass Basket</h3>
                    <p className="mt-1 text-xs text-gray-500">Natural / Medium</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-900">$45.00</span>
                      <span className="text-xs text-gray-500">Qty: 1</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden relative group">
                    <img
                      alt="Blue ceramic artisan vase"
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqkto6MIudMwdiBTSNJnTAJeCoRPVcjlzpQitnWSgmeXh07b1b1cxh5CJFzwojubUHI9Uao2nx8zWFIqUFcw-yjJorUwYLGm0VxSCtpUaP-DnZoJKKzpW4wGLLFOJYshCwU86TE-tMcabw-PgWVwHd-v8wER3MiqRsyiCKg3Ovi-JDYS0YGOYcE7ZLPCrJod3gW-rs8xPJmsGKMK4LvaSmSbZZiDF0noGE7XRn1kQHzIfHS-lXI_plfAi51rIf6RIfkg5F8fK-__tq"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">Artisan Ceramic Vase</h3>
                    <p className="mt-1 text-xs text-gray-500">Cobalt Blue</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-900">$60.00</span>
                      <span className="text-xs text-gray-500">Qty: 1</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden relative group">
                    <img
                      alt="Handmade macrame wall hanging"
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjLIF-tqoA22Vb0pB28vmaw9QXfbrLjTpC9Ni11SyR3xOBX9MN0xW7XZAsei_QmVL6nXatTxu_au0GrSDSlCaH0QEL6UrP9R_-xXfpx5ojfakngIePnOtPlYQy2Y-mojSNi_yqLhvQQ-2c3kybeshIj96-e70gUcd8Ofy6NHgR5dLbMj20G96p66qyKumShy_E6o1N8Xv6wctsbU04Z6nS-FHoPoAMJ6KThNQ2FgN3ydJdZxr5_BQeIBXjEGyMP4b7uwYZkHHq_ygI"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">Macrame Wall Hanging</h3>
                    <p className="mt-1 text-xs text-gray-500">Cream Cotton</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-900">$35.00</span>
                      <span className="text-xs text-gray-500">Qty: 1</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 p-6 bg-gray-50/30 space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>$140.00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span>$12.00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Tax</span>
                  <span>$8.40</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                  <span className="text-base font-bold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-[#ec6d13]">$160.40</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-4 grayscale opacity-60">
              <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-500">VISA</div>
              <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-500">MC</div>
              <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-500">AMEX</div>
              <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-500">PAYPAL</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2023 HandiCraft Market. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[#ec6d13] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#ec6d13] transition-colors">Terms of Service</Link>
            <Link to="/returns" className="hover:text-[#ec6d13] transition-colors">Return Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
