import ServiceLandingTemplate from '../../components/ServiceLandingTemplate';

export default function JumpStart() {
  return (
    <ServiceLandingTemplate
      serviceName="Jump Start Service"
      slug="jump-start-johannesburg"
      metaTitle="Jump Start Service Johannesburg | Footprints"
      metaDescription="Flat battery and stranded in Johannesburg? Emergency jump start service. We also test WHY it died to prevent repeat call-outs. Call 068 351 0676."
      heroTitle={<>Jump Start Service <span className="block text-mono-200 mt-1 md:mt-2 text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight">Fast Emergency Battery Assistance</span></>}
      heroSubtitle="Emergency jump starts across Johannesburg and Gauteng. Fast response, proper diagnosis."
      introText={`Stranded with a flat battery is stressful, especially if it happens in an unfamiliar area, at night, or when you are on your way to something important. Our jump start service is designed to get you moving again as quickly as possible.

But here is what makes us different from a basic jump start: we do not just connect cables and send you on your way. We test WHY the battery died. Was it because you left the lights on? Or is there a deeper problem like a failing alternator or a parasitic drain? By spending an extra few minutes testing, we prevent you from being stranded again tomorrow.

If the battery is too far gone to hold a charge, we carry replacement batteries for most vehicles and can swap it out right there. One call, one visit, problem solved.`}
      whatWeDoItems={[
        { title: 'Emergency Jump Start', description: 'We carry professional-grade jump packs that can start even deeply discharged batteries. No need to flag down a stranger for cables.' },
        { title: 'Battery Health Test', description: 'After the jump, we test your battery with a load tester to see if it can still hold a charge or if it needs replacing.' },
        { title: 'Alternator Quick Check', description: 'We verify your alternator is actually charging the battery once the engine is running. A failing alternator is the most common reason for repeat flat batteries.' },
        { title: 'On-Site Battery Replacement', description: 'If the battery is dead beyond recovery, we can fit a new one on the spot. We carry common sizes for popular vehicle makes.' },
      ]}
      signsYouNeedService={[
        'Your car is completely dead and will not start at all',
        'The engine cranks slowly and then stops',
        'You left the headlights or interior light on overnight',
        'The car has been sitting unused for more than a week',
        'Your battery is old and struggles in cold weather',
      ]}
      faqs={[
        { question: 'How fast can you get to me for a jump start?', answer: 'We aim for the fastest possible response for jump start calls. In central Johannesburg we can often reach you within 30 minutes. In outer suburbs it may take up to an hour depending on traffic.' },
        { question: 'Is a jump start safe for modern cars with electronics?', answer: 'Yes, when done correctly. We use professional equipment with surge protection and connect in the proper sequence to avoid damage to sensitive electronics. This is safer than using random cables from a stranger.' },
        { question: 'My car keeps needing jump starts. Can you find out why?', answer: 'That is exactly what we do. Repeat flat batteries are usually caused by a failing alternator, a parasitic drain from a faulty module, or simply an old battery that can no longer hold charge. We test all three and give you a clear answer on the spot.' },
      ]}
    />
  );
}
