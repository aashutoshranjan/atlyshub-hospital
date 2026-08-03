import { useEffect, useState } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Specialties", href: "#specialties" },
  { label: "Industries", href: "#industries" },
  { label: "Employers", href: "#employers" },
  { label: "Find Jobs", href: "#candidates" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-[var(--shadow-card)]"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl gradient-navy text-primary-foreground">
            <Stethoscope className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-primary">
            MedTalent <span className="text-accent">Global</span>
          </span>
        </a>

        <ul className="hidden items-center gap-5 2xl:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outlineNavy" size="default" className="hidden xl:inline-flex" asChild>
            <a href="#candidates">Find Jobs</a>
          </Button>
          <Button variant="hero" size="default" asChild>
            <a href="#contact">Hire Talent</a>
          </Button>
        </div>


        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-4 lg:hidden">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-2">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>
                Hire Talent
              </a>
            </Button>
            <Button variant="outlineNavy" size="xl" asChild>
              <a href="#candidates" onClick={() => setOpen(false)}>
                Find Jobs
              </a>
            </Button>
          </div>

        </div>
      )}
    </header>
  );
}
