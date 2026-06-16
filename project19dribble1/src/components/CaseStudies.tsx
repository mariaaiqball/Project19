import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "../data/content";

type CaseStudiesProps = {
  onConsultationClick: () => void;
};

const VISIBLE_LG = 2;
const VISIBLE_SM = 1;

function useVisibleCount() {
  const [count, setCount] = useState(VISIBLE_LG);

  useEffect(() => {
    const update = () => {
      setCount(window.innerWidth >= 1024 ? VISIBLE_LG : VISIBLE_SM);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-p19-blue/10">
      <div className="relative bg-[linear-gradient(160deg,var(--color-p19-blue-dark)_0%,var(--color-p19-navy)_100%)] p-6">
        <h3 className="font-display text-xl font-bold text-white">{study.client}</h3>
        <span className="mt-2 inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs text-white/90">
          {study.industry}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4">
          <h4 className="text-xs font-semibold tracking-wider text-p19-blue uppercase">Challenge</h4>
          <p className="mt-1 text-sm leading-relaxed text-p19-muted">{study.challenge}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-xs font-semibold tracking-wider text-p19-blue uppercase">Solution</h4>
          <p className="mt-1 text-sm leading-relaxed text-p19-muted">{study.solution}</p>
        </div>
        <ul className="mt-auto space-y-2 border-t border-slate-100 pt-4">
          {study.results.map((result) => (
            <li key={result} className="flex items-start gap-2 text-sm text-p19-navy">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-p19-blue" />
              {result}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function CaseStudies({ onConsultationClick }: CaseStudiesProps) {
  const visibleCount = useVisibleCount();
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = Math.max(0, caseStudies.length - visibleCount);
  const isFirst = activeIndex === 0;
  const isLast = activeIndex >= maxIndex;

  const visibleStudies = caseStudies.slice(activeIndex, activeIndex + visibleCount);
  const rangeStart = activeIndex + 1;
  const rangeEnd = activeIndex + visibleStudies.length;

  useEffect(() => {
    setActiveIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  return (
    <section id="case-studies" className="bg-p19-cream py-20 lg:py-28">
      <div className="site-container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-p19-blue-50 px-4 py-1.5 text-sm font-semibold text-p19-blue">
              Client Stories
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-p19-navy sm:text-4xl">
              Client stories that speak for themselves
            </h2>
            <p className="mt-4 text-lg text-p19-muted">
              Real results for real businesses — see how we've helped local companies overcome
              their biggest technology challenges.
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

        <div className="mt-14">
          <div className="mb-6">
            <p className="text-sm font-medium text-p19-muted">
              Stories {rangeStart}–{rangeEnd} of {caseStudies.length}
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <div className="flex w-10 flex-shrink-0 justify-center sm:w-12">
              {!isFirst && (
                <button
                  type="button"
                  onClick={() => setActiveIndex((index) => index - 1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white text-p19-navy shadow-sm transition-all hover:border-p19-blue/30 hover:bg-p19-blue-50 hover:text-p19-blue"
                  aria-label="Previous client stories"
                >
                  <ChevronLeft size={22} />
                </button>
              )}
            </div>

            <div className="min-w-0 flex-1" aria-live="polite">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {visibleStudies.map((study) => (
                  <CaseStudyCard key={study.client} study={study} />
                ))}
              </div>
            </div>

            <div className="flex w-10 flex-shrink-0 justify-center sm:w-12">
              {!isLast && (
                <button
                  type="button"
                  onClick={() => setActiveIndex((index) => index + 1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white text-p19-navy shadow-sm transition-all hover:border-p19-blue/30 hover:bg-p19-blue-50 hover:text-p19-blue"
                  aria-label="Next client stories"
                >
                  <ChevronRight size={22} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
