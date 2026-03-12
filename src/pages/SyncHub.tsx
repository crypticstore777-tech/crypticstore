import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Disc3, Sparkles, Mail } from "lucide-react";
import heroImg from "@/assets/sync-hub-hero.jpg";

const services = [
  {
    title: "DJ Services",
    description: "Premium Mobile DJ for weddings, corporate events, and private parties. Professional sound and lighting.",
    icon: Disc3,
    to: "/dj-services",
    cta: "Book a DJ",
  },
  {
    title: "Music",
    description: "Original productions, studio sessions, and music releases. Explore the sound of Mysterious Enterprise.",
    icon: Music,
    to: "/music",
    cta: "Listen Now",
  },
  {
    title: "#YouKnowWeDoMagic",
    description: "Tarot readings, scrying, astrology insights, and spiritual development services.",
    icon: Sparkles,
    to: "/youknowwedomagic",
    cta: "Explore Services",
  },
  {
    title: "Contact",
    description: "Ready to book? Have questions? Reach out and let's make something happen.",
    icon: Mail,
    to: "/contact",
    cta: "Get in Touch",
  },
];

const SyncHub = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 px-4 text-center bg-card border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Sync Hub
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            All of our services in one place — DJ, music, spiritual arts, and more. Find what you need and let's create something extraordinary.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="container mx-auto px-4 py-16 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg hover:border-primary/40 transition-all duration-300">
              <CardHeader className="items-center text-center">
                <div className="mb-3 rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild>
                  <Link to={service.to}>{service.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SyncHub;
