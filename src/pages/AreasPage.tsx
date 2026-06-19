import { Helmet } from 'react-helmet-async';
import AreasSection from '../components/AreasSection';
import TrustBadges from '../components/TrustBadges';

const BASE_URL = 'https://www.footprintsmobileauto.co.za';

export default function AreasPage() {
  return (
    <>
      <Helmet>
        <title>Areas We Cover | Footprints Mobile Auto Electrician</title>
        <meta name="description" content="Mobile auto electrician covering Johannesburg, Sandton, Midrand, Randburg, Roodepoort, Kempton Park, Fourways, and Edenvale. Fast on-site response across Gauteng." />
        <link rel="canonical" href={`${BASE_URL}/areas`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Areas We Cover | Footprints Mobile Auto Electrician" />
        <meta property="og:description" content="Mobile auto electrician covering Johannesburg, Sandton, Midrand, Randburg, Roodepoort, and more across Gauteng." />
        <meta property="og:url" content={`${BASE_URL}/areas`} />
        <meta property="og:image" content={`${BASE_URL}/logofp.png`} />
        <meta property="og:site_name" content="Footprints Mobile Auto" />
        <meta property="og:locale" content="en_ZA" />
      </Helmet>
      
      <div className="pt-24 pb-12 bg-mono-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Areas We Cover
          </h1>
          <p className="text-mono-300 text-lg">
            Fast, on-site response anywhere in Johannesburg &amp; Gauteng.
          </p>
        </div>
      </div>
      
      <AreasSection />
      <TrustBadges />
    </>
  );
}
