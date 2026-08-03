import { useState, type FormEvent } from "react";
import { Mail, Phone, Linkedin, Facebook, Instagram, Globe2, Stethoscope } from "lucide-react";
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

const countries = ["UAE", "Saudi Arabia", "Qatar", "Oman", "Bahrain", "Kuwait", "Other"];

export function Contact() {
  const [country, setCountry] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you — your consultation request has been received.", {
      description: "A dedicated healthcare recruitment consultant will contact you shortly.",
    });
    e.currentTarget.reset();
    setCountry("");
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-medical">
            Contact
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Let's build your healthcare team
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Share your hiring requirement and a dedicated consultant will respond with a tailored
            recruitment plan for your organisation.
          </p>
          <div className="mt-8 grid gap-4">
            <a
              href="mailto:hello@medtalentglobal.com"
              className="surface-card flex items-center gap-3 p-5 text-sm text-primary transition-shadow hover:shadow-[var(--shadow-elevated)]"
            >
              <Mail className="h-5 w-5 text-accent" /> hello@medtalentglobal.com
            </a>
            <a
              href="tel:+971000000000"
              className="surface-card flex items-center gap-3 p-5 text-sm text-primary transition-shadow hover:shadow-[var(--shadow-elevated)]"
            >
              <Phone className="h-5 w-5 text-accent" /> +971 00 000 0000
            </a>
            <div className="surface-card flex items-center gap-3 p-5 text-sm text-primary">
              <Globe2 className="h-5 w-5 text-accent" /> Head Office: Remote (Global Operations)
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="surface-card p-8 lg:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="hospital">Hospital Name</Label>
              <Input id="hospital" name="hospital" required placeholder="Organisation name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="person">Contact Person</Label>
              <Input id="person" name="person" required placeholder="Full name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="name@hospital.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" required placeholder="+971 00 000 0000" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="country">Country</Label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="requirement">Hiring Requirement</Label>
              <Input
                id="requirement"
                name="requirement"
                required
                placeholder="e.g. 10 ICU Nurses, 2 Consultants"
              />
            </div>
          </div>
          <div className="mt-5 grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={4} placeholder="Tell us more about your requirement" />
          </div>
          <Button type="submit" variant="hero" size="xl" className="mt-6 w-full">
            Request Consultation
          </Button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="gradient-navy pt-16 pb-8 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10">
                <Stethoscope className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-extrabold">MedTalent Global</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              A premium international healthcare recruitment and executive search partner, helping
              hospitals and healthcare organizations across the GCC hire qualified doctors, nurses,
              allied healthcare professionals and healthcare leaders.
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
              ["Employers", "#employers"],
              ["Candidates", "#candidates"],
              ["Why Choose Us", "#why"],
              ["Contact", "#contact"],
            ]}
          />
          <FooterCol
            title="Services"
            items={[
              ["Permanent Recruitment", "#services"],
              ["Executive Search", "#services"],
              ["Healthcare Staffing", "#services"],
              ["International Recruitment", "#services"],
              ["Specialties", "#specialties"],
              ["Industries", "#industries"],
            ]}
          />
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider">Countries</h3>
            <ul className="mt-4 grid gap-2.5 text-sm text-primary-foreground/70">
              {["UAE", "Saudi Arabia", "Qatar", "Oman", "Bahrain", "Kuwait"].map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <h3 className="mt-6 font-display text-sm font-bold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 grid gap-2.5 text-sm text-primary-foreground/70">
              <li>hello@medtalentglobal.com</li>
              <li>+971 00 000 0000</li>
              <li>Remote (Global Operations)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} MedTalent Global. All rights reserved.
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
