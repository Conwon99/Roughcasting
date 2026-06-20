import { business, brandName, citiesLabel } from "@/data/business";

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  navTitle: string;
  parentCategorySlug: string | null;
  description: string;
  cardDescription: string;
  iconUrl: string;
  iconAlt: string;
  image: string;
  imageAlt: string;
  about: string;
  why: string;
  signsYouNeed: string;
  options: string;
  localContext: string;
  whatToExpect: string;
  whyChooseUs: string;
  benefits: string[];
  process: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const serviceIconBase = "https://c.animaapp.com/mial13ktyN5Jkh/assets";
const brand = brandName();
const cities = citiesLabel();
const { assets } = business;

export const services: ServicePage[] = [
  {
    slug: "primary-service-installation",
    title: "Primary Service Installation",
    shortTitle: "Primary Service",
    navTitle: "Primary Service",
    parentCategorySlug: "primary-service-primary-city-secondary-city",
    description: `Professional primary service installation in ${cities} and ${business.region}. Tidy workmanship and free quotes from ${brand}.`,
    cardDescription: `New installations and replacements completed neatly across ${cities} and surrounding areas.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Primary service icon",
    image: assets.gallery[0],
    imageAlt: `Primary service installation by ${brand} in ${business.primaryCity}`,
    about: `${brand} installs and replaces primary services for homes, gardens and commercial spaces across ${business.region}. Old materials can be removed and disposed of so the space is left clean and ready to use.`,
    why: `The team focuses on tidy workmanship, practical advice and solutions that suit the property rather than a one-size-fits-all approach.`,
    signsYouNeed: `You may need a new installation if existing work is worn, damaged or no longer fit for purpose. Gaps or failing sections can affect safety, privacy and how tidy the property looks. If posts, fixtures or materials are loose or splitting, replacement is often more cost-effective than repeated patch repairs. Waiting too long can let the problem spread and make disposal more awkward.`,
    options: `${brand} can install a full new run, replace tired sections one by one, or remove old materials and start fresh. If only part of the area needs attention, repairs may be enough. For customers unsure where to start, a free quote helps compare repair versus replacement. See our primary service pages for ${cities} for the full range of options.`,
    localContext: `Properties across ${cities} and ${business.region} often have varying ground conditions and access requirements. If you are searching for contractors near ${business.primaryCity} and ${business.secondaryCity}, ${brand} works across the local service area.`,
    whatToExpect: `When you get in touch, ${brand} will discuss the style, access and condition of the existing setup. A visit can be arranged if needed to measure up and provide a clear quote. Old materials can be removed where required, the area prepared, and new work installed neatly with the site left tidy.`,
    whyChooseUs: `${brand} offers free quotes, tidy workmanship and practical advice on the best option for your property. Customers across ${cities} recommend the team for reliable work, clear communication and a clean finish.`,
    benefits: [
      "New installations and replacement work.",
      "Old material removal and disposal included where needed.",
      "Practical solutions for homes and outdoor spaces.",
      `Free quotes across ${cities} and nearby areas.`,
    ],
    process: [
      "Discuss the style, access and condition of the existing setup.",
      "Measure up and provide a clear quote for the work.",
      "Remove old materials where required and prepare the area.",
      "Complete the installation neatly and leave the site tidy.",
    ],
    faq: [
      {
        question: "Can you remove and dispose of old materials?",
        answer: `Yes. Old materials can be removed and disposed of as part of the replacement work.`,
      },
      {
        question: "Do you repair individual sections?",
        answer: `Yes. If only part of the area needs attention, ${brand} can advise whether repair or replacement is the better option.`,
      },
      {
        question: `Do you offer primary service near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} provides primary service installation across ${cities} and ${business.region}. Contact us with your location for a free quote.`,
      },
    ],
  },
  {
    slug: "primary-service-repairs",
    title: "Primary Service Repairs",
    shortTitle: "Repairs",
    navTitle: "Repairs",
    parentCategorySlug: "primary-service-primary-city-secondary-city",
    description: `Primary service repairs in ${cities} and ${business.region}. Storm damage, section replacement and tidy workmanship. Free quotes.`,
    cardDescription: "Repairs, replacement sections and old material removal handled with tidy workmanship and practical advice.",
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Repairs service icon",
    image: assets.gallery[1],
    imageAlt: `Primary service repair work by ${brand}`,
    about: `Damage can quickly make a property feel exposed or untidy. ${brand} handles repairs, replacement sections and disposal of old materials across ${cities} and surrounding areas.`,
    why: "A focused repair can often restore function and appearance without replacing everything.",
    signsYouNeed: "Storm damage, wear and broken sections are common signs that repairs are needed. A leaning or failing section can affect the rest of the setup and make the area unsafe. If old materials are stacked on site or disposal is part of the job, getting it handled in one visit saves time.",
    options: `${brand} can repair individual sections, replace damaged parts, or remove old materials entirely. For larger areas, full installation may be the better long-term option. Repairs suit storm damage, isolated wear and tired sections that still have sound foundations.`,
    localContext: `Weather exposure and ground conditions are common across ${business.region}. If you need repairs near ${business.primaryCity} or ${business.secondaryCity}, ${brand} can assess damage and recommend the most practical repair or replacement.`,
    whatToExpect: `${brand} will inspect the damage, identify the cause and recommend repair or replacement. A clear quote is provided before work starts. Repairs are carried out neatly and old materials cleared away where agreed.`,
    whyChooseUs: `${brand} gives straightforward advice on repair versus replacement, with tidy workmanship and free quotes. Local customers value practical solutions without unnecessary cost.`,
    benefits: [
      "Repairs for damaged sections and tired areas.",
      "Replacement parts matched to practical needs.",
      "Old material disposal available as part of the job.",
      "Straightforward advice on repair versus replacement.",
    ],
    process: [
      "Inspect the damage and identify the cause.",
      "Recommend repair or replacement based on condition.",
      "Carry out the agreed repairs or removals.",
      "Clear old materials and leave the area tidy.",
    ],
    faq: [
      {
        question: "Can you repair storm-damaged work?",
        answer: `Yes. ${brand} can assess storm damage and recommend practical repairs or replacement sections.`,
      },
      {
        question: "Do you take away old materials?",
        answer: "Yes. Disposal can be included in the quote where required.",
      },
    ],
  },
  {
    slug: "secondary-service",
    title: "Secondary Service",
    shortTitle: "Secondary Service",
    navTitle: "Secondary Service",
    parentCategorySlug: "secondary-service-primary-city-secondary-city",
    description: `Secondary service in ${cities} and ${business.region}. Practical outdoor improvements with tidy workmanship. Free quotes.`,
    cardDescription: "Secondary service work to improve outdoor spaces with practical advice and free quotes.",
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Secondary service icon",
    image: assets.gallery[2],
    imageAlt: `Secondary service completed by ${brand}`,
    about: `${brand} provides secondary service work for customers across ${business.region}. Work is planned around access, waste removal and how you want to use the space.`,
    why: "The goal is to make outdoor areas safer, cleaner and easier to maintain without leaving customers with the mess.",
    signsYouNeed: "Overgrown areas, clutter and wear are signs you may need secondary service work. If the space feels unusable or hard to maintain, professional help can make a big difference.",
    options: `${brand} handles secondary service work planned around access and how much of the area needs attention. For customers also improving the space afterwards, related services can follow clearance work.`,
    localContext: `Properties across ${cities} and ${business.region} often need work suited to local weather and ground conditions. ${brand} works across the full service area with free quotes.`,
    whatToExpect: `${brand} reviews the areas that need attention and agrees the safest, tidiest approach. Work is carried out carefully with the area cleared and left neat.`,
    whyChooseUs: `Customers recommend ${brand} for reliable work, tidy finishing and clear quotes. The team focuses on making outdoor spaces easier to enjoy.`,
    benefits: [
      "Secondary service for overgrown or tired spaces.",
      "Waste removal and neat finishing where agreed.",
      "Free quotes for properties across the local service area.",
      "Practical advice before work starts.",
    ],
    process: [
      "Review the areas that need attention.",
      "Agree the safest and tidiest approach.",
      "Carry out the agreed work.",
      "Tidy the work area and advise on next steps where helpful.",
    ],
    faq: [
      {
        question: "Can you clear an overgrown area?",
        answer: `Yes. ${brand} handles clearances and tidy-ups to reclaim outdoor spaces.`,
      },
      {
        question: `Do you cover ${business.secondaryCity} as well as ${business.primaryCity}?`,
        answer: `Yes. The service area includes ${cities} and ${business.region}.`,
      },
    ],
  },
  {
    slug: "free-quotes",
    title: "Free Quotes",
    shortTitle: "Free Quotes",
    navTitle: "Free Quotes",
    parentCategorySlug: null,
    description: `Request a free quote from ${brand} for home services across ${cities} and ${business.region}.`,
    cardDescription: `Message or call ${brand} to discuss your project and arrange a free quote.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Free quote service icon",
    image: assets.gallery[5],
    imageAlt: `Home service work completed by ${brand}`,
    about: `If you are not sure where to start, send ${brand} a message or call with a few details about the work. The team can discuss your options and confirm coverage.`,
    why: "A quick conversation helps clarify the work, the service area and whether a visit is needed before quoting.",
    signsYouNeed: "If you know work is needed but are unsure of scope, cost or timing, a free quote is the best first step. Photos and your location help respond quickly with practical advice.",
    options: `${brand} quotes for all listed services. You can call, message through the contact form or email with details. No-obligation quotes help you compare options before committing.`,
    localContext: `${brand} covers ${cities} and towns across ${business.region}. If you are nearby, get in touch to confirm coverage.`,
    whatToExpect: "Send a message or call with the service you need. Share photos if helpful. The team will discuss the job, confirm the service area and arrange a visit or quote as needed.",
    whyChooseUs: `Free quotes, clear next steps and local service across ${cities}. Customers appreciate honest advice before work begins.`,
    benefits: [
      "Free quotes for all listed services.",
      "Clear next steps before work starts.",
      `Local service across ${cities} and ${business.region}.`,
      "Helpful advice on the most practical option.",
    ],
    process: [
      "Send a message or call with the service you need.",
      "Share photos or details if they help explain the job.",
      "Arrange a visit or quote where required.",
      "Agree the work, timing and practical details before starting.",
    ],
    faq: [
      {
        question: "What details should I send for a quote?",
        answer: "A short description, location and photos of the work area are helpful.",
      },
      {
        question: "Which areas do you quote for?",
        answer: `${brand} covers ${cities} and surrounding areas in ${business.region}.`,
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
