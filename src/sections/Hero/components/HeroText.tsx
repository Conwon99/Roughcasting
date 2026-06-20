import { business, brandName, homepageH1 } from "@/data/business";

export const HeroText = () => {
  return (
    <>
      <h1 className="text-white text-[28px] font-bold box-border caret-transparent leading-[36px] mb-3 md:text-[68px] md:leading-[88.4px]">
        {homepageH1()}
      </h1>
      <p className="text-slate-200 text-[15px] leading-7 box-border caret-transparent max-w-full mx-auto md:max-w-[70%] mb-4 md:mb-8">
        {business.tagline} {brandName()} handles the jobs you have been putting off across {business.primaryCity}, {business.secondaryCity} and {business.region}.
      </p>
    </>
  );
};

export const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
      <a
        href="/contact"
        className="inline-flex items-center gap-x-3 text-white bg-[#15803d] hover:bg-[#16a34a] px-6 py-3 md:px-10 md:py-5 rounded-[100px] font-semibold transition-colors duration-300 text-base md:text-xl lg:text-2xl"
      >
        <svg
          className="h-5 w-5 md:h-7 md:w-7 lg:h-8 lg:w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span className="text-white">GET A FREE QUOTE</span>
      </a>
    </div>
  );
};
