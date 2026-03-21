import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import tlrLogoWhite from "@/assets/tlr-logo-white.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);

    const { error } = await supabase.from("newsletter_signups").insert({ email: email.trim() });

    if (error) {
      if (error.code === "23505") {
        toast({ title: "Already subscribed!", description: "This email is already part of our community." });
      } else {
        toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
      }
    } else {
      toast({ title: "Welcome to the community!", description: "You'll receive updates and resources from The Luminary Rise." });
      setEmail("");
    }
    setLoading(false);
  };

  return (
    <footer id="contact" className="bg-[hsl(224,76%,10%)] text-white py-20 relative">
      <div className="absolute inset-0 grain" />
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <img src={tlrLogoWhite} alt="The Luminary Rise" className="h-10 mb-4 opacity-90" />
            <p className="text-white/50 text-sm leading-relaxed mb-1">Illuminate. Transform. Rise.</p>
            <p className="text-white/30 text-xs leading-relaxed">Raising Luminaries with Structure and Intention.</p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-xs mb-5 text-white/40 tracking-wider uppercase">Quick Links</h4>
            <nav className="space-y-2.5">
              <Link to="/about" className="block text-sm text-white/50 hover:text-accent transition-colors duration-200">About</Link>
              <Link to="/philosophy" className="block text-sm text-white/50 hover:text-accent transition-colors duration-200">Philosophy</Link>
              <Link to="/programmes" className="block text-sm text-white/50 hover:text-accent transition-colors duration-200">Programmes</Link>
              <Link to="/luminaries-hub" className="block text-sm text-white/50 hover:text-accent transition-colors duration-200">Luminaries Hub</Link>
              <Link to="/amplify-fund" className="block text-sm text-white/50 hover:text-accent transition-colors duration-200">Amplify Impact Fund</Link>
              <Link to="/resources" className="block text-sm text-white/50 hover:text-accent transition-colors duration-200">Resources</Link>
              <Link to="/apply" className="block text-sm text-white/50 hover:text-accent transition-colors duration-200">Apply to EVOLVE</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-xs mb-5 text-white/40 tracking-wider uppercase">Join the Community</h4>
            <p className="text-white/40 text-xs mb-4 leading-relaxed">Get insights, updates, and resources delivered to your inbox.</p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 text-sm rounded-lg focus:border-accent/50"
              />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0 rounded-lg" disabled={loading}>
                <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} The Luminary Rise. All rights reserved.</p>
          <div className="flex gap-3">
            {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all duration-200">
                <Icon className="w-3.5 h-3.5 text-white/40" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
