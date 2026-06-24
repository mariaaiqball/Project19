import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "../data/content";

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative bg-slate-200 py-20 lg:py-28">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-block rounded-full bg-p19-blue-50 px-4 py-1.5 text-sm font-semibold text-p19-blue">
              Client Stories
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-p19-navy sm:text-4xl">
              Client stories that speak for themselves
            </h2>
            <p className="mt-4 text-lg text-p19-muted">
              Real results for real businesses. See how we've helped local companies overcome
              their biggest technology challenges.
            </p>
            <Link
              to="/case-studies"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-p19-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-p19-slate"
            >
              View all stories
              <ArrowUpRight size={14} />
            </Link>
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
                  <p className="mt-1 truncate text-sm text-p19-muted">{study.industry}</p>
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
  );
}
