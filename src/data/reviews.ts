/** Total reviews — MUST match visible review count on site (schema + reviews page). */
export const TOTAL_REVIEW_COUNT = 6;

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
    name: "Axmie Dxickie",
    meta: "Facebook review",
    time: "2024",
    initial: "A",
    initialBg: "bg-green-600",
    text: "Had our full house roughcasted recently and we could not be happier with the results. Everything has been smooth from contacting Joe initially until the job was complete. He kept me up to date with everything and job was completed within stated timescale. House looks amazing! Would definitely recommend.",
  },
  {
    name: "Elaine Hill",
    meta: "Facebook review",
    time: "2023",
    initial: "E",
    initialBg: "bg-emerald-500",
    text: "Joe recently completed our house, taking the majority of the house back to the brick and fully roughcast from top to bottom. Fantastic job done. Never have we seen a harder worker than Joe and such a nice person. Highly recommend.",
  },
  {
    name: "Leigh-Ann Cherry",
    meta: "Facebook review",
    time: "2023",
    initial: "L",
    initialBg: "bg-green-700",
    text: "Absolutely fantastic job done on our roughcast, really really pleased with the finished result. Great team. Highly recommend!",
  },
  {
    name: "Johan Kelly",
    meta: "Facebook review",
    time: "2023",
    initial: "J",
    initialBg: "bg-emerald-600",
    text: "Highly recommended, just had the front of my house done and Joe did a great job. Very pleasant and hardworking, kept me updated right through.",
  },
  {
    name: "Colin Howie",
    meta: "Facebook review",
    time: "2022",
    initial: "C",
    initialBg: "bg-green-500",
    text: "I needed some patchwork done on the house. I came across Joe's page by accident, but got in touch anyway. He done all the work that day, very reasonable price and a totally down to earth guy. I have absolutely no issues recommending his work to anyone needing roughcasting done.",
  },
  {
    name: "A N Tania Fulton",
    meta: "Facebook review",
    time: "2022",
    initial: "T",
    initialBg: "bg-emerald-700",
    text: "Just had my garden wall done and can honestly say great job, great work ethic from a hard working young man, can't recommend enough.",
  },
];
