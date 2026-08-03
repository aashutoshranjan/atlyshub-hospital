import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  TrustSection,
  WhyUs,
  Services,
  Specialties,
  Industries,
  Process,
  Stats,
  About,
  Testimonials,
} from "@/components/site/Sections";
import { Contact, Footer } from "@/components/site/ContactFooter";

const title = "MedTalent Global | Healthcare Staffing & Recruitment GCC";
const description =
  "Premium healthcare recruitment and executive search across UAE, Saudi Arabia, Qatar, Oman, Bahrain and Kuwait. Hire doctors, nurses and allied healthcare professionals.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Healthcare Staffing UAE, Healthcare Recruitment Saudi Arabia, Healthcare Recruitment Qatar, Healthcare Recruitment Oman, Healthcare Staffing Bahrain, Healthcare Staffing Kuwait, Doctors Recruitment UAE, Nurse Recruitment UAE, Medical Staffing GCC, Healthcare Executive Search, Hospital Recruitment, Healthcare Recruitment Agency, Medical Recruitment Company, Healthcare Staffing Solutions",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MedTalent Global",
          description,
          areaServed: [
            "United Arab Emirates",
            "Saudi Arabia",
            "Qatar",
            "Oman",
            "Bahrain",
            "Kuwait",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <WhyUs />
        <Services />
        <Specialties />
        <Industries />
        <Process />
        <Stats />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
