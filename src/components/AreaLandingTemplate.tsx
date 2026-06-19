import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, MapPin, ChevronDown } from 'lucide-react';
import TrustBadges from './TrustBadges';
import ServicesSection from './ServicesSection';
import Testimonials from './Testimonials';

const BASE_URL = 'https://www.footprintsmobileauto.co.za';

interface AreaFAQ {
  question: string;
  answer: string;
}

interface AreaLandingProps {
  areaName: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle?: React.ReactNode;
  heroSubtitle: string;
  introText: string;
  suburbs: string[];
  mapEmbedUrl: string;
  faqs: AreaFAQ[];
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-mono-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-mono-50 transition-colors"
      >
        <span className="font-bold text-mono-950 tracking-tight">{question}</span>
        <ChevronDown className={`w-5 h-5 text-mono-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-mono-600 leading-relaxed text-base">{answer}</div>
        </div>
      </div>
    </div>
  );
}

export default function AreaLandingTemplate({
  areaName, slug, metaTitle, metaDescription, heroTitle, heroSubtitle,
  introText, suburbs, mapEmbedUrl, faqs,
}: AreaLandingProps) {
  const canonicalUrl = `${BASE_URL}/${slug}`;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Footprints Mobile Auto',
    description: `Mobile auto electrician serving ${areaName} and surrounding suburbs. On-site car electrical repairs and diagnostics.`,
    url: canonicalUrl,
    telephone: '+27683510676',
    image: `${BASE_URL}/logofp.png`,
    priceRange: '$$',
    areaServed: { '@type': 'City', name: areaName },
    address: { '@type': 'PostalAddress', addressLocality: 'Johannesburg', addressRegion: 'Gauteng', addressCountry: 'ZA' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${BASE_URL}/logofp.png`} />
        <meta property="og:site_name" content="Footprints Mobile Auto" />
        <meta property="og:locale" content="en_ZA" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-mono-950 pt-24 pb-16 md:pt-32 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 tracking-tighter">
            {heroTitle || <>Auto Electrician in {areaName}</>}
          </h1>
          <p className="text-lg md:text-xl text-mono-300 mb-8 max-w-2xl mx-auto">{heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27683510676" className="cta-glow tap-target inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-mono-950 text-lg font-bold py-4 px-8 rounded-xl transition-colors">
              <Phone className="w-5 h-5" /> Call Now - 068 351 0676
            </a>
            <a href="https://wa.me/27683510676" target="_blank" rel="noopener noreferrer" className="tap-target inline-flex items-center justify-center gap-3 bg-mono-900 hover:bg-mono-800 text-white font-bold text-lg py-4 px-8 rounded-xl border border-mono-700 transition-colors">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-mono-950 mb-6 tracking-tight">
            Mobile Auto Electrician Serving {areaName}
          </h2>
          <div className="text-mono-600 text-base leading-relaxed space-y-4">
            {introText.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs */}
      <section className="bg-mono-950 py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight text-center">
            Suburbs We Cover in {areaName}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {suburbs.map((s) => (
              <div key={s} className="bg-mono-900 rounded-xl p-4 flex items-center gap-3 border border-mono-800">
                <MapPin className="w-4 h-4 text-mono-300 flex-shrink-0" />
                <span className="text-mono-100 font-medium text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Map */}
      <section className="bg-mono-950 py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight text-center">
            Find Us Near {areaName}
          </h2>
          <div className="rounded-2xl overflow-hidden border border-mono-800 aspect-video">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Google Map showing ${areaName} service area`}
            />
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQs */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-mono-950 mb-8 tracking-tight text-center">
            Auto Electrician {areaName} — FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-mono-950 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            Car Trouble in {areaName}?
          </h2>
          <p className="text-mono-400 mb-8 text-lg">Our mobile auto electrician will come to you. Call now for fast on-site repairs.</p>
          <a href="tel:+27683510676" className="cta-glow tap-target inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-mono-950 text-lg font-bold py-4 px-8 rounded-xl transition-colors">
            <Phone className="w-5 h-5" /> Call Now - 068 351 0676
          </a>
        </div>
      </section>
    </>
  );
}
