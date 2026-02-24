import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import tlrLogo from "@/assets/tlr-logo.svg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Programmes", href: "#programmes" },
  { label: "Resources", href: "/resources", isRoute: true },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center">
          <img src={tlrLogo} alt="The Luminary Rise" className="h-10 brightness-0 invert" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link key={link.href} to={link.href} className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors">
                {link.label}
              </a>
            )
          )}
          {user ? (
            <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold">
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold">
              <Link to="/auth">Sign In</Link>
            </Button>
          )}
        </nav>

        <button className="md:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-primary border-t border-white/10 px-4 pb-6 pt-2 space-y-4">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors py-2">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors py-2">
                {link.label}
              </a>
            )
          )}
          {user ? (
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold">
              <Link to="/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</Link>
            </Button>
          ) : (
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold">
              <Link to="/auth" onClick={() => setMobileOpen(false)}>Sign In</Link>
            </Button>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
