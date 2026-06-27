
-- 1. Restrict SELECT on lms_discussions and lms_discussion_replies to users
-- who have an active enrollment (or who authored the row), preventing
-- broadcasting all content to every authenticated user via Realtime.
DROP POLICY IF EXISTS "Authenticated can view discussions" ON public.lms_discussions;
CREATE POLICY "Enrolled users can view discussions"
ON public.lms_discussions
FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id
  OR EXISTS (
    SELECT 1 FROM public.lms_enrollments e
    WHERE e.user_id = auth.uid() AND e.status = 'active'
  )
  OR has_role(auth.uid(), 'admin'::app_role)
);

DROP POLICY IF EXISTS "Authenticated can view replies" ON public.lms_discussion_replies;
CREATE POLICY "Enrolled users can view replies"
ON public.lms_discussion_replies
FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id
  OR EXISTS (
    SELECT 1 FROM public.lms_enrollments e
    WHERE e.user_id = auth.uid() AND e.status = 'active'
  )
  OR has_role(auth.uid(), 'admin'::app_role)
);

-- 2. Allow users to self-enroll into lms_enrollments (INSERT for own user_id).
CREATE POLICY "Users can self-enroll"
ON public.lms_enrollments
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- 3. Harden user_roles INSERT to explicitly require admin role and prevent
-- any path to self-assigning a role. Replace the permissive policy with a
-- stricter version that also blocks self-assignment of the admin role.
DROP POLICY IF EXISTS "Admins can insert roles" ON public.user_roles;
CREATE POLICY "Admins can insert roles for others"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (
  has_role(auth.uid(), 'admin'::app_role)
  AND user_id <> auth.uid()
);
