import ServiceLandingTemplate from '../../components/ServiceLandingTemplate';

export default function WiringRepair() {
  return (
    <ServiceLandingTemplate
      serviceName="Car Wiring Repair"
      slug="car-wiring-repair-johannesburg"
      metaTitle="Car Wiring Repair Johannesburg | Footprints"
      metaDescription="Car electrical wiring problems in Johannesburg? Mobile wiring fault tracing, short circuit repair and loom repairs. On-site service. Call 068 351 0676."
      heroTitle={<>Car Wiring Repair <span className="block text-mono-200 mt-1 md:mt-2 text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight">Electrical Fault Tracing and Repair</span></>}
      heroSubtitle="Mobile car wiring repairs across Johannesburg. Short circuits, cut wires, and loom damage fixed on-site."
      introText={`Wiring faults are some of the most frustrating car problems to deal with. They cause intermittent issues that come and go, they blow fuses repeatedly, and they can be incredibly difficult to track down without the right tools and experience. Many workshops struggle with wiring because it requires patience, electrical knowledge, and methodical fault-tracing skills.

Our mobile auto electrician specialises in electrical fault tracing. We use multimeters, wiring diagrams, and systematic testing to find the exact point of failure in your vehicle wiring. Whether it is a short circuit caused by a bad aftermarket installation, corrosion from water damage, or rodent damage to a wiring loom, we find it and fix it.

We see a lot of wiring problems caused by poorly installed aftermarket accessories like sound systems, tracking devices, and auxiliary lights. If someone has hacked into your car wiring and caused problems, we can trace the damage and repair it properly.`}
      whatWeDoItems={[
        { title: 'Electrical Fault Tracing', description: 'We systematically test circuits to find short circuits, open circuits, and high-resistance connections that cause intermittent faults.' },
        { title: 'Wiring Loom Repair', description: 'Damaged wiring looms from accidents, corrosion, or rodent damage can be repaired or sections replaced without needing an entirely new loom.' },
        { title: 'Aftermarket Wiring Fixes', description: 'Badly installed sound systems, trackers, and accessories often cause wiring problems. We remove the bad wiring and connect everything properly.' },
        { title: 'Connector and Terminal Repair', description: 'Corroded, loose, or damaged connectors cause many electrical faults. We clean, repair, or replace faulty connectors and terminals.' },
      ]}
      signsYouNeedService={[
        'Fuses blow repeatedly for the same circuit',
        'Electrical accessories work intermittently or stop working randomly',
        'You smell burning plastic or see melted wire insulation',
        'Problems started after an aftermarket installation like a sound system or tracker',
        'Dashboard warning lights come on and off for no clear reason',
      ]}
      faqs={[
        { question: 'Can you trace an intermittent electrical fault?', answer: 'Yes, intermittent faults are our specialty. We use systematic testing methods to isolate the faulty circuit and find the specific point of failure, even when the problem comes and goes.' },
        { question: 'My car has aftermarket wiring that is causing problems. Can you fix it?', answer: 'Absolutely. We regularly fix wiring problems caused by poorly installed sound systems, tracking devices, dashcams, and auxiliary lights. We trace the bad connections, remove the problematic wiring, and reconnect everything properly.' },
        { question: 'How long does wiring fault tracing take?', answer: 'It depends on the complexity. Simple faults like a blown fuse or loose connection can be found in 30 minutes. Complex intermittent faults in a large wiring loom can take 2 to 3 hours. We will keep you informed throughout.' },
      ]}
    />
  );
}
