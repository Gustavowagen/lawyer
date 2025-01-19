import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOne from "@/pages";
import Services from "@/pages/services";
import About from "@/pages/about";
import Testimonial from "@/pages/testimonial";
import Faq from "@/pages/faq";
import Contact from "@/pages/contact";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeOne />} />
        {/* Inner pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
