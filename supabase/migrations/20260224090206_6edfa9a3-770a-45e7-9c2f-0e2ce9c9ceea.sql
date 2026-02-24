
-- Profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', ''));
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- EVOLVE Applications
CREATE TABLE public.evolve_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  job_title TEXT,
  company TEXT,
  years_experience TEXT,
  motivation TEXT NOT NULL,
  referral_source TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.evolve_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit application" ON public.evolve_applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view own applications" ON public.evolve_applications FOR SELECT USING (auth.uid() = user_id);

-- Newsletter Signups
CREATE TABLE public.newsletter_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true
);
ALTER TABLE public.newsletter_signups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can subscribe" ON public.newsletter_signups FOR INSERT WITH CHECK (true);

-- Testimonials
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  client_role TEXT,
  client_photo_url TEXT,
  quote TEXT NOT NULL,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view testimonials" ON public.testimonials FOR SELECT USING (true);

-- Resources
CREATE TABLE public.resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL DEFAULT 'guide',
  file_url TEXT,
  thumbnail_url TEXT,
  is_premium BOOLEAN NOT NULL DEFAULT false,
  download_count INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view non-premium resources" ON public.resources FOR SELECT USING (is_premium = false OR auth.uid() IS NOT NULL);

-- LMS: Modules
CREATE TABLE public.lms_modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  module_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.lms_modules ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated can view modules" ON public.lms_modules FOR SELECT TO authenticated USING (true);

-- LMS: Lessons
CREATE TABLE public.lms_lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id UUID NOT NULL REFERENCES public.lms_modules(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT,
  video_url TEXT,
  lesson_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.lms_lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated can view lessons" ON public.lms_lessons FOR SELECT TO authenticated USING (true);

-- LMS: Enrollments
CREATE TABLE public.lms_enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'active'
);
ALTER TABLE public.lms_enrollments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own enrollment" ON public.lms_enrollments FOR SELECT USING (auth.uid() = user_id);

-- LMS: Progress
CREATE TABLE public.lms_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES public.lms_lessons(id) ON DELETE CASCADE,
  completed BOOLEAN NOT NULL DEFAULT false,
  completed_at TIMESTAMPTZ,
  UNIQUE(user_id, lesson_id)
);
ALTER TABLE public.lms_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own progress" ON public.lms_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own progress" ON public.lms_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own progress" ON public.lms_progress FOR UPDATE USING (auth.uid() = user_id);

-- LMS: Assignments
CREATE TABLE public.lms_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id UUID NOT NULL REFERENCES public.lms_modules(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  due_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.lms_assignments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated can view assignments" ON public.lms_assignments FOR SELECT TO authenticated USING (true);

CREATE TABLE public.lms_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id UUID NOT NULL REFERENCES public.lms_assignments(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT,
  file_url TEXT,
  status TEXT NOT NULL DEFAULT 'submitted',
  feedback TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.lms_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own submissions" ON public.lms_submissions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create submissions" ON public.lms_submissions FOR INSERT WITH CHECK (auth.uid() = user_id);

-- LMS: Discussions
CREATE TABLE public.lms_discussions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  module_id UUID REFERENCES public.lms_modules(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.lms_discussions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated can view discussions" ON public.lms_discussions FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated can create discussions" ON public.lms_discussions FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.lms_discussion_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  discussion_id UUID NOT NULL REFERENCES public.lms_discussions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.lms_discussion_replies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated can view replies" ON public.lms_discussion_replies FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated can create replies" ON public.lms_discussion_replies FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

ALTER PUBLICATION supabase_realtime ADD TABLE public.lms_discussions;
ALTER PUBLICATION supabase_realtime ADD TABLE public.lms_discussion_replies;
