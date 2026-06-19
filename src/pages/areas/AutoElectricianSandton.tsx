import AreaLandingTemplate from '../../components/AreaLandingTemplate';

export default function AutoElectricianSandton() {
  return (
    <AreaLandingTemplate
      areaName="Sandton"
      slug="auto-electrician-sandton"
      metaTitle="Auto Electrician Sandton | Footprints Mobile Auto"
      metaDescription="Need an auto electrician in Sandton? Mobile car electrical repairs at your office, home, or parking garage. Diagnostics, batteries and starters. Call 068 351 0676."
      heroSubtitle="On-site car electrical repairs across Sandton. We come to your office, home, or parking garage."
      introText={`Sandton is the financial hub of South Africa, and when your car breaks down here, time is money. Whether you are stuck in a parking basement at Sandton City, stranded at your office in Rivonia, or dealing with a flat battery in Bryanston, we get to you fast.

Our mobile auto electrician understands the Sandton area well. We know the access points to major business parks, we are familiar with the parking garages at Nelson Mandela Square and Sandton City, and we can navigate the side streets of Morningside and Sandown efficiently.

For busy professionals who cannot afford to lose half a day at a workshop, our mobile service is the perfect solution. We come to you, diagnose the fault on-site, and get you back on the road while you carry on with your day.`}
      suburbs={['Sandton CBD', 'Bryanston', 'Morningside', 'Rivonia', 'Woodmead', 'Sunninghill', 'Sandown', 'Hyde Park', 'Benmore', 'Atholl', 'Wendywood', 'Kramerville']}
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14340.5!2d28.0567!3d-26.1076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950d2b8a3a3c2f%3A0x3e1a2b4c5d6e7f80!2sSandton!5e0!3m2!1sen!2sza!4v1"
      faqs={[
        { question: 'Can you come to my office parking in Sandton?', answer: 'Yes, we regularly service vehicles at office parks and parking garages across Sandton, including Sandton City, Alice Lane, and business parks in Rivonia and Woodmead. We will come to wherever your car is parked.' },
        { question: 'How quickly can you get to Sandton from your base?', answer: 'We are based in Yeoville. Depending on traffic, we can usually reach Sandton within 30 to 45 minutes. During off-peak hours it can be as quick as 20 minutes via the M1.' },
        { question: 'Do you offer same-day service in Sandton?', answer: 'Yes, we offer same-day service for most call-outs. If you call in the morning, we can usually be with you the same day. For urgent breakdowns we prioritise getting to you as fast as possible.' },
      ]}
    />
  );
}
