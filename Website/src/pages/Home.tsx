import Hero from '../components/Hero';
import FeaturedDishes from '../components/FeaturedDishes';
import HowItWorks from '../components/HowItWorks';
import AboutUs from '../components/AboutUs';
import Reviews from '../components/Reviews';
import DeliveryAreas from '../components/DeliveryAreas';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <HowItWorks />
      <AboutUs />
      <Reviews />
      <DeliveryAreas />
    </>
  );
}
