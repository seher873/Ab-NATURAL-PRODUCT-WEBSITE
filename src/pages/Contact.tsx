import { Phone, Mail, MessageCircle, Instagram, Facebook, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  const whatsappUrl = 'https://wa.me/923120258380?text=' + encodeURIComponent('Assalamualaikum, I want to get in touch with Ab-Natural');

  return (
    <div className="pt-16 min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">Get in Touch</h1>
          <p className="text-gray-500 mt-2 max-w-md mx-auto font-body">
            Have a question or want to place a custom order? We would love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-100 transition-all duration-200">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Phone / WhatsApp</p>
                    <a
                      href="https://wa.me/923120258380"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      +92 312 0258380
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-100 transition-all duration-200">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Email</p>
                    <span className="text-gray-600">info@abnatural.pk</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-100 transition-all duration-200">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Business Hours</p>
                    <p className="text-gray-600 text-sm">Monday - Saturday: 9am - 9pm</p>
                    <p className="text-gray-600 text-sm">Sunday: 10am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-100 transition-all duration-200">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Location</p>
                    <p className="text-gray-600 text-sm">Pakistan — Nationwide Delivery Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/ab_naturals2506?igsh=MWxoMzMyd3l1Z2F0Zg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-4 py-2.5 text-sm font-medium text-gray-700 hover:border-pink-400 hover:text-pink-600 hover:shadow-sm transition-all duration-200"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
                <a
                  href="https://facebook.com/abnatural.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-4 py-2.5 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-sm transition-all duration-200"
                >
                  <Facebook size={16} />
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA Card */}
          <div className="flex flex-col gap-6">
            {/* Primary WhatsApp CTA */}
            <div className="bg-emerald-600 rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
              </div>
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
                  <MessageCircle size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Order via WhatsApp</h3>
                <p className="text-emerald-100 text-sm leading-relaxed mb-6">
                  The fastest way to order is through WhatsApp. Send us a message and we will respond within minutes.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white text-emerald-700 font-bold px-7 py-3.5 rounded-full hover:bg-emerald-50 active:scale-95 transition-all duration-150 shadow-lg w-full justify-center"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
                <p className="text-emerald-200 text-xs mt-3">+92 312 0258380</p>
              </div>
            </div>

            {/* Quick order buttons */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Quick Order Links</h3>
              <div className="space-y-3">
                {[
                  { label: 'Order Soaps', msg: 'I want to order herbal soaps' },
                  { label: 'Order Face Wash', msg: 'I want to order face wash' },
                  { label: 'Order Shampoo', msg: 'I want to order shampoo' },
                  { label: 'Ask About Custom Orders', msg: 'I want to ask about custom orders' },
                ].map(({ label, msg }) => (
                  <a
                    key={label}
                    href={`https://wa.me/923120258380?text=${encodeURIComponent(`Assalamualaikum, ${msg}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-3.5 rounded-xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 group"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-700">{label}</span>
                    <MessageCircle size={15} className="text-gray-400 group-hover:text-emerald-600 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
