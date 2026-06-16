import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "../data/content";

type CaseStudyCardProps = {
  study: CaseStudy;
  compact?: boolean;
};

export function CaseStudyCard({ study, compact = false }: CaseStudyCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-p19-blue/10">
      <div
        className={`relative bg-[linear-gradient(160deg,var(--color-p19-blue-dark)_0%,var(--color-p19-navy)_100%)] ${compact ? "p-4" : "p-6"}`}
      >
        <h3
          className={`font-display font-bold text-white ${compact ? "text-sm leading-snug sm:text-base" : "text-xl"}`}
        >
          {study.client}
        </h3>
        <span className="mt-2 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] text-white/90 sm:text-xs">
          {study.industry}
        </span>
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "p-4" : "p-6"}`}>
        <div className={compact ? "mb-3" : "mb-4"}>
          <h4 className="text-xs font-semibold tracking-wider text-p19-blue uppercase">Challenge</h4>
          <p
            className={`mt-1 leading-relaxed text-p19-muted ${compact ? "line-clamp-3 text-xs" : "text-sm"}`}
          >
            {study.challenge}
          </p>
        </div>
        <div className={compact ? "mb-3" : "mb-4"}>
          <h4 className="text-xs font-semibold tracking-wider text-p19-blue uppercase">Solution</h4>
          <p
            className={`mt-1 leading-relaxed text-p19-muted ${compact ? "line-clamp-3 text-xs" : "text-sm"}`}
          >
            {study.solution}
          </p>
        </div>

        <Link
          to={`/case-studies#${study.slug}`}
          className={`mt-auto inline-flex items-center gap-1.5 self-start rounded-full border border-slate-200/80 bg-white font-semibold text-p19-navy transition-all hover:border-p19-blue/30 hover:bg-p19-blue-50 hover:text-p19-blue ${compact ? "px-3 py-2 text-xs" : "gap-2 px-4 py-2.5 text-sm"}`}
        >
          Read more
          <ArrowUpRight size={compact ? 14 : 16} />
        </Link>
      </div>
    </article>
  );
}
