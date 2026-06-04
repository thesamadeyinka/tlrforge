
-- 1. Fix evolve_applications INSERT policy to prevent user_id spoofing
DROP POLICY IF EXISTS "Anyone can submit application" ON public.evolve_applications;
CREATE POLICY "Anyone can submit application"
ON public.evolve_applications
FOR INSERT
TO public
WITH CHECK (user_id IS NULL OR auth.uid() = user_id);

-- 2. Newsletter signups: explicit admin-only SELECT, and allow admins to manage
CREATE POLICY "Admins can view newsletter signups"
ON public.newsletter_signups
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update newsletter signups"
ON public.newsletter_signups
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete newsletter signups"
ON public.newsletter_signups
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- 3. user_roles: add restrictive policy so only admins can insert (defense in depth)
CREATE POLICY "Block non-admin role inserts"
ON public.user_roles
AS RESTRICTIVE
FOR INSERT
TO authenticated, anon
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- 4. Revoke EXECUTE on trigger-only SECURITY DEFINER functions from public roles
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
