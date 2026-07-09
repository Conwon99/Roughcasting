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
    slug: "full-house-re-roughcast-irvine",
    title: `Full House Re-Roughcast in ${business.primaryCity}`,
    description: `Full house roughcast completed in ${business.primaryCity} by ${brand}, stripped back to brick and finished in a matching chip.`,
    intro: `The old roughcast on this ${business.primaryCity} property was completely coming away from the wall, so the customer needed it sorted quickly.`,
    details: `${brand} stripped the failing render right back to the brickwork before base coating and beading the walls ready for the next stage. The property was finished in a similar chip to the rest of the house so the new render blended in seamlessly. Work was carried out to a tight timescale with the customer kept updated throughout, and the site was left clean at the end of each day. Similar full house re-renders are completed regularly across ${business.region}.`,
    highlights: [
      "Failing render stripped back to brickwork",
      "Base coat and beading applied before finishing",
      "Chip matched closely to the rest of the property",
      "Completed within the agreed timescale",
    ],
    serviceType: "Full House Roughcasting",
    location: business.primaryCity,
    image: assets.gallery[0],
    imageAlt: `Full house roughcast completed by ${brand} in ${business.primaryCity}`,
  },
  {
    slug: "garden-wall-roughcast-kilwinning",
    title: `Garden Wall Roughcast & Coping in ${business.secondaryCity}`,
    description: `Garden wall roughcast and finished with coping stones in ${business.secondaryCity} by ${brand}.`,
    intro: `This project involved a new garden wall roughcast from base coat through to a finished chip, capped with coping stones for a neat edge.`,
    details: `${brand} built up the finish in stages, base coating and beading the wall before applying the roughcast chip. Coping stones were fitted along the top of the wall to protect it from the weather and give a clean, finished look. The wall now sits neatly alongside the driveway and front garden, matching the style of surrounding properties. Garden wall roughcasting like this is one of the most requested jobs across ${business.region}, from small boundary walls to larger retaining walls.`,
    highlights: [
      "New garden wall roughcast from base coat to finished chip",
      "Coping stones fitted for a durable, tidy edge",
      "Finish suited to the surrounding streetscape",
      "Free quote provided before work began",
    ],
    serviceType: "Garden Wall Roughcasting",
    location: business.secondaryCity,
    image: assets.gallery[2],
    imageAlt: `Garden wall roughcasting and coping stones by ${brand} in ${business.secondaryCity}`,
  },
  {
    slug: "smooth-render-refresh-troon",
    title: "Smooth Render Refresh in Troon",
    description: `Smooth render finish applied to a courtyard and boundary wall in Troon by ${brand}.`,
    intro: `The customer wanted a clean, contemporary smooth render finish rather than a traditional roughcast chip for this courtyard and boundary wall.`,
    details: `${brand} prepared the surface, base coated and beaded the walls, then applied a smooth render system finished in white. The result is a crisp, modern look that ties in the steps, walls and courtyard area into one consistent finish. Smooth render is an increasingly popular choice across Ayrshire for extensions and refurbishments where a contemporary exterior is wanted instead of a textured chip finish.`,
    highlights: [
      "Smooth, paintable render system applied",
      "Finish carried across walls, steps and courtyard",
      "Base coat and beading completed before finishing",
      "Free quote agreed before work started",
    ],
    serviceType: "Smooth Render",
    location: "Troon",
    image: assets.gallery[1],
    imageAlt: `Smooth render finish completed by ${brand} in Troon`,
  },
  {
    slug: "garden-wall-granite-copes-dreghorn",
    title: "Garden Wall with Granite Copes in Dreghorn",
    description: `Finished garden wall roughcast with polished granite coping stones in Dreghorn by ${brand}.`,
    intro: `This L-shaped garden wall was roughcast and finished with polished granite coping stones for a premium, durable finish.`,
    details: `${brand} completed the roughcast in a ribbed, textured chip and capped the full run of wall with polished granite copes. The finish gives the wall a crisp, defined edge that will hold up well against the weather for years to come. Jobs like this are common across ${business.region}, where customers want a garden wall finish that matches the quality of the house render.`,
    highlights: [
      "Ribbed roughcast texture applied to the full wall run",
      "Polished granite coping stones fitted along the top",
      "Neat, durable finish designed to last",
      "Completed as part of a wider garden renovation",
    ],
    serviceType: "Garden Wall Roughcasting",
    location: "Dreghorn",
    image: assets.gallery[3],
    imageAlt: `Garden wall with granite coping stones by ${brand} in Dreghorn`,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
