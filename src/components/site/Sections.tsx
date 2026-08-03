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
  GraduationCap,
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
} from "lucide-react";

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
      <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
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
    <section className="border-y border-border bg-secondary/50 py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by healthcare organizations across the GCC
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {trusted.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background px-3 py-5 text-center transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <Icon className="h-5 w-5 text-medical" />
              <span className="text-xs font-medium text-primary">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  "Healthcare Recruitment Specialists",
  "GCC Healthcare Market Expertise",
  "Fast Candidate Delivery",
  "Pre-Screened Professionals",
  "Permanent Recruitment",
  "Executive Search",
  "Contract Staffing",
  "International Talent Acquisition",
  "Dedicated Recruitment Consultant",
  "Long-Term Recruitment Partner",
  "Transparent Hiring Process",
  "Pan GCC Hiring",
];

export function WhyUs() {
  return (
    <section id="why" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why healthcare leaders choose MedTalent Global"
          subtitle="A specialist recruitment partner built around quality, speed, compliance and long-term partnership."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r}
              className="surface-card flex items-start gap-3 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-semibold text-primary">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Briefcase,
    title: "Permanent Recruitment",
    items: [
      "Doctors",
      "Nurses",
      "Hospital Administration",
      "Allied Healthcare",
      "Medical Executives",
    ],
  },
  {
    icon: Award,
    title: "Executive Search",
    items: [
      "Medical Directors",
      "Hospital CEOs",
      "Department Heads",
      "Consultants",
      "Leadership Hiring",
    ],
  },
  {
    icon: Users,
    title: "Healthcare Staffing",
    items: [
      "Contract Staffing",
      "Temporary Staffing",
      "Project Staffing",
      "Locum Doctors",
      "Travel Nurses",
    ],
  },
  {
    icon: Globe2,
    title: "International Recruitment",
    items: [
      "Cross-border healthcare recruitment",
      "Visa assistance coordination",
      "Credential verification guidance",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="End-to-end healthcare staffing solutions"
          subtitle="From single critical hires to full department build-outs across the GCC."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, items }) => (
            <article
              key={title}
              className="surface-card group p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-navy text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">{title}</h3>
              <ul className="mt-4 grid gap-2">
                {items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const specialtyGroups = [
  {
    title: "Doctors",
    icon: Stethoscope,
    items: [
      "General Physicians",
      "Consultants",
      "Specialists",
      "Surgeons",
      "Dentists",
      "Radiologists",
      "Anaesthetists",
      "Emergency Physicians",
      "ICU Specialists",
      "Pediatricians",
      "Gynecologists",
      "Cardiologists",
      "Orthopedic Surgeons",
      "Dermatologists",
      "Psychiatrists",
      "ENT Specialists",
      "Ophthalmologists",
      "Urologists",
      "Neurologists",
      "Oncologists",
      "Nephrologists",
      "Pulmonologists",
    ],
  },
  {
    title: "Nursing",
    icon: HeartPulse,
    items: [
      "Staff Nurse",
      "ICU Nurse",
      "NICU Nurse",
      "OT Nurse",
      "ER Nurse",
      "Dialysis Nurse",
      "Cath Lab Nurse",
    ],
  },
  {
    title: "Allied Healthcare",
    icon: FlaskConical,
    items: [
      "Lab Technician",
      "Radiographer",
      "Physiotherapist",
      "Pharmacist",
      "Respiratory Therapist",
      "OT Technician",
      "Anaesthesia Technician",
      "Medical Coder",
    ],
  },
  {
    title: "Administration",
    icon: Building2,
    items: [
      "Hospital Administrator",
      "HR Manager",
      "Receptionist",
      "Medical Secretary",
      "Billing Executive",
      "Accounts Executive",
    ],
  },
];

export function Specialties() {
  return (
    <section id="specialties" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Medical Specialties"
          title="Specialist talent across every clinical discipline"
          subtitle="We recruit across more than 20 healthcare specialties and support functions."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {specialtyGroups.map(({ title, icon: Icon, items }) => (
            <div key={title} className="surface-card p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-medical/10 text-medical">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-primary">{title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:border-accent/40 hover:bg-accent/10"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
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
  { label: "IVF Centres", icon: Baby },
  { label: "Rehabilitation Centres", icon: Activity },
  { label: "Dialysis Centres", icon: LifeBuoy },
  { label: "Pharmaceutical Companies", icon: Pill },
  { label: "Home Healthcare", icon: Home },
  { label: "Healthcare Startups", icon: Briefcase },
  { label: "Government Healthcare", icon: Landmark },
  { label: "Medical Universities", icon: GraduationCap },
];

export function Industries() {
  return (
    <section id="industries" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Partnering across the healthcare ecosystem"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="surface-card flex items-center gap-3 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <Icon className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-semibold text-primary">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { title: "Understand Requirement", icon: Search },
  { title: "Candidate Sourcing", icon: Users },
  { title: "Screening & Verification", icon: FileCheck2 },
  { title: "Interview Coordination", icon: CalendarCheck },
  { title: "Offer Management", icon: Handshake },
  { title: "Successful Placement", icon: BadgeCheck },
  { title: "After Joining Support", icon: LifeBuoy },
];

export function Process() {
  return (
    <section id="employers" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Recruitment Process"
          title="A transparent, structured hiring journey"
          subtitle="Built for employers who need clinical quality, compliance and speed at the same time."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, icon: Icon }, idx) => (
            <li
              key={title}
              className="surface-card relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <span className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-xl gradient-navy font-display text-sm font-bold text-primary-foreground">
                {idx + 1}
              </span>
              <Icon className="mt-4 h-5 w-5 text-accent" />
              <h3 className="mt-3 font-display text-base font-bold text-primary">{title}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const stats = [
  { value: "20+", label: "Healthcare Specialties" },
  { value: "5000+", label: "Healthcare Professionals Network" },
  { value: "Fast", label: "Turnaround" },
  { value: "Dedicated", label: "Consultants" },
  { value: "Global", label: "International Hiring" },
];

export function Stats() {
  return (
    <section className="gradient-navy py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-primary-foreground/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="About Us"
            center={false}
            title="A specialist healthcare recruitment partner for the GCC"
            subtitle="MedTalent Global supports hospitals, clinics, medical centres, diagnostic laboratories, nursing homes, rehabilitation centres, pharmaceutical companies, home healthcare providers, IVF centres and healthcare groups in building high-performing clinical and leadership teams."
          />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We operate as a remote-first global organisation, combining deep GCC market knowledge
            with an international talent network. Our consultants focus exclusively on healthcare —
            so every shortlist reflects real clinical understanding, credential rigour and cultural
            fit.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: UserCheck, t: "Quality first", d: "Every candidate pre-screened and verified." },
              { icon: Clock, t: "Speed that matters", d: "Shortlists that keep departments staffed." },
              { icon: Globe2, t: "Pan-GCC reach", d: "Six markets, one accountable partner." },
              { icon: Handshake, t: "Long-term partnership", d: "Support continues after joining." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="surface-card p-5">
                <Icon className="h-5 w-5 text-accent" />
                <p className="mt-3 font-display text-sm font-bold text-primary">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="candidates" className="surface-card p-8 lg:p-10">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-medical">
            For Candidates
          </span>
          <h3 className="mt-3 font-display text-2xl font-extrabold text-primary">
            Advance your healthcare career in the Gulf
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            We represent doctors, nurses, allied healthcare professionals and healthcare leaders
            seeking roles with leading hospitals and healthcare groups across the GCC.
          </p>
          <ul className="mt-6 grid gap-3">
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
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by healthcare decision makers"
          subtitle="Placeholder testimonials representing the organisations we partner with."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.role} className="surface-card p-8">
              <Quote className="h-6 w-6 text-accent" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-display text-sm font-bold text-primary">{t.role}</p>
                <p className="text-xs text-muted-foreground">{t.org}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
