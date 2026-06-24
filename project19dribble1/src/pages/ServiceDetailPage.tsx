import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CTABanner } from "../components/CTABanner";
import { ServiceDetailContent } from "../components/ServiceDetailContent";
import { getServiceBySlug, serviceDetails } from "../data/services";
import type { AppOutletContext } from "../layouts/AppLayout";

const pageTopPadding =
  "pt-[calc(7rem+env(safe-area-inset-top,0px))] lg:pt-[calc(9rem+env(safe-area-inset-top,0px))]";

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { openConsultation } = useOutletContext<AppOutletContext>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <main className={`bg-white pb-20 ${pageTopPadding}`}>
        <div className="site-container text-center">
          <h1 className="font-display text-2xl font-bold text-p19-navy">Service not found</h1>
          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-p19-blue"
          >
            <ArrowLeft size={16} />
            Back to services
          </Link>
        </div>
      </main>
    );
  }

  const otherServices = serviceDetails.filter((item) => item.slug !== service.slug);

  return (
    <main className="bg-white">
      <section
        className="relative aspect-[5/2] w-full overflow-hidden"
        aria-label={`${service.title} header`}
      >
        <img
          src={service.cardImage}
          alt={service.cardImageAlt}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </section>

      <section className="pb-20 pt-12 lg:pb-28 lg:pt-16">
        <div className="site-container">
          <div className="mx-auto max-w-3xl">
            <button
              type="button"
              onClick={() => navigate("/services")}
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-p19-muted transition-colors hover:text-p19-blue"
            >
              <ArrowLeft size={16} />
              All services
            </button>

            <ServiceDetailContent service={service} onConsultationClick={openConsultation} />

            {otherServices.length > 0 && (
              <div className="mt-16 border-t border-slate-200/80 pt-12">
                <h2 className="font-display text-xl font-bold text-p19-navy">More services</h2>
                <ul className="mt-6 space-y-4">
                  {otherServices.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/services/${item.slug}`}
                        className="group inline-flex items-center gap-2 text-base font-semibold text-p19-navy transition-colors hover:text-p19-blue"
                      >
                        {item.title}
                        <ArrowUpRight
                          size={16}
                          className="text-p19-muted transition-colors group-hover:text-p19-blue"
                        />
                      </Link>
                      <p className="mt-1 text-sm text-p19-muted">{item.description}</p>
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
