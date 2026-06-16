import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "../data/content";
import { CaseStudyCard } from "./CaseStudyCard";

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
              Client stories that speak for themselves
            </h2>
            <p className="mt-4 text-lg text-p19-muted">
              Real results for real businesses. See how we've helped local companies overcome
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

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
