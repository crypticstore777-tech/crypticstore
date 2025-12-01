import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { Navigation } from "@/components/Navigation";
import { Sparkles, ArrowRight, Zap } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import dare2wearHero from "@/assets/dare2wear-collection-hero.jpg";
const Index = () => {
  const {
    data: products,
    isLoading
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(20)
  });
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "WebSite",
      "@id": "https://crypticstore.com/#website",
      "url": "https://crypticstore.com",
      "name": "Cryptic Store",
      "description": "America's #1 black and yellow streetwear destination by DJ MC Myster?ous",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://crypticstore.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }, {
      "@type": "Organization",
      "@id": "https://crypticstore.com/#organization",
      "name": "Cryptic Store",
      "url": "https://crypticstore.com",
      "logo": "https://crypticstore.com/favicon.jpg",
      "description": "America's trending streetwear destination featuring Dare2Wear and Imitable Lives collections by DJ MC Myster?ous. #YouKnowWeDoMaggic",
      "founder": {
        "@type": "Person",
        "name": "DJ MC Myster?ous"
      },
      "sameAs": []
    }, {
      "@type": "Store",
      "@id": "https://crypticstore.com/#store",
      "name": "Cryptic Store",
      "url": "https://crypticstore.com",
      "priceRange": "$$",
      "paymentAccepted": "Credit Card, PayPal, Shop Pay",
      "currenciesAccepted": "USD",
      "openingHours": "Mo-Su 00:00-24:00",
      "brand": {
        "@type": "Brand",
        "name": "Dare2Wear"
      }
    }, {
      "@type": "CollectionPage",
      "@id": "https://crypticstore.com/#homepage",
      "url": "https://crypticstore.com",
      "name": "Cryptic Store - Dare2Wear Collection - Black & Yellow Streetwear",
      "description": "Shop Dare2Wear Collection - Bold black and yellow streetwear for those who refuse to blend in",
      "isPartOf": {
        "@id": "https://crypticstore.com/#website"
      },
      "about": {
        "@type": "Thing",
        "name": "Dare2Wear Streetwear Collection"
      }
    }, {
      "@type": "BreadcrumbList",
      "@id": "https://crypticstore.com/#breadcrumb",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://crypticstore.com"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Dare2Wear Collection",
        "item": "https://crypticstore.com/collections/dare2wear"
      }]
    }]
  };
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cryptic Store | America's #1 Dare2Wear Streetwear - Black & Yellow Urban Fashion</title>
        <meta name="description" content="Shop Dare2Wear Collection at Cryptic Store. America's trending black & yellow streetwear by DJ MC Myster?ous. Bold graphic tees, statement apparel. Free shipping $75+. #YouKnowWeDoMaggic" />
        <meta name="keywords" content="Dare2Wear, streetwear, urban fashion, black yellow streetwear, Cryptic Store, DJ MC Mysterious, graphic tees, statement apparel, trending streetwear 2025, bestselling urban fashion, YouKnowWeDoMaggic, Imitable Lives, magic music apparel, hip hop fashion" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://crypticstore.com" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cryptic Store | America's #1 Black & Yellow Streetwear" />
        <meta property="og:description" content="Shop Dare2Wear Collection. Bold black & yellow streetwear by DJ MC Myster?ous. Free shipping $75+. #YouKnowWeDoMaggic" />
        <meta property="og:image" content="https://crypticstore.com/dare2wear-collection-hero.jpg" />
        <meta property="og:url" content="https://crypticstore.com" />
        <meta property="og:site_name" content="Cryptic Store" />
        <meta property="og:locale" content="en_US" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cryptic Store | Dare2Wear - Black & Yellow Streetwear" />
        <meta name="twitter:description" content="Bold streetwear for those who refuse to blend in. Shop now. #YouKnowWeDoMaggic" />
        <meta name="twitter:image" content="https://crypticstore.com/dare2wear-collection-hero.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Dare2Wear Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${dare2wearHero})`
      }} role="img" aria-label="Dare2Wear Collection - Bold black and yellow streetwear with leather and gold accents">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background" />
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6 border border-primary/40 backdrop-blur-sm shadow-[0_0_20px_hsla(50,100%,50%,0.3)]">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-bold tracking-wide">New Collection</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-foreground drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Cryptic Store<span className="text-primary drop-shadow-[0_0_30px_hsla(50,100%,50%,0.6)]">2</span>WEAR
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl font-medium drop-shadow-md">An Online Bouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6 font-bold shadow-[0_0_30px_hsla(50,100%,50%,0.4)] hover:shadow-[0_0_40px_hsla(50,100%,50%,0.6)] transition-all">
              <Link to="/collections/dare2wear">
                Shop Dare2Wear Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 font-bold bg-background/50 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all">
              <Link to="/#products">
                Shop All Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Accent Bar */}
      <section className="relative py-6 bg-gradient-to-r from-background via-primary/10 to-background border-y border-primary/20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,hsla(50,100%,50%,0.05)_50%,transparent_100%)]" />
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Zap className="h-5 w-5 text-primary" />
          <span className="text-lg font-bold text-foreground tracking-wider">#YouKnowWeDoMagic</span>
          <span className="hidden sm:inline text-primary">|</span>
          <span className="text-muted-foreground font-medium">Magic & Music by DJ MC Myster?ous</span>
          <Zap className="h-5 w-5 text-primary" />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            Trending Now
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4 rounded-full shadow-[0_0_10px_hsla(50,100%,50%,0.5)]" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Best selling magic & music apparel by DJ MC Myster?ous
          </p>
        </div>

        {isLoading ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => <div key={i} className="space-y-4">
                <Skeleton className="aspect-square w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>)}
          </div> : products && products.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => <ProductCard key={product.node.id} product={product} />)}
          </div> : <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Sparkles className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4">No products found</h2>
              <p className="text-muted-foreground mb-6">
                We're getting ready to launch our amazing collection. Check back soon!
              </p>
            </div>
          </div>}
      </section>
      
      <footer className="border-t-2 border-primary/40 py-10 px-4 mt-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto text-center">
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full shadow-[0_0_10px_hsla(50,100%,50%,0.5)]" />
          <p className="font-bold text-foreground mb-2">&copy; 2025 Cryptic Store</p>
          <p className="text-muted-foreground font-medium">Magic & Music by DJ MC Myster?ous</p>
          <p className="text-primary font-bold mt-2 tracking-wider">#YouKnowWeDoMagic</p>
        </div>
      </footer>
    </div>;
};
export default Index;