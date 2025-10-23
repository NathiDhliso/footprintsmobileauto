import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

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
  { src: '/IMG-20251019-WA0008.jpg', alt: 'Ford F-250 pickup electrical diagnostics' },
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
  const [imageLoaded, setImageLoaded] = useState(false);

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
    setImageLoaded(false);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setImageLoaded(false);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImageIndex === null) return;
    
    setImageLoaded(false);
    if (direction === 'next') {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    } else {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowRight') {
        navigateImage('next');
      } else if (event.key === 'ArrowLeft') {
        navigateImage('prev');
      }
    };

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
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
          <h3 className="text-2xl font-bold">Our Work Gallery</h3>
          <p className="text-slate-300 mt-2">Professional results you can trust</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3" role="grid">
            {galleryImages.map((image, idx) => (
              <button
                key={image.src}
                className="group relative aspect-square bg-slate-200 rounded-lg overflow-hidden outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-lg"
                onClick={() => openImage(idx)}
                aria-label={`View image: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                </div>
              </button>
            ))}
          </div>
          
          <p className="text-sm text-slate-600 mt-6 text-center italic">
            Serving cars, pickup trucks, and machinery across Gauteng with pride.
          </p>
        </div>

        <style>{`
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes scale-in {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.2s ease-out;
          }

          .animate-scale-in {
            animation: scale-in 0.3s ease-out;
          }
        `}</style>
      </div>

      {selectedImageIndex !== null && createPortal(
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative bg-white rounded-lg shadow-2xl max-w-6xl w-full my-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-20 p-2 bg-black/70 text-white rounded-full hover:bg-black transition-all hover:scale-110"
              onClick={closeModal}
              aria-label="Close image viewer"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/70 text-white rounded-full hover:bg-black transition-all hover:scale-110 hidden sm:block"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/70 text-white rounded-full hover:bg-black transition-all hover:scale-110 hidden sm:block"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image Container */}
            <div className="relative bg-slate-100">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-slate-300 border-t-amber-500 rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].alt}
                className={`w-full h-auto max-h-[70vh] object-contain transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {/* Image Info */}
            <div className="p-4 sm:p-6 bg-white border-t border-slate-200">
              <p className="text-center text-sm sm:text-base text-slate-700 font-medium">
                {galleryImages[selectedImageIndex].alt}
              </p>
              <div className="flex flex-wrap gap-3 justify-center items-center mt-4 text-xs text-slate-500">
                <span className="bg-slate-100 px-3 py-1 rounded-full">
                  Image {selectedImageIndex + 1} of {galleryImages.length}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Use arrow keys to navigate</span>
              </div>

              {/* Mobile Navigation */}
              <div className="flex gap-3 justify-center mt-4 sm:hidden">
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                >
                  <ChevronLeft size={20} />
                  Previous
                </button>
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                >
                  Next
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}