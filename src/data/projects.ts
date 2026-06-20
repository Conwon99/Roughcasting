import { business, brandName } from "@/data/business";

export type ProjectPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  details: string;
  highlights: string[];
  serviceType: string;
  location: string;
  image: string;
  imageAlt: string;
};

const brand = brandName();
const { assets } = business;

export const projects: ProjectPage[] = [
  {
    slug: "primary-service-project",
    title: `Primary Service Project in ${business.primaryCity}`,
    description: `Primary service work completed in ${business.primaryCity} by ${brand}. Tidy finishing and free quotes.`,
    intro: `This project involved primary service work for a local property, completed with tidy workmanship and clear communication throughout.`,
    details: `${brand} assessed the full scope, prepared the area and completed the work to a high standard. Old materials were cleared away and the customer was left with a clean, usable space. Similar work is available across ${business.region}.`,
    highlights: [
      "Full scope assessed before work started",
      "Materials removed and area left tidy",
      "Free quote provided in advance",
      "Practical advice for ongoing maintenance",
    ],
    serviceType: "Primary Service",
    location: business.primaryCity,
    image: assets.gallery[0],
    imageAlt: `Primary service project by ${brand} in ${business.primaryCity}`,
  },
  {
    slug: "secondary-service-project",
    title: `Secondary Service in ${business.secondaryCity}`,
    description: `Secondary service completed in ${business.secondaryCity} by ${brand}. Free quotes available.`,
    intro: `${brand} completed secondary service work to improve an outdoor space for a local customer.`,
    details: `The project was planned around access and how the customer uses the space. Work was completed neatly with waste removed and the area left ready to use. ${brand} regularly completes similar projects across the service area.`,
    highlights: [
      "Work planned around customer requirements",
      "Area cleared and waste removed",
      "Tidy finish throughout",
      "Free quote before work began",
    ],
    serviceType: "Secondary Service",
    location: business.secondaryCity,
    image: assets.gallery[2],
    imageAlt: `Secondary service project by ${brand}`,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
