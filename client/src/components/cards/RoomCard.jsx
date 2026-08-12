import {
  ArrowUpRight,
  BedDouble,
  Users,
} from "lucide-react";

function RoomCard({ room }) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-[#163a2a]/10
        bg-white
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        dark:border-white/10
        dark:bg-[#111d17]
      "
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Room type */}
        <span
          className="
            absolute
            left-5
            top-5
            rounded-full
            bg-[#f7f4ec]/95
            px-3
            py-1.5
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.12em]
            text-[#163a2a]
          "
        >
          {room.type}
        </span>

        {/* Price */}
        <div className="absolute bottom-5 left-5 text-white">
          <span className="text-xs text-white/70">
            From
          </span>

          <div className="mt-1">
            <span className="font-serif text-2xl">
              ${room.price}
            </span>

            <span className="ml-1 text-xs text-white/70">
              / night
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className="
                font-serif
                text-2xl
                text-[#163a2a]
                dark:text-[#f7f4ec]
              "
            >
              {room.name}
            </h3>

            <div className="mt-2 flex items-center gap-4 text-xs text-[#163a2a]/50 dark:text-white/50">
              <span className="flex items-center gap-1.5">
                <BedDouble size={14} />
                {room.size}
              </span>

              <span className="flex items-center gap-1.5">
                <Users size={14} />
                {room.guests} Guests
              </span>
            </div>
          </div>

          <button
            type="button"
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#163a2a]/10
              text-[#163a2a]
              transition-all
              duration-300
              hover:bg-[#c99a4a]
              hover:text-[#10261c]
              dark:border-white/10
              dark:text-white
            "
          >
            <ArrowUpRight size={17} />
          </button>
        </div>

        <p className="mt-4 text-sm leading-6 text-[#163a2a]/55 dark:text-white/50">
          {room.description}
        </p>

        {/* Features */}
        <div className="mt-5 flex flex-wrap gap-2">
          {room.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="
                rounded-full
                bg-[#f7f4ec]
                px-3
                py-1.5
                text-[10px]
                text-[#163a2a]/60
                dark:bg-[#163a2a]
                dark:text-white/60
              "
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default RoomCard;