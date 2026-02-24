import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import {
  BookOpen, CheckCircle, Circle, Play, FileText, MessageSquare,
  LogOut, Home, ChevronRight, Send, User
} from "lucide-react";

interface Module {
  id: string;
  title: string;
  description: string | null;
  module_order: number;
}

interface Lesson {
  id: string;
  module_id: string;
  title: string;
  content: string | null;
  video_url: string | null;
  lesson_order: number;
}

interface Discussion {
  id: string;
  user_id: string;
  module_id: string | null;
  title: string;
  content: string;
  created_at: string;
}

interface DiscussionReply {
  id: string;
  discussion_id: string;
  user_id: string;
  content: string;
  created_at: string;
}

const placeholderModules: Module[] = [
  { id: "m1", title: "Growth & Transformation", description: "Understanding the fundamentals of intentional growth and the mechanics of lasting transformation.", module_order: 1 },
  { id: "m2", title: "Decisions & Personal Effectiveness", description: "Mastering the art of strategic decision-making and maximizing personal productivity.", module_order: 2 },
  { id: "m3", title: "Relationships & Emotional Intelligence", description: "Building relational capital and developing emotional resilience for leadership.", module_order: 3 },
  { id: "m4", title: "Finance & Career", description: "Financial mastery and strategic career positioning for lasting impact.", module_order: 4 },
];

const placeholderLessons: Record<string, Lesson[]> = {
  m1: [
    { id: "l1", module_id: "m1", title: "The AKA-RB Method", content: "Learn the foundational framework: Awareness, Knowledge, Action — Repeat Better.", video_url: null, lesson_order: 1 },
    { id: "l2", module_id: "m1", title: "Growth vs Transformation", content: "Understanding the critical difference between incremental growth and fundamental transformation.", video_url: null, lesson_order: 2 },
    { id: "l3", module_id: "m1", title: "Designing Your Transformation", content: "Creating a structured plan for intentional change across all life dimensions.", video_url: null, lesson_order: 3 },
  ],
  m2: [
    { id: "l4", module_id: "m2", title: "Decision Frameworks", content: "Strategic models for making high-stakes decisions with clarity.", video_url: null, lesson_order: 1 },
    { id: "l5", module_id: "m2", title: "Personal Effectiveness Systems", content: "Building systems that maximize your output and impact.", video_url: null, lesson_order: 2 },
  ],
  m3: [
    { id: "l6", module_id: "m3", title: "Emotional Intelligence Foundations", content: "The five pillars of emotional intelligence and how to develop each.", video_url: null, lesson_order: 1 },
    { id: "l7", module_id: "m3", title: "Building Relational Capital", content: "Strategies for creating meaningful and lasting professional relationships.", video_url: null, lesson_order: 2 },
  ],
  m4: [
    { id: "l8", module_id: "m4", title: "Financial Foundations for Leaders", content: "Essential financial principles every emerging leader must master.", video_url: null, lesson_order: 1 },
    { id: "l9", module_id: "m4", title: "Career Strategy & Positioning", content: "Strategic approaches to career advancement and personal branding.", video_url: null, lesson_order: 2 },
  ],
};

type Tab = "modules" | "discussions";

