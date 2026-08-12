import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { aboutData, statistics } from "../data/data";

function AboutPreview() {
  return (
    <section
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

        {/* Main layout */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Image side */}
          <div className="relative">

            {/* Gold decorative frame */}
            <div
              className="
                absolute
                -left-3
                -top-3
                h-32
                w-32
                border-l
                border-t
                border-[#c99a4a]
                sm:-left-5
                sm:-top-5
                sm:h-40
                sm:w-40
              "
            />

            {/* Image */}
            <div className="relative z-10 overflow-hidden rounded-[2rem]">
              <img
                src={aboutData.image}
                alt={aboutData.imageAlt}
                className="
                  h-[500px]
                  w-full
                  object-cover
                  transition-transform
                  duration-1000
                  hover:scale-105
                  sm:h-[600px]
                  lg:h-[680px]
                "
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Established badge */}
              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  rounded-2xl
                  border
                  border-white/20
                  bg-black/20
                  px-5
                  py-4
                  backdrop-blur-md
                  sm:bottom-8
                  sm:left-8
                "
              >
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/60">
                  Established
                </p>

                <p className="mt-1 font-serif text-2xl text-[#e1bc72]">
                  {aboutData.established}
                </p>
              </div>
            </div>

            {/* Side location card */}
            <div
              className="
                absolute
                -bottom-7
                right-5
                z-20
                hidden
                rounded-2xl
                bg-[#163a2a]
                px-6
                py-5
                shadow-2xl
                sm:block
                lg:-right-8
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c99a4a]/15">
                  <MapPin
                    size={17}
                    className="text-[#e1bc72]"
                  />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">
                    Located in
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    {aboutData.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Background pattern */}
            <div
              className="
                absolute
                -bottom-10
                -left-10
                -z-0
                h-40
                w-40
                rotate-45
                border
                border-[#c99a4a]/20
              "
            />
          </div>

          {/* Content side */}
          <div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#c99a4a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c99a4a]">
                {aboutData.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-6
                font-serif
                text-4xl
                leading-[1.05]
                tracking-[-0.025em]
                text-[#163a2a]
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
                dark:text-[#f7f4ec]
              "
            >
              {aboutData.title}

              <span className="block italic text-[#c99a4a]">
                {aboutData.highlight}
              </span>
            </h2>

            {/* Main text */}
            <p
              className="
                mt-8
                max-w-xl
                text-sm
                leading-7
                text-[#163a2a]/65
                sm:text-base
                sm:leading-8
                dark:text-white/60
              "
            >
              {aboutData.description}
            </p>

            {/* Secondary text */}
            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-[#163a2a]/50
                dark:text-white/45
              "
            >
              {aboutData.secondaryText}
            </p>

            {/* CTA */}
            <Link
              to={aboutData.buttonLink}
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#163a2a]/20
                px-6
                py-3.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#163a2a]
                transition-all
                duration-300
                hover:border-[#c99a4a]
                hover:bg-[#163a2a]
                hover:text-white
                dark:border-white/20
                dark:text-white
              "
            >
              {aboutData.buttonText}

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

        {/* Statistics */}
        <div
          className="
            mt-28
            grid
            grid-cols-2
            border-y
            border-[#163a2a]/10
            sm:grid-cols-4
            dark:border-white/10
          "
        >
          {statistics.map((stat, index) => (
            <div
              key={stat.id}
              className={`
                px-5
                py-8
                sm:px-8
                sm:py-10
                ${
                  index < statistics.length - 1
                    ? "border-b border-[#163a2a]/10 sm:border-b-0 sm:border-r dark:border-white/10"
                    : ""
                }
                ${
                  index === 1
                    ? "border-r border-[#163a2a]/10 dark:border-white/10"
                    : ""
                }
              `}
            >
              <div className="font-serif text-3xl text-[#163a2a] sm:text-4xl lg:text-5xl dark:text-[#f7f4ec]">
                {stat.value}
                <span className="text-[#c99a4a]">
                  {stat.suffix}
                </span>
              </div>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#163a2a]/40 dark:text-white/35">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutPreview;