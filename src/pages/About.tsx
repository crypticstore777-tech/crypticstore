import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Music, Shirt, Sparkles, Mic } from "lucide-react";
import mcStudio from "@/assets/mc-mysterious-studio.jpeg";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Cryptic Store & MC Myster?ous",
    description: "Learn about Cryptic Store, the streetwear brand founded by Hip Hop DJ MC Myster?ous. Where music, fashion, and mysticism converge.",
    url: "https://crypticstore.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "Cryptic Store",
      founder: {
        "@type": "Person",
        name: "MC Myster?ous",
        jobTitle: "Hip Hop DJ / Founder"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About MC Myster?ous & Cryptic Store | Streetwear, Music & Magic</title>
        <meta name="description" content="Meet MC Myster?ous — Hip Hop DJ, streetwear designer, and founder of Cryptic Store. Where music culture, bold fashion, and mysticism converge. #Youknowwedomagic" />
        <meta name="keywords" content="MC Mysterious, Cryptic Store founder, hip hop DJ, streetwear designer, urban fashion brand, music culture, Youknowwedomagic" />
        <link rel="canonical" href="https://crypticstore.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About MC Myster?ous & Cryptic Store" />
        <meta property="og:description" content="Meet MC Myster?ous — Hip Hop DJ, streetwear designer, and founder of Cryptic Store." />
        <meta property="og:url" content="https://crypticstore.com/about" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 to-primary/10 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
              <img
                src={mcStudio}
                alt="MC Myster?ous in the recording studio with arms crossed, wearing a graphic tee"
                className="relative w-full rounded-2xl border border-primary/20 shadow-2xl object-cover aspect-[3/4]"
                loading="eager"
              />
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

      <Footer />
    </div>
  );
};

export default About;
