import AboutUs from "@/components/AboutUs";
import Blogs from "@/components/Blogs";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroPage from "@/components/HeroPage";
import Navbar from "@/components/Navbar";
import NeedHelp from "@/components/NeedHelp";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <Services />
      <CaseStudy />
      <AboutUs />
      <Projects />
      <Testimonial />
      <Blogs />
      <Contact />
      <NeedHelp />
      <Footer />
    </div>
  );
}
