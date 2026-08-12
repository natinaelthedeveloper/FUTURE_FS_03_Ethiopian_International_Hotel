import { useState } from "react";
import {
  ArrowUpRight,
  BedDouble,
  Check,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { rooms } from "../data/data";




function Rooms() {
  const [activeType, setActiveType] = useState("All");

  const types = [
    "All",
    ...new Set(rooms.map((room) => room.type || room.category)),
  ];

  const filteredRooms =
    activeType === "All"
      ? rooms
      : rooms.filter(
          (room) => (room.type || room.category) === activeType
        );

  return (
    <div className="bg-[#a4a29b] dark:bg-[#0d1712]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#163a2a] px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1bc72]">
            Accommodation
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] text-[#f7f4ec] sm:text-6xl lg:text-8xl">
            Rooms designed for
            <span className="block italic text-[#e1bc72]">
              meaningful stays.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            Discover elegant rooms and suites combining contemporary
            comfort with the warmth of Ethiopian hospitality.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] transition-all ${
                activeType === type
                  ? "border-[#c99a4a] bg-[#c99a4a] text-[#163a2a]"
                  : "border-[#163a2a]/15 text-[#163a2a]/50 hover:border-[#c99a4a] dark:border-white/15 dark:text-white/50"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      {/* Rooms */}
      <section className="px-5 pb-28 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {filteredRooms.map((room) => (
            <article
              key={room.id}
              className="group overflow-hidden rounded-[2rem] border border-[#163a2a]/10 bg-white dark:border-white/10 dark:bg-[#111d17]"
            >
              <div className="relative h-[360px] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <span className="absolute left-6 top-6 rounded-full bg-black/30 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  {room.type || room.category || "Luxury Room"}
                </span>
              </div>

              <div className="p-7 sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h2 className="font-serif text-3xl text-[#163a2a] dark:text-[#f7f4ec]">
                      {room.name}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-[#163a2a]/55 dark:text-white/45">
                      {room.description}
                    </p>
                  </div>

                  <BedDouble
                    size={22}
                    className="shrink-0 text-[#c99a4a]"
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#163a2a]/50 dark:text-white/40">
                  <span className="flex items-center gap-2">
                    <Users size={15} />
                    {room.guests || "2 Guests"}
                  </span>

                  <span>{room.size || "35 m²"}</span>
                </div>

                {room.amenities && (
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    {room.amenities.slice(0, 4).map((amenity) => (
                      <span
                        key={amenity}
                        className="flex items-center gap-2 text-xs text-[#163a2a]/50 dark:text-white/40"
                      >
                        <Check size={13} className="text-[#c99a4a]" />
                        {amenity}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-8 flex items-center justify-between border-t border-[#163a2a]/10 pt-6 dark:border-white/10">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-[#163a2a]/35 dark:text-white/30">
                      From
                    </p>

                    <p className="mt-1 font-serif text-2xl text-[#163a2a] dark:text-white">
                      {room.price || "Contact us"}
                    </p>
                  </div>

                  <Link
                    to="/booking"
                    className="group flex items-center gap-2 rounded-full bg-[#163a2a] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#c99a4a] hover:text-[#163a2a] dark:bg-[#c99a4a] dark:text-[#163a2a]"
                  >
                    Reserve
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Rooms;