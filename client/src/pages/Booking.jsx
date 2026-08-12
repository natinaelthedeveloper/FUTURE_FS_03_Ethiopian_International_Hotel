import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Users,
} from "lucide-react";

function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center bg-[#f7f4ec] px-5 dark:bg-[#0d1712]">
        <div className="max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#c99a4a] text-[#163a2a]">
            <Check size={28} />
          </div>

          <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c99a4a]">
            Reservation Request Received
          </p>

          <h1 className="mt-4 font-serif text-5xl text-[#163a2a] dark:text-[#f7f4ec]">
            Thank you for choosing us.
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#163a2a]/55 dark:text-white/45">
            Your reservation request has been received. Our
            reservations team will contact you to confirm availability
            and finalize your stay.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 rounded-full bg-[#163a2a] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white dark:bg-[#c99a4a] dark:text-[#163a2a]"
          >
            Make another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f4ec] dark:bg-[#0d1712]">
      {/* Hero */}
      <section className="bg-[#163a2a] px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1bc72]">
            Reservations
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] text-[#f7f4ec] sm:text-6xl lg:text-8xl">
            Begin your
            <span className="block italic text-[#e1bc72]">
              Ethiopian escape.
            </span>
          </h1>
        </div>
      </section>

      {/* Booking form */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.4fr]">

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-white p-7 sm:p-10 lg:p-12 dark:bg-[#111d17]"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#163a2a]/45 dark:text-white/35">
                  Check-in
                </label>

                <div className="relative mt-2">
                  <CalendarDays
                    size={16}
                    className="absolute left-4 top-4 text-[#c99a4a]"
                  />

                  <input
                    required
                    type="date"
                    className="h-13 w-full rounded-xl border border-[#163a2a]/10 bg-transparent pl-11 pr-4 text-sm outline-none focus:border-[#c99a4a] dark:border-white/10 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#163a2a]/45 dark:text-white/35">
                  Check-out
                </label>

                <div className="relative mt-2">
                  <CalendarDays
                    size={16}
                    className="absolute left-4 top-4 text-[#c99a4a]"
                  />

                  <input
                    required
                    type="date"
                    className="h-13 w-full rounded-xl border border-[#163a2a]/10 bg-transparent pl-11 pr-4 text-sm outline-none focus:border-[#c99a4a] dark:border-white/10 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#163a2a]/45 dark:text-white/35">
                  Guests
                </label>

                <div className="relative mt-2">
                  <Users
                    size={16}
                    className="absolute left-4 top-4 text-[#c99a4a]"
                  />

                  <select
                    required
                    className="h-13 w-full appearance-none rounded-xl border border-[#163a2a]/10 bg-transparent pl-11 pr-4 text-sm outline-none focus:border-[#c99a4a] dark:border-white/10 dark:text-white dark:bg-[#111d17]"
                  >
                    <option value="">Select guests</option>
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#163a2a]/45 dark:text-white/35">
                  Room
                </label>

                <select
                  required
                  className="mt-2 h-13 w-full rounded-xl border border-[#163a2a]/10 bg-transparent px-4 text-sm outline-none focus:border-[#c99a4a] dark:border-white/10 dark:bg-[#111d17] dark:text-white"
                >
                  <option value="">Select room</option>
                  <option>Deluxe Room</option>
                  <option>Executive Room</option>
                  <option>Premium Suite</option>
                  <option>Presidential Suite</option>
                </select>
              </div>
            </div>

            <div className="mt-8 border-t border-[#163a2a]/10 pt-8 dark:border-white/10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c99a4a]">
                Guest Information
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <input
                  required
                  type="text"
                  placeholder="First name"
                  className="h-13 rounded-xl border border-[#163a2a]/10 bg-transparent px-4 text-sm outline-none focus:border-[#c99a4a] dark:border-white/10 dark:text-white"
                />

                <input
                  required
                  type="text"
                  placeholder="Last name"
                  className="h-13 rounded-xl border border-[#163a2a]/10 bg-transparent px-4 text-sm outline-none focus:border-[#c99a4a] dark:border-white/10 dark:text-white"
                />

                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="h-13 rounded-xl border border-[#163a2a]/10 bg-transparent px-4 text-sm outline-none focus:border-[#c99a4a] dark:border-white/10 dark:text-white"
                />

                <input
                  required
                  type="tel"
                  placeholder="Phone number"
                  className="h-13 rounded-xl border border-[#163a2a]/10 bg-transparent px-4 text-sm outline-none focus:border-[#c99a4a] dark:border-white/10 dark:text-white"
                />
              </div>

              <textarea
                rows="5"
                placeholder="Special requests or notes"
                className="mt-5 w-full resize-none rounded-xl border border-[#163a2a]/10 bg-transparent p-4 text-sm outline-none focus:border-[#c99a4a] dark:border-white/10 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="group mt-8 flex items-center gap-3 rounded-full bg-[#163a2a] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#c99a4a] hover:text-[#163a2a] dark:bg-[#c99a4a] dark:text-[#163a2a]"
            >
              Request Reservation

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Side panel */}
          <aside className="h-fit rounded-[2rem] bg-[#163a2a] p-7 text-white sm:p-9 lg:sticky lg:top-28">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e1bc72]">
              Reservation Assistance
            </p>

            <h2 className="mt-5 font-serif text-3xl">
              Let us help plan your stay.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/45">
              Our concierge team can help with room selection, dining,
              transportation, celebrations, and special requests.
            </p>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
              {[
                "Flexible room selection",
                "Dining reservations",
                "Airport transfer assistance",
                "Special occasion planning",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-xs text-white/60"
                >
                  <Check size={14} className="text-[#e1bc72]" />
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Booking;