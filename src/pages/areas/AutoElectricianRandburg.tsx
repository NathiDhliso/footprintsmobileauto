import AreaLandingTemplate from '../../components/AreaLandingTemplate';

export default function AutoElectricianRandburg() {
  return (
    <AreaLandingTemplate
      areaName="Randburg"
      slug="auto-electrician-randburg"
      metaTitle="Auto Electrician Randburg | Footprints Mobile Auto"
      metaDescription="Mobile auto electrician in Randburg. Home call-outs for car diagnostics, battery replacement, alternator and wiring repairs. Call 068 351 0676."
      heroSubtitle="Car electrical call-outs across Randburg residential suburbs. Fast, friendly, on-site."
      introText={`Randburg is one of Johannesburg's most established residential areas, a patchwork of quiet, tree-lined suburbs where families have lived for decades. From the leafy streets of Linden and Northcliff to the bustling shopping strips at Cresta and Randburg Square, this part of the city has a character all its own.

When your car will not start in the driveway on a Monday morning in Fairland, or your headlights fail after fetching the kids from school in Blairgowrie, you do not want to arrange a tow truck across the city. Footprints Mobile Auto brings the workshop to your doorstep. We specialise in home call-outs across Randburg, pulling into your driveway, diagnosing the problem, and getting your car sorted while you are at home.

Our Randburg customers are often families with multiple vehicles, retirees who need reliable transport, or small business owners with bakkies and delivery vehicles. We understand that for most people here, the car is essential to daily life.`}
      suburbs={['Randburg', 'Ferndale', 'Northcliff', 'Linden', 'Fairland', 'Cresta', 'Robindale', 'Blairgowrie', 'Bordeaux', 'Kensington B', 'Northriding', 'Sundowner']}
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14340.5!2d28.0024!3d-26.0935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957349c7a7a0e9%3A0x4a3b2c1d0e9f8a7b!2sRandburg!5e0!3m2!1sen!2sza!4v1"
      faqs={[
        { question: 'Do you do home call-outs in Randburg?', answer: 'Absolutely. Home call-outs are one of our most common services in Randburg. We come to your driveway in Linden, Fairland, Blairgowrie, or anywhere else in the Randburg area and work on your car right there.' },
        { question: 'Can you help with a car that will not start at Cresta Shopping Centre?', answer: 'Yes, we regularly assist customers at Cresta, Randburg Square, and other shopping centres in the area. We will come to the parking lot, diagnose the issue, and fix it on-site if possible.' },
        { question: 'What is your response time to Randburg?', answer: 'From our base in Yeoville, we can typically reach Randburg within 25 to 40 minutes depending on traffic. We always give you an honest ETA on the phone before we head out.' },
      ]}
    />
  );
}
