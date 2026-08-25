-- ============================================================
-- COMMENT / SUBSCRIBER SPAM GUARDS
-- Audit date: 2026-08-25 (verified live against the anon key)
--
-- Audit result: RLS is already correct on digital_orders,
-- digital_order_items, blog_comments, contact_messages,
-- profiles, platform_connections, unified_orders, sync_logs,
-- user_roles, blog_subscribers and affiliate_clicks — anonymous
-- callers can read NONE of them. digital_products is publicly
-- readable by design (it's the catalog).
--
-- The one real remaining hole: anonymous callers can INSERT
-- unlimited rows into blog_comments and blog_subscribers.
-- Nothing stops a script from writing 100k rows. This migration
-- adds database-level guards so the limit does not depend on
-- front-end code.
-- ============================================================

-- ────────────────────────────────────────────────────────────
-- 1. Clean up the rows created by the security audit
-- ────────────────────────────────────────────────────────────
DELETE FROM public.blog_comments WHERE post_slug = 'viktor-security-test';
DELETE FROM public.blog_subscribers WHERE email = 'viktor-test@viktor.com';

-- ────────────────────────────────────────────────────────────
-- 2. Sanity limits + honeypot enforcement on comments
-- ────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.guard_blog_comment()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  recent_count integer;
BEGIN
  -- Honeypot filled in = bot. Silently drop the row.
  IF NEW.honeypot IS NOT NULL AND length(btrim(NEW.honeypot)) > 0 THEN
    RETURN NULL;
  END IF;

  -- Length sanity
  IF length(btrim(coalesce(NEW.content, ''))) < 2 THEN
    RAISE EXCEPTION 'Comment is empty.';
  END IF;
  IF length(NEW.content) > 5000 THEN
    RAISE EXCEPTION 'Comment is too long (5000 character limit).';
  END IF;
  IF length(coalesce(NEW.author_name, '')) > 80 THEN
    RAISE EXCEPTION 'Name is too long.';
  END IF;

  -- Rate limit: max 5 comments per IP hash per hour
  IF NEW.ip_hash IS NOT NULL THEN
    SELECT count(*) INTO recent_count
    FROM public.blog_comments
    WHERE ip_hash = NEW.ip_hash
      AND created_at > now() - interval '1 hour';

    IF recent_count >= 5 THEN
      RAISE EXCEPTION 'Too many comments from this address. Please try again later.';
    END IF;
  END IF;

  -- Anonymous submissions are never auto-approved
  NEW.approved := false;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS guard_blog_comment_trigger ON public.blog_comments;
CREATE TRIGGER guard_blog_comment_trigger
  BEFORE INSERT ON public.blog_comments
  FOR EACH ROW EXECUTE FUNCTION public.guard_blog_comment();

REVOKE ALL ON FUNCTION public.guard_blog_comment() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.guard_blog_comment() FROM anon;
REVOKE ALL ON FUNCTION public.guard_blog_comment() FROM authenticated;

-- ────────────────────────────────────────────────────────────
-- 3. Newsletter: no duplicate signups, basic email validation
-- ────────────────────────────────────────────────────────────
-- Drop dupes first so the unique index can be created
DELETE FROM public.blog_subscribers a
USING public.blog_subscribers b
WHERE a.ctid < b.ctid AND lower(a.email) = lower(b.email);

CREATE UNIQUE INDEX IF NOT EXISTS blog_subscribers_email_unique
  ON public.blog_subscribers (lower(email));

CREATE OR REPLACE FUNCTION public.guard_blog_subscriber()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  IF NEW.email IS NULL OR NEW.email !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' THEN
    RAISE EXCEPTION 'Invalid email address.';
  END IF;
  NEW.email := lower(btrim(NEW.email));
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS guard_blog_subscriber_trigger ON public.blog_subscribers;
CREATE TRIGGER guard_blog_subscriber_trigger
  BEFORE INSERT ON public.blog_subscribers
  FOR EACH ROW EXECUTE FUNCTION public.guard_blog_subscriber();

REVOKE ALL ON FUNCTION public.guard_blog_subscriber() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.guard_blog_subscriber() FROM anon;
REVOKE ALL ON FUNCTION public.guard_blog_subscriber() FROM authenticated;

-- ────────────────────────────────────────────────────────────
-- 4. Belt and braces: anon must never UPDATE/DELETE these
-- ────────────────────────────────────────────────────────────
REVOKE UPDATE, DELETE ON public.blog_comments FROM anon;
REVOKE UPDATE, DELETE ON public.blog_subscribers FROM anon;
