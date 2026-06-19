import { Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const reviews = [
  {
    name: 'Google Reviewer',
    rating: 5,
    text: "Called them out, faulty alternator removed, fixed and installed perfectly. Great mobile service and very convenient.",
  },
  {
    name: 'Local Customer',
    rating: 5,
    text: "He is very knowledgable and good value. Found the electrical fault quickly and explained everything clearly.",
  },
  {
    name: 'Satisfied Client',
    rating: 5,
    text: "My car wouldn't start and I needed help urgently. They arrived quickly, diagnosed the issue, and fixed it on the spot - highly recommend!",
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
      id="testimonials"
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
