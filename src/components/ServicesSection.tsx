import { Search, Battery, Settings, Cable, Lightbulb, Fan, CarFront, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Search,
    title: 'Car Diagnostics',
    description:
      'Advanced computer diagnostics to pinpoint any car electrical fault. We use professional scan tools to read fault codes and identify issues fast — whether it\'s an engine warning light, sensor problem, or electrical gremlin.',
  },
  {
    icon: Battery,
    title: 'Battery Replacement & Jump-Starts',
    description:
      'Flat battery in Sandton? Stuck in Midrand? We come to you for on-site jump-starts and battery replacement. We test your battery and charging system to make sure you\'re not left stranded again.',
  },
  {
    icon: Settings,
    title: 'Starter & Alternator Repairs',
    description:
      'Car won\'t start? It could be a faulty starter motor or failing alternator. We diagnose and repair starter motors and alternators across Johannesburg and Gauteng — on-site, same day.',
  },
  {
    icon: Cable,
    title: 'Vehicle Wiring Repairs',
    description:
      'Faulty wiring causes all kinds of electrical problems — from dashboard lights to complete power loss. Our mobile auto electrician traces and repairs wiring faults in any vehicle make or model.',
  },
  {
    icon: Lightbulb,
    title: 'Lighting Solutions',
    description:
      'Headlights, tail lights, indicators, interior lights — if it\'s not working, we\'ll fix it. We handle bulb replacements, wiring repairs, and full lighting system diagnostics across Randburg, Roodepoort, and beyond.',
  },
  {
    icon: Fan,
    title: 'Cooling Fans & Wipers',
    description:
      'Overheating engine or wipers not working? We repair radiator cooling fan motors, wiper motors, and their electrical circuits. Fast call-out service in Kempton Park, Fourways, and Edenvale.',
  },
  {
    icon: CarFront,
    title: 'Non-Running Car Call-Outs',
    description:
      'Car completely dead? Don\'t pay for an expensive tow. Our mobile auto electrician will come to your location anywhere in Gauteng to diagnose and get your vehicle running again.',
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="services"
      ref={ref}
      className={`bg-slate-50 py-16 md:py-24 px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            Our Auto Electrical Services
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Professional mobile auto electrician services across Johannesburg and Gauteng.
            We diagnose and fix car electrical faults on-site — no towing needed.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-100 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-brand" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-dark mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
                {service.description}
              </p>

              {/* CTA Link */}
              <a
                href="tel:+27683510676"
                className="inline-flex items-center gap-1 text-brand font-semibold text-sm hover:text-brand-dark transition-colors group"
              >
                Call for this service
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
