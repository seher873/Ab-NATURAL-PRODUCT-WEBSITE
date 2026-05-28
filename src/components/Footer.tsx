import { Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { getImageUrl } from '../data/products';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full overflow-hidden shadow-md flex-shrink-0">
                <img src={getImageUrl('/Cards (1).jpeg')} alt="Ab-Natural" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Ab<span className="text-emerald-400">Natural</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Handcrafted herbal beauty products made with pure natural ingredients. We believe beauty should be chemical-free, gentle, and effective.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.instagram.com/ab_naturals2506?igsh=MWxoMzMyd3l1Z2F0Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com/abnatural.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/923120258380?text=Assalamualaikum%2C%20I%20want%20to%20know%20more%20about%20Ab-Natural%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {['home', 'shop', 'about', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNav(page)}
                    className="text-sm text-gray-400 hover:text-emerald-400 transition-colors capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-emerald-400 flex-shrink-0" />
                <a
                  href="https://wa.me/923120258380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  +92 3120258380
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">info@abnatural.pk</span>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <a
                  href="https://wa.me/923120258380?text=Assalamualaikum%2C%20I%20want%20to%20place%20an%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white text-sm px-4 py-2 rounded-full hover:bg-emerald-700 transition-all duration-200 shadow-sm"
                >
                  <MessageCircle size={15} />
                  WhatsApp Order
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Ab-Natural. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">Handcrafted with love in Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
