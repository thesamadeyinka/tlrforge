import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Target, Compass, Lightbulb, Shield, Users, Award, Gem, ArrowRight, Rocket, Network, BadgeDollarSign, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";

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
    desc: "EVOLVE is the structured development engine of The Luminary Rise — a high-impact mentorship and learning platform designed to cultivate clarity, discipline, resilience, and strategic competence in emerging leaders, executives, entrepreneurs, and organisations. Built on the proprietary Awareness–Knowledge–Action–Repeat Better (AKA-RB) framework, EVOLVE transforms potential into measurable progress through guided learning, accountability systems, and practical execution.",
    link: "/programmes",
    linkLabel: "Explore EVOLVE",
  },
  {
    title: "The Luminaries Network",
    icon: Network,
    desc: "The Luminaries Network is the relational and influence ecosystem of TLR — an invitation-only community of high-capacity leaders, professionals, founders, executives, policy influencers, and value-driven organisations committed to growth with integrity and excellence. The Network fosters strategic collaboration, curated partnerships, executive roundtables, thought leadership forums, and peer-to-peer accountability.",
    link: "/luminaries-hub",
    linkLabel: "Explore The Network",
  },
  {
    title: "Amplify Impact Fund",
    icon: BadgeDollarSign,
    desc: "Amplify Impact Fund (AIF) is the catalytic capital arm of The Luminary Rise. AIF is designed to support vision with resources, providing structured access to growth-enabling capital through grants, venture support, development funding, and strategic business loans. It exists to ensure that clarity and competence are not limited by a lack of capital.",
    link: "/amplify-fund",
    linkLabel: "Explore AIF",
  },
];

const akaSteps = [
  { label: "Awareness", desc: "Recognise the gap between where you are and where you're called to be." },
  { label: "Knowledge", desc: "Gain the frameworks, insight, and wisdom that close that gap." },
  { label: "Action", desc: "Translate knowledge into decisive, structured execution." },
  { label: "Repeat Better", desc: "Refine, iterate, and compound — every cycle sharper than the last." },
];

const audiences = [
  "Individuals seeking personal excellence",
  "Entrepreneurs pursuing business growth",
  "Senior executives refining leadership capacity",
  "Organisations pursuing sustainable growth",
];

