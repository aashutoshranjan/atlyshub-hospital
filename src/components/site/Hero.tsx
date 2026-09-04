import { ArrowRight, CalendarCheck, HeartPulse, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hospital-hero.jpg";

const highlights = ["24x7 Emergency", "ICU & Critical Care", "Modular Operation Theatres", "Advanced Diagnostics"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden gradient-hero pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-medical">
            <MapPin className="h-3.5 w-3.5" /> Headquartered in Bengaluru · 28+ branches · Tie-up with multiple hospitals across India
          </span>
          <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.08] text-primary sm:text-5xl lg:text-[3.4rem]">
            Advanced Multispeciality Care,{" "}
            <span className="text-gradient-accent">Close to Your Home</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Atlyshub Multispeciality Hospital brings together experienced doctors, modern operation
            theatres, critical care units and 24x7 emergency services across more than 28 hospital
            branches in India.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Book an Appointment <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <HeartPulse className="h-4 w-4 text-accent" /> 24x7 emergency &amp; ambulance
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarCheck className="h-4 w-4 text-accent" /> Same-day OPD appointments
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {highlights.map((c) => (
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
            alt="Doctors and nurses caring for patients at Atlyshub Multispeciality Hospital"
            width={1408}
            height={1104}
            className="relative w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-elevated)]"
          />
          <div className="surface-card absolute -bottom-6 left-4 hidden items-center gap-4 px-5 py-4 sm:flex">
            <div>
              <p className="font-display text-2xl font-extrabold text-primary">28+</p>
              <p className="text-xs text-muted-foreground">Hospital branches in India</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-display text-2xl font-extrabold text-accent">30+</p>
              <p className="text-xs text-muted-foreground">Medical specialities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
