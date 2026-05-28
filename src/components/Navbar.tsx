import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Search } from 'lucide-react';
import { getImageUrl } from '../data/products';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, query?: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navSearch, setNavSearch] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (navSearch.trim()) {
      onNavigate('shop', navSearch.trim());
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden shadow-md flex-shrink-0">
              <img src={getImageUrl('/logo.jpeg')} alt="Ab-Natural" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold text-xl text-gray-800 tracking-tight">
              Ab<span className="text-emerald-600">Natural</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === link.id
                    ? 'text-emerald-600 border-b-2 border-emerald-600 pb-0.5'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={navSearch}
                onChange={(e) => setNavSearch(e.target.value)}
                className="w-40 lg:w-48 pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent focus:bg-white transition-all"
              />
            </form>
            <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
              <a
                href="https://www.instagram.com/ab_naturals2506?igsh=MWxoMzMyd3l1Z2F0Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-pink-500 hover:bg-pink-50 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com/abnatural.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
            <a
              href="https://wa.me/923120258380?text=Assalamualaikum%2C%20I%20want%20to%20know%20more%20about%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-emerald-700 transition-all duration-200 shadow-sm hover:shadow-emerald-200 hover:shadow-md"
            >
              Order Now
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-gray-100">
          <div className="px-4 py-3 space-y-1">
            <form onSubmit={handleSearchSubmit} className="relative pb-2">
              <Search size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={navSearch}
                onChange={(e) => setNavSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
              />
            </form>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === link.id
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-3 px-3 py-2">
              <a
                href="https://www.instagram.com/ab_naturals2506?igsh=MWxoMzMyd3l1Z2F0Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/abnatural.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
            <a
              href="https://wa.me/923120258380?text=Assalamualaikum%2C%20I%20want%20to%20know%20more%20about%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-emerald-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors mt-2"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
