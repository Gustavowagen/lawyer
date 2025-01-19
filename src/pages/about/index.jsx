import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import AboutTwo from "@/components/About/AboutTwo";
import CtaThree from "@/components/CTA/CtaThree";
import ChooseAreaOne from "@/components/ChooseArea/ChooseAreaOne";
import LegalPracticeServiceThree from "@/components/LegalPracticeService/LegalPracticeServiceThree";
import EmmergencyCaseOne from "@/components/EmergencyCase/EmergencyCaseOne";
import AboutUsImg from "../../assets/images/bg/aboutus.jpg";
import { useEffect } from "react";

export default function AboutPage() {

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
        <InnerHero backgroundImage={AboutUsImg} title="Om oss" />
        <EmmergencyCaseOne />
        <AboutTwo />
        <CtaThree />
        <ChooseAreaOne />
        <LegalPracticeServiceThree />
        <div style={{marginTop:"50px"}}></div>
      </main>
    </InnerLayout>
  );
}
