import { MapPin, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const areas = [
  'Johannesburg',
  'Sandton',
  'Midrand',
  'Randburg',
  'Roodepoort',
  'Kempton Park',
  'Fourways',
  'Edenvale',
];

export default function AreasSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="areas"
      ref={ref}
      className={`bg-mono-950 py-16 md:py-24 px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Areas We Cover in Gauteng
          </h2>
          <p className="text-mono-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Our mobile auto electrician covers Johannesburg and surrounding areas.
            Wherever you are in Gauteng, we'll come to you.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {areas.map((area) => (
            <div
              key={area}
              className="bg-mono-900 rounded-xl p-4 flex items-center gap-3 border border-mono-800 hover:border-mono-600 transition-colors"
            >
              <MapPin className="w-5 h-5 text-mono-200 flex-shrink-0" />
              <span className="text-mono-100 font-medium tracking-wide">{area}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-mono-400 mb-6 text-lg">
            Not sure if we cover your area? Give us a call!
          </p>
          <a
            href="tel:+27683510676"
            className="tap-target inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-mono-950 font-bold rounded-xl py-4 px-8 transition-colors text-lg"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now — 068 351 0676</span>
          </a>
        </div>
      </div>
    </section>
  );
}
