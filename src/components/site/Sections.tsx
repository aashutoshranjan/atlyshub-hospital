import {
  Award,
  Activity,
  Ambulance,
  Baby,
  Bone,
  Brain,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Clock,
  Droplets,
  Eye,
  FlaskConical,
  HeartPulse,
  Home,
  Hospital,
  Microscope,
  Pill,
  Quote,
  Scan,
  ShieldCheck,
  Stethoscope,
  Syringe,
  UserCheck,
  Users,
  UsersRound,
  Wind,
  BedDouble,
  BadgeCheck,
  Headphones,
  HeartHandshake,
  MapPin,
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
  { label: "24x7 Emergency", icon: Ambulance },
  { label: "Multispeciality ICU", icon: HeartPulse },
  { label: "Modular OTs", icon: Syringe },
  { label: "Advanced Diagnostics", icon: Microscope },
  { label: "In-house Pharmacy", icon: Pill },
  { label: "Cashless Insurance", icon: ShieldCheck },
  { label: "28+ Branches", icon: MapPin },
];

export function TrustSection() {
  return (
    <section className="border-y border-border bg-secondary/40 py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Patient care facilities available across our hospital network in India
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
  { t: "Experienced Consultant Doctors", icon: Stethoscope },
  { t: "28+ Hospital Branches Across India", icon: MapPin },
  { t: "24x7 Emergency & Ambulance Services", icon: Ambulance },
  { t: "Advanced ICU & Critical Care Units", icon: HeartPulse },
  { t: "Modern Diagnostics & Imaging", icon: Scan },
  { t: "Cashless Insurance & TPA Support", icon: ShieldCheck },
  { t: "Transparent Treatment Guidance", icon: BadgeCheck },
  { t: "Compassionate Nursing Care", icon: HeartHandshake },
  { t: "Dedicated Patient Support Desk", icon: Headphones },
];

export function WhyUs() {
  return (
    <section id="why" className="py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why patients across India choose Atlyshub Hospital"
          subtitle="A multispeciality hospital network built around clinical excellence, modern technology and compassionate care."
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
    icon: Ambulance,
    title: "24x7 Emergency & Trauma Care",
    desc: "Round-the-clock casualty, trauma and advanced life support ambulance services at every branch.",
  },
  {
    icon: HeartPulse,
    title: "Intensive & Critical Care",
    desc: "Multidisciplinary ICU, HDU, NICU and PICU units monitored by intensivists around the clock.",
  },
  {
    icon: Syringe,
    title: "Surgery & Modular OTs",
    desc: "Laparoscopic, minimally invasive and open surgeries in HEPA-filtered modular operation theatres.",
  },
  {
    icon: Scan,
    title: "Diagnostics & Imaging",
    desc: "Digital X-ray, ultrasound, CT, MRI, echo and full-spectrum pathology under one roof.",
  },
  {
    icon: ClipboardList,
    title: "Health Check-up Packages",
    desc: "Preventive master health checks for individuals, families, seniors and corporate teams.",
  },
  {
    icon: Home,
    title: "Home Care & Teleconsultation",
    desc: "Follow-up video consultations, home nursing, physiotherapy and sample collection at home.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/30 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Hospital Services"
          title="Complete hospital care under one roof"
          subtitle="From emergency admission to surgery, recovery and follow-up — supported by modern medical infrastructure."
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
  { title: "Cardiology & Cardiac Surgery", icon: HeartPulse, desc: "Angiography, angioplasty, bypass surgery and heart failure care." },
  { title: "Neurology & Neurosurgery", icon: Brain, desc: "Stroke care, epilepsy, spine and brain surgery services." },
  { title: "Orthopaedics & Joint Replacement", icon: Bone, desc: "Knee and hip replacement, arthroscopy and trauma surgery." },
  { title: "Oncology", icon: Activity, desc: "Medical, surgical and day-care chemotherapy services." },
  { title: "Gastroenterology", icon: Stethoscope, desc: "Endoscopy, liver care and laparoscopic GI surgery." },
  { title: "Nephrology & Dialysis", icon: Droplets, desc: "Kidney care with a dedicated 24x7 dialysis unit." },
  { title: "Obstetrics & Gynaecology", icon: Baby, desc: "Maternity care, high-risk pregnancy and birthing suites." },
  { title: "Paediatrics & Neonatology", icon: Baby, desc: "Child health, vaccinations and Level III NICU care." },
  { title: "Pulmonology", icon: Wind, desc: "Asthma, COPD, sleep studies and bronchoscopy." },
  { title: "Ophthalmology", icon: Eye, desc: "Cataract, retina and refractive eye surgery." },
  { title: "General & Laparoscopic Surgery", icon: Syringe, desc: "Hernia, gallbladder, appendix and daycare procedures." },
  { title: "Diagnostics & Pathology", icon: FlaskConical, desc: "NABL-standard lab testing and radiology reporting." },
];

export function Specialties() {
  return (
    <section id="specialties" className="py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Departments"
          title="30+ specialities, one trusted hospital"
          subtitle="Consultant-led departments supported by intensive care, diagnostics and modern surgical facilities."
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

const facilities = [
  { label: "Emergency & Casualty", icon: Ambulance },
  { label: "Intensive Care Units", icon: HeartPulse },
  { label: "Modular Operation Theatres", icon: Syringe },
  { label: "Inpatient Rooms & Suites", icon: BedDouble },
  { label: "Radiology & Imaging", icon: Scan },
  { label: "Pathology Laboratory", icon: Microscope },
  { label: "Dialysis Unit", icon: Droplets },
  { label: "Blood Bank Support", icon: Droplets },
  { label: "Physiotherapy & Rehab", icon: Activity },
  { label: "24x7 Pharmacy", icon: Pill },
];

export function Industries() {
  return (
    <section id="facilities" className="bg-secondary/30 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Hospital Facilities"
          title="Infrastructure built for safe, modern treatment"
        />
        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {facilities.map(({ label, icon: Icon }, i) => (
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
  { title: "Book Appointment", icon: CalendarCheck },
  { title: "Doctor Consultation", icon: Stethoscope },
  { title: "Diagnostics & Reports", icon: Microscope },
  { title: "Treatment Plan", icon: ClipboardList },
  { title: "Admission or Surgery", icon: Hospital },
  { title: "Recovery & Nursing Care", icon: BedDouble },
  { title: "Follow-up & Home Care", icon: Home },
];

export function Process() {
  return (
    <section id="patients" className="py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Patient Journey"
          title="Simple, guided care from first visit to recovery"
          subtitle="Every patient is supported by a care coordinator through consultation, treatment and follow-up."
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
  { value: 28, suffix: "+", label: "Hospital Branches in India" },
  { value: 30, suffix: "+", label: "Medical Specialities" },
  { value: 400, suffix: "+", label: "Doctors & Consultants" },
  { value: 500000, suffix: "+", label: "Patients Treated" },
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
            eyebrow="About the Hospital"
            center={false}
            title="A multispeciality hospital network headquartered in Bangalore"
            subtitle="Atlyshub Multispeciality Hospital is headquartered in Bangalore, Karnataka, and operates more than 28 hospital branches across India, delivering emergency, surgical, critical and preventive care."
          />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Our consultants work across cardiology, neurosciences, orthopaedics, oncology, mother
            and child care, nephrology and more, supported by modern intensive care units, modular
            operation theatres and advanced diagnostic services.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Our mission is simple: give every patient safe, ethical and affordable treatment close
            to home, with the same clinical standard at every branch.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              { icon: UserCheck, t: "Consultant-led care", d: "Senior specialists guide every treatment plan." },
              { icon: Clock, t: "24x7 availability", d: "Emergency, ICU, pharmacy and diagnostics." },
              { icon: Building2, t: "28+ branches", d: "One standard of care across India." },
              { icon: Award, t: "Quality & safety", d: "Infection control and clinical audits." },
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
          <div id="patient-info" className="surface-card p-8 lg:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-medical">
              For Patients &amp; Families
            </span>
            <h3 className="mt-3 font-display text-2xl font-extrabold text-primary">
              Everything you need before your hospital visit
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              From appointment booking to insurance approvals and discharge support, our patient
              care team assists you at every step.
            </p>
            <ul className="mt-6 grid gap-3.5">
              {[
                "Online and phone appointment booking",
                "Cashless treatment with leading insurers and TPAs",
                "Ayushman Bharat and corporate tie-up assistance",
                "Digital lab reports and discharge summaries",
                "Attendant guidance, admission and billing help",
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
    role: "Cardiac patient's son",
    org: "Bangalore, Karnataka",
    quote:
      "My father was admitted at midnight with chest pain. The emergency team acted within minutes and the cardiologist explained every step clearly.",
  },
  {
    role: "Knee replacement patient",
    org: "Pune, Maharashtra",
    quote:
      "The orthopaedic team and physiotherapists were excellent. I was walking with support the very next day after surgery.",
  },
  {
    role: "New mother",
    org: "Hyderabad, Telangana",
    quote:
      "The maternity ward and NICU staff were incredibly caring. The rooms were clean and the nursing support was constant.",
  },
  {
    role: "Health check-up patient",
    org: "Delhi NCR",
    quote:
      "The full body health check was smooth and reports were available online the same evening with a doctor's explanation.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/30 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Care that families across India trust"
          subtitle="Representative patient experiences from our hospital branches."
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

const cities = [
  "Bangalore",
  "Mumbai",
  "Delhi NCR",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Indore",
  "Bhopal",
  "Nagpur",
  "Surat",
  "Kochi",
  "Coimbatore",
  "Visakhapatnam",
  "Patna",
  "Bhubaneswar",
  "Guwahati",
  "Ludhiana",
  "Kanpur",
  "Varanasi",
  "Mysuru",
  "Mangaluru",
  "Vijayawada",
  "Thiruvananthapuram",
];

export function Branches() {
  return (
    <section id="branches" className="py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Network"
          title="28+ hospital branches across India"
          subtitle="Headquartered in Bangalore, with multispeciality hospitals and clinics in major cities nationwide."
        />
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {cities.map((c, i) => (
            <Reveal key={c} delay={(i % 4) * 60}>
              <div className="flex items-center gap-2.5 rounded-xl border border-border bg-background px-4 py-3.5 transition-shadow hover:shadow-[var(--shadow-card)]">
                <MapPin className="h-4 w-4 shrink-0 text-medical" />
                <span className="text-sm font-medium text-primary">{c}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          <Users className="mr-2 inline h-4 w-4 text-accent" />
          Corporate office: Bangalore, Karnataka · <UsersRound className="mx-1 inline h-4 w-4 text-accent" />
          Patient helpline available 24x7
        </p>
      </div>
    </section>
  );
}

export const indianCities = cities;
