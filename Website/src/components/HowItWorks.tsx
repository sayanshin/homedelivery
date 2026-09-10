import { motion } from 'framer-motion';
import { Utensils, MousePointerClick, ChefHat, Bike } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { icon: <MousePointerClick size={32} />, title: 'Choose Food', desc: 'Browse our authentic menu and select your favorites.' },
    { icon: <Utensils size={32} />, title: 'Place Order', desc: 'Checkout securely and get ready for a feast.' },
    { icon: <ChefHat size={32} />, title: 'Fresh Cooking', desc: 'We prepare your meal fresh with traditional spices.' },
    { icon: <Bike size={32} />, title: 'Home Delivery', desc: 'Hot and fresh food delivered to your doorstep.' },
  ];

  return (
    <section className="py-24 bg-bahari-cream" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-bahari-red uppercase tracking-wider mb-2">Process</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-bahari-brown mb-4">How It Works</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-bahari-brown/10 -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-bahari-red mb-6 border-4 border-bahari-cream relative group">
                <div className="absolute inset-0 bg-bahari-red rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0" />
                <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-bahari-yellow text-bahari-brown font-bold rounded-full flex items-center justify-center text-xs">
                  {index + 1}
                </div>
              </div>
              <h4 className="text-xl font-bold text-bahari-brown mb-2">{step.title}</h4>
              <p className="text-bahari-brown-light text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
