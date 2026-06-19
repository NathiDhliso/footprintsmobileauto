import AreaLandingTemplate from '../../components/AreaLandingTemplate';

export default function AutoElectricianJohannesburg() {
  return (
    <AreaLandingTemplate
      areaName="Johannesburg"
      slug="auto-electrician-johannesburg"
      metaTitle="Auto Electrician Johannesburg | Footprints Mobile Auto"
      metaDescription="Mobile auto electrician in Johannesburg CBD and surrounds. Same-day car diagnostics, battery replacement, starter repairs and wiring fixes. Call 068 351 0676."
      heroSubtitle="Fast mobile auto electrical repairs across Johannesburg CBD and surrounding suburbs. We come to your location."
      introText={`Johannesburg's busy streets and dense traffic mean a car breakdown can throw your entire day off. Whether you're stuck in the CBD, parked at your office in Braamfontein, or stranded in Hillbrow, Footprints Mobile Auto comes directly to you.

We're based in Yeoville, which puts us right in the heart of Johannesburg. That means faster response times to the inner city and surrounding suburbs than most mobile services. No need to tow your car to a workshop. Our fully-equipped mobile auto electrician diagnoses and repairs electrical faults on the spot.

From flat batteries at the Carlton Centre parking to starter motor failures in Jeppestown, we have seen it all and we fix it all, on-site, same day.`}
      suburbs={['Johannesburg CBD', 'Braamfontein', 'Hillbrow', 'Yeoville', 'Berea', 'Jeppestown', 'Marshalltown', 'Fordsburg', 'Doornfontein', 'Newtown', 'Parktown', 'Auckland Park']}
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57548.4!2d28.0!3d-26.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg!5e0!3m2!1sen!2sza!4v1"
      faqs={[
        { question: 'How fast can you reach me in Johannesburg CBD?', answer: 'We are based in Yeoville, just minutes from the CBD. During normal traffic we can typically reach you within 20-30 minutes in central Johannesburg.' },
        { question: 'Can you come to underground parking garages in the city?', answer: 'Yes, we regularly service vehicles in parking garages across Johannesburg CBD, including shopping centres and office buildings. Just let us know the location and access details when you call.' },
        { question: 'Do you work on bakkies and light commercial vehicles?', answer: 'Absolutely. We work on all vehicle types including bakkies, light commercial vehicles, and passenger cars from all major brands like Toyota, VW, Ford, BMW, Isuzu, and more.' },
      ]}
    />
  );
}
