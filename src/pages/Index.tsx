import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { Navigation } from "@/components/Navigation";
import { Sparkles, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import dare2wearHero from "@/assets/dare2wear-collection-hero.jpg";

const Index = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(20),
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://crypticstore.com/#website",
        "url": "https://crypticstore.com",
        "name": "Cryptic Store",
        "description": "Bold streetwear and urban fashion by DJ MC Myster?ous",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://crypticstore.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://crypticstore.com/#organization",
        "name": "Cryptic Store",
        "url": "https://crypticstore.com",
        "logo": "https://crypticstore.com/favicon.jpg",
        "description": "America's trending streetwear destination featuring Dare2Wear and Imitable Lives collections by DJ MC Myster?ous",
        "sameAs": []
      },
      {
        "@type": "CollectionPage",
        "@id": "https://crypticstore.com/#homepage",
        "url": "https://crypticstore.com",
        "name": "Cryptic Store - Dare2Wear Collection",
        "description": "Shop Dare2Wear Collection - Bold streetwear for those who refuse to blend in",
        "isPartOf": { "@id": "https://crypticstore.com/#website" },
        "about": {
          "@type": "Thing",
          "name": "Dare2Wear Streetwear Collection"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cryptic Store | Dare2Wear Collection - Bold Streetwear & Urban Fashion</title>
        <meta name="description" content="Shop Dare2Wear Collection at Cryptic Store. Bold streetwear, statement fashion & urban apparel by DJ MC Myster?ous. Free shipping over $75. America's trending streetwear." />
        <meta name="keywords" content="Dare2Wear, streetwear, urban fashion, bold clothing, Cryptic Store, DJ MC Mysterious, graphic tees, statement apparel, trending streetwear, bestselling urban fashion" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://crypticstore.com" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cryptic Store | Dare2Wear Collection - Bold Streetwear" />
        <meta property="og:description" content="Shop Dare2Wear Collection. Bold streetwear & statement fashion by DJ MC Myster?ous. Free shipping over $75." />
        <meta property="og:image" content="https://crypticstore.com/dare2wear-collection-hero.jpg" />
        <meta property="og:url" content="https://crypticstore.com" />
        <meta property="og:site_name" content="Cryptic Store" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cryptic Store | Dare2Wear Collection" />
        <meta name="twitter:description" content="Bold streetwear for those who refuse to blend in. Shop now." />
        <meta name="twitter:image" content="https://crypticstore.com/dare2wear-collection-hero.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Dare2Wear Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${dare2wearHero})` }}
          role="img"
          aria-label="Dare2Wear Collection - Bold streetwear with black leather and yellow accents"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6 border border-primary/30 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-bold">New Collection</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-foreground drop-shadow-lg">
            DARE<span className="text-primary">2</span>WEAR
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl font-medium drop-shadow-md">
            Bold statements for those who refuse to blend in
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6 font-bold">
              <Link to="/collections/dare2wear">
                Shop Dare2Wear Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 font-bold bg-background/50 backdrop-blur-sm border-foreground/20 hover:bg-background/70">
              <Link to="/#products">
                Shop All Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">Trending Now</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Best selling magic & music apparel by DJ MC Myster?ous
          </p>
        </div>

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
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Sparkles className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4">No products found</h2>
              <p className="text-muted-foreground mb-6">
                We're getting ready to launch our amazing collection. Check back soon!
              </p>
            </div>
          </div>
        )}
      </section>
      
      <footer className="border-t border-primary/20 py-8 px-4 mt-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="font-medium">&copy; 2025 Cryptic Store. Magic & Music by DJ MC Myster?ous. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
