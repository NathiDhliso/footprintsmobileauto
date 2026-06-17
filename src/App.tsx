import StickyCallBar from './components/StickyCallBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustBadges from './components/TrustBadges';
import ServicesSection from './components/ServicesSection';
import AreasSection from './components/AreasSection';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <StickyCallBar />
      <Header />

      <main className="flex-1">
        <HeroSection />
        <TrustBadges />
        <ServicesSection />
        <AreasSection />
        <Testimonials />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
