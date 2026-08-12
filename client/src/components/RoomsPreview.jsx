import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { rooms } from "../data/data";
import RoomCard from "./cards/RoomCard";

function RoomsPreview() {
  return (
    <section
      id="rooms"
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
                Stay With Us
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
              Rooms designed for
              <span className="block italic text-[#e1bc72]">
                exceptional stays.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            Discover beautifully appointed spaces where contemporary
            comfort meets the warmth and character of Ethiopian
            hospitality.
          </p>
        </div>

        {/* Room Cards */}
        <div
          className="
            mt-14
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/rooms"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#e1bc72]/40
              px-7
              py-3.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#e1bc72]
              transition-all
              duration-300
              hover:border-[#e1bc72]
              hover:bg-[#c99a4a]
              hover:text-[#163a2a]
            "
          >
            Explore All Rooms

            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RoomsPreview;