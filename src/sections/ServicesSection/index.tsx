import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";
import { services } from "@/data/services";
import { business, citiesLabel } from "@/data/business";

export const ServicesSection = () => {
  const cities = citiesLabel();
  return (
    <section id="services" className="box-border caret-transparent pt-[70px] md:pt-[140px]">
      <div className="box-border caret-transparent max-w-[1200px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center mb-[30px] md:mb-[50px]">
          <h2 className="text-white text-3xl font-bold box-border caret-transparent leading-[38px] sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            Our Services
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto mt-4">
            Reliable roughcasting, render and plastering across {cities}.
          </p>
        </div>
        <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] md:grid-cols-[1fr_1fr_1fr]">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              href={`/services/${service.slug}`}
              iconUrl={service.iconUrl}
              iconAlt={service.iconAlt}
              title={service.title}
              description={service.cardDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
