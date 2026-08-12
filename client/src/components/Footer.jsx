import { 
  LuArrowUpRight, 
  LuFacebook, 
  LuInstagram, 
  LuMail, 
  LuMapPin, 
  LuPhone 
} from 'react-icons/lu';

import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1711] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-20 sm:px-8 lg:px-10 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <p className="font-serif text-3xl tracking-tight">
                Ethiopian
              </p>

              <p className="mt-[-2px] text-[10px] font-semibold uppercase tracking-[0.32em] text-[#e1bc72]">
                International Hotel
              </p>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/45">
              A timeless expression of Ethiopian hospitality,
              thoughtfully designed for the modern traveler.
            </p>

            {/* Social */}
            <div className="mt-7 flex gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border border-white/10
                  text-white/50 transition-all duration-300
                  hover:border-[#c99a4a]
                  hover:bg-[#c99a4a]
                  hover:text-[#0b1711]
                "
              >
                <LuFacebook size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border border-white/10
                  text-white/50 transition-all duration-300
                  hover:border-[#c99a4a]
                  hover:bg-[#c99a4a]
                  hover:text-[#0b1711]
                "
              >
                <LuInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e1bc72]">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              <Link
                to="/rooms"
                className="w-fit text-sm text-white/45 transition-colors hover:text-[#e1bc72]"
              >
                Rooms & Suites
              </Link>

              <Link
                to="/dining"
                className="w-fit text-sm text-white/45 transition-colors hover:text-[#e1bc72]"
              >
                Dining
              </Link>

              <Link
                to="/facilities"
                className="w-fit text-sm text-white/45 transition-colors hover:text-[#e1bc72]"
              >
                Facilities
              </Link>

              <Link
                to="/offers"
                className="w-fit text-sm text-white/45 transition-colors hover:text-[#e1bc72]"
              >
                Special Offers
              </Link>

              <Link
                to="/gallery"
                className="w-fit text-sm text-white/45 transition-colors hover:text-[#e1bc72]"
              >
                Gallery
              </Link>
            </nav>
          </div>

          {/* Hotel */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e1bc72]">
              Hotel
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              <Link
                to="/about"
                className="w-fit text-sm text-white/45 transition-colors hover:text-[#e1bc72]"
              >
                Our Story
              </Link>

              <Link
                to="/contact"
                className="w-fit text-sm text-white/45 transition-colors hover:text-[#e1bc72]"
              >
                Contact
              </Link>

              <Link
                to="/booking"
                className="w-fit text-sm text-white/45 transition-colors hover:text-[#e1bc72]"
              >
                Reservations
              </Link>

              <Link
                to="/privacy"
                className="w-fit text-sm text-white/45 transition-colors hover:text-[#e1bc72]"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="w-fit text-sm text-white/45 transition-colors hover:text-[#e1bc72]"
              >
                Terms & Conditions
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e1bc72]">
              Contact
            </p>

            <div className="mt-6 space-y-5">

              <div className="flex gap-3">
                <LuMapPin
                  size={16}
                  className="mt-1 shrink-0 text-[#c99a4a]"
                />

                <p className="text-sm leading-6 text-white/45">
                  Addis Ababa,
                  <br />
                  Ethiopia
                </p>
              </div>

              <a
                href="tel:+251110000000"
                className="flex items-center gap-3 text-sm text-white/45 transition-colors hover:text-[#e1bc72]"
              >
                <LuPhone size={16} className="text-[#c99a4a]" />
                +251 11 000 0000
              </a>

              <a
                href="mailto:reservations@eihotel.com"
                className="flex items-center gap-3 text-sm text-white/45 transition-colors hover:text-[#e1bc72]"
              >
                <LuMail size={16} className="text-[#c99a4a]" />
                reservations@eihotel.com
              </a>
            </div>

            {/* Booking CTA */}
            <Link
              to="/booking"
              className="
                group mt-7 inline-flex items-center gap-3
                rounded-full bg-[#c99a4a]
                px-5 py-3
                text-[10px] font-semibold uppercase tracking-[0.14em]
                text-[#0b1711]
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#e1bc72]
              "
            >
              Book Your Stay

              <LuArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="my-16 h-px bg-white/10" />

        {/* Newsletter */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e1bc72]">
              Stay Connected
            </p>

            <h3 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
              Receive hotel news & exclusive offers.
            </h3>
          </div>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="flex flex-col gap-2 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              className="
                h-12 min-w-0 flex-1 rounded-full
                border border-white/10
                bg-white/[0.04]
                px-5
                text-sm text-white
                outline-none
                placeholder:text-white/25
                transition-colors
                focus:border-[#c99a4a]
              "
            />

            <button
              type="submit"
              className="
                h-12 shrink-0 rounded-full
                bg-[#c99a4a]
                px-6
                text-[10px] font-semibold uppercase tracking-[0.14em]
                text-[#0b1711]
                transition-all duration-300
                hover:bg-[#e1bc72]
              "
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.12em] text-white/25">
            © {currentYear} Ethiopian International Hotel. All rights reserved.
          </p>

          <p className="text-[10px] uppercase tracking-[0.12em] text-white/25">
            Crafted with Ethiopian hospitality
          </p>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#c99a4a] to-transparent opacity-70" />
    </footer>
  );
}

export default Footer;