import { ArrowLeft, MessageCircle, CreditCard, CheckCircle2, Package, Star } from 'lucide-react';
import { Product, getWhatsAppUrl, getImageUrl } from '../data/products';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onNavigate: (page: string) => void;
  onBuyNow?: (product: Product) => void;
}

export default function ProductDetail({ product, onBack, onNavigate, onBuyNow }: ProductDetailProps) {
  const whatsappUrl = getWhatsAppUrl(product.name);

  return (
    <div className="pt-16 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-emerald-600 text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Products
        </button>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-md">
              <img
                src={getImageUrl(product.image)}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <p className="text-sm text-emerald-600 font-semibold capitalize mb-1 font-body">
                  {product.category.replace('-', ' ')}
                </p>
                <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">{product.name}</h1>
              </div>
              {product.badge && (
                <span className="flex-shrink-0 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs text-gray-500 ml-1">(24 reviews)</span>
            </div>

            <p className="text-3xl font-bold text-gray-900 mb-5">Rs. {product.price.toLocaleString()}</p>

            <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

            {/* Payment Options */}
            {onBuyNow && (
              <button
                onClick={() => onBuyNow(product)}
                className="w-full inline-flex items-center justify-center gap-3 bg-emerald-600 text-white font-bold text-base px-8 py-4 rounded-full hover:bg-emerald-700 active:scale-95 transition-all duration-150 shadow-lg shadow-emerald-200 mb-3"
              >
                <CreditCard size={20} />
                Buy Now — JazzCash
              </button>
            )}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-white text-emerald-600 font-bold text-base px-8 py-4 rounded-full hover:bg-emerald-50 active:scale-95 transition-all duration-150 border-2 border-emerald-200"
            >
              <MessageCircle size={20} />
              Order on WhatsApp — Rs. {product.price.toLocaleString()}
            </a>
            <p className="text-xs text-gray-400 text-center mt-3 mb-8">
              Buy with JazzCash or order directly via WhatsApp
            </p>

            {/* Ingredients */}
            {product.ingredients && (
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Package size={16} className="text-emerald-600" />
                  Key Ingredients
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span key={ing} className="bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full border border-emerald-100">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {product.benefits && (
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Usage */}
            {product.usage && (
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm">How to Use</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{product.usage}</p>
              </div>
            )}
          </div>
        </div>

        {/* More Products CTA */}
        <div className="mt-14 text-center border-t border-gray-200 pt-10">
          <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Explore More Products</h3>
          <p className="text-gray-500 text-sm mb-5">Discover our full range of natural herbal products</p>
          <button
            onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-700 transition-all duration-200 shadow-md"
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}
