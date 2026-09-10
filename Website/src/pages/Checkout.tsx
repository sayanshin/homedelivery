import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customer_name: '',
    phone: '',
    address: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          total_amount: cartTotal,
          items: cart
        })
      });

      if (res.ok) {
        toast.success('Order placed successfully!');
        clearCart();
        navigate('/');
      } else {
        throw new Error('Failed to place order');
      }
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-serif font-bold text-bahari-brown mb-4">Your Cart is Empty</h2>
        <button onClick={() => navigate('/')} className="px-6 py-3 bg-bahari-red text-white rounded-full font-semibold">
          Return to Menu
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-4xl font-serif font-bold text-bahari-brown mb-8 text-center">Checkout</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-bahari-brown">Delivery Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-bahari-red focus:border-transparent outline-none"
                value={formData.customer_name}
                onChange={e => setFormData({...formData, customer_name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input 
                required
                type="tel" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-bahari-red focus:border-transparent outline-none"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
              <textarea 
                required
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-bahari-red focus:border-transparent outline-none"
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-bahari-red text-white rounded-xl font-bold text-lg hover:bg-bahari-red-dark transition-colors disabled:opacity-50 mt-6"
            >
              {loading ? 'Processing...' : `Place Order (₹${cartTotal})`}
            </button>
          </form>
        </div>

        <div className="bg-bahari-cream p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6 text-bahari-brown">Order Summary</h2>
          <div className="space-y-4 mb-6">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-bahari-brown">{item.quantity}x</span>
                  <span className="text-gray-700">{item.name}</span>
                </div>
                <span className="font-semibold text-bahari-brown">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-bahari-brown/10 pt-4 flex justify-between items-center text-xl font-bold text-bahari-brown">
            <span>Total</span>
            <span className="text-bahari-red">₹{cartTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
