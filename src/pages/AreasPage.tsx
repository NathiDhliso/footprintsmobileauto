import { Helmet } from 'react-helmet-async';
import AreasSection from '../components/AreasSection';
import TrustBadges from '../components/TrustBadges';

export default function AreasPage() {
  return (
    <>
      <Helmet>
        <title>Areas We Cover | Footprints Mobile Auto Electrician</title>
        <meta name="description" content="We provide mobile auto electrical services across Johannesburg, Sandton, Midrand, Randburg, Roodepoort, Kempton Park, Fourways, and Edenvale." />
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
