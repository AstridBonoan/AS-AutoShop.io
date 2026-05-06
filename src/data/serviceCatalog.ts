import { siteImages } from './siteImages'

export type ServiceItem = {
  name: string
  detail?: string
}

export type ServiceCategory = {
  id: string
  title: string
  summary: string
  image: string
  imageAlt: string
  /** Extra copy shown beside the image on the detail page */
  detailParagraphs: string[]
  items: ServiceItem[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'maintenance',
    title: 'Oil changes & scheduled maintenance',
    summary:
      'Factory-scheduled maintenance, fluid services, and inspections that help prevent costly repairs.',
    image: siteImages.serviceMaintenanceOil,
    imageAlt: 'Vehicle in the shop for oil change and scheduled maintenance',
    detailParagraphs: [
      'Regular oil changes and factory-scheduled maintenance are the simplest way to extend engine life and catch small issues before they turn into major repairs. We follow your manufacturer’s recommended intervals and adjust for your driving habits, climate, and mileage.',
      'Every visit includes a careful look at fluids, filters, and high-wear items so you know what is in good shape today and what we should plan for next. You get clear priorities and honest recommendations—never pressure to fix what can safely wait.',
    ],
    items: [
      { name: 'Lube, oil & filter change' },
      { name: 'Fluid checks & top-offs' },
      { name: 'Air & cabin filter replacement' },
      { name: 'Fuel system cleaning & induction service' },
      { name: 'Multi-point vehicle inspection' },
      { name: 'Seasonal & mileage-based maintenance' },
    ],
  },
  {
    id: 'brakes',
    title: 'Brake repair & service',
    summary:
      'Complete brake system care—from pads and rotors to hydraulics and parking brake adjustment.',
    image: siteImages.serviceBrakes,
    imageAlt: 'Brake rotor and caliper',
    detailParagraphs: [
      'Your brake system is your first line of defense in traffic. We inspect pads, rotors, fluid, lines, and electronic aids so you can stop with confidence in wet weather, heavy traffic, or emergency situations.',
      'When it is time for service, we explain what we measured, what is worn, and what options fit your budget—from pad replacement to full rotor and hydraulic work. Our goal is safe, predictable braking with no surprises on the estimate.',
    ],
    items: [
      { name: 'Brake inspection' },
      { name: 'Pad & rotor replacement' },
      { name: 'Caliper service & replacement' },
      { name: 'Brake fluid flush' },
      { name: 'ABS & traction control diagnostics' },
      { name: 'Parking brake adjustment' },
    ],
  },
  {
    id: 'steering-suspension',
    title: 'Steering & suspension',
    summary:
      'Comfortable ride quality, predictable handling, and even tire wear start with a sound suspension.',
    image: siteImages.serviceSteeringSuspension,
    imageAlt: 'Steering and suspension service bay',
    detailParagraphs: [
      'Steering and suspension parts absorb thousands of small impacts every mile. When shocks, struts, bushings, or steering components wear out, you may notice pulling, clunks, uneven tire wear, or a ride that feels loose or harsh.',
      'We road-test when needed, inspect under the vehicle, and recommend repairs in the order that restores safety and comfort. Addressing alignment-related parts together often saves tire cost down the road.',
    ],
    items: [
      { name: 'Shocks & struts' },
      { name: 'Ball joints & bushings' },
      { name: 'Tie rods & alignment-related parts' },
      { name: 'Power steering diagnosis & repair' },
      { name: 'Wheel bearing service' },
    ],
  },
  {
    id: 'tires-alignment',
    title: 'Tires, wheels & alignment',
    summary:
      'Mounting, balancing, rotations, TPMS, and precision alignments for longer tire life.',
    image: siteImages.serviceTires,
    imageAlt: 'Stack of vehicle tires',
    detailParagraphs: [
      'Tires are the only part of your car that touches the road. Proper inflation, rotation, balancing, and alignment help you get maximum life from your investment and keep handling predictable in corners and braking.',
      'Whether you need a single repair, a new set of tires, or a precision alignment after suspension work, we match products to your vehicle and how you drive. TPMS warnings and seasonal swaps are handled here too.',
    ],
    items: [
      { name: 'Tire sales, installation & repair' },
      { name: 'Wheel balancing & rotation' },
      { name: 'Four-wheel & two-wheel alignment' },
      { name: 'TPMS service & sensor replacement' },
      { name: 'Nitrogen fill (where available)' },
    ],
  },
  {
    id: 'engine',
    title: 'Engine repair & performance',
    summary:
      'From tune-ups to major engine work—we diagnose first, then recommend the right fix.',
    image: siteImages.serviceEngineRepair,
    imageAlt: 'Engine bay during diagnosis or repair',
    detailParagraphs: [
      'Engine problems can show up as a check-engine light, rough idle, loss of power, odd noises, or new smells. We start with accurate testing—scan data, mechanical checks, and experience—so we fix the real cause, not just the symptom.',
      'From tune-ups and fuel system service to timing components and oil leaks, we explain what failed, why it matters, and what happens if you defer the repair. You stay in control of the plan.',
    ],
    items: [
      { name: 'Check engine light & drivability' },
      { name: 'Engine tune-up & fuel injection' },
      { name: 'Timing belt & timing chain service' },
      { name: 'Head gasket & cooling-related engine repair' },
      { name: 'Oil leak diagnosis & repair' },
      { name: 'Engine replacement (select vehicles)' },
    ],
  },
  {
    id: 'transmission',
    title: 'Transmission & drivetrain',
    summary:
      'Fluid services, clutch work, axles, and transfer case care for smooth power delivery.',
    image: siteImages.serviceTransmission,
    imageAlt: 'Transmission internal components',
    detailParagraphs: [
      'The transmission and drivetrain deliver power to the wheels smoothly and quietly. Fluid condition, clutch wear, and CV joints all affect shift quality, acceleration, and whether you hear clicks or clunks under load.',
      'We perform fluid services to manufacturer specs, diagnose slipping or harsh shifts, and repair axles and differentials. For major internal work, we walk you through options so you can choose what fits your timeline and budget.',
    ],
    items: [
      { name: 'Transmission fluid service & flush' },
      { name: 'Clutch repair & replacement' },
      { name: 'CV axles, boots & joints' },
      { name: 'Driveshaft & differential service' },
      { name: '4WD & AWD system diagnosis' },
      { name: 'Transmission rebuild & replacement (consultation)' },
    ],
  },
  {
    id: 'cooling',
    title: 'Cooling system',
    summary:
      'Radiator, water pump, thermostat, and hoses—keep overheating off your dashboard.',
    image: siteImages.serviceCooling,
    imageAlt: 'Cooling system and radiator service',
    detailParagraphs: [
      'An overheating engine can leave you stranded and cause expensive head gasket or cylinder damage. The cooling system is more than a radiator—it includes the water pump, thermostat, fans, hoses, and the right coolant for your engine.',
      'We pressure-test for leaks, verify thermostat operation, and flush or service coolant on a schedule that matches your vehicle. Catching a weak water pump or seeping hose early is always cheaper than a tow and major repair.',
    ],
    items: [
      { name: 'Cooling system pressure test' },
      { name: 'Radiator & hose replacement' },
      { name: 'Water pump & thermostat' },
      { name: 'Coolant flush & maintenance' },
      { name: 'Heater core diagnosis' },
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical & electronic systems',
    summary:
      'Modern vehicles depend on clean power and accurate data—we trace wiring and module issues carefully.',
    image: siteImages.serviceElectrical,
    imageAlt: 'Automotive electrical testing and wiring',
    detailParagraphs: [
      'Today’s vehicles rely on networks of modules, sensors, and wiring. A single bad ground or worn alternator can cause warning lights, dead batteries, or accessories that work intermittently.',
      'We test starting and charging systems, trace wiring faults, and diagnose body-control and lighting issues methodically. You get a plain-language summary of what we found and what it will take to make it right.',
    ],
    items: [
      { name: 'Battery, starting & charging test' },
      { name: 'Alternator & starter replacement' },
      { name: 'Lighting (interior & exterior)' },
      { name: 'Power accessories & wiring repair' },
      { name: 'Computer & module diagnostics' },
    ],
  },
  {
    id: 'ac-heat',
    title: 'A/C & heating',
    summary:
      'Stay comfortable year-round with leak detection, recharge, and component replacement.',
    image: siteImages.serviceClimateAc,
    imageAlt: 'Climate control and cabin comfort systems',
    detailParagraphs: [
      'A comfortable cabin is not a luxury when you commute daily or drive family in summer heat. Weak A/C often starts with refrigerant level, leaks, or a tired compressor—each needs a different fix.',
      'We evaluate heater core and blower concerns in winter the same way: test first, then recommend the smallest effective repair. Our goal is reliable temperature control without replacing parts you do not need.',
    ],
    items: [
      { name: 'A/C performance test & recharge' },
      { name: 'Leak detection & repair' },
      { name: 'Compressor & condenser service' },
      { name: 'Blower motor & blend door issues' },
      { name: 'Heater repair' },
    ],
  },
  {
    id: 'exhaust',
    title: 'Exhaust system',
    summary:
      'Emissions compliance, noise reduction, and efficient flow from manifold to tailpipe.',
    image: siteImages.serviceExhaust,
    imageAlt: 'Exhaust system inspection and repair',
    detailParagraphs: [
      'The exhaust system routes harmful gases away from passengers, quiets engine noise, and helps your engine breathe efficiently. Rust, impact damage, and failed gaskets can increase noise and trigger emissions codes.',
      'We inspect from the manifold to the tailpipe, repair leaks where it makes sense, and replace components with quality parts that fit your vehicle’s specifications and local regulations.',
    ],
    items: [
      { name: 'Exhaust inspection & repair' },
      { name: 'Catalytic converter (where permitted)' },
      { name: 'Muffler & resonator replacement' },
      { name: 'Exhaust manifold & gasket' },
    ],
  },
  {
    id: 'belts-hoses',
    title: 'Belts & hoses',
    summary:
      'Prevent roadside breakdowns by replacing worn rubber before it fails.',
    image: siteImages.serviceBeltsHoses,
    imageAlt: 'Serpentine belt and engine bay hoses',
    detailParagraphs: [
      'Rubber belts and hoses harden and crack over time—often without warning until one fails on the highway. The serpentine belt drives your alternator, water pump, and A/C compressor on many engines; a timing belt failure can destroy an interference engine.',
      'We inspect routing, tensioners, and pulleys, then replace components on a schedule that matches your manufacturer and what we see under the hood. Preventive service here is some of the best money you can spend on reliability.',
    ],
    items: [
      { name: 'Serpentine belt & tensioner' },
      { name: 'Timing belt (interference engines)' },
      { name: 'Radiator & heater hoses' },
      { name: 'Vacuum hose diagnosis' },
    ],
  },
  {
    id: 'diesel',
    title: 'Diesel engine service',
    summary:
      'Diesel-specific maintenance and repairs for hard-working trucks and SUVs.',
    image: siteImages.serviceDiesel,
    imageAlt: 'Diesel truck service bay',
    detailParagraphs: [
      'Diesel engines reward consistent maintenance: clean fuel, fresh filters, and attention to turbo and emissions systems keep trucks and SUVs dependable for work and towing.',
      'If you are dealing with hard starts, loss of power, or warning lights, we diagnose with the right tools and experience for diesel fuel systems—not just gasoline-engine assumptions.',
    ],
    items: [
      { name: 'Fuel filter & system service' },
      { name: 'Glow plug & hard-start diagnosis' },
      { name: 'Turbo & emissions-related service' },
      { name: 'Diesel particulate filter consultation' },
    ],
  },
  {
    id: 'inspection',
    title: 'State inspection & emissions',
    summary:
      'Safety and emissions testing where required—plus pre-test checks so you pass with confidence.',
    image: siteImages.serviceStateInspection,
    imageAlt: 'Safety and emissions inspection',
    detailParagraphs: [
      'State and emissions programs exist to keep unsafe vehicles off the road and air quality in check. Failing a test is frustrating—we help you understand exactly what the inspector flagged and what repairs will bring you into compliance.',
      'We also perform courtesy pre-checks before your official appointment when you want the best chance to pass on the first try. Insurance and trip inspections are available for many vehicles as well.',
    ],
    items: [
      { name: 'State safety inspection' },
      { name: 'Emissions / OBD testing' },
      { name: 'Pre-inspection courtesy check' },
      { name: 'Insurance & pre-trip inspections' },
    ],
  },
  {
    id: 'glass',
    title: 'Glass repair & replacement',
    summary:
      'Chips, cracks, and glass replacement coordinated with your schedule.',
    image: siteImages.serviceGlass,
    imageAlt: 'Windshield and auto glass service',
    detailParagraphs: [
      'Small chips can spread into cracks that fail inspection or obscure your view. Repairing glass early is often cheaper than a full replacement and may be covered by insurance with no deductible.',
      'When replacement is the right call, we use quality glass and adhesives so sensors and cameras (where equipped) are handled with care. Door glass and regulator problems are diagnosed as mechanical or electrical issues before we quote work.',
    ],
    items: [
      { name: 'Windshield chip repair' },
      { name: 'Windshield replacement' },
      { name: 'Door glass & regulators' },
    ],
  },
  {
    id: 'body-collision',
    title: 'Body & collision (select locations)',
    summary:
      'Cosmetic and structural repairs coordinated with your insurer when applicable.',
    image: siteImages.serviceCollision,
    imageAlt: 'Collision and body repair workspace',
    detailParagraphs: [
      'After an accident, you need a clear estimate, a realistic timeline, and a shop that communicates with your insurer when applicable. We coordinate estimates and explain structural versus cosmetic work in plain language.',
      'For paint, structural, or specialty collision needs outside our bays, we work with trusted partner shops so you still have a single point of contact for questions and follow-up.',
    ],
    items: [
      { name: 'Collision estimates' },
      { name: 'Paint & dent repair (partner network)' },
      { name: 'Structural alignment referral' },
    ],
  },
  {
    id: 'fleet-roadside',
    title: 'Fleet, towing & convenience',
    summary:
      'We help businesses stay on the road and can coordinate towing when you are stranded.',
    image: siteImages.serviceFleet,
    imageAlt: 'Fleet vehicles lined up for service',
    detailParagraphs: [
      'When vehicles are how your business earns revenue, downtime is expensive. We offer prioritized scheduling, bundled maintenance plans, and consistent documentation so you can track cost per mile across your small fleet.',
      'If a driver is stranded, we can help coordinate towing to our shop or a trusted partner and keep you updated until the vehicle is back in service. Ask about after-hours drop-off and ride options for busy teams.',
    ],
    items: [
      { name: 'Fleet maintenance programs' },
      { name: 'Priority scheduling for small fleets' },
      { name: 'Towing coordination' },
      { name: 'After-hours drop-off (where available)' },
      { name: 'Ride-share / shuttle options (ask advisor)' },
    ],
  },
  {
    id: 'other',
    title: 'Additional services',
    summary:
      'Odd noises, warning lights, and “something feels off”—start with a thorough diagnosis.',
    image: siteImages.serviceGeneralDiagnostics,
    imageAlt: 'General diagnostics and comprehensive inspection',
    detailParagraphs: [
      'Some concerns do not fit neatly into one category—a vibration only at highway speed, an intermittent warning light, or a noise that comes and goes. Those jobs need patient testing, good notes, and experience across multiple vehicle systems.',
      'We also perform pre-purchase inspections for used-car buyers, seasonal checkups before long trips, and referrals for specialized work such as ADAS calibrations when your vehicle’s cameras or radar need professional attention.',
    ],
    items: [
      { name: 'Pre-purchase inspection' },
      { name: 'Road trip / seasonal checkup' },
      { name: 'Noise, vibration & harshness (NVH)' },
      { name: 'Hybrid battery & high-voltage basics (select models)' },
      { name: 'ADAS calibration referrals (camera/radar)' },
    ],
  },
]

export function getServiceById(id: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.id === id)
}
