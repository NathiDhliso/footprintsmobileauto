import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import TrustBadges from '../components/TrustBadges';
import ServicesSection from '../components/ServicesSection';
import AreasSection from '../components/AreasSection';
import Testimonials from '../components/Testimonials';
import AboutSection from '../components/AboutSection';

const BASE_URL = 'https://www.footprintsmobileauto.co.za';

export default function GautengLandingPage() {
  return (
    <>
      <Helmet>
        <title>Auto Electrician Gauteng | Fast Mobile Service | Footprints Auto</title>
        <meta name="description" content="Mobile auto electrician covering all of Gauteng. Fast on-site diagnostics, starter motors, alternators, and wiring repairs. We come to you anywhere in the Gauteng region." />
        <link rel="canonical" href={`${BASE_URL}/autoelectrician/gauteng`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Auto Electrician Gauteng | Fast Mobile Service | Footprints Auto" />
        <meta property="og:description" content="Mobile auto electrician covering all of Gauteng. Diagnostics, starter motors, and wiring repairs on-site." />
        <meta property="og:url" content={`${BASE_URL}/autoelectrician/gauteng`} />
        <meta property="og:image" content={`${BASE_URL}/logofp.png`} />
        <meta property="og:site_name" content="Footprints Mobile Auto" />
        <meta property="og:locale" content="en_ZA" />
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
