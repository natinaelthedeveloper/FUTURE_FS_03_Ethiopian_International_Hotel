import { ArrowUpRight, Clock3, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import { diningOptions } from "../data/data";

function Dining() {
  return (
    <div className="bg-[#a4a29b] dark:bg-[#0d1712]">
      <section className="bg-[#163a2a] px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1bc72]">
            Dining
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] text-[#f7f4ec] sm:text-6xl lg:text-8xl">
            Flavors that tell
            <span className="block italic text-[#e1bc72]">
              a story.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            From traditional Ethiopian cuisine to international
            favorites, every plate is prepared as an experience.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-8">
          {diningOptions.map((restaurant, index) => (
            <article
              key={restaurant.id}
              className="group grid overflow-hidden rounded-[2rem] bg-white md:grid-cols-2 dark:bg-[#111d17]"
            >
              <div
                className={`relative min-h-[350px] overflow-hidden ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c99a4a]">
                  {restaurant.category}
                </p>

                <h2 className="mt-4 font-serif text-4xl text-[#163a2a] dark:text-[#f7f4ec]">
                  {restaurant.name}
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#163a2a]/55 dark:text-white/45">
                  {restaurant.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-5 text-xs text-[#163a2a]/50 dark:text-white/40">
                  <span className="flex items-center gap-2">
                    <Clock3 size={15} />
                    Daily service
                  </span>

                  <span className="flex items-center gap-2">
                    <Utensils size={15} />
                    Ethiopian & International
                  </span>
                </div>

                <Link
                  to="/booking"
                  className="group mt-8 flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#163a2a] dark:text-white"
                >
                  Reserve a table

                  <ArrowUpRight
                    size={16}
                    className="text-[#c99a4a] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dining;