import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { products, categories, Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductVideos from '../components/ProductVideos';

interface ShopProps {
  onViewProduct: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}

export default function Shop({ onViewProduct, onBuyNow, searchQuery = '', setSearchQuery }: ShopProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState(searchQuery);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (setSearchQuery) setSearchQuery(value);
  };

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-16 min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">Our Products</h1>
          <p className="text-gray-500 mt-2 font-body">Pure herbal beauty for every skin type</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
              />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <SlidersHorizontal size={15} className="text-gray-400 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-emerald-300 hover:text-emerald-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <p className="text-sm text-gray-500 mb-6">
          {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={onViewProduct} onBuyNow={onBuyNow} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-gray-800 font-semibold mb-1">No products found</h3>
            <p className="text-gray-400 text-sm">Try a different search or category</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('all'); }}
              className="mt-4 text-emerald-600 font-medium text-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Product Videos Section */}
      <ProductVideos />
    </div>
  );
}
