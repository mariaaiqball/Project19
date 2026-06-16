import { useOutletContext } from "react-router-dom";
import { About } from "../components/About";
import { CTABanner } from "../components/CTABanner";
import type { AppOutletContext } from "../layouts/AppLayout";

export function AboutPage() {
  const { openConsultation } = useOutletContext<AppOutletContext>();

  return (
    <main>
      <About flushTop />
      <CTABanner onConsultationClick={openConsultation} />
    </main>
  );
}
