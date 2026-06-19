import ServiceLandingTemplate from '../../components/ServiceLandingTemplate';

export default function BatteryReplacement() {
  return (
    <ServiceLandingTemplate
      serviceName="Car Battery Replacement"
      slug="battery-replacement-johannesburg"
      metaTitle="Car Battery Replacement Johannesburg | Footprints"
      metaDescription="Flat car battery in Johannesburg? We deliver and fit new batteries on-site, test your alternator, and get you back on the road. Same-day mobile service."
      heroTitle={<>Car Battery Replacement <span className="block text-mono-200 mt-1 md:mt-2 text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight">Delivered and Fitted At Your Location</span></>}
      heroSubtitle="Mobile battery replacement across Johannesburg. We bring the battery to you."
      introText={`A flat battery is the number one reason people call us. It always seems to happen at the worst possible time, early morning, at a shopping centre, or right before an important meeting.

We carry a range of quality batteries on hand for most popular vehicle makes. When you call, we head straight to your location with the right battery, a professional battery tester, and a multimeter to check your charging system. No guesswork, no unnecessary parts.

What sets us apart is that we also test your alternator and check for parasitic drains. There is no point fitting a brand-new battery if something else is killing it. We make sure the real problem is solved before we leave.`}
      whatWeDoItems={[
        { title: 'On-Site Battery Testing', description: 'We test your existing battery with a professional load tester to confirm whether it genuinely needs replacing or if the fault lies elsewhere in the charging system.' },
        { title: 'Battery Supply and Fitment', description: 'We carry batteries for most vehicle makes and models. If your car needs an uncommon size, we source it quickly and come back the same day to fit it.' },
        { title: 'Alternator and Charging System Check', description: 'A new battery will not last if your alternator is not charging properly. We test the alternator output and voltage regulator to make sure everything works together.' },
        { title: 'Parasitic Drain Test', description: 'If your battery keeps going flat overnight, something is drawing power when the car is off. We perform a current draw test to find the culprit, often a faulty module or aftermarket accessory.' },
      ]}
      signsYouNeedService={[
        'Your car will not start and you hear a slow cranking sound or just clicking',
        'The battery is more than 3 years old and struggles in cold mornings',
        'You needed a jump-start more than once in the last few months',
        'Dashboard lights dim noticeably when you turn the key',
        'The battery warning light comes on while driving',
      ]}
      faqs={[
        { question: 'How long does a mobile battery replacement take?', answer: 'From the moment we arrive, a straightforward battery swap takes about 15 to 20 minutes. If we need to test your charging system or trace a drain, add another 15 to 30 minutes. We always make sure everything is working before we leave.' },
        { question: 'Do you supply the battery or do I need to buy one first?', answer: 'We bring the battery with us. We stock quality batteries for most common vehicles. If your car needs a specific or uncommon battery, we will let you know upfront and can usually source it the same day.' },
        { question: 'My battery keeps dying. Is it definitely the battery?', answer: 'Not always. A battery that keeps going flat could be caused by a faulty alternator, a parasitic drain from an aftermarket accessory, or even a wiring fault. That is why we test the full charging system, not just the battery.' },
      ]}
    />
  );
}
