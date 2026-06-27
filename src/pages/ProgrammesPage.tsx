import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { TrendingUp, Brain, Heart, Wallet, Users, ArrowRight, Clock, Target, CheckCircle, BookOpen, Video, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import evolveLogo from "@/assets/evolve-logo.png";
import patternBg from "@/assets/pattern-bg.jpg";

const modules = [
  {
    title: "Module 1: Foundations of Growth & Transformation",
    icon: TrendingUp,
    weeks: "Weeks 1–4",
    topics: [
      "Growth vs Transformation & How Change Occurs",
      "The Equation for Success",
      "Spirituality, Purpose & Assignment",
      "Defining Your Growth Path: Vision, Mission & Values",
      "Mental Wellness, Resilience & Overcoming Limiting Beliefs",
    ],
  },
  {
    title: "Module 2: Decisions & Personal Effectiveness",
    icon: Brain,
    weeks: "Weeks 5–6",
    topics: [
      "Making Strategic Decisions & Decision Frameworks",
      "Aligning Decisions to Growth Plans",
      "Dealing with Unconscious Bias",
      "The Illusion of Time Management",
      "Goal Setting, Execution & Overcoming Procrastination",
    ],
  },
  {
    title: "Module 3: Relationships",
    icon: Heart,
    weeks: "Week 7",
    topics: [
      "Building Strategic Relationships",
      "Effective Communication & Conflict Resolution",
      "The Power of Mentorship & Networking",
    ],
  },
  {
    title: "Module 4: Career & Business Development",
    icon: Users,
    weeks: "Weeks 8–9",
    topics: [
      "Career Pathway & Professional Development",
      "Developing Essential Soft & Technical Skills",
      "Navigating the Workplace: Professionalism & Leadership",
      "Fundamentals of Entrepreneurship & Business Development",
      "Identifying Profitable Business Ideas & Market Trends",
      "Building a Scalable Business Model",
    ],
  },
  {
    title: "Module 5: Financial Intelligence & Wealth Creation",
    icon: Wallet,
    weeks: "Weeks 10–12",
    topics: [
      "Money: Purpose & Principles — The Origin of Money",
      "The Principles of Wealth Creation & The First Principle: Increase",
      "Fundamentals of Multiplication: Budgeting, Saving & Investing",
      "Financial Intelligence & Money Management",
      "Business Finance, Cash Flow & Investment Strategies",
      "Financial Independence & Retirement Planning",
    ],
  },
];

const highlights = [
  { icon: Video, label: "Weekly Pre-recorded Sessions", desc: "Structured lessons with the lead coach" },
  { icon: Mic, label: "Bi-Monthly Live Sessions", desc: "Online sessions with guest lectures from industry leaders" },
  { icon: Users, label: "Monthly Live Classes", desc: "Live classes with the lead coach and growth mentors" },
  { icon: BookOpen, label: "Growth Electives", desc: "Select electives specific to your growth focus or goals" },
  { icon: Target, label: "Final Growth Project", desc: "Present a Growth Blueprint applying AKA-RB principles" },
];

const features = [
  { icon: Clock, label: "4-Month Programme", desc: "12 weeks of structured, immersive mentorship" },
  { icon: Users, label: "Hybrid Delivery", desc: "In-person & virtual sessions for flexibility" },
  { icon: Target, label: "Accountability Checkpoints", desc: "Regular evaluations and milestone reviews" },
];

const ProgrammesPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

        {/* Hero */}
        <section className="relative pt-16">
          <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <img src={patternBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[hsl(224,50%,10%)] opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(224,50%,8%)]/50 via-transparent to-[hsl(224,50%,8%)]/70" />
            <div className="relative z-10 max-w-3xl px-6 text-center">
              <ScrollReveal>
                <img src={evolveLogo} alt="EVOLVE" className="h-12 md:h-16 mx-auto mb-4 brightness-0 invert" />
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
                  Growth Mentorship <span className="text-gradient-gold italic">Programme</span>
                </h1>
                <div className="editorial-line mx-auto mb-6" />
                <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
                  A 4-month immersive experience designed to foster learning, growth, and accountability while opening doors to unparalleled opportunities.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Programme Overview */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <ScrollReveal>
              <div className="text-center mb-20">
                <p className="editorial-label text-accent mb-6">Overview</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-[1.15]">
                  What is <span className="text-gradient-gold italic">EVOLVE</span>?
                </h2>
                <div className="editorial-line mx-auto mb-8" />
                <p className="text-muted-foreground text-[16px] max-w-2xl mx-auto leading-[1.9]">
                  EVOLVE is the structured development engine of The Luminary Rise. It is a high-impact mentorship and learning platform designed to cultivate clarity, discipline, resilience, and strategic competence. Built on the proprietary AKA-RB framework, EVOLVE transforms potential into measurable progress. We also believe that it is never too late to begin (again).
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden mb-16">
              {features.map((f, i) => (
                <ScrollReveal key={f.label} delay={i * 0.08}>
                  <div className="bg-card p-8 text-center h-full">
                    <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <f.icon className="w-4.5 h-4.5 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-1 text-[15px]">{f.label}</h3>
                    <p className="text-[13px] text-muted-foreground">{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Programme Highlights */}
        <section className="py-20 md:py-24 bg-white grain relative">
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="editorial-label text-accent mb-6">Structure</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-[1.15]">
                  Programme <span className="text-gradient-gold italic">Highlights</span>
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden max-w-4xl mx-auto">
              {highlights.map((h, i) => (
                <ScrollReveal key={h.label} delay={i * 0.06}>
                  <div className="bg-card p-7 h-full flex items-start gap-4">
                    <div className="w-9 h-9 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                      <h.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground text-[14px] mb-1">{h.label}</h4>
                      <p className="text-[12px] text-muted-foreground leading-[1.6]">{h.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Module Breakdown */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="editorial-label text-accent mb-6">Curriculum</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-[1.15]">
                  Module <span className="text-gradient-gold italic">Breakdown</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {modules.map((m, i) => (
                <ScrollReveal key={m.title} delay={i * 0.08}>
                  <div className="bg-card rounded-lg border border-border p-6 md:p-8 card-glow">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                        <m.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h3 className="font-heading text-lg font-bold text-foreground">{m.title}</h3>
                          <span className="editorial-label text-accent bg-accent/8 rounded-md px-3 py-1">{m.weeks}</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {m.topics.map((topic) => (
                            <div key={topic} className="flex items-start gap-2.5">
                              <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                              <span className="text-[13px] text-muted-foreground leading-[1.6]">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <ScrollReveal>
              <p className="editorial-label text-accent mb-6">Audience</p>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-10">Who It's For</h2>
              <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                {[
                  "Emerging leaders seeking structure and clarity",
                  "Mid- to senior executives refining leadership capacity",
                  "Entrepreneurs building with intention",
                  "Individuals ready for whole-person transformation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-card rounded-md p-4 border border-border text-left">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-[14px] font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-28 bg-[#0a0e1a] overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.18] blur-[180px] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
            <p className="editorial-label text-accent mb-6 tracking-[0.2em] text-sm font-bold">APPLY NOW</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">Ready to EVOLVE?</h2>
            <div className="editorial-line mx-auto mb-8 !bg-accent/40" />
            <p className="text-white/70 text-lg mb-12 leading-[1.8]">Applications are now open for the next cohort.</p>
            <Button asChild size="lg" className="bg-accent text-[#0a0e1a] hover:bg-accent hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] font-sans font-bold text-base px-10 py-7 rounded-md tracking-wide transition-shadow duration-500">
              <Link to="/apply">Apply Now <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ProgrammesPage;
