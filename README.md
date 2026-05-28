# Ab-Natural — Premium Herbal Beauty Products

Handcrafted herbal skincare and haircare products made with pure natural ingredients. A production-ready luxury herbal beauty brand website.

## Features

- **Product Catalog** — 18+ herbal beauty products with categories (Soaps, Face Wash, Shampoo, Creams, Body Wash, Wax, etc.)
- **WhatsApp Ordering** — Direct order via WhatsApp with pre-filled product details
- **JazzCash Manual Payment** — Buy Now flow with copy-to-clipboard JazzCash number and WhatsApp payment confirmation
- **Product Videos** — TikTok video showcase cards with product images
- **Social Media Integration** — Instagram (@ab_naturals2506), Facebook (abnatural.pk), WhatsApp
- **Floating WhatsApp Button** — Always-accessible quick order button
- **Luxury UI** — Glass morphism cards, Playfair Display + Inter fonts, green/cream theme, smooth animations
- **Responsive Design** — Mobile-first, works on all devices
- **Image Optimization** — Lazy loading, WebP/JPEG, local images from public folder

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Fonts:** Playfair Display (headings), Inter (body) — Google Fonts

## Project Structure

```
project/
├── public/              # Static assets (product images)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.tsx        # Navigation with social links
│   │   ├── Footer.tsx        # Footer with links & social
│   │   ├── FloatingWhatsApp.tsx  # Floating WhatsApp button
│   │   ├── ProductCard.tsx   # Product card with Buy Now + Order
│   │   └── ProductVideos.tsx # TikTok video showcase cards
│   ├── data/
│   │   └── products.ts       # Product data & WhatsApp helper
│   ├── pages/
│   │   ├── Home.tsx          # Hero, categories, products, videos
│   │   ├── Shop.tsx          # Product listing with filters
│   │   ├── About.tsx         # Brand story & values
│   │   ├── Contact.tsx       # Contact info & social links
│   │   ├── ProductDetail.tsx # Product detail with payment options
│   │   └── Checkout.tsx      # JazzCash manual payment page
│   ├── App.tsx               # SPA routing
│   ├── index.css             # Tailwind + custom styles
│   └── main.tsx              # Entry point
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Social Media

- **Instagram:** [@ab_naturals2506](https://www.instagram.com/ab_naturals2506?igsh=MWxoMzMyd3l1Z2F0Zg==)
- **Facebook:** [abnatural.pk](https://facebook.com/abnatural.pk)
- **WhatsApp:** [Chat on WhatsApp](https://wa.me/923120258380)

## Payment System (Manual JazzCash)

1. User clicks **"Buy Now"** on any product
2. Checkout page shows product summary + JazzCash payment details
3. User copies JazzCash number and sends payment
4. User clicks **"I Have Paid — Confirm Order"** to send WhatsApp confirmation
5. Order confirmed manually by Ab-Natural

## WhatsApp Ordering

Every product has an **"Order"** button that opens WhatsApp with a pre-filled message:
```
Assalamualaikum, I want to order {product name}
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment (Netlify)

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Auto-deploys on every push

## WhatsApp Number

+92 312 0258380 — Available 9am - 9pm

## License

All rights reserved — Ab-Natural
