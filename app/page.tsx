import Navbar from "@/components/Navbar";
import HeroSection from "@/components/hero-section";
import AboutUs from "@/components/AboutUs";
import ProductsSection from "@/components/products/products-section";
import OurWork from "@/components/work/our-work";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ProductsSection />
      <OurWork />
      <Testimonials />
      <ContactUs />
    </main>
  );
}