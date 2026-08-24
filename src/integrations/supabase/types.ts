export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      affiliate_clicks: {
        Row: {
          created_at: string
          destination_url: string
          id: string
          merchant: string
          offer_id: string
          referrer: string | null
          user_agent: string | null
        }
        Insert: {
          created_at?: string
          destination_url: string
          id?: string
          merchant: string
          offer_id: string
          referrer?: string | null
          user_agent?: string | null
        }
        Update: {
          created_at?: string
          destination_url?: string
          id?: string
          merchant?: string
          offer_id?: string
          referrer?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      automation_secrets: {
        Row: {
          created_at: string
          name: string
          value: string
        }
        Insert: {
          created_at?: string
          name: string
          value?: string
        }
        Update: {
          created_at?: string
          name?: string
          value?: string
        }
        Relationships: []
      }
      blog_comments: {
        Row: {
          approved: boolean
          author_email: string | null
          author_name: string
          content: string
          created_at: string
          honeypot: string | null
          id: string
          ip_hash: string | null
          post_slug: string
        }
        Insert: {
          approved?: boolean
          author_email?: string | null
          author_name: string
          content: string
          created_at?: string
          honeypot?: string | null
          id?: string
          ip_hash?: string | null
          post_slug: string
        }
        Update: {
          approved?: boolean
          author_email?: string | null
          author_name?: string
          content?: string
          created_at?: string
          honeypot?: string | null
          id?: string
          ip_hash?: string | null
          post_slug?: string
        }
        Relationships: []
      }
      blog_subscribers: {
        Row: {
          email: string
          id: string
          source_post: string | null
          subscribed_at: string
        }
        Insert: {
          email: string
          id?: string
          source_post?: string | null
          subscribed_at?: string
        }
        Update: {
          email?: string
          id?: string
          source_post?: string | null
          subscribed_at?: string
        }
        Relationships: []
      }
      comment_audit_log: {
        Row: {
          action: string
          actor_email: string | null
          actor_id: string
          comment_id: string
          created_at: string
          id: string
          snapshot: Json | null
        }
        Insert: {
          action: string
          actor_email?: string | null
          actor_id: string
          comment_id: string
          created_at?: string
          id?: string
          snapshot?: Json | null
        }
        Update: {
          action?: string
          actor_email?: string | null
          actor_id?: string
          comment_id?: string
          created_at?: string
          id?: string
          snapshot?: Json | null
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          subject: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          subject: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          subject?: string
        }
        Relationships: []
      }
      digital_order_items: {
        Row: {
          created_at: string
          id: string
          license_tier: string | null
          order_id: string
          product_id: string
          product_title: string
          quantity: number
          unit_price_cents: number
        }
        Insert: {
          created_at?: string
          id?: string
          license_tier?: string | null
          order_id: string
          product_id: string
          product_title: string
          quantity?: number
          unit_price_cents?: number
        }
        Update: {
          created_at?: string
          id?: string
          license_tier?: string | null
          order_id?: string
          product_id?: string
          product_title?: string
          quantity?: number
          unit_price_cents?: number
        }
        Relationships: [
          {
            foreignKeyName: "digital_order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "digital_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "digital_order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "digital_products"
            referencedColumns: ["id"]
          },
        ]
      }
      digital_orders: {
        Row: {
          access_token: string
          amount_cents: number
          buyer_email: string | null
          created_at: string
          currency: string
          delivered_file_path: string | null
          delivery_note: string | null
          delivery_status: string
          download_count: number
          download_ttl_hours: number
          email_sent_at: string | null
          id: string
          intake: Json
          max_downloads: number
          status: string
          stripe_payment_intent_id: string | null
          stripe_session_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          access_token?: string
          amount_cents?: number
          buyer_email?: string | null
          created_at?: string
          currency?: string
          delivered_file_path?: string | null
          delivery_note?: string | null
          delivery_status?: string
          download_count?: number
          download_ttl_hours?: number
          email_sent_at?: string | null
          id?: string
          intake?: Json
          max_downloads?: number
          status?: string
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          access_token?: string
          amount_cents?: number
          buyer_email?: string | null
          created_at?: string
          currency?: string
          delivered_file_path?: string | null
          delivery_note?: string | null
          delivery_status?: string
          download_count?: number
          download_ttl_hours?: number
          email_sent_at?: string | null
          id?: string
          intake?: Json
          max_downloads?: number
          status?: string
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      digital_product_files: {
        Row: {
          created_at: string
          id: string
          label: string
          product_id: string
          size_bytes: number | null
          sort_order: number
          storage_path: string
        }
        Insert: {
          created_at?: string
          id?: string
          label: string
          product_id: string
          size_bytes?: number | null
          sort_order?: number
          storage_path: string
        }
        Update: {
          created_at?: string
          id?: string
          label?: string
          product_id?: string
          size_bytes?: number | null
          sort_order?: number
          storage_path?: string
        }
        Relationships: [
          {
            foreignKeyName: "digital_product_files_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "digital_products"
            referencedColumns: ["id"]
          },
        ]
      }
      digital_products: {
        Row: {
          active: boolean
          category: string
          cover_image_url: string | null
          created_at: string
          currency: string
          description: string | null
          download_ttl_hours: number
          id: string
          license_terms: string | null
          license_tier: string | null
          long_description: string | null
          max_downloads: number
          preview_url: string | null
          price_cents: number
          requires_intake: boolean
          slug: string
          sort_order: number
          stripe_price_id: string | null
          stripe_product_id: string | null
          title: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          category: string
          cover_image_url?: string | null
          created_at?: string
          currency?: string
          description?: string | null
          download_ttl_hours?: number
          id?: string
          license_terms?: string | null
          license_tier?: string | null
          long_description?: string | null
          max_downloads?: number
          preview_url?: string | null
          price_cents: number
          requires_intake?: boolean
          slug: string
          sort_order?: number
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          category?: string
          cover_image_url?: string | null
          created_at?: string
          currency?: string
          description?: string | null
          download_ttl_hours?: number
          id?: string
          license_terms?: string | null
          license_tier?: string | null
          long_description?: string | null
          max_downloads?: number
          preview_url?: string | null
          price_cents?: number
          requires_intake?: boolean
          slug?: string
          sort_order?: number
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      domain_health_checks: {
        Row: {
          alert_sent: boolean
          checked_at: string
          domain: string
          error_message: string | null
          expected_ip: string | null
          http_status: number | null
          id: string
          resolved_ips: string[] | null
          status: string
        }
        Insert: {
          alert_sent?: boolean
          checked_at?: string
          domain: string
          error_message?: string | null
          expected_ip?: string | null
          http_status?: number | null
          id?: string
          resolved_ips?: string[] | null
          status: string
        }
        Update: {
          alert_sent?: boolean
          checked_at?: string
          domain?: string
          error_message?: string | null
          expected_ip?: string | null
          http_status?: number | null
          id?: string
          resolved_ips?: string[] | null
          status?: string
        }
        Relationships: []
      }
      platform_connections: {
        Row: {
          api_credentials: Json | null
          created_at: string
          id: string
          is_connected: boolean
          last_sync_at: string | null
          platform: string
          sync_enabled: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          api_credentials?: Json | null
          created_at?: string
          id?: string
          is_connected?: boolean
          last_sync_at?: string | null
          platform: string
          sync_enabled?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          api_credentials?: Json | null
          created_at?: string
          id?: string
          is_connected?: boolean
          last_sync_at?: string | null
          platform?: string
          sync_enabled?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
        }
        Relationships: []
      }
      promo_automation_settings: {
        Row: {
          discount_max: number
          discount_min: number
          enabled: boolean
          extra_platforms: Json
          id: string
          post_facebook: boolean
          post_instagram: boolean
          post_tiktok: boolean
          post_youtube_community: boolean
          post_youtube_short: boolean
          run_hour_pt: number
          shopify_filter_query: string | null
          singleton: boolean
          updated_at: string
        }
        Insert: {
          discount_max?: number
          discount_min?: number
          enabled?: boolean
          extra_platforms?: Json
          id?: string
          post_facebook?: boolean
          post_instagram?: boolean
          post_tiktok?: boolean
          post_youtube_community?: boolean
          post_youtube_short?: boolean
          run_hour_pt?: number
          shopify_filter_query?: string | null
          singleton?: boolean
          updated_at?: string
        }
        Update: {
          discount_max?: number
          discount_min?: number
          enabled?: boolean
          extra_platforms?: Json
          id?: string
          post_facebook?: boolean
          post_instagram?: boolean
          post_tiktok?: boolean
          post_youtube_community?: boolean
          post_youtube_short?: boolean
          run_hour_pt?: number
          shopify_filter_query?: string | null
          singleton?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      promo_platform_posts: {
        Row: {
          error: string | null
          external_post_id: string | null
          id: string
          permalink: string | null
          platform: string
          posted_at: string
          run_id: string
          status: string
        }
        Insert: {
          error?: string | null
          external_post_id?: string | null
          id?: string
          permalink?: string | null
          platform: string
          posted_at?: string
          run_id: string
          status?: string
        }
        Update: {
          error?: string | null
          external_post_id?: string | null
          id?: string
          permalink?: string | null
          platform?: string
          posted_at?: string
          run_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "promo_platform_posts_run_id_fkey"
            columns: ["run_id"]
            isOneToOne: false
            referencedRelation: "promo_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      promo_runs: {
        Row: {
          captions: Json | null
          created_at: string
          discount_code: string | null
          discount_pct: number | null
          error: string | null
          hero_image_url: string | null
          id: string
          product_handle: string | null
          product_id: string | null
          product_price: number | null
          product_title: string | null
          reasoning: string | null
          run_date: string
          status: string
          video_url: string | null
        }
        Insert: {
          captions?: Json | null
          created_at?: string
          discount_code?: string | null
          discount_pct?: number | null
          error?: string | null
          hero_image_url?: string | null
          id?: string
          product_handle?: string | null
          product_id?: string | null
          product_price?: number | null
          product_title?: string | null
          reasoning?: string | null
          run_date?: string
          status?: string
          video_url?: string | null
        }
        Update: {
          captions?: Json | null
          created_at?: string
          discount_code?: string | null
          discount_pct?: number | null
          error?: string | null
          hero_image_url?: string | null
          id?: string
          product_handle?: string | null
          product_id?: string | null
          product_price?: number | null
          product_title?: string | null
          reasoning?: string | null
          run_date?: string
          status?: string
          video_url?: string | null
        }
        Relationships: []
      }
      shopify_products: {
        Row: {
          created_at: string
          description: string | null
          handle: string
          id: string
          images: Json
          options: Json
          price_currency: string | null
          price_min: number | null
          product_created_at: string | null
          seo_description: string | null
          seo_title: string | null
          shopify_id: string
          synced_at: string
          tags: string[]
          title: string
          updated_at: string
          variants: Json
        }
        Insert: {
          created_at?: string
          description?: string | null
          handle: string
          id?: string
          images?: Json
          options?: Json
          price_currency?: string | null
          price_min?: number | null
          product_created_at?: string | null
          seo_description?: string | null
          seo_title?: string | null
          shopify_id: string
          synced_at?: string
          tags?: string[]
          title: string
          updated_at?: string
          variants?: Json
        }
        Update: {
          created_at?: string
          description?: string | null
          handle?: string
          id?: string
          images?: Json
          options?: Json
          price_currency?: string | null
          price_min?: number | null
          product_created_at?: string | null
          seo_description?: string | null
          seo_title?: string | null
          shopify_id?: string
          synced_at?: string
          tags?: string[]
          title?: string
          updated_at?: string
          variants?: Json
        }
        Relationships: []
      }
      shopify_sync_runs: {
        Row: {
          created_at: string
          error: string | null
          finished_at: string | null
          id: string
          products_deleted: number
          products_synced: number
          seo_error: string | null
          seo_pushed: number
          status: string
          trigger_source: string
        }
        Insert: {
          created_at?: string
          error?: string | null
          finished_at?: string | null
          id?: string
          products_deleted?: number
          products_synced?: number
          seo_error?: string | null
          seo_pushed?: number
          status?: string
          trigger_source: string
        }
        Update: {
          created_at?: string
          error?: string | null
          finished_at?: string | null
          id?: string
          products_deleted?: number
          products_synced?: number
          seo_error?: string | null
          seo_pushed?: number
          status?: string
          trigger_source?: string
        }
        Relationships: []
      }
      sync_logs: {
        Row: {
          completed_at: string | null
          created_at: string
          error_message: string | null
          id: string
          items_synced: number | null
          platform: string
          started_at: string
          status: string
          sync_type: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          items_synced?: number | null
          platform: string
          started_at?: string
          status: string
          sync_type: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          items_synced?: number | null
          platform?: string
          started_at?: string
          status?: string
          sync_type?: string
          user_id?: string
        }
        Relationships: []
      }
      unified_orders: {
        Row: {
          created_at: string
          currency: string | null
          customer_email: string | null
          customer_name: string | null
          fulfillment_status: string | null
          id: string
          line_items: Json | null
          order_date: string
          order_number: string | null
          platform: string
          platform_order_id: string
          shipping_address: Json | null
          status: string
          total_amount: number
          tracking_number: string | null
          tracking_url: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          currency?: string | null
          customer_email?: string | null
          customer_name?: string | null
          fulfillment_status?: string | null
          id?: string
          line_items?: Json | null
          order_date: string
          order_number?: string | null
          platform: string
          platform_order_id: string
          shipping_address?: Json | null
          status?: string
          total_amount: number
          tracking_number?: string | null
          tracking_url?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          currency?: string | null
          customer_email?: string | null
          customer_name?: string | null
          fulfillment_status?: string | null
          id?: string
          line_items?: Json | null
          order_date?: string
          order_number?: string | null
          platform?: string
          platform_order_id?: string
          shipping_address?: Json | null
          status?: string
          total_amount?: number
          tracking_number?: string | null
          tracking_url?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      unified_products: {
        Row: {
          created_at: string
          etsy_listing_id: string | null
          id: string
          image_url: string | null
          inventory_quantity: number | null
          last_synced_at: string | null
          price: number | null
          shopify_product_id: string | null
          sku: string | null
          sync_enabled: boolean | null
          tiktok_product_id: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          etsy_listing_id?: string | null
          id?: string
          image_url?: string | null
          inventory_quantity?: number | null
          last_synced_at?: string | null
          price?: number | null
          shopify_product_id?: string | null
          sku?: string | null
          sync_enabled?: boolean | null
          tiktok_product_id?: string | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          etsy_listing_id?: string | null
          id?: string
          image_url?: string | null
          inventory_quantity?: number | null
          last_synced_at?: string | null
          price?: number | null
          shopify_product_id?: string | null
          sku?: string | null
          sync_enabled?: boolean | null
          tiktok_product_id?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      blog_comments_public: {
        Row: {
          author_name: string | null
          content: string | null
          created_at: string | null
          id: string | null
          post_slug: string | null
        }
        Insert: {
          author_name?: string | null
          content?: string | null
          created_at?: string | null
          id?: string | null
          post_slug?: string | null
        }
        Update: {
          author_name?: string | null
          content?: string | null
          created_at?: string | null
          id?: string | null
          post_slug?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      admin_list_blog_comments: {
        Args: never
        Returns: {
          approved: boolean
          author_email: string
          author_name: string
          content: string
          created_at: string
          id: string
          post_slug: string
        }[]
      }
      get_my_platform_connections: {
        Args: never
        Returns: {
          created_at: string
          id: string
          is_connected: boolean
          last_sync_at: string
          platform: string
          sync_enabled: boolean
          updated_at: string
          user_id: string
        }[]
      }
      get_notify_comment_secret: { Args: never; Returns: string }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      log_comment_action: {
        Args: { _action: string; _comment_id: string; _snapshot: Json }
        Returns: undefined
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
