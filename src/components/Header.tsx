import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import ThemeToggle from "@/components/ThemeToggle";
import tlrLogo from "@/assets/tlr-logo.svg";
import tlrLogoWhite from "@/assets/tlr-logo-white.png";

const navLinks = [
  { label: "Home", href: "/", isRoute: true },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(224,76%,15%)] backdrop-blur-xl border-b border-white/[0.06]">
      <div className="container mx-auto flex items-center justify-between h-18 px-4">
        <Link to="/" className="flex items-center">
          <img src={tlrLogoWhite} alt="The Luminary Rise" className="h-12 md:h-14 hidden dark:block" />
          <img src={tlrLogo} alt="The Luminary Rise" className="h-12 md:h-14 brightness-0 invert dark:hidden" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-xs font-medium text-white/60 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.06] transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
          {user ? (
            <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-xs ml-2 rounded-lg">
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-xs ml-2 rounded-lg">
              <Link to="/auth">Sign In</Link>
            </Button>
          )}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button className="text-white/80 hover:text-white transition-colors" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-[hsl(224,76%,13%)] border-t border-white/[0.06] px-4 pb-6 pt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] rounded-lg px-3 py-2.5 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold mt-2 rounded-lg">
              <Link to="/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</Link>
            </Button>
          ) : (
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold mt-2 rounded-lg">
              <Link to="/auth" onClick={() => setMobileOpen(false)}>Sign In</Link>
            </Button>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
