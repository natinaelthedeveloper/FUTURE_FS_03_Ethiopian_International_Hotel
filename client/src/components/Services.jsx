import {
  BedDouble,
  ConciergeBell,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

import { Link } from "react-router-dom";

import { services } from "../data/data";

import ServiceCard from "./cards/ServiceCard";

const iconMap = {
  BedDouble,
  UtensilsCrossed,
  Sparkles,
  ConciergeBell,
};

function Services() {
  return (
    <section
      id="services"
      className="
        bg-[#f7f4ec]
        px-5
        py-24
        sm:px-8
        sm:py-32
        lg:px-10
        lg:py-40
        dark:bg-[#0d1712]
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#c99a4a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c99a4a]">
                Exceptional Experiences
              </span>
            </div>

            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.05] text-[#163a2a] sm:text-5xl lg:text-6xl dark:text-[#f7f4ec]">
              Everything you need,
              <span className="block italic text-[#c99a4a]">
                beautifully considered.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#163a2a]/65 sm:text-base sm:leading-8 dark:text-white/60">
            From the moment you arrive, every detail is designed
            to make your stay comfortable, effortless, and
            unforgettable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-1 sm:gap-4">
  {services.map((service) => (
    <ServiceCard
      key={service.id}
      service={service}
      Icon={service.icon}
    />
  ))}
</div>

        {/* Footer link */}
        <div className="mt-10 flex justify-end">
          <Link
            to="/facilities"
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#163a2a]
              transition-colors
              hover:text-[#c99a4a]
              dark:text-white
            "
          >
            Explore all facilities →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;