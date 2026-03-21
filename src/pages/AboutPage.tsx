import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Target, Compass, Lightbulb, Shield, Users, Award, Gem, ArrowRight, Rocket, Network, BadgeDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import patternBg from "@/assets/pattern-bg.jpg";

const values = [
  { label: "Intentionality", icon: Target, desc: "Nothing is accidental; every change is designed." },
  { label: "Innovation", icon: Lightbulb, desc: "We cultivate adaptive thinking and creative solutions that anticipate change and position our leaders and organisations ahead of the curve." },
  { label: "Integrity", icon: Shield, desc: "We remain steadfast in truth, choosing what is right over what is convenient in every sphere of influence." },
  { label: "Excellence", icon: Award, desc: "We commit to superior standards in thought, character, execution, and outcomes — making excellence not an aspiration but our operational baseline." },
  { label: "Mentorship", icon: Compass, desc: "We accelerate growth through guided wisdom, structured accountability, and the transfer of insight from experience to emerging potential." },
  { label: "Community", icon: Users, desc: "We build ecosystems of collaboration, shared learning, and mutual accountability where collective growth strengthens individual success." },
  { label: "Legacy", icon: Gem, desc: "We pursue impact that transcends the present, building systems, values, and leaders that endure across generations." },
];

const strategicPillars = [
  {
    title: "EVOLVE",
    icon: Rocket,
    desc: "EVOLVE is the structured development engine of The Luminary Rise. It is a high-impact mentorship and learning platform designed to cultivate clarity, discipline, resilience, and strategic competence in emerging leaders, executives, entrepreneurs, and organisations. Built on the proprietary Awareness–Knowledge–Action–Repeat Better (AKA-RB) framework, EVOLVE transforms potential into measurable progress through guided learning, accountability systems, and practical execution.",
    link: "/programmes",
    linkLabel: "Explore EVOLVE",
  },
  {
    title: "The Luminaries Hub",
    icon: Network,
    desc: "The Luminaries Network is the relational and influence ecosystem of TLR. It is an invitation-only community of high-capacity leaders, professionals, founders, executives, policy influencers, and value-driven organisations committed to growth with integrity and excellence. The Network fosters strategic collaboration, curated partnerships, executive roundtables, thought leadership forums, and peer-to-peer accountability.",
    link: "/luminaries-hub",
    linkLabel: "Explore The Hub",
  },
  {
    title: "Amplify Impact Fund",
    icon: BadgeDollarSign,
    desc: "Amplify Impact Fund (AIF) is the catalytic capital arm of The Luminary Rise. AIF is designed to support vision with resources, providing structured access to growth-enabling capital through grants, venture support, development funding, and strategic business loans. It exists to ensure that clarity and competence are not limited by a lack of capital.",
    link: "/amplify-fund",
    linkLabel: "Explore AIF",
  },
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
            <div className="absolute inset-0 bg-[hsl(224,50%,10%)] opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(224,50%,8%)]/50 via-transparent to-[hsl(224,50%,8%)]/70" />
            <div className="relative z-10 max-w-3xl px-6">
              <ScrollReveal>
                <p className="editorial-label text-white/40 mb-6 tracking-[0.25em]">About Us</p>
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
                  About <span className="text-gradient-gold italic">The Luminary Rise</span>
                </h1>
                <div className="editorial-line mb-6" />
                <p className="text-white/50 text-lg max-w-xl leading-relaxed">
                  More than a school — a dynamic ecosystem for strategic growth and intentional transformation.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What is TLR */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <ScrollReveal>
              <div className="grid md:grid-cols-5 gap-16 items-start">
                <div className="md:col-span-3">
                  <p className="editorial-label text-accent mb-4">Who We Are</p>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 leading-[1.2]">A Premier Platform for Transformational Growth</h2>
                  <div className="space-y-5 text-muted-foreground leading-[1.9] text-[15px]">
                    <p>
                      The Luminary Rise (TLR) is a premier platform for transformational growth. More than a school, TLR is a dynamic ecosystem where emerging leaders, mid- to senior professionals, businesses, and corporate organisations access the knowledge, people, tools, and support needed to thrive in today's world.
                    </p>
                    <p>
                      At TLR, we believe growth precedes transformation, and some levels of growth depend on transformation. That is why our programmes are designed to foster structured learning, mindset shifts, and actionable practice that create lasting impact across personal and professional spheres.
                    </p>
                    <p>
                      Led by Dr Samuel Omenka alongside a faculty of seasoned experts, TLR functions as both a training hub and mentorship community. Through guided learning, customized change frameworks, accountability, and shared experiences, we equip leaders and enterprises to rise with clarity, character, and competence.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-6">
                  <div className="bg-card rounded-lg p-8 border border-border">
                    <p className="editorial-label text-accent mb-3">The Problem</p>
                    <p className="text-muted-foreground text-[15px] leading-[1.8]">
                      People desire and aspire to live a better life, often accompanied by great expectations. Often, they are disappointed by realities that deviate significantly from their expectations and dreams — due to the absence of requisite all-round, balanced, purpose-driven action for a life of fulfilment.
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-8 border border-border">
                    <p className="editorial-label text-accent mb-3">Our Belief</p>
                    <p className="text-muted-foreground text-[15px] leading-[1.8]">
                      Anyone can be great and live a fulfilling life if they know and engage early the things they learned later in life, and if they have and utilize the opportunities for learning and growth on time.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Brand Promise & AKA-RB */}
        <section className="py-32 bg-secondary">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
              <ScrollReveal delay={0.1}>
                <div className="bg-card p-10 md:p-12 h-full">
                  <p className="editorial-label text-accent mb-4">Our Commitment</p>
                  <ul className="space-y-4 text-foreground text-[15px] leading-[1.8]">
                    <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-accent mt-1.5 shrink-0" /> Clarity for emerging leaders.</li>
                    <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-accent mt-1.5 shrink-0" /> Momentum for personal, professional, and corporate growth.</li>
                    <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-accent mt-1.5 shrink-0" /> Structure for sustainable transformation.</li>
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-card p-10 md:p-12 h-full">
                  <p className="editorial-label text-accent mb-4">The AKA-RB Method</p>
                  <p className="text-muted-foreground text-[15px] leading-[1.8] mb-6">
                    A structured framework that ensures participants not only understand transformational growth principles but also apply them effectively and consistently.
                  </p>
                  <div className="space-y-3">
                    {["Awareness", "Knowledge", "Action", "Repeat Better"].map((step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-md bg-accent/10 flex items-center justify-center text-accent font-sans font-bold text-xs shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-[15px] font-medium text-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
              <ScrollReveal delay={0.1}>
                <div className="bg-card p-10 md:p-12 h-full">
                  <p className="editorial-label text-accent mb-4">Vision</p>
                  <p className="text-foreground leading-[1.9] text-[15px]">
                    To shape a future where transformational leaders and resilient institutions drive sustainable prosperity and generational impact across nations.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-card p-10 md:p-12 h-full">
                  <p className="editorial-label text-accent mb-4">Mission</p>
                  <p className="text-foreground leading-[1.9] text-[15px]">
                    To build and steward an integrated, high-impact growth ecosystem that cultivates transformative leadership, strengthens institutions, and mobilizes strategic capital to advance societies and create enduring economic value.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-32 bg-secondary grain relative">
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="editorial-label text-accent mb-6">What Guides Us</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-[1.15]">
                  Our <span className="text-gradient-gold italic">Core Values</span>
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
              {values.map((v, i) => (
                <ScrollReveal key={v.label} delay={i * 0.06}>
                  <div className="bg-card p-8 h-full group">
                    <div className="w-9 h-9 rounded-md bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-500">
                      <v.icon className="w-4 h-4 text-accent" />
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-2 text-[15px]">{v.label}</h4>
                    <p className="text-[13px] text-muted-foreground leading-[1.7]">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Pillars */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="editorial-label text-accent mb-6">Our Architecture</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5 leading-[1.15]">
                  The <span className="text-gradient-gold italic">Strategic Pillars</span>
                </h2>
                <div className="editorial-line mx-auto mb-6" />
                <p className="text-muted-foreground max-w-lg mx-auto leading-[1.8]">
                  Three integrated pillars designed to move leaders and organisations forward — forming a complete ecosystem for strategic growth.
                </p>
              </div>
            </ScrollReveal>
            <div className="space-y-6">
              {strategicPillars.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 0.1}>
                  <div className="bg-card rounded-lg border border-border p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start card-glow">
                    <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                      <p.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-3">{p.title}</h3>
                      <p className="text-[15px] text-muted-foreground leading-[1.8] mb-5">{p.desc}</p>
                      <Button asChild variant="outline" size="sm" className="font-sans font-semibold text-sm rounded-md tracking-wide">
                        <Link to={p.link}>{p.linkLabel} <ArrowRight className="w-3.5 h-3.5 ml-1.5" /></Link>
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-32 bg-secondary">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <ScrollReveal>
              <p className="editorial-label text-accent mb-6">Our Audience</p>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-10">Who TLR Is For</h2>
              <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                {[
                  "Individuals seeking personal excellence",
                  "Entrepreneurs pursuing business growth",
                  "Senior executives refining leadership capacity",
                  "Organisations pursuing sustainable growth",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-card rounded-md p-4 border border-border text-left">
                    <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-[14px] font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6 max-w-3xl">
            <ScrollReveal>
              <p className="editorial-label text-accent text-center mb-6">Leadership</p>
              <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-14">The Team Behind TLR</h2>
            </ScrollReveal>
            {team.map((member) => (
              <ScrollReveal key={member.name}>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-6 overflow-hidden border border-border">
                    <img src="/placeholder.svg" alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="editorial-label text-accent mb-6">{member.role}</p>
                  <p className="text-muted-foreground leading-[1.9] text-[15px] max-w-2xl mx-auto">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Tagline */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <ScrollReveal>
              <p className="font-heading text-xl md:text-2xl font-medium text-foreground italic leading-[1.6]">
                "At Luminary Rise, we don't just adapt to change — we lead it, inspire it, and rise with it."
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-accent">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <p className="editorial-label text-accent-foreground/40 mb-6">Start Today</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground mb-4 italic">
              Ready to Begin Your Journey?
            </h2>
            <div className="editorial-line mx-auto mb-6 !bg-accent-foreground/20" />
            <p className="text-accent-foreground/60 mb-10 leading-[1.8]">Join a community of intentional leaders committed to strategic transformation.</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-semibold px-8 py-6 rounded-md tracking-wide">
              <Link to="/apply">Apply to EVOLVE <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
