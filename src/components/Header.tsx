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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(224,50%,12%)] border-b border-white/[0.05]">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center">
          <img src={tlrLogoWhite} alt="The Luminary Rise" className="h-10 md:h-11 hidden dark:block" />
          <img src={tlrLogo} alt="The Luminary Rise" className="h-10 md:h-11 brightness-0 invert dark:hidden" />
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-[11px] font-sans font-medium text-white/40 hover:text-white/80 px-3.5 py-2 transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-3 mr-1">
            <ThemeToggle />
          </div>
          {user ? (
            <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold text-[11px] ml-1 rounded-md tracking-wide">
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold text-[11px] ml-1 rounded-md tracking-wide">
              <Link to="/auth">Sign In</Link>
            </Button>
          )}
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button className="text-white/60 hover:text-white transition-colors" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-[hsl(224,50%,10%)] border-t border-white/[0.05] px-6 pb-6 pt-3 space-y-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-[13px] font-sans font-medium text-white/50 hover:text-white py-3 border-b border-white/[0.04] transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold mt-4 rounded-md text-sm">
              <Link to="/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</Link>
            </Button>
          ) : (
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold mt-4 rounded-md text-sm">
              <Link to="/auth" onClick={() => setMobileOpen(false)}>Sign In</Link>
            </Button>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
