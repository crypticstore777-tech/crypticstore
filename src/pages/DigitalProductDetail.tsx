import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, ShieldCheck, Clock, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { formatPrice, type DigitalProduct } from "./DigitalVault";

const SITE_URL = "https://crypticstore.shop";

const DigitalProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<DigitalProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [buying, setBuying] = useState(false);
  const [email, setEmail] = useState("");
  const [intakeName, setIntakeName] = useState("");
  const [intakeBirth, setIntakeBirth] = useState("");
  const [intakeQuestion, setIntakeQuestion] = useState("");

  useEffect(() => {
    const load = async () => {
      const { data } = await (supabase as any)
        .from("digital_products")
        .select("*")
        .eq("slug", slug)
        .eq("active", true)
        .maybeSingle();
      setProduct((data as DigitalProduct) ?? null);
      setLoading(false);
    };
    if (slug) load();
  }, [slug]);

  const handleBuy = async () => {
    if (!product) return;
    if (product.requires_intake && (!intakeName.trim() || !intakeQuestion.trim())) {
      toast.error("Add your name and your question so the reading can be prepared.");
      return;
    }
    setBuying(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-digital-checkout", {
        body: {
          items: [{ slug: product.slug, quantity: 1 }],
          email: email.trim() || undefined,
          intake: product.requires_intake
            ? { name: intakeName, birth_details: intakeBirth, question: intakeQuestion }
            : {},
        },
      });
      if (error) throw error;
      if (!data?.url) throw new Error(data?.error || "Checkout could not be created");
      window.open(data.url, "_blank");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Checkout failed");
    } finally {
      setBuying(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex justify-center py-32">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">This item has vanished</h1>
          <Button asChild>
            <Link to="/digital">Back to the vault</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${product.title} | Cryptic Store Digital Vault`}</title>
        <meta name="description" content={(product.description ?? product.title).slice(0, 155)} />
        <link rel="canonical" href={`${SITE_URL}/digital/${product.slug}`} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={(product.description ?? product.title).slice(0, 155)} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.title,
            description: product.description,
            image: product.cover_image_url ?? undefined,
            offers: {
              "@type": "Offer",
              price: (product.price_cents / 100).toFixed(2),
              priceCurrency: product.currency.toUpperCase(),
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/digital/${product.slug}`,
            },
          })}
        </script>
      </Helmet>

      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            {product.cover_image_url ? (
              <img
                src={product.cover_image_url}
                alt={product.title}
                className="w-full rounded-lg border shadow-[0_0_40px_hsl(var(--primary)/0.25)]"
              />
            ) : (
              <div className="aspect-square rounded-lg border bg-muted" />
            )}
            {product.preview_url && (
              <div className="mt-6">
                <audio controls src={product.preview_url} className="w-full">
                  Your browser does not support audio previews.
                </audio>
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="capitalize">
                {product.category}
              </Badge>
              {product.license_tier && (
                <Badge className="capitalize">{product.license_tier} license</Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{product.title}</h1>
            <p className="text-2xl font-bold text-primary mb-6">
              {formatPrice(product.price_cents, product.currency)}
            </p>
            <p className="text-muted-foreground whitespace-pre-line mb-8">
              {product.long_description || product.description}
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Delivery email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Leave blank to use the email you enter at checkout.
                  </p>
                </div>

                {product.requires_intake && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="intake-name">Your name</Label>
                      <Input
                        id="intake-name"
                        value={intakeName}
                        onChange={(e) => setIntakeName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="intake-birth">Birth date, time & place (optional)</Label>
                      <Input
                        id="intake-birth"
                        value={intakeBirth}
                        onChange={(e) => setIntakeBirth(e.target.value)}
                        placeholder="Jan 4 1991, 6:15am, Sacramento CA"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="intake-question">What do you want read?</Label>
                      <Textarea
                        id="intake-question"
                        rows={4}
                        value={intakeQuestion}
                        onChange={(e) => setIntakeQuestion(e.target.value)}
                      />
                    </div>
                  </>
                )}

                <Button className="w-full" size="lg" onClick={handleBuy} disabled={buying}>
                  {buying ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Download className="mr-2 h-4 w-4" />
                  )}
                  {product.requires_intake ? "Book & pay" : "Buy & download"}
                </Button>
              </CardContent>
            </Card>

            <div className="grid gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Secure Stripe checkout — files never sit on a public URL.
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Links expire after {product.download_ttl_hours ?? 24} hours and can be re-issued up to {product.max_downloads ?? 5} times from your purchases page.
              </div>
            </div>

            {product.license_terms && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-base">License terms</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground whitespace-pre-line">
                  {product.license_terms}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalProductDetail;
