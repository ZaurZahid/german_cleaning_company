import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import Banner from '../src/components/Banner';
import Footer from '../src/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Banner />
      <Footer />
    </div>
  );
} 