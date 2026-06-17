import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Areas', href: '#areas' },
  { label: 'About', href: '#about' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 md:top-10 z-40 bg-dark/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img src="/logofp.png" alt="Footprints Mobile Auto" className="w-8 h-8 rounded-full" />
          <span className="text-white font-bold text-lg">Footprints Mobile Auto</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-white transition-colors font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+27683510676"
            className="tap-target flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold rounded-lg px-4 py-2 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white tap-target"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center gap-6 md:hidden">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white tap-target"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Nav Links */}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-white text-2xl font-semibold hover:text-brand-light transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Divider */}
          <div className="w-16 h-px bg-dark-lighter my-2" />

          {/* Call & WhatsApp Buttons */}
          <a
            href="tel:+27683510676"
            onClick={handleNavClick}
            className="tap-target flex items-center gap-3 bg-brand hover:bg-brand-dark text-white font-bold rounded-xl py-3 px-8 text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            📞 Call Now
          </a>
          <a
            href="https://wa.me/27683510676"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="tap-target flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl py-3 px-8 text-lg transition-colors border border-white/20"
          >
            <MessageCircle className="w-5 h-5" />
            💬 WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}
