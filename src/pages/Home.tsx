import { MessageCircle, Mail, Star, Wrench, Battery, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Home() {
  const { ref: trustRef, isVisible: trustVisible } = useScrollAnimation<HTMLElement>();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLElement>();
  const { ref: localRef, isVisible: localVisible } = useScrollAnimation<HTMLElement>();

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/herofp.png" 
            alt="Mobile Auto Electrician in Johannesburg" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/75 to-slate-900/80"></div>
        </div>

        {/* Animated Footprint Trail */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="footprint-trail">
            {[...Array(8)].map((_, i) => (
              <img 
                key={i}
                src="/logofp.png" 
                alt=""
                className="footprint-step"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + (i % 2) * 40}%`,
                  animationDelay: `${i * 0.3}s`,
                  opacity: 0.15,
                  width: '60px',
                  height: '60px',
                  position: 'absolute',
                  animation: 'fadeInStep 2s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.3))'
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo Integration */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img 
                  src="/logofp.png" 
                  alt="Footprints Mobile Auto Logo" 
                  className="w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-2xl animate-float"
                />
                <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Mobile Auto Electrician in <span className="text-amber-400">Johannesburg & Gauteng</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed drop-shadow-md">
              Expert Car Electrician services, from vehicle diagnostics to wiring repairs.
              <span className="block mt-2 text-amber-400 font-semibold">We come to you.</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://wa.me/27683510676"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>
              <a
                href="mailto:footprintsmobileauto@gmail.com"
                className="inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <Mail className="w-6 h-6" />
                Send Us an Email
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <img src="/logofp.png" alt="Fast Response" className="w-5 h-5" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>Mobile Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={trustRef} className={`py-16 bg-white fade-in-section ${trustVisible ? 'is-visible' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
              Trusted by Customers Across Gauteng
            </h2>
            <p className="text-center text-slate-600 mb-12">Real reviews from our Google Business Profile</p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed flex-grow">
                  "Nathi is a very professional guy... I had a problem with my car, he drove all the way from his place to fix my car... I can recommend him to anyone who has a problem with their car."
                </p>
                <p className="font-semibold text-slate-900">- Sibusiso Mbele</p>
              </div>

              {/* Review 2 */}
              <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed flex-grow">
                  "The service was great and quick... Very professional and friendly."
                </p>
                <p className="font-semibold text-slate-900">- Khumbelo Muvhango</p>
              </div>

              {/* Review 3 */}
              <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed flex-grow">
                  "Excellent service received from Nathi... He is very professional and goes the extra mile for his customers."
                </p>
                <p className="font-semibold text-slate-900">- Hlayisani Shikwambana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className={`py-16 bg-slate-50 fade-in-section ${servicesVisible ? 'is-visible' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
              On-Site Auto Electrical Repairs & Services
            </h2>
            <p className="text-center text-slate-600 mb-12">We bring professional expertise to your location</p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <img src="/logofp.png" alt="Vehicle Diagnostics" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-slate-900">Vehicle Diagnostics</h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  Advanced diagnostic equipment to identify electrical faults quickly and accurately
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Battery className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-slate-900">Battery Replacement</h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  Quick battery testing, supply, and installation for all vehicle makes and models
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Wrench className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-slate-900">Starter Motor Repairs</h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  Expert diagnosis and repair of starter motor issues to get you back on the road
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <img src="/logofp.png" alt="Wiring Repairs" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-slate-900">Wiring Repairs</h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  Complete electrical wiring services from fault finding to complete rewiring
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={localRef} className={`py-16 bg-white fade-in-section ${localVisible ? 'is-visible' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
              Your Local "Car Electrician Near Me" Solution
            </h2>
            <p className="text-center text-slate-600 mb-12 text-lg">
              Call-Out Auto Electrician for on-site repairs in Sandton, Midrand, Randburg, and across Gauteng
            </p>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-amber-400">Why Choose Mobile Service?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-amber-400 rounded-full p-1 mt-1">
                        <Star className="w-4 h-4 text-slate-900" />
                      </div>
                      <span className="leading-relaxed">No need to tow your vehicle to a workshop</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-amber-400 rounded-full p-1 mt-1">
                        <Star className="w-4 h-4 text-slate-900" />
                      </div>
                      <span className="leading-relaxed">Save time and money with on-site repairs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-amber-400 rounded-full p-1 mt-1">
                        <Star className="w-4 h-4 text-slate-900" />
                      </div>
                      <span className="leading-relaxed">Professional service at your home or office</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-amber-400 rounded-full p-1 mt-1">
                        <Star className="w-4 h-4 text-slate-900" />
                      </div>
                      <span className="leading-relaxed">Fast response times across Gauteng</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <MapPin className="w-12 h-12 text-amber-400 mb-4" />
                  <h4 className="text-xl font-bold mb-3">Service Coverage</h4>
                  <p className="text-slate-300 leading-relaxed">
                    We proudly serve Johannesburg CBD, Sandton, Midrand, Randburg, Roodepoort,
                    Fourways, Centurion, Pretoria, and surrounding areas across Gauteng Province.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-amber-400 font-semibold mb-3">Ready to get started?</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="https://wa.me/27683510676"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp Us
                      </a>
                      <a
                        href="mailto:footprintsmobileauto@gmail.com"
                        className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
