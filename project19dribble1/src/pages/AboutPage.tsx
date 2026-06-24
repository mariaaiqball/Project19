import { useOutletContext } from "react-router-dom";
import { About } from "../components/About";
import { AboutEngineering } from "../components/AboutEngineering";
import { CTABanner } from "../components/CTABanner";
import type { AppOutletContext } from "../layouts/AppLayout";

export function AboutPage() {
  const { openConsultation } = useOutletContext<AppOutletContext>();

  return (
    <main>
      <About flushTop />
      <AboutEngineering />
      <CTABanner onConsultationClick={openConsultation} />
    </main>
  );
}
