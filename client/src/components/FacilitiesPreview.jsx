import {
  ArrowUpRight,
  BriefcaseBusiness,
  Car,
  ConciergeBell,
  Dumbbell,
  Sparkles,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";

import { facilities } from "../data/data";

const iconMap = {
  Dumbbell,
  Waves,
  Sparkles,
  BriefcaseBusiness,
  Car,
  ConciergeBell,
};

function FacilitiesPreview() {
  return (
    <section
      id="facilities"
      className="
        overflow-hidden
        bg-[#163a2a]
        px-5
        py-24
        sm:px-8
        sm:py-32
        lg:px-10
        lg:py-40
        dark:bg-[#08100c]
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#c99a4a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1bc72]">
                Beyond Your Stay
              </span>
            </div>

            <h2
              className="
                mt-5
                max-w-3xl
                font-serif
                text-4xl
                leading-[1.05]
                tracking-[-0.025em]
                text-[#f7f4ec]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Designed around
              <span className="block italic text-[#e1bc72]">
                your wellbeing.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            Whether you are here to relax, stay productive, or explore
            Addis Ababa, everything you need is thoughtfully within
            reach.
          </p>
        </div>

        {/* Facilities */}
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => {
            const Icon = iconMap[facility.icon];

            return (
              <Link
                key={facility.id}
                to="/facilities"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#c99a4a]/40
                  hover:bg-white/[0.07]
                  sm:p-8
                "
              >
                {/* Decorative number */}
                <span
                  className="
                    absolute
                    right-6
                    top-5
                    font-serif
                    text-5xl
                    text-white/[0.035]
                    transition-colors
                    duration-500
                    group-hover:text-[#c99a4a]/10
                  "
                >
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#c99a4a]/30
                    text-[#e1bc72]
                    transition-all
                    duration-500
                    group-hover:border-[#e1bc72]
                    group-hover:bg-[#c99a4a]/10
                    group-hover:shadow-[0_0_35px_rgba(201,154,74,0.12)]
                  "
                >
                  <Icon size={21} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3
                  className="
                    mt-8
                    font-serif
                    text-2xl
                    text-[#f7f4ec]
                    transition-colors
                    duration-300
                    group-hover:text-[#e1bc72]
                  "
                >
                  {facility.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
                  {facility.description}
                </p>

                {/* Arrow */}
                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white/30
                    transition-all
                    duration-300
                    group-hover:text-[#e1bc72]
                  "
                >
                  Discover

                  <ArrowUpRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />
                </div>

                {/* Animated bottom border */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#c99a4a]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </Link>
            );
          })}
        </div>

        {/* Bottom feature */}
        <div
          className="
            mt-16
            overflow-hidden
            rounded-[2rem]
            border
            border-[#c99a4a]/20
            bg-[#102c20]
            p-7
            sm:p-10
            lg:p-12
          "
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e1bc72]">
                Your comfort, our priority
              </p>

              <h3 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-[#f7f4ec] sm:text-4xl">
                Everything you need for a seamless stay.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                From a productive morning at the business center to a
                peaceful evening at the spa, our facilities are designed
                to make every part of your journey effortless.
              </p>
            </div>

            <Link
              to="/facilities"
              className="
                group
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-[#c99a4a]
                px-6
                py-3.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#10261c]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#e1bc72]
                hover:shadow-[0_15px_40px_rgba(201,154,74,0.2)]
              "
            >
              Explore Facilities

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
      </div>
    </section>
  );
}

export default FacilitiesPreview;