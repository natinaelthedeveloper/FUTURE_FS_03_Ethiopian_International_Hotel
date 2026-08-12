import { ArrowUpRight, Clock3, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

import { diningOptions } from "../data/data";

function DiningPreview() {
  const featuredDining = diningOptions[0];
  const otherDining = diningOptions.slice(1);

  return (
    <section
      id="dining"
      className="
        overflow-hidden
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
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#c99a4a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c99a4a]">
                Taste Ethiopia
              </span>
            </div>

            <h2
              className="
                mt-5
                max-w-2xl
                font-serif
                text-4xl
                leading-[1.05]
                tracking-[-0.025em]
                text-[#163a2a]
                sm:text-5xl
                lg:text-6xl
                dark:text-[#f7f4ec]
              "
            >
              Flavors worth
              <span className="block italic text-[#c99a4a]">
                remembering.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-sm
              leading-7
              text-[#163a2a]/60
              sm:text-base
              sm:leading-8
              dark:text-white/55
            "
          >
            From authentic Ethiopian flavors to international cuisine,
            discover dining experiences crafted to bring people
            together.
          </p>
        </div>

        {/* Dining layout */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Featured restaurant */}
          <Link
            to="/dining"
            className="
              group
              relative
              min-h-[520px]
              overflow-hidden
              rounded-[2rem]
              sm:min-h-[620px]
            "
          >
            <img
              src={featuredDining.image}
              alt={featuredDining.name}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-1000
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Category */}
            <span
              className="
                absolute
                left-6
                top-6
                rounded-full
                border
                border-white/20
                bg-black/20
                px-4
                py-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
                backdrop-blur-md
                sm:left-8
                sm:top-8
              "
            >
              {featuredDining.category}
            </span>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#e1bc72]">
                    <Utensils size={13} />
                    Signature Dining
                  </p>

                  <h3 className="font-serif text-4xl text-white sm:text-5xl">
                    {featuredDining.name}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/65">
                    {featuredDining.description}
                  </p>
                </div>

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#e1bc72]
                    text-[#163a2a]
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                  "
                >
                  <ArrowUpRight size={19} />
                </div>
              </div>
            </div>
          </Link>

          {/* Other dining experiences */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {otherDining.map((dining) => (
              <Link
                key={dining.id}
                to="/dining"
                className="
                  group
                  relative
                  min-h-[300px]
                  overflow-hidden
                  rounded-[2rem]
                  sm:min-h-[340px]
                  lg:min-h-0
                  lg:flex-1
                "
              >
                <img
                  src={dining.image}
                  alt={dining.name}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                {/* Arrow */}
                <div
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:bg-[#e1bc72]
                    group-hover:text-[#163a2a]
                  "
                >
                  <ArrowUpRight size={17} />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#e1bc72]">
                    {dining.category}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                    {dining.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
                    <Clock3 size={13} />
                    Open daily · 06:30 AM – 11:00 PM
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-xs uppercase tracking-[0.18em] text-[#163a2a]/35 dark:text-white/30">
            Ethiopian cuisine · International flavors · Crafted experiences
          </p>

          <Link
            to="/dining"
            className="
              group
              flex
              items-center
              gap-3
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
            Explore all dining

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DiningPreview;