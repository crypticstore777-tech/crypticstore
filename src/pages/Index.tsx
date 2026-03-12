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
import founderImage from "@/assets/mc-mysterious-founder.jpeg";

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
      "description": "Sacramento's premier online boutique featuring exclusive streetwear, DJ services, music & apparel by artist DJ MC Myster?ous. Sacramento Kings inspired black & gold fashion.",
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
      "description": "Sacramento boutique & entertainment company. DJ services, music, urban apparel by artist MC Myster?ous. Sacramento Kings inspired streetwear. #Youknowwedomagic",
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
      "name": "Cryptic Store - Sacramento Boutique | DJ, Music, Artists & Apparel",
      "description": "Sacramento's premier online boutique. DJ services, music, urban apparel by artist MC Myster?ous. Sacramento Kings inspired streetwear.",
      "isPartOf": {
        "@id": "https://crypticstore.com/#website"
      },
      "about": {
        "@type": "Thing",
        "name": "Cryptic Store - Sacramento Streetwear Boutique"
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
        <title>Cryptic Store | Sacramento Boutique - DJ Services, Music, Artists & Urban Apparel</title>
        <meta name="description" content="Sacramento's premier online boutique & DJ services. Shop Dare2Wear & Imitable Lives streetwear collections by artist DJ MC Myster?ous. Sacramento Kings inspired black & gold apparel. Music, entertainment & spiritual services. Free shipping $75+." />
        <meta name="keywords" content="Sacramento boutique, Sacramento DJ, Sacramento artists, Sacramento music, Sacramento apparel, Sacramento Kings fashion, Cryptic Store, online boutique Sacramento CA, DJ services Sacramento, hip hop artist Sacramento, urban apparel Sacramento, streetwear Sacramento, DJ MC Mysterious, Dare2Wear collection, Imitable Lives collection, trending streetwear, bestselling graphic tees, black gold streetwear, Sacramento entertainment, Sacramento Kings inspired, Youknowwedomagic" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://crypticstore.com" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cryptic Store | Sacramento Boutique - DJ, Music, Artists & Apparel" />
        <meta property="og:description" content="Sacramento's hottest boutique. Shop streetwear by artist DJ MC Myster?ous. Sacramento Kings inspired black & gold apparel. DJ services & music. Free shipping $75+." />
        <meta property="og:image" content="https://crypticstore.com/dare2wear-collection-hero.jpg" />
        <meta property="og:url" content="https://crypticstore.com" />
        <meta property="og:site_name" content="Cryptic Store" />
        <meta property="og:locale" content="en_US" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cryptic Store | Sacramento Boutique - DJ, Music & Apparel" />
        <meta name="twitter:description" content="Sacramento's hottest boutique. Streetwear by artist DJ MC Myster?ous. Sacramento Kings inspired fashion. #Youknowwedomagic" />
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
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

      {/* Meet the Founder */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 to-primary/10 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
              <img
                src={founderImage}
                alt="MC Myster?ous - Founder of Cryptic Store wearing gold headphones"
                className="relative w-full rounded-2xl border border-primary/20 shadow-2xl object-cover aspect-[3/4]"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                Meet the <span className="text-primary">Founder</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MC Myster?ous — Hip Hop DJ, producer, and the creative force behind Cryptic Store. Where music culture, bold fashion, and mysticism converge.
              </p>
              <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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