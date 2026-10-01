import { services, type ServicePage } from "@/data/services";
import { business, brandName, citiesLabel } from "@/data/business";

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
  ...services.map((service) => service.shortTitle),
  "Other / Not Sure",
];
