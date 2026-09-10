import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

type Review = {
  id: number;
  customer_name: string;
  rating: number;
  comment: string;
};

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('/api/reviews');
        if (res.ok) {
          const data = await res.json();
          setReviews(data);
        }
      } catch (err) {
        console.error('Failed to fetch reviews:', err);
      }
    };
    fetchReviews();
  }, []);

  if (reviews.length === 0) return null;

  return (
    <section className="py-24 bg-bahari-brown text-bahari-cream" id="reviews">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-bahari-yellow uppercase tracking-wider mb-2">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Loved by Foodies</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel-dark p-8 rounded-3xl"
            >
              <div className="flex gap-1 mb-4 text-bahari-yellow">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg mb-6 italic text-gray-300">"{review.comment}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bahari-red rounded-full flex items-center justify-center font-bold text-white">
                  {review.customer_name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{review.customer_name}</div>
                  <div className="text-sm text-gray-400">Verified Buyer</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
