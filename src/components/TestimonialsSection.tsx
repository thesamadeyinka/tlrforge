import { Quote } from "lucide-react";

const placeholders = [
  {
    quote: "The EVOLVE programme gave me a framework I never had — I went from dreaming about leadership to actually leading.",
    name: "Future Luminary",
    role: "Programme Graduate",
  },
  {
    quote: "Structured, intentional, and deeply practical. This isn't motivation — it's transformation with a system.",
    name: "Future Luminary",
    role: "Programme Graduate",
  },
  {
    quote: "Dr Omenka and the TLR team don't just teach — they walk with you through the process of becoming.",
    name: "Future Luminary",
    role: "Programme Graduate",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Voices of Transformation
          </h2>
          <p className="text-muted-foreground">Testimonials from our growing community of luminaries.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {placeholders.map((t, i) => (
            <div
              key={i}
              className="bg-background rounded-xl p-8 border border-border relative"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
