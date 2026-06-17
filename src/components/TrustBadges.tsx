import { Car, Zap, Wrench, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const badges = [
  { icon: Car, emoji: '🚗', label: 'We Come To You' },
  { icon: Zap, emoji: '⚡', label: 'Same-Day Service' },
  { icon: Wrench, emoji: '🔧', label: 'All Vehicle Brands' },
  { icon: Phone, emoji: '💰', label: 'Free Phone Quote' },
];

export default function TrustBadges() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`bg-dark py-12 px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="bg-dark-light rounded-xl p-6 border border-dark-lighter flex flex-col items-center text-center gap-3 hover:border-brand/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-brand" />
              </div>
              <span className="text-white font-semibold text-sm md:text-base">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
