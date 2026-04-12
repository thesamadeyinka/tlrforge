import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import ApplyEvolve from "./pages/ApplyEvolve";
import Resources from "./pages/Resources";
import Dashboard from "./pages/Dashboard";
import AboutPage from "./pages/AboutPage";
import PhilosophyPage from "./pages/PhilosophyPage";
import ProgrammesPage from "./pages/ProgrammesPage";
import ContactPage from "./pages/ContactPage";
import AdminApplications from "./pages/AdminApplications";
import LuminariesHubPage from "./pages/LuminariesHubPage";
import AmplifyFundPage from "./pages/AmplifyFundPage";
import ApproachPage from "./pages/ApproachPage";
import EventPage from "./pages/EventPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/programmes" element={<ProgrammesPage />} />
        <Route path="/luminaries-hub" element={<LuminariesHubPage />} />
        <Route path="/amplify-fund" element={<AmplifyFundPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/apply" element={<ApplyEvolve />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/applications" element={<AdminApplications />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/events/:slug" element={<EventPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
