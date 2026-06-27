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
    <footer id="contact" className="bg-[hsl(224,50%,8%)] text-white py-14 md:py-16 relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={tlrLogoWhite} alt="The Luminary Rise" className="h-12 md:h-14 mb-5" />
          </div>

          <div>
            <h4 className="editorial-label text-accent mb-5">Quick Links</h4>
            <nav className="space-y-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "Philosophy", href: "/philosophy" },
                { label: "Programmes", href: "/programmes" },
                { label: "The Luminaries Network", href: "/luminaries-hub" },
                { label: "Amplify Impact Fund", href: "/amplify-fund" },
                { label: "Resources", href: "/resources" },
                { label: "Apply to EVOLVE", href: "/apply" },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="block text-[14px] text-white/80 hover:text-accent transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="editorial-label text-accent mb-5">Join the Community</h4>
            <p className="text-white/75 text-[13px] mb-4 leading-relaxed">Get insights, updates, and resources delivered to your inbox.</p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="bg-white/[0.06] border-white/20 text-white placeholder:text-white/40 text-sm rounded-md focus:border-accent/60"
              />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0 rounded-md" disabled={loading}>
                <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-white">© {new Date().getFullYear()} The Luminary Rise. All rights reserved.</p>
          <div className="flex gap-2">
            {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                <Icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
