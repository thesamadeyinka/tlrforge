import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Download, BookOpen, Video, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Resource {
  id: string;
  title: string;
  description: string | null;
  category: string;
  file_url: string | null;
  is_premium: boolean;
}

const categoryIcons: Record<string, any> = {
  guide: BookOpen,
  template: FileText,
  video: Video,
  article: Lightbulb,
};

const placeholderResources: Resource[] = [
  { id: "1", title: "Leadership Growth Framework", description: "A structured guide to developing your leadership capacity through the AKA-RB method.", category: "guide", file_url: null, is_premium: false },
  { id: "2", title: "Personal Vision Statement Template", description: "Craft a clear, compelling personal vision statement using our step-by-step template.", category: "template", file_url: null, is_premium: false },
  { id: "3", title: "Emotional Intelligence Self-Assessment", description: "Evaluate your emotional intelligence across five key dimensions.", category: "guide", file_url: null, is_premium: false },
  { id: "4", title: "Strategic Decision-Making Workbook", description: "A practical workbook for improving your decision-making process.", category: "template", file_url: null, is_premium: true },
  { id: "5", title: "Building Relational Capital", description: "Learn the art of building meaningful professional relationships.", category: "article", file_url: null, is_premium: false },
  { id: "6", title: "Financial Mastery Starter Guide", description: "Foundational financial principles for emerging leaders.", category: "guide", file_url: null, is_premium: true },
];

const Resources = () => {
  const [resources, setResources] = useState<Resource[]>(placeholderResources);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchResources = async () => {
      const { data } = await supabase.from("resources").select("*").order("created_at", { ascending: false });
      if (data && data.length > 0) setResources(data as Resource[]);
    };
    fetchResources();
  }, []);

  const filtered = filter === "all" ? resources : resources.filter((r) => r.category === filter);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Resources <span className="text-gradient-gold">Hub</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Leadership guides, templates, and tools to accelerate your transformation journey.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["all", "guide", "template", "article", "video"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  filter === cat
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-background text-muted-foreground border-border hover:border-accent/40"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((resource) => {
              const Icon = categoryIcons[resource.category] || FileText;
              return (
                <div key={resource.id} className="bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-colors group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    {resource.is_premium && (
                      <span className="text-xs font-semibold text-accent bg-accent/10 rounded-full px-2.5 py-1 border border-accent/20">Premium</span>
                    )}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{resource.description}</p>
                  <Button variant="outline" size="sm" className="w-full group-hover:border-accent/40" disabled={!resource.file_url}>
                    <Download className="w-4 h-4 mr-2" />
                    {resource.file_url ? "Download" : "Coming Soon"}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
