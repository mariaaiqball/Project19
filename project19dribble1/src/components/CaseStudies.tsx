import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "../data/content";

type CaseStudiesProps = {
  onConsultationClick: () => void;
};

export function CaseStudies({ onConsultationClick }: CaseStudiesProps) {
  return (
    <section id="case-studies" className="bg-p19-cream py-20 lg:py-28">
      <div className="site-container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-p19-blue-50 px-4 py-1.5 text-sm font-semibold text-p19-blue">
              Client Stories
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-p19-navy sm:text-4xl">
              Case studies that speak for themselves
            </h2>
            <p className="mt-4 text-lg text-p19-muted">
              Real results for real businesses — see how we've helped local
              companies overcome their biggest technology challenges.
            </p>
          </div>
          <button
            onClick={onConsultationClick}
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-p19-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-p19-blue-light hover:shadow-lg hover:shadow-p19-blue/30"
          >
            Start Your Story
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.client}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all hover:shadow-xl hover:shadow-p19-blue/10"
            >
              <div className="relative bg-[linear-gradient(160deg,var(--color-p19-blue-dark)_0%,var(--color-p19-navy)_100%)] p-6">
                <div className="parallelogram absolute top-4 right-4 inline-block rounded-lg bg-white/20 px-4 py-2">
                  <span className="font-display text-2xl font-bold text-white">
                    {study.metric}
                  </span>
                </div>
                <p className="text-sm font-medium text-white/70">{study.metricLabel}</p>
                <h3 className="font-display mt-2 text-xl font-bold text-white">
                  {study.client}
                </h3>
                <span className="mt-1 inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs text-white/90">
                  {study.industry}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4">
                  <h4 className="text-xs font-semibold tracking-wider text-p19-blue uppercase">
                    Challenge
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-p19-muted">
                    {study.challenge}
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold tracking-wider text-p19-blue uppercase">
                    Solution
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-p19-muted">
                    {study.solution}
                  </p>
                </div>
                <ul className="mt-auto space-y-2 border-t border-slate-100 pt-4">
                  {study.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-start gap-2 text-sm text-p19-navy"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-p19-blue" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
