import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Approach } from "./components/Approach";
import { CaseStudies } from "./components/CaseStudies";
import { FAQ } from "./components/FAQ";
import { CTABanner } from "./components/CTABanner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ConsultationModal } from "./components/ConsultationModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openConsultation = () => setModalOpen(true);

  return (
    <>
      <Header onConsultationClick={openConsultation} />
      <main>
        <Hero onConsultationClick={openConsultation} />
        <About />
        <Services />
        <Approach />
        <CaseStudies onConsultationClick={openConsultation} />
        <FAQ />
        <CTABanner onConsultationClick={openConsultation} />
        <Contact />
      </main>
      <Footer />
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
