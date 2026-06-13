import { Target, Shield, Handshake } from "lucide-react";
import { values } from "../data/content";

const valueIcons = [Target, Shield, Handshake];

export function About() {
  return (
    <section id="about" className="relative bg-p19-cream py-20 lg:py-28">
      <div className="site-container">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-block rounded-full bg-p19-blue-50 px-4 py-1.5 text-sm font-semibold text-p19-blue">
              Who We Are
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-p19-navy sm:text-4xl">
              Built for businesses that need a partner, not a vendor.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-p19-muted">
            With 7+ years of experience ranging from startups to aviation giants, we've seen 
            firsthand how frustrating it can be to get the technology that you need. 
            That's why we're here to help. We translate your business objectives 
            into a technical roadmap that fits your budget and timeline.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-p19-muted">
            Our values reflect our commitment to delivering results that matter 
            to your business. We lead with a results driven approach, honesty, and 
            accountability to stay true to our promises.
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
    </section>
  );
}
