import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import TrustBadges from '../components/TrustBadges';
import ServicesSection from '../components/ServicesSection';
import AreasSection from '../components/AreasSection';
import Testimonials from '../components/Testimonials';
import AboutSection from '../components/AboutSection';

export default function GautengLandingPage() {
  return (
    <>
      <Helmet>
        <title>Auto Electrician Gauteng | Fast Mobile Service | Footprints Auto</title>
        <meta name="description" content="Stuck in Gauteng? Our mobile auto electrician comes to you anywhere in the Gauteng area. Diagnostics, starter motors, and wiring repairs on-site." />
      </Helmet>
      
      <HeroSection 
        title={
          <>
            Car Won't Start in Gauteng?{' '}
            <span className="block text-mono-200 mt-1 md:mt-2 text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight">We Come To You.</span>
          </>
        }
        subtitle="Dedicated Mobile Auto Electrician for the Gauteng Region"
        badgeLocationText="across Gauteng"
      />
      <TrustBadges />
      <ServicesSection />
      <AreasSection />
      <Testimonials />
      <AboutSection />
    </>
  );
}
