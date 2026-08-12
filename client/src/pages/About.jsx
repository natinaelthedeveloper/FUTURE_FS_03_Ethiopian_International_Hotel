import {
  ArrowUpRight,
  Award,
  Heart,
  Landmark,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { aboutData } from "../data/data";

function About() {
  return (
    <div className="bg-[#a4a29b] dark:bg-[#0d1712]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#163a2a] px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1bc72]">
              Our Story
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[0.95] text-[#f7f4ec] sm:text-6xl lg:text-8xl">
              Hospitality with
              <span className="block italic text-[#e1bc72]">
                a heritage.
              </span>
            </h1>
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            Ethiopian International Hotel brings together decades of
            hospitality tradition with a contemporary vision for
            international travelers.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={aboutData.image}
              alt="Ethiopian International Hotel"
              className="h-[550px] w-full object-cover sm:h-[650px]"
            />
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c99a4a]">
              A Legacy of Welcome
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#163a2a] sm:text-5xl dark:text-[#f7f4ec]">
              Where every guest becomes part of our story.
            </h2>

            <p className="mt-7 text-sm leading-8 text-[#163a2a]/60 dark:text-white/50">
              {aboutData.description}
            </p>

            <p className="mt-5 text-sm leading-8 text-[#163a2a]/50 dark:text-white/40">
              {aboutData.secondaryText}
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#163a2a] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white dark:bg-[#c99a4a] dark:text-[#163a2a]"
            >
              Meet Our Team
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#163a2a] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Landmark,
                title: "Our Heritage",
                text: "Rooted in Ethiopian culture and generations of warm hospitality.",
              },
              {
                icon: Heart,
                title: "Our Philosophy",
                text: "Every detail should make guests feel genuinely welcomed.",
              },
              {
                icon: Award,
                title: "Our Standard",
                text: "International service standards with an unmistakably Ethiopian soul.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8"
                >
                  <Icon className="text-[#e1bc72]" size={25} />

                  <h3 className="mt-7 font-serif text-2xl text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-2 border-y border-[#163a2a]/10 sm:grid-cols-4 dark:border-white/10">
          {[
            ["1960", "Established"],
            ["60+", "Years of hospitality"],
            ["100+", "Team members"],
            ["24/7", "Guest service"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-r border-[#163a2a]/10 px-5 py-8 last:border-r-0 dark:border-white/10 sm:px-8 sm:py-10"
            >
              <p className="font-serif text-3xl text-[#163a2a] sm:text-4xl dark:text-white">
                {value}
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-[#163a2a]/40 dark:text-white/30">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;