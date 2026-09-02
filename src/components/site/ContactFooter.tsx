import { useState, type FormEvent } from "react";
import { Mail, MapPin, Clock, Linkedin, Facebook, Instagram, HeartPulse } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const departments = [
  "Cardiology",
  "Orthopaedics",
  "Neurology",
  "Oncology",
  "Gastroenterology",
  "Paediatrics",
  "Obstetrics & Gynaecology",
  "General Medicine",
  "Emergency Care",
];

export function Contact() {
  const [department, setDepartment] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Appointment request received.", {
      description: "Our patient care team will confirm your appointment shortly.",
    });
    e.currentTarget.reset();
    setDepartment("");
  };

  return (
    <section id="contact" className="py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-medical">
            Book an Appointment
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Care that begins with a conversation
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Share your health concern and preferred department. Our patient care team will schedule
            a consultation with the right specialist at your nearest Atlyshub Hospital.
          </p>
          <div className="mt-8 grid gap-4">
            <a
              href="mailto:support@atlyshub.in"
              className="surface-card flex items-center gap-3 p-5 text-sm text-primary transition-shadow hover:shadow-[var(--shadow-elevated)]"
            >
              <Mail className="h-5 w-5 text-accent" /> support@atlyshub.in
            </a>
            <div className="surface-card flex items-center gap-3 p-5 text-sm text-primary">
              <MapPin className="h-5 w-5 text-accent" /> Head Office: Bangalore, Karnataka — 28+
              branches across India
            </div>
            <div className="surface-card flex items-center gap-3 p-5 text-sm text-primary">
              <Clock className="h-5 w-5 text-accent" /> Emergency &amp; Trauma Care open 24x7
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="surface-card p-8 lg:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="patient">Patient Name</Label>
              <Input id="patient" name="patient" required placeholder="Full name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" required placeholder="e.g. 42" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="city">City / Branch</Label>
              <Input id="city" name="city" required placeholder="e.g. Bangalore" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="department">Department</Label>
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger id="department">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input id="date" name="date" type="date" required />
            </div>
          </div>
          <div className="mt-5 grid gap-2">
            <Label htmlFor="message">Health Concern</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Briefly describe your symptoms or reason for visit"
            />
          </div>
          <Button type="submit" variant="hero" size="xl" className="mt-6 w-full">
            Request Appointment
          </Button>
        </form>
      </div>
    </section>
  );
}

const cities = [
  "Bangalore",
  "Mumbai",
  "Delhi NCR",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Indore",
  "Kochi",
  "Coimbatore",
  "Nagpur",
  "Bhopal",
  "Patna",
  "Surat",
  "Visakhapatnam",
  "Mysuru",
  "Mangaluru",
  "Guwahati",
];

export function Footer() {
  return (
    <footer className="gradient-navy pt-16 pb-8 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10">
                <HeartPulse className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-extrabold">Atlyshub Hospital</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Atlyshub Multispeciality Hospital is a NABH-standard healthcare network headquartered
              in Bangalore, with more than 28 branches across India delivering advanced diagnostics,
              surgical care, critical care and 24x7 emergency services.
            </p>

            <div className="mt-6 flex gap-3">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#contact"
                  aria-label="Social profile"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Quick Links"
            items={[
              ["Home", "#home"],
              ["About Us", "#about"],
              ["Departments", "#specialties"],
              ["Facilities", "#facilities"],
              ["Patient Care", "#patients"],
              ["Branches", "#branches"],
              ["Book Appointment", "#contact"],
            ]}
          />
          <FooterCol
            title="Departments"
            items={[
              ["Cardiac Sciences", "#specialties"],
              ["Orthopaedics", "#specialties"],
              ["Neurosciences", "#specialties"],
              ["Oncology", "#specialties"],
              ["Mother & Child", "#specialties"],
              ["Emergency & Trauma", "#specialties"],
            ]}
          />

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider">
              Our Presence
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-primary-foreground/70">
              {cities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <h3 className="mt-6 font-display text-sm font-bold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 grid gap-2.5 text-sm text-primary-foreground/70">
              <li>support@atlyshub.in</li>
              <li>Head Office: Bangalore, Karnataka</li>
              <li>Emergency &amp; Trauma Care 24x7</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Atlyshub Multispeciality Hospital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-bold uppercase tracking-wider">{title}</h3>
      <ul className="mt-4 grid gap-2.5">
        {items.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
