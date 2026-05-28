import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import { Product } from './data/products';

type Page = 'home' | 'shop' | 'about' | 'contact' | 'product' | 'checkout';

function App() {
  const [page, setPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavigate = (target: string, query?: string) => {
    setPage(target as Page);
    if (query !== undefined) {
      setSearchQuery(query);
    }
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product);
    setPage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setPage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromCheckout = () => {
    if (selectedProduct) {
      setPage('product');
    } else {
      setPage('shop');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={page} onNavigate={handleNavigate} />

      <main className="flex-1">
        {page === 'home' && (
          <Home onNavigate={handleNavigate} onViewProduct={handleViewProduct} onBuyNow={handleBuyNow} />
        )}
        {page === 'shop' && (
          <Shop onViewProduct={handleViewProduct} onBuyNow={handleBuyNow} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        )}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
        {page === 'product' && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onBack={handleBack}
            onNavigate={handleNavigate}
            onBuyNow={handleBuyNow}
          />
        )}
        {page === 'checkout' && selectedProduct && (
          <Checkout
            product={selectedProduct}
            onBack={handleBackFromCheckout}
          />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
