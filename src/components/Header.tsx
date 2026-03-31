import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import ThemeToggle from "@/components/ThemeToggle";
import tlrLogo from "@/assets/tlr-logo.svg";
import tlrLogoWhite from "@/assets/tlr-logo-white.png";

const navLinks = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Programmes", href: "/programmes", isRoute: true },
  { label: "Resources", href: "/resources", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

const aboutDropdownLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Team", href: "/about" },
  { label: "Philosophy", href: "/philosophy" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const { user } = useAuth();
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(224,50%,12%)] border-b border-white/[0.05]">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center">
          <img src={tlrLogoWhite} alt="The Luminary Rise" className="h-10 md:h-11 hidden dark:block" />
          <img src={tlrLogo} alt="The Luminary Rise" className="h-10 md:h-11 brightness-0 invert dark:hidden" />
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          <Link
            to="/"
            className="text-[11px] font-sans font-medium text-white/40 hover:text-white/80 px-3.5 py-2 transition-colors duration-300 tracking-wide uppercase"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div ref={aboutRef} className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="text-[11px] font-sans font-medium text-white/40 hover:text-white/80 px-3.5 py-2 transition-colors duration-300 tracking-wide uppercase flex items-center gap-1"
            >
              About
              <svg className={`w-3 h-3 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {aboutOpen && (
              <div className="absolute top-full left-0 mt-1 w-44 bg-[hsl(224,50%,14%)] border border-white/[0.08] rounded-md shadow-xl py-1.5 z-50">
                {aboutDropdownLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setAboutOpen(false)}
                    className="block px-4 py-2 text-[11px] font-sans font-medium text-white/50 hover:text-white hover:bg-white/[0.05] transition-colors duration-200 tracking-wide"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
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

          {/* Search Button */}
          <button
            className="text-white/40 hover:text-white/80 transition-colors duration-300 p-2 mr-1"
            aria-label="Search"
          >
            <Search size={16} />
          </button>

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
          <Link to="/" onClick={() => setMobileOpen(false)} className="block text-[13px] font-sans font-medium text-white/50 hover:text-white py-3 border-b border-white/[0.04] transition-colors duration-300 tracking-wide">
            Home
          </Link>

          {/* Mobile About Accordion */}
          <div>
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="w-full flex items-center justify-between text-[13px] font-sans font-medium text-white/50 hover:text-white py-3 border-b border-white/[0.04] transition-colors duration-300 tracking-wide"
            >
              About
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {mobileAboutOpen && (
              <div className="pl-4 space-y-0.5">
                {aboutDropdownLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => { setMobileOpen(false); setMobileAboutOpen(false); }}
                    className="block text-[12px] font-sans font-medium text-white/40 hover:text-white py-2.5 border-b border-white/[0.03] transition-colors duration-300 tracking-wide"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
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
