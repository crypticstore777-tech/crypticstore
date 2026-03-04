import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Sparkles, ArrowRight, Zap } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import crypticStoreHero from "@/assets/cryptic-store-hero.jpg";

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
      "description": "Dream Dare Drip. Online boutique by Mysterious Enterprise featuring exclusive streetwear collections by DJ MC Myster?ous",
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
      "description": "Online boutique by Mysterious Enterprise featuring Dare2Wear and Imitable Lives collections by DJ MC Myster?ous. #Youknowwedomagic",
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
        "name": "Cryptic Store"
      }
    }, {
      "@type": "CollectionPage",
      "@id": "https://crypticstore.com/#homepage",
      "url": "https://crypticstore.com",
      "name": "Cryptic Store - Online Boutique by Mysterious Enterprise",
      "description": "Shop Cryptic Store - Online boutique featuring exclusive streetwear collections by MC Myster?ous",
      "isPartOf": {
        "@id": "https://crypticstore.com/#website"
      },
      "about": {
        "@type": "Thing",
        "name": "Cryptic Store Streetwear Boutique"
      }
    }, {
      "@type": "BreadcrumbList",
      "@id": "https://crypticstore.com/#breadcrumb",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://crypticstore.com"
      }]
    }]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cryptic Store | Online Boutique by Mysterious Enterprise - Black & Gold Urban Fashion</title>
        <meta name="description" content="Shop Cryptic Store - Dream Dare Drip. Online boutique by Mysterious Enterprise featuring Dare2Wear, Imitable Lives, and exclusive streetwear collections. Bold black & gold fashion. Free shipping $75+. #Youknowwedomagic" />
        <meta name="keywords" content="Cryptic Store, online boutique USA, Mysterious Enterprise, streetwear 2025, urban fashion America, black gold streetwear, DJ MC Mysterious, graphic tees, Dare2Wear collection, Imitable Lives collection, trending streetwear, bestselling graphic tees, Egyptian pyramid tee, speed of light shirt, Youknowwedomagic, magic music apparel, premium streetwear brands, hip hop fashion, club culture clothing" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://crypticstore.com" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cryptic Store | Online Boutique by Mysterious Enterprise" />
        <meta property="og:description" content="Dream Dare Drip. Shop exclusive streetwear collections. Bold black & gold fashion by DJ MC Myster?ous. Free shipping $75+. #Youknowwedomagic" />
        <meta property="og:image" content="https://crypticstore.com/dare2wear-collection-hero.jpg" />
        <meta property="og:url" content="https://crypticstore.com" />
        <meta property="og:site_name" content="Cryptic Store" />
        <meta property="og:locale" content="en_US" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cryptic Store | Online Boutique by Mysterious Enterprise" />
        <meta name="twitter:description" content="Dream Dare Drip. Exclusive streetwear collections. Bold fashion for those who refuse to blend in. #Youknowwedomagic" />
        <meta name="twitter:image" content="https://crypticstore.com/dare2wear-collection-hero.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${crypticStoreHero})` }} 
          role="img" 
          aria-label="Cryptic Store - Black and gold streetwear boutique by Mysterious Enterprise"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/70" />
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6 border border-primary/40 backdrop-blur-sm shadow-[0_0_20px_hsla(50,100%,50%,0.3)]">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-bold tracking-wide">Welcome</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-foreground drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Crypt?c Store
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary font-black tracking-widest mb-8 drop-shadow-[0_0_20px_hsla(50,100%,50%,0.4)]">
            Dream Dare Drip
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6 font-bold shadow-[0_0_30px_hsla(50,100%,50%,0.4)] hover:shadow-[0_0_40px_hsla(50,100%,50%,0.6)] transition-all">
              <Link to="/collections/imitable-lives">
                Imitable Lives
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 font-bold bg-background/50 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all">
              <Link to="/collections/dare2wear">
                Dare2Wear
                <ArrowRight className="ml-2 h-5 w-5" />
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
          <span className="text-lg font-bold text-foreground tracking-wider">#Youknowwedomagic</span>
          <span className="hidden sm:inline text-primary">|</span>
          <span className="text-muted-foreground font-medium">Magic & Music by MC Myster?ous</span>
          <Zap className="h-5 w-5 text-primary" />
        </div>
      </section>

      {/* Amazon Store Section */}
      <section className="py-12 bg-gradient-to-b from-background to-[#FF9900]/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">
              Shop on Amazon
            </h2>
            <p className="text-muted-foreground mb-6">
              Find our products on the world's largest marketplace
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#FF9900] hover:bg-[#FFB84D] text-black font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <a href="https://www.amazon.com/s?k=Cryptic+Store+Dare2Wear" target="_blank" rel="noopener noreferrer">
                Visit Our Amazon Store
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">✓ Fast Prime Shipping</span>
              <span className="flex items-center gap-1">✓ Easy Returns</span>
              <span className="flex items-center gap-1">✓ Trusted Platform</span>
            </div>
          </div>
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
            {products.map(product => (
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
      
      <Footer />
    </div>
  );
};

export default Index;