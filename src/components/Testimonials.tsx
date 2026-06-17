import { Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// ===== PLACEHOLDER REVIEWS — Replace with real customer reviews =====
const reviews = [
  {
    name: 'Sibusiso M.',
    rating: 5,
    text: "My car wouldn't start in Sandton and I needed help urgently. Footprints arrived within 45 minutes and diagnosed a faulty starter motor. Fixed it on the spot — amazing service!",
  },
  {
    name: 'Khumbelo M.',
    rating: 5,
    text: 'Called them for a flat battery in Midrand. Very professional, tested my alternator too and explained everything clearly. Fair pricing and super convenient that they come to you.',
  },
  {
    name: 'Hlayisani S.',
    rating: 5,
    text: "Had an electrical fault that two other mechanics couldn't find. Footprints used proper diagnostic equipment and found the issue in minutes. Highly recommend their mobile service across Gauteng.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-mono-800 text-mono-800" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`bg-mono-50 py-16 md:py-24 px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-mono-950 mb-4 tracking-tight">
            What Our Customers Say
          </h2>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl border border-mono-200 p-8 relative"
            >
              {/* Decorative Quote */}
              <span className="absolute top-6 right-6 text-6xl font-serif text-mono-150 leading-none select-none pointer-events-none">
                "
              </span>

              {/* Stars */}
              <StarRating count={review.rating} />

              {/* Review Text */}
              <p className="text-mono-600 leading-relaxed mb-6 text-base">
                "{review.text}"
              </p>

              {/* Customer Name */}
              <p className="font-bold text-mono-950">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
