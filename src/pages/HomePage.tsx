import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import TrustBadges from '../components/TrustBadges';
import ServicesSection from '../components/ServicesSection';
import AreasSection from '../components/AreasSection';
import Testimonials from '../components/Testimonials';
import AboutSection from '../components/AboutSection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Mobile Auto Electrician Johannesburg & Gauteng | Footprints Mobile Auto</title>
        <meta name="description" content="Expert mobile auto electrician serving Johannesburg, Sandton, Midrand, Randburg & Gauteng. Car diagnostics, battery replacement, starter motor repairs. We come to you across Gauteng!" />
      </Helmet>
      
      <HeroSection />
      <TrustBadges />
      <ServicesSection />
      <AreasSection />
      <Testimonials />
      <AboutSection />
    </>
  );
}
