import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Sparkles, ArrowRight, Zap, Eye, Flame, Stars, Music } from "lucide-react";
import { SocialProof } from "@/components/SocialProof";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import crypticStoreHero from "@/assets/cryptic-store-hero.jpg";
import crypticStoreLogo from "@/assets/cryptic-store-logo-gold.png";
import founderImage from "@/assets/mc-mysterious-bw-portrait.png";
import { MC_MYSTERIOUS_SOCIAL_PROFILES } from "@/lib/seo-constants";

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
      "@id": "https://crypticstore.shop/#website",
      "url": "https://crypticstore.shop",
      "name": "Cryptic Store",
      "description": "Sacramento's premier online boutique featuring exclusive streetwear, DJ services, music & apparel by artist DJ MC Mysterious. Sacramento Kings inspired black & gold fashion.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://crypticstore.shop/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }, {
      "@type": "Organization",
      "@id": "https://crypticstore.shop/#organization",
      "name": "Cryptic Store",
      "url": "https://crypticstore.shop",
      "logo": "https://crypticstore.shop/favicon.jpg",
      "description": "Sacramento boutique & entertainment company. DJ services, music, urban apparel by artist MC Mysterious. Sacramento Kings inspired streetwear. #Youknowwedomagic",
      "founder": {
        "@type": "Person",
        "name": "DJ MC Mysterious"
      },
      "sameAs": MC_MYSTERIOUS_SOCIAL_PROFILES
    }, {
      "@type": "Store",
      "@id": "https://crypticstore.shop/#store",
      "name": "Cryptic Store",
      "url": "https://crypticstore.shop",
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
      "@id": "https://crypticstore.shop/#homepage",
      "url": "https://crypticstore.shop",
      "name": "Cryptic Store - Sacramento Boutique | DJ, Music, Artists & Apparel",
      "description": "Sacramento's premier online boutique. DJ services, music, urban apparel by artist MC Mysterious. Sacramento Kings inspired streetwear.",
      "isPartOf": {
        "@id": "https://crypticstore.shop/#website"
      },
      "about": {
        "@type": "Thing",
        "name": "Cryptic Store - Sacramento Streetwear Boutique"
      }
    }, {
      "@type": "BreadcrumbList",
      "@id": "https://crypticstore.shop/#breadcrumb",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://crypticstore.shop"
      }]
    }]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cryptic Store | Sacramento Boutique - DJ Services, Music, Artists & Urban Apparel</title>
        <meta name="description" content="Sacramento's premier online boutique & DJ services. Shop Dare2Wear & Imitable Lives streetwear collections by artist DJ MC Mysterious. Sacramento Kings inspired black & gold apparel. Music, entertainment & spiritual services. Free shipping $75+." />
        <meta name="keywords" content="Sacramento boutique, Sacramento DJ, Sacramento artists, Sacramento music, Sacramento apparel, Sacramento Kings fashion, Cryptic Store, online boutique Sacramento CA, DJ services Sacramento, hip hop artist Sacramento, urban apparel Sacramento, streetwear Sacramento, DJ MC Mysterious, Dare2Wear collection, Imitable Lives collection, trending streetwear, bestselling graphic tees, black gold streetwear, Sacramento entertainment, Sacramento Kings inspired, Youknowwedomagic" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://crypticstore.shop" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cryptic Store | Sacramento Boutique - DJ, Music, Artists & Apparel" />
        <meta property="og:description" content="Sacramento's hottest boutique. Shop streetwear by artist DJ MC Mysterious. Sacramento Kings inspired black & gold apparel. DJ services & music. Free shipping $75+." />
        <meta property="og:image" content="https://crypticstore.shop/dare2wear-collection-hero.jpg" />
        <meta property="og:url" content="https://crypticstore.shop" />
        <meta property="og:site_name" content="Cryptic Store" />
        <meta property="og:locale" content="en_US" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cryptic Store | Sacramento Boutique - DJ, Music & Apparel" />
        <meta name="twitter:description" content="Sacramento's hottest boutique. Streetwear by artist DJ MC Mysterious. Sacramento Kings inspired fashion. #Youknowwedomagic" />
        <meta name="twitter:image" content="https://crypticstore.shop/dare2wear-collection-hero.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        {/* Subtle radial glow behind logo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(43,80%,40%,0.08)_0%,transparent_70%)]" />
        
        <div className="relative h-full min-h-screen container mx-auto px-4 flex flex-col justify-center items-center text-center py-24">
          {/* Cryptic Store Logo */}
          <img
            src={crypticStoreLogo}
            alt="Cryptic Store - Gold M emblem with treasure chest logo"
            className="w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto mb-8 drop-shadow-[0_0_40px_hsla(43,80%,50%,0.3)] animate-fade-in"
          />
          <h1 className="sr-only">Cryptic Store</h1>
          
          <p className="text-2xl md:text-3xl text-primary font-black tracking-widest mb-10" style={{ textShadow: '0 0 20px hsla(50,100%,50%,0.4), 0 2px 8px rgba(0,0,0,0.9)' }}>
            Dream Dare Drip
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6 font-bold shadow-[0_0_30px_hsla(50,100%,50%,0.4)] hover:shadow-[0_0_40px_hsla(50,100%,50%,0.6)] transition-all">
              <Link to="/collections/imitable-lives">
                Imitable Lives
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 font-bold border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all">
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
          <span className="text-muted-foreground font-medium">Magic & Music by MC Mysterious</span>
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
                alt="MC Mysterious - Founder of Cryptic Store wearing gold headphones"
                className="relative w-full rounded-2xl border border-primary/20 shadow-2xl object-cover aspect-[3/4]"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                Meet the <span className="text-primary">Founder</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MC Mysterious — Hip Hop DJ, producer, and the creative force behind Cryptic Store. Where music culture, bold fashion, and mysticism converge.
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

      {/* Social Proof Section */}
      <SocialProof />

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            Trending Now
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4 rounded-full shadow-[0_0_10px_hsla(50,100%,50%,0.5)]" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Best selling magic & music apparel by DJ MC Mysterious
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

      {/* Collections Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
              Our <span className="text-primary">Collections</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4 rounded-full shadow-[0_0_10px_hsla(50,100%,50%,0.5)]" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore everything Cryptic Store has to offer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Collective */}
            <div className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-background to-primary/5 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsla(50,100%,50%,0.15)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Music className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground">The Collective</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Music, DJ services, audio engineering & artist promotion — the full entertainment experience by MC Mysterious.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">DJ Services</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">Music</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">Production</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="font-bold">
                    <Link to="/music">
                      Music
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 font-bold">
                    <Link to="/dj-services">
                      DJ Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* #YouKnowWeDoMagic */}
            <div className="group relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-background to-accent/5 p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_30px_hsla(260,80%,50%,0.15)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground">#YouKnowWeDoMagic</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Where sound meets spirit — spiritual accessories, potions, magewear & mystical services.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20">Spiritual</span>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20">Potions</span>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20">Magewear</span>
                </div>
                <Button asChild size="lg" className="font-bold">
                  <Link to="/youknowwedomagic">
                    Explore the Magic
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;