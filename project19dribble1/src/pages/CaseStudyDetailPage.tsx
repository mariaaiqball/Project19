import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CaseStudyRichContent } from "../components/CaseStudyRichContent";
import { CTABanner } from "../components/CTABanner";
import { caseStudies } from "../data/content";
import { getCaseStudyDetail } from "../data/caseStudyDetails";
import type { AppOutletContext } from "../layouts/AppLayout";

const pageTopPadding =
  "pt-[calc(7rem+env(safe-area-inset-top,0px))] lg:pt-[calc(9rem+env(safe-area-inset-top,0px))]";

export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { openConsultation } = useOutletContext<AppOutletContext>();
  const study = caseStudies.find((item) => item.slug === slug);
  const detail = slug ? getCaseStudyDetail(slug) : undefined;

  if (!study || !detail) {
    return (
      <main className={`bg-white pb-20 ${pageTopPadding}`}>
        <div className="site-container text-center">
          <h1 className="font-display text-2xl font-bold text-p19-navy">Story not found</h1>
          <Link
            to="/case-studies"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-p19-blue"
          >
            <ArrowLeft size={16} />
            Back to client stories
          </Link>
        </div>
      </main>
    );
  }

  const otherStories = caseStudies.filter((item) => item.slug !== study.slug);

  return (
    <main className="bg-white">
      <section className={`pb-20 lg:pb-28 ${pageTopPadding}`}>
        <div className="site-container">
          <div className="mx-auto max-w-3xl">
            <button
              type="button"
              onClick={() => navigate("/case-studies")}
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-p19-muted transition-colors hover:text-p19-blue"
            >
              <ArrowLeft size={16} />
              All client stories
            </button>

            <CaseStudyRichContent detail={detail} onConsultationClick={openConsultation} />

            {otherStories.length > 0 && (
              <div className="mt-16 border-t border-slate-200/80 pt-12">
                <h2 className="font-display text-xl font-bold text-p19-navy">More client stories</h2>
                <ul className="mt-6 space-y-4">
                  {otherStories.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/case-studies/${item.slug}`}
                        className="group inline-flex items-center gap-2 text-base font-semibold text-p19-navy transition-colors hover:text-p19-blue"
                      >
                        {item.client}
                        <ArrowUpRight
                          size={16}
                          className="text-p19-muted transition-colors group-hover:text-p19-blue"
                        />
                      </Link>
                      <p className="mt-1 text-sm text-p19-muted">{item.industry}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTABanner onConsultationClick={openConsultation} />
    </main>
  );
}
