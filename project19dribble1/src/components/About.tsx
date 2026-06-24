import { Target, Shield, Handshake } from "lucide-react";
import { approachSteps, values } from "../data/content";

const valueIcons = [Target, Shield, Handshake];

type AboutProps = {
  flushTop?: boolean;
  showApproach?: boolean;
};

export function About({
  flushTop = false,
  showApproach = true,
}: AboutProps) {
  const approachContent = (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-p19-blue-50 px-4 py-1.5 text-sm font-semibold text-p19-blue">
          How We Work
        </span>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-p19-navy sm:text-4xl">
          Our approach
        </h2>
        <p className="mt-4 text-lg text-p19-muted">
          A proven process designed for businesses that need results without the
          enterprise price tag.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {approachSteps.map((step) => (
          <article
            key={step.step}
            className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all hover:border-p19-blue/30 hover:shadow-lg hover:shadow-p19-blue/5"
          >
            <span className="font-display text-4xl font-bold text-p19-blue/30 transition-colors group-hover:text-p19-blue">
              {step.step}
            </span>
            <h3 className="font-display mt-4 text-lg font-bold text-p19-navy">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-p19-muted">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </>
  );

  return (
    <>
      {flushTop && (
        <section
          className="relative aspect-[5/2] w-full overflow-hidden"
          aria-label="About header"
        >
          <img
            src="/assets/about-header.png"
            alt="Professional working at a home office desk with a tablet and warm natural light"
            className="h-full w-full object-cover object-center"
          />
        </section>
      )}

      <section
        id="about"
        className={
          flushTop
            ? "relative bg-white pt-12 lg:pt-16"
            : !showApproach
              ? "relative bg-slate-200 pt-20 pb-20 lg:pt-28 lg:pb-28"
              : "relative bg-slate-200 pt-20 lg:pt-28"
        }
      >
        <div className="site-container">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="inline-block rounded-full bg-p19-blue-50 px-4 py-1.5 text-sm font-semibold text-p19-blue">
                Who We Are
              </span>
              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-p19-navy sm:text-4xl">
                BUILT FOR BUSINESSES THAT NEED A PARTNER, NOT A VENDOR.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-p19-muted">
              With 7+ years of experience ranging from startups to aviation giants, we've seen firsthand how frustrating it can be to get the technology that you need. That's why we're here to help. We translate your business objectives into a technical roadmap that fits your budget and timeline.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-p19-muted">
              Our values reflect our commitment to delivering results that matter 
              to your business. We lead with a results, honesty, and 
              reliabilty driven approach to stay true to our promises.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-1">
              {values.map((value, i) => {
                const Icon = valueIcons[i];
                return (
                  <article
                    key={value.title}
                    className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all hover:border-p19-blue/30 hover:shadow-lg hover:shadow-p19-blue/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-p19-blue-50 transition-colors group-hover:bg-p19-blue group-hover:text-white">
                        <Icon size={22} className="text-p19-blue group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-p19-navy">
                          {value.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-p19-muted">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {showApproach && (
          <div
            id="approach"
            className={
              flushTop
                ? "site-container mt-20 pb-8 lg:mt-28 lg:pb-10"
                : "site-container mt-20 pb-20 lg:mt-28 lg:pb-28"
            }
          >
            {approachContent}
          </div>
        )}
      </section>
    </>
  );
}
