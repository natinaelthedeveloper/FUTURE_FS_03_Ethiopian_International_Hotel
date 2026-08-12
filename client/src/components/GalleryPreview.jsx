import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Link } from "react-router-dom";

import { gallery } from "../data/data";

function GalleryPreview() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    "All",
    ...new Set(gallery.map((item) => item.category)),
  ];

  const filteredGallery =
    activeCategory === "All"
      ? gallery
      : gallery.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section
      id="gallery"
      className="
        overflow-hidden
        bg-[#163a2a]
        px-5
        py-24
        sm:px-8
        sm:py-32
        lg:px-10
        lg:py-40
        dark:bg-[#08100c]
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#c99a4a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1bc72]">
                A Glimpse Inside
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
                text-[#f7f4ec]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Experience it
              <span className="block italic text-[#e1bc72]">
                before you arrive.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
            Explore the spaces, details, and experiences that make
            Ethiopian International Hotel uniquely yours.
          </p>
        </div>

        {/* Category filter */}
        <div className="mt-12 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`
                shrink-0
                rounded-full
                border
                px-5
                py-2.5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.15em]
                transition-all
                duration-300
                ${
                  activeCategory === category
                    ? "border-[#c99a4a] bg-[#c99a4a] text-[#10261c]"
                    : "border-white/15 text-white/50 hover:border-[#c99a4a]/50 hover:text-[#e1bc72]"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filteredGallery.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedImage(item)}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                text-left
                ${
                  index === 0
                    ? "col-span-2 row-span-2 min-h-[420px] sm:min-h-[520px]"
                    : "min-h-[200px] sm:min-h-[250px]"
                }
              `}
            >
              <img
                src={item.image}
                alt={`${item.category} at Ethiopian International Hotel`}
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

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-transparent
                  to-transparent
                  opacity-70
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* Hover content */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  flex
                  items-end
                  justify-between
                  gap-4
                  p-5
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:opacity-100
                "
              >
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#e1bc72]">
                    {item.category}
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Ethiopian International Hotel
                  </p>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e1bc72] text-[#163a2a]">
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-end">
          <Link
            to="/gallery"
            className="
              group
              flex
              items-center
              gap-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#e1bc72]
              transition-colors
              hover:text-white
            "
          >
            View full gallery

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

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/90
            p-5
            backdrop-blur-md
          "
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="
              relative
              max-h-[90vh]
              max-w-6xl
              overflow-hidden
              rounded-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.category}
              className="
                max-h-[85vh]
                w-auto
                max-w-full
                object-contain
              "
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#e1bc72]">
                {selectedImage.category}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close gallery image"
              className="
                absolute
                right-4
                top-4
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-black/40
                text-white
                backdrop-blur-md
                transition-colors
                hover:bg-[#c99a4a]
                hover:text-[#163a2a]
              "
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default GalleryPreview;