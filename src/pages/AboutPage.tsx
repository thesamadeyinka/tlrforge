import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Target, Compass, Heart, Lightbulb, Shield, Users, Award, Gem, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import patternBg from "@/assets/pattern-bg.jpg";

const values = [
  { label: "Intentionality", icon: Target, desc: "Every programme, framework, and interaction is designed with purpose." },
  { label: "Innovation", icon: Lightbulb, desc: "Pioneering new approaches to leadership development and growth." },
  { label: "Integrity", icon: Shield, desc: "Authentic, transparent, and consistent in all we do." },
  { label: "Excellence", icon: Award, desc: "Pursuing the highest standards in delivery and outcomes." },
  { label: "Mentorship", icon: Compass, desc: "Walking with people through the process of becoming." },
  { label: "Community", icon: Users, desc: "Building a tribe of intentional, growth-driven individuals." },
  { label: "Legacy", icon: Gem, desc: "Building beyond ourselves — creating lasting impact for generations." },
];

const team = [
  { name: "Dr Samuel Omenka", role: "Founder & Lead Faculty", bio: "A thought leader in strategic transformation, Dr Omenka brings decades of experience in leadership development, organisational consulting, and personal effectiveness coaching." },
];

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

        {/* Hero banner */}
        <section className="relative pt-16">
          <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <img src={patternBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-radiant opacity-90" />
            <div className="relative z-10 text-center px-4">
              <ScrollReveal>
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
                  About <span className="text-gradient-gold">The Luminary Rise</span>
                </h1>
                <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                  More than a school — an ecosystem for strategic transformation.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Why We Exist</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      The Luminary Rise was founded on a singular belief: that anyone can be great and live a fulfilling life — if they engage, early enough and honestly enough, the knowledge and practice that produces transformation.
                    </p>
                    <p>
                      Too many intelligent, capable, and purpose-driven individuals are living beneath their potential — not from lack of talent, but from lack of structure. They have aspirations without architectures.
                    </p>
                  </div>
                </div>
                <div className="bg-secondary rounded-3xl p-8 border border-border">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">The AKA-RB Method</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Our approach ensures participants don't just acquire insight — they apply it, refine it, and build it into the fabric of how they operate.
                  </p>
                  <div className="space-y-3">
                    {["Awareness", "Knowledge", "Action", "Repeat Better"].map((step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent font-heading font-bold text-sm shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-sm font-medium text-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-background rounded-2xl p-8 border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                    <Compass className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To build a world where leaders and organisations rise with clarity, character, and competence to shape transformative impact across societies.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-background rounded-2xl p-8 border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To illuminate pathways for strategic transformational growth through guided learning, structured mentorship, and actionable practice that drives lasting impact.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
                Our <span className="text-gradient-gold">Core Values</span>
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <ScrollReveal key={v.label} delay={i * 0.07}>
                  <div className="bg-secondary rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors h-full group">
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <v.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-2">{v.label}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
                Leadership
              </h2>
            </ScrollReveal>
            {team.map((member) => (
              <ScrollReveal key={member.name}>
                <div className="bg-background rounded-2xl p-8 border border-border max-w-2xl mx-auto text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-accent font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-gold">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-accent-foreground/80 mb-8">Join a community of intentional leaders committed to strategic transformation.</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8 py-6">
              <Link to="/apply">Apply to EVOLVE <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
