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
  items: ServiceItem[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'maintenance',
    title: 'Oil changes & scheduled maintenance',
    summary:
      'Factory-scheduled maintenance, fluid services, and inspections that help prevent costly repairs.',
    image: siteImages.engine,
    imageAlt: 'Engine bay during service',
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
    image: siteImages.brakes,
    imageAlt: 'Brake rotor and caliper',
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
    image: siteImages.diagnostics,
    imageAlt: 'Mechanic inspecting under vehicle',
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
    image: siteImages.tires,
    imageAlt: 'Stack of vehicle tires',
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
    image: siteImages.engine,
    imageAlt: 'Performance car engine detail',
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
    image: siteImages.transmission,
    imageAlt: 'Transmission internal components',
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
    image: siteImages.ac,
    imageAlt: 'Vehicle on road',
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
    image: siteImages.diagnostics,
    imageAlt: 'Diagnostic equipment',
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
    image: siteImages.ac,
    imageAlt: 'Car climate control',
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
    image: siteImages.inspection,
    imageAlt: 'Car rear exhaust',
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
    image: siteImages.engine,
    imageAlt: 'Engine belts',
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
    image: siteImages.fleet,
    imageAlt: 'Commercial vehicle',
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
    image: siteImages.inspection,
    imageAlt: 'Vehicle inspection',
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
    image: siteImages.reception,
    imageAlt: 'Auto glass',
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
    image: siteImages.heroBay,
    imageAlt: 'Collision repair bay',
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
    image: siteImages.fleet,
    imageAlt: 'Fleet vehicles',
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
    image: siteImages.technician,
    imageAlt: 'ASE technician at work',
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
