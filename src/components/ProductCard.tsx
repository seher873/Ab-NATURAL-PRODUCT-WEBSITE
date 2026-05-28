import { ShoppingBag, MessageCircle, CreditCard } from 'lucide-react';
import { Product, getWhatsAppUrl } from '../data/products';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails, onBuyNow }: ProductCardProps) {
  const whatsappUrl = getWhatsAppUrl(product.name);

  return (
    <div className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-square bg-stone-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <button
          onClick={() => onViewDetails(product)}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 glass-card text-gray-800 text-xs font-medium px-4 py-2 rounded-full shadow-md hover:bg-emerald-50 flex items-center gap-1.5 whitespace-nowrap"
        >
          <ShoppingBag size={13} />
          View Details
        </button>
      </div>

      <div className="p-4">
        <p className="text-xs text-emerald-600 font-medium capitalize mb-1 font-body">{product.category.replace('-', ' ')}</p>
        <h3 className="font-display font-semibold text-gray-800 text-sm leading-snug mb-1 line-clamp-2">{product.name}</h3>
        {product.quantity && (
          <span className="block text-xs text-gray-400 font-medium mb-2">Quantity: {product.quantity}</span>
        )}
        <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900">Rs. {product.price.toLocaleString()}</span>
        </div>
        <div className="flex gap-2 mt-3">
          {onBuyNow && (
            <button
              onClick={() => onBuyNow(product)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-600 text-white text-xs font-semibold px-3 py-2 rounded-full hover:bg-emerald-700 active:scale-95 transition-all duration-150 shadow-sm"
            >
              <CreditCard size={13} />
              Buy Now
            </button>
          )}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white text-emerald-600 text-xs font-semibold px-3 py-2 rounded-full border border-emerald-200 hover:bg-emerald-50 active:scale-95 transition-all duration-150"
            aria-label={`Order ${product.name} on WhatsApp`}
          >
            <MessageCircle size={13} />
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
