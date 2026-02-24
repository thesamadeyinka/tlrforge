import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-3">The Luminary Rise</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
              Illuminate. Transform. Rise.
            </p>
            <p className="text-primary-foreground/50 text-xs leading-relaxed">
              Raising Luminaries with Structure and Intention.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-primary-foreground/80">Quick Links</h4>
            <nav className="space-y-2">
              {["About", "Philosophy", "Programmes", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-primary-foreground/80">Join the EVOLVE Community</h4>
            <p className="text-primary-foreground/50 text-xs mb-3">Get insights, updates, and resources delivered to your inbox.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/15 text-primary-foreground placeholder:text-primary-foreground/40 text-sm"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} The Luminary Rise. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
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
