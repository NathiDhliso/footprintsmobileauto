import ServiceLandingTemplate from '../../components/ServiceLandingTemplate';

export default function CarDiagnostics() {
  return (
    <ServiceLandingTemplate
      serviceName="Mobile Car Diagnostics"
      slug="car-diagnostics-johannesburg"
      metaTitle="Mobile Car Diagnostics Johannesburg | Footprints"
      metaDescription="Check engine light on? Mobile car diagnostics in Johannesburg. Professional OBD scanning, fault code reading and electrical fault tracing. Call 068 351 0676."
      heroTitle={<>Mobile Car Diagnostics <span className="block text-mono-200 mt-1 md:mt-2 text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight">Find the Fault Before Spending Money</span></>}
      heroSubtitle="Professional on-site vehicle diagnostics across Johannesburg and Gauteng."
      introText={`Modern cars are complex electrical systems with dozens of sensors and control modules. When something goes wrong, a warning light on the dashboard could mean hundreds of different things. Without proper diagnostic equipment, you are guessing, and guessing costs money.

Our mobile diagnostics service brings professional-grade scan tools directly to your location. We read fault codes from the vehicle ECU, interpret what they actually mean, and trace the root cause of the problem. This is not just plugging in a cheap code reader. We understand how car electrical systems work and can pinpoint faults that generic scanners miss.

Before you spend money at a workshop replacing parts that might not be the problem, let us diagnose it properly first. A 30-minute diagnostic session can save you thousands in unnecessary repairs.`}
      whatWeDoItems={[
        { title: 'OBD Fault Code Scanning', description: 'We read diagnostic trouble codes from all vehicle modules including engine, transmission, ABS, airbag, and body control systems.' },
        { title: 'Live Data Analysis', description: 'We monitor live sensor data while the engine is running to identify intermittent faults and performance issues that stored codes alone cannot reveal.' },
        { title: 'Electrical Fault Tracing', description: 'For complex electrical problems, we trace circuits with a multimeter and wiring diagrams to find short circuits, open circuits, and faulty components.' },
        { title: 'Fault Code Clearing', description: 'After repairs, we clear stored fault codes and verify the fix by monitoring the system to confirm the problem is resolved.' },
      ]}
      signsYouNeedService={[
        'The check engine light or engine management light is on',
        'Your car is running rough, misfiring, or losing power',
        'The ABS, airbag, or traction control warning light is on',
        'Your car is using more fuel than usual for no obvious reason',
        'You have been told you need expensive repairs but want a second opinion',
      ]}
      faqs={[
        { question: 'What vehicles can you diagnose?', answer: 'We can diagnose most passenger cars, bakkies, and light commercial vehicles from all major brands including Toyota, VW, Ford, BMW, Mercedes-Benz, Hyundai, and Isuzu. If you are unsure, call us with your vehicle details and we will confirm.' },
        { question: 'Can you fix the problem after diagnosing it?', answer: 'If it is an electrical fault, yes. We can repair wiring issues, replace sensors, fix charging problems, and handle most auto electrical repairs on-site. For mechanical issues like engine or gearbox problems, we will refer you to a trusted workshop.' },
        { question: 'How much does a diagnostic scan cost?', answer: 'Call us for a quote on 068 351 0676. Pricing depends on how in-depth the diagnosis needs to be. A basic scan and code read is quick and affordable. Intermittent electrical fault tracing takes longer and costs more, but we will always agree a price before we start.' },
      ]}
    />
  );
}
