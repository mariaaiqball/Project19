import { useOutletContext } from "react-router-dom";
import { CTABanner } from "../components/CTABanner";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data/content";
import type { AppOutletContext } from "../layouts/AppLayout";

export function ServicesPage() {
  const { openConsultation } = useOutletContext<AppOutletContext>();

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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner onConsultationClick={openConsultation} />
    </main>
  );
}
