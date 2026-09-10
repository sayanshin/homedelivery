import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Plus } from 'lucide-react';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
};

export default function FeaturedDishes() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch('/api/menu');
        if (res.ok) {
          const data = await res.json();
          setItems(data);
        }
      } catch (err) {
        console.error('Failed to fetch menu:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-white" id="menu">
        <div className="container mx-auto px-6 text-center">
          <div className="w-12 h-12 border-4 border-bahari-red border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white relative" id="menu">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-bahari-red uppercase tracking-wider mb-2">Our Menu</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-bahari-brown mb-4">Signature Bengali Dishes</h3>
          <p className="text-bahari-brown-light">Prepared with traditional spices and generations-old recipes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bahari-cream rounded-3xl p-6 relative group hover:shadow-2xl hover:shadow-bahari-red/10 transition-all duration-300 border border-bahari-brown/5"
            >
              <div className="h-48 relative flex justify-center items-center mb-6">
                <motion.img 
                  src={item.image_url} 
                  alt={item.name}
                  className="w-48 h-48 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ rotate: 5 }}
                />
              </div>
              
              <div className="text-center">
                <span className="text-xs font-bold text-bahari-yellow uppercase tracking-wider mb-2 block">{item.category}</span>
                <h4 className="text-xl font-serif font-bold text-bahari-brown mb-2">{item.name}</h4>
                <p className="text-sm text-bahari-brown-light mb-4 line-clamp-2 h-10">{item.description}</p>
                
                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-bold text-bahari-red">₹{item.price}</span>
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-10 h-10 rounded-full bg-bahari-brown text-white flex items-center justify-center hover:bg-bahari-red transition-colors shadow-lg"
                    aria-label="Add to cart"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
