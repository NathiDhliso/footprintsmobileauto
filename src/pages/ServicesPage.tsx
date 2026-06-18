import { Helmet } from 'react-helmet-async';
import ServicesSection from '../components/ServicesSection';
import TrustBadges from '../components/TrustBadges';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Mobile Auto Electrician Johannesburg</title>
        <meta name="description" content="Professional mobile auto electrical services. Diagnostics, starter motors, alternators, battery replacements, and wiring. We come to you." />
      </Helmet>
      
      <div className="pt-24 pb-12 bg-mono-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our Auto Electrical Services
          </h1>
          <p className="text-mono-300 text-lg">
            Complete mobile diagnostics and repair for all vehicle brands.
          </p>
        </div>
      </div>
      
      <ServicesSection />
      <TrustBadges />
    </>
  );
}
