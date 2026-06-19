import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Areas', href: '/areas' },
  { label: 'About', href: '/#about' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleLinkClick = (href: string) => {
    handleNavClick();
    // If it's a hash link on the current page, scroll to the element
    if (href.startsWith('/#') && location.pathname === '/') {
      const el = document.getElementById(href.substring(2));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isHashLink = (href: string) => href.includes('#');

  return (
    <header className="sticky top-0 z-40 bg-mono-950/95 backdrop-blur-md border-b border-mono-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/logofp.png" alt="Footprints Mobile Auto" className="w-8 h-8 rounded-full img-mono" />
          <span className="text-white font-bold tracking-tight text-lg">Footprints Mobile Auto</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) =>
            isHashLink(link.href) ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-mono-300 hover:text-white transition-colors font-medium text-sm tracking-wide"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`hover:text-white transition-colors font-medium text-sm tracking-wide ${
                  location.pathname === link.href ? 'text-white' : 'text-mono-300'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="flex items-center gap-3 ml-2">
            <a
              href="tel:+27683510676"
              className="tap-target flex items-center gap-2 bg-accent hover:bg-accent-dark text-mono-950 font-bold rounded-lg px-4 py-2 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now - 068 351 0676
            </a>
            <a
              href="https://wa.me/27683510676"
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target flex items-center gap-2 bg-mono-800 hover:bg-mono-700 text-white font-bold rounded-lg px-4 py-2 transition-colors text-sm border border-mono-700"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
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
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="font-display text-white text-3xl font-bold hover:text-mono-300 transition-colors tracking-tight"
            >
              {link.label}
            </Link>
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
