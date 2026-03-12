import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Music, Mic2, PartyPopper, Volume2, Lightbulb, Calendar, ExternalLink } from "lucide-react";
import djHeroImage from "@/assets/dj-services-hero.jpeg";
import weddingDancing from "@/assets/dj-wedding-dancing.jpeg";
import weddingParty from "@/assets/dj-wedding-party.jpeg";
import logoGold from "@/assets/mc-mysterious-logo-gold.jpeg";
import { MC_MYSTERIOUS_SOCIAL_PROFILES } from "@/lib/seo-constants";

const DJServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "name": "DJ Services by MC Myster?ous",
    "description": "Sacramento's premier mobile DJ and entertainment services for weddings, corporate events, parties, and special occasions. Best DJ in Sacramento CA.",
    "url": "https://crypticstore.com/dj-services",
    "sameAs": MC_MYSTERIOUS_SOCIAL_PROFILES,
    "founder": {
      "@type": "Person",
      "name": "MC Myster?ous"
    },
    "areaServed": {"@type": "City", "name": "Sacramento", "containedInPlace": {"@type": "State", "name": "California"}},
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "DJ Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile DJ" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding DJ" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Events" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MC Services" } }
      ]
    }
  };

  const services = [
    { icon: Music, title: "Mobile DJ", description: "Professional DJ services for any venue or event" },
    { icon: Calendar, title: "Weddings & Corporate", description: "Elegant entertainment for special occasions" },
    { icon: PartyPopper, title: "Club & Parties", description: "High-energy sets that keep the crowd moving" },
    { icon: Mic2, title: "MC Services", description: "Professional hosting and announcements" },
    { icon: Volume2, title: "Sound Systems", description: "Top-tier professional audio equipment" },
    { icon: Lightbulb, title: "Lighting Packages", description: "Dynamic lighting to set the mood" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sacramento DJ Services | MC Myster?ous - Best Mobile DJ Sacramento CA | Cryptic Store</title>
        <meta name="description" content="Best DJ in Sacramento CA. Book MC Myster?ous for weddings, corporate events, parties & more. Sacramento's top mobile DJ with professional sound systems & lighting. Sacramento Kings events welcome. Book now at MysteriousEnterprise.com" />
        <meta name="keywords" content="Sacramento DJ, DJ Sacramento CA, best DJ Sacramento, Sacramento wedding DJ, Sacramento mobile DJ, Sacramento corporate DJ, Sacramento party DJ, MC Mysterious, Sacramento event entertainment, Sacramento Kings DJ, professional DJ Sacramento, DJ services Sacramento California, Dream Dare Drip" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://crypticstore.com/dj-services" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sacramento DJ Services | MC Myster?ous - Best Mobile DJ" />
        <meta property="og:description" content="Sacramento's best mobile DJ & entertainment services. Weddings, corporate events, parties. Book now at MysteriousEnterprise.com" />
        <meta property="og:url" content="https://crypticstore.com/dj-services" />
        <meta property="og:site_name" content="Cryptic Store" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sacramento DJ Services | MC Myster?ous" />
        <meta name="twitter:description" content="Sacramento's best mobile DJ & entertainment services. Weddings, parties, corporate events. Book now!" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(50,100%,50%,0.1)_0%,transparent_70%)]" />
        
        <div className="relative container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6 border border-primary/40">
              <Music className="h-4 w-4" />
              <span className="text-sm font-bold tracking-wide">Entertainment Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-foreground">
              DJ Services
              <span className="block text-primary drop-shadow-[0_0_30px_hsla(50,100%,50%,0.6)]">
                by MC Myster?ous
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
              Premium mobile DJ & entertainment services for unforgettable events
            </p>
            
            <Button 
              asChild 
              size="lg" 
              className="text-lg px-10 py-7 font-bold shadow-[0_0_30px_hsla(50,100%,50%,0.4)] hover:shadow-[0_0_40px_hsla(50,100%,50%,0.6)] transition-all"
            >
              <a href="https://MysteriousEnterprise.com" target="_blank" rel="noopener noreferrer">
                Book Now at MysteriousEnterprise.com
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="flex-1 flex flex-col items-center gap-6">
            <div className="relative w-72 md:w-96 rounded-2xl overflow-hidden shadow-[0_0_40px_hsla(50,100%,50%,0.3)] border-2 border-primary/30">
              <img 
                src={djHeroImage} 
                alt="MC Myster?ous - Professional DJ and entertainment services" 
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            <img
              src={logoGold}
              alt="MC Myster?ous gold hexagon brand badge"
              className="w-20 h-20 rounded-full border-2 border-primary/30 shadow-[0_0_20px_hsla(50,100%,50%,0.3)] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">Our Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_hsla(50,100%,50%,0.5)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Wedding Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">Wedding Entertainment</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_hsla(50,100%,50%,0.5)]" />
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Making your special day unforgettable with the perfect music, energy, and vibes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_20px_hsla(50,100%,50%,0.15)] hover:shadow-[0_0_30px_hsla(50,100%,50%,0.3)] transition-all duration-300 group">
            <img
              src={weddingDancing}
              alt="Wedding guests dancing at outdoor reception with DJ MC Myster?ous"
              className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_20px_hsla(50,100%,50%,0.15)] hover:shadow-[0_0_30px_hsla(50,100%,50%,0.3)] transition-all duration-300 group">
            <img
              src={weddingParty}
              alt="Bridal party group photo at wedding event"
              className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-background via-primary/10 to-background border-y border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            Ready to Make Your Event Unforgettable?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Let MC Myster?ous bring the magic to your next event
          </p>
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-10 py-7 font-bold shadow-[0_0_30px_hsla(50,100%,50%,0.4)] hover:shadow-[0_0_40px_hsla(50,100%,50%,0.6)] transition-all"
          >
            <a href="https://MysteriousEnterprise.com" target="_blank" rel="noopener noreferrer">
              Visit MysteriousEnterprise.com
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DJServices;
