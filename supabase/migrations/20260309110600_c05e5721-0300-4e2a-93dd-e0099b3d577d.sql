
ALTER TABLE public.evolve_applications
  ADD COLUMN IF NOT EXISTS date_of_birth date,
  ADD COLUMN IF NOT EXISTS city_state text,
  ADD COLUMN IF NOT EXISTS marital_status text,
  ADD COLUMN IF NOT EXISTS kids_count text,
  ADD COLUMN IF NOT EXISTS occupation text,
  ADD COLUMN IF NOT EXISTS brief_bio text,
  ADD COLUMN IF NOT EXISTS why_mentorship_dr text,
  ADD COLUMN IF NOT EXISTS mentorship_areas text,
  ADD COLUMN IF NOT EXISTS expectations text,
  ADD COLUMN IF NOT EXISTS info_confirmed boolean DEFAULT false;

-- Remove old columns that are no longer needed
ALTER TABLE public.evolve_applications
  DROP COLUMN IF EXISTS job_title,
  DROP COLUMN IF EXISTS company,
  DROP COLUMN IF EXISTS years_experience,
  DROP COLUMN IF EXISTS referral_source;
