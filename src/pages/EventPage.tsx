import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";

const eventData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  outcomes: string[];
  color: string;
}> = {
  "career-development": {
    title: "TLR Career Development",
    tagline: "Accelerate Your Professional Trajectory",
    description: "Navigate your career with clarity and strategic positioning. This event equips you with the frameworks, insights, and practical tools to identify your strengths, define your career path, and execute a plan that aligns with your purpose.",
    highlights: [
      "Personal brand development and positioning",
      "Strategic career mapping and goal setting",
      "Networking mastery and relationship building",
      "Interview preparation and negotiation skills",
      "Transitioning industries with confidence",
    ],
    outcomes: [
      "A clear, actionable career development plan",
      "Enhanced personal brand and professional identity",
      "Expanded professional network and mentorship connections",
    ],
    color: "from-sky-500/20 to-sky-600/10",
  },
  "business-mastery": {
    title: "TLR Business Mastery",
    tagline: "Build, Scale, and Sustain Impactful Businesses",
    description: "Master the fundamentals and advanced strategies of building resilient businesses. From ideation to scaling, this event provides proven frameworks for entrepreneurs and business leaders who want to create lasting impact.",
    highlights: [
      "Business model design and validation",
      "Revenue strategy and pricing frameworks",
      "Operational excellence and systems thinking",
      "Team building and leadership development",
      "Market positioning and competitive advantage",
    ],
    outcomes: [
      "A refined business strategy with clear execution milestones",
      "Frameworks for sustainable growth and profitability",
      "Access to a network of fellow entrepreneurs and mentors",
    ],
    color: "from-amber-500/20 to-amber-600/10",
  },
  "finance-academy": {
    title: "TLR Finance Academy",
    tagline: "Master Financial Intelligence",
    description: "Develop a deep understanding of personal and business finance. This academy covers everything from budgeting and savings to investment strategies and wealth creation, empowering you to make informed financial decisions.",
    highlights: [
      "Financial literacy fundamentals and mindset",
      "Budgeting, saving, and debt management",
      "Investment principles and portfolio strategy",
      "Understanding markets and economic indicators",
      "Tax planning and financial compliance",
    ],
    outcomes: [
      "A personal financial plan with investment strategy",
      "Confidence in making financial decisions",
      "Tools for tracking and growing your net worth",
    ],
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  "wealth-mastery": {
    title: "TLR Wealth Mastery",
    tagline: "Create Generational Wealth",
    description: "Go beyond income — learn to build, protect, and transfer wealth across generations. This event covers advanced wealth-building strategies, asset allocation, and the mindset shifts required for long-term financial freedom.",
    highlights: [
      "Wealth creation principles and asset classes",
      "Real estate and alternative investments",
      "Estate planning and wealth transfer strategies",
      "Building multiple income streams",
      "The psychology of wealth and abundance",
    ],
    outcomes: [
      "A generational wealth-building roadmap",
      "Understanding of diverse investment vehicles",
      "Strategies for wealth protection and legacy planning",
    ],
    color: "from-violet-500/20 to-violet-600/10",
  },
  "relationship-mastery": {
    title: "TLR Strategic Relationships",
    tagline: "Build the Relational Capital That Accelerates Growth",
    description: "Great leaders are great connectors. This event teaches you how to build, nurture, and leverage meaningful relationships that accelerate both personal and professional growth.",
    highlights: [
      "Emotional intelligence and communication mastery",
      "Building trust and authentic connections",
      "Conflict resolution and difficult conversations",
      "Networking with intentionality and purpose",
      "Creating mutually beneficial partnerships",
    ],
    outcomes: [
      "Enhanced emotional intelligence and communication skills",
      "A framework for building and maintaining key relationships",
      "Practical tools for navigating complex interpersonal dynamics",
    ],
    color: "from-rose-500/20 to-rose-600/10",
  },
  "leadership-essentials": {
    title: "TLR Leadership Essentials",
    tagline: "Develop the Core Competencies Every Leader Needs",
    description: "Leadership is not a title — it's a practice. This event develops the foundational competencies every transformational leader needs: vision, execution, influence, and the ability to inspire others toward a shared mission.",
    highlights: [
      "Visionary thinking and strategic planning",
      "Decision-making under uncertainty",
      "Influence, persuasion, and servant leadership",
      "Building and leading high-performance teams",
      "Leading through change and adversity",
    ],
    outcomes: [
      "A personal leadership development plan",
      "Enhanced decision-making and influence skills",
      "Frameworks for leading teams through transformation",
    ],
    color: "from-blue-500/20 to-blue-600/10",
  },
};

const EventPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? eventData[slug] : null;
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!event) {
    return (
      <PageTransition>
        <div className="min-h-screen">
          <Header />
          <div className="pt-32 pb-20 text-center">
            <h1 className="font-heading text-3xl font-bold text-foreground">Event not found</h1>
            <Link to="/" className="text-accent mt-4 inline-block">Return home</Link>
          </div>
          <Footer />
        </div>
      </PageTransition>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Registration submitted!", description: "We'll be in touch shortly." });
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[hsl(224,50%,12%)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(224,50%,8%)]/60 to-[hsl(224,50%,14%)]/90" />
          <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br ${event.color} blur-[160px] pointer-events-none`} />
          <div className="container mx-auto px-6 relative z-10 max-w-3xl text-center">
            <ScrollReveal>
              <p className="text-accent text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">TLR Events</p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">{event.title}</h1>
              <div className="w-12 h-px bg-accent mx-auto mb-6" />
              <p className="text-white/60 text-lg md:text-xl leading-relaxed">{event.tagline}</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Description & Highlights */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <ScrollReveal>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">About This Event</h2>
                  <p className="text-muted-foreground text-[16px] leading-[1.8] mb-8">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" /> Dates TBA</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> Full Day</span>
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Virtual & In-Person</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-5">What You'll Learn</h3>
                  <ul className="space-y-3">
                    {event.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-muted-foreground text-[15px] leading-[1.7]">
                        <CheckCircle className="w-4 h-4 text-accent mt-1 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <ScrollReveal>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Key Outcomes</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {event.outcomes.map((o, i) => (
                  <div key={i} className="bg-card rounded-lg border border-border p-6 text-center">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-heading font-bold">{i + 1}</span>
                    </div>
                    <p className="text-muted-foreground text-[14px] leading-[1.7]">{o}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Registration */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 max-w-lg">
            <ScrollReveal>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Register Your Interest</h2>
              <p className="text-muted-foreground text-center text-sm mb-8">Be the first to know when this event launches.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">You're on the list!</h3>
                  <p className="text-muted-foreground text-sm">We'll notify you when registration opens.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+234..." />
                  </div>
                  <div>
                    <Label htmlFor="message">Anything you'd like us to know?</Label>
                    <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Optional message..." rows={3} />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                    Register Interest <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default EventPage;