const NAVY = "bg-[#0a0e1a]";

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />

        {/* HERO — cinematic full-bleed */}
        <section className="relative pt-16">
          <div className="relative h-[78vh] min-h-[560px] flex items-center justify-center overflow-hidden">
            <img
              src={aboutHero}
              alt="City skyline at dawn"
              className="absolute inset-0 w-full h-full object-cover"
              width={1920}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/85 via-[#0a0e1a]/70 to-[#0a0e1a]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/80 via-transparent to-[#0a0e1a]/40" />
            <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[180px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl px-6 text-center">
              <ScrollReveal>
                <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-8 leading-[1.05] tracking-tight">
                  About <span className="text-gradient-gold">The Luminary Rise</span>
                </h1>
                <div className="editorial-line mx-auto mb-8" />
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-[1.7]">
                  More than a school — a dynamic ecosystem for strategic growth and intentional transformation.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* WHO WE ARE — pure white */}
        <section className="py-24 md:py-28 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <ScrollReveal>
              <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
                <div className="md:col-span-3">
                  <p className="editorial-label text-accent mb-5 tracking-[0.2em] text-sm font-semibold">WHO WE ARE</p>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8 leading-[1.1]">
                    A Premier Platform for Transformational Growth
                  </h2>
                  <div className="space-y-6 text-primary/75 leading-[1.85] text-[17px]">
                    <p>
                      The Luminary Rise (TLR) is a premier platform for transformational growth. More than a school, TLR is a dynamic ecosystem where emerging leaders, mid- to senior professionals, businesses, and corporate organisations access the knowledge, people, tools, and support needed to thrive in today's world.
                    </p>
                    <p>
                      At TLR, we believe growth precedes transformation, and some levels of growth depend on transformation. Our programmes are designed to foster structured learning, mindset shifts, and actionable practice that create lasting impact across personal and professional spheres.
                    </p>
                    <p>
                      Led by Dr Samuel Omenka alongside a faculty of seasoned experts, TLR functions as both a training hub and mentorship community — equipping leaders and enterprises to rise with clarity, character, and competence.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-6">
                  <div className="relative bg-white rounded-lg p-8 border border-primary/10 border-l-4 border-l-accent shadow-[0_10px_40px_-12px_rgba(10,14,26,0.12)] hover:shadow-[0_20px_50px_-12px_rgba(10,14,26,0.18)] transition-shadow duration-500">
                    <p className="editorial-label text-accent mb-3 tracking-[0.2em] text-xs font-semibold">THE PROBLEM</p>
                    <p className="text-primary/80 text-[16px] leading-[1.8]">
                      People desire and aspire to live a better life, often accompanied by great expectations — yet are disappointed by realities that deviate from those dreams, due to the absence of balanced, purpose-driven action for a life of fulfilment.
                    </p>
                  </div>
                  <div className="relative bg-white rounded-lg p-8 border border-primary/10 border-l-4 border-l-accent shadow-[0_10px_40px_-12px_rgba(10,14,26,0.12)] hover:shadow-[0_20px_50px_-12px_rgba(10,14,26,0.18)] transition-shadow duration-500">
                    <p className="editorial-label text-accent mb-3 tracking-[0.2em] text-xs font-semibold">OUR BELIEF</p>
                    <p className="text-primary/80 text-[16px] leading-[1.8]">
                      Anyone can be great and live a fulfilling life if they engage early the things they would otherwise learn later — and if they have and utilise opportunities for learning and growth on time.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* COMMITMENT & AKA-RB — deep navy */}
        <section className={`relative ${NAVY} py-20 md:py-24 overflow-hidden`}>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.06] blur-[160px] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <ScrollReveal delay={0.1}>
                <p className="editorial-label text-accent mb-5 tracking-[0.2em] text-sm font-semibold">OUR COMMITMENT</p>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 leading-[1.15]">
                  Built for clarity, momentum, and structure.
                </h3>
                <ul className="space-y-5 text-white/85 text-[17px] leading-[1.7]">
                  <li className="flex items-start gap-4"><ArrowRight className="w-5 h-5 text-accent mt-1 shrink-0" /> Clarity for emerging leaders.</li>
                  <li className="flex items-start gap-4"><ArrowRight className="w-5 h-5 text-accent mt-1 shrink-0" /> Momentum for personal, professional, and corporate growth.</li>
                  <li className="flex items-start gap-4"><ArrowRight className="w-5 h-5 text-accent mt-1 shrink-0" /> Structure for sustainable transformation.</li>
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="editorial-label text-accent mb-5 tracking-[0.2em] text-sm font-semibold">THE AKA-RB METHOD</p>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 leading-[1.15]">
                  A framework that turns insight into outcome.
                </h3>
                <div className="space-y-4">
                  {akaSteps.map((step, i) => (
                    <div key={step.label} className="group flex items-start gap-5 p-5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-accent/40 hover:bg-white/[0.06] transition-all duration-500">
                      <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-accent font-heading font-bold text-lg shrink-0 group-hover:bg-accent group-hover:text-[#0a0e1a] transition-colors duration-500">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-bold text-white mb-1">{step.label}</h4>
                        <p className="text-white/65 text-[15px] leading-[1.65]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* VISION & MISSION — deep navy with gold vertical divider */}
        <section className={`relative ${NAVY} py-20 md:py-24 overflow-hidden border-t border-white/5`}>
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/[0.05] blur-[140px] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-0 relative">
              <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
              <ScrollReveal delay={0.1}>
                <div className="md:pr-16">
                  <p className="editorial-label text-accent mb-5 tracking-[0.2em] text-sm font-semibold">VISION</p>
                  <p className="font-heading text-2xl md:text-3xl text-white leading-[1.4] font-medium">
                    To shape a future where transformational leaders and resilient institutions drive sustainable prosperity and generational impact across nations.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="md:pl-16">
                  <p className="editorial-label text-accent mb-5 tracking-[0.2em] text-sm font-semibold">MISSION</p>
                  <p className="font-heading text-2xl md:text-3xl text-white leading-[1.4] font-medium">
                    To build and steward an integrated, high-impact growth ecosystem that cultivates transformative leadership, strengthens institutions, and mobilises strategic capital.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CORE VALUES — pure white */}
        <section className="py-24 md:py-28 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="editorial-label text-accent mb-5 tracking-[0.2em] text-sm font-semibold">WHAT GUIDES US</p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary leading-[1.1]">
                  Our <span className="text-gradient-gold">Core Values</span>
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <ScrollReveal key={v.label} delay={i * 0.05}>
                  <div className="group h-full bg-white rounded-lg p-7 border border-primary/10 border-t-4 border-t-accent shadow-[0_4px_20px_-8px_rgba(10,14,26,0.08)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(10,14,26,0.18)] transition-all duration-500">
                    <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-500">
                      <v.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-heading font-bold text-primary mb-2 text-[17px]">{v.label}</h4>
                    <p className="text-[14px] text-primary/65 leading-[1.7]">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* STRATEGIC PILLARS — deep navy */}
        <section className={`relative ${NAVY} py-20 md:py-24 overflow-hidden`}>
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/[0.05] blur-[160px] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="editorial-label text-accent mb-5 tracking-[0.2em] text-sm font-semibold">OUR ARCHITECTURE</p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
                  The <span className="text-gradient-gold">Strategic Pillars</span>
                </h2>
                <p className="text-white/70 text-[17px] max-w-2xl mx-auto leading-[1.7]">
                  Three integrated pillars designed to move leaders and organisations forward — forming a complete ecosystem for strategic growth.
                </p>
              </div>
            </ScrollReveal>
            <div className="space-y-5">
              {strategicPillars.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 0.08}>
                  <div className="group relative bg-white/[0.04] border border-white/10 border-l-4 border-l-accent rounded-lg p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start hover:bg-white/[0.07] hover:border-l-accent hover:-translate-y-0.5 transition-all duration-500">
                    <div className="w-14 h-14 rounded-md bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                      <p.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl font-bold text-white mb-3">{p.title}</h3>
                      <p className="text-[16px] text-white/75 leading-[1.8] mb-5">{p.desc}</p>
                      <Button asChild variant="outline" size="sm" className="font-sans font-semibold text-sm rounded-md tracking-wide bg-transparent border-accent/50 text-accent hover:bg-accent hover:text-[#0a0e1a]">
                        <Link to={p.link}>{p.linkLabel} <ArrowRight className="w-3.5 h-3.5 ml-1.5" /></Link>
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR — deep navy continuation */}
        <section className={`relative ${NAVY} py-20 md:py-24 border-t border-white/5`}>
          <div className="container mx-auto px-6 max-w-5xl">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="editorial-label text-accent mb-5 tracking-[0.2em] text-sm font-semibold">OUR AUDIENCE</p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.1]">
                  Who TLR Is <span className="text-gradient-gold">For</span>
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {audiences.map((item, i) => (
                  <div key={item} className="group flex items-center gap-4 bg-white/[0.04] rounded-lg p-6 border border-white/10 hover:border-accent/40 hover:bg-white/[0.07] transition-all duration-500">
                    <div className="w-10 h-10 rounded-md bg-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-500">
                      <ArrowRight className="w-4 h-4 text-accent group-hover:text-[#0a0e1a] transition-colors duration-500" />
                    </div>
                    <span className="text-[17px] font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* LEADERSHIP — white */}
        <section className="py-24 md:py-28 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <ScrollReveal>
              <p className="editorial-label text-accent text-center mb-5 tracking-[0.2em] text-sm font-semibold">LEADERSHIP</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-14 leading-[1.1]">
                The Team Behind <span className="text-gradient-gold">TLR</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid md:grid-cols-[260px_1fr] gap-10 md:gap-14 items-start">
                <div className="mx-auto md:mx-0">
                  <div className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px]">
                    <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl" />
                    <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-accent via-accent/60 to-accent">
                      <div className="w-full h-full rounded-full overflow-hidden bg-primary/5 border-4 border-white">
                        <img src="/placeholder.svg" alt="Dr Samuel Omenka" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">Dr Samuel Omenka</h3>
                  <p className="editorial-label text-accent mb-6 tracking-[0.2em] text-sm font-bold">PRESIDENT & LEAD COACH</p>
                  <p className="text-primary/75 leading-[1.9] text-[17px] text-left">
                    Dr Samuel Omenka is a senior economist, trusted advisor, visionary leader, and kingdom strategist whose life and work are defined by the dual call to transform economies and amplify Jesus Christ. He brings together deep technical expertise in macroeconomic frameworks, public financial management systems, fiscal reforms, and development policy analysis with a mission-driven commitment to advancing kingdom values. As a trusted policy advisor, Samuel has successfully provided incisive economic strategies and secured consensus for critical fiscal and governance reforms. Beyond economics, Samuel is a visionary investor, entrepreneur, and mentor who builds businesses, strategic investment platforms, and growth mentorship programmes — all rooted in integrity, excellence, and stewardship. Through initiatives such as The Luminary Rise, he empowers leaders through transformational growth and creates opportunities that inspire hope, foster growth, and enable abundant living.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* PULL QUOTE — deep navy */}
        <section className={`relative ${NAVY} py-24 md:py-28 overflow-hidden`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/[0.05] blur-[160px] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <Quote className="w-12 h-12 text-accent/60 mx-auto mb-8" />
            <ScrollReveal>
              <p className="font-heading text-2xl md:text-4xl text-white italic leading-[1.5] font-medium">
                "At Luminary Rise, we don't just adapt to change — we lead it, inspire it, and rise with it."
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA — deep navy with gold glow */}
        <section className={`relative ${NAVY} py-24 md:py-28 overflow-hidden border-t border-white/5`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.18] blur-[180px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/[0.12] blur-[100px] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
            <p className="editorial-label text-accent mb-6 tracking-[0.2em] text-sm font-bold">START TODAY</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Ready to Begin Your Journey?
            </h2>
            <div className="editorial-line mx-auto mb-8 !bg-accent/40" />
            <p className="text-white/70 text-lg mb-12 leading-[1.8] max-w-xl mx-auto">
              Join a community of intentional leaders committed to strategic transformation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-[#0a0e1a] hover:bg-accent hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] font-sans font-bold text-base px-10 py-7 rounded-md tracking-wide transition-shadow duration-500"
            >
              <Link to="/apply">Apply to EVOLVE <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
