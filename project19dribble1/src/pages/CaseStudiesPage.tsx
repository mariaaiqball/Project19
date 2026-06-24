import { Link, useOutletContext } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CTABanner } from "../components/CTABanner";
import { caseStudies } from "../data/content";
import type { AppOutletContext } from "../layouts/AppLayout";

export function CaseStudiesPage() {
  const { openConsultation } = useOutletContext<AppOutletContext>();

  return (
    <main>
      <section
        className="relative aspect-[5/2] w-full overflow-hidden"
        aria-label="Client stories header"
      >
        <img
          src="/assets/client-stories-header.png"
          alt="Business colleagues celebrating a successful outcome with a high five in a modern office"
          className="h-full w-full object-cover object-center"
        />
      </section>

      <section className="relative bg-p19-cream pb-20 pt-12 lg:pb-28 lg:pt-16">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="inline-block rounded-full bg-p19-blue-50 px-4 py-1.5 text-sm font-semibold text-p19-blue">
                Client Stories
              </span>
              <h1 className="font-display mt-4 text-3xl font-bold tracking-tight text-p19-navy sm:text-4xl">
                Client stories that speak for themselves
              </h1>
              <p className="mt-4 text-lg text-p19-muted">
                Real results for real businesses. See how we've helped local companies overcome their biggest technical challenges.
              </p>
            </div>

            <div className="space-y-3">
              {caseStudies.map((study) => (
                <Link
                  key={study.slug}
                  to={`/case-studies/${study.slug}`}
                  className="flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 transition-all hover:border-p19-blue/30 hover:shadow-md hover:shadow-p19-blue/5"
                >
                  <div className="min-w-0">
                    <span className="font-display text-sm font-semibold text-p19-navy sm:text-base">
                      {study.client}
                    </span>
                    <p className="mt-1 text-sm text-p19-muted">{study.industry}</p>
                  </div>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-p19-cream">
                    <ArrowRight size={16} className="text-p19-muted" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner onConsultationClick={openConsultation} />
    </main>
  );
}
