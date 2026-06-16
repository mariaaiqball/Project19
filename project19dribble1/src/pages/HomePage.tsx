import { useOutletContext } from "react-router-dom";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { CaseStudies } from "../components/CaseStudies";
import { FAQ } from "../components/FAQ";
import { CTABanner } from "../components/CTABanner";
import { Contact } from "../components/Contact";
import type { AppOutletContext } from "../layouts/AppLayout";

export function HomePage() {
  const { openConsultation } = useOutletContext<AppOutletContext>();

  return (
    <main>
      <Hero onConsultationClick={openConsultation} />
      <About />
      <Services />
      <CaseStudies onConsultationClick={openConsultation} />
      <FAQ />
      <Contact />
      <CTABanner onConsultationClick={openConsultation} />
    </main>
  );
}
