import { useQuery } from "@tanstack/react-query";
import { getProductsByCollection } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Helmet } from "react-helmet";
import { Crown, Sparkles, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { INCERUNMEN_PRODUCTS } from "@/lib/partner-products";
import imitableClubHero from "@/assets/imitable-club-hero.jpg";

const ImitableLives = () => {
  // Fetch products tagged with imitable-lives directly from Shopify
  const { data: imitableLivesProducts, isLoading } = useQuery({
    queryKey: ['products', 'imitable-lives'],
    queryFn: () => getProductsByCollection('imitable-lives', 50),
  });

  // Structured data for collection page - SEO optimized
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://crypticstore.com/collections/imitable-lives#collection",
        name: "Imitable Lives Collection - Ancient Luxury Meets Modern Streetwear",
        description: "Shop the Imitable Lives Collection at Cryptic Store. Inspired by Marc Anthony and Cleopatra - ancient Egyptian luxury meets modern urban streetwear. Premium graphic tees featuring pyramids, cosmic imagery, and historical symbolism.",
        url: "https://crypticstore.com/collections/imitable-lives",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: imitableLivesProducts?.length || 0,
          itemListElement: imitableLivesProducts?.slice(0, 10).map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Product",
              name: product.node.title,
              url: `https://crypticstore.com/product/${product.node.handle}`,
              image: product.node.images.edges[0]?.node.url,
              brand: {
                "@type": "Brand",
                name: "Cryptic Store"
              },
              offers: {
                "@type": "Offer",
                price: product.node.priceRange.minVariantPrice.amount,
                priceCurrency: product.node.priceRange.minVariantPrice.currencyCode,
                availability: "https://schema.org/InStock"
              }
            }
          })) || []
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://crypticstore.com/collections/imitable-lives#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://crypticstore.com"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Collections",
            item: "https://crypticstore.com/collections"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Imitable Lives",
            item: "https://crypticstore.com/collections/imitable-lives"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Imitable Lives Collection - Sacramento Luxury Streetwear & Egyptian Apparel | Cryptic Store Boutique</title>
        <meta name="description" content="Dream Dare Drip. Shop Imitable Lives at Cryptic Store, Sacramento's luxury streetwear boutique. Egyptian pyramid graphic tees, ancient luxury meets modern apparel by Sacramento artist DJ MC Myster?ous. Sacramento Kings colors. Free shipping $75+." />
        <meta name="keywords" content="Imitable Lives Collection, Sacramento streetwear, Sacramento boutique, Sacramento apparel, Sacramento artist, Egyptian streetwear, pyramid graphic tee, Sacramento luxury fashion, Sacramento Kings streetwear, cosmic streetwear, Cryptic Store Sacramento, DJ MC Mysterious, Youknowwedomagic, bestselling graphic tees" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://crypticstore.com/collections/imitable-lives" />
        
        {/* Open Graph - Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Imitable Lives Collection - Egyptian Luxury Streetwear | Cryptic Store" />
        <meta property="og:description" content="Ancient luxury meets modern streetwear. Egyptian pyramid graphic tees inspired by Marc Anthony & Cleopatra. Premium black tees with cosmic designs. Free shipping $75+." />
        <meta property="og:url" content="https://crypticstore.com/collections/imitable-lives" />
        <meta property="og:image" content="https://crypticstore.com/speed-of-light-pyramid-tee.jpg" />
        <meta property="og:site_name" content="Cryptic Store" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Imitable Lives Collection - Egyptian Streetwear | Cryptic Store" />
        <meta name="twitter:description" content="Ancient luxury meets modern streetwear. Egyptian pyramid tees inspired by royalty. #Youknowwedomagic" />
        <meta name="twitter:image" content="https://crypticstore.com/speed-of-light-pyramid-tee.jpg" />
        
        {/* Additional SEO */}
        <meta name="author" content="Cryptic Store by Mysterious Enterprise" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6 border border-primary/40 backdrop-blur-sm shadow-[0_0_20px_hsla(50,100%,50%,0.3)]">
                <Crown className="h-4 w-4" />
                <span className="text-sm font-bold tracking-wider uppercase">Premium Collection</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-foreground tracking-tight">
                IMITABLE <span className="text-primary">LIVES</span>
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/80 mb-2 font-light tracking-widest uppercase">
                Ancient Luxury • Modern Streetwear
              </p>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl font-medium">
                Inspired by Marc Anthony & Cleopatra. Where Egyptian mysticism meets cosmic science. 
                Premium graphic tees for those who live like royalty.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Egyptian Designs
                </span>
                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Premium Cotton
                </span>
                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
                  <Sparkles className="h-4 w-4 text-primary" />
                  USA Shipping
                </span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={imitableClubHero}
                alt="Imitable Lives Collection - Ancient Egyptian luxury meets modern streetwear"
                className="rounded-2xl w-full max-w-lg object-cover shadow-[0_0_40px_hsla(50,100%,50%,0.3)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <main className="container mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Shop the Collection</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4 rounded-full shadow-[0_0_10px_hsla(50,100%,50%,0.5)]" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cosmic imagery meets ancient symbolism. Premium streetwear inspired by 
            the legendary lives of Marc Anthony and Cleopatra. #Youknowwedomagic
          </p>
        </header>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : imitableLivesProducts && imitableLivesProducts.length > 0 ? (
          <section aria-label="Imitable Lives Products">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {imitableLivesProducts.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Crown className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Collection Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're curating the finest pieces inspired by ancient royalty. 
                The Imitable Lives Collection launches soon!
              </p>
            </div>
          </div>
        )}

        {/* Partner Products Section */}
        <section className="mt-16">
          <header className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Partner Picks</h2>
            <p className="text-muted-foreground text-sm">Curated pieces that complement the Imitable Lives aesthetic</p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {(() => {
              const robe = INCERUNMEN_PRODUCTS["incerunmen-stand-collar-robe"];
              return (
                <Link to="/partner/incerunmen-stand-collar-robe">
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full group">
                    <div className="aspect-square overflow-hidden bg-secondary/20 relative">
                      <img src={robe.images[0]} alt={robe.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs">Partner</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{robe.title}</h3>
                      <div className="flex items-center justify-between gap-2 mt-4">
                        <p className="text-2xl font-bold">${robe.price.toFixed(2)}</p>
                        <Button size="sm" variant="outline" className="shrink-0">
                          <ExternalLink className="h-4 w-4 mr-1" /> Shop
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })()}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ImitableLives;