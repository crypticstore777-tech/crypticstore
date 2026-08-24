import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Sparkles, Music2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export interface DigitalProduct {
  id: string;
  slug: string;
  title: string;
  category: "download" | "reading" | "license";
  description: string | null;
  long_description: string | null;
  price_cents: number;
  currency: string;
  cover_image_url: string | null;
  preview_url: string | null;
  license_tier: string | null;
  license_terms: string | null;
  requires_intake: boolean;
  download_ttl_hours?: number | null;
  max_downloads?: number | null;
}

export const formatPrice = (cents: number, currency = "usd") =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: currency.toUpperCase() }).format(
    cents / 100,
  );

const CATEGORY_META: Record<string, { label: string; icon: typeof Download; blurb: string }> = {
  download: {
    label: "Instant Downloads",
    icon: Download,
    blurb: "Grimoires, printable sigils, wallpapers and ritual guides — delivered the moment you pay.",
  },
  reading: {
    label: "Bookable Readings",
    icon: Sparkles,
    blurb: "Tarot, astrology and scrying sessions read by hand and returned to your inbox.",
  },
  license: {
    label: "Beat & Sync Licenses",
    icon: Music2,
    blurb: "Original Myster?ous production, licensed for your project with clear terms.",
  },
};

const SITE_URL = "https://crypticstore.shop";

const DigitalVault = () => {
  const [products, setProducts] = useState<DigitalProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const load = async () => {
      const { data } = await (supabase as any)
        .from("digital_products")
        .select("*")
        .eq("active", true)
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });
      setProducts((data as DigitalProduct[]) ?? []);
      setLoading(false);
    };
    load();
  }, []);

  const visible = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Digital Vault | Downloads, Readings & Beat Licenses</title>
        <meta
          name="description"
          content="Instant mystical downloads, bookable tarot and astrology readings, and beat & sync licenses from Cryptic Store. Secure delivery, instant access."
        />
        <link rel="canonical" href={`${SITE_URL}/digital`} />
        <meta property="og:title" content="Cryptic Store Digital Vault" />
        <meta
          property="og:description"
          content="Downloads, readings and beat licenses — delivered instantly and securely."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navigation />

      <section className="border-b bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4 py-16 text-center">
          <Badge className="mb-4">#Youknowwedomagic</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">The Digital Vault</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Work you can own in seconds. Grimoires and sigils, hand-read tarot, and original beats
            licensed for your next release — all delivered through secure, expiring links.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline">
              <Link to="/my-purchases">My purchases</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/music">Hear the catalog</Link>
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <Tabs value={filter} onValueChange={setFilter} className="mb-10">
          <TabsList className="flex flex-wrap h-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            {Object.entries(CATEGORY_META).map(([key, meta]) => (
              <TabsTrigger key={key} value={key}>
                {meta.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {filter !== "all" && (
          <p className="text-muted-foreground mb-8">{CATEGORY_META[filter].blurb}</p>
        )}

        {loading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : visible.length === 0 ? (
          <Card className="text-center py-16">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">The vault is being restocked</h2>
              <p className="text-muted-foreground">
                New downloads, readings and licenses are dropping soon. Check back shortly.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((product) => {
              const Icon = CATEGORY_META[product.category]?.icon ?? Download;
              return (
                <Card key={product.id} className="flex flex-col overflow-hidden group">
                  {product.cover_image_url && (
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={product.cover_image_url}
                        alt={product.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">
                        {CATEGORY_META[product.category]?.label}
                      </span>
                      {product.license_tier && (
                        <Badge variant="secondary" className="ml-auto capitalize">
                          {product.license_tier}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-bold">
                      {formatPrice(product.price_cents, product.currency)}
                    </span>
                    <Button asChild>
                      <Link to={`/digital/${product.slug}`}>View</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default DigitalVault;
