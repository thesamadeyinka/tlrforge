import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { ArrowLeft, Eye, X, Mail, Phone, MapPin, Briefcase, Calendar, Users, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { format } from "date-fns";

interface Application {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  date_of_birth: string | null;
  city_state: string | null;
  marital_status: string | null;
  kids_count: string | null;
  occupation: string | null;
  brief_bio: string | null;
  motivation: string;
  why_mentorship_dr: string | null;
  mentorship_areas: string | null;
  expectations: string | null;
  status: string;
  created_at: string;
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  reviewed: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  accepted: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  rejected: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

const AdminApplications = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }
    checkAdminAndLoad();
  }, [user]);

  const checkAdminAndLoad = async () => {
    if (!user) return;

    // Check admin role via RPC
    const { data: roleData } = await supabase.rpc("has_role", {
      _user_id: user.id,
      _role: "admin",
    } as any);

    if (!roleData) {
      toast({ title: "Access Denied", description: "You do not have admin access.", variant: "destructive" });
      navigate("/");
      return;
    }

    setIsAdmin(true);
    await loadApplications();
  };

  const loadApplications = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("evolve_applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({ title: "Error", description: "Failed to load applications.", variant: "destructive" });
    } else {
      setApplications((data as any[]) || []);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from("evolve_applications")
      .update({ status: newStatus } as any)
      .eq("id", id);

    if (error) {
      toast({ title: "Error", description: "Failed to update status.", variant: "destructive" });
    } else {
      toast({ title: "Updated", description: `Application status set to ${newStatus}.` });
      setApplications((prev) =>
        prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
      );
      if (selectedApp?.id === id) {
        setSelectedApp((prev) => prev ? { ...prev, status: newStatus } : null);
      }
    }
  };

  const filtered = filterStatus === "all" ? applications : applications.filter((a) => a.status === filterStatus);

  if (!isAdmin) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-background">
          <Header />
          <div className="pt-24 flex items-center justify-center">
            <p className="text-muted-foreground">Checking access...</p>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="mb-2">
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back
                </Button>
                <h1 className="font-heading text-3xl font-bold text-foreground">EVOLVE Applications</h1>
                <p className="text-muted-foreground mt-1">{applications.length} total applications</p>
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="reviewed">Reviewed</SelectItem>
                  <SelectItem value="accepted">Accepted</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {loading ? (
              <div className="text-center py-12 text-muted-foreground">Loading applications...</div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">No applications found.</div>
            ) : (
              <div className="space-y-3">
                {filtered.map((app) => (
                  <div
                    key={app.id}
                    className="bg-card border border-border rounded-xl p-5 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedApp(app)}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-heading font-semibold text-foreground truncate">{app.full_name}</h3>
                        <Badge className={statusColors[app.status] || "bg-muted text-muted-foreground"}>
                          {app.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {app.email}</span>
                        {app.occupation && <span className="flex items-center gap-1 hidden sm:flex"><Briefcase className="w-3 h-3" /> {app.occupation}</span>}
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {format(new Date(app.created_at), "MMM d, yyyy")}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0 ml-2">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <Footer />

        {/* Application Detail Dialog */}
        <Dialog open={!!selectedApp} onOpenChange={() => setSelectedApp(null)}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-heading text-xl">{selectedApp?.full_name}</DialogTitle>
            </DialogHeader>
            {selectedApp && (
              <div className="space-y-6">
                {/* Status control */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">Status:</span>
                  <Select value={selectedApp.status} onValueChange={(v) => updateStatus(selectedApp.id, v)}>
                    <SelectTrigger className="w-36">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="reviewed">Reviewed</SelectItem>
                      <SelectItem value="accepted">Accepted</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Personal Info */}
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-3 border-b border-border pb-2">Personal Information</h4>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-muted-foreground" /> {selectedApp.email}</div>
                    {selectedApp.phone && <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-muted-foreground" /> {selectedApp.phone}</div>}
                    {selectedApp.date_of_birth && <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-muted-foreground" /> {format(new Date(selectedApp.date_of_birth), "MMMM d, yyyy")}</div>}
                    {selectedApp.city_state && <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-muted-foreground" /> {selectedApp.city_state}</div>}
                    {selectedApp.marital_status && <div className="flex items-center gap-2"><Users className="w-4 h-4 text-muted-foreground" /> {selectedApp.marital_status}{selectedApp.kids_count ? `, ${selectedApp.kids_count} kids` : ""}</div>}
                  </div>
                </div>

                {/* Professional */}
                {selectedApp.occupation && (
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-3 border-b border-border pb-2">Professional Background</h4>
                    <div className="text-sm space-y-2">
                      <div className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-muted-foreground" /> {selectedApp.occupation}</div>
                      {selectedApp.brief_bio && <p className="text-muted-foreground mt-2 leading-relaxed">{selectedApp.brief_bio}</p>}
                    </div>
                  </div>
                )}

                {/* Mentorship */}
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-3 border-b border-border pb-2">Mentorship Responses</h4>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium text-foreground mb-1">Why do you want this mentorship?</p>
                      <p className="text-muted-foreground leading-relaxed">{selectedApp.motivation}</p>
                    </div>
                    {selectedApp.why_mentorship_dr && (
                      <div>
                        <p className="font-medium text-foreground mb-1">Why Dr. Samuel Omenka?</p>
                        <p className="text-muted-foreground leading-relaxed">{selectedApp.why_mentorship_dr}</p>
                      </div>
                    )}
                    {selectedApp.mentorship_areas && (
                      <div>
                        <p className="font-medium text-foreground mb-1">Areas for mentorship</p>
                        <p className="text-muted-foreground leading-relaxed">{selectedApp.mentorship_areas}</p>
                      </div>
                    )}
                    {selectedApp.expectations && (
                      <div>
                        <p className="font-medium text-foreground mb-1">Expectations</p>
                        <p className="text-muted-foreground leading-relaxed">{selectedApp.expectations}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-xs text-muted-foreground border-t border-border pt-3">
                  Submitted on {format(new Date(selectedApp.created_at), "MMMM d, yyyy 'at' h:mm a")}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </PageTransition>
  );
};

export default AdminApplications;
