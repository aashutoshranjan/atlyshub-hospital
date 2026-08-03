import {
  Award,
  Building2,
  CheckCircle2,
  Clock,
  FlaskConical,
  HeartPulse,
  Home,
  Landmark,
  Microscope,
  Quote,
  Search,
  Stethoscope,
  Users,
  Globe2,
  Pill,
  Activity,
  Baby,
  Briefcase,
  UserCheck,
  FileCheck2,
  CalendarCheck,
  Handshake,
  BadgeCheck,
  LifeBuoy,
  Scan,
  ScrollText,
  Network,
  ShieldCheck,
  Zap,
  UsersRound,
  HeartHandshake,
  Headphones,
} from "lucide-react";
import { Reveal, Counter } from "@/components/site/Reveal";

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-medical">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-extrabold text-primary sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

const trusted = [
  { label: "Hospitals", icon: Building2 },
  { label: "Clinics", icon: Stethoscope },
  { label: "Medical Centres", icon: HeartPulse },
  { label: "Diagnostic Labs", icon: Microscope },
  { label: "IVF Centres", icon: Baby },
  { label: "Pharmaceutical Companies", icon: Pill },
  { label: "Healthcare Groups", icon: Landmark },
];

export function TrustSection() {
  return (
    <section className="border-y border-border bg-secondary/40 py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by healthcare organizations across the GCC
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {trusted.map(({ label, icon: Icon }, i) => (
            <Reveal key={label} delay={i * 60}>
              <div className="flex h-full flex-col items-center gap-2 rounded-2xl border border-border bg-background px-3 py-6 text-center transition-shadow hover:shadow-[var(--shadow-card)]">
                <Icon className="h-5 w-5 text-medical" />
                <span className="text-xs font-medium text-primary">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { t: "Specialized Healthcare Recruitment", icon: Stethoscope },
  { t: "GCC Market Expertise", icon: Globe2 },
  { t: "International Talent Network", icon: Network },
  { t: "Pre-Screened Professionals", icon: ShieldCheck },
  { t: "Dedicated Recruitment Consultants", icon: UsersRound },
  { t: "Faster Hiring Process", icon: Zap },
  { t: "Ethical Recruitment Practices", icon: BadgeCheck },
  { t: "Long-Term Recruitment Partnership", icon: HeartHandshake },
  { t: "Personalized Client Support", icon: Headphones },
];

export function WhyUs() {
  return (
    <section id="why" className="py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why healthcare leaders choose MedTalent Global"
          subtitle="A specialist recruitment partner built around quality, speed, ethics and long-term partnership."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ t, icon: Icon }, i) => (
            <Reveal key={t} delay={(i % 3) * 90}>
              <div className="surface-card flex h-full items-start gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="pt-2 text-sm font-semibold text-primary">{t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Search,
    title: "Healthcare Recruitment",
    desc: "End-to-end hiring for clinical and non-clinical roles across hospitals, clinics and healthcare groups.",
  },
  {
    icon: Briefcase,
    title: "Permanent Staffing",
    desc: "Long-term hires for doctors, nurses, allied healthcare and hospital administration teams.",
  },
  {
    icon: Award,
    title: "Executive Search",
    desc: "Confidential leadership mandates for medical directors, hospital CEOs and department heads.",
  },
  {
    icon: CalendarCheck,
    title: "Contract Staffing",
    desc: "Locum, temporary and project-based staffing to cover peaks, leave and new department launches.",
  },
  {
    icon: Globe2,
    title: "International Recruitment",
    desc: "Cross-border sourcing with credential verification guidance and relocation coordination.",
  },
  {
    icon: Users,
    title: "Healthcare Workforce Solutions",
    desc: "Workforce planning, volume hiring and department build-outs with a dedicated consultant.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/30 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="End-to-end healthcare staffing solutions"
          subtitle="From a single critical hire to a full department build-out across the Gulf region."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 3) * 90}>
              <article className="surface-card h-full p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elevated)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-navy text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const specialties = [
  { title: "Doctors", icon: Stethoscope, desc: "Consultants, specialists, surgeons and general physicians." },
  { title: "Nurses", icon: HeartPulse, desc: "ICU, NICU, OT, ER, dialysis and cath lab nursing teams." },
  { title: "Allied Healthcare", icon: Activity, desc: "Therapists, technicians and clinical support professionals." },
  { title: "Laboratory Professionals", icon: FlaskConical, desc: "Lab technologists, microbiologists and pathology staff." },
  { title: "Radiology", icon: Scan, desc: "Radiographers, sonographers and imaging specialists." },
  { title: "Pharmacy", icon: Pill, desc: "Clinical, hospital and retail pharmacy professionals." },
  { title: "Rehabilitation", icon: LifeBuoy, desc: "Physiotherapy, occupational and speech therapy talent." },
  { title: "Hospital Administration", icon: ScrollText, desc: "Operations, HR, billing, coding and front-office teams." },
  { title: "Healthcare Executives", icon: Award, desc: "CEOs, medical directors and senior leadership hires." },
];

export function Specialties() {
  return (
    <section id="specialties" className="py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Specialties"
          title="Specialist talent across every clinical discipline"
          subtitle="We recruit across clinical, diagnostic, therapeutic and leadership functions."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map(({ title, icon: Icon, desc }, i) => (
            <Reveal key={title} delay={(i % 3) * 90}>
              <div className="surface-card group h-full p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elevated)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-medical/10 text-medical transition-colors group-hover:bg-medical group-hover:text-medical-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const industries = [
  { label: "Hospitals", icon: Building2 },
  { label: "Medical Centres", icon: HeartPulse },
  { label: "Clinics", icon: Stethoscope },
  { label: "Diagnostic Laboratories", icon: Microscope },
  { label: "Home Healthcare", icon: Home },
  { label: "Rehabilitation Centres", icon: Activity },
  { label: "IVF Centres", icon: Baby },
  { label: "Pharmaceutical Companies", icon: Pill },
  { label: "Government Healthcare", icon: Landmark },
  { label: "Healthcare Groups", icon: Network },
];

export function Industries() {
  return (
    <section id="industries" className="bg-secondary/30 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Partnering across the healthcare ecosystem"
        />
        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {industries.map(({ label, icon: Icon }, i) => (
            <Reveal key={label} delay={(i % 5) * 70}>
              <div className="surface-card flex h-full flex-col items-center gap-3 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elevated)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-primary">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { title: "Requirement Discussion", icon: Search },
  { title: "Candidate Sourcing", icon: Users },
  { title: "Screening & Verification", icon: FileCheck2 },
  { title: "Interview Coordination", icon: CalendarCheck },
  { title: "Offer Management", icon: Handshake },
  { title: "Joining Support", icon: BadgeCheck },
  { title: "Post Placement Follow-up", icon: LifeBuoy },
];

export function Process() {
  return (
    <section id="employers" className="py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Recruitment Process"
          title="A transparent, structured hiring journey"
          subtitle="Built for employers who need clinical quality, compliance and speed at the same time."
        />

        <div className="relative mt-16 overflow-x-auto pb-4">
          <ol className="flex min-w-max gap-5 lg:min-w-0 lg:grid lg:grid-cols-7 lg:gap-4">
            {steps.map(({ title, icon: Icon }, idx) => (
              <li key={title} className="relative w-52 lg:w-auto">
                <Reveal delay={idx * 80}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex w-full items-center justify-center">
                      <span
                        aria-hidden
                        className={
                          idx === 0
                            ? "hidden"
                            : "absolute right-1/2 top-1/2 hidden h-px w-full -translate-y-1/2 bg-border lg:block"
                        }
                      />
                      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl gradient-navy text-primary-foreground shadow-[var(--shadow-cta)]">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <span className="mt-4 inline-flex h-6 items-center rounded-full bg-accent/10 px-2.5 text-[11px] font-bold text-accent">
                      Step {idx + 1}
                    </span>
                    <h3 className="mt-2 font-display text-sm font-bold leading-snug text-primary">
                      {title}
                    </h3>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: 5000, suffix: "+", label: "Healthcare Professionals" },
  { value: 120, suffix: "+", label: "Healthcare Organizations Served" },
  { value: 6, suffix: "", label: "GCC Countries" },
  { value: 1500, suffix: "+", label: "Successful Placements" },
];

export function Stats() {
  return (
    <section className="gradient-navy py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-extrabold text-primary-foreground sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-sm text-primary-foreground/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About Us"
            center={false}
            title="An international healthcare staffing and recruitment company"
            subtitle="MedTalent Global is an international healthcare staffing and recruitment company connecting healthcare organizations with qualified medical professionals across the Gulf region."
          />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We specialize in recruiting doctors, nurses, allied healthcare professionals, healthcare
            executives, and hospital administration staff.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Our mission is to build long-term recruitment partnerships by delivering quality talent,
            faster hiring, and exceptional client service.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              { icon: UserCheck, t: "Quality first", d: "Every candidate pre-screened and verified." },
              { icon: Clock, t: "Faster hiring", d: "Shortlists that keep departments staffed." },
              { icon: Globe2, t: "Pan-GCC reach", d: "Six markets, one accountable partner." },
              { icon: Handshake, t: "Long-term partnership", d: "Support continues after joining." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="surface-card p-6">
                <Icon className="h-5 w-5 text-accent" />
                <p className="mt-3 font-display text-sm font-bold text-primary">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div id="candidates" className="surface-card p-8 lg:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-medical">
              For Candidates
            </span>
            <h3 className="mt-3 font-display text-2xl font-extrabold text-primary">
              Find jobs with leading Gulf healthcare employers
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We represent doctors, nurses, allied healthcare professionals and healthcare leaders
              seeking roles with leading hospitals and healthcare groups across the GCC.
            </p>
            <ul className="mt-6 grid gap-3.5">
              {[
                "Confidential career consultation",
                "Roles with accredited hospitals and healthcare groups",
                "Credential verification guidance",
                "Visa and relocation coordination support",
                "Interview preparation with your dedicated consultant",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const testimonials = [
  {
    role: "Hospital Administrator",
    org: "Multi-specialty Hospital, UAE",
    quote:
      "MedTalent Global understood our staffing requirement immediately and delivered a verified shortlist within days. The process was structured and transparent throughout.",
  },
  {
    role: "Medical Director",
    org: "Healthcare Group, Saudi Arabia",
    quote:
      "Their consultants speak our clinical language. Candidate quality for consultant-level roles has been consistently strong.",
  },
  {
    role: "HR Manager",
    org: "Medical Centre, Qatar",
    quote:
      "Nursing and allied healthcare hiring used to take months. With a dedicated consultant, our time-to-fill improved significantly.",
  },
  {
    role: "Chief Executive Officer",
    org: "Diagnostic Network, Oman",
    quote:
      "A genuine long-term recruitment partner — they support us well beyond the joining date.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/30 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by healthcare decision makers"
          subtitle="Placeholder testimonials representing the organisations we partner with."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.role} delay={(i % 2) * 100}>
              <figure className="surface-card h-full p-8">
                <Quote className="h-6 w-6 text-accent" />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-sm font-bold text-primary">{t.role}</p>
                  <p className="text-xs text-muted-foreground">{t.org}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
