import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
} from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "WELCOME TO ETHIOPIA",
    title: "A New Standard",
    highlight: "of Luxury.",
    description:
      "Experience exceptional Ethiopian hospitality where timeless culture meets contemporary luxury.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "YOUR PERFECT ESCAPE",
    title: "Stay Above",
    highlight: "Expectation.",
    description:
      "Elegant rooms, unforgettable dining, and thoughtful service designed around your stay.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "ROOTED IN ETHIOPIA",
    title: "Discover",
    highlight: "Exceptional.",
    description:
      "A sophisticated destination inspired by Ethiopia and created for the modern traveler.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slide = slides[currentSlide];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) =>
        previous === slides.length - 1 ? 0 : previous + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((previous) =>
      previous === slides.length - 1 ? 0 : previous + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((previous) =>
      previous === 0 ? slides.length - 1 : previous - 1
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#10261c]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`
              absolute inset-0
              transition-opacity duration-[1500ms]
              ${
                index === currentSlide
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          >
            <img
              src={item.image}
              alt="Ethiopian International Hotel"
              className={`
                h-full
                w-full
                object-cover
                transition-transform
                duration-[8000ms]
                ease-out
                ${
                  index === currentSlide
                    ? "scale-105"
                    : "scale-100"
                }
              `}
            />
          </div>
        ))}

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1711] via-transparent to-black/20" />
      </div>

      {/* Decorative pattern */}
      <div className="pointer-events-none absolute right-0 top-1/3 hidden h-80 w-80 opacity-20 lg:block">
        <div className="absolute inset-0 rotate-45 border border-[#e1bc72]/50" />
        <div className="absolute inset-8 rotate-45 border border-[#e1bc72]/30" />
        <div className="absolute inset-16 rotate-45 border border-[#e1bc72]/20" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-48 pt-36 sm:px-8 lg:px-10 lg:pb-56">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div
            className={`
              mb-6
              flex
              items-center
              gap-3
              transition-all
              duration-1000
              ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            <span className="h-px w-10 bg-[#e1bc72]" />

            <span className="text-[10px] font-semibold tracking-[0.35em] text-[#e1bc72] sm:text-xs">
              {slide.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`
              max-w-3xl
              font-serif
              text-5xl
              leading-[0.95]
              tracking-[-0.03em]
              text-white
              transition-all
              duration-1000
              delay-100
              sm:text-6xl
              md:text-7xl
              lg:text-[88px]
              ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            {slide.title}

            <span className="block italic text-[#e1bc72]">
              {slide.highlight}
            </span>
          </h1>

          {/* Description */}
          <p
            className={`
              mt-7
              max-w-xl
              text-sm
              leading-7
              text-white/75
              transition-all
              duration-1000
              delay-200
              sm:text-base
              sm:leading-8
              ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            {slide.description}
          </p>

          {/* CTA */}
          <div
            className={`
              mt-8
              flex
              flex-col
              gap-3
              transition-all
              duration-1000
              delay-300
              sm:flex-row
              ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            <Link
              to="/rooms"
              className="
                group
                flex
                items-center
                justify-center
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
                hover:shadow-[0_15px_40px_rgba(201,154,74,0.25)]
              "
            >
              Explore Rooms

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <button
              type="button"
              className="
                group
                flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/30
                bg-white/5
                px-6
                py-3.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/60
                hover:bg-white/10
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/40
                "
              >
                <Play
                  size={11}
                  fill="currentColor"
                />
              </span>

              Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-40 right-5 z-20 flex items-center gap-2 sm:bottom-44 sm:right-8 lg:right-12">

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-black/10
            text-white
            backdrop-blur-md
            transition
            hover:border-[#c99a4a]
            hover:text-[#e1bc72]
          "
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="group"
            >
              <span
                className={`
                  block
                  h-[2px]
                  transition-all
                  duration-500
                  ${
                    index === currentSlide
                      ? "w-10 bg-[#e1bc72]"
                      : "w-5 bg-white/30 group-hover:bg-white/60"
                  }
                `}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-black/10
            text-white
            backdrop-blur-md
            transition
            hover:border-[#c99a4a]
            hover:text-[#e1bc72]
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Slide number */}
      <div className="absolute bottom-40 left-5 z-20 sm:bottom-44 sm:left-8 lg:left-12">
        <div className="flex items-end gap-2 text-white">
          <span className="font-serif text-3xl text-[#e1bc72]">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>

          <span className="mb-1 text-xs text-white/40">
            / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Booking bar */}
      <div
        id="booking"
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-30
          px-4
          pb-4
          sm:px-6
          sm:pb-6
          lg:px-10
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            overflow-hidden
            rounded-2xl
            border
            border-white/20
            bg-[#f7f4ec]
            shadow-2xl
            shadow-black/30
            sm:grid-cols-2
            lg:grid-cols-5
          "
        >
          {/* Check in */}
          <div className="flex items-center gap-3 border-b border-[#163a2a]/10 px-5 py-4 lg:border-b-0 lg:border-r">
            <CalendarDays
              size={19}
              className="text-[#c99a4a]"
            />

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#163a2a]/50">
                Check In
              </p>

              <p className="mt-1 text-sm font-medium text-[#163a2a]">
                Select Date
              </p>
            </div>
          </div>

          {/* Check out */}
          <div className="flex items-center gap-3 border-b border-[#163a2a]/10 px-5 py-4 sm:border-l lg:border-b-0 lg:border-r">
            <CalendarDays
              size={19}
              className="text-[#c99a4a]"
            />

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#163a2a]/50">
                Check Out
              </p>

              <p className="mt-1 text-sm font-medium text-[#163a2a]">
                Select Date
              </p>
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center gap-3 border-b border-[#163a2a]/10 px-5 py-4 lg:border-b-0 lg:border-r">
            <Users
              size={19}
              className="text-[#c99a4a]"
            />

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#163a2a]/50">
                Guests
              </p>

              <p className="mt-1 text-sm font-medium text-[#163a2a]">
                2 Adults
              </p>
            </div>
          </div>

          {/* Room */}
          <div className="flex items-center gap-3 border-b border-[#163a2a]/10 px-5 py-4 sm:border-l lg:border-b-0 lg:border-r">
            <div
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded
                border
                border-[#c99a4a]
              "
            >
              <span className="h-2 w-2 rounded-sm bg-[#c99a4a]" />
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#163a2a]/50">
                Room
              </p>

              <p className="mt-1 text-sm font-medium text-[#163a2a]">
                Deluxe Room
              </p>
            </div>
          </div>

          {/* Search */}
          <button
            type="button"
            className="
              flex
              min-h-[72px]
              items-center
              justify-center
              gap-2
              bg-[#163a2a]
              px-6
              text-xs
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[#e1bc72]
              transition
              hover:bg-[#0d241a]
            "
          >
            Check Availability

            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;