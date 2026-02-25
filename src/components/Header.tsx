import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import ThemeToggle from "@/components/ThemeToggle";
import tlrLogo from "@/assets/tlr-logo.svg";
import tlrLogoWhite from "@/assets/tlr-logo-white.png";

const navLinks = [
  { label: "About", href: "/about", isRoute: true },
  { label: "Philosophy", href: "/philosophy", isRoute: true },
  { label: "Programmes", href: "/programmes", isRoute: true },
  { label: "Resources", href: "/resources", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(224,76%,17%)] backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center">
          <img src={tlrLogoWhite} alt="The Luminary Rise" className="h-14 md:h-16 hidden dark:block" />
          <img src={tlrLogo} alt="The Luminary Rise" className="h-14 md:h-16 brightness-0 invert dark:hidden" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link key={link.href} to={link.href} className="text-sm font-medium text-white/80 hover:text-accent transition-colors">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="text-sm font-medium text-white/80 hover:text-accent transition-colors">
                {link.label}
              </a>
            )
          )}
          <ThemeToggle />
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

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button className="text-white" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-[hsl(224,76%,17%)] border-t border-white/10 px-4 pb-6 pt-2 space-y-4">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-white/80 hover:text-accent transition-colors py-2">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-white/80 hover:text-accent transition-colors py-2">
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
