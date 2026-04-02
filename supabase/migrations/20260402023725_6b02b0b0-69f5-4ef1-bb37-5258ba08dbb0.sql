-- Drop the SELECT policy on platform_connections to prevent client-side access to api_credentials
-- Server-side (edge functions with service role key) can still read this table
DROP POLICY IF EXISTS "Users can view their own platform connections" ON public.platform_connections;

-- Create a safe SELECT policy using a view-like approach: 
-- We'll create an RPC function that returns connections WITHOUT api_credentials
CREATE OR REPLACE FUNCTION public.get_my_platform_connections()
RETURNS TABLE (
  id uuid,
  user_id uuid,
  platform text,
  is_connected boolean,
  sync_enabled boolean,
  last_sync_at timestamptz,
  created_at timestamptz,
  updated_at timestamptz
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT id, user_id, platform, is_connected, sync_enabled, last_sync_at, created_at, updated_at
  FROM platform_connections
  WHERE user_id = auth.uid();
$$;