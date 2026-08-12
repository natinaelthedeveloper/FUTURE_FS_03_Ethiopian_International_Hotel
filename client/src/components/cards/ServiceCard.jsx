import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ServiceCard({ service, Icon }) {
  return (
    <Link
      to={service.path}
      className="
        group
        relative
        flex
        min-w-0
        flex-col
        items-center
        overflow-hidden
        bg-[#f7f4ec]
        px-1
        py-5
        text-center
        transition-all
        duration-500

        hover:bg-[#163a2a]

        dark:bg-[#111d17]
        dark:hover:bg-[#163a2a]

        sm:min-h-[330px]
        sm:items-start
        sm:px-7
        sm:py-7
        sm:text-left

        lg:min-h-[360px]
        lg:p-8
      "
    >
      {/* Number / Arrow */}
      <div className="flex w-full items-start justify-between">
        <span
          className="
            hidden
            font-serif
            text-sm
            text-[#c99a4a]
            sm:block
          "
        >
          {service.number}
        </span>

        <ArrowUpRight
          size={14}
          className="
            ml-auto
            text-[#163a2a]/40
            transition-all
            duration-500
            group-hover:translate-x-1
            group-hover:-translate-y-1
            group-hover:text-[#e1bc72]

            dark:text-white/30

            sm:size-[19px]
          "
        />
      </div>

      {/* Icon */}
      <div
        className="
          mt-2
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#c99a4a]/30
          text-[#c99a4a]
          transition-all
          duration-500

          group-hover:border-[#c99a4a]
          group-hover:bg-[#c99a4a]/10
          group-hover:text-[#e1bc72]

          sm:mt-16
          sm:h-14
          sm:w-14
        "
      >
        <Icon
          size={19}
          strokeWidth={1.4}
          className="sm:size-[23px]"
        />
      </div>

      {/* Title */}
      <h3
        className="
          mt-2
          w-full
          truncate
          font-serif
          text-[10px]
          font-medium
          leading-tight
          text-[#163a2a]
          transition-colors
          duration-500
          group-hover:text-white

          dark:text-[#f7f4ec]

          sm:mt-7
          sm:whitespace-normal
          sm:text-2xl
        "
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-1
          line-clamp-2
          w-full
          text-[8px]
          leading-tight
          text-[#163a2a]/55
          transition-colors
          duration-500
          group-hover:text-white/65

          dark:text-white/50

          sm:mt-3
          sm:max-w-xs
          sm:text-sm
          sm:leading-6
        "
      >
        {service.description}
      </p>

      {/* Bottom gold line */}
      <span
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-[#c99a4a]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </Link>
  );
}

export default ServiceCard;