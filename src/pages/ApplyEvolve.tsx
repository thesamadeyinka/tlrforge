import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { ArrowRight, CheckCircle } from "lucide-react";
import evolveLogo from "@/assets/evolve-logo.png";

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
    date_of_birth: "",
    city_state: "",
    marital_status: "",
    kids_count: "",
    occupation: "",
    brief_bio: "",
    motivation: "",
    why_mentorship_dr: "",
    mentorship_areas: "",
    expectations: "",
    info_confirmed: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.info_confirmed) {
      toast({ title: "Confirmation Required", description: "Please confirm that your information is true and accurate.", variant: "destructive" });
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("evolve_applications" as any).insert({
      full_name: form.full_name,
      email: form.email,
      phone: form.phone || null,
      date_of_birth: form.date_of_birth || null,
      city_state: form.city_state || null,
      marital_status: form.marital_status || null,
      kids_count: form.kids_count || null,
      occupation: form.occupation || null,
      brief_bio: form.brief_bio || null,
      motivation: form.motivation,
      why_mentorship_dr: form.why_mentorship_dr || null,
      mentorship_areas: form.mentorship_areas || null,
      expectations: form.expectations || null,
      info_confirmed: form.info_confirmed,
      user_id: user?.id || null,
    } as any);

    if (error) {
      toast({ title: "Error", description: "Failed to submit application. Please try again.", variant: "destructive" });
    } else {
      setSubmitted(true);
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <PageTransition>
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
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <div className="pt-24 pb-16 bg-background">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-10">
              <img src={evolveLogo} alt="EVOLVE" className="h-10 mx-auto mb-4" />
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Apply to EVOLVE</h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Through this application, we seek to understand your journey, aspirations, and areas where mentorship will be most valuable to you. Please complete the form carefully and thoughtfully—your responses will help us serve you better.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-xl p-8 border border-border shadow-sm">
              {/* Personal Information */}
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">Personal Information</h3>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="full_name">Full Name *</Label>
                      <Input id="full_name" value={form.full_name} onChange={(e) => handleChange("full_name", e.target.value)} required maxLength={100} />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} required maxLength={255} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} maxLength={20} />
                    </div>
                    <div>
                      <Label htmlFor="date_of_birth">Date of Birth</Label>
                      <Input id="date_of_birth" type="date" value={form.date_of_birth} onChange={(e) => handleChange("date_of_birth", e.target.value)} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="city_state">Residential City & State</Label>
                    <Input id="city_state" value={form.city_state} onChange={(e) => handleChange("city_state", e.target.value)} maxLength={150} placeholder="e.g. Lagos, Lagos State" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="marital_status">Marital Status</Label>
                      <Select onValueChange={(v) => handleChange("marital_status", v)}>
                        <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="married">Married</SelectItem>
                          <SelectItem value="divorced">Divorced</SelectItem>
                          <SelectItem value="widowed">Widowed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {form.marital_status === "married" && (
                      <div>
                        <Label htmlFor="kids_count">If married, how many kids do you have?</Label>
                        <Input id="kids_count" value={form.kids_count} onChange={(e) => handleChange("kids_count", e.target.value)} maxLength={10} placeholder="e.g. 2" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">Professional Background</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="occupation">Current Occupation / Business / Field of Work *</Label>
                    <Input id="occupation" value={form.occupation} onChange={(e) => handleChange("occupation", e.target.value)} required maxLength={150} />
                  </div>
                  <div>
                    <Label htmlFor="brief_bio">Brief Bio (100–200 words)</Label>
                    <Textarea id="brief_bio" value={form.brief_bio} onChange={(e) => handleChange("brief_bio", e.target.value)} maxLength={1500} rows={5} placeholder="Tell us about yourself, your background, and what drives you..." />
                    <p className="text-xs text-muted-foreground mt-1">{form.brief_bio.split(/\s+/).filter(Boolean).length} words</p>
                  </div>
                </div>
              </div>

              {/* Mentorship Questions */}
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">Mentorship</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="motivation">Why do you want this mentorship? *</Label>
                    <Textarea id="motivation" value={form.motivation} onChange={(e) => handleChange("motivation", e.target.value)} required maxLength={1500} rows={4} placeholder="Share your reasons for seeking mentorship..." />
                  </div>
                  <div>
                    <Label htmlFor="why_mentorship_dr">Why do you want this mentorship from Dr. Samuel Omenka?</Label>
                    <Textarea id="why_mentorship_dr" value={form.why_mentorship_dr} onChange={(e) => handleChange("why_mentorship_dr", e.target.value)} maxLength={1500} rows={4} placeholder="What specifically draws you to Dr. Omenka's mentorship?" />
                  </div>
                  <div>
                    <Label htmlFor="mentorship_areas">What specific areas would you like to be mentored on?</Label>
                    <Textarea id="mentorship_areas" value={form.mentorship_areas} onChange={(e) => handleChange("mentorship_areas", e.target.value)} maxLength={1500} rows={4} placeholder="e.g. Leadership, Career growth, Business strategy, Personal development..." />
                  </div>
                  <div>
                    <Label htmlFor="expectations">What are your expectations by the end of the mentorship?</Label>
                    <Textarea id="expectations" value={form.expectations} onChange={(e) => handleChange("expectations", e.target.value)} maxLength={1500} rows={4} placeholder="What outcomes do you hope to achieve?" />
                  </div>
                </div>
              </div>

              {/* Confirmation */}
              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border border-border">
                <Checkbox
                  id="info_confirmed"
                  checked={form.info_confirmed}
                  onCheckedChange={(checked) => handleChange("info_confirmed", checked === true)}
                  className="mt-0.5"
                />
                <Label htmlFor="info_confirmed" className="text-sm leading-relaxed cursor-pointer">
                  By submitting this form, you confirm that the information you have provided is true and accurate to the best of your knowledge.
                </Label>
              </div>

              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base py-6" disabled={loading || !form.info_confirmed}>
                {loading ? "Submitting..." : "Submit Application"} <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ApplyEvolve;
