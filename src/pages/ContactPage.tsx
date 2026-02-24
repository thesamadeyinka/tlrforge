import { useState } from "react";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import patternBg from "@/assets/pattern-bg.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const contactInfo = [
  { icon: Mail, label: "Email", value: "admin@theluminaryrise.org", href: "mailto:admin@theluminaryrise.org" },
  { icon: Phone, label: "Phone", value: "+234 000 000 0000", href: "tel:+2340000000000" },
  { icon: MapPin, label: "Location", value: "Abuja, Nigeria" },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    // Simulate submission — replace with actual endpoint when ready
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setLoading(false);
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

        {/* Hero */}
        <section className="relative pt-16">
          <div className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden">
            <img src={patternBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-radiant opacity-90" />
            <div className="relative z-10 text-center px-4">
              <ScrollReveal>
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
                  Get In <span className="text-gradient-gold">Touch</span>
                </h1>
                <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                  Have a question or ready to start your journey? We'd love to hear from you.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Info */}
              <div className="md:col-span-2 space-y-8">
                <ScrollReveal>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Let's Connect</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Whether you're interested in our programmes, partnerships, or just want to say hello — reach out.
                  </p>
                </ScrollReveal>

                <div className="space-y-5">
                  {contactInfo.map((item, i) => (
                    <ScrollReveal key={item.label} delay={i * 0.1}>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="md:col-span-3">
                <ScrollReveal delay={0.15}>
                  <form onSubmit={handleSubmit} className="bg-secondary rounded-2xl p-6 md:p-8 border border-border space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Name</label>
                        <Input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          maxLength={100}
                          className="bg-background border-border"
                        />
                        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          maxLength={255}
                          className="bg-background border-border"
                        />
                        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Subject</label>
                      <Input
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        maxLength={200}
                        className="bg-background border-border"
                      />
                      {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Message</label>
                      <Textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us more..."
                        rows={5}
                        maxLength={2000}
                        className="bg-background border-border resize-none"
                      />
                      {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                    </div>

                    <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold">
                      {loading ? "Sending..." : <>Send Message <Send className="w-4 h-4 ml-1" /></>}
                    </Button>
                  </form>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
