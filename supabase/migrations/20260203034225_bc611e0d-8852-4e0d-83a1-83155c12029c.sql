-- Add missing RLS policies for sync_logs table
CREATE POLICY "Users can update their own sync logs"
ON public.sync_logs FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own sync logs"
ON public.sync_logs FOR DELETE
USING (auth.uid() = user_id);

-- Add missing DELETE policy for unified_orders table
CREATE POLICY "Users can delete their own orders"
ON public.unified_orders FOR DELETE
USING (auth.uid() = user_id);