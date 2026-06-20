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
    answer: `Yes. Contact ${brand} by phone or message with details of your enquiry and we can discuss a free quote.`,
  },
  {
    question: "What areas do you cover?",
    answer: `${brand} serves ${cities} and surrounding areas in ${business.region}. If you are nearby, get in touch and we can confirm availability.`,
  },
  {
    question: "How do I get started?",
    answer: `Call ${brand} or use the contact form with a brief description of the work and your location. Photos are helpful.`,
  },
  {
    question: "Do you handle outdoor and home service work?",
    answer: `Yes. ${brand} handles a range of home and outdoor services with tidy workmanship and free quotes.`,
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
