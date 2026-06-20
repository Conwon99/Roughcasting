import { services, type ServicePage } from "@/data/services";
import { business, brandName, citiesLabel } from "@/data/business";

export type LocationServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  localParagraph: string;
  image: string;
  imageAlt: string;
  serviceSlugs: string[];
  /** Matrix page SEO fields — used by locationServices.ts */
  matrixTitleSuffix: string;
  serviceNameLower: string;
  contractorPhrase: string;
  nearMePhrase: string;
  metaTemplate: (displayName: string) => string;
  introTemplate: (town: string) => string;
  localTemplate: (town: string, nearby: string[]) => string;
  bodyTemplate: (town: string) => string;
  faqTemplates: (town: string) => LocationServiceFaq[];
};

const brand = brandName();
const cities = citiesLabel();
const { assets, region } = business;

export const categories: ServiceCategory[] = [
  {
    slug: "primary-service-primary-city-secondary-city",
    name: "Primary Service",
    title: `Primary Service in ${cities}`,
    description: `Professional primary service installation and repairs across ${cities} and surrounding areas.`,
    intro: `${brand} provides primary service installation and repairs for homes and commercial spaces across ${region}. Work is completed neatly with practical advice and free quotes.`,
    localParagraph: `Properties across ${cities} and nearby towns often need solutions suited to local conditions. ${brand} works locally and can advise on the most practical option for your property.`,
    image: assets.gallery[0],
    imageAlt: `Primary service work by ${brand} in ${business.primaryCity}`,
    serviceSlugs: ["primary-service-installation", "primary-service-repairs"],
    matrixTitleSuffix: "Primary Service",
    serviceNameLower: "primary service",
    contractorPhrase: "contractor",
    nearMePhrase: "contractors near me",
    metaTemplate: (displayName) =>
      `Professional primary service in ${displayName} by ${brand}. Installation, repairs and free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides professional primary service installation and repairs in ${town}. Whether you need new work, section replacement or repairs, jobs are completed neatly with free quotes.`,
    localTemplate: (town, nearby) =>
      `Properties in ${town} often need work that suits local weather and ground conditions. If you are searching for a contractor near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From full installations to section repairs, ${brand} helps customers in ${town} with practical primary service solutions. Old materials can be removed where needed. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you provide primary service in ${town}?`,
        answer: `Yes. ${brand} installs and repairs primary services in ${town} and nearby areas. Free quotes are available.`,
      },
      {
        question: `Can you repair work in ${town}?`,
        answer: `Yes. ${brand} handles repairs and replacement sections in ${town}. Contact us with photos for a quicker quote.`,
      },
      {
        question: `How do I get a quote in ${town}?`,
        answer: `Call ${brand} or use the contact form with a brief description and your location in ${town}. There is no obligation to proceed.`,
      },
    ],
  },
  {
    slug: "secondary-service-primary-city-secondary-city",
    name: "Secondary Service",
    title: `Secondary Service in ${cities}`,
    description: `Secondary service across ${cities} and surrounding areas. Practical outdoor improvements with tidy workmanship.`,
    intro: `${brand} provides secondary service work so outdoor spaces feel safer, cleaner and easier to maintain.`,
    localParagraph: `Gardens and outdoor areas across ${region} often need seasonal attention. ${brand} helps local customers without leaving a mess behind.`,
    image: assets.gallery[2],
    imageAlt: `Secondary service by ${brand}`,
    serviceSlugs: ["secondary-service"],
    matrixTitleSuffix: "Secondary Service",
    serviceNameLower: "secondary service",
    contractorPhrase: "specialist",
    nearMePhrase: "secondary service near me",
    metaTemplate: (displayName) =>
      `Secondary service in ${displayName} by ${brand}. Outdoor improvements and free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides secondary service work in ${town}, planned around your space and how you use the area.`,
    localTemplate: (town, nearby) =>
      `Every property in ${town} is different. If you are searching for secondary service near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `${brand} helps improve outdoor spaces in ${town}. Work is planned around access and materials. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you offer secondary service in ${town}?`,
        answer: `Yes. ${brand} provides secondary service in ${town} and nearby areas. Get in touch for a free quote.`,
      },
      {
        question: `How do I book work in ${town}?`,
        answer: `Contact ${brand} with details of the work and your location in ${town}. Photos help us respond quickly.`,
      },
    ],
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getCategoryForService = (serviceSlug: string) =>
  categories.find((category) => category.serviceSlugs.includes(serviceSlug));

export const getServicesForCategory = (category: ServiceCategory): ServicePage[] =>
  category.serviceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is ServicePage => Boolean(service));

export const getRelatedServices = (serviceSlug: string): ServicePage[] => {
  const category = getCategoryForService(serviceSlug);
  if (!category) return [];
  return getServicesForCategory(category).filter((service) => service.slug !== serviceSlug);
};

export const getFormServiceOptions = (): string[] => [
  ...categories.map((category) => category.name),
  ...services.filter((service) => service.slug !== "free-quotes").map((service) => service.shortTitle),
  "Other / Not Sure",
];
