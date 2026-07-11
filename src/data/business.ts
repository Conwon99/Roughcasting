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
  /** Images shown in the homepage before/after slideshow, in display order. */
  slideshow: string[];
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
  businessName: "J.Kelly Roughcasting & Rendering",
  alternateName: "J.Kelly Roughcasting",
  tagline: "Roughcasting, smooth render and plastering specialists across Ayrshire — from garden walls to full houses.",
  gbpCategory: "Roughcasting & Rendering Contractor",

  phone: "+44 7570 658441",
  phoneDisplay: "+44 7570 658441",
  phoneLocal: "07570 658441",
  trackingPhone: null,
  trackingPhoneLocal: null,

  email: "hello@jkellyroughcasting.co.uk",
  siteUrl: "https://www.jkellyroughcasting.co.uk",
  facebookUrl: "https://www.facebook.com/J.kellyroughcasting/",
  googleMapsUrl: "https://maps.google.com/maps?q=55.61056648%2C-4.65186649&hl=en",
  whatsappUrl: null,

  primaryCity: "Irvine",
  secondaryCity: "Kilwinning",
  region: "Ayrshire",
  geoRegion: "GB-SCT",

  address: {
    addressLocality: "Irvine",
    addressRegion: "Ayrshire",
    addressCountry: "GB",
  },

  mapCenter: [55.6106, -4.6519],
  serviceAreaPolygon: [
    [55.85, -4.9],
    [55.85, -4.45],
    [55.4, -4.45],
    [55.4, -4.9],
    [55.85, -4.9],
  ],

  assets: {
    hero: "/jkellyroughcasting-gal-02-v2.jpg",
    logo: "/jkellyroughcasting-logo.png",
    about: "/jkellyroughcasting-about-v2.jpg",
    gallery: [
      "/jkellyroughcasting-gal-01-v2.jpg",
      "/jkellyroughcasting-gal-02-v2.jpg",
      "/jkellyroughcasting-gal-03-v2.jpg",
      "/jkellyroughcasting-gal-04-v2.jpg",
      "/jkellyroughcasting-gal-05-v2.jpg",
      "/jkellyroughcasting-gal-06-v2.jpg",
    ],
    slideshow: [
      "/jkellyroughcasting-before-01.jpg",
      "/jkellyroughcasting-after-01.jpg",
      "/jkellyroughcasting-gal-02-v2.jpg",
      "/jkellyroughcasting-hero-v2.jpg",
      "/jkellyroughcasting-gal-03-v2.jpg",
      "/jkellyroughcasting-gal-04-v2.jpg",
      "/jkellyroughcasting-gal-05-v2.jpg",
      "/jkellyroughcasting-gal-06-v2.jpg",
    ],
  },

  serviceTypes: [
    "Full house roughcasting",
    "Extension roughcasting",
    "Garden wall roughcasting",
    "Garage roughcasting",
    "Smooth render",
    "Render repairs and patch-ups",
    "Interior plastering",
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

export const citiesLabel = () => business.region;

export const homepageTitle = () =>
  `${business.alternateName} | Roughcasting, Render & Plastering in ${citiesLabel()}`;

export const homepageDescription = () =>
  truncateMeta(
    `${business.alternateName} provides roughcasting, smooth render and plastering across ${citiesLabel()}. Free quotes available.`,
  );

export const homepageH1 = () => `Roughcasting, Render & Plastering in ${citiesLabel()}`;

export const defaultKeywords = () =>
  `roughcasting ${business.primaryCity}, render ${business.secondaryCity}, plastering, ${business.alternateName}, free quote`;

export const defaultOgImageAlt = () =>
  `${business.alternateName} roughcasting and render services in ${citiesLabel()}`;

export const schemaImages = (): string[] => [
  absoluteUrl(business.assets.logo),
  absoluteUrl(business.assets.hero),
  absoluteUrl(business.assets.about),
  ...business.assets.gallery.map((path) => absoluteUrl(path)),
];
