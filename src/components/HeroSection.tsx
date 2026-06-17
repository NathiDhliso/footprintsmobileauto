import { Phone, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/herofp.png"
        alt="Mobile auto electrician servicing car in Johannesburg"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center py-20 px-6">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/logofp.png"
            alt="Footprints Mobile Auto logo"
            loading="lazy"
            className="w-20 h-20 rounded-full shadow-xl border-2 border-white/20"
          />
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight">
          Car Won't Start?{' '}
          <span className="text-brand-light">We Come To You.</span>
        </h1>

        {/* Subheadline */}
        <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-8 max-w-2xl mx-auto">
          Mobile Auto Electrician — Johannesburg &amp; Gauteng
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="tel:+27683510676"
            className="cta-pulse tap-target inline-flex items-center justify-center gap-3 bg-brand hover:bg-brand-dark text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>📞 Call Now</span>
          </a>
          <a
            href="https://wa.me/27683510676"
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-brand font-bold text-lg py-4 px-8 rounded-xl shadow-lg border-2 border-brand transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>💬 WhatsApp Us</span>
          </a>
        </div>

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white rounded-full py-2 px-5 text-sm font-medium border border-white/20 mb-4">
          <span className="text-amber-400">⚡</span>
          <span>Available Daily 8:30 AM – 6:00 PM</span>
        </div>

        {/* Trust Line */}
        <p className="text-slate-400 text-sm mt-3">
          Fast on-site response across Gauteng
        </p>
      </div>
    </section>
  );
}
