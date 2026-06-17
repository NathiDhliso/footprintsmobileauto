import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const photos = [
  {
    src: '/IMG-20251019-WA0003.jpg',
    alt: 'Mobile auto electrician diagnosing car electrical fault',
  },
  {
    src: '/IMG-20251019-WA0008.jpg',
    alt: 'On-site vehicle wiring repair in Johannesburg',
  },
  {
    src: '/IMG-20251019-WA0013.jpg',
    alt: 'Professional car diagnostics with scan tool',
  },
  {
    src: '/IMG-20251019-WA0016.jpg',
    alt: 'Starter motor repair by Footprints Mobile Auto',
  },
];

const faqs = [
  {
    question: "What do I do if my car won't start?",
    answer: (
      <>
        Give us a call on{' '}
        <a href="tel:+27683510676" className="text-mono-950 font-bold hover:underline transition-colors">
          068 351 0676
        </a>
        . We'll ask a few questions to understand the problem, then send our mobile auto
        electrician to your location in Johannesburg or anywhere in Gauteng.
      </>
    ),
  },
  {
    question: 'How quickly can you get to me?',
    answer:
      'We aim to reach you within 60 minutes across Johannesburg, Sandton, Midrand, Randburg, and surrounding areas, depending on traffic and availability.',
  },
  {
    question: 'What vehicle brands do you work on?',
    answer:
      'We work on all major vehicle brands including Toyota, VW, Ford, BMW, Mercedes-Benz, Hyundai, Isuzu, and more. Cars, bakkies, and light commercial vehicles.',
  },
  {
    question: 'Do you charge a call-out fee?',
    answer: (
      <>
        Call us for a free phone quote on{' '}
        <a href="tel:+27683510676" className="text-mono-950 font-bold hover:underline transition-colors">
          068 351 0676
        </a>
        . We'll give you an honest estimate before we come out.
      </>
    ),
  },
  {
    question: 'What areas do you cover?',
    answer:
      'We cover Johannesburg, Sandton, Midrand, Randburg, Roodepoort, Kempton Park, Fourways, Edenvale, and the greater Gauteng area.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-mono-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-mono-50 transition-colors"
      >
        <span className="font-bold text-mono-950 tracking-tight">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-mono-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-mono-600 leading-relaxed text-base">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`bg-white py-16 md:py-24 px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-mono-950 mb-4 tracking-tight">
            About Footprints Mobile Auto
          </h2>
          <p className="text-mono-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Footprints Mobile Auto is a professional mobile auto electrician service based
            in Johannesburg, serving all of Gauteng. We come to your location — home,
            office, or roadside — to diagnose and repair car electrical faults. No towing
            needed, no workshop visit required.
          </p>
        </div>

        {/* Work Photos Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-20">
          {photos.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full aspect-video object-cover rounded-2xl border border-mono-150 img-mono"
            />
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-mono-950 text-center mb-8 tracking-tight">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
