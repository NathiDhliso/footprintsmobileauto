import ServiceLandingTemplate from '../../components/ServiceLandingTemplate';

export default function AlternatorRepair() {
  return (
    <ServiceLandingTemplate
      serviceName="Alternator Repair"
      slug="alternator-repair-johannesburg"
      metaTitle="Alternator Repair Johannesburg | Footprints"
      metaDescription="Alternator problems in Johannesburg? Mobile alternator testing, repair and replacement. We diagnose charging system faults on-site. Call 068 351 0676."
      heroTitle={<>Alternator Repair <span className="block text-mono-200 mt-1 md:mt-2 text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight">Charging System Experts On-Site</span></>}
      heroSubtitle="Mobile alternator diagnosis and repair across Johannesburg and Gauteng."
      introText={`Your alternator is what keeps your battery charged while the engine is running. When it fails, the battery slowly drains until the car dies completely, often while you are driving. Dimming headlights, a battery warning light, or a car that keeps needing jump-starts are all classic signs of an alternator problem.

We test your alternator output with professional diagnostic equipment right at your location. This tells us exactly how much voltage and current the alternator is producing and whether it is within the correct range for your vehicle. No guesswork.

If the alternator needs replacing, we handle the full job on-site: removal, sourcing a quality replacement, fitment, and a final charging system test to confirm everything is working correctly before we leave.`}
      whatWeDoItems={[
        { title: 'Alternator Output Testing', description: 'We measure the alternator voltage and current output at idle and under load to determine if it is charging the battery correctly.' },
        { title: 'Alternator Replacement', description: 'If the alternator is faulty, we remove it and fit a quality replacement on-site. We source alternators for most popular vehicle makes.' },
        { title: 'Drive Belt Inspection', description: 'A worn or slipping drive belt can cause the same symptoms as a faulty alternator. We inspect and replace the belt if needed.' },
        { title: 'Full Charging System Check', description: 'We test the voltage regulator, battery condition, and wiring connections to make sure the entire charging circuit is healthy.' },
      ]}
      signsYouNeedService={[
        'The battery warning light stays on while driving',
        'Headlights and dashboard lights dim at idle or while driving',
        'Your battery keeps going flat even after being replaced recently',
        'You hear a squealing or whining noise from the engine bay',
        'Electrical accessories like the radio or windows work intermittently',
      ]}
      faqs={[
        { question: 'Can you test my alternator without removing it?', answer: 'Yes, we test it in place on the vehicle using a multimeter and professional diagnostic tools. We measure output voltage at idle and under load, which tells us if the alternator is working correctly without needing to remove it first.' },
        { question: 'How much does an alternator replacement cost?', answer: 'The cost varies depending on your vehicle make and model. We give you a clear quote over the phone or on-site before starting any work. There are no hidden fees.' },
        { question: 'My battery light came on but the car still runs. Is it urgent?', answer: 'Yes, it is. The battery light means the alternator is not charging properly. Your car is running on stored battery power, which will eventually run out. You could stall in traffic. Call us as soon as possible so we can diagnose and fix it before you get stranded.' },
      ]}
    />
  );
}
