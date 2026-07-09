import { business, brandName } from "@/data/business";
import { categories } from "@/data/categories";

export type LocationFaq = {
  question: string;
  answer: string;
};

export type LocationPage = {
  slug: string;
  name: string;
  shortName?: string;
  title: string;
  description: string;
  intro: string;
  nearby: string[];
  locationFaqs: LocationFaq[];
};

const brand = brandName();
const categoryNames = categories.map((c) => c.name).join(", ");

const makeLocationFaqs = (name: string): LocationFaq[] => [
  {
    question: `Do you cover ${name}?`,
    answer: `Yes. ${brand} provides ${categoryNames.toLowerCase()} in ${name} and nearby areas. Get in touch to confirm availability for your property.`,
  },
  {
    question: `What services do you carry out in ${name}?`,
    answer: `${brand} helps customers in ${name} with ${categoryNames.toLowerCase()} and related exterior work.`,
  },
  {
    question: `How do I get a quote for work in ${name}?`,
    answer: `Contact ${brand} through the contact form or Facebook page with a brief description of the work and your location in ${name}. Photos are helpful. Free quotes are available.`,
  },
  {
    question: `Do you serve areas near ${name}?`,
    answer: `Yes. ${brand} covers ${name} and surrounding towns across ${business.region}. If you are nearby, get in touch and we can confirm coverage.`,
  },
  {
    question: `Is there a roughcasting contractor near ${name}?`,
    answer: `Yes. ${brand} is a local roughcaster serving ${name} and nearby areas with free quotes across ${business.region}.`,
  },
];

const locationEntries = [
  {
    slug: "irvine",
    name: "Irvine",
    description: `${brand} provides roughcasting, render and plastering in Irvine and surrounding communities.`,
    intro: `${brand} is based in Irvine and regularly completes roughcasting, smooth render and plastering work here, from garden walls to full house renders.`,
    nearby: ["Kilwinning", "Dreghorn", "Troon", "Ardrossan"],
  },
  {
    slug: "kilwinning",
    name: "Kilwinning",
    description: `${brand} provides roughcasting, render and plastering in Kilwinning and nearby areas.`,
    intro: `${brand} helps homeowners in Kilwinning with practical roughcasting, render and plastering work and free quotes.`,
    nearby: ["Irvine", "Ardrossan", "Beith", "Saltcoats"],
  },
  {
    slug: "troon",
    name: "Troon",
    description: `${brand} provides roughcasting, render and plastering in Troon and surrounding areas.`,
    intro: `${brand} supports Troon customers with roughcast finishes, smooth render and plastering, completed neatly with free quotes.`,
    nearby: ["Irvine", "Prestwick", "Ayr", "Dreghorn"],
  },
  {
    slug: "ayr",
    name: "Ayr",
    description: `${brand} provides roughcasting, render and plastering in Ayr and surrounding areas.`,
    intro: `${brand} covers Ayr for roughcasting, smooth render and plastering work, from garden walls to full houses.`,
    nearby: ["Troon", "Prestwick", "Kilmarnock"],
  },
  {
    slug: "kilmarnock",
    name: "Kilmarnock",
    description: `${brand} provides roughcasting, render and plastering in Kilmarnock and nearby areas.`,
    intro: `${brand} works across Kilmarnock completing roughcasting, render and plastering jobs with tidy workmanship.`,
    nearby: ["Irvine", "Ayr", "Beith"],
  },
  {
    slug: "saltcoats",
    name: "Saltcoats",
    description: `${brand} provides roughcasting, render and plastering in Saltcoats and surrounding areas.`,
    intro: `${brand} covers Saltcoats for roughcasting and render work, including garden walls, garages and full houses.`,
    nearby: ["Ardrossan", "Stevenston", "Kilwinning"],
  },
  {
    slug: "ardrossan",
    name: "Ardrossan",
    description: `${brand} provides roughcasting, render and plastering in Ardrossan and nearby areas.`,
    intro: `${brand} works in Ardrossan on roughcasting, smooth render and plastering, with free quotes for local customers.`,
    nearby: ["Saltcoats", "Stevenston", "Largs", "Kilwinning"],
  },
  {
    slug: "largs",
    name: "Largs",
    description: `${brand} provides roughcasting, render and plastering in Largs and surrounding areas.`,
    intro: `${brand} covers Largs for roughcasting and render work on homes exposed to coastal Ayrshire weather.`,
    nearby: ["Ardrossan", "Saltcoats"],
  },
  {
    slug: "stevenston",
    name: "Stevenston",
    description: `${brand} provides roughcasting, render and plastering in Stevenston and nearby areas.`,
    intro: `${brand} helps Stevenston customers with roughcasting, render repairs and plastering, completed with free quotes.`,
    nearby: ["Saltcoats", "Ardrossan", "Kilwinning"],
  },
  {
    slug: "prestwick",
    name: "Prestwick",
    description: `${brand} provides roughcasting, render and plastering in Prestwick and surrounding areas.`,
    intro: `${brand} covers Prestwick for roughcasting, smooth render and plastering work, from repairs to full renders.`,
    nearby: ["Ayr", "Troon"],
  },
  {
    slug: "dreghorn",
    name: "Dreghorn",
    description: `${brand} provides roughcasting, render and plastering in Dreghorn and nearby areas.`,
    intro: `${brand} works in Dreghorn on garden walls, garages and full house roughcasting with tidy workmanship.`,
    nearby: ["Irvine", "Troon", "Kilwinning"],
  },
  {
    slug: "beith",
    name: "Beith",
    description: `${brand} provides roughcasting, render and plastering in Beith and surrounding areas.`,
    intro: `${brand} covers Beith for roughcasting, render and plastering work, with free quotes for local homeowners.`,
    nearby: ["Kilwinning", "Kilmarnock"],
  },
];

export const locations: LocationPage[] = locationEntries.map((location) => ({
  ...location,
  title: `Roughcasting & Render Services in ${location.name} | ${brand}`,
  locationFaqs: makeLocationFaqs(location.name),
}));

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((item) => item.name === name))
    .filter((item): item is LocationPage => Boolean(item));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
