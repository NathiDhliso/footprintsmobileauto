import ServiceLandingTemplate from '../../components/ServiceLandingTemplate';

export default function StarterMotorRepair() {
  return (
    <ServiceLandingTemplate
      serviceName="Starter Motor Repair"
      slug="starter-motor-repair-johannesburg"
      metaTitle="Starter Motor Repair Johannesburg | Footprints"
      metaDescription="Car clicking but not starting? Mobile starter motor diagnosis and repair in Johannesburg. On-site same-day service. Call 068 351 0676."
      heroTitle={<>Starter Motor Repair <span className="block text-mono-200 mt-1 md:mt-2 text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight">Diagnosed and Repaired On-Site</span></>}
      heroSubtitle="Mobile starter motor repairs across Johannesburg and Gauteng. We come to you."
      introText={`When you turn the key and hear nothing but a click, or the engine cranks weakly and gives up, a faulty starter motor is one of the most likely causes. It is a common problem that leaves you completely stranded because without a working starter, the engine simply cannot turn over.

Our mobile auto electrician carries the diagnostic tools needed to confirm whether the starter motor is actually the problem before replacing anything. Sometimes what seems like a starter issue is actually a dead battery, a corroded terminal, or a faulty ignition switch. We test everything systematically so you only pay for what actually needs fixing.

If the starter motor does need replacing, we handle the removal, sourcing, and fitment right at your location. No tow truck, no workshop wait times.`}
      whatWeDoItems={[
        { title: 'Starter Motor Diagnosis', description: 'We test the starter circuit including the battery, solenoid, ignition switch, and wiring to confirm the starter motor is genuinely at fault before replacing it.' },
        { title: 'Starter Motor Removal and Replacement', description: 'Once confirmed, we remove the faulty starter and fit a replacement on-site. We carry common starters for popular vehicle models.' },
        { title: 'Solenoid Testing', description: 'Sometimes only the solenoid is faulty, not the entire starter motor. We test it separately and can replace just the solenoid if that saves you money.' },
        { title: 'Starter Circuit Wiring Check', description: 'Corroded or damaged wiring between the battery, ignition, and starter can cause the same symptoms. We inspect and repair the full circuit.' },
      ]}
      signsYouNeedService={[
        'You hear a single click when turning the key but the engine does not crank',
        'The engine cranks very slowly even with a good battery',
        'You hear a grinding or whirring noise when starting the car',
        'The starter works intermittently, sometimes starting fine and other times not',
        'You smell burning or see smoke from the starter area',
      ]}
      faqs={[
        { question: 'How do I know if it is the starter motor or the battery?', answer: 'If the dashboard lights come on bright but the engine will not crank, it is more likely the starter. If everything is dim or dead, the battery is the first suspect. We test both on-site to give you a clear answer.' },
        { question: 'Can you repair a starter motor or does it need replacing?', answer: 'It depends on the fault. Some starters can be rebuilt with new brushes or a solenoid. Others are beyond repair and need full replacement. We will give you an honest assessment and quote before doing any work.' },
        { question: 'How long does a starter motor replacement take on-site?', answer: 'Most starter replacements take 1 to 2 hours depending on the vehicle. Some cars have the starter in an easy-to-access location, others require more disassembly. We will give you a time estimate when we arrive.' },
      ]}
    />
  );
}
