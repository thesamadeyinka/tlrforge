import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import ThemeToggle from "@/components/ThemeToggle";
import tlrLogo from "@/assets/tlr-logo.svg";
import tlrLogoWhite from "@/assets/tlr-logo-white.png";

const aboutDropdownLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Our Philosophy", href: "/philosophy" },
  { label: "Our Approach", href: "/approach" },
  { label: "Our Team", href: "/about" },
];

const programmesDropdownLinks = [
  {
    label: "EVOLVE",
    href: "/programmes",
    children: [],
  },
  {
    label: "The Luminaries Network",
    href: "/luminaries-hub",
    children: [],
  },
  {
    label: "AIF",
    href: "/amplify-fund",
    children: [],
  },
];

const eventsDropdownLinks = [
  { label: "TLR Career Development", href: "/events/career-development" },
  { label: "TLR Business Mastery", href: "/events/business-mastery" },
  { label: "TLR Finance Academy", href: "/events/finance-academy" },
  { label: "TLR Wealth Mastery", href: "/events/wealth-mastery" },
  { label: "TLR Relationship Mastery", href: "/events/relationship-mastery" },
  { label: "TLR Leadership Essentials", href: "/events/leadership-essentials" },
];

import { searchAll } from "@/lib/searchIndex";

type DropdownName = "about" | "programmes" | "events" | null;

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownName>(null);
  const [mobileAccordion, setMobileAccordion] = useState<DropdownName>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useAuth();
  const dropdownRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredPages = searchQuery.trim()
    ? searchablePages.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchablePages;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery("");
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") setSearchOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const toggleDropdown = (name: DropdownName) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileAccordion = (name: DropdownName) => {
    setMobileAccordion((prev) => (prev === name ? null : name));
  };

  const DropdownButton = ({ name, label }: { name: DropdownName; label: string }) => (
    <button
      onClick={() => toggleDropdown(name)}
      className="text-[11px] font-sans font-medium text-white/40 hover:text-white/80 px-3.5 py-2 transition-colors duration-300 tracking-wide uppercase flex items-center gap-1"
    >
      {label}
      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === name ? "rotate-180" : ""}`} />
    </button>
  );

  const DropdownMenu = ({ name, items }: { name: DropdownName; items: { label: string; href: string }[] }) => {
    if (openDropdown !== name) return null;
    return (
      <div className="absolute top-full left-0 mt-1 w-56 bg-[hsl(224,50%,14%)] border border-white/[0.08] rounded-md shadow-xl py-1.5 z-50">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            onClick={() => setOpenDropdown(null)}
            className="block px-4 py-2 text-[11px] font-sans font-medium text-white/50 hover:text-white hover:bg-white/[0.05] transition-colors duration-200 tracking-wide"
          >
            {item.label}
          </Link>
        ))}
      </div>
    );
  };

  const MobileAccordion = ({ name, label, items }: { name: DropdownName; label: string; items: { label: string; href: string }[] }) => (
    <div>
      <button
        onClick={() => toggleMobileAccordion(name)}
        className="w-full flex items-center justify-between text-[13px] font-sans font-medium text-white/50 hover:text-white py-3 border-b border-white/[0.04] transition-colors duration-300 tracking-wide"
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileAccordion === name ? "rotate-180" : ""}`} />
      </button>
      {mobileAccordion === name && (
        <div className="pl-4 space-y-0.5">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => { setMobileOpen(false); setMobileAccordion(null); }}
              className="block text-[12px] font-sans font-medium text-white/40 hover:text-white py-2.5 border-b border-white/[0.03] transition-colors duration-300 tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(224,50%,12%)] border-b border-white/[0.05]">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center">
          <img src={tlrLogoWhite} alt="The Luminary Rise" className="h-12 md:h-14 hidden dark:block" />
          <img src={tlrLogo} alt="The Luminary Rise" className="h-12 md:h-14 brightness-0 invert dark:hidden" />
        </Link>

        <nav ref={dropdownRef as React.RefObject<HTMLElement>} className="hidden md:flex items-center gap-0.5">
          <Link
            to="/"
            className="text-[11px] font-sans font-medium text-white/40 hover:text-white/80 px-3.5 py-2 transition-colors duration-300 tracking-wide uppercase"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative">
            <DropdownButton name="about" label="About" />
            <DropdownMenu name="about" items={aboutDropdownLinks} />
          </div>

          {/* Programmes Dropdown */}
          <div className="relative">
            <DropdownButton name="programmes" label="Programmes" />
            <DropdownMenu name="programmes" items={programmesDropdownLinks} />
          </div>

          {/* Events Dropdown */}
          <div className="relative">
            <DropdownButton name="events" label="Events" />
            <DropdownMenu name="events" items={eventsDropdownLinks} />
          </div>

          <Link
            to="/resources"
            className="text-[11px] font-sans font-medium text-white/40 hover:text-white/80 px-3.5 py-2 transition-colors duration-300 tracking-wide uppercase"
          >
            Resources
          </Link>

          <Link
            to="/contact"
            className="text-[11px] font-sans font-medium text-white/40 hover:text-white/80 px-3.5 py-2 transition-colors duration-300 tracking-wide uppercase"
          >
            Contact
          </Link>

          <div className="ml-3 mr-1">
            <ThemeToggle />
          </div>

          <button
            onClick={() => setSearchOpen(true)}
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
        <nav className="md:hidden bg-[hsl(224,50%,10%)] border-t border-white/[0.05] px-6 pb-6 pt-3 space-y-0.5 max-h-[80vh] overflow-y-auto">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block text-[13px] font-sans font-medium text-white/50 hover:text-white py-3 border-b border-white/[0.04] transition-colors duration-300 tracking-wide">
            Home
          </Link>

          <MobileAccordion name="about" label="About" items={aboutDropdownLinks} />
          <MobileAccordion name="programmes" label="Programmes" items={programmesDropdownLinks} />
          <MobileAccordion name="events" label="Events" items={eventsDropdownLinks} />

          <Link to="/resources" onClick={() => setMobileOpen(false)} className="block text-[13px] font-sans font-medium text-white/50 hover:text-white py-3 border-b border-white/[0.04] transition-colors duration-300 tracking-wide">
            Resources
          </Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block text-[13px] font-sans font-medium text-white/50 hover:text-white py-3 border-b border-white/[0.04] transition-colors duration-300 tracking-wide">
            Contact
          </Link>

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

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4" onClick={() => setSearchOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-lg bg-[hsl(224,50%,13%)] border border-white/[0.1] rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
              <Search className="w-5 h-5 text-white/30 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages…"
                className="flex-1 bg-transparent text-white text-sm font-sans placeholder:text-white/30 outline-none"
              />
              <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-white/[0.1] bg-white/[0.05] px-1.5 py-0.5 text-[10px] text-white/30 font-mono">
                ESC
              </kbd>
            </div>
            <div className="max-h-72 overflow-y-auto py-2">
              {filteredPages.length > 0 ? (
                filteredPages.map((page) => (
                  <Link
                    key={page.href + page.title}
                    to={page.href}
                    onClick={() => setSearchOpen(false)}
                    className="flex flex-col gap-0.5 px-5 py-3 hover:bg-white/[0.05] transition-colors duration-150"
                  >
                    <span className="text-sm font-sans font-medium text-white/80">{page.title}</span>
                    <span className="text-[11px] font-sans text-white/30">{page.description}</span>
                  </Link>
                ))
              ) : (
                <div className="px-5 py-8 text-center text-sm text-white/30 font-sans">
                  No results found
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
