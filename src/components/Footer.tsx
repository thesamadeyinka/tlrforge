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
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={tlrLogoWhite} alt="The Luminary Rise" className="h-12 mb-3" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">Illuminate. Transform. Rise.</p>
            <p className="text-primary-foreground/50 text-xs leading-relaxed">Raising Luminaries with Structure and Intention.</p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-primary-foreground/80">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/about" className="block text-sm text-primary-foreground/60 hover:text-accent transition-colors">About</Link>
              <Link to="/philosophy" className="block text-sm text-primary-foreground/60 hover:text-accent transition-colors">Philosophy</Link>
              <Link to="/programmes" className="block text-sm text-primary-foreground/60 hover:text-accent transition-colors">Programmes</Link>
              <Link to="/resources" className="block text-sm text-primary-foreground/60 hover:text-accent transition-colors">Resources</Link>
              <Link to="/apply" className="block text-sm text-primary-foreground/60 hover:text-accent transition-colors">Apply to EVOLVE</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-primary-foreground/80">Join the EVOLVE Community</h4>
            <p className="text-primary-foreground/50 text-xs mb-3">Get insights, updates, and resources delivered to your inbox.</p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="bg-white/10 border-white/15 text-primary-foreground placeholder:text-primary-foreground/40 text-sm"
              />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0" disabled={loading}>
                <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">© {new Date().getFullYear()} The Luminary Rise. All rights reserved.</p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Icon className="w-3.5 h-3.5 text-primary-foreground/60" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
