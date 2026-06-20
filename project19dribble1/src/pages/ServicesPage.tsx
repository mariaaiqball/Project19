import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { CTABanner } from "../components/CTABanner";
import { serviceDetails } from "../data/services";
import type { AppOutletContext } from "../layouts/AppLayout";

export function ServicesPage() {
  const { openConsultation } = useOutletContext<AppOutletContext>();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = serviceDetails[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <main>
      <section
        className="relative aspect-[5/2] w-full overflow-hidden"
        aria-label="Services header"
      >
        <img
          src="/assets/services-header.png"
          alt="Team collaborating around laptops in a modern workspace"
          className="h-full w-full object-cover object-center"
        />
      </section>

      <section className="relative bg-gradient-to-b from-white via-p19-cream/50 to-white pb-20 pt-12 lg:pb-28 lg:pt-16">
        <div className="site-container">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-p19-blue-50 px-4 py-1.5 text-sm font-semibold text-p19-blue">
              What We Offer
            </span>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight text-p19-navy sm:text-4xl">
              A wide variety of services
            </h1>
            <p className="mt-4 text-lg text-p19-muted">
            From custom software to AI solutions, we bring the expertise local
            businesses need, scaled to fit your budget and goals.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(16rem,18rem)_1fr] lg:items-start lg:gap-10">
            <aside>
              <nav
                className="rounded-2xl border border-slate-200/80 bg-white p-2 shadow-sm lg:sticky lg:top-[calc(6.5rem+env(safe-area-inset-top,0px))]"
                aria-label="Services"
              >
                <ul className="flex flex-col gap-1">
                  {serviceDetails.map((service, index) => {
                    const Icon = service.icon;
                    const isActive = index === activeIndex;

                    return (
                      <li key={service.slug}>
                        <button
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          aria-current={isActive ? "true" : undefined}
                          className={`flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition-all ${
                            isActive
                              ? "bg-p19-blue-50 text-p19-blue"
                              : "text-p19-navy hover:bg-p19-blue-50 hover:text-p19-blue"
                          }`}
                        >
                          <Icon
                            size={18}
                            className="mt-0.5 flex-shrink-0 text-p19-blue"
                          />
                          <span className="font-display text-[1rem] font-semibold leading-snug">
                            {service.title}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            <article
              key={activeService.slug}
              className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm lg:p-10"
            >
              <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-p19-blue-50">
                  <ActiveIcon size={22} className="text-p19-blue" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-p19-navy sm:text-3xl">
                    {activeService.title}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-p19-muted">
                    {activeService.description}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-p19-muted">
                {activeService.overview}
              </p>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="font-display text-sm font-semibold tracking-wider text-p19-blue uppercase">
                    What we do
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {activeService.whatWeDo.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-p19-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-p19-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-sm font-semibold tracking-wider text-p19-blue uppercase">
                    Ideal for
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {activeService.idealFor.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-p19-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-p19-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-p19-cream p-6">
                <h3 className="font-display text-sm font-semibold tracking-wider text-p19-blue uppercase">
                  Outcomes you can expect
                </h3>
                <ul className="mt-4 space-y-3">
                  {activeService.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-p19-navy"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-p19-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={openConsultation}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-p19-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-p19-blue-light hover:shadow-lg hover:shadow-p19-blue/30"
              >
                Discuss this service
                <ArrowUpRight size={16} />
              </button>
            </article>
          </div>
        </div>
      </section>

      <CTABanner onConsultationClick={openConsultation} />
    </main>
  );
}
