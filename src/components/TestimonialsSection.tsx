import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

interface Testimonial {
  id: string;
  client_name: string;
  client_role: string | null;
  client_photo_url: string | null;
  quote: string;
}

const placeholders: Testimonial[] = [
  { id: "1", client_name: "Future Luminary", client_role: "Programme Graduate", client_photo_url: null, quote: "The EVOLVE programme gave me a framework I never had — I went from dreaming about leadership to actually leading." },
  { id: "2", client_name: "Future Luminary", client_role: "Programme Graduate", client_photo_url: null, quote: "Structured, intentional, and deeply practical. This isn't motivation — it's transformation with a system." },
  { id: "3", client_name: "Future Luminary", client_role: "Programme Graduate", client_photo_url: null, quote: "Dr Omenka and the TLR team don't just teach — they walk with you through the process of becoming." },
];

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(placeholders);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("testimonials").select("*").order("display_order");
      if (data && data.length > 0) setTestimonials(data as Testimonial[]);
    };
    fetch();
  }, []);

  return (
    <section className="py-28 bg-secondary relative grain">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-4">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Voices of <span className="text-gradient-gold">Transformation</span>
            </h2>
            <p className="text-muted-foreground text-sm">From our growing community of luminaries.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="bg-background rounded-2xl p-8 border border-border relative h-full card-glow"
              >
                <Quote className="w-7 h-7 text-accent/20 mb-5" />
                {t.client_photo_url && (
                  <img src={t.client_photo_url} alt={t.client_name} className="w-10 h-10 rounded-full object-cover mb-4" />
                )}
                <p className="text-muted-foreground leading-relaxed mb-6 italic text-sm">"{t.quote}"</p>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{t.client_name}</p>
                  {t.client_role && <p className="text-xs text-muted-foreground mt-0.5">{t.client_role}</p>}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
