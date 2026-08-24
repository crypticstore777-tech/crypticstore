import { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Download, Loader2, RefreshCw, Hourglass } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface OrderRow {
  id: string;
  status: string;
  amount_cents: number;
  currency: string;
  delivery_status: string;
  created_at: string;
  access_token: string;
}

interface DownloadLink {
  product: string;
  label: string;
  url: string;
}

const MyPurchases = () => {
  const [params] = useSearchParams();
  const guestOrder = params.get("order");
  const guestToken = params.get("token");

  const [signedIn, setSignedIn] = useState(false);
  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [linksByOrder, setLinksByOrder] = useState<Record<string, DownloadLink[]>>({});
  const [busyOrder, setBusyOrder] = useState<string | null>(null);

  const fetchLinks = useCallback(
    async (orderId: string, token?: string) => {
      setBusyOrder(orderId);
      try {
        const { data, error } = await supabase.functions.invoke("digital-download-link", {
          body: { order_id: orderId, access_token: token },
        });
        if (error) throw error;
        if (data?.error) throw new Error(data.error);
        setLinksByOrder((prev) => ({ ...prev, [orderId]: data.links ?? [] }));
        if ((data.links ?? []).length === 0) {
          toast.info("No files attached yet — this order is still being prepared.");
        }
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Could not create download links");
      } finally {
        setBusyOrder(null);
      }
    },
    [],
  );

  useEffect(() => {
    const load = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const isSignedIn = !!sessionData.session;
      setSignedIn(isSignedIn);

      if (isSignedIn) {
        const { data } = await (supabase as any)
          .from("digital_orders")
          .select("id, status, amount_cents, currency, delivery_status, created_at, access_token")
          .eq("status", "paid")
          .order("created_at", { ascending: false });
        setOrders((data as OrderRow[]) ?? []);
      }
      setLoading(false);

      if (guestOrder && guestToken) {
        fetchLinks(guestOrder, guestToken);
      }
    };
    load();
  }, [guestOrder, guestToken, fetchLinks]);

  const money = (cents: number, currency: string) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: currency.toUpperCase() }).format(
      cents / 100,
    );

  const renderLinks = (orderId: string) => {
    const links = linksByOrder[orderId];
    if (!links) return null;
    if (links.length === 0) {
      return <p className="text-sm text-muted-foreground">Nothing to download yet.</p>;
    }
    return (
      <div className="space-y-2">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            className="flex items-center gap-3 rounded-md border p-3 hover:bg-muted transition-colors"
          >
            <Download className="h-4 w-4 text-primary" />
            <span className="font-medium">{link.product}</span>
            <span className="text-sm text-muted-foreground">— {link.label}</span>
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>My Purchases | Cryptic Store</title>
        <meta name="description" content="Access your Cryptic Store digital downloads, readings and licenses." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Navigation />

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">My purchases</h1>
        <p className="text-muted-foreground mb-10">
          Re-issue download links any time, up to each product's download limit.
        </p>

        {guestOrder && guestToken && (
          <Card className="mb-10">
            <CardHeader>
              <CardTitle>Your order</CardTitle>
              <CardDescription>Opened with the secure link from your email.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {busyOrder === guestOrder ? (
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
              ) : (
                renderLinks(guestOrder)
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => fetchLinks(guestOrder, guestToken)}
                disabled={busyOrder === guestOrder}
              >
                <RefreshCw className="mr-2 h-4 w-4" /> Re-issue links
              </Button>
            </CardContent>
          </Card>
        )}

        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : !signedIn ? (
          <Alert>
            <AlertTitle>Sign in to see everything</AlertTitle>
            <AlertDescription className="flex flex-col gap-3">
              <span>
                Sign in with the email you used at checkout to see every order in one place. Guest
                orders can always be opened with the secure link in your confirmation email.
              </span>
              <Button asChild size="sm" className="self-start">
                <Link to="/auth">Sign in</Link>
              </Button>
            </AlertDescription>
          </Alert>
        ) : orders.length === 0 ? (
          <Card className="text-center py-14">
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">No digital orders on this account yet.</p>
              <Button asChild>
                <Link to="/digital">Visit the vault</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-5">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <CardTitle className="text-lg">
                      {new Date(order.created_at).toLocaleDateString()} —{" "}
                      {money(order.amount_cents, order.currency)}
                    </CardTitle>
                    {order.delivery_status === "awaiting" ? (
                      <Badge variant="secondary">
                        <Hourglass className="mr-1 h-3 w-3" /> In preparation
                      </Badge>
                    ) : (
                      <Badge>Ready</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {renderLinks(order.id)}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => fetchLinks(order.id, order.access_token)}
                    disabled={busyOrder === order.id}
                  >
                    {busyOrder === order.id ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <RefreshCw className="mr-2 h-4 w-4" />
                    )}
                    Get download links
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MyPurchases;
