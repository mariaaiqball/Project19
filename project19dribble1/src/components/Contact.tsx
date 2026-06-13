import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-p19-cream py-20 lg:py-28">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-block rounded-full bg-p19-blue-50 px-4 py-1.5 text-sm font-semibold text-p19-blue">
              Contact
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-p19-navy sm:text-4xl">
              How can we help you today?
            </h2>
            <p className="mt-4 text-lg text-p19-muted">
              Tell us about your challenges and we'll schedule a free consultation
              to explore how Project 19 can help.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-p19-blue-50">
                  <Mail size={18} className="text-p19-blue" />
                </div>
                <div>
                  <p className="text-sm text-p19-muted">Email</p>
                  <a
                    href="mailto:hello@project19.com"
                    className="font-medium text-p19-navy hover:text-p19-blue"
                  >
                    hello@project19.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-p19-blue-50">
                  <Phone size={18} className="text-p19-blue" />
                </div>
                <div>
                  <p className="text-sm text-p19-muted">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="font-medium text-p19-navy hover:text-p19-blue"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-p19-blue-50">
                  <MapPin size={18} className="text-p19-blue" />
                </div>
                <div>
                  <p className="text-sm text-p19-muted">Location</p>
                  <p className="font-medium text-p19-navy">Serving local businesses nationwide</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-p19-blue-50">
                  <Send size={24} className="text-p19-blue" />
                </div>
                <h3 className="font-display mt-6 text-xl font-bold text-p19-navy">
                  Thank you for reaching out!
                </h3>
                <p className="mt-2 max-w-sm text-p19-muted">
                  We'll be in touch within one business day to schedule your free
                  consultation call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-p19-navy">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-p19-blue focus:ring-2 focus:ring-p19-blue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-p19-navy">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-p19-blue focus:ring-2 focus:ring-p19-blue/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-p19-navy">
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-p19-blue focus:ring-2 focus:ring-p19-blue/20"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-p19-navy">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-p19-blue focus:ring-2 focus:ring-p19-blue/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-p19-navy">
                    Tell us about your challenges
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-p19-blue focus:ring-2 focus:ring-p19-blue/20"
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-p19-blue py-3.5 text-sm font-semibold text-white transition-all hover:bg-p19-blue-light hover:shadow-lg hover:shadow-p19-blue/30"
                >
                  Request Free Consultation
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
