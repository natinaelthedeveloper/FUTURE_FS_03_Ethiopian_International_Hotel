import { useEffect, useState } from "react";

import {
  CalendarDays,
  ChevronDown,
  Globe,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Rooms",
    path: "/rooms",
  },
  {
    name: "Dining",
    path: "/dining",
  },
  {
    name: "Facilities",
    path: "/facilities",
  },
  {
    name: "Offers",
    path: "/offers",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const location = useLocation();

  /*
   * Detect page scrolling
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Dark / Light mode
   */
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      isDark
    );
  }, [isDark]);

  /*
   * Close mobile menu when route changes
   */
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  /*
   * Close mobile menu when screen becomes desktop
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * Active route
   */
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`
        fixed
        left-0
        right-0
        top-0
        z-50
        px-4
        transition-all
        duration-500
        sm:px-6
        lg:px-8
        ${
          isScrolled
            ? "pt-3"
            : "pt-4 sm:pt-6"
        }
      `}
    >
      <nav
        className={`
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-2xl
          border
          transition-all
          duration-500
          ${
            isScrolled
              ? `
                border-[#c99a4a]/25
                bg-[#10261c]/95
                shadow-2xl
                shadow-black/20
                backdrop-blur-xl
              `
              : `
                border-white/15
                bg-black/20
                backdrop-blur-md
              `
          }
        `}
      >
        {/* NAVBAR MAIN */}
        <div className="flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-7">

          {/* LOGO */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-3"
          >
            <div
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#c99a4a]/70
                text-[#e1bc72]
                transition-all
                duration-500
                group-hover:rotate-6
                group-hover:border-[#e1bc72]
                group-hover:shadow-[0_0_20px_rgba(201,154,74,0.25)]
              "
            >
              <span className="text-xl">
                ✦
              </span>

              <span
                className="
                  absolute
                  inset-[5px]
                  rounded-full
                  border
                  border-[#c99a4a]/30
                "
              />
            </div>

            <div className="hidden sm:block">
              <p
                className="
                  font-serif
                  text-[17px]
                  font-semibold
                  tracking-[0.16em]
                  text-white
                "
              >
                ETHIOPIAN
              </p>

              <p
                className="
                  mt-0.5
                  text-[7px]
                  font-medium
                  tracking-[0.28em]
                  text-[#e1bc72]
                "
              >
                INTERNATIONAL HOTEL
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 lg:flex">

            {navLinks.map((link) => {
              const active = isActive(link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    relative
                    px-3
                    py-2
                    text-[13px]
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active
                        ? "text-[#e1bc72]"
                        : "text-white/80 hover:text-white"
                    }
                  `}
                >
                  {link.name}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-[#c99a4a]
                      transition-all
                      duration-300
                      ${
                        active
                          ? "w-5 opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CONTROLS */}
          <div className="hidden items-center gap-2 lg:flex">

            {/* LANGUAGE */}
            <button
              type="button"
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                px-3
                py-2
                text-xs
                text-white/80
                transition
                hover:bg-white/10
                hover:text-white
              "
            >
              <Globe size={15} />

              <span>EN</span>

              <ChevronDown size={12} />
            </button>

            {/* THEME */}
            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                text-white/80
                transition-all
                duration-300
                hover:border-[#c99a4a]/60
                hover:bg-[#c99a4a]/10
                hover:text-[#e1bc72]
              "
            >
              {isDark ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>

            {/* BOOK NOW */}
            <Link
              to="/booking"
              className="
                group
                ml-1
                flex
                items-center
                gap-2
                rounded-full
                bg-[#c99a4a]
                px-5
                py-3
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-[#10261c]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#e1bc72]
                hover:shadow-[0_10px_30px_rgba(201,154,74,0.25)]
              "
            >
              <span>Book Now</span>

              <CalendarDays
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-6
                "
              />
            </Link>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-2 lg:hidden">

            {/* THEME */}
            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-white
                transition
                hover:border-[#c99a4a]
                hover:text-[#e1bc72]
              "
            >
              {isDark ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            {/* MENU */}
            <button
              type="button"
              onClick={() =>
                setIsMobileOpen(!isMobileOpen)
              }
              aria-label="Toggle navigation"
              aria-expanded={isMobileOpen}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-white
                transition
                hover:border-[#c99a4a]
                hover:text-[#e1bc72]
              "
            >
              {isMobileOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-500
            ease-in-out
            lg:hidden
            ${
              isMobileOpen
                ? "max-h-[600px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="border-t border-white/10 px-4 pb-5 pt-3">

            {navLinks.map((link) => {
              const active = isActive(link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/5
                    py-3.5
                    text-sm
                    transition-all
                    duration-300
                    ${
                      active
                        ? "translate-x-1 text-[#e1bc72]"
                        : "text-white/80 hover:translate-x-1 hover:text-white"
                    }
                  `}
                >
                  <span>{link.name}</span>

                  {active && (
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#c99a4a]
                      "
                    />
                  )}
                </Link>
              );
            })}

            {/* MOBILE BOOKING */}
            <Link
              to="/booking"
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#c99a4a]
                px-5
                py-3.5
                text-sm
                font-semibold
                text-[#10261c]
                transition
                hover:bg-[#e1bc72]
              "
            >
              <CalendarDays size={17} />

              Book Your Stay
            </Link>

            {/* LANGUAGE */}
            <button
              type="button"
              className="
                mt-3
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/10
                py-3
                text-sm
                text-white/70
                transition
                hover:bg-white/5
                hover:text-white
              "
            >
              <Globe size={16} />

              English

              <ChevronDown size={13} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;