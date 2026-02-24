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
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              Voices of <span className="text-gradient-gold">Transformation</span>
            </h2>
            <p className="text-muted-foreground">From our growing community of luminaries.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-background rounded-2xl p-8 border border-border relative h-full"
              >
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
                {t.client_photo_url && (
                  <img src={t.client_photo_url} alt={t.client_name} className="w-12 h-12 rounded-full object-cover mb-4" />
                )}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{t.client_name}</p>
                  {t.client_role && <p className="text-xs text-muted-foreground">{t.client_role}</p>}
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
