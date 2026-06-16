import { useOutletContext } from "react-router-dom";
import { FAQ } from "../components/FAQ";
import { CTABanner } from "../components/CTABanner";
import { Contact } from "../components/Contact";
import { PageShell } from "../components/PageShell";
import type { AppOutletContext } from "../layouts/AppLayout";

export function FAQPage() {
  const { openConsultation } = useOutletContext<AppOutletContext>();

  return (
    <main>
      <PageShell>
        <FAQ />
        <CTABanner onConsultationClick={openConsultation} />
        <Contact />
      </PageShell>
    </main>
  );
}
