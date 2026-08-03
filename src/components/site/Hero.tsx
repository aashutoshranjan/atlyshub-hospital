import { ArrowRight, ShieldCheck, Globe2, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-healthcare-team.jpg";

const countries = ["UAE", "Saudi Arabia", "Qatar", "Oman", "Bahrain", "Kuwait"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden gradient-hero pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-medical uppercase">
            <Globe2 className="h-3.5 w-3.5" /> International Healthcare Staffing
          </span>
          <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.08] text-primary sm:text-5xl lg:text-[3.4rem]">
            Connecting Global Healthcare Talent with{" "}
            <span className="text-gradient-accent">Leading Healthcare Organizations</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            MedTalent Global partners with hospitals, medical centres, clinics, and healthcare
            groups across the GCC to deliver qualified healthcare professionals through reliable
            recruitment and staffing solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Hire Talent <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outlineNavy" size="xl" asChild>
              <a href="#candidates">Find Jobs</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" /> Pre-screened professionals
            </span>
            <span className="inline-flex items-center gap-2">
              <Timer className="h-4 w-4 text-accent" /> Faster hiring process
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {countries.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-primary"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-medical/10 blur-2xl" aria-hidden />
          <img
            src={heroImage}
            alt="Doctors, nurses and allied healthcare professionals in a modern hospital"
            width={1408}
            height={1104}
            className="relative w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-elevated)]"
          />
          <div className="surface-card absolute -bottom-6 left-4 hidden items-center gap-4 px-5 py-4 sm:flex">
            <div>
              <p className="font-display text-2xl font-extrabold text-primary">6</p>
              <p className="text-xs text-muted-foreground">GCC countries served</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-display text-2xl font-extrabold text-accent">20+</p>
              <p className="text-xs text-muted-foreground">Healthcare specialties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
