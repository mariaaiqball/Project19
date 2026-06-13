import { services } from "../data/content";

export function Services() {
  return (
    <section id="services" className="relative bg-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-p19-cream/50 to-white" />

      <div className="relative site-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-p19-blue-50 px-4 py-1.5 text-sm font-semibold text-p19-blue">
            What We Offer
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-p19-navy sm:text-4xl">
            A wide variety of services
          </h2>
          <p className="mt-4 text-lg text-p19-muted">
            From custom software to AI solutions — we bring the expertise local
            businesses need, scaled to fit your budget and goals.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 transition-all hover:-translate-y-1 hover:border-p19-blue/30 hover:shadow-xl hover:shadow-p19-blue/10"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-p19-blue-50 transition-colors group-hover:bg-p19-blue">
                  <Icon
                    size={20}
                    className="text-p19-blue transition-colors group-hover:text-white"
                  />
                </div>
                <h3 className="font-display text-sm font-bold text-p19-navy">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-p19-muted">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
