import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, Loader2, Download, Hourglass } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface DownloadLink {
  product: string;
  label: string;
  url: string;
}

const DigitalSuccess = () => {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  const [state, setState] = useState<"loading" | "paid" | "pending" | "error">("loading");
  const [links, setLinks] = useState<DownloadLink[]>([]);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [awaiting, setAwaiting] = useState(false);
  const [ttlHours, setTtlHours] = useState(24);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!sessionId) {
      setState("error");
      setMessage("No checkout session was provided.");
      return;
    }
    const verify = async () => {
      const { data, error } = await supabase.functions.invoke("verify-digital-purchase", {
        body: { session_id: sessionId },
      });
      if (error || data?.error) {
        setState("error");
        setMessage(data?.error || error?.message || "We could not verify this purchase.");
        return;
      }
      if (data.status !== "paid") {
        setState("pending");
        return;
      }
      setLinks(data.links ?? []);
      setOrderId(data.order_id);
      setAccessToken(data.access_token);
      setAwaiting(!!data.awaiting_delivery);
      setTtlHours(Number(data.ttl_hours) || 24);
      setState("paid");
    };
    verify();
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Order Confirmed | Cryptic Store Digital Vault</title>
        <meta name="description" content="Your Cryptic Store digital order is confirmed." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Navigation />

      <main className="container mx-auto px-4 py-16 max-w-2xl">
        {state === "loading" && (
          <div className="flex flex-col items-center py-20 gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Confirming your payment…</p>
          </div>
        )}

        {state === "pending" && (
          <Alert>
            <Hourglass className="h-4 w-4" />
            <AlertTitle>Payment still processing</AlertTitle>
            <AlertDescription>
              Stripe hasn't confirmed this payment yet. Refresh in a moment — nothing is lost.
            </AlertDescription>
          </Alert>
        )}

        {state === "error" && (
          <Alert variant="destructive">
            <AlertTitle>Something went sideways</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        {state === "paid" && (
          <>
            <div className="text-center mb-10">
              <CheckCircle2 className="h-14 w-14 text-primary mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2">The vault is open</h1>
              <p className="text-muted-foreground">
                A copy of these links is on its way to your inbox. They expire in {ttlHours} hours.
              </p>
            </div>

            {awaiting && (
              <Alert className="mb-6">
                <Hourglass className="h-4 w-4" />
                <AlertTitle>Your reading is being prepared</AlertTitle>
                <AlertDescription>
                  Hand-read work takes time. You'll get an email as soon as it's ready, and it will
                  appear on your purchases page.
                </AlertDescription>
              </Alert>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Your files</CardTitle>
                <CardDescription>Right-click to save each file to your device.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {links.length === 0 ? (
                  <p className="text-muted-foreground text-sm">
                    No files attached yet — check your purchases page shortly.
                  </p>
                ) : (
                  links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      className="flex items-center gap-3 rounded-md border p-3 hover:bg-muted transition-colors"
                    >
                      <Download className="h-4 w-4 text-primary" />
                      <span className="font-medium">{link.product}</span>
                      <span className="text-muted-foreground text-sm">— {link.label}</span>
                    </a>
                  ))
                )}
              </CardContent>
            </Card>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button asChild>
                <Link
                  to={
                    orderId && accessToken
                      ? `/my-purchases?order=${orderId}&token=${accessToken}`
                      : "/my-purchases"
                  }
                >
                  Go to my purchases
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/digital">Back to the vault</Link>
              </Button>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default DigitalSuccess;
