import { ArrowRight, Leaf, Shield, Sparkles, Heart, Star, MessageCircle, Instagram } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Product, getImageUrl } from '../data/products';
import ProductVideos from '../components/ProductVideos';

interface HomeProps {
  onNavigate: (page: string) => void;
  onViewProduct: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
}

const testimonials = [
  {
    name: 'Ayesha Khan',
    location: 'Karachi',
    rating: 5,
    text: 'The Neem soap completely cleared my acne. I have been using it for 2 months and my skin has never been better!',
    avatar: 'AK',
  },
  {
    name: 'Fatima Malik',
    location: 'Karachi',
    rating: 5,
    text: 'Ubtan face wash gives me that natural glow I always wanted. Totally chemical-free and smells amazing.',
    avatar: 'FM',
  },
  {
    name: 'Sana Rehman',
    location: 'Islamabad',
    rating: 5,
    text: 'Flaxseed shampoo reduced my hair fall so much. Ordering again for my whole family!',
    avatar: 'SR',
  },
];

const benefits = [
  { icon: Leaf, title: 'Herbal Ingredients', desc: '100% natural plant-based ingredients with no harmful chemicals' },
  { icon: Shield, title: 'Chemical Free', desc: 'Free from parabens, sulfates, and synthetic fragrances' },
  { icon: Sparkles, title: 'Handmade with Care', desc: 'Each product crafted in small batches for maximum quality' },
  { icon: Heart, title: 'Cruelty Free', desc: 'Never tested on animals. Pure, ethical beauty products' },
];

const categoryCards = [
  {
    id: 'soap',
    label: 'Herbal Soaps',
    desc: 'Pure natural cleansing',
    image: '/MULTY-SOAP.jpeg',
  },
  {
    id: 'face-wash',
    label: 'Face Wash',
    desc: 'Gentle daily cleansers',
    image: '/multy-face-washes.jpeg',
  },
  {
    id: 'body-wash',
    label: 'Body Wash',
    desc: 'Deep nourishing cleanse',
    image: '/nela-body-wash.jpeg',
  },
  {
    id: 'shampoo',
    label: 'Shampoo',
    desc: 'Nourishing hair care',
    image: '/shampoo-fles-seed_.jpeg',
  },
];

export default function Home({ onNavigate, onViewProduct, onBuyNow }: HomeProps) {
  const featuredProducts = products.filter((p) => p.badge).slice(0, 4);

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream-50 via-emerald-50 to-stone-100">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
              100% Natural & Herbal
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-5 text-balance">
              Pure Beauty
              <span className="block text-emerald-600">From Nature</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md font-body">
              Handcrafted herbal skincare and haircare products made with pure natural ingredients. No chemicals, just nature's best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleNav('shop')}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-emerald-700 transition-all duration-200 hover:gap-3 shadow-lg shadow-emerald-200"
              >
                Shop Now <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/923120258380?text=Assalamualaikum%2C%20I%20want%20to%20know%20more%20about%20Ab-Natural%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold px-7 py-3.5 rounded-full hover:bg-emerald-50 transition-all duration-200 shadow-md border border-gray-200"
              >
                <MessageCircle size={18} className="text-emerald-600" />
                WhatsApp Us
              </a>
            </div>
            <div className="flex gap-8 mt-10">
              {[['500+', 'Happy Customers'], ['100%', 'Natural'], ['10+', 'Products']].map(([num, label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-gray-900">{num}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={getImageUrl('/MULTY-SOAP.jpeg')}
                alt="Herbal soap collection"
                className="rounded-2xl h-48 w-full object-cover shadow-lg"
              />
              <img
                src={getImageUrl('/hnd-feet-cream_(1).jpeg')}
                alt="Hand & Feet cream"
                className="rounded-2xl h-48 w-full object-cover shadow-lg mt-8"
              />
              <img
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Hair care"
                className="rounded-2xl h-48 w-full object-cover shadow-lg -mt-4"
              />
              <img
                src={getImageUrl('/shampoo-fles-seed_.jpeg')}
                alt="Flaxseed shampoo"
                className="rounded-2xl h-48 w-full object-cover shadow-lg mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm font-semibold uppercase tracking-wider font-body">Collections</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {categoryCards.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleNav('shop')}
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                   src={getImageUrl(cat.image)}
                  alt={cat.label}
                  className={`w-full h-full ${cat.id === 'face-wash' ? 'object-contain p-2 bg-emerald-50' : 'object-cover'} group-hover:scale-110 transition-transform duration-500`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <p className="text-white font-bold text-sm leading-tight">{cat.label}</p>
                  <p className="text-white/70 text-xs mt-0.5">{cat.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-emerald-600 text-sm font-semibold uppercase tracking-wider font-body">Top Picks</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Featured Products</h2>
            </div>
            <button
              onClick={() => handleNav('shop')}
              className="hidden sm:flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:gap-3 transition-all"
            >
              View All <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={onViewProduct} onBuyNow={onBuyNow} />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <button
              onClick={() => handleNav('shop')}
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold"
            >
              View All Products <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-emerald-600 text-sm font-semibold uppercase tracking-wider font-body">Why Ab-Natural</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Our Promise to You</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-emerald-100 transition-colors duration-200">
                  <Icon size={24} className="text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm font-semibold uppercase tracking-wider font-body">Reviews</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">What Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-700 font-bold text-xs">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Videos */}
      <ProductVideos />

      {/* Instagram CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300">
            <Instagram size={28} className="text-white" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Follow Us on Instagram</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
            Get behind-the-scenes content, customer reviews, and exclusive updates. Tag us in your photos for a chance to be featured!
          </p>
          <a
            href="https://www.instagram.com/ab_naturals2506?igsh=MWxoMzMyd3l1Z2F0Zg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white font-bold px-8 py-4 rounded-full text-lg hover:opacity-90 active:scale-95 transition-all duration-150 shadow-xl"
          >
            <Instagram size={22} />
            @ab_naturals2506
          </a>
          <div className="flex justify-center gap-6 mt-8">
            {['Behind the Scenes', 'Customer Reviews', 'New Launches', 'Tips & Tricks'].map((tag) => (
              <span key={tag} className="text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <MessageCircle size={32} className="text-white" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Order Directly on WhatsApp</h2>
          <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
            No complicated checkout. Just message us your order and we will handle the rest. Fast, easy, and personal.
          </p>
          <a
            href="https://wa.me/923120258380?text=Assalamualaikum%2C%20I%20want%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-emerald-700 font-bold px-8 py-4 rounded-full text-lg hover:bg-emerald-50 active:scale-95 transition-all duration-150 shadow-xl"
          >
            <MessageCircle size={22} />
            Start Order on WhatsApp
          </a>
          <p className="text-emerald-200 text-sm mt-4">+92 312 0258380 &bull; Available 9am - 9pm</p>
        </div>
      </section>
    </div>
  );
}
