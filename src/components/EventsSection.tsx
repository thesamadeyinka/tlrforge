import { Calendar, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const events = [
  {
    title: "TLR Career Development",
    desc: "Accelerate your professional trajectory with clarity and strategic positioning.",
    color: "from-sky-500/10 to-sky-600/5",
  },
  {
    title: "TLR Business Mastery",
    desc: "Build, scale, and sustain impactful businesses with proven frameworks.",
    color: "from-amber-500/10 to-amber-600/5",
  },
  {
    title: "TLR Finance Academy",
    desc: "Master financial intelligence, budgeting, and investment fundamentals.",
    color: "from-emerald-500/10 to-emerald-600/5",
  },
  {
    title: "TLR Wealth Mastery",
    desc: "Create generational wealth through strategic resource allocation.",
    color: "from-violet-500/10 to-violet-600/5",
  },
  {
    title: "TLR Relationship Mastery",
    desc: "Build the relational capital that accelerates personal and professional growth.",
    color: "from-rose-500/10 to-rose-600/5",
  },
  {
    title: "TLR Leadership Essentials",
    desc: "Develop the core competencies every transformational leader needs.",
    color: "from-blue-500/10 to-blue-600/5",
  },
];

const EventsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary relative grain">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent mb-4">Events</h3>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-[1.15]">
              Explore the Lineup
            </h2>
            <div className="editorial-line mx-auto mb-5" />
            <p className="text-muted-foreground text-[17px] leading-[1.8] max-w-lg mx-auto">
              Events for Transformational Growth
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {events.map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 0.08}>
              <Link
                to="/programmes"
                className="block bg-card rounded-lg border border-border p-7 h-full group card-glow"
              >
                <div className={`w-10 h-10 rounded-md bg-gradient-to-br ${event.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500`}>
                  <Calendar className="w-4 h-4 text-accent" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-2 text-lg">{event.title}</h4>
                <p className="text-[14px] text-muted-foreground leading-[1.7]">{event.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-accent text-[12px] font-sans font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
