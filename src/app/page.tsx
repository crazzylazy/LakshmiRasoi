import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MealPlans from "@/components/MealPlans";
import DailyMenu from "@/components/DailyMenu";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MealPlans />
        <DailyMenu />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <ServiceArea />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
