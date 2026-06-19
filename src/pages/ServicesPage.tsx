import { Helmet } from 'react-helmet-async';
import ServicesSection from '../components/ServicesSection';
import TrustBadges from '../components/TrustBadges';

const BASE_URL = 'https://www.footprintsmobileauto.co.za';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Auto Electrical Services Johannesburg | Footprints Mobile Auto</title>
        <meta name="description" content="Professional mobile auto electrical services in Johannesburg & Gauteng. Diagnostics, starter motors, alternators, battery replacements, and wiring. We come to you." />
        <link rel="canonical" href={`${BASE_URL}/services`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Auto Electrical Services Johannesburg | Footprints Mobile Auto" />
        <meta property="og:description" content="Professional mobile auto electrical services. Diagnostics, starter motors, alternators, battery replacements, and wiring. We come to you." />
        <meta property="og:url" content={`${BASE_URL}/services`} />
        <meta property="og:image" content={`${BASE_URL}/logofp.png`} />
        <meta property="og:site_name" content="Footprints Mobile Auto" />
        <meta property="og:locale" content="en_ZA" />
      </Helmet>
      
      <div className="pt-24 pb-12 bg-mono-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our Auto Electrical Services
          </h1>
          <p className="text-mono-300 text-lg">
            Complete mobile diagnostics and repair for all vehicle brands across Johannesburg &amp; Gauteng.
          </p>
        </div>
      </div>
      
      <ServicesSection showHeading={false} />
      <TrustBadges />
    </>
  );
}
