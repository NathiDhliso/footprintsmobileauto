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
    <header className="sticky top-0 md:top-12 z-40 bg-mono-950/95 backdrop-blur-md border-b border-mono-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/logofp.png" alt="Footprints Mobile Auto" className="w-8 h-8 rounded-full img-mono" />
          <span className="text-white font-bold tracking-tight text-lg">Footprints Mobile Auto</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-mono-300 hover:text-white transition-colors font-medium text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+27683510676"
            className="tap-target flex items-center gap-2 bg-accent hover:bg-accent-dark text-mono-950 font-bold rounded-lg px-5 py-2 transition-colors text-sm"
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
        <div className="fixed inset-0 bg-mono-950 z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white tap-target"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Nav Links */}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="font-display text-white text-3xl font-bold hover:text-mono-300 transition-colors tracking-tight"
            >
              {link.label}
            </a>
          ))}

          {/* Divider */}
          <div className="w-16 h-px bg-mono-800 my-4" />

          {/* Call & WhatsApp Buttons */}
          <div className="flex flex-col gap-4 w-full max-w-xs px-6">
            <a
              href="tel:+27683510676"
              onClick={handleNavClick}
              className="tap-target flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-mono-950 font-bold rounded-xl py-4 px-8 text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/27683510676"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="tap-target flex items-center justify-center gap-3 bg-mono-900 hover:bg-mono-800 text-white font-bold rounded-xl py-4 px-8 text-lg transition-colors border border-mono-700"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
