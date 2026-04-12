export interface SearchItem {
  title: string;
  href: string;
  description: string;
  keywords: string[];
  section?: string;
}

export const searchIndex: SearchItem[] = [
  // Main pages
  { title: "Home", href: "/", description: "The Luminary Rise — your home for transformational growth", keywords: ["home", "landing", "main", "luminary", "rise", "welcome"] },
  
  // About
  { title: "Our Story", href: "/about", description: "Learn about The Luminary Rise's founding, vision, and mission", keywords: ["about", "story", "history", "vision", "mission", "founding", "who we are"] },
  { title: "Our Philosophy", href: "/philosophy", description: "Explore TLR's guiding philosophy of transformational growth", keywords: ["philosophy", "values", "beliefs", "principles", "intentionality", "integrity", "excellence"] },
  { title: "Our Approach", href: "/approach", description: "Discover TLR's methodology — the AKA-RB framework", keywords: ["approach", "methodology", "framework", "aka-rb", "awareness", "knowledge", "action", "strategy"] },
  { title: "Our Team", href: "/about", description: "Meet the team behind The Luminary Rise", keywords: ["team", "leadership", "people", "founders", "staff", "members"], section: "team" },

  // Programmes
  { title: "EVOLVE Programme", href: "/programmes", description: "High-impact mentorship and learning platform built on the AKA-RB framework", keywords: ["evolve", "programme", "program", "mentorship", "learning", "development", "leadership", "growth", "modules", "curriculum"] },
  { title: "The Luminaries Network", href: "/luminaries-hub", description: "Invitation-only community of high-capacity leaders for collaboration and accountability", keywords: ["luminaries", "network", "hub", "community", "collaboration", "peer", "leaders", "exclusive", "invitation"] },
  { title: "Amplify Impact Fund", href: "/amplify-fund", description: "Catalytic capital arm — grants, venture support, and strategic loans", keywords: ["amplify", "fund", "capital", "grants", "venture", "loans", "funding", "finance", "investment", "impact"] },
  { title: "Apply to EVOLVE", href: "/apply", description: "Submit your application for the EVOLVE programme", keywords: ["apply", "application", "register", "enroll", "join", "sign up", "evolve"] },

  // Events
  { title: "TLR Career Development", href: "/events/career-development", description: "Career growth, job strategy, and professional advancement workshops", keywords: ["career", "development", "job", "professional", "advancement", "workshop", "employment"] },
  { title: "TLR Business Mastery", href: "/events/business-mastery", description: "Business strategy, entrepreneurship, and mastery workshops", keywords: ["business", "mastery", "strategy", "entrepreneurship", "startup", "enterprise", "management"] },
  { title: "TLR Finance Academy", href: "/events/finance-academy", description: "Financial literacy, investment strategies, and wealth building", keywords: ["finance", "academy", "financial", "literacy", "investment", "money", "budgeting", "savings"] },
  { title: "TLR Wealth Mastery", href: "/events/wealth-mastery", description: "Wealth creation, management, and legacy building", keywords: ["wealth", "mastery", "creation", "management", "legacy", "assets", "net worth"] },
  { title: "TLR Relationship Mastery", href: "/events/relationship-mastery", description: "Building meaningful relationships, communication, and emotional intelligence", keywords: ["relationship", "mastery", "communication", "emotional intelligence", "networking", "connection"] },
  { title: "TLR Leadership Essentials", href: "/events/leadership-essentials", description: "Core leadership skills, influence, and team dynamics", keywords: ["leadership", "essentials", "influence", "team", "management", "skills", "executive"] },

  // Other pages
  { title: "Resources", href: "/resources", description: "Access learning resources, guides, and downloadable materials", keywords: ["resources", "guides", "materials", "downloads", "learning", "tools", "documents", "templates"] },
  { title: "Contact Us", href: "/contact", description: "Get in touch with The Luminary Rise team", keywords: ["contact", "reach", "email", "phone", "message", "support", "help", "enquiry", "inquiry"] },
  { title: "Sign In", href: "/auth", description: "Sign in to your Luminary Rise account", keywords: ["sign in", "login", "account", "auth", "password", "register"] },
  { title: "Dashboard", href: "/dashboard", description: "Access your personal dashboard, progress, and enrolled programmes", keywords: ["dashboard", "progress", "enrolled", "my account", "profile", "learning"] },

  // Topic-based entries
  { title: "Transformational Growth", href: "/about", description: "Learn about TLR's approach to transformational growth and personal development", keywords: ["transformational", "growth", "transformation", "change", "personal development", "self improvement"] },
  { title: "Mentorship & Coaching", href: "/programmes", description: "Structured mentorship, coaching, and guided development programmes", keywords: ["mentorship", "coaching", "mentor", "coach", "guidance", "accountability"] },
  { title: "Newsletter", href: "/", description: "Subscribe to The Luminary Rise newsletter for updates and insights", keywords: ["newsletter", "subscribe", "email updates", "news", "updates", "blog"], section: "footer" },
];

export function searchAll(query: string): SearchItem[] {
  if (!query.trim()) return searchIndex;
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/);
  
  return searchIndex
    .map((item) => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const descLower = item.description.toLowerCase();
      const kwJoined = item.keywords.join(" ");

      // Exact title match — highest priority
      if (titleLower.includes(q)) score += 10;
      // Exact description match
      if (descLower.includes(q)) score += 5;
      // Keyword matches
      for (const word of words) {
        if (titleLower.includes(word)) score += 3;
        if (descLower.includes(word)) score += 2;
        if (kwJoined.includes(word)) score += 2;
      }

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
}
