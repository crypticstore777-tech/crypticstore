import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductsByCollection, type ShopifyProduct } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Mic2, Sparkles, Eye, Coins, Stars, Flame } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import heroImage from "@/assets/youknowwedomagic-hero.jpg";
import moonlitPortrait from "@/assets/mc-mysterious-moonlit-1.jpeg";

const YouKnowWeDoMagic = () => {
  const entertainmentServices = [
    {
      icon: Music,
      title: "Premium Mobile DJ",
      description: "Elevate your events with professional DJ services for weddings, corporate events, parties, and more.",
      features: ["Custom playlists", "Professional sound systems", "Lighting packages", "MC services"]
    },
    {
      icon: Mic2,
      title: "Audio Engineering",
      description: "Studio-quality recording, mixing, and mastering for artists and content creators.",
      features: ["Recording sessions", "Mix & master", "Sound design", "Post-production"]
    },
    {
      icon: Sparkles,
      title: "Artist & Event Promotion",
      description: "Strategic promotion and marketing to amplify your reach and grow your audience.",
      features: ["Social media campaigns", "Event marketing", "Brand development", "Content creation"]
    }
  ];

  const spiritualServices = [
    {
      icon: Eye,
      title: "High-Level Divination",
      description: "Deep tarot readings revealing hidden truths and illuminating your path forward.",
      color: "text-purple-400"
    },
    {
      icon: Stars,
      title: "Scrying Services",
      description: "Ancient art of crystal gazing to locate lost objects and reveal hidden knowledge.",
      color: "text-blue-400"
    },
    {
      icon: Coins,
      title: "Quick Cash Potions",
      description: "Mystical prosperity work to open doors and attract financial opportunities.",
      color: "text-yellow-400"
    },
    {
      icon: Flame,
      title: "Deep Astrology Insights",
      description: "Comprehensive natal chart readings and cosmic guidance for all zodiac signs.",
      color: "text-orange-400"
    }
  ];

  // Fetch YouKnowWeDoMagic tagged products + spiritual partner products
  const { data: magicProducts, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products', 'youknowwedomagic-all'],
    queryFn: async () => {
      const [tagged, collective] = await Promise.all([
        getProductsByCollection('YouKnowWeDoMagic', 50),
        getProducts(50, 'tag:"Shopify Collective"'),
      ]);
      // Merge and deduplicate; exclude streetwear partners (Niepce)
      const seen = new Set<string>();
      const merged: ShopifyProduct[] = [];
      for (const p of [...tagged, ...collective]) {
        if (!seen.has(p.node.id) && !p.node.tags.includes('Niepce')) {
          seen.add(p.node.id);
          merged.push(p);
        }
      }
      return merged;
    },
  });

  return (
    <>
      <Helmet>
        <title>You Know We Do Magic | Cryptic Store</title>
        <meta name="description" content="Explore mystical & spiritual products at Cryptic Store Sacramento. Curated magic, crystals & spiritual lifestyle." />
        <meta name="keywords" content="Sacramento DJ services, Sacramento music services, Sacramento artist, Sacramento entertainment, Sacramento spiritual services, Sacramento tarot, Sacramento mobile DJ, audio engineering Sacramento, Sacramento Kings events, Dream Dare Drip, Youknowwedomagic" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://crypticstore.lovable.app/youknowwedomagic" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="#YouKnowWeDoMagic - Sacramento DJ, Music & Spiritual Services" />
        <meta property="og:description" content="Sacramento's premier DJ, music & spiritual services by MC Mysterious. #Youknowwedomagic" />
        <meta property="og:url" content="https://crypticstore.lovable.app/youknowwedomagic" />
        <meta property="og:site_name" content="Cryptic Store" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="#YouKnowWeDoMagic - Dream Dare Drip" />
        <meta name="twitter:description" content="Premium DJ, audio engineering & spiritual services. Dream Dare Drip. #Youknowwedomagic" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
          <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                #YouKnowWeDoMagic
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
                Mysterious Services: Where Sound Meets Spirit
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg">
                  Book Entertainment Services
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Schedule Spiritual Consultation
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
                <Button variant="secondary" size="lg" className="gap-2">
                  <Sparkles className="w-5 h-5" />
                  Spiritual Accessories
                </Button>
                <Button variant="secondary" size="lg" className="gap-2">
                  <Flame className="w-5 h-5" />
                  Potions Master
                </Button>
                <Button variant="secondary" size="lg" className="gap-2">
                  <Stars className="w-5 h-5" />
                  Magewear
                </Button>
              </div>
            </div>

            <div className="flex-1 flex justify-center gap-4">
              <div className="relative w-56 md:w-72 rounded-2xl overflow-hidden shadow-[0_0_40px_hsla(50,100%,50%,0.3)] border-2 border-primary/30">
                <img 
                  src={heroImage} 
                  alt="Mysterious - Premium entertainment and spiritual services" 
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
              <div className="relative w-56 md:w-72 rounded-2xl overflow-hidden shadow-[0_0_30px_hsla(260,80%,50%,0.2)] border-2 border-accent/30 hidden sm:block mt-8">
                <img 
                  src={moonlitPortrait} 
                  alt="MC Mysterious moonlit portrait" 
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Entertainment Services */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Entertainment & Production</h2>
              <p className="text-xl text-muted-foreground">Professional services for artists, events, and audio excellence</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {entertainmentServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="w-12 h-12 mb-4 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Spiritual Services */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Spiritual Development</h2>
              <p className="text-xl text-muted-foreground">Ancient wisdom meets modern insight</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {spiritualServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br from-background to-secondary/10">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <service.icon className={`w-10 h-10 ${service.color}`} />
                      <div>
                        <CardTitle className="mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardHeader>
                  <CardTitle className="text-2xl">All Zodiac Signs Welcome</CardTitle>
                  <CardDescription className="text-base">
                    Personalized readings for Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Spiritual Products Section */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mystical <span className="text-primary">Products</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-4 rounded-full shadow-[0_0_10px_hsla(50,100%,50%,0.5)]" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Spiritual accessories, incense, crystals, candles & more — curated for the mystic in you
              </p>
            </div>

            {isLoadingProducts ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="aspect-square w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </div>
            ) : magicProducts && magicProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {magicProducts.map((product) => (
                  <ProductCard key={product.node.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Sparkles className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Mystical products coming soon...</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Magic?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need professional entertainment or spiritual guidance, Mysterious delivers extraordinary experiences
            </p>
            <Button size="lg" className="text-lg" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default YouKnowWeDoMagic;