const Dashboard = () => {
  const { user, signOut, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [tab, setTab] = useState<Tab>("modules");
  const [modules] = useState<Module[]>(placeholderModules);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [newDiscussionTitle, setNewDiscussionTitle] = useState("");
  const [newDiscussionContent, setNewDiscussionContent] = useState("");
  const [selectedDiscussion, setSelectedDiscussion] = useState<Discussion | null>(null);
  const [replies, setReplies] = useState<DiscussionReply[]>([]);
  const [newReply, setNewReply] = useState("");

  useEffect(() => {
    if (!authLoading && !user) navigate("/auth");
  }, [user, authLoading, navigate]);

  // Fetch discussions
  useEffect(() => {
    const fetchDiscussions = async () => {
      const { data } = await supabase.from("lms_discussions").select("*").order("created_at", { ascending: false });
      if (data) setDiscussions(data as Discussion[]);
    };
    fetchDiscussions();

    const channel = supabase
      .channel("discussions-realtime")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "lms_discussions" }, (payload) => {
        setDiscussions((prev) => [payload.new as Discussion, ...prev]);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  // Fetch replies when discussion selected
  useEffect(() => {
    if (!selectedDiscussion) return;
    const fetchReplies = async () => {
      const { data } = await supabase.from("lms_discussion_replies").select("*").eq("discussion_id", selectedDiscussion.id).order("created_at");
      if (data) setReplies(data as DiscussionReply[]);
    };
    fetchReplies();

    const channel = supabase
      .channel(`replies-${selectedDiscussion.id}`)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "lms_discussion_replies", filter: `discussion_id=eq.${selectedDiscussion.id}` }, (payload) => {
        setReplies((prev) => [...prev, payload.new as DiscussionReply]);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [selectedDiscussion]);

  const toggleComplete = (lessonId: string) => {
    setCompletedLessons((prev) => {
      const next = new Set(prev);
      if (next.has(lessonId)) next.delete(lessonId); else next.add(lessonId);
      return next;
    });
  };

  const allLessons = Object.values(placeholderLessons).flat();
  const overallProgress = allLessons.length > 0 ? (completedLessons.size / allLessons.length) * 100 : 0;

  const currentLessons = selectedModule ? (placeholderLessons[selectedModule] || []) : [];

  const moduleProgress = (moduleId: string) => {
    const lessons = placeholderLessons[moduleId] || [];
    if (lessons.length === 0) return 0;
    const completed = lessons.filter((l) => completedLessons.has(l.id)).length;
    return (completed / lessons.length) * 100;
  };

  const handleCreateDiscussion = async () => {
    if (!newDiscussionTitle.trim() || !newDiscussionContent.trim() || !user) return;
    const { error } = await supabase.from("lms_discussions").insert({
      user_id: user.id,
      title: newDiscussionTitle.trim(),
      content: newDiscussionContent.trim(),
    });
    if (error) {
      toast({ title: "Error", description: "Failed to post discussion.", variant: "destructive" });
    } else {
      setNewDiscussionTitle("");
      setNewDiscussionContent("");
    }
  };

  const handleReply = async () => {
    if (!newReply.trim() || !user || !selectedDiscussion) return;
    const { error } = await supabase.from("lms_discussion_replies").insert({
      discussion_id: selectedDiscussion.id,
      user_id: user.id,
      content: newReply.trim(),
    });
    if (error) {
      toast({ title: "Error", description: "Failed to post reply.", variant: "destructive" });
    } else {
      setNewReply("");
    }
  };

  if (authLoading) return <div className="min-h-screen flex items-center justify-center bg-background"><p>Loading...</p></div>;

  return (
    <div className="min-h-screen bg-muted">
      {/* Top bar */}
      <header className="bg-primary text-primary-foreground h-14 flex items-center justify-between px-4 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <a href="/" className="font-heading font-bold text-sm">The Luminary Rise</a>
          <span className="text-primary-foreground/40">|</span>
          <span className="text-sm text-primary-foreground/70">Student Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-primary-foreground/70 hover:text-primary-foreground" onClick={() => navigate("/")}>
            <Home className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-primary-foreground/70 hover:text-primary-foreground" onClick={signOut}>
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Welcome & Progress */}
        <div className="bg-background rounded-xl p-6 border border-border mb-8">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
            Welcome back{user?.user_metadata?.full_name ? `, ${user.user_metadata.full_name}` : ""}!
          </h1>
          <p className="text-muted-foreground text-sm mb-4">Your EVOLVE journey continues. Keep building momentum.</p>
          <div className="flex items-center gap-4">
            <Progress value={overallProgress} className="flex-1 h-2" />
            <span className="text-sm font-semibold text-foreground">{Math.round(overallProgress)}%</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button onClick={() => { setTab("modules"); setSelectedDiscussion(null); }} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === "modules" ? "bg-accent text-accent-foreground" : "bg-background text-muted-foreground border border-border"}`}>
            <BookOpen className="w-4 h-4 inline mr-2" />Modules
          </button>
          <button onClick={() => { setTab("discussions"); setSelectedModule(null); setSelectedLesson(null); }} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === "discussions" ? "bg-accent text-accent-foreground" : "bg-background text-muted-foreground border border-border"}`}>
            <MessageSquare className="w-4 h-4 inline mr-2" />Community
          </button>
        </div>

        {/* MODULES TAB */}
        {tab === "modules" && (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Module list */}
            <div className="space-y-3">
              {modules.map((m) => (
                <button
                  key={m.id}
                  onClick={() => { setSelectedModule(m.id); setSelectedLesson(null); }}
                  className={`w-full text-left p-4 rounded-xl border transition-colors ${selectedModule === m.id ? "bg-background border-accent shadow-sm" : "bg-background border-border hover:border-accent/30"}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-semibold text-sm text-foreground">{m.title}</h3>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <Progress value={moduleProgress(m.id)} className="h-1.5" />
                </button>
              ))}
            </div>

            {/* Lessons list */}
            <div className="space-y-2">
              {selectedModule ? currentLessons.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setSelectedLesson(l)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors flex items-center gap-3 ${selectedLesson?.id === l.id ? "bg-accent/5 border-accent/30" : "bg-background border-border hover:border-accent/20"}`}
                >
                  {completedLessons.has(l.id) ? (
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground shrink-0" />
                  )}
                  <span className="text-sm font-medium text-foreground">{l.title}</span>
                </button>
              )) : (
                <div className="bg-background rounded-xl p-8 border border-border text-center">
                  <BookOpen className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Select a module to view lessons</p>
                </div>
              )}
            </div>

            {/* Lesson content */}
            <div>
              {selectedLesson ? (
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{selectedLesson.title}</h3>
                  {selectedLesson.video_url && (
                    <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <Play className="w-12 h-12 text-muted-foreground" />
                    </div>
                  )}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{selectedLesson.content}</p>
                  <Button
                    onClick={() => toggleComplete(selectedLesson.id)}
                    className={completedLessons.has(selectedLesson.id) ? "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20" : "bg-accent text-accent-foreground hover:bg-accent/90"}
                    size="sm"
                  >
                    {completedLessons.has(selectedLesson.id) ? (
                      <><CheckCircle className="w-4 h-4 mr-2" />Completed</>
                    ) : (
                      "Mark as Complete"
                    )}
                  </Button>
                </div>
              ) : (
                <div className="bg-background rounded-xl p-8 border border-border text-center">
                  <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Select a lesson to view content</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* DISCUSSIONS TAB */}
        {tab === "discussions" && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* New discussion */}
              <div className="bg-background rounded-xl p-4 border border-border space-y-3">
                <Input placeholder="Discussion title..." value={newDiscussionTitle} onChange={(e) => setNewDiscussionTitle(e.target.value)} maxLength={200} />
                <Textarea placeholder="Share your thoughts with the community..." value={newDiscussionContent} onChange={(e) => setNewDiscussionContent(e.target.value)} maxLength={2000} rows={3} />
                <Button onClick={handleCreateDiscussion} size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" disabled={!newDiscussionTitle.trim() || !newDiscussionContent.trim()}>
                  <Send className="w-4 h-4 mr-2" />Post
                </Button>
              </div>

              {/* Discussion list */}
              {discussions.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDiscussion(d)}
                  className={`w-full text-left p-4 rounded-xl border transition-colors ${selectedDiscussion?.id === d.id ? "bg-accent/5 border-accent/30" : "bg-background border-border hover:border-accent/20"}`}
                >
                  <h4 className="font-heading font-semibold text-sm text-foreground mb-1">{d.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">{d.content}</p>
                  <p className="text-xs text-muted-foreground/60 mt-2">{new Date(d.created_at).toLocaleDateString()}</p>
                </button>
              ))}

              {discussions.length === 0 && (
                <div className="bg-background rounded-xl p-8 border border-border text-center">
                  <MessageSquare className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">No discussions yet. Start the conversation!</p>
                </div>
              )}
            </div>

            {/* Replies */}
            <div>
              {selectedDiscussion ? (
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{selectedDiscussion.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{selectedDiscussion.content}</p>

                  <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                    {replies.map((r) => (
                      <div key={r.id} className="bg-muted rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <User className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{new Date(r.created_at).toLocaleString()}</span>
                        </div>
                        <p className="text-sm text-foreground">{r.content}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Textarea placeholder="Write a reply..." value={newReply} onChange={(e) => setNewReply(e.target.value)} maxLength={1000} rows={2} className="flex-1" />
                    <Button onClick={handleReply} size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 self-end" disabled={!newReply.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="bg-background rounded-xl p-8 border border-border text-center">
                  <MessageSquare className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Select a discussion to view replies</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
