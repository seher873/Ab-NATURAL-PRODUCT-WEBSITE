import { MessageCircle } from 'lucide-react';

const whatsappUrl = 'https://wa.me/923120258380?text=' + encodeURIComponent('Assalamualaikum, I want to place an order');

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-200 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-white" />
      <span className="absolute right-16 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
        Order on WhatsApp
      </span>
      <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </a>
  );
}
