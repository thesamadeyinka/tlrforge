import { Target, Compass, Lightbulb, Shield, Users, Award, Gem, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground text-center mb-6 leading-tight">
            More Than a School.{" "}
            <span className="text-gradient-gold">An Ecosystem.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center mb-12">
            A dynamic ecosystem where emerging leaders, executives, businesses, and organisations access the knowledge, tools, and support needed to thrive in today's fast-changing world.
          </p>
        </ScrollReveal>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal delay={0.1}>
            <div className="bg-secondary rounded-2xl p-8 border border-border h-full group hover:border-accent/30 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-accent/10">
                <Compass className="w-7 h-7 text-accent drop-shadow-sm" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our vision is to build a world where leaders and organisations rise with clarity, character, and competence to shape transformative impact across societies.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-secondary rounded-2xl p-8 border border-border h-full group hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                We have a mandate "to illuminate pathways for strategic transformational growth for leaders and organisations through guided learning, structured mentorship, and actionable practice that drives lasting impact".
              </p>
              <p className="text-muted-foreground/70 text-sm mt-2 italic">
                Proverbs 4:18; Psalms 32:8 NLT; Isaiah 60:1
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Core Values */}
        <ScrollReveal delay={0.15}>
          <div className="text-center mb-8">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Core Values</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="inline-flex items-center gap-2 bg-muted rounded-full px-5 py-2.5 border border-border hover:border-accent/40 transition-colors"
                >
                  <v.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{v.label}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" className="font-heading font-semibold">
              <Link to="/about">Learn More About Us <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
