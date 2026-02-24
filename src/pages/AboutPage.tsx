import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Target, Compass, Heart, Lightbulb, Shield, Users, Award, Gem, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import patternBg from "@/assets/pattern-bg.jpg";

const values = [
  { label: "Intentionality", icon: Target, desc: "Nothing is accidental; every change is designed." },
  { label: "Innovation", icon: Lightbulb, desc: "We embrace new ideas and adaptive solutions." },
  { label: "Integrity", icon: Shield, desc: "We uphold what is right, consistently." },
  { label: "Excellence", icon: Award, desc: "We pursue the highest standards in every engagement — excellence is our minimum standard." },
  { label: "Mentorship", icon: Compass, desc: "We believe that growth is accelerated when guided." },
  { label: "Community", icon: Users, desc: "We create a system of collaboration and accountability." },
  { label: "Legacy", icon: Gem, desc: "We build impact that endures." },
];

const team = [
  {
    name: "Dr Samuel Omenka",
    role: "President & Lead Coach",
    bio: "Dr. Samuel Omenka is a senior economist, trusted advisor, visionary leader, and kingdom strategist whose life and work are defined by the dual call to transform economies and amplify Jesus Christ. He brings together deep technical expertise in macroeconomic frameworks, public financial management systems, fiscal reforms, and development policy analysis with a mission-driven commitment to advancing kingdom values. As a trusted policy advisor, Samuel has successfully provided incisive economic strategies and secured consensus for critical fiscal and governance reforms. Beyond economics, Samuel is a visionary investor, entrepreneur, and mentor who builds businesses, strategic investment platforms, and growth mentorship programmes — all rooted in integrity, excellence, and stewardship. Through initiatives such as The Luminary Rise, he empowers leaders through transformational growth and creates opportunities that inspire hope, foster growth, and enable abundant living.",
  },
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
                  More than a school — a dynamic ecosystem for strategic growth and intentional transformation.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What is TLR */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Who We Are</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      The Luminary Rise (TLR) is a premier platform for strategic growth and intentional transformation. More than a school, TLR is a dynamic ecosystem where emerging leaders, mid- to senior executives, businesses, and corporate organisations access the knowledge, people, tools, and support needed to thrive in today's fast-changing world.
                    </p>
                    <p>
                      At TLR, we believe growth precedes transformation, and some levels of growth depend on transformation. That is why our programmes are designed to foster structured learning, mindset shifts, and actionable practice that create lasting impact across personal and professional spheres.
                    </p>
                    <p>
                      Led by Dr Samuel Omenka alongside a faculty of seasoned experts, TLR functions as both a training hub and mentorship community. Through guided learning, customized change frameworks, accountability, and shared experiences, we equip leaders and enterprises to rise with clarity, character, and competence.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-secondary rounded-3xl p-8 border border-border">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-3">The Problem We Solve</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      People desire and aspire to live a better life, often accompanied by great expectations. Often, they are disappointed by realities that deviate significantly from their expectations and dreams — due to the absence of requisite all-round, balanced, purpose-driven action for a life of fulfilment.
                    </p>
                  </div>
                  <div className="bg-secondary rounded-3xl p-8 border border-border">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-3">Our Belief</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Anyone can be great and live a fulfilling life if they know and engage early the things they learned later in life, and if they have and utilize the opportunities for learning and growth on time.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Brand Promise & AKA-RB */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-background rounded-2xl p-8 border border-border h-full">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">Brand Promise</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-accent mt-1 shrink-0" /> Clarity for emerging leaders.</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-accent mt-1 shrink-0" /> Momentum for personal, professional, and corporate growth.</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-accent mt-1 shrink-0" /> Structure for sustainable transformation.</li>
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-background rounded-2xl p-8 border border-border h-full">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">The AKA-RB Method</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    A structured framework that ensures participants not only understand transformational growth principles but also apply them effectively and consistently.
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
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-secondary rounded-2xl p-8 border border-border h-full">
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
                <div className="bg-secondary rounded-2xl p-8 border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To illuminate pathways for strategic transformational growth for leaders and organisations through guided learning, structured mentorship, and actionable practice that drives lasting impact.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-5xl">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
                Our <span className="text-gradient-gold">Core Values</span>
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <ScrollReveal key={v.label} delay={i * 0.07}>
                  <div className="bg-background rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors h-full group">
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

        {/* Who It's For */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Who TLR Is For</h2>
              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {[
                  "Individuals seeking personal excellence",
                  "Entrepreneurs pursuing business growth",
                  "Senior executives refining leadership capacity",
                  "Organisations pursuing sustainable growth",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-secondary rounded-xl p-4 border border-border text-left">
                    <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
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
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-5 overflow-hidden border-2 border-accent/20">
                    <img
                      src="/placeholder.svg"
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-accent font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Tagline */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <ScrollReveal>
              <p className="font-heading text-xl md:text-2xl font-semibold text-foreground italic">
                "We don't just adapt to change — we lead it, inspire it, and rise with it."
              </p>
            </ScrollReveal>
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
