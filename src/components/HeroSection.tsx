import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface HeroSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  badgeLocationText?: string;
}

export default function HeroSection({ 
  title = (
    <>
      Car Won't Start?{' '}
      <span className="block text-mono-200 mt-1 md:mt-2 text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight">We Come To You.</span>
    </>
  ),
  subtitle = "Mobile Auto Electrician - Johannesburg & Gauteng",
  badgeLocationText = "across Gauteng"
}: HeroSectionProps) {
  const [isAvailableNow, setIsAvailableNow] = useState(false);

  useEffect(() => {
    const checkAvailability = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const sast = new Date(utc + (3600000 * 2));
      
      const hour = sast.getHours();
      const minute = sast.getMinutes();
      const time = hour + minute / 60;
      
      setIsAvailableNow(time >= 8.5 && time < 18);
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-mono-950">
      {/* Background Image */}
      <img
        src="/herofp.png"
        alt="Mobile auto electrician servicing car"
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
            className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-mono-700 img-mono"
          />
        </div>

        {/* H1 */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-3 md:mb-4 tracking-tighter">
          {title}
        </h1>

        {/* Subheadline */}
        <h2 className="text-lg md:text-2xl text-mono-300 font-medium mb-6 md:mb-8 max-w-2xl mx-auto tracking-wide">
          {subtitle}
        </h2>

        {/* Time-Aware Availability Badge */}
        <div className="inline-flex items-center gap-2 bg-mono-900/80 backdrop-blur-sm text-mono-200 rounded-lg py-2 px-4 text-sm font-medium border border-mono-700 mb-8 md:mb-10">
          {isAvailableNow ? (
            <>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span>Available Now - Dispatching {badgeLocationText} today</span>
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
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-sm md:text-base text-mono-400 font-medium">
          <div className="flex items-center gap-1 text-[#fbbc04]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
            <span className="font-bold text-white">4.8/5</span>
          </div>
          <span>(51 Google Reviews) • Trusted local auto electrician</span>
        </div>
      </div>
    </section>
  );
}
