import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const [isAvailableNow, setIsAvailableNow] = useState(false);

  useEffect(() => {
    const checkAvailability = () => {
      // Get current time in SAST (UTC+2)
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const sast = new Date(utc + (3600000 * 2));
      
      const hour = sast.getHours();
      const minute = sast.getMinutes();
      const time = hour + minute / 60;
      
      // Open between 8:30am (8.5) and 6:00pm (18.0)
      setIsAvailableNow(time >= 8.5 && time < 18);
    };

    checkAvailability();
    // Check every minute to keep it updated if the user leaves the tab open
    const interval = setInterval(checkAvailability, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-mono-950">
      {/* Background Image */}
      <img
        src="/herofp.png"
        alt="Mobile auto electrician servicing car in Johannesburg"
        className="absolute inset-0 w-full h-full object-cover img-mono"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-mono-950/90 via-mono-950/80 to-mono-950/95" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center py-10 px-6 md:py-20 flex flex-col items-center">
        {/* Logo */}
        <div className="flex justify-center mb-6 md:mb-8">
          <img
            src="/logofp.png"
            alt="Footprints Mobile Auto logo"
            loading="lazy"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-mono-700 img-mono"
          />
        </div>

        {/* H1 */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-3 md:mb-4 tracking-tighter">
          Car Won't Start?{' '}
          <span className="block text-mono-200 mt-1 md:mt-2 text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight">We Come To You.</span>
        </h1>

        {/* Subheadline */}
        <h2 className="text-lg md:text-2xl text-mono-300 font-medium mb-6 md:mb-8 max-w-2xl mx-auto tracking-wide">
          Mobile Auto Electrician - Johannesburg &amp; Gauteng
        </h2>

        {/* Time-Aware Availability Badge */}
        <div className="inline-flex items-center gap-2 bg-mono-900/80 backdrop-blur-sm text-mono-200 rounded-lg py-2 px-4 text-sm font-medium border border-mono-700 mb-8 md:mb-10">
          {isAvailableNow ? (
            <>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span>Available Now - Dispatching across Gauteng today</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-mono-500"></span>
              <span>Currently closed - leave a WhatsApp, we'll reply first thing</span>
            </>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto sm:max-w-none">
          <a
            href="tel:+27683510676"
            className="cta-glow tap-target w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-mono-950 text-lg md:text-xl font-bold py-4 px-8 rounded-xl transition-colors"
          >
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/27683510676"
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-mono-900 hover:bg-mono-800 text-white font-bold text-lg md:text-xl py-4 px-8 rounded-xl border border-mono-700 transition-colors"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            <span>WhatsApp Us</span>
          </a>
        </div>
        
        {/* Honest Trust Line */}
        <p className="mt-6 text-sm md:text-base text-mono-400 font-medium">
          Trusted local auto electrician - Johannesburg &amp; Gauteng
        </p>
      </div>
    </section>
  );
}
