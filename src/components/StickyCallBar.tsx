import { Phone, MessageCircle } from 'lucide-react';

export default function StickyCallBar() {
  return (
    <>
      {/* Mobile: Fixed to BOTTOM */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-mono-950 border-t border-mono-800">
        <div className="flex gap-2 py-3 px-4">
          <a
            href="tel:+27683510676"
            className="tap-target flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-mono-950 font-bold rounded-lg py-3 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>📞 Call Now</span>
          </a>
          <a
            href="https://wa.me/27683510676"
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target flex-1 flex items-center justify-center gap-2 bg-mono-800 hover:bg-mono-700 text-white font-bold rounded-lg py-3 transition-colors border border-mono-700"
          >
            <MessageCircle className="w-5 h-5" />
            <span>💬 WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Desktop: Fixed to TOP */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-mono-950/95 backdrop-blur-sm border-b border-mono-800">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 py-2 px-8">
          <a
            href="tel:+27683510676"
            className="tap-target flex items-center gap-2 bg-accent hover:bg-accent-dark text-mono-950 font-bold rounded-lg px-5 py-2 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>📞 Call Now — 068 351 0676</span>
          </a>
          <a
            href="https://wa.me/27683510676"
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target flex items-center gap-2 bg-mono-800 hover:bg-mono-700 text-white font-bold rounded-lg px-5 py-2 transition-colors text-sm border border-mono-700"
          >
            <MessageCircle className="w-4 h-4" />
            <span>💬 WhatsApp Us</span>
          </a>
        </div>
      </div>
    </>
  );
}
