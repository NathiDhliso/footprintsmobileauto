import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import TrustBadges from '../components/TrustBadges';
import ServicesSection from '../components/ServicesSection';
import AreasSection from '../components/AreasSection';
import Testimonials from '../components/Testimonials';
import AboutSection from '../components/AboutSection';

const BASE_URL = 'https://www.footprintsmobileauto.co.za';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Mobile Auto Electrician Johannesburg &amp; Gauteng | Footprints Mobile Auto</title>
        <meta name="description" content="Expert mobile auto electrician serving Johannesburg, Sandton, Midrand, Randburg & Gauteng. Car diagnostics, battery replacement, starter motor repairs. We come to you across Gauteng!" />
        <link rel="canonical" href={`${BASE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mobile Auto Electrician Johannesburg & Gauteng | Footprints Mobile Auto" />
        <meta property="og:description" content="Expert mobile auto electrician serving Johannesburg, Sandton, Midrand, Randburg & Gauteng. We come to you!" />
        <meta property="og:url" content={`${BASE_URL}/`} />
        <meta property="og:image" content={`${BASE_URL}/logofp.png`} />
        <meta property="og:site_name" content="Footprints Mobile Auto" />
        <meta property="og:locale" content="en_ZA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile Auto Electrician Johannesburg & Gauteng | Footprints Mobile Auto" />
        <meta name="twitter:description" content="Expert mobile auto electrician serving Johannesburg, Sandton, Midrand, Randburg & Gauteng. We come to you!" />
        <meta name="twitter:image" content={`${BASE_URL}/logofp.png`} />
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
