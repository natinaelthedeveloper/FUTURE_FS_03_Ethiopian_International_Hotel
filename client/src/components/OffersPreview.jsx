import { ArrowUpRight, CalendarDays, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { offers } from "../data/data";

function OffersPreview() {
  const [featuredOffer, ...otherOffers] = offers;

  return (
    <section
      id="offers"
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

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#c99a4a]
                "
              >
                Exclusive Offers
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
              Make your stay
              <span className="block italic text-[#c99a4a]">
                even more memorable.
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
              dark:text-white/50
            "
          >
            Enjoy carefully selected packages and seasonal experiences
            created to give you more from every stay.
          </p>
        </div>

        {/* Offers */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Featured offer */}
          <Link
            to="/offers"
            className="
              group
              relative
              min-h-[500px]
              overflow-hidden
              rounded-[2rem]
              sm:min-h-[600px]
            "
          >
            <img
              src={featuredOffer.image}
              alt={featuredOffer.title}
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Discount */}
            <div
              className="
                absolute
                right-6
                top-6
                flex
                h-20
                w-20
                rotate-3
                flex-col
                items-center
                justify-center
                rounded-full
                bg-[#c99a4a]
                text-center
                text-[#10261c]
                shadow-xl
                transition-transform
                duration-500
                group-hover:rotate-0
                sm:right-8
                sm:top-8
              "
            >
              <span className="text-[9px] font-semibold uppercase tracking-wider">
                Save
              </span>

              <span className="mt-0.5 font-serif text-sm font-bold">
                {featuredOffer.discount}
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-2 text-[#e1bc72]">
                <Sparkles size={14} />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                  Featured Experience
                </span>
              </div>

              <h3 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
                {featuredOffer.title}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
                {featuredOffer.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <span className="flex items-center gap-2 text-xs text-white/55">
                  <CalendarDays size={14} />
                  Available this season
                </span>

                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e1bc72]">
                  View Offer
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </div>
          </Link>

          {/* Other offers */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {otherOffers.map((offer) => (
              <Link
                key={offer.id}
                to="/offers"
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
                  src={offer.image}
                  alt={offer.title}
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Discount badge */}
                <div
                  className="
                    absolute
                    right-5
                    top-5
                    rounded-full
                    bg-[#f7f4ec]
                    px-4
                    py-2
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#163a2a]
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:bg-[#c99a4a]
                  "
                >
                  {offer.discount}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-white sm:text-3xl">
                    {offer.title}
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-5 text-white/55">
                    {offer.description}
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      gap-2
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#e1bc72]
                    "
                  >
                    Explore Offer

                    <ArrowUpRight
                      size={13}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-end">
          <Link
            to="/offers"
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
            View all special offers

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

export default OffersPreview;