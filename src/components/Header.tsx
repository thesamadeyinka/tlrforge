import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Programmes", href: "#programmes" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-heading text-lg font-bold text-primary-foreground tracking-tight">
          The Luminary Rise
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-sm"
          >
            <a href="#programmes">Begin Your Transformation</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-primary border-t border-white/10 px-4 pb-6 pt-2 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold"
          >
            <a href="#programmes" onClick={() => setMobileOpen(false)}>
              Begin Your Transformation
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
