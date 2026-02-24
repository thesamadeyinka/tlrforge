import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";

const ApplyEvolve = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    job_title: "",
    company: "",
    years_experience: "",
    motivation: "",
    referral_source: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("evolve_applications").insert({
      ...form,
      user_id: user?.id || null,
    });

    if (error) {
      toast({ title: "Error", description: "Failed to submit application. Please try again.", variant: "destructive" });
    } else {
      setSubmitted(true);
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-16 min-h-screen flex items-center justify-center bg-background">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Application Received!</h2>
            <p className="text-muted-foreground mb-8">Thank you for applying to EVOLVE. Our team will review your application and get back to you shortly.</p>
            <Button onClick={() => navigate("/")} className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading">
              Return Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <div className="inline-block bg-accent/10 rounded-full px-4 py-1 text-sm font-semibold text-accent mb-4 border border-accent/20">
              EVOLVE Programme
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Apply to EVOLVE</h1>
            <p className="text-muted-foreground">Begin your structured journey of intentional transformation.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-xl p-8 border border-border shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="full_name">Full Name *</Label>
                <Input id="full_name" value={form.full_name} onChange={(e) => handleChange("full_name", e.target.value)} required maxLength={100} />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} required maxLength={255} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} maxLength={20} />
              </div>
              <div>
                <Label htmlFor="job_title">Current Role / Title</Label>
                <Input id="job_title" value={form.job_title} onChange={(e) => handleChange("job_title", e.target.value)} maxLength={100} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company">Company / Organisation</Label>
                <Input id="company" value={form.company} onChange={(e) => handleChange("company", e.target.value)} maxLength={100} />
              </div>
              <div>
                <Label htmlFor="years_experience">Years of Experience</Label>
                <Select onValueChange={(v) => handleChange("years_experience", v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">0–2 years</SelectItem>
                    <SelectItem value="3-5">3–5 years</SelectItem>
                    <SelectItem value="6-10">6–10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="motivation">Why do you want to join EVOLVE? *</Label>
              <Textarea id="motivation" value={form.motivation} onChange={(e) => handleChange("motivation", e.target.value)} required maxLength={1000} rows={5} placeholder="Tell us about your growth goals and what you hope to achieve..." />
              <p className="text-xs text-muted-foreground mt-1">{form.motivation.length}/1000</p>
            </div>

            <div>
              <Label htmlFor="referral_source">How did you hear about us?</Label>
              <Select onValueChange={(v) => handleChange("referral_source", v)}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="social_media">Social Media</SelectItem>
                  <SelectItem value="friend">Friend or Colleague</SelectItem>
                  <SelectItem value="search">Search Engine</SelectItem>
                  <SelectItem value="event">Event or Conference</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base py-6" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"} <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyEvolve;
