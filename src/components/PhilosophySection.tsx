import { Brain, Heart, Flame, BarChart3, Users, Wallet } from "lucide-react";

const pillars = [
  { label: "Mental Clarity", icon: Brain },
  { label: "Spiritual Alignment", icon: Flame },
  { label: "Emotional Resilience", icon: Heart },
  { label: "Strategic Thinking", icon: BarChart3 },
  { label: "Relational Intelligence", icon: Users },
  { label: "Financial Wisdom", icon: Wallet },
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            We Believe Growth Precedes{" "}
            <span className="text-gradient-gold">Transformation</span>
          </h2>

          <div className="w-20 h-1 gradient-gold rounded-full mx-auto mb-8" />

          <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed text-left">
            <p>
              At the heart of everything The Luminary Rise does is a profound conviction: <strong className="text-foreground">real change is not accidental. It is designed.</strong>
            </p>
            <p>
              Growth is incremental — it adds to what exists. Transformation is fundamental — it changes what something is. And while both are necessary, only transformation guarantees lasting change.
            </p>
            <p>
              This is why our programmes are not built around inspiration. They are built around <strong className="text-foreground">structure, frameworks, disciplines, and accountability systems</strong> that produce measurable transformation across every dimension of life.
            </p>
          </div>
        </div>

        {/* Whole Person Pillars */}
        <div className="text-center mb-8">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">The Whole Person Integration</h3>
          <p className="text-sm text-muted-foreground">Six interconnected pillars — when one is neglected, all are weakened.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="bg-background rounded-xl p-6 text-center border border-border hover:border-accent/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                <p.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-semibold text-foreground font-heading">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
