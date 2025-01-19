import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import LegalPracticeServiceTwo from "@/components/LegalPracticeService/LegalPracticeServiceTwo";
import ChooseAreaOne from "@/components/ChooseArea/ChooseAreaOne";
import EmmergencyCaseOne from "@/components/EmergencyCase/EmergencyCaseOne";

import BgImage from "../../assets/images/bg/services.jpg";
import { useEffect } from "react";

export default function HomeOne() {

  useEffect(() => {
    try {
      const backdrop = document.querySelector(".offcanvas-backdrop");
      const root = document.querySelector("#root");
  
      // Check if `backdrop` exists before trying to remove it
      if (backdrop && root) {
        root.removeChild(backdrop);
      }
    } catch (error) {
      console.error("Error removing backdrop:", error.message);
    }
  }, []);

  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BgImage} title="Tjenester" />
        <LegalPracticeServiceTwo />
        <div style={{marginTop:"-50px"}}></div>
        <ChooseAreaOne />
        <div style={{marginTop:"-50px"}}></div>
        <EmmergencyCaseOne />
      </main>
    </InnerLayout>
  );
}