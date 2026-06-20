/** Total reviews — MUST match visible review count on site (schema + reviews page). */
export const TOTAL_REVIEW_COUNT = 2;

export type CustomerReview = {
  name: string;
  meta: string;
  time: string;
  initial: string;
  initialBg: string;
  text: string;
};

export const reviews: CustomerReview[] = [
  {
    name: "Customer One",
    meta: "Facebook review",
    time: "recommended",
    initial: "C",
    initialBg: "bg-green-600",
    text: "Great service — quick response, tidy work and fair pricing. Would recommend.",
  },
  {
    name: "Customer Two",
    meta: "Facebook review",
    time: "recommended",
    initial: "C",
    initialBg: "bg-emerald-500",
    text: "Very responsive and professional. The job was completed to a high standard.",
  },
];
