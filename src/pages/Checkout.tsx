import { ArrowLeft, Copy, Check, MessageCircle, Building2, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Product, WHATSAPP_NUMBER, getImageUrl } from '../data/products';

interface CheckoutProps {
  product: Product;
  onBack: () => void;
}

export default function Checkout({ product, onBack }: CheckoutProps) {
  const [copied, setCopied] = useState(false);

  const jazzcashNumber = '03120258380';

  const handleCopy = () => {
    navigator.clipboard.writeText(jazzcashNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const message = `I have paid via JazzCash for ${product.name}. Please confirm my order.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="pt-16 min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-emerald-600 text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">Checkout</h1>
            <p className="text-gray-500 mt-2 font-body">Complete your payment via JazzCash</p>
          </div>

          <div className="space-y-6">
            {/* Product Summary */}
            <div className="glass-card rounded-3xl p-6">
              <h2 className="font-display font-bold text-gray-900 text-lg mb-4">Order Summary</h2>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-stone-100 flex-shrink-0 shadow-sm">
                  <img
                    src={getImageUrl(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-bold text-gray-900 truncate">{product.name}</p>
                  {product.quantity && (
                    <p className="text-sm text-gray-500 mt-0.5">Qty: {product.quantity}</p>
                  )}
                  <p className="text-lg font-bold text-emerald-600 mt-1">Rs. {product.price.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* JazzCash Instructions */}
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  <Building2 size={22} className="text-emerald-600" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-gray-900">JazzCash Payment</h2>
                  <p className="text-sm text-gray-500">Manual Bank Transfer</p>
                </div>
              </div>

              <div className="space-y-4 bg-emerald-50/50 rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 font-body">Account Name:</span>
                  <span className="font-bold text-gray-900">Ab-Natural</span>
                </div>
                <hr className="border-emerald-100" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 font-body">JazzCash Number:</span>
                  <span className="font-bold text-gray-900 font-mono tracking-wider">{jazzcashNumber}</span>
                </div>
                <hr className="border-emerald-100" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 font-body">Amount:</span>
                  <span className="font-bold text-emerald-600 text-lg">Rs. {product.price.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-emerald-700 active:scale-[0.98] transition-all duration-150 shadow-sm"
              >
                {copied ? (
                  <><Check size={18} /> Number Copied!</>
                ) : (
                  <><Copy size={18} /> Copy JazzCash Number</>
                )}
              </button>
            </div>

            {/* Steps */}
            <div className="glass-card rounded-3xl p-6">
              <h2 className="font-display font-bold text-gray-900 text-lg mb-4">How to Pay</h2>
              <div className="space-y-4">
                {[
                  { step: '1', text: 'Open your JazzCash app or dial *786#' },
                  { step: '2', text: `Send Rs. ${product.price.toLocaleString()} to JazzCash number ${jazzcashNumber}` },
                  { step: '3', text: 'After payment, click the WhatsApp button below' },
                  { step: '4', text: 'We will confirm your order within 30 minutes' },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-emerald-700 font-bold text-xs">{step}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Confirmation */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 text-center border-2 border-emerald-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={28} className="text-emerald-600" />
              </div>
              <h2 className="font-display font-bold text-gray-900 text-xl mb-2">Paid? Confirm Now</h2>
              <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
                After making the payment, click below to send us a confirmation message on WhatsApp.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-emerald-600 text-white font-bold px-8 py-4 rounded-full hover:bg-emerald-700 active:scale-95 transition-all duration-150 shadow-lg shadow-emerald-200 w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                I Have Paid — Confirm Order
              </a>
              <p className="text-xs text-gray-400 mt-3">
                Opens WhatsApp with your payment confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
