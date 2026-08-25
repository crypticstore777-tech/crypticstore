import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "cryptic-cookie-consent";

export type CookieConsentValue = "accepted" | "declined";

interface StoredConsent {
  value: CookieConsentValue;
  date: string;
}

/** Read the visitor's stored choice, or null if they haven't chosen yet. */
export const getCookieConsent = (): CookieConsentValue | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    return parsed.value === "accepted" || parsed.value === "declined" ? parsed.value : null;
  } catch {
    return null;
  }
};

/** Clear the stored choice so the banner shows again (used by the Privacy page link). */
export const resetCookieConsent = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event("cryptic-cookie-consent-reset"));
  } catch {
    /* storage unavailable */
  }
};

const applyConsent = (value: CookieConsentValue) => {
  // Google Consent Mode v2 — safe no-op if no tag is installed yet.
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  const granted = value === "accepted" ? "granted" : "denied";
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", {
      ad_storage: granted,
      ad_user_data: granted,
      ad_personalization: granted,
      analytics_storage: granted,
    });
  }
  window.dispatchEvent(new CustomEvent("cryptic-cookie-consent", { detail: value }));
};

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getCookieConsent();
    if (stored) {
      applyConsent(stored);
      return;
    }
    // Small delay so the banner doesn't fight the page's first paint.
    const timer = window.setTimeout(() => setVisible(true), 800);
    const onReset = () => setVisible(true);
    window.addEventListener("cryptic-cookie-consent-reset", onReset);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("cryptic-cookie-consent-reset", onReset);
    };
  }, []);

  const choose = (value: CookieConsentValue) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, date: new Date().toISOString() }));
    } catch {
      /* storage unavailable — still honour the choice for this session */
    }
    applyConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4 animate-in slide-in-from-bottom-4 duration-500"
    >
      <div className="mx-auto max-w-4xl rounded-xl border border-primary/30 bg-card/95 backdrop-blur-md shadow-2xl">
        <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5">
          <Cookie className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />

          <div className="flex-1 text-sm text-muted-foreground">
            <p className="mb-1 font-semibold text-foreground">We use cookies</p>
            <p>
              We use cookies to keep your cart working, remember your preferences and understand how the site is used.
              Decline and we'll only keep what's strictly necessary.{" "}
              <Link to="/privacy" className="text-primary underline underline-offset-4 hover:opacity-80">
                Privacy Policy
              </Link>
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => choose("declined")} className="flex-1 sm:flex-none">
              Decline
            </Button>
            <Button size="sm" onClick={() => choose("accepted")} className="flex-1 sm:flex-none">
              Accept
            </Button>
            <button
              type="button"
              onClick={() => choose("declined")}
              aria-label="Close and decline cookies"
              className="hidden rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground sm:block"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
