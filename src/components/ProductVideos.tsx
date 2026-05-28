import { Play } from 'lucide-react';

const videos = [
  {
    url: 'https://vt.tiktok.com/ZSxHGV9LA/',
    title: 'Product Showcase',
    desc: 'See our natural products in action',
    image: '/body-wash.jpg',
  },
  {
    url: 'https://vt.tiktok.com/ZSxHGDAx1/',
    title: 'Customer Review',
    desc: 'Real results from real customers',
    image: '/nela-soap_(1).jpeg',
  },
  {
    url: 'https://vt.tiktok.com/ZSxHGD4Y7/',
    title: 'Behind the Scenes',
    desc: 'How we craft our herbal products',
    image: '/hair-harble-oil_(1).jpeg',
  },
];

export default function ProductVideos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-600 text-sm font-semibold uppercase tracking-wider font-body">Watch</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Product Videos</h2>
          <p className="text-gray-500 mt-2 max-w-md mx-auto">See the quality and care behind every product</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="video-card group block"
            >
              <div
                className="aspect-[9/16] rounded-2xl flex flex-col items-center justify-center p-8 relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url('${video.image}')` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-emerald-400 transition-all duration-300 z-10">
                  <Play size={24} className="text-white ml-1" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mt-5 z-10 drop-shadow-lg">
                  {video.title}
                </h3>
                <p className="text-white/80 text-sm mt-2 text-center leading-relaxed z-10 drop-shadow">
                  {video.desc}
                </p>
                <span className="mt-5 text-xs text-white font-medium bg-emerald-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full z-10 group-hover:bg-emerald-500 transition-all duration-200">
                  Watch on TikTok
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
