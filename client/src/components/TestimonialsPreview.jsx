import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";

import { testimonials } from "../data/data";

function TestimonialsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previousTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  // Automatic rotation
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
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
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
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
              Guest Experiences
            </span>

            <span className="h-px w-10 bg-[#c99a4a]" />
          </div>

          <h2
            className="
              mx-auto
              mt-5
              max-w-3xl
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
            Stories from guests who
            <span className="block italic text-[#c99a4a]">
              stayed with us.
            </span>
          </h2>
        </div>

        {/* Testimonial */}
        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[2rem]
            border
            border-[#163a2a]/10
            bg-white
            px-6
            py-14
            sm:px-12
            sm:py-16
            lg:px-20
            lg:py-20
            dark:border-white/10
            dark:bg-[#111d17]
          "
        >
          {/* Decorative quote */}
          <div
            className="
              pointer-events-none
              absolute
              left-6
              top-5
              font-serif
              text-[100px]
              leading-none
              text-[#c99a4a]/10
              sm:left-10
              sm:top-8
              sm:text-[140px]
            "
          >
            “
          </div>

          <div className="relative z-10">

            {/* Quote icon */}
            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#163a2a]
                text-[#e1bc72]
                dark:bg-[#c99a4a]
                dark:text-[#10261c]
              "
            >
              <Quote size={20} />
            </div>

            {/* Stars */}
            <div className="mt-7 flex justify-center gap-1">
              {Array.from({ length: testimonial.rating }).map(
                (_, index) => (
                  <Star
                    key={index}
                    size={15}
                    fill="currentColor"
                    className="text-[#c99a4a]"
                  />
                )
              )}
            </div>

            {/* Quote */}
            <blockquote
              key={testimonial.id}
              className="
                mx-auto
                mt-8
                max-w-4xl
                text-center
                font-serif
                text-2xl
                leading-relaxed
                text-[#163a2a]
                transition-opacity
                duration-500
                sm:text-3xl
                lg:text-4xl
                dark:text-[#f7f4ec]
              "
            >
              “{testimonial.text}”
            </blockquote>

            {/* Guest */}
            <div className="mt-10 text-center">
              <p className="text-sm font-semibold text-[#163a2a] dark:text-white">
                {testimonial.name}
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#163a2a]/40 dark:text-white/35">
                {testimonial.country}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="relative z-10 mt-12 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#163a2a]/15
                text-[#163a2a]
                transition-all
                duration-300
                hover:border-[#c99a4a]
                hover:bg-[#163a2a]
                hover:text-white
                dark:border-white/15
                dark:text-white
              "
            >
              <ArrowLeft size={17} />
            </button>

            {/* Indicators */}
            <div className="mx-3 flex items-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      activeIndex === index
                        ? "w-8 bg-[#c99a4a]"
                        : "w-1.5 bg-[#163a2a]/20 dark:bg-white/20"
                    }
                  `}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#163a2a]/15
                text-[#163a2a]
                transition-all
                duration-300
                hover:border-[#c99a4a]
                hover:bg-[#163a2a]
                hover:text-white
                dark:border-white/15
                dark:text-white
              "
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-[#163a2a]/35 dark:text-white/30">
            Hospitality measured by the memories we create
          </p>

          <div className="h-px w-12 bg-[#c99a4a]/50" />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsPreview;