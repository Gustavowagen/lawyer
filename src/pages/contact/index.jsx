import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import MapOne from "@/components/Map/MapOne";
import ContactThree from "@/components/Contact/ContactThree";
import ContactInfo from "@/components/Contact/ContactInfo";
import BgImage from "../../assets/images/bg/contact-us2.jpg";
import { useEffect } from "react";

export default function Contact() {

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
        <InnerHero backgroundImage={BgImage} title="Kontakt oss" />
        <MapOne />
        <ContactInfo />
        <ContactThree />
        <div style={{marginBottom:"20px"}}></div>
      </main>
    </InnerLayout>
  );
}
