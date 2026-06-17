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
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`bg-slate-50 py-16 md:py-24 px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            What Our Customers Say
          </h2>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl shadow-md p-6 relative"
            >
              {/* Decorative Quote */}
              <span className="absolute top-4 right-6 text-6xl font-serif text-brand/20 leading-none select-none pointer-events-none">
                "
              </span>

              {/* Stars */}
              <StarRating count={review.rating} />

              {/* Review Text */}
              <p className="text-slate-600 italic leading-relaxed mb-5 text-sm">
                "{review.text}"
              </p>

              {/* Customer Name */}
              <p className="font-bold text-dark">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
