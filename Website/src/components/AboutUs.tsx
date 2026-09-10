import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-bahari-red/5 rounded-3xl transform -rotate-3 scale-105" />
            <img 
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Cooking" 
              className="rounded-3xl relative z-10 shadow-2xl object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-2xl shadow-xl z-20 max-w-xs hidden md:block">
              <div className="text-4xl font-serif font-bold text-bahari-red mb-2">10+</div>
              <div className="text-sm font-bold text-bahari-brown">Years of authentic culinary heritage</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-bahari-red uppercase tracking-wider mb-2">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-bahari-brown mb-6">Bringing the Heart of Bengal to Your Table</h3>
            <p className="text-lg text-bahari-brown-light mb-6 leading-relaxed">
              At Bahari Ranna, we believe that food is not just nourishment, but a celebration of culture, memories, and love. Born from a passion for traditional Bengali cuisine, our kitchen brings you recipes passed down through generations.
            </p>
            <p className="text-lg text-bahari-brown-light mb-8 leading-relaxed">
              Every spice is hand-ground, every fish is carefully selected, and every meal is cooked with the same care and devotion as a mother cooking for her family. We don't just deliver food; we deliver a piece of home.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-bahari-yellow/20 flex items-center justify-center text-bahari-yellow font-bold text-xl">🌿</div>
                <span className="font-bold text-bahari-brown">Fresh Ingredients</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-bahari-red/10 flex items-center justify-center text-bahari-red font-bold text-xl">❤️</div>
                <span className="font-bold text-bahari-brown">Made with Love</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-bahari-brown/10 flex items-center justify-center text-bahari-brown font-bold text-xl">👩‍🍳</div>
                <span className="font-bold text-bahari-brown">Expert Chefs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">✨</div>
                <span className="font-bold text-bahari-brown">100% Hygienic</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
