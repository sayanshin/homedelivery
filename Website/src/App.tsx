import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-bahari-cream text-bahari-brown font-sans selection:bg-bahari-red selection:text-white flex flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
          <Toaster position="bottom-center" toastOptions={{
            style: {
              background: '#3E2723',
              color: '#FFF8E7',
              borderRadius: '8px',
            }
          }} />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
