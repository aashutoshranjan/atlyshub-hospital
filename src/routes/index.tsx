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
  Branches,
} from "@/components/site/Sections";
import { Contact, Footer } from "@/components/site/ContactFooter";

const title = "Atlyshub Multispeciality Hospital | Bangalore & 28+ Branches in India";
const description =
  "Atlyshub Multispeciality Hospital offers advanced multispeciality care, 24x7 emergency and trauma services, modern diagnostics and expert doctors across Bangalore and 28+ branches in India.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Multispeciality Hospital Bangalore, Best Hospital in Bangalore, Atlyshub Hospital, 24x7 Emergency Hospital India, Cardiology Hospital Bangalore, Orthopaedic Hospital India, Neurology Hospital Bangalore, Cancer Care Hospital India, Maternity Hospital Bangalore, Hospital near me",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://atlyshub.in/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://atlyshub.in/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hospital",
          name: "Atlyshub Multispeciality Hospital",
          description,
          url: "https://atlyshub.in/",
          email: "support@atlyshub.in",
          medicalSpecialty: [
            "Cardiovascular",
            "Orthopedic",
            "Neurologic",
            "Oncologic",
            "Pediatric",
            "Obstetric",
            "Emergency",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
          areaServed: "India",
          availableService: {
            "@type": "MedicalProcedure",
            name: "24x7 Emergency and Trauma Care",
          },
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
        <Branches />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
