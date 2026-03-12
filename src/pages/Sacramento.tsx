import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Music, Shirt, Sparkles, Crown, MapPin, Disc3, Star, ArrowRight } from "lucide-react";
import heroImg from "@/assets/sacramento-landing-hero.jpg";
import founderImg from "@/assets/mc-mysterious-founder.jpeg";
import logoGold from "@/assets/mc-mysterious-logo-gold.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const highlights = [
  {
    icon: Disc3,
    title: "Sacramento's Top DJ",
    description:
      "From weddings to Sacramento Kings watch parties, MC Myster?ous brings the energy. Professional sound, lighting & MC services across the Sacramento region.",
    link: "/dj-services",
    cta: "Book a Sacramento DJ",
  },
  {
    icon: Shirt,
    title: "Sacramento Streetwear Boutique",
    description:
      "Shop Dare2Wear & Imitable Lives — bold black-and-gold apparel designed in Sacramento. Sacramento Kings–inspired colorways and fearless graphic tees.",
    link: "/",
    cta: "Shop the Boutique",
  },
  {
    icon: Music,
    title: "Sacramento Music & Artist",
    description:
      "Original mixes, hip-hop productions & live sets rooted in Sacramento's vibrant music scene. Stream MC Myster?ous on every platform.",
    link: "/music",
    cta: "Listen Now",
  },
  {
    icon: Sparkles,
    title: "Spiritual Services in Sacramento",
    description:
      "Tarot, scrying, astrology & spiritual development — locally rooted mystical services. #YouKnowWeDoMagic",
    link: "/youknowwedomagic",
    cta: "Explore Services",
  },
];

const kingsConnections = [
  "Black & gold brand palette echoes Sacramento Kings heritage",
  "Event DJ for Sacramento Kings watch parties & fan gatherings",
  "Sacramento pride woven into every collection drop",
  "Supporting Sacramento's culture through music, fashion & community",
];

const Sacramento = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Cryptic Store — Mysterious Enterprise LLC",
    alternateName: "Cryptic Store Sacramento",
    description:
      "Sacramento's premier boutique, DJ service, and entertainment company. Streetwear, music, and spiritual services by artist DJ MC Myster?ous.",
    url: "https://crypticstore.lovable.app/sacramento",
    image: "https://crypticstore.lovable.app/favicon.jpg",
    telephone: "",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sacramento",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.5816,
      longitude: -121.4944,
    },
    areaServed: {
      "@type": "City",
      name: "Sacramento",
    },
    founder: {
      "@type": "Person",
      name: "MC Myster?ous",
      jobTitle: "DJ / Artist / Founder",
    },
    sameAs: MC_MYSTERIOUS_SOCIAL_PROFILES,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sacramento Services & Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Sacramento DJ Services" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sacramento Streetwear Boutique",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sacramento Music Production",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sacramento Spiritual Services",
          },
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          Sacramento DJ, Boutique & Artist | Cryptic Store — MC Myster?ous
        </title>
        <meta
          name="description"
          content="Sacramento's own Cryptic Store — boutique streetwear, DJ services, music & spiritual arts by artist MC Myster?ous. Sacramento Kings–inspired black & gold fashion. Book Sacramento's best DJ today."
        />
        <meta
          name="keywords"
          content="Sacramento DJ, Sacramento boutique, Sacramento artist, Sacramento music, Sacramento streetwear, Sacramento Kings fashion, Sacramento entertainment, Sacramento apparel, DJ Sacramento CA, best DJ Sacramento, Sacramento Kings events, MC Mysterious Sacramento, Cryptic Store Sacramento, Sacramento hip hop, Sacramento Kings culture"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://crypticstore.lovable.app/sacramento"
        />
        <meta
          name="geo.placename"
          content="Sacramento, California"
        />
        <meta name="geo.region" content="US-CA" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sacramento DJ, Boutique & Artist | Cryptic Store"
        />
        <meta
          property="og:description"
          content="Sacramento's premier boutique & DJ services by MC Myster?ous. Sacramento Kings–inspired streetwear. Book now."
        />
        <meta
          property="og:url"
          content="https://crypticstore.lovable.app/sacramento"
        />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sacramento DJ, Boutique & Artist | Cryptic Store"
        />
        <meta
          name="twitter:description"
          content="Sacramento's hottest boutique & DJ. Sacramento Kings culture meets streetwear."
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />

      {/* ─── Hero ─── */}
      <section className="relative h-[75vh] min-h-[520px] overflow-hidden">
        <img
          src={heroImg}
          alt="Sacramento skyline at golden hour — Cryptic Store hometown"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <motion.div
          className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-16 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <div className="inline-flex items-center gap-2 mx-auto px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary mb-5">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-bold tracking-wide">
              Sacramento, California
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-4">
            Sacramento's Own
            <span className="block text-primary drop-shadow-[0_0_30px_hsla(50,100%,50%,0.6)]">
              Cryptic Store
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            DJ services · streetwear boutique · music · spiritual arts — all
            rooted in Sacramento culture & Sacramento Kings pride
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 font-bold shadow-[0_0_30px_hsla(50,100%,50%,0.4)] hover:shadow-[0_0_40px_hsla(50,100%,50%,0.6)] transition-all"
            >
              <Link to="/dj-services">Book Sacramento DJ</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 font-bold border-primary/40 hover:bg-primary/10"
            >
              <Link to="/">Shop the Boutique</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            Everything Sacramento, One Brand
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_hsla(50,100%,50%,0.5)]" />
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            From the stage to the rack — MC Myster?ous brings Sacramento energy
            to every beat, stitch, and reading.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              custom={i}
            >
              <Card className="group h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-5">
                    {item.description}
                  </p>
                  <Button asChild variant="link" className="px-0 text-primary">
                    <Link to={item.link}>
                      {item.cta}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Sacramento Kings Culture ─── */}
      <section className="py-20 bg-gradient-to-r from-background via-primary/5 to-background border-y border-primary/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary mb-6">
                <Crown className="h-4 w-4" />
                <span className="text-sm font-bold tracking-wide">
                  Sacramento Kings Culture
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                Born & Built in{" "}
                <span className="text-primary">Sacramento</span>
              </h2>

              <p className="text-muted-foreground mb-8">
                Cryptic Store's black-and-gold DNA pays homage to Sacramento
                Kings heritage. Every drop, every set, every reading carries the
                spirit of Sactown.
              </p>

              <ul className="space-y-4">
                {kingsConnections.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i + 1}
                  >
                    <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Founder Image */}
            <div className="relative group flex flex-col items-center gap-4">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-primary/5 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500" />
              <img
                src={founderImg}
                alt="MC Myster?ous — Sacramento DJ, artist, and founder of Cryptic Store"
                className="relative w-full max-w-md rounded-2xl border-2 border-primary/20 shadow-2xl object-cover aspect-[3/4]"
                loading="lazy"
              />
              <img
                src={logoGold}
                alt="MC Myster?ous gold brand badge"
                className="relative w-16 h-16 rounded-full border-2 border-primary/30 shadow-[0_0_20px_hsla(50,100%,50%,0.3)] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Sacramento — Let's Make It Happen
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Book a DJ, shop apparel, or explore our services. Proudly
              Sacramento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-10 py-7 font-bold shadow-[0_0_30px_hsla(50,100%,50%,0.4)]"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 font-bold border-primary/40"
              >
                <Link to="/sync-hub">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sacramento;
