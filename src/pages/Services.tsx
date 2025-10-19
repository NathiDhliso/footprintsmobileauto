import { Battery, Wrench, Search, AlertCircle, Radio, Gauge, Power, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Services() {
  const { ref: serviceListRef, isVisible: serviceListVisible } = useScrollAnimation<HTMLElement>();
  const { ref: areaListRef, isVisible: areaListVisible } = useScrollAnimation<HTMLElement>();

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Complete Auto Electrical Services in Gauteng
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-3">
              Professional mobile car electrician services delivered to your location
            </p>
            <p className="text-base text-slate-400 italic">
              Op-perseel herstelwerk • Ukulungisa imoto ekhaya
            </p>
          </div>
        </div>
      </section>

      <section ref={serviceListRef} className={`py-16 bg-white fade-in-section ${serviceListVisible ? 'is-visible' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-slate-900 border-b-4 border-amber-400 pb-2 inline-block">
                  Diagnostic Services
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-amber-100 rounded-lg p-3">
                        <Search className="w-6 h-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">Computer Diagnostics</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Advanced OBD scanning and fault code reading for all vehicle makes and models
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-amber-100 rounded-lg p-3">
                        <AlertCircle className="w-6 h-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">Electrical Fault Finding</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Expert troubleshooting of intermittent and complex electrical issues
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-amber-100 rounded-lg p-3">
                        <Battery className="w-6 h-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">Battery Testing & Health Checks</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Comprehensive battery load testing and charging system diagnostics
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-amber-100 rounded-lg p-3">
                        <Gauge className="w-6 h-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">Alternator Testing</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Full charging system analysis to ensure proper battery charging
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 text-slate-900 border-b-4 border-amber-400 pb-2 inline-block">
                  Repair Services
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-amber-100 rounded-lg p-3">
                        <Wrench className="w-6 h-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">Starter Motor Repairs & Replacement</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Complete starter motor diagnosis, repair, and replacement services
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-amber-100 rounded-lg p-3">
                        <Power className="w-6 h-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">Alternator Repairs & Replacement</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Expert alternator servicing to keep your electrical system powered
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-amber-100 rounded-lg p-3">
                        <img src="/logofp.png" alt="" className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">Wiring Repairs & Rewiring</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Professional electrical wiring services for damaged or faulty circuits
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-amber-100 rounded-lg p-3">
                        <Radio className="w-6 h-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">Accessory Installation</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Installation of radios, alarms, reverse cameras, and other accessories
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-slate-900 border-b-4 border-amber-400 pb-2 inline-block">
                Additional Services
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Lighting Repairs</h3>
                  <ul className="text-slate-600 space-y-2 text-sm leading-relaxed">
                    <li>Headlight and tail light repairs</li>
                    <li>Indicator and brake light fixes</li>
                    <li>Interior lighting issues</li>
                    <li>Dashboard warning lights</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Power Issues</h3>
                  <ul className="text-slate-600 space-y-2 text-sm leading-relaxed">
                    <li>Car won't start troubleshooting</li>
                    <li>Dead battery replacement</li>
                    <li>Jump start services</li>
                    <li>Electrical drains</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Safety Systems</h3>
                  <ul className="text-slate-600 space-y-2 text-sm leading-relaxed">
                    <li>Immobilizer issues</li>
                    <li>Central locking repairs</li>
                    <li>Alarm system fixes</li>
                    <li>Window motor repairs</li>
                  </ul>
                </div>
              </div>

              {/* Vehicle & Brand Specialization Section */}
              <div className="mt-16 bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
                <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">
                  Specialists for All Major Vehicle Brands
                </h2>
                <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
                  Whether you need a <span className="font-semibold text-amber-600">VW auto electrician</span>, a specialist for your BMW, or repairs on a Ford bakkie, we have the expertise for all major brands on South African roads.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-12">
                  <span className="font-bold text-slate-700">Toyota</span>
                  <span className="font-bold text-slate-700">Volkswagen (VW)</span>
                  <span className="font-bold text-slate-700">Ford</span>
                  <span className="font-bold text-slate-700">BMW</span>
                  <span className="font-bold text-slate-700">Mercedes-Benz</span>
                  <span className="font-bold text-slate-700">Hyundai</span>
                  <span className="font-bold text-slate-700">Isuzu</span>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">Bakkie & LDV Services</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Expert <span className="font-semibold">Bakkie auto electrician</span> services, including complex <span className="font-semibold">Isuzu bakkie wiring</span> and Ford starter motor issues.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">Taxis & Commercial Vehicles</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Reliable <span className="font-semibold">Taxi auto electrician</span> services to keep your business moving. We also service light trucks and trailers.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">European Car Specialists</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Your go-to <span className="font-semibold">BMW auto electrician</span> and <span className="font-semibold">Mercedes auto electrician</span> for advanced diagnostics and repairs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={areaListRef} className={`py-16 bg-slate-50 fade-in-section ${areaListVisible ? 'is-visible' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Proudly Serving These Areas and More
              </h2>
              <p className="text-slate-600 text-lg">
                Mobile auto electrician services across Johannesburg and Gauteng
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h3 className="font-bold text-lg text-amber-600 mb-4">Johannesburg Areas</h3>
                  <ul className="text-slate-700 space-y-2 text-sm">
                    <li>Johannesburg CBD</li>
                    <li>Sandton</li>
                    <li>Rosebank</li>
                    <li>Parktown</li>
                    <li>Melrose</li>
                    <li>Houghton</li>
                    <li>Braamfontein</li>
                    <li>Newtown</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-amber-600 mb-4">Northern Suburbs</h3>
                  <ul className="text-slate-700 space-y-2 text-sm">
                    <li>Randburg</li>
                    <li>Fourways</li>
                    <li>Midrand</li>
                    <li>Bryanston</li>
                    <li>Sunninghill</li>
                    <li>Rivonia</li>
                    <li>Woodmead</li>
                    <li>Kyalami</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-amber-600 mb-4">Western Areas</h3>
                  <ul className="text-slate-700 space-y-2 text-sm">
                    <li>Roodepoort</li>
                    <li>Krugersdorp</li>
                    <li>Honeydew</li>
                    <li>Florida</li>
                    <li>Constantia Kloof</li>
                    <li>Northcliff</li>
                    <li>Westdene</li>
                    <li>Fairland</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-amber-600 mb-4">Extended Areas</h3>
                  <ul className="text-slate-700 space-y-2 text-sm">
                    <li>Pretoria</li>
                    <li>Centurion</li>
                    <li>Kempton Park</li>
                    <li>Benoni</li>
                    <li>Boksburg</li>
                    <li>Germiston</li>
                    <li>Alberton</li>
                    <li>Edenvale</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200 text-center">
                <p className="text-slate-600 mb-2">
                  Don't see your area listed? We cover most of Gauteng Province!
                </p>
                <p className="text-amber-600 font-semibold">
                  Contact us to confirm service availability in your location
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
