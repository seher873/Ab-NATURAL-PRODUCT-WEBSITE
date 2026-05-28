export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  ingredients?: string[];
  benefits?: string[];
  usage?: string;
  badge?: string;
  quantity?: string;
}

export const WHATSAPP_NUMBER = '923120258380';

export function getImageUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.replace(/\/$/, '');
  const encodedPath = path.replace(/ /g, '%20').replace(/\(/g, '%28').replace(/\)/g, '%29');
  return `${cleanBase}${encodedPath}`;
}

export function getImageUrlEncoded(path: string): string {
  return getImageUrl(path);
}

export const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'soap', label: 'Soaps' },
  { id: 'face-wash', label: 'Face Wash' },
  { id: 'shampoo', label: 'Shampoo' },
  { id: 'cream', label: 'Creams' },
  { id: 'body-wash', label: 'Body Wash' },
  { id: 'wax', label: 'Wax' },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Neem Herbal Soap',
    price: 500,
    category: 'soap',
    image: '/NEEM_SOAP_(1).jpeg',
    description: 'Pure herbal neem soap crafted with fresh neem leaves. Deeply cleanses, fights bacteria, and leaves skin refreshed and glowing.',
    ingredients: ['Neem Extract', 'Coconut Oil', 'Shea Butter', 'Vitamin E', 'Natural Glycerin'],
    benefits: ['Fights acne and bacteria', 'Deep skin cleansing', 'Natural antibacterial', 'Reduces skin inflammation'],
    usage: 'Wet skin, lather soap, massage gently for 30 seconds, rinse with clean water. Use twice daily.',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Hand & Feet Cream',
    price: 500,
    category: 'cream',
    image: '/hnd-feet-cream_(1).jpeg',
    description: 'Rich herbal cream that deeply moisturizes and softens hands and feet. Ideal for dry and cracked skin.',
    ingredients: ['Shea Butter', 'Aloe Vera', 'Vitamin E', 'Rose Water', 'Coconut Oil'],
    benefits: ['Deep moisturizing', 'Softens dry skin', 'Heals cracks', 'Long-lasting hydration'],
    usage: 'Apply a generous amount to clean hands and feet. Massage gently until absorbed. Use daily before sleep.',
    badge: 'New',
      quantity: '50ml',
  },
  {
    id: 3,
    name: 'Kojic Brightening Soap',
    price: 500,
    category: 'soap',
    image: '/kojic-soap_(1).jpeg',
    description: 'Premium kojic acid soap that fades dark spots and brightens skin tone naturally. Achieve radiant even skin.',
    ingredients: ['Kojic Acid', 'Papaya Extract', 'Vitamin C', 'Glycerin', 'Turmeric'],
    benefits: ['Fades dark spots', 'Brightens skin tone', 'Reduces hyperpigmentation', 'Even skin complexion'],
    usage: 'Use on damp skin, lather and leave for 1 minute before rinsing. Use once daily. Always follow with moisturizer.',
    badge: 'Popular',
     
  },
  {
    id: 4,
    name: 'Coffee Exfoliating Soap',
    price: 500,
    category: 'soap',
    image: '/cofee-soap.jpeg',
    description: 'Natural coffee soap with gentle exfoliating properties. Removes dead skin, boosts circulation, and reveals smoother skin.',
    ingredients: ['Coffee Grounds', 'Cocoa Butter', 'Coconut Oil', 'Vanilla Extract', 'Olive Oil'],
    benefits: ['Gentle exfoliation', 'Removes dead skin', 'Boosts skin circulation', 'Antioxidant rich'],
    usage: 'Apply in circular motions on wet skin. The coffee grounds gently exfoliate as you wash. Rinse thoroughly.',
      
  },
      
  {
    id: 5,
    name: 'Rice Glow Soap',
    price: 500,
    category: 'soap',
    image: '/RICE_SOAP_(1).jpeg',
    description: 'Traditional rice water soap for brightening and softening skin. Inspired by Asian beauty secrets for glowing skin.',
    ingredients: ['Rice Extract', 'Rice Bran Oil', 'Milk Protein', 'Aloe Vera', 'Hyaluronic Acid'],
    benefits: ['Skin brightening', 'Deep hydration', 'Soft smooth skin', 'Natural glow'],
    usage: 'Use morning and evening on wet skin. Lather well and rinse with lukewarm water for best results.',
    badge: 'New',
      
  },
  {
    id: 6,
    name: 'Moroccan Nela Soap',
    price: 500,
    category: 'soap',
    image: '/nela-soap_(1).jpeg',
    description: 'Luxurious Moroccan-inspired herbal soap with traditional ingredients for deep cleansing and nourishment.',
    ingredients: ['Argan Oil', 'Black Seed', 'Rhassoul Clay', 'Rose Water', 'Lavender'],
    benefits: ['Deep cleansing', 'Rich nourishment', 'Moroccan beauty ritual', 'Skin softening'],
    usage: 'Apply on wet skin, create rich lather, massage for 1 minute and rinse with warm water.',
      
  },
     
  {
    id: 7,
    name: 'Moroccan Nela Face Wash',
    price: 500,
    category: 'face-wash',
    image: '/morocan-nela-face-wash_(1).jpeg',
    description: 'Gentle Moroccan-inspired face wash that cleanses pores deeply while keeping skin balanced and hydrated.',
    ingredients: ['Argan Oil', 'Rose Hip Extract', 'Aloe Vera', 'Chamomile', 'Green Tea'],
    benefits: ['Deep pore cleansing', 'Balances skin pH', 'Gentle on sensitive skin', 'Hydrating formula'],
    usage: 'Apply a small amount to wet face, massage gently in circular motions for 60 seconds, rinse with cool water. Use twice daily.',
    badge: 'Best Seller',
      quantity: '100ml',
  },
  {
    id: 8,
    name: 'Ubtan Face Wash',
    price: 500,
    category: 'face-wash',
    image: '/UBTAN_FACE_WASH_(1).jpeg',
    description: 'Traditional Ubtan face wash with turmeric, sandalwood, and herbal extracts for naturally glowing skin.',
    ingredients: ['Turmeric', 'Sandalwood', 'Chickpea Flour', 'Rose Petals', 'Saffron'],
    benefits: ['Natural skin brightening', 'Traditional Ubtan formula', 'Removes tan', 'Glowing complexion'],
    usage: 'Take a small amount, add few drops of water to make paste, apply on face, massage gently and wash off.',
     quantity: '100ml',
  },
      
  {
    id: 9,
    name: 'Ubtan Herbal Soap',
    price: 500,
    category: 'soap',
    image: '/ubtan_soap_(1).jpeg',
    description: 'Authentic Ubtan soap enriched with turmeric, saffron, and traditional herbs for radiant and flawless skin.',
    ingredients: ['Turmeric', 'Saffron', 'Sandalwood Powder', 'Chickpea', 'Rose Oil'],
    benefits: ['Removes tan', 'Brightens complexion', 'Traditional beauty formula', 'Anti-inflammatory'],
    usage: 'Use on wet skin, create lather and leave for 2 minutes for maximum Ubtan benefits, then rinse.',
    badge: 'Popular',
      quantity: '100ml',
  },
  {
    id: 10,
    name: 'Flaxseed Hair Shampoo',
    price: 500,
    category: 'shampoo',
    image: '/shampoo-fles-seed_.jpeg',
    description: 'Nourishing flaxseed shampoo (100ml) that strengthens hair from roots, reduces breakage, and adds natural shine.',
    ingredients: ['Flaxseed Extract', 'Castor Oil', 'Keratin', 'Biotin', 'Argan Oil'],
    benefits: ['Strengthens hair roots', 'Reduces hair fall', 'Adds natural shine', 'Deeply nourishing'],
    usage: 'Apply to wet hair, massage gently into scalp for 2-3 minutes, rinse thoroughly. For best results, use 3 times weekly.',
    badge: 'New',
      quantity: '100ml',
  },
  {
    id: 11,
    name: 'Rosemary Hair Spray',
    price: 500,
    category: 'spray',
    image: '/rose_marry_hairSPRY_(1).jpeg',
    description: 'Natural rosemary hair spray for dandruff control, hair growth, and silky shiny hair. Safe for daily use and non-washable formula.',
    ingredients: ['Rosemary Extract', 'Herbal Oils', 'Aloe Vera', 'Vitamin E', 'Natural Glycerin'],
    benefits: ['Controls dandruff', 'Promotes hair growth', 'Silky shiny hair', 'Safe for daily use'],
    usage: 'Spray evenly on hair and roots. No need to wash. Use daily for best results.',
     quantity: '100ml',
  },
    
  {
    id: 12,
    name: 'Shape Up Hair Serum',
    price: 500,
    category: 'serum',
    image: '/SHAP_UP_HAIR_SERUM_(1).jpeg',
    description: 'Premium hair serum with 100% organic ingredients to increase size naturally. Perfect for natural hair enhancement.',
    ingredients: ['Organic Plant Extracts', 'Argan Oil', 'Coconut Oil', 'Vitamin E', 'Herbal Oils'],
    benefits: ['Increase size naturally', '100% organic ingredients', 'Promotes hair health', 'Natural enhancement'],
    usage: 'Apply to damp hair and roots. Massage gently and leave for 20 minutes before washing.',
     quantity: '100ml',
  },
      
   {
    id: 14,
    name: 'face blush Tint',
    price: 350, 
  
    category: 'face-blush',
    image: '/blush-tient.jpeg',
    description: 'Natural face blush tint with herbal ingredients for a healthy rosy glow. Perfect for all skin types.',
    ingredients: ['Beetroot Extract', 'Rose Petals', 'Aloe Vera', 'Vitamin E', 'Natural Oils'],
    benefits: ['Natural rosy glow', 'Herbal ingredients', 'Suitable for all skin types', 'Long-lasting color'],
      quantity: '5ml',
      usage: 'Apply a small amount to cheeks and blend for a natural flush. Use daily for best results.',
  },
  {
    id: 15,
    name: 'Hair oil',
    price: 600,
    category: 'hair-oil',
    quantity: '100ml',
    image: '/hair-harble-oil_(1).jpeg',
    description: 'Natural hair oil with essential oils for deep conditioning and nourishment.',
    ingredients: ['Coconut Oil', 'Olive Oil', 'Argan Oil', 'Vitamin E', 'Herbal Extracts'],
    benefits: ['Deep conditioning', 'Nourishes hair', 'Improves hair health', 'Natural ingredients'],
    usage: 'Apply to damp hair and scalp, leave for 20 minutes, then wash off.',
  },
  {
     id: 16,
     name: 'Kojic Brightening Hand & Body Wash',
     price: 500,
     category: 'hand-body-wash',
     image: '/body-wash.jpg',
     description: 'Premium kojic acid body wash that fades dark spots and brightens skin tone naturally. Achieve radiant even skin.',
     ingredients: ['Kojic Acid', 'Papaya Extract', 'Vitamin C', 'Glycerin', 'Turmeric'],
     benefits: ['Fades dark spots', 'Brightens skin tone', 'Reduces hyperpigmentation', 'Even skin complexion'],
     usage: 'Use on damp skin, lather and leave for 1 minute before rinsing. Use once daily. Always follow with moisturizer.',
     badge: 'Popular',
      
   },
   {
     id: 17,
     name: 'Finger Wax',
     price: 250,
     category: 'wax',
     image: '/fingr-wax.jpeg',
     description: 'Natural herbal finger wax for gentle hair removal. Soft, easy to apply, and leaves skin smooth.',
     ingredients: ['Natural Wax', 'Herbal Extracts', 'Aloe Vera', 'Vitamin E', 'Essential Oils'],
     benefits: ['Gentle hair removal', 'Soft on skin', 'Natural ingredients', 'Smooth results'],
     usage: 'Warm slightly, apply on skin in direction of hair growth, place cloth strip and pull against hair growth.',
     quantity: '30g',
   },
   {
     id: 18,
     name: 'Nela Moroccan Body Wash',
     price: 500,
     category: 'body-wash',
     image: '/nela-body-wash.jpeg',
     description: 'Luxurious Moroccan-inspired body wash with natural ingredients for deep cleansing and nourishment.',
     ingredients: ['Argan Oil', 'Black Seed Extract', 'Rhassoul Clay', 'Rose Water', 'Essential Oils'],
     benefits: ['Deep cleansing', 'Nourishing formula', 'Moroccan beauty ritual', 'Soft glowing skin'],
     usage: 'Apply to wet skin, lather well, massage gently and rinse thoroughly. Use daily.',
     quantity: '100ml',
     badge: 'New',
   },
];


export function getWhatsAppUrl(productName: string): string {
  const message = `Assalamualaikum, I want to order ${productName}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
