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

function Facilities() {
  return (
    <div className="bg-[#163a2a] dark:bg-[#08100c]">
      <section className="px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1bc72]">
            Facilities & Wellness
          </p>

          <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] text-[#f7f4ec] sm:text-6xl lg:text-8xl">
            Everything you need.
            <span className="block italic text-[#e1bc72]">
              Nothing you don't.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            Thoughtfully designed spaces that help you relax,
            reconnect, work, and enjoy every moment of your stay.
          </p>
        </div>
      </section>

      <section className="rounded-t-[3rem] bg-[#a4a29b] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 dark:bg-[#0d1712]">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => {
            const Icon = iconMap[facility.icon];

            return (
              <article
                key={facility.id}
                className="group rounded-[2rem] border border-[#163a2a]/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-[#111d17]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#c99a4a]/30 text-[#c99a4a] transition-all group-hover:bg-[#c99a4a] group-hover:text-[#163a2a]">
                  <Icon size={22} />
                </div>

                <h2 className="mt-8 font-serif text-2xl text-[#163a2a] dark:text-[#f7f4ec]">
                  {facility.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#163a2a]/55 dark:text-white/45">
                  {facility.description}
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#163a2a] dark:text-white"
                >
                  Learn more
                  <ArrowUpRight size={14} className="text-[#c99a4a]" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Facilities;