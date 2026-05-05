import { Star, Calendar, MapPin, Trophy, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  {
    icon: Calendar,
    value: "128+",
    label: "Events Booked",
    sublabel: "on GigSalad",
  },
  {
    icon: Star,
    value: "5★",
    label: "Top Rated",
    sublabel: "DJ in Sacramento",
  },
  {
    icon: MapPin,
    value: "SAC",
    label: "Sacramento",
    sublabel: "born & based",
  },
  {
    icon: Trophy,
    value: "10+",
    label: "Years",
    sublabel: "of entertainment",
  },
];

export const SocialProof = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            Trusted by <span className="text-primary">Sacramento</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4 rounded-full shadow-[0_0_10px_hsla(50,100%,50%,0.5)]" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From weddings to corporate events — MC Mysterious delivers the magic every time
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative group text-center p-6 rounded-2xl border border-primary/10 bg-card/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_hsla(50,100%,50%,0.1)]"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-black text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Review / CTA */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-primary/5 p-8 md:p-10">
            {/* Decorative quote marks */}
            <div className="absolute top-4 left-6 text-6xl text-primary/10 font-serif leading-none select-none">"</div>
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-foreground text-center leading-relaxed mb-6 italic">
                MC Mysterious brings incredible energy to every event. Professional, reliable, and always knows how to read the crowd. Sacramento's best kept secret in entertainment.
              </blockquote>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-6">
                  — Verified reviews on GigSalad
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10 font-semibold">
                    <a
                      href="https://www.gigsalad.com/mc_mysterious_sacramento"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Reviews on GigSalad
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild className="font-semibold">
                    <a href="/dj-services">
                      Book MC Mysterious
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
