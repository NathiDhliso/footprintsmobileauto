import { Zap, Mail, MessageCircle, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-amber-400" />
              <span className="font-bold text-lg">Footprints Mobile Auto</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Expert mobile auto electrician serving Johannesburg and Gauteng.
              We come to you for all your car electrical needs.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-400">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+27683510676"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>068 351 0676</span>
              </a>
              <a
                href="https://wa.me/27683510676"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:footprintsmobileauto@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>footprintsmobileauto@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-400">Our Location</h3>
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div className="text-sm leading-relaxed">
                57 Regent St, Yeoville, Johannesburg, 2198
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Footprints Mobile Auto. All rights reserved.</p>
          <p className="mt-2">Leaving a positive footprint across the Rainbow Nation</p>
        </div>
      </div>
    </footer>
  );
}
