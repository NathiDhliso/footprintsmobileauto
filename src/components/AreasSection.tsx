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
      className={`bg-dark py-16 md:py-24 px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Areas We Cover in Gauteng
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Our mobile auto electrician covers Johannesburg and surrounding areas.
            Wherever you are in Gauteng, we'll come to you.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {areas.map((area) => (
            <div
              key={area}
              className="bg-dark-light rounded-xl p-4 flex items-center gap-3 border border-dark-lighter hover:border-brand/40 transition-colors"
            >
              <MapPin className="w-5 h-5 text-brand flex-shrink-0" />
              <span className="text-white font-medium">{area}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-400 mb-5 text-lg">
            Not sure if we cover your area? Give us a call!
          </p>
          <a
            href="tel:+27683510676"
            className="tap-target inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold rounded-xl py-3 px-6 shadow-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now — 068 351 0676</span>
          </a>
        </div>
      </div>
    </section>
  );
}
