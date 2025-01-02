import Navbar from "@/components/Navbar";
import HeroSection from "@/components/hero-section";
import AboutUs from "@/components/AboutUs";
import OurWork from "@/components/work/our-work";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <OurWork />
      <Testimonials />
      <ContactUs />
    </main>
  );
}