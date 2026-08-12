import { useState } from "react";
import { X } from "lucide-react";
import { gallery } from "../data/data";

function Gallery() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const categories = [
    "All",
    ...new Set(gallery.map((item) => item.category)),
  ];

  const images =
    category === "All"
      ? gallery
      : gallery.filter((item) => item.category === category);

  return (
    <div className="bg-[#163a2a] dark:bg-[#08100c]">
      <section className="px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1bc72]">
            Gallery
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] text-[#f7f4ec] sm:text-6xl lg:text-8xl">
            A visual journey
            <span className="block italic text-[#e1bc72]">
              through our hotel.
            </span>
          </h1>

          <div className="mt-12 flex gap-2 overflow-x-auto pb-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] transition ${
                  category === item
                    ? "border-[#c99a4a] bg-[#c99a4a] text-[#163a2a]"
                    : "border-white/15 text-white/50 hover:border-[#c99a4a]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ec] px-5 py-16 sm:px-8 lg:px-10 lg:py-24 dark:bg-[#0d1712]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0
                  ? "col-span-2 row-span-2 min-h-[450px]"
                  : "min-h-[220px]"
              }`}
            >
              <img
                src={item.image}
                alt={item.category}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />

              <span className="absolute bottom-5 left-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white opacity-0 transition group-hover:opacity-100">
                {item.category}
              </span>
            </button>
          ))}
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-6xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.category}
              className="max-h-[85vh] max-w-full object-contain"
            />

            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#c99a4a] hover:text-[#163a2a]"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;