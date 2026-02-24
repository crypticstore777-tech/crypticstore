import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@4.0.0";

const NOTIFICATION_EMAIL = "DJ@mysteriousenterprise.com";

const SUBJECT_LABELS: Record<string, string> = {
  general: "General Inquiry",
  order: "Order Support",
  dj: "DJ Services Booking",
  spiritual: "Spiritual Consultation",
  collaboration: "Collaboration / Partnership",
};
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const VALID_SUBJECTS = ["general", "order", "dj", "spiritual", "collaboration"];

function validateInput(body: unknown): { valid: true; data: { name: string; email: string; subject: string; message: string } } | { valid: false; error: string } {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Invalid request body" };
  }

  const { name, email, subject, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length === 0 || name.trim().length > 100) {
    return { valid: false, error: "Name is required and must be under 100 characters" };
  }

  if (typeof email !== "string" || email.trim().length > 255) {
    return { valid: false, error: "Valid email is required" };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { valid: false, error: "Invalid email format" };
  }

  if (typeof subject !== "string" || !VALID_SUBJECTS.includes(subject)) {
    return { valid: false, error: "Invalid subject selection" };
  }

  if (typeof message !== "string" || message.trim().length < 10 || message.trim().length > 5000) {
    return { valid: false, error: "Message must be between 10 and 5000 characters" };
  }

  return {
    valid: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      subject,
      message: message.trim(),
    },
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const result = validateInput(body);

    if (!result.valid) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error } = await supabase.from("contact_messages").insert({
      name: result.data.name,
      email: result.data.email,
      subject: result.data.subject,
      message: result.data.message,
    });

    if (error) {
      console.error("DB insert error:", error);
      return new Response(JSON.stringify({ error: "Failed to save message" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Send email notification via Resend
    try {
      const resend = new Resend(Deno.env.get("RESEND_API_KEY")!);
      const { name, email, subject, message } = result.data;

      await resend.emails.send({
        from: `Cryptic Store <onboarding@resend.dev>`,
        to: [NOTIFICATION_EMAIL],
        replyTo: email,
        subject: `New Contact: ${SUBJECT_LABELS[subject] || subject} from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 32px;">
            <h1 style="color: #1a1a1a; font-size: 24px; margin-bottom: 24px;">New Contact Form Submission</h1>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; width: 100px;">Name:</td><td style="padding: 8px 0; color: #1a1a1a; font-weight: bold;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Subject:</td><td style="padding: 8px 0; color: #1a1a1a;">${SUBJECT_LABELS[subject] || subject}</td></tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
              <p style="color: #666; margin: 0 0 8px 0; font-size: 13px;">Message:</p>
              <p style="color: #1a1a1a; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #999; font-size: 12px; margin-top: 24px;">Sent from Cryptic Store contact form</p>
          </div>
        `,
      });
    } catch (emailErr) {
      // Log but don't fail the request — the message is already saved
      console.error("Email notification error:", emailErr);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
