import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { InstagramReels } from "@/components/InstagramReels";
import { Helmet } from "react-helmet";
import { Music, Shirt, Sparkles, Mic } from "lucide-react";
import { MC_MYSTERIOUS_SOCIAL_PROFILES } from "@/lib/seo-constants";
import mcStudio from "@/assets/mc-mysterious-studio.jpeg";
import moonlitPortrait2 from "@/assets/mc-mysterious-moonlit-2.jpeg";
import logoBadge from "@/assets/mc-mysterious-logo-badge.jpeg";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Cryptic Store & MC Myster?ous",
    description: "Sacramento boutique founded by Hip Hop DJ & artist MC Myster?ous. Where Sacramento music, fashion, and mysticism converge. Sacramento Kings culture.",
    url: "https://crypticstore.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "Cryptic Store",
      founder: {
        "@type": "Person",
        name: "MC Myster?ous",
        jobTitle: "Sacramento Hip Hop DJ / Artist / Boutique Owner",
        sameAs: MC_MYSTERIOUS_SOCIAL_PROFILES,
      },
      sameAs: MC_MYSTERIOUS_SOCIAL_PROFILES
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About MC Myster?ous | Sacramento DJ, Artist & Boutique Owner | Cryptic Store</title>
        <meta name="description" content="Meet MC Myster?ous — Sacramento's own Hip Hop DJ, artist, streetwear designer & boutique owner. Founder of Cryptic Store. Sacramento Kings culture, music & bold fashion converge. #Youknowwedomagic" />
        <meta name="keywords" content="MC Mysterious Sacramento, Sacramento DJ, Sacramento artist, Sacramento boutique owner, Sacramento streetwear designer, Sacramento hip hop, Sacramento Kings, Cryptic Store founder, Sacramento music, Sacramento entertainment, Youknowwedomagic" />
        <link rel="canonical" href="https://crypticstore.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About MC Myster?ous | Sacramento DJ, Artist & Boutique Owner" />
        <meta property="og:description" content="Meet MC Myster?ous — Sacramento's own Hip Hop DJ, artist, and founder of Cryptic Store boutique." />
        <meta property="og:url" content="https://crypticstore.com/about" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 to-primary/10 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
                <img
                  src={mcStudio}
                  alt="MC Myster?ous wearing gold headphones with Cryptic Store logo and treasure chest"
                  className="relative w-full rounded-2xl border border-primary/20 shadow-2xl object-cover aspect-[3/4]"
                  loading="eager"
                />
              </div>
              <div className="flex justify-center py-2">
                <img
                  src={logoBadge}
                  alt="MC Myster?ous brand badge logo"
                  className="w-24 h-24 rounded-full border-2 border-primary/30 shadow-[0_0_20px_hsla(50,100%,50%,0.3)] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 to-accent/5 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
                <img
                  src={moonlitPortrait2}
                  alt="MC Myster?ous moonlit portrait"
                  className="relative w-full rounded-2xl border border-accent/20 shadow-xl object-cover aspect-[3/4]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/40">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-bold tracking-wider uppercase">The Founder</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
                MC <span className="text-primary">MYSTER?OUS</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Hip Hop DJ, producer, and creative visionary — MC Myster?ous built Cryptic Store 
                at the intersection of music culture, streetwear fashion, and mysticism. Every design 
                tells a story, every beat carries a message.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                From spinning records at legendary venues to crafting apparel that speaks to the soul, 
                Cryptic Store is more than a brand — it's a movement. Rooted in ancient symbolism 
                and modern street culture, we create for those who refuse to blend in.
              </p>

              <p className="text-xl font-bold text-primary tracking-wide">
                #Youknowwedomagic
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full shadow-[0_0_10px_hsla(50,100%,50%,0.5)]" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shirt, title: "Streetwear", desc: "Bold collections like Dare2Wear and Imitable Lives — apparel that makes a statement." },
              { icon: Music, title: "Music", desc: "Original productions and DJ sets spanning hip hop, R&B, and beyond." },
              { icon: Mic, title: "DJ Services", desc: "Professional DJ entertainment for weddings, clubs, and private events." },
              { icon: Sparkles, title: "Mysticism", desc: "Spiritual guidance, tarot, and energy work rooted in ancient traditions." },
            ].map((item) => (
              <div key={item.title} className="text-center space-y-4 p-6 rounded-2xl bg-background border border-border hover:border-primary/40 transition-colors">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Cryptic Store exists to empower individuals through fashion that speaks, 
            music that moves, and experiences that transform. We believe in the power 
            of self-expression, the magic of creativity, and the courage it takes to 
            stand out in a world that wants you to fit in.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dream. Dare. Drip. That's not just a slogan — it's a way of life.
          </p>
        </div>
      </section>

      {/* Instagram Reels */}
      <InstagramReels />

      <Footer />
    </div>
  );
};

export default About;
