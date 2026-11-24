import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MealPlans from "@/components/MealPlans";
import DailyMenu from "@/components/DailyMenu";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import { faqs } from "@/lib/faqs";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <MealPlans />
        <DailyMenu />
        <WhyChooseUs />
        <Testimonials />
        <ServiceArea />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <StickyMobileCTA />
    </>
  );
}
