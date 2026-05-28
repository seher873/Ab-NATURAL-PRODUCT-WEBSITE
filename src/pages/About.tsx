import { Leaf, Heart, Shield, Sparkles, Award } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Leaf, title: '100% Natural', desc: 'Every ingredient we use comes from nature — no synthetic chemicals, no artificial fragrances.' },
    { icon: Heart, title: 'Made with Love', desc: 'Each product is handcrafted in small batches to ensure maximum quality and care.' },
    { icon: Shield, title: 'Safe & Tested', desc: 'All formulas are dermatologist-tested and safe for all skin types including sensitive skin.' },
    { icon: Award, title: 'Premium Quality', desc: 'We source only the finest natural ingredients to deliver results you can see and feel.' },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-600 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <Leaf size={28} className="text-white" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">Our Story</h1>
          <p className="text-emerald-100 text-lg leading-relaxed max-w-2xl mx-auto font-body">
            Born from a belief that nature holds the best beauty secrets, Ab-Natural was founded to bring pure, effective, and affordable herbal skincare to every home.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-600 text-sm font-semibold uppercase tracking-wider font-body">Our Mission</span>
              <h2 className="font-display text-3xl font-bold text-gray-900 mt-2 mb-5">Beauty That Respects Nature</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Ab-Natural, we believe that the most powerful skincare ingredients come straight from nature. Our journey began with a simple idea: create beauty products that work without harmful chemicals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every bar of soap, every bottle of shampoo, and every jar of cream is handmade using traditional herbal recipes combined with modern skincare knowledge. We use only premium, sustainably sourced ingredients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our products are designed for the people of Pakistan — addressing real skin concerns in our climate, using ingredients found locally, and priced to be accessible to everyone.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/6690898/pexels-photo-6690898.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Natural soap"
                className="rounded-2xl h-52 w-full object-cover shadow-md"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Natural cream"
                className="rounded-2xl h-52 w-full object-cover mt-6 shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-emerald-600 text-sm font-semibold uppercase tracking-wider font-body">What We Stand For</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients highlight */}
      <section className="py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <Sparkles size={32} className="text-emerald-200 mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">Pure Ingredients, Real Results</h2>
          <p className="text-emerald-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            We source neem, turmeric, saffron, argan oil, flaxseed, and many more powerful natural ingredients to create products that truly work.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Neem', 'Turmeric', 'Saffron', 'Argan Oil', 'Flaxseed', 'Kojic Acid', 'Shea Butter', 'Aloe Vera', 'Rose Water', 'Coconut Oil'].map((ing) => (
              <span key={ing} className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {ing}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
