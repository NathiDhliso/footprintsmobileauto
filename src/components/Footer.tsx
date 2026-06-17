import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const serviceAreas = [
  'Johannesburg',
  'Sandton',
  'Midrand',
  'Randburg',
  'Roodepoort',
  'Kempton Park',
  'Fourways',
  'Edenvale',
];

export default function Footer() {
  return (
    <footer className="bg-dark py-12 md:py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1 — Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logofp.png"
                alt="Footprints Mobile Auto"
                className="w-8 h-8 rounded-full"
                loading="lazy"
              />
              <span className="text-white font-bold text-lg">Footprints Mobile Auto</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional mobile auto electrician serving Johannesburg &amp; Gauteng. We
              come to you!
            </p>
          </div>

          {/* Column 2 — Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+27683510676"
                className="flex items-center gap-3 text-slate-300 hover:text-brand-light transition-colors group"
              >
                <Phone className="w-5 h-5 text-brand" />
                <span className="font-semibold">📞 068 351 0676</span>
                <span className="text-xs text-slate-500">(Primary)</span>
              </a>
              <a
                href="tel:+27631244992"
                className="flex items-center gap-3 text-slate-300 hover:text-brand-light transition-colors"
              >
                <Phone className="w-5 h-5 text-brand" />
                <span className="font-semibold">📞 063 124 4992</span>
              </a>
              <a
                href="https://wa.me/27683510676"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-brand-light transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-brand" />
                <span className="font-semibold">💬 WhatsApp Us</span>
              </a>
              <a
                href="mailto:footprintsmobileauto@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-brand-light transition-colors"
              >
                <Mail className="w-5 h-5 text-brand" />
                <span className="text-sm">✉️ footprintsmobileauto@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <Clock className="w-5 h-5 text-brand" />
                <span className="text-sm">Daily 8:30 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 3 — Service Areas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2 mb-5">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
            <a
              href="https://maps.google.com/?q=57+Regent+St+Yeoville+Johannesburg+2198"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand hover:text-brand-light transition-colors text-sm font-medium"
            >
              <MapPin className="w-4 h-4" />
              Get directions
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-lighter mt-10 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © 2025 Footprints Mobile Auto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
