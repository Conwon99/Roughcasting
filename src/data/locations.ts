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
    answer: `${brand} helps customers in ${name} with ${categoryNames.toLowerCase()} and related home service work.`,
  },
  {
    question: `How do I get a quote for work in ${name}?`,
    answer: `Contact ${brand} by phone or through the contact form with a brief description of the work and your location in ${name}. Photos are helpful. Free quotes are available.`,
  },
  {
    question: `Do you serve areas near ${name}?`,
    answer: `Yes. ${brand} covers ${name} and surrounding towns across ${business.region}. If you are nearby, get in touch and we can confirm coverage.`,
  },
  {
    question: `Is there a home service contractor near ${name}?`,
    answer: `Yes. ${brand} is a local contractor serving ${name} and nearby areas with free quotes across ${business.region}.`,
  },
];

const locationEntries = [
  {
    slug: "primary-city",
    name: business.primaryCity,
    description: `${brand} provides home services in ${business.primaryCity} and surrounding communities.`,
    intro: `For customers in ${business.primaryCity}, ${brand} provides reliable home service work with tidy workmanship and free quotes.`,
    nearby: [business.secondaryCity, "Town Three"],
  },
  {
    slug: "secondary-city",
    name: business.secondaryCity,
    description: `${brand} provides home services in ${business.secondaryCity} and nearby areas.`,
    intro: `${brand} helps homeowners and businesses in ${business.secondaryCity} with practical home service work and free quotes.`,
    nearby: [business.primaryCity, "Town Three"],
  },
  {
    slug: "town-three",
    name: "Town Three",
    description: `${brand} provides home services in Town Three and surrounding areas.`,
    intro: `${brand} supports Town Three customers with practical home improvements and tidy workmanship.`,
    nearby: [business.primaryCity, business.secondaryCity],
  },
];

export const locations: LocationPage[] = locationEntries.map((location) => ({
  ...location,
  title: `Home Services in ${location.name} | ${brand}`,
  locationFaqs: makeLocationFaqs(location.name),
}));

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((item) => item.name === name))
    .filter((item): item is LocationPage => Boolean(item));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
