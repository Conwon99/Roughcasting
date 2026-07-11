import { business, brandName, citiesLabel } from "@/data/business";

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  navTitle: string;
  parentCategorySlug: string | null;
  description: string;
  cardDescription: string;
  iconUrl: string;
  iconAlt: string;
  image: string;
  imageAlt: string;
  about: string;
  why: string;
  signsYouNeed: string;
  options: string;
  localContext: string;
  whatToExpect: string;
  whyChooseUs: string;
  benefits: string[];
  process: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const serviceIconBase = "https://c.animaapp.com/mhqqhnhjBr0jWt/assets";
const brand = brandName();
const cities = citiesLabel();
const { assets, primaryCity, secondaryCity, region } = business;

export const services: ServicePage[] = [
  {
    slug: "full-house-roughcasting",
    title: "Full House Roughcasting",
    shortTitle: "Full House Roughcasting",
    navTitle: "Full House Roughcasting",
    parentCategorySlug: "roughcasting-ayrshire",
    description: `Full house roughcasting in ${cities}. Complete render systems finished with your choice of chip. Free quotes from ${brand}.`,
    cardDescription: "Full house renders completed from base coat through to finished chip, taking properties back to brick where needed.",
    iconUrl: `${serviceIconBase}/670f922acd8bf79374aa2c10_service-01.svg`,
    iconAlt: "Roughcasting icon",
    image: assets.gallery[4],
    imageAlt: `Full house roughcasting completed by ${brand} in ${primaryCity}`,
    about: `${brand} completes full house roughcasting across ${region}, taking properties back to the brickwork where existing render has failed and applying a complete new system from base coat to finished chip. Full houses, from bungalows to two-storey homes, are roughcast top to bottom.`,
    why: "A full re-render gives the whole property a consistent, weatherproof finish and removes years of built-up damp, cracking and staining in one job.",
    signsYouNeed: "If the existing roughcast is cracking, blown, or coming away from the wall in patches, a full re-render is usually more cost-effective than repeated repairs. Damp patches inside the house, render that sounds hollow when tapped, or a finish that no longer matches after previous repairs are all signs the whole house needs attention rather than a patch.",
    options: `${brand} can strip the property back to brick and apply a full new render system, or work over sound existing render where appropriate. Finish options include traditional roughcast chips such as Durite and Tudor, or a smooth painted render for a more contemporary look. See our smooth render page if you would prefer that finish instead.`,
    localContext: `Houses across ${cities} face exposed, coastal weather that puts real strain on render. If you are searching for a roughcaster near ${primaryCity} or ${secondaryCity}, ${brand} covers the full local area and can talk through chip and colour options for your property.`,
    whatToExpect: `${brand} will look at the current condition of the render, discuss chip and colour options, and provide a clear quote before any work starts. Old, failing render is stripped back to brick, the wall is base coated and beaded, then finished with the agreed chip or smooth render. The team keeps customers updated throughout and the site is left tidy at the end of each day.`,
    whyChooseUs: `${brand} has built a reputation across Ayrshire on reliable communication, a hard-working approach and a high-quality finish. Customers regularly recommend the team for keeping to timescales and leaving properties looking sharp.`,
    benefits: [
      "Full house renders from base coat to finished chip.",
      "Old, failing render stripped back to brick where needed.",
      "Choice of traditional roughcast chips or smooth render.",
      `Free quotes across ${cities}.`,
    ],
    process: [
      "Assess the current render and discuss chip and colour options.",
      "Strip back to brick and prepare the walls where required.",
      "Apply the base coat and beading.",
      "Finish with the agreed roughcast chip or smooth render and tidy the site.",
    ],
    faq: [
      {
        question: "Do you strip old render back to brick before re-roughcasting?",
        answer: `Yes. Where the existing render has failed, ${brand} strips it back to brickwork before applying the new system.`,
      },
      {
        question: "How long does a full house roughcast take?",
        answer: `Timescales depend on the size of the property, but ${brand} keeps customers updated and works to the timescale agreed at quote stage.`,
      },
      {
        question: `Do you offer full house roughcasting near me in ${primaryCity} or ${secondaryCity}?`,
        answer: `Yes. ${brand} roughcasts full houses across ${cities}. Contact us with your location for a free quote.`,
      },
    ],
  },
  {
    slug: "extension-roughcasting",
    title: "Extension Roughcasting",
    shortTitle: "Extension Roughcasting",
    navTitle: "Extensions",
    parentCategorySlug: "roughcasting-ayrshire",
    description: `Extension roughcasting in ${cities}, matched to the existing house render. Free quotes from ${brand}.`,
    cardDescription: "New-build extensions and additions roughcast and matched to the existing property finish.",
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Extension roughcasting icon",
    image: assets.gallery[0],
    imageAlt: `Extension roughcasting by ${brand} in ${primaryCity}`,
    about: `New extensions need render matched carefully to the rest of the house so the join is barely noticeable. ${brand} roughcasts extensions across ${region}, from single-storey additions to larger new-build sections.`,
    why: "Getting the chip, colour and texture right on an extension keeps the whole property looking like one consistent build rather than two mismatched sections.",
    signsYouNeed: "If you have recently had building work completed, or blockwork is exposed and waiting for a finish, the extension needs roughcasting before it is weatherproof. Matching an existing house finish gets harder the longer bare blockwork is left exposed to the weather.",
    options: `${brand} can match new roughcast work to the existing house finish using the same or a closely matched chip, or apply a different finish where the extension is meant to stand out, such as a smooth render section against a roughcast main house.`,
    localContext: `New builds and extensions across ${cities} are common, and getting the finish matched properly makes a real difference to kerb appeal. ${brand} can visit to match chip and colour before quoting.`,
    whatToExpect: `${brand} will look at the existing house finish, discuss whether to match or contrast, and provide a clear quote. The extension is base coated, beaded and finished with the agreed render system, with the join to the existing house finished as neatly as possible.`,
    whyChooseUs: `${brand} takes care matching new work to existing render so extensions look like part of the original build. Local customers recommend the team for tidy, well-matched finishes.`,
    benefits: [
      "New-build extensions and additions roughcast.",
      "Chip and colour matched to the existing house where required.",
      "Base coat, beading and finished chip all included.",
      `Free quotes across ${cities}.`,
    ],
    process: [
      "Assess the existing house finish and discuss matching or contrasting.",
      "Base coat and bead the new blockwork.",
      "Apply the agreed roughcast chip or smooth render.",
      "Finish the join to the existing property neatly.",
    ],
    faq: [
      {
        question: "Can you match new render to my existing house?",
        answer: `Yes. ${brand} matches chip and colour to the existing property wherever possible so extensions blend in.`,
      },
      {
        question: `Do you roughcast extensions near me in ${primaryCity} or ${secondaryCity}?`,
        answer: `Yes. ${brand} covers extension roughcasting across ${cities}.`,
      },
    ],
  },
  {
    slug: "garden-wall-roughcasting",
    title: "Garden Wall Roughcasting",
    shortTitle: "Garden Wall Roughcasting",
    navTitle: "Garden Walls",
    parentCategorySlug: "garden-wall-garage-roughcasting-ayrshire",
    description: `Garden wall roughcasting in ${cities}, finished with coping stones. Free quotes from ${brand}.`,
    cardDescription: "Boundary and garden walls roughcast and finished neatly with coping stones.",
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Garden wall roughcasting icon",
    image: assets.gallery[2],
    imageAlt: `Garden wall roughcasting by ${brand} in ${primaryCity}`,
    about: `${brand} roughcasts garden and boundary walls across ${region}, from small front garden walls to larger boundary and retaining walls, usually finished with coping stones for a neat edge.`,
    why: "A freshly roughcast garden wall lifts the whole front of a property and protects the blockwork underneath from the weather.",
    signsYouNeed: "Bare blockwork, cracked or patchy old render, or a wall that no longer matches the house finish are all common reasons to get a garden wall roughcast. New walls also need rendering to protect them once the blockwork is built.",
    options: `${brand} can roughcast new garden walls as part of a build, re-render tired or damaged existing walls, and fit coping stones on top for a finished look. Colour and chip can be matched to the house or chosen separately.`,
    localContext: `Garden walls across ${cities} take a lot of weather and everyday knocks. If you are searching for garden wall roughcasting near ${primaryCity} or ${secondaryCity}, ${brand} covers the full local area.`,
    whatToExpect: `${brand} will look at the wall, discuss chip, colour and coping options, and provide a free quote. Walls are base coated, beaded and finished with the agreed chip, then capped with coping stones where required.`,
    whyChooseUs: `Customers across Ayrshire recommend ${brand} for garden wall work completed to a high standard at a fair price, with clear communication throughout.`,
    benefits: [
      "Garden and boundary walls roughcast of any size.",
      "Coping stones fitted for a neat, durable finish.",
      "Colour and chip matched to the house where wanted.",
      `Free quotes across ${cities}.`,
    ],
    process: [
      "Assess the wall and discuss chip, colour and coping options.",
      "Base coat and bead the wall.",
      "Apply the finished roughcast chip.",
      "Fit coping stones where agreed and tidy the site.",
    ],
    faq: [
      {
        question: "Do you fit coping stones on garden walls?",
        answer: `Yes. ${brand} can finish garden walls with coping stones for a neat, durable edge.`,
      },
      {
        question: `Do you roughcast garden walls near me in ${primaryCity} or ${secondaryCity}?`,
        answer: `Yes. ${brand} roughcasts garden walls across ${cities}. Contact us for a free quote.`,
      },
    ],
  },
  {
    slug: "garage-roughcasting",
    title: "Garage Roughcasting",
    shortTitle: "Garage Roughcasting",
    navTitle: "Garages",
    parentCategorySlug: "garden-wall-garage-roughcasting-ayrshire",
    description: `Garage roughcasting in ${cities}, base coated and finished to match your house. Free quotes from ${brand}.`,
    cardDescription: "Garages base coated, beaded and roughcast to match the main house finish.",
    iconUrl: `${serviceIconBase}/670f922acd8bf79374aa2c10_service-01.svg`,
    iconAlt: "Garage roughcasting icon",
    image: assets.gallery[0],
    imageAlt: `Garage roughcasting by ${brand} in ${primaryCity}`,
    about: `${brand} roughcasts garages across ${region}, from single detached garages to larger blocks, base coated and finished to match the main house wherever possible.`,
    why: "A roughcast garage protects the blockwork and ties the whole property together visually rather than leaving an unfinished outbuilding.",
    signsYouNeed: "Bare blockwork on a new or older garage, cracked or patchy existing render, or a finish that no longer matches the house are all reasons to get a garage roughcast.",
    options: `${brand} can base coat and roughcast a new garage from scratch, or strip and re-render an older one. The finish can be matched to the house chip and colour or chosen separately.`,
    localContext: `Detached garages are common across ${cities}, and getting the finish to match the house makes a real difference. ${brand} can advise on chip and colour before quoting.`,
    whatToExpect: `${brand} will assess the garage, discuss finish options and provide a free quote. The garage is base coated, beaded and finished with the agreed roughcast chip, matched to the house where required.`,
    whyChooseUs: `${brand} completes garage roughcasting to the same standard as full house work, with tidy finishing and clear communication throughout.`,
    benefits: [
      "Garages base coated, beaded and roughcast.",
      "Finish matched to the main house where required.",
      "New-build and older garages both covered.",
      `Free quotes across ${cities}.`,
    ],
    process: [
      "Assess the garage and discuss finish options.",
      "Base coat and bead the walls.",
      "Apply the agreed roughcast chip.",
      "Match the finish to the house and tidy the site.",
    ],
    faq: [
      {
        question: "Can you match my garage render to the house?",
        answer: `Yes. ${brand} matches chip and colour to the main house wherever possible.`,
      },
      {
        question: `Do you roughcast garages near me in ${primaryCity} or ${secondaryCity}?`,
        answer: `Yes. ${brand} covers garage roughcasting across ${cities}.`,
      },
    ],
  },
  {
    slug: "smooth-render",
    title: "Smooth Render",
    shortTitle: "Smooth Render",
    navTitle: "Smooth Render",
    parentCategorySlug: "smooth-render-ayrshire",
    description: `Smooth render finishes in ${cities}, giving a clean, paintable exterior. Free quotes from ${brand}.`,
    cardDescription: "Smooth painted render finishes for a contemporary exterior look.",
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Smooth render icon",
    image: assets.gallery[1],
    imageAlt: `Smooth render finish by ${brand} in ${primaryCity}`,
    about: `${brand} applies smooth render finishes across ${region} for customers who prefer a contemporary, paintable exterior rather than a traditional chip finish.`,
    why: "Smooth render gives a clean, modern look and can be painted in any colour to suit the property.",
    signsYouNeed: "If you are extending, refurbishing, or simply prefer a smooth finish over traditional roughcast, smooth render is worth considering. Existing smooth render that is cracked, dirty or discoloured can also be repaired and refreshed.",
    options: `${brand} can apply smooth render to full properties, extensions or specific sections, and finish in a colour of your choice. It can also be combined with roughcast on the same property for a mixed finish.`,
    localContext: `Smooth render has become a popular choice for extensions and refurbishments across ${cities}. ${brand} prepares the surface properly, including beading and base coat, so the finish stays sound.`,
    whatToExpect: `${brand} will discuss the finish and colour, then base coat, bead and apply the smooth render system. The wall is finished with a level, consistent texture ready for painting.`,
    whyChooseUs: `${brand} takes the time to prepare surfaces properly for smooth render, so the finish stays crack-free and looks sharp for years.`,
    benefits: [
      "Smooth, paintable render finish.",
      "Suitable for full houses, extensions or single sections.",
      "Can be combined with roughcast on the same property.",
      `Free quotes across ${cities}.`,
    ],
    process: [
      "Discuss the finish, colour and areas to be rendered.",
      "Base coat and bead the walls.",
      "Apply the smooth render system.",
      "Leave a level, paint-ready finish.",
    ],
    faq: [
      {
        question: "Can smooth render be painted any colour?",
        answer: `Yes. Smooth render from ${brand} is finished ready for painting in the colour of your choice.`,
      },
      {
        question: `Do you offer smooth render near me in ${primaryCity} or ${secondaryCity}?`,
        answer: `Yes. ${brand} applies smooth render across ${cities}.`,
      },
    ],
  },
  {
    slug: "render-repairs-patch-ups",
    title: "Render Repairs & Patch-Ups",
    shortTitle: "Render Repairs",
    navTitle: "Repairs",
    parentCategorySlug: "smooth-render-ayrshire",
    description: `Render repairs and patch-ups in ${cities}. Cracked, blown or damaged render fixed. Free quotes from ${brand}.`,
    cardDescription: "Cracked, blown or damaged render sections repaired and blended into the existing finish.",
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Render repair icon",
    image: assets.gallery[3],
    imageAlt: `Render repair work by ${brand} in ${primaryCity}`,
    about: `Not every render problem needs a full re-render. ${brand} carries out render repairs and patch-ups across ${region}, fixing cracked, blown or damaged sections and blending them into the existing finish.`,
    why: "A targeted repair can often solve the problem and match the surrounding render, saving the cost of a full re-render.",
    signsYouNeed: "Cracking, hollow-sounding patches, render coming away from the wall, or damage from an isolated knock are all signs a repair is needed. Left unattended, small areas of damage can let water in and cause bigger problems.",
    options: `${brand} can patch individual sections, re-chip small areas to match the surrounding finish, or advise if a fuller re-render is the better long-term option for larger areas of damage.`,
    localContext: `Weather exposure across ${cities} means render damage is common, particularly on older properties. ${brand} can assess damage and recommend the most practical repair.`,
    whatToExpect: `${brand} will inspect the damage, identify the cause and recommend a repair or, where needed, a fuller re-render. Repairs are matched to the existing chip and colour as closely as possible.`,
    whyChooseUs: `${brand} gives honest advice on repair versus full re-render, so customers only pay for the work that is actually needed.`,
    benefits: [
      "Cracked, blown or damaged render repaired.",
      "Patches matched to the existing chip and colour.",
      "Honest advice on repair versus full re-render.",
      `Free quotes across ${cities}.`,
    ],
    process: [
      "Inspect the damage and identify the cause.",
      "Recommend a repair or a fuller re-render.",
      "Carry out the agreed repair work.",
      "Match the patch to the surrounding finish.",
    ],
    faq: [
      {
        question: "Can you match a repair to my existing render?",
        answer: `Yes. ${brand} matches repairs to the existing chip and colour as closely as possible.`,
      },
      {
        question: `Do you carry out render repairs near me in ${primaryCity} or ${secondaryCity}?`,
        answer: `Yes. ${brand} repairs render across ${cities}.`,
      },
    ],
  },
  {
    slug: "interior-plastering",
    title: "Interior Plastering",
    shortTitle: "Plastering",
    navTitle: "Plastering",
    parentCategorySlug: "plastering-ayrshire",
    description: `Interior plastering in ${cities}. Full skims and patch repairs, finished smooth. Free quotes from ${brand}.`,
    cardDescription: "Walls and ceilings plastered smooth and ready for decoration.",
    iconUrl: `${serviceIconBase}/670f922acd8bf79374aa2c10_service-01.svg`,
    iconAlt: "Plastering icon",
    image: assets.gallery[3],
    imageAlt: `Interior plastering completed by ${brand}`,
    about: `${brand} carries out interior plastering across ${region}, from full wall and ceiling skims to smaller patch repairs on cracked or damaged plaster.`,
    why: "A smooth, sound plaster finish is the foundation for good decorating, whether painting or wallpapering.",
    signsYouNeed: "Cracked, bulging or crumbling plaster, patches left after removing old fixtures, or a general refresh before decorating are all common reasons for plastering work. Damp-damaged plaster should be replaced once the underlying cause has been addressed.",
    options: `${brand} can skim full rooms, plaster after alterations or plumbing work, or patch smaller damaged areas. Ceilings and walls are both covered.`,
    localContext: `Older properties across ${cities} often need plaster repaired or refreshed as part of wider renovation work. ${brand} works cleanly and protects flooring and fixtures while plastering.`,
    whatToExpect: `${brand} will assess the area, discuss whether a full skim or patch repair is needed, and provide a free quote. Plastering is left smooth and ready for painting or wallpapering once fully dry.`,
    whyChooseUs: `${brand} plasters to a high standard with minimal mess, leaving surfaces genuinely ready for decoration.`,
    benefits: [
      "Full wall and ceiling skims.",
      "Patch repairs to cracked or damaged plaster.",
      "Work area protected and left clean.",
      `Free quotes across ${cities}.`,
    ],
    process: [
      "Assess the area and discuss full skim versus patch repair.",
      "Protect flooring and fixtures before starting.",
      "Apply the plaster to a smooth, level finish.",
      "Leave the room clean and ready for drying time.",
    ],
    faq: [
      {
        question: "How long does plaster need to dry before painting?",
        answer: `Drying times vary with the size of the area and weather conditions — ${brand} can advise on timescales for your job.`,
      },
      {
        question: `Do you offer plastering near me in ${primaryCity} or ${secondaryCity}?`,
        answer: `Yes. ${brand} plasters properties across ${cities}.`,
      },
    ],
  },
  {
    slug: "free-quotes",
    title: "Free Quotes",
    shortTitle: "Free Quotes",
    navTitle: "Free Quotes",
    parentCategorySlug: null,
    description: `Request a free quote from ${brand} for roughcasting, render and plastering work across ${cities}.`,
    cardDescription: `Message ${brand} to discuss your job and arrange a free, no-obligation quote.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Free quote icon",
    image: assets.gallery[5],
    imageAlt: `Roughcasting work completed by ${brand}`,
    about: `If you are not sure where to start, send ${brand} a message with a few details and some photos of the job. The team can talk through your options and confirm coverage in your area.`,
    why: "A quick conversation helps clarify the scope of work, the finish you want, and whether a site visit is needed before quoting.",
    signsYouNeed: `If you know work is needed — a garden wall, garage, full house render, or a patch of damaged plaster — but are unsure of cost or timing, a free quote is the best first step. Photos and your location help ${brand} respond quickly with practical advice.`,
    options: `${brand} quotes for all roughcasting, render and plastering work listed on this site. Get in touch through the contact form or Facebook page with details and photos. No-obligation quotes help you plan the job before committing.`,
    localContext: `${brand} covers ${cities} and nearby towns. If you are nearby, get in touch to confirm coverage for your property.`,
    whatToExpect: "Send a message with the work you need, your location and photos if you have them. The team will discuss the job, confirm the service area, and arrange a visit or quote as needed.",
    whyChooseUs: `Free quotes, clear next steps and local service across ${cities}. Customers appreciate honest advice before any work begins.`,
    benefits: [
      "Free quotes for all listed services.",
      "Clear next steps before work starts.",
      `Local service across ${cities}.`,
      "Honest advice on the most practical option.",
    ],
    process: [
      "Send a message with the work you need.",
      "Share photos and your location if possible.",
      "Discuss the job and confirm the service area.",
      "Agree the work, price and timing before starting.",
    ],
    faq: [
      {
        question: "What details should I send for a quote?",
        answer: "A short description, your location and photos of the work area are all helpful.",
      },
      {
        question: "Which areas do you quote for?",
        answer: `${brand} covers ${cities} and surrounding towns.`,
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
