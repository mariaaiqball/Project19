import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ConsultationModal } from "../components/ConsultationModal";
import { ScrollToTop } from "../components/ScrollToTop";
import { ScrollToHash } from "../components/ScrollToHash";

export type AppOutletContext = {
  openConsultation: () => void;
};

export function AppLayout() {
  const [modalOpen, setModalOpen] = useState(false);
  const openConsultation = () => setModalOpen(true);

  return (
    <>
      <ScrollToTop />
      <ScrollToHash />
      <div className="safari-safe-top" aria-hidden="true" />
      <Header onConsultationClick={openConsultation} />
      <Outlet context={{ openConsultation } satisfies AppOutletContext} />
      <Footer />
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
