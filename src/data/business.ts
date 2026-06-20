/** Central business config — single source of truth for NAP, SEO, assets, and schema. */

export type BusinessAddress = {
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  postalCode?: string;
  streetAddress?: string;
};

export type BusinessAssets = {
  hero: string;
  logo: string;
  about: string;
  gallery: [string, string, string, string, string, string];
};

export type OpeningHoursSpec = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

export type BusinessConfig = {
  businessName: string;
  alternateName: string;
  tagline: string;
  gbpCategory: string;
  phone: string;
  phoneDisplay: string;
  phoneLocal: string;
  /** Set to enable client-side tracking number swap; null = canonical everywhere */
  trackingPhone: string | null;
  trackingPhoneLocal: string | null;
  email: string;
  siteUrl: string;
  facebookUrl: string;
  googleMapsUrl: string;
  whatsappUrl: string | null;
  primaryCity: string;
  secondaryCity: string;
  region: string;
  geoRegion: string;
  address: BusinessAddress;
  mapCenter: [number, number];
  serviceAreaPolygon: [number, number][];
  assets: BusinessAssets;
  serviceTypes: string[];
  openingHours: OpeningHoursSpec[];
  /** Google Analytics measurement ID — empty string to disable */
  googleAnalyticsId: string;
  /** Google Ads conversion ID — empty string to disable */
  googleAdsId: string;
};

export const business: BusinessConfig = {
  businessName: "Your Business Name — Home Services",
  alternateName: "Your Brand",
  tagline: "Professional home services with tidy workmanship and free quotes.",
  gbpCategory: "Home Services",

  phone: "+44 7000 000000",
  phoneDisplay: "+44 7000 000000",
  phoneLocal: "07000 000000",
  trackingPhone: "+44 7000 000001",
  trackingPhoneLocal: "07000 000001",

  email: "hello@yourbusiness.co.uk",
  siteUrl: "https://www.yourbusiness.co.uk",
  facebookUrl: "https://www.facebook.com/yourbusiness",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Your+Business+Name",
  whatsappUrl: null,

  primaryCity: "Primary City",
  secondaryCity: "Secondary City",
  region: "Your Region",
  geoRegion: "GB-SCT",

  address: {
    addressLocality: "Primary City",
    addressRegion: "Your Region",
    addressCountry: "GB",
  },

  mapCenter: [56.0, -3.5],
  serviceAreaPolygon: [
    [55.8, -4.0],
    [55.8, -3.0],
    [56.2, -2.8],
    [56.4, -3.2],
    [56.3, -3.9],
    [55.8, -4.0],
  ],

  assets: {
    hero: "/hero.jpg",
    logo: "/logo.png",
    about: "/about.jpg",
    gallery: ["/gal_01.jpg", "/gal_02.jpg", "/gal_03.jpg", "/gal_04.jpg", "/gal_05.jpg", "/gal_06.jpg"],
  },

  serviceTypes: [
    "Primary service installation",
    "Primary service repairs",
    "Secondary service",
    "Garden and outdoor improvements",
    "Free quotes",
  ],

  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],

  googleAnalyticsId: "",
  googleAdsId: "",
};

export const SITE_URL = business.siteUrl;

export const absoluteUrl = (path = ""): string => {
  if (!path) return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const truncateMeta = (text: string, maxLength = 155): string => {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength - 1).replace(/[\s,.;:-]+$/, "")}…`;
};

export const brandName = () => business.alternateName;

export const citiesLabel = () => `${business.primaryCity} & ${business.secondaryCity}`;

export const homepageTitle = () =>
  `${business.alternateName} | Home Services in ${citiesLabel()}`;

export const homepageDescription = () =>
  truncateMeta(
    `${business.alternateName} provides professional home services across ${citiesLabel()} and ${business.region}. Free quotes available.`,
  );

export const homepageH1 = () => `Home Services in ${citiesLabel()}`;

export const defaultKeywords = () =>
  `home services ${business.primaryCity}, ${business.secondaryCity}, ${business.alternateName}, free quote`;

export const defaultOgImageAlt = () =>
  `${business.alternateName} home services in ${citiesLabel()}`;

export const schemaImages = (): string[] => [
  absoluteUrl(business.assets.logo),
  absoluteUrl(business.assets.hero),
  absoluteUrl(business.assets.about),
  ...business.assets.gallery.map((path) => absoluteUrl(path)),
];
