import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
    <section className="py-32 md:py-40 bg-secondary relative grain">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="editorial-label text-accent mb-6">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 leading-[1.2]">
              Voices of <span className="text-gradient-gold italic">Transformation</span>
            </h2>
            <div className="editorial-line mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.08}>
              <div className="bg-card p-8 md:p-10 h-full relative">
                <Quote className="w-6 h-6 text-accent/15 mb-6" />
                {t.client_photo_url && (
                  <img src={t.client_photo_url} alt={t.client_name} className="w-10 h-10 rounded-full object-cover mb-5" />
                )}
                <p className="text-muted-foreground leading-[1.8] mb-8 text-[15px] italic">"{t.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-semibold text-foreground text-sm">{t.client_name}</p>
                  {t.client_role && <p className="text-[12px] text-muted-foreground mt-1">{t.client_role}</p>}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
