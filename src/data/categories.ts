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
const { assets, region, primaryCity } = business;

export const categories: ServiceCategory[] = [
  {
    slug: "roughcasting-ayrshire",
    name: "Roughcasting",
    title: `Roughcasting in ${cities}`,
    description: `Professional roughcasting for full houses, extensions and new-build sections across ${cities}.`,
    intro: `${brand} completes full house and extension roughcasting across ${region}, using durable render systems finished with your choice of chip for a long-lasting, weatherproof finish.`,
    localParagraph: `Homes across ${cities} and nearby towns face constant exposure to Scottish weather, and a sound roughcast finish keeps walls protected and looking sharp for years. ${brand} works locally and can advise on the best chip and colour for your property.`,
    image: assets.gallery[4],
    imageAlt: `Full house roughcasting by ${brand} in ${primaryCity}`,
    serviceSlugs: ["full-house-roughcasting", "extension-roughcasting"],
    matrixTitleSuffix: "Roughcasting",
    serviceNameLower: "roughcasting",
    contractorPhrase: "roughcaster",
    nearMePhrase: "roughcasting near me",
    metaTemplate: (displayName) =>
      `Professional roughcasting in ${displayName} by ${brand}. Full houses, extensions and free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides professional roughcasting in ${town}, covering full houses, extensions and new-build sections. Jobs are completed neatly with free quotes.`,
    localTemplate: (town, nearby) =>
      `Properties in ${town} need a roughcast finish that can handle exposed, coastal Ayrshire weather. If you are searching for a roughcaster near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From full house renders to extensions and new-build sections, ${brand} helps customers in ${town} achieve a durable roughcast finish in a range of chips and colours. Old, failing render can be stripped back to brick before the new system goes on. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you provide roughcasting in ${town}?`,
        answer: `Yes. ${brand} roughcasts full houses and extensions in ${town} and nearby areas. Free quotes are available.`,
      },
      {
        question: `Can you strip old render back to brick in ${town}?`,
        answer: `Yes. Failing or blown render can be stripped back to brickwork before the new roughcast system is applied in ${town}.`,
      },
      {
        question: `Is there a roughcaster near me in ${town}?`,
        answer: `Yes. ${brand} is a local roughcaster serving ${town} and surrounding Ayrshire. Contact us with your location for a free quote.`,
      },
    ],
  },
  {
    slug: "garden-wall-garage-roughcasting-ayrshire",
    name: "Garden Wall & Garage Roughcasting",
    title: `Garden Wall & Garage Roughcasting in ${cities}`,
    description: `Roughcasting for garden walls, garages and boundary walls across ${cities}, finished neatly with coping stones where needed.`,
    intro: `${brand} regularly roughcasts garden walls and garages across ${region}, from small boundary walls to full driveway and garage renders.`,
    localParagraph: `Garden walls and garages in ${cities} take a battering from the weather and everyday wear. ${brand} works locally and can match new roughcast work to the rest of the property.`,
    image: assets.gallery[2],
    imageAlt: `Garden wall roughcasting by ${brand} in ${primaryCity}`,
    serviceSlugs: ["garden-wall-roughcasting", "garage-roughcasting"],
    matrixTitleSuffix: "Garden Wall & Garage Roughcasting",
    serviceNameLower: "garden wall and garage roughcasting",
    contractorPhrase: "roughcaster",
    nearMePhrase: "garden wall roughcasting near me",
    metaTemplate: (displayName) =>
      `Garden wall and garage roughcasting in ${displayName} by ${brand}. Free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} roughcasts garden walls and garages in ${town}, from small boundary walls to full garage renders finished with matching chips.`,
    localTemplate: (town, nearby) =>
      `Garden walls and garages in ${town} are exposed to the same weather as the rest of the house. If you are searching for garden wall roughcasting near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `${brand} completes garden wall and garage roughcasting jobs in ${town} of all sizes, often finished with coping stones for a neat, durable edge. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you roughcast garden walls in ${town}?`,
        answer: `Yes. ${brand} roughcasts garden and boundary walls of all sizes in ${town}, with free quotes available.`,
      },
      {
        question: `Can you roughcast a garage in ${town}?`,
        answer: `Yes. ${brand} completes garage roughcasting in ${town}, matched to the rest of the property where needed.`,
      },
    ],
  },
  {
    slug: "smooth-render-ayrshire",
    name: "Smooth Render",
    title: `Smooth Render in ${cities}`,
    description: `Smooth render finishes and render repairs across ${cities}, giving properties a clean, modern painted finish.`,
    intro: `${brand} applies smooth render finishes across ${region} for customers who want a contemporary, paintable exterior rather than a traditional chip finish.`,
    localParagraph: `Smooth render is a popular choice for extensions and refurbishments across ${cities}. ${brand} prepares the surface properly so the finish stays sound for years.`,
    image: assets.gallery[1],
    imageAlt: `Smooth render finish by ${brand} in ${primaryCity}`,
    serviceSlugs: ["smooth-render", "render-repairs-patch-ups"],
    matrixTitleSuffix: "Smooth Render",
    serviceNameLower: "smooth render",
    contractorPhrase: "render specialist",
    nearMePhrase: "smooth render near me",
    metaTemplate: (displayName) =>
      `Smooth render in ${displayName} by ${brand}. Render repairs, patch-ups and free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} applies smooth render finishes and carries out render repairs in ${town}, giving properties a clean, contemporary exterior.`,
    localTemplate: (town, nearby) =>
      `Extensions and refurbishments in ${town} often call for a smooth, paintable render finish. If you are searching for a render specialist near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `Whether it is a full smooth render or a patch repair to cracked or blown areas, ${brand} helps customers in ${town} get a sound, tidy finish. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you apply smooth render in ${town}?`,
        answer: `Yes. ${brand} applies smooth render finishes in ${town} and nearby areas, with free quotes available.`,
      },
      {
        question: `Can you repair cracked render in ${town}?`,
        answer: `Yes. ${brand} patches and repairs damaged render sections in ${town} rather than always requiring a full re-render.`,
      },
    ],
  },
  {
    slug: "plastering-ayrshire",
    name: "Plastering",
    title: `Plastering in ${cities}`,
    description: `Interior plastering and plaster repairs across ${cities}, finished smooth and ready for decoration.`,
    intro: `${brand} carries out interior plastering across ${region}, from full skims to patch repairs on damaged walls and ceilings.`,
    localParagraph: `Older properties across ${cities} often need plaster repaired or refreshed as part of wider renovation work. ${brand} works cleanly and leaves surfaces ready for painting.`,
    image: assets.gallery[3],
    imageAlt: `Plastering work completed by ${brand} in ${primaryCity}`,
    serviceSlugs: ["interior-plastering"],
    matrixTitleSuffix: "Plastering",
    serviceNameLower: "plastering",
    contractorPhrase: "plasterer",
    nearMePhrase: "plasterer near me",
    metaTemplate: (displayName) =>
      `Plastering in ${displayName} by ${brand}. Interior plastering and free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides interior plastering in ${town}, from full skims to smaller patch repairs.`,
    localTemplate: (town, nearby) =>
      `Older homes in ${town} often need plaster repaired before decorating. If you are searching for a plasterer near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `${brand} plasters walls and ceilings in ${town}, leaving a smooth surface ready for painting or wallpapering. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you offer plastering in ${town}?`,
        answer: `Yes. ${brand} provides interior plastering in ${town} and nearby areas, with free quotes available.`,
      },
      {
        question: `Is there a plasterer near me in ${town}?`,
        answer: `Yes. ${brand} is a local plasterer serving ${town} and surrounding Ayrshire.`,
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
