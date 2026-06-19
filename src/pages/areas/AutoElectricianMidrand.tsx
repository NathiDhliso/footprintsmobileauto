import AreaLandingTemplate from '../../components/AreaLandingTemplate';

export default function AutoElectricianMidrand() {
  return (
    <AreaLandingTemplate
      areaName="Midrand"
      slug="auto-electrician-midrand"
      metaTitle="Auto Electrician Midrand | Footprints Mobile Auto"
      metaDescription="Mobile auto electrician in Midrand. Car diagnostics, battery replacement, starter and alternator repairs at your home or business park. Call 068 351 0676."
      heroSubtitle="On-site car electrical services in Midrand, covering estates, business parks, and the N1 corridor."
      introText={`Midrand sits right at the crossroads of Gauteng, halfway between Johannesburg and Pretoria, flanked by the N1 highway and growing faster than almost anywhere else in the province. It is home to sprawling business parks like Gallagher Estate and Waterfall City, new residential estates, and thousands of daily commuters.

If your car picks up an electrical fault in Midrand, you are often stuck in an awkward spot. You are too far from your JHB mechanic, and heading into Pretoria is not much better. That is exactly why our mobile auto electrician service works so well here. We come to you at your home in Carlswald, your office in Halfway House, or your parking spot in Waterfall Mall.

Midrand's mix of industrial areas, modern estates, and highway service roads means we see everything, from fleet vehicles at Commercia warehouses that need electrical diagnostics to family cars in Noordwyk that will not start on a cold Highveld morning.`}
      suburbs={['Midrand CBD', 'Carlswald', 'Halfway House', 'Glen Austin', 'Vorna Valley', 'Noordwyk', 'Waterfall', 'Commercia', 'Kyalami', 'Blue Hills', 'Summerset', 'Buccleuch']}
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14340.5!2d28.1268!3d-25.9876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956e0ce3a63d03%3A0x5a4f1c2b8e9d3f21!2sMidrand!5e0!3m2!1sen!2sza!4v1"
      faqs={[
        { question: 'Can you reach me if I am stuck near the N1 in Midrand?', answer: 'We can come to you if you have managed to pull over safely, for example at a petrol station off the Allandale or Buccleuch interchange, or in a parking area near the highway. For safety reasons we cannot work on the highway shoulder itself, but if you can get to a safe stopping point nearby, we will be there.' },
        { question: 'Do you service vehicles at business parks in Midrand?', answer: 'Yes, we regularly service vehicles at Waterfall Business Estate, Gallagher Convention Centre, Commercia industrial area, and office parks around Halfway House. We will come to your work parking and sort the problem out while you are on-site.' },
        { question: 'How long does it take to reach Midrand from your base?', answer: 'We are based in Yeoville, Johannesburg. Getting to Midrand typically takes 30 to 50 minutes depending on N1 traffic. Off-peak and weekends we can often be there in under 30 minutes.' },
      ]}
    />
  );
}
