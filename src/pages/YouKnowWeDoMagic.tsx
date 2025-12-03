import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Mic2, Sparkles, Eye, Coins, Stars, Flame } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

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

  return (
    <>
      <Helmet>
        <title>#YouKnowWeDoMagic - Premium DJ, Audio Engineering & Spiritual Services | Myster?ous</title>
        <meta name="description" content="Myster?ous offers premium mobile DJ services, professional audio engineering, artist promotion, tarot readings, scrying, astrology insights, and spiritual development services." />
        <meta name="keywords" content="mobile DJ, audio engineering, tarot readings, scrying, astrology, spiritual services, event promotion, music production" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
          <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              #YouKnowWeDoMagic
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Myster?ous Services: Where Sound Meets Spirit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                Book Entertainment Services
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Schedule Spiritual Consultation
              </Button>
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

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Magic?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need professional entertainment or spiritual guidance, Myster?ous delivers extraordinary experiences
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
