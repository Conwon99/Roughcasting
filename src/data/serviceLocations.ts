import { services, type ServicePage, type ServiceLocationFaq } from "@/data/services";
import { brandName, truncateMeta } from "@/data/business";
import { locations, getNearbyLocationLinks, type LocationPage } from "@/data/locations";

export type ServiceLocationPage = {
  locationSlug: string;
  serviceSlug: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  localParagraph: string;
  bodyParagraph: string;
  faqs: ServiceLocationFaq[];
  location: LocationPage;
  service: ServicePage;
};

const brand = brandName();

const buildServiceLocationPage = (
  location: LocationPage,
  service: ServicePage,
): ServiceLocationPage => {
  const town = location.name;
  const displayName = location.shortName ?? location.name;
  const nearbyNames = location.nearby;

  return {
    locationSlug: location.slug,
    serviceSlug: service.slug,
    title: `${service.title} in ${displayName} | ${brand}`,
    h1: `${service.title} in ${displayName}`,
    metaDescription: truncateMeta(service.locationMetaTemplate(displayName)),
    intro: service.locationIntroTemplate(town),
    localParagraph: service.locationLocalTemplate(town, nearbyNames),
    bodyParagraph: service.locationBodyTemplate(town),
    faqs: service.locationFaqTemplates(town),
    location,
    service,
  };
};

export const serviceLocationPages: ServiceLocationPage[] = locations.flatMap((location) =>
  services.map((service) => buildServiceLocationPage(location, service)),
);

export const getServiceLocationPage = (locationSlug: string, serviceSlug: string) =>
  serviceLocationPages.find(
    (page) => page.locationSlug === locationSlug && page.serviceSlug === serviceSlug,
  );

export const getServiceLocationPagesForLocation = (locationSlug: string) =>
  serviceLocationPages.filter((page) => page.locationSlug === locationSlug);

export const getServiceLocationPagesForService = (serviceSlug: string) =>
  serviceLocationPages.filter((page) => page.serviceSlug === serviceSlug);

export const getNearbyServiceLocationLinks = (
  page: ServiceLocationPage,
): Array<{ name: string; href: string }> => {
  const nearby = getNearbyLocationLinks(page.location);
  return nearby.slice(0, 4).map((loc) => ({
    name: loc.name,
    href: `/services/${page.serviceSlug}/${loc.slug}`,
  }));
};

export const getServiceLocationPath = (serviceSlug: string, locationSlug: string) =>
  `/services/${serviceSlug}/${locationSlug}`;
