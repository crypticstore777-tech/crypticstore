import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Music, Mic2, PartyPopper, Volume2, Lightbulb, Calendar, ExternalLink } from "lucide-react";

const DJServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "name": "DJ Services by MC Myster?ous",
    "description": "Premium mobile DJ and entertainment services for weddings, corporate events, parties, and special occasions.",
    "url": "https://crypticstore.com/dj-services",
    "sameAs": ["https://MysteriousEnterprise.com"],
    "founder": {
      "@type": "Person",
      "name": "MC Myster?ous"
    },
    "areaServed": "United States",
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
        <title>DJ Services by MC Myster?ous | Premium Mobile DJ & Entertainment | Cryptic Store</title>
        <meta name="description" content="Book MC Myster?ous for your next event. Dream Dare Drip. Premium mobile DJ services for weddings, corporate events, parties & more. Professional sound systems & lighting. Book now at MysteriousEnterprise.com" />
        <meta name="keywords" content="DJ services, mobile DJ, wedding DJ, corporate DJ, MC Mysterious, party DJ, event entertainment, professional DJ, sound systems, lighting packages, Dream Dare Drip" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://crypticstore.com/dj-services" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DJ Services by MC Myster?ous | Premium Mobile DJ" />
        <meta property="og:description" content="Premium mobile DJ & entertainment services for unforgettable events. Book now at MysteriousEnterprise.com" />
        <meta property="og:url" content="https://crypticstore.com/dj-services" />
        <meta property="og:site_name" content="Cryptic Store" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DJ Services by MC Myster?ous" />
        <meta name="twitter:description" content="Premium mobile DJ & entertainment services. Book your event now!" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(50,100%,50%,0.1)_0%,transparent_70%)]" />
        
        <div className="relative container mx-auto px-4 text-center">
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
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
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
