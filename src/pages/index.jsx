import LayoutOne from "@/Layout/LayoutOne";
import HeroOne from "@/components/Hero/HeroOne";
import ServiceOne from "@/components/Service/ServiceOne";
import CtaOne from "@/components/CTA/CtaOne";
import AboutOne from "@/components/About/AboutOne";
import CaseStudyOne from "@/components/CaseStudy/CaseStudyOne";
import PortfolioOne from "@/components/Portfolio/PortfolioOne";
import TeamOne from "@/components/Team/TeamOne";
import TestimonialOne from "@/components/Testimonial/TestimonialOne";
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
    <LayoutOne>
      <main id="wrapper" className="wrapper">
        <HeroOne />
        <ServiceOne />
        <CtaOne />
        <AboutOne />
        <CaseStudyOne />
        <PortfolioOne />
        <TeamOne />
        <TestimonialOne />
      </main>
    </LayoutOne>
  );
}
