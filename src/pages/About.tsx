import { Heart, Users, Award, HelpCircle, Battery, AlertTriangle, Power, Wrench } from 'lucide-react';
import AboutGallery from '../components/AboutGallery';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation<HTMLElement>();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation<HTMLElement>();

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Footprints Mobile Auto
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Leaving a positive footprint across the Rainbow Nation
            </p>
          </div>
        </div>
      </section>

      <section ref={storyRef} className={`py-16 bg-white fade-in-section ${storyVisible ? 'is-visible' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Heart className="w-12 h-12 text-amber-600" />
              <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                Footprints Mobile Auto was founded on a simple but powerful philosophy: to leave a positive
                footprint wherever we go. In a nation as diverse and vibrant as South Africa, we believe
                that quality service, honesty, and reliability should be accessible to everyone.
              </p>

              <p className="text-slate-700 leading-relaxed mb-6">
                As a mobile auto electrician, we come to you, bringing professional expertise and genuine
                care to your doorstep. Whether you're stranded with a dead battery in Sandton or dealing
                with electrical issues in Midrand, we're here to help get you back on the road quickly
                and safely.
              </p>

              <p className="text-slate-700 leading-relaxed mb-6">
                Our commitment extends beyond just fixing cars. We're about building relationships,
                earning trust, and contributing positively to our communities across Gauteng. Every
                service call is an opportunity to make a difference, one customer at a time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200">
                <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Customer First</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Your satisfaction and safety are our top priorities
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200">
                <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Expert Service</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Years of experience in automotive electrical systems
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200">
                <img src="/logofp.png" alt="Fast Response" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Fast Response</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Quick turnaround to get you back on the road
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={faqRef} className={`py-16 bg-slate-50 fade-in-section ${faqVisible ? 'is-visible' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <AboutGallery />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <HelpCircle className="w-12 h-12 text-amber-600" />
              <h2 className="text-3xl font-bold text-slate-900">Common Car Problems, Expert Answers</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Battery className="w-6 h-6 text-amber-600" />
                  Why is my car battery flat?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Car batteries can go flat for several reasons: leaving lights on, a faulty alternator
                  not charging the battery, old age (batteries typically last 3-5 years), parasitic
                  electrical drains from accessories, or extreme weather conditions. We can quickly test
                  your battery and charging system to identify the exact cause and provide the right solution.
                </p>
                <p className="text-slate-600 text-sm mt-3 italic">
                  We test your battery and charging system to find the exact cause and provide a clear plan.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                  Car won't start - what could be wrong?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  A car that won't start can have multiple causes: dead or weak battery, faulty starter
                  motor, ignition switch problems, fuel system issues, or security system malfunctions.
                  Our mobile diagnostic service will pinpoint the issue at your location, and in most cases,
                  we can fix it on the spot without needing to tow your vehicle.
                </p>
                <p className="text-slate-600 text-sm mt-3 italic">
                  Our mobile diagnostics identify the fault and resolve it for you on-site.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Power className="w-6 h-6 text-amber-600" />
                  How do I know if my alternator is failing?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Common signs of alternator failure include: dimming headlights, dashboard battery warning
                  light illuminated, flickering interior lights, difficulty starting the car, strange noises
                  (grinding or whining), burning smell from the engine bay, or frequent battery drain.
                  We can test your alternator's output and replace it if necessary.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-amber-600" />
                  What causes starter motor problems?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Starter motor issues can result from worn brushes inside the motor, damaged solenoid,
                  loose or corroded electrical connections, flywheel problems, or simply age and wear.
                  You might hear a clicking sound when trying to start, or nothing at all. Our technicians
                  can diagnose starter problems and either repair or replace the unit as needed.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <img src="/logofp.png" alt="" className="w-6 h-6" />
                  Can you fix electrical wiring problems?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Absolutely! Electrical wiring issues are our specialty. Whether it's damaged wiring from
                  rodents, corroded connections, short circuits, or faulty ground connections, we have the
                  expertise and tools to trace and repair electrical faults. We can also handle complete
                  rewiring for specific circuits or accessories that have been improperly installed.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-amber-600" />
                  Do you service all vehicle makes and models?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Yes! We service all makes and models of cars, pickup trucks, SUVs, and light commercial vehicles.
                  Our diagnostic equipment and expertise cover European, Japanese, American, and local brands.
                  Whether you drive a VW, Toyota, BMW, Ford, or any other vehicle, we have the knowledge
                  and experience to handle your auto electrical needs.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Users className="w-6 h-6 text-amber-600" />
                  How quickly can you respond to a call-out?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  We pride ourselves on fast response times. Depending on your location within Gauteng and
                  our current schedule, we typically arrive within 1-3 hours of your call. For urgent
                  situations like being stranded, we prioritize emergency call-outs. Contact us via WhatsApp
                  or email, and we'll give you an accurate arrival time.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Award className="w-6 h-6 text-amber-600" />
                  What are your rates and do you charge a call-out fee?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Our pricing is transparent and competitive. We charge a reasonable call-out fee that covers
                  travel and initial diagnostics, and this is often waived if you proceed with the repair.
                  Labor rates are hourly, and parts are charged at fair market prices. We always provide a
                  quote before proceeding with work, so there are no surprises. Contact us for a detailed
                  estimate based on your specific needs.
                </p>
              </div>

              {/* New FAQ Item */}
              <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-amber-600" />
                  My electric windows or central locking are not working. Can you fix that?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Yes, these are common <span className="font-semibold">car electrics faults</span>. We handle all types of electrical component repairs, including <span className="font-semibold">electric window repairs</span> and fixing <span className="font-semibold">central locking problems</span>. These issues are often caused by a faulty switch, a broken wire in the door harness, or a failed motor, all of which we can diagnose and repair on-site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
