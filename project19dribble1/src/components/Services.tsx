import { services } from "../data/content";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-28">
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
            From custom software to AI solutions, we bring the expertise local
            businesses need, scaled to fit your budget and goals.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
