import { business } from "@/data/business";

export const ExperienceImage = () => {
  return (
    <div className="box-border caret-transparent w-full">
      <div className="box-border caret-transparent overflow-hidden rounded-[20px]">
        <img
          src={business.assets.about}
          alt={`${business.alternateName} team at work`}
          className="box-border caret-transparent max-w-full w-full object-cover aspect-[4/3]"
          loading="lazy"
        />
      </div>
    </div>
  );
};
