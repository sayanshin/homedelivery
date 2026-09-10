import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" id="home">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bahari-yellow/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-bahari-red/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#3E2723 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-bahari-red/10 text-bahari-red font-semibold mb-6 border border-bahari-red/20"
            >
              Authentic Bengali Flavors
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-bahari-brown leading-tight mb-6">
              Taste the <span className="text-bahari-red">Soul</span> of Bengal at Home
            </h1>
            <p className="text-lg md:text-xl text-bahari-brown-light mb-8 font-sans">
              Freshly Cooked Authentic Bengali Meals Delivered Daily to Your Doorstep. Experience the warmth of home-cooked luxury.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="px-8 py-4 bg-bahari-red text-white rounded-full font-semibold hover:bg-bahari-red-dark transition-all transform hover:scale-105 shadow-lg shadow-bahari-red/30">
                Order Now
              </a>
              <a href="#about" className="px-8 py-4 bg-white text-bahari-brown border border-bahari-brown/10 rounded-full font-semibold hover:bg-bahari-cream transition-all hover:shadow-md">
                Our Story
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium">
                <span className="text-bahari-red font-bold">4.9/5</span> from 2,000+ happy foodies
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[700px] flex justify-center items-center"
          >
            {/* Glowing orb behind thali */}
            <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-bahari-yellow/30 rounded-full blur-[60px]" />
            
            <motion.img 
              src="/images/thali.png" 
              alt="Bengali Thali"
              className="relative z-10 w-full max-w-[600px] drop-shadow-2xl"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut"
              }}
            />

            {/* Floating elements */}
            <motion.div 
              className="absolute top-[20%] right-[10%] glass-panel px-4 py-2 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            >
              <span className="text-2xl">🔥</span>
              <div>
                <div className="text-xs text-bahari-brown-light font-bold">Hot & Fresh</div>
                <div className="text-sm font-semibold">Cooked to order</div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-[20%] left-[5%] glass-panel px-4 py-2 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 2 }}
            >
              <span className="text-2xl">🛵</span>
              <div>
                <div className="text-xs text-bahari-brown-light font-bold">Fast Delivery</div>
                <div className="text-sm font-semibold">Under 45 mins</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
