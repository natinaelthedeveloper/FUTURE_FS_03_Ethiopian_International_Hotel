import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

function BookingCTA() {
  return (
    <section
      id="booking"
      className="
        relative
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
      {/* Decorative pattern */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#c99a4a]/20 sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-[#c99a4a]/10 sm:h-[28rem] sm:w-[28rem]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Main CTA */}
        <div
          className="
            overflow-hidden
            rounded-[2rem]
            bg-[#163a2a]
            px-6
            py-14
            sm:px-10
            sm:py-16
            lg:px-16
            lg:py-20
            dark:bg-[#08100c]
          "
        >
          <div className="grid gap-14 lg:grid-cols-[1fr_0.7fr] lg:items-center">

            {/* Left content */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#c99a4a]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1bc72]">
                  Your Stay Awaits
                </span>
              </div>

              <h2
                className="
                  mt-6
                  max-w-3xl
                  font-serif
                  text-4xl
                  leading-[1.05]
                  tracking-[-0.025em]
                  text-[#f7f4ec]
                  sm:text-5xl
                  lg:text-6xl
                  xl:text-7xl
                "
              >
                Your Ethiopian
                <span className="block italic text-[#e1bc72]">
                  escape starts here.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                Whether you're visiting Addis Ababa for business,
                celebrating a special moment, or simply discovering
                Ethiopia, we're ready to make your stay exceptional.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/booking"
                  className="
                    group
                    inline-flex
                    w-fit
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#c99a4a]
                    px-7
                    py-3.5
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.13em]
                    text-[#10261c]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#e1bc72]
                    hover:shadow-[0_15px_40px_rgba(201,154,74,0.2)]
                  "
                >
                  <CalendarDays size={16} />

                  Book Your Stay

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

                <Link
                  to="/contact"
                  className="
                    inline-flex
                    w-fit
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    px-7
                    py-3.5
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.13em]
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#e1bc72]
                    hover:text-[#e1bc72]
                  "
                >
                  Contact Concierge
                </Link>
              </div>
            </div>

            {/* Contact information */}
            <div
              className="
                rounded-[1.5rem]
                border
                border-white/10
                bg-white/[0.035]
                p-6
                sm:p-8
              "
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e1bc72]">
                Reservations & Concierge
              </p>

              <div className="mt-7 space-y-6">

                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c99a4a]/10 text-[#e1bc72]">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Addis Ababa, Ethiopia
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/40">
                      In the heart of Ethiopia's capital
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c99a4a]/10 text-[#e1bc72]">
                    <Phone size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      +251 11 000 0000
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/40">
                      Available 24 hours
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c99a4a]/10 text-[#e1bc72]">
                    <Mail size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      reservations@eihotel.com
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/40">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/35">
                    Reservations
                  </span>

                  <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#e1bc72]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e1bc72]" />
                    Open 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust line */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6">
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#163a2a]/35 dark:text-white/30">
            Ethiopian Hospitality
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-[#c99a4a] sm:block" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#163a2a]/35 dark:text-white/30">
            International Standards
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-[#c99a4a] sm:block" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#163a2a]/35 dark:text-white/30">
            Exceptional Experiences
          </span>
        </div>
      </div>
    </section>
  );
}

export default BookingCTA;