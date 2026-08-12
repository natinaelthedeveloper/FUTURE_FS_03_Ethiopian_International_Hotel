import { ArrowUpRight, CalendarDays, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { offers } from "../data/data";

function Offers() {
  return (
    <div className="bg-[#f7f4ec] dark:bg-[#0d1712]">
      <section className="bg-[#163a2a] px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1bc72]">
            Special Offers
          </p>

          <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] text-[#f7f4ec] sm:text-6xl lg:text-8xl">
            More reasons to
            <span className="block italic text-[#e1bc72]">
              stay longer.
            </span>
          </h1>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {offers.map((offer) => (
            <article
              key={offer.id}
              className="group overflow-hidden rounded-[2rem] bg-white dark:bg-[#111d17]"
            >
              <div className="relative h-[350px] overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <span className="absolute right-6 top-6 rounded-full bg-[#c99a4a] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#163a2a]">
                  {offer.discount}
                </span>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-[#c99a4a]">
                  <Sparkles size={14} />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                    Exclusive Experience
                  </span>
                </div>

                <h2 className="mt-4 font-serif text-3xl text-[#163a2a] dark:text-[#f7f4ec]">
                  {offer.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#163a2a]/55 dark:text-white/45">
                  {offer.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs text-[#163a2a]/45 dark:text-white/35">
                  <CalendarDays size={15} />
                  Seasonal availability
                </div>

                <Link
                  to="/booking"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#163a2a] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#c99a4a] hover:text-[#163a2a] dark:bg-[#c99a4a] dark:text-[#163a2a]"
                >
                  Book this offer
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
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

export default Offers;