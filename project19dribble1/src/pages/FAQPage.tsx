import { useOutletContext } from "react-router-dom";
import { FAQ } from "../components/FAQ";
import { CTABanner } from "../components/CTABanner";
import type { AppOutletContext } from "../layouts/AppLayout";

export function FAQPage() {
  const { openConsultation } = useOutletContext<AppOutletContext>();

  return (
    <main>
      <section
        className="relative aspect-[5/2] w-full overflow-hidden"
        aria-label="FAQ header"
      >
        <img
          src="/assets/faq-header.png"
          alt="Team collaborating around laptops in a modern workspace"
          className="h-full w-full object-cover object-center"
        />
      </section>
      <FAQ flushTop />
      <CTABanner onConsultationClick={openConsultation} />
    </main>
  );
}
