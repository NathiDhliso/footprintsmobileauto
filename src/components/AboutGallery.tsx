import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { src: '/IMG-20251019-WA0010.jpg', alt: 'Auto electrician working on a Hummer H3 in Johannesburg' },
  { src: '/IMG-20251019-WA0003.jpg', alt: 'Mobile auto electrician servicing a BMW M6' },
  { src: '/IMG-20251019-WA0004.jpg', alt: 'Ford Ranger grill light installation' },
  { src: '/IMG-20251019-WA0012.jpg', alt: 'Engine bay of a modern VW Tiguan during diagnostics' },
  { src: '/IMG-20251019-WA0015.jpg', alt: 'Complex dashboard wiring repair on a classic BMW' },
  { src: '/IMG-20251019-WA0019.jpg', alt: 'Classic BMW E23 undergoing engine electrical work' },
  { src: '/IMG-20251019-WA0009.jpg', alt: 'On-site repair of a blue BMW Z3 Coupe' },
  { src: '/IMG-20251019-WA0013.jpg', alt: 'Honda CR-V battery service in progress' },
  { src: '/IMG-20251019-WA0002.jpg', alt: 'Battery replacement for a BMW 1 Series convertible' },
  { src: '/IMG-20251019-WA0008.jpg', alt: 'Ford F-250 bakkie electrical diagnostics' },
  { src: '/IMG-20251019-WA0020.jpg', alt: 'Audi Q7 receiving a battery charge and diagnostic check' },
  { src: '/IMG-20251019-WA0011.jpg', alt: 'Tail light repair on a black BMW X5' },
  { src: '/IMG-20251019-WA0018.jpg', alt: 'Mini Cooper engine bay inspection' },
  { src: '/IMG-20251019-WA0005.jpg', alt: 'Mercedes-Benz V-Class tail light check' },
  { src: '/IMG-20251019-WA0016.jpg', alt: 'Electrical repair on a Gehl skid loader' },
  { src: '/IMG-20251019-WA0006.jpg', alt: 'Custom wiring and fuse box installation on heavy machinery' },
  { src: '/IMG-20251019-WA0007.jpg', alt: 'Engine wiring on a classic AC Cobra replica' },
  { src: '/IMG-20251019-WA0017.jpg', alt: 'Infotainment system diagnostics in a modern SUV' },
];

export default function AboutGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (event.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (event.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev! + 1) % galleryImages.length);
      } else if (event.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
      }
    };

    // Prevent body scroll when modal is open
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
        <h3 className="text-2xl font-bold">Our Work Gallery</h3>
        <p className="text-slate-300 mt-2">Professional results you can trust</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" role="grid">
          {galleryImages.map((image, idx) => (
            <button
              key={image.src}
              className="aspect-square bg-slate-200 rounded-lg overflow-hidden outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-transform hover:scale-105"
              onClick={() => setSelectedImageIndex(idx)}
              aria-label={`View image: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
        <p className="text-sm text-slate-600 mt-4 text-center italic">
          Serving cars, bakkies, and machinery across Gauteng with pride.
        </p>
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full my-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
              className="w-full h-auto max-h-[70vh] object-contain rounded-t-lg"
            />
            <p className="text-center text-sm sm:text-base p-4 text-slate-800 bg-slate-50 rounded-b-lg">{galleryImages[selectedImageIndex].alt}</p>
            <button
              className="absolute top-2 right-2 p-2 bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors"
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close image viewer"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
