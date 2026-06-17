import { Car, Zap, Wrench, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const badges = [
  { icon: Car, label: 'We Come To You' },
  { icon: Zap, label: 'Same-Day Service' },
  { icon: Wrench, label: 'All Vehicle Brands' },
  { icon: Phone, label: 'Free Phone Quote' },
];

export default function TrustBadges() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`bg-mono-950 py-12 px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="bg-mono-900 rounded-xl p-6 border border-mono-800 flex flex-col items-center text-center gap-4 transition-colors hover:bg-mono-800"
            >
              <div className="w-12 h-12 rounded-full bg-mono-950 border border-mono-700 flex items-center justify-center">
                <badge.icon className="w-5 h-5 text-mono-200" />
              </div>
              <span className="text-mono-100 font-semibold text-sm md:text-base tracking-wide">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
