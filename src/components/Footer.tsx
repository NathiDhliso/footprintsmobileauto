import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logofp.png" alt="Footprints Mobile Auto" className="w-6 h-6" />
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
            <div className="flex items-start gap-2 text-slate-300 mb-4">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div className="text-sm leading-relaxed">
                57 Regent St, Yeoville, Johannesburg, 2198
              </div>
            </div>
            {/* Google Maps Embed */}
            <div className="mt-4 rounded-lg overflow-hidden border border-slate-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.088!2d28.065833!3d-26.177778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEwJzQwLjAiUyAyOMKwMDMnNTciRQ!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Footprints Mobile Auto - 57 Regent St, Yeoville, Johannesburg"
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=57+Regent+St+Yeoville+Johannesburg+2198"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm mt-3 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </a>
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
