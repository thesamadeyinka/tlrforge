import { Brain, Heart, Flame, BarChart3, Users, Wallet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const pillars = [
  { label: "Mental Clarity", icon: Brain, desc: "Sharpened focus, critical thinking, and strategic decision-making. We train the mind to operate with precision under pressure." },
  { label: "Spiritual Alignment", icon: Flame, desc: "Finding your core purpose and operating from conviction. Alignment creates consistency even when motivation fades." },
  { label: "Emotional Resilience", icon: Heart, desc: "Developing the emotional intelligence to navigate relationships, setbacks, and leadership challenges with composure." },
  { label: "Strategic Thinking", icon: BarChart3, desc: "Systems-level thinking that turns insight into execution. Moving from reactive decision-making to intentional strategy." },
  { label: "Relational Intelligence", icon: Users, desc: "Building the relational capital that accelerates growth. Great leaders are great connectors." },
  { label: "Financial Wisdom", icon: Wallet, desc: "Mastering the principles of wealth creation, stewardship, and strategic resource allocation." },
];

const methodology = [
  {
    title: "Assess",
    desc: "We begin with honest, structured self-assessment — identifying where you are across all six dimensions and uncovering blind spots that limit growth.",
  },
  {
    title: "Align",
    desc: "Through guided reflection and strategic frameworks, we help you align your goals with your core values, purpose, and long-term vision.",
  },
  {
    title: "Activate",
    desc: "Growth without action is theory. We provide accountability systems, mentorship, and practical tools to turn insight into daily practice.",
  },
  {
    title: "Accelerate",
    desc: "With community, coaching, and continuous learning, your transformation compounds — taking you further, faster, with sustainable momentum.",
  },
];

const ApproachPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[hsl(224,50%,12%)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(224,50%,8%)]/60 to-[hsl(224,50%,14%)]/90" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[140px] pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10 max-w-3xl text-center">
            <ScrollReveal>
              <p className="text-accent text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">Our Approach</p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
                The Whole Person{" "}
                <span className="text-gradient-gold">Integration</span>
              </h1>
              <div className="w-12 h-px bg-accent mx-auto mb-6" />
              <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
                Real change is designed, built around structure, frameworks, and accountability systems. We develop every dimension of who you are.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Philosophy Intro */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto text-center mb-14">
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-5">
                  Why Whole-Person Development?
                </h2>
                <p className="text-muted-foreground text-[16px] leading-[1.8]">
                  Most growth programmes focus on a single dimension — career skills, financial literacy, or mindset. But real transformation happens when every part of who you are is intentionally developed. At The Luminary Rise, we believe that clarity of mind, alignment of spirit, resilience of emotion, sharpness of strategy, depth of relationship, and wisdom with resources together create unstoppable leaders.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Six Pillars */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-6 max-w-5xl">
            <ScrollReveal>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground text-center mb-12">
                The Six Pillars
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <ScrollReveal key={p.label} delay={i * 0.06}>
                  <div className="bg-card rounded-lg border border-border p-7 h-full card-glow">
                    <p.icon className="w-6 h-6 text-accent mb-4" />
                    <h3 className="font-heading font-bold text-foreground text-lg mb-2">{p.label}</h3>
                    <p className="text-muted-foreground text-[14px] leading-[1.7]">{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <ScrollReveal>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
                Our Methodology
              </h2>
              <p className="text-muted-foreground text-center text-[16px] mb-14 max-w-lg mx-auto">
                A four-phase framework that moves you from awareness to lasting transformation.
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              {methodology.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 0.08}>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="text-accent font-heading font-bold text-lg">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground text-xl mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-[15px] leading-[1.8]">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-[hsl(224,50%,12%)] text-center">
          <div className="container mx-auto px-6 max-w-xl">
            <ScrollReveal>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Begin Your Transformation?
              </h2>
              <p className="text-white/50 text-[15px] mb-8">
                Apply to EVOLVE and experience the Whole Person Integration firsthand.
              </p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm px-8 rounded-md">
                <Link to="/apply">
                  Apply to EVOLVE <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ApproachPage;
