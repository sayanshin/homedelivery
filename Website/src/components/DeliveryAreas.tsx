import { MapPin } from 'lucide-react';

export default function DeliveryAreas() {
  const areas = ['Kolkata', 'Salt Lake', 'New Town', 'Dum Dum', 'Barasat', 'Howrah'];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="bg-bahari-cream rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-bahari-yellow/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-bahari-red/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <MapPin size={48} className="text-bahari-red mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-bahari-brown mb-6">
              We Deliver Across the City
            </h3>
            <p className="text-lg text-bahari-brown-light mb-10">
              Enjoy hot, fresh Bengali meals delivered right to your doorstep. Check if we deliver to your area.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {areas.map(area => (
                <div key={area} className="px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100 font-bold text-bahari-brown flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
