import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, Home, Wrench, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Footprints Mobile Auto</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="bg-mono-950 min-h-[70vh] flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="font-display text-8xl md:text-9xl font-bold text-mono-800 mb-4 tracking-tighter">
            404
          </div>

          {/* Message */}
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-mono-400 text-lg mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist. But we're still here to help with your car!
          </p>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 bg-mono-900 hover:bg-mono-800 text-white font-semibold rounded-xl py-4 px-6 border border-mono-800 transition-colors"
            >
              <Home className="w-5 h-5" />
              Home
            </Link>
            <Link
              to="/services"
              className="flex items-center justify-center gap-2 bg-mono-900 hover:bg-mono-800 text-white font-semibold rounded-xl py-4 px-6 border border-mono-800 transition-colors"
            >
              <Wrench className="w-5 h-5" />
              Our Services
            </Link>
            <Link
              to="/areas"
              className="flex items-center justify-center gap-2 bg-mono-900 hover:bg-mono-800 text-white font-semibold rounded-xl py-4 px-6 border border-mono-800 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Areas We Cover
            </Link>
          </div>

          {/* CTA */}
          <p className="text-mono-400 mb-6">Need help right now?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27683510676"
              className="tap-target inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-mono-950 font-bold rounded-xl py-4 px-8 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now - 068 351 0676
            </a>
            <a
              href="https://wa.me/27683510676"
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target inline-flex items-center justify-center gap-3 bg-mono-900 hover:bg-mono-800 text-white font-bold rounded-xl py-4 px-8 border border-mono-700 transition-colors text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
