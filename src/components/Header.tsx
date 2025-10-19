import { useState } from 'react';
import { Zap, Menu, X, Mail, MessageCircle } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Zap className="w-8 h-8 text-amber-400" />
            <div className="text-left">
              <div className="font-bold text-xl leading-tight">Footprints Mobile Auto</div>
              <div className="text-xs text-amber-400">Leaving a Positive Footprint</div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigate('home')}
              className={`hover:text-amber-400 transition-colors font-medium ${
                currentPage === 'home' ? 'text-amber-400' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate('services')}
              className={`hover:text-amber-400 transition-colors font-medium ${
                currentPage === 'services' ? 'text-amber-400' : ''
              }`}
            >
              Services & Areas
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className={`hover:text-amber-400 transition-colors font-medium ${
                currentPage === 'about' ? 'text-amber-400' : ''
              }`}
            >
              About & FAQ
            </button>
            <a
              href="https://wa.me/27683510676"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="mailto:footprintsmobileauto@gmail.com"
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-slate-700 pt-4">
            <button
              onClick={() => handleNavigate('home')}
              className={`text-left px-4 py-2 hover:bg-slate-800 rounded transition-colors ${
                currentPage === 'home' ? 'bg-slate-800 text-amber-400' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate('services')}
              className={`text-left px-4 py-2 hover:bg-slate-800 rounded transition-colors ${
                currentPage === 'services' ? 'bg-slate-800 text-amber-400' : ''
              }`}
            >
              Services & Areas
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className={`text-left px-4 py-2 hover:bg-slate-800 rounded transition-colors ${
                currentPage === 'about' ? 'bg-slate-800 text-amber-400' : ''
              }`}
            >
              About & FAQ
            </button>
            <a
              href="https://wa.me/27683510676"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a
              href="mailto:footprintsmobileauto@gmail.com"
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-lg transition-colors justify-center"
            >
              <Mail className="w-5 h-5" />
              Send Us an Email
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
