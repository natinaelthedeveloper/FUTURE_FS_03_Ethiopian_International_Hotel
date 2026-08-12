import { useState } from "react";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-[#a4a29b] dark:bg-[#0d1712]">
      {/* Hero */}
      <section className="bg-[#163a2a] px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1bc72]">
            Contact
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] text-[#f7f4ec] sm:text-6xl lg:text-8xl">
            We'd love to
            <span className="block italic text-[#e1bc72]">
              hear from you.
            </span>
          </h1>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          {/* Contact information */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c99a4a]">
              Get in touch
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#163a2a] dark:text-[#f7f4ec]">
              Our team is here for you.
            </h2>

            <div className="mt-10 space-y-7">
              <div className="flex gap-4">
                <MapPin className="shrink-0 text-[#c99a4a]" />

                <div>
                  <p className="text-sm font-semibold text-[#163a2a] dark:text-white">
                    Location
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#163a2a]/50 dark:text-white/40">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="shrink-0 text-[#c99a4a]" />

                <div>
                  <p className="text-sm font-semibold text-[#163a2a] dark:text-white">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-[#163a2a]/50 dark:text-white/40">
                    +251 11 000 0000
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="shrink-0 text-[#c99a4a]" />

                <div>
                  <p className="text-sm font-semibold text-[#163a2a] dark:text-white">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-[#163a2a]/50 dark:text-white/40">
                    reservations@eihotel.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock3 className="shrink-0 text-[#c99a4a]" />

                <div>
                  <p className="text-sm font-semibold text-[#163a2a] dark:text-white">
                    Concierge
                  </p>

                  <p className="mt-1 text-sm text-[#163a2a]/50 dark:text-white/40">
                    Available 24 hours a day
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[2rem] bg-white p-7 sm:p-10 dark:bg-[#111d17]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  required
                  type="text"
                  placeholder="Full name"
                  className="h-13 rounded-xl border border-[#163a2a]/10 bg-transparent px-4 text-sm outline-none transition focus:border-[#c99a4a] dark:border-white/10 dark:text-white"
                />

                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="h-13 rounded-xl border border-[#163a2a]/10 bg-transparent px-4 text-sm outline-none transition focus:border-[#c99a4a] dark:border-white/10 dark:text-white"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="h-13 w-full rounded-xl border border-[#163a2a]/10 bg-transparent px-4 text-sm outline-none transition focus:border-[#c99a4a] dark:border-white/10 dark:text-white"
              />

              <textarea
                required
                rows="7"
                placeholder="How can we help?"
                className="w-full resize-none rounded-xl border border-[#163a2a]/10 bg-transparent p-4 text-sm outline-none transition focus:border-[#c99a4a] dark:border-white/10 dark:text-white"
              />

              <button
                type="submit"
                className="flex items-center gap-3 rounded-full bg-[#163a2a] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#c99a4a] hover:text-[#163a2a] dark:bg-[#c99a4a] dark:text-[#163a2a]"
              >
                {submitted ? "Message Sent" : "Send Message"}
                <Send size={15} />
              </button>
            </form>

            {submitted && (
              <p className="mt-5 text-xs text-[#c99a4a]">
                Thank you. Our concierge team will get back to you.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#163a2a] p-8 sm:p-12">
          <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-[#e1bc72]/20 bg-[#102c20]">
            <div className="text-center">
              <MapPin className="mx-auto text-[#e1bc72]" size={30} />

              <h3 className="mt-4 font-serif text-3xl text-white">
                Addis Ababa, Ethiopia
              </h3>

              <p className="mt-2 text-sm text-white/40">
                Hotel location map will be connected here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;