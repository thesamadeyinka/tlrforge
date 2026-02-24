import { Target, Compass, Heart, Lightbulb, Shield, Users, Award, Gem } from "lucide-react";

const values = [
  { label: "Intentionality", icon: Target },
  { label: "Innovation", icon: Lightbulb },
  { label: "Integrity", icon: Shield },
  { label: "Excellence", icon: Award },
  { label: "Mentorship", icon: Compass },
  { label: "Community", icon: Users },
  { label: "Legacy", icon: Gem },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground text-center mb-8 leading-tight">
          More Than a School.{" "}
          <span className="text-gradient-gold">An Ecosystem</span> for Strategic Transformation.
        </h2>

        <div className="max-w-3xl mx-auto space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-16">
          <p>
            The Luminary Rise (TLR) was founded on a singular belief: that anyone can be great and live a fulfilling life — if they engage, early enough and honestly enough, the knowledge and practice that produces transformation.
          </p>
          <p>
            We exist because too many intelligent, capable, and purpose-driven individuals are living beneath their potential — not from lack of talent, but from lack of structure. They have aspirations without architectures. Dreams without disciplines. Potential without systems.
          </p>
          <p>
            Led by <strong className="text-foreground">Dr Samuel Omenka</strong> alongside a faculty of seasoned experts, TLR functions as a training hub, mentorship community, and transformational think tank.
          </p>
          <p>
            Our approach — built on the <strong className="text-foreground">AKA-RB Method</strong> (Awareness, Knowledge, Action — Repeat Better) — ensures that participants don't just acquire insight. They apply it, refine it, and build it into the fabric of how they operate.
          </p>
        </div>

        {/* Vision, Mission, Brand Promise */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-secondary rounded-xl p-8 border border-border">
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4">
              <Compass className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To build a world where leaders and organisations rise with clarity, character, and competence to shape transformative impact across societies.
            </p>
          </div>
          <div className="bg-secondary rounded-xl p-8 border border-border">
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4">
              <Target className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To illuminate pathways for strategic transformational growth for leaders and organisations through guided learning, structured mentorship, and actionable practice that drives lasting impact.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Core Values</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {values.map((v) => (
              <div
                key={v.label}
                className="inline-flex items-center gap-2 bg-muted rounded-full px-5 py-2.5 border border-border"
              >
                <v.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
