import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, ChevronDown, CheckCircle2, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import TrustBadges from './TrustBadges';
import AreasSection from './AreasSection';

interface WhatWeDoItem {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceLandingProps {
  serviceName: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  introText: string;
  whatWeDoItems: WhatWeDoItem[];
  signsYouNeedService: string[];
  faqs: FAQ[];
}

function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-mono-200 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left gap-4"
            aria-expanded={openIndex === index}
          >
            <span className="font-display text-lg font-bold text-mono-950 tracking-tight">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-mono-400 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <p className="px-6 pb-6 text-mono-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ServiceLandingTemplate({
  serviceName,
  slug,
  metaTitle,
  metaDescription,
  heroTitle,
  heroSubtitle,
  introText,
  whatWeDoItems,
  signsYouNeedService,
  faqs,
}: ServiceLandingProps) {
  const introRef = useScrollAnimation<HTMLElement>();
  const whatWeDoRef = useScrollAnimation<HTMLElement>();
  const signsRef = useScrollAnimation<HTMLElement>();
  const faqRef = useScrollAnimation<HTMLElement>();
  const ctaRef = useScrollAnimation<HTMLElement>();

  const canonicalUrl = `https://www.footprintsmobileauto.co.za/${slug}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: metaDescription,
    provider: {
      '@type': 'AutoRepair',
      name: 'Footprints Mobile Auto',
      telephone: '+27683510676',
      email: 'footprintsmobileauto@gmail.com',
      url: 'https://www.footprintsmobileauto.co.za',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '57 Regent St',
        addressLocality: 'Yeoville',
        addressRegion: 'Gauteng',
        postalCode: '2198',
        addressCountry: 'ZA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -26.1796,
        longitude: 28.0697,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:30',
        closes: '18:00',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Johannesburg',
    },
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Footprints Mobile Auto" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-mono-950">
        <img
          src="/herofp.png"
          alt={`${serviceName} in Johannesburg - Footprints Mobile Auto`}
          className="absolute inset-0 w-full h-full object-cover img-mono"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mono-950/90 via-mono-950/80 to-mono-950/95" />

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center py-10 px-6 md:py-20 flex flex-col items-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-3 md:mb-4 tracking-tighter">
            {heroTitle}
          </h1>
          <p className="text-lg md:text-2xl text-mono-300 font-medium mb-8 md:mb-10 max-w-2xl mx-auto tracking-wide">
            {heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto sm:max-w-none">
            <a
              href="tel:+27683510676"
              className="cta-glow tap-target w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-mono-950 text-lg md:text-xl font-bold py-4 px-8 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/27683510676"
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-mono-900 hover:bg-mono-800 text-white font-bold text-lg md:text-xl py-4 px-8 rounded-xl border border-mono-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <TrustBadges />

      {/* ── Service Introduction ── */}
      <section
        ref={introRef.ref}
        className={`bg-white py-16 md:py-24 px-6 fade-in-section ${introRef.isVisible ? 'is-visible' : ''}`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-mono-950 mb-8 tracking-tight text-center">
            About Our {serviceName}
          </h2>
          <div className="text-mono-600 text-lg leading-relaxed space-y-6 whitespace-pre-line">
            {introText}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section
        ref={whatWeDoRef.ref}
        className={`bg-mono-50 py-16 md:py-24 px-6 fade-in-section ${whatWeDoRef.isVisible ? 'is-visible' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-mono-950 mb-4 tracking-tight">
              What's Included
            </h2>
            <p className="text-mono-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Here's exactly what you get when you book our {serviceName.toLowerCase()} service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeDoItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-mono-200 hover:border-mono-400 transition-colors flex flex-col group"
              >
                <div className="w-12 h-12 rounded-full bg-mono-50 border border-mono-200 flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6 text-mono-950" />
                </div>
                <h3 className="font-display text-xl font-bold text-mono-950 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-mono-600 text-base leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Signs You Need This Service ── */}
      <section
        ref={signsRef.ref}
        className={`bg-mono-950 py-16 md:py-24 px-6 fade-in-section ${signsRef.isVisible ? 'is-visible' : ''}`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight text-center">
            Signs You Need {serviceName}
          </h2>
          <p className="text-mono-400 text-lg text-center mb-12 leading-relaxed">
            If you're experiencing any of these, give us a call — we can usually sort it out the same day.
          </p>
          <div className="space-y-4">
            {signsYouNeedService.map((sign, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-mono-900 rounded-xl p-5 border border-mono-800"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-mono-100 text-base leading-relaxed">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas We Cover ── */}
      <AreasSection />

      {/* ── FAQ Section ── */}
      <section
        ref={faqRef.ref}
        className={`bg-mono-50 py-16 md:py-24 px-6 fade-in-section ${faqRef.isVisible ? 'is-visible' : ''}`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-mono-950 mb-4 tracking-tight text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-mono-600 text-lg text-center mb-12 leading-relaxed">
            Common questions about our {serviceName.toLowerCase()} service in Johannesburg.
          </p>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── Bottom CTA Banner ── */}
      <section
        ref={ctaRef.ref}
        className={`bg-mono-950 py-16 md:py-24 px-6 fade-in-section ${ctaRef.isVisible ? 'is-visible' : ''}`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Need {serviceName}?
          </h2>
          <p className="text-mono-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            We're available daily from 8:30 AM to 6:00 PM. Call us or send a WhatsApp and we'll come to you anywhere in Johannesburg and Gauteng.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27683510676"
              className="cta-glow tap-target inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-mono-950 text-lg font-bold py-4 px-8 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call 068 351 0676</span>
            </a>
            <a
              href="https://wa.me/27683510676"
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target inline-flex items-center justify-center gap-3 bg-mono-900 hover:bg-mono-800 text-white font-bold text-lg py-4 px-8 rounded-xl border border-mono-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
          <p className="text-mono-500 text-sm mt-6">
            Open daily 8:30 AM – 6:00 PM • footprintsmobileauto@gmail.com
          </p>
        </div>
      </section>
    </>
  );
}
