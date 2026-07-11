import { brandName, business, citiesLabel } from "@/data/business";

export type FaqItem = {
  question: string;
  answer: string;
};

const brand = brandName();
const cities = citiesLabel();

export const homepageFaqs: FaqItem[] = [
  {
    question: "Do you offer free quotes?",
    answer: `Yes. Contact ${brand} through the contact form or Facebook page with details of your enquiry and we can discuss a free quote.`,
  },
  {
    question: "What areas do you cover?",
    answer: `${brand} serves ${cities} and surrounding towns. If you are nearby, get in touch and we can confirm availability.`,
  },
  {
    question: "How do I get started?",
    answer: `Use the contact form or message ${brand} on Facebook with a brief description of the work and your location. Photos are helpful.`,
  },
  {
    question: "Do you handle garden walls as well as full houses?",
    answer: `Yes. ${brand} takes on jobs of every size, from garden walls and garages to full house roughcasting, smooth render and plastering, all with free quotes.`,
  },
];

export const buildFaqSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
