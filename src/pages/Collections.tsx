import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Crown, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import dare2wearHero from "@/assets/dare2wear-collection-hero.jpg";
import imitableHero from "@/assets/imitable-lives-storefront.jpg";
import magicHero from "@/assets/youknowwedomagic-hero.jpg";

interface CollectionCard {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  to: string;
  icon: React.ElementType;
  cta: string;
  tags: string[];
}

const collections: CollectionCard[] = [
  {
    title: "Dare2Wear",
    subtitle: "Bold Streetwear",
    description:
      "Provocative statement pieces for those who refuse to blend in. Embrace confidence, defy conventions.",
    image: dare2wearHero,
    imageAlt:
      "Dare2Wear Collection — bold streetwear with leather jackets and vibrant accents",
    to: "/collections/dare2wear",
    icon: Flame,
    cta: "Shop Dare2Wear",
    tags: ["Streetwear", "Statement Tees", "Urban"],
  },
  {
    title: "Imitable Lives",
    subtitle: "Ancient Luxury · Modern Streetwear",
    description:
      "Inspired by Marc Anthony & Cleopatra. Egyptian mysticism meets cosmic science — premium graphic tees for those who live like royalty.",
    image: imitableHero,
    imageAlt:
      "Imitable Lives Collection — Egyptian-inspired luxury streetwear storefront",
    to: "/collections/imitable-lives",
    icon: Crown,
    cta: "Shop Imitable Lives",
    tags: ["Egyptian", "Premium", "Cosmic"],
  },
  {
    title: "#YouKnowWeDoMagic",
    subtitle: "Where Sound Meets Spirit",
    description:
      "DJ services, audio engineering, artist promotion, spiritual development & mystical services by MC Mysterious.",
    image: magicHero,
    imageAlt:
      "YouKnowWeDoMagic — spiritual and entertainment services by MC Mysterious",
    to: "/youknowwedomagic",
    icon: Sparkles,
    cta: "Explore the Magic",
    tags: ["DJ Services", "Spiritual", "Production"],
  },
];

const Collections = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://crypticstore.shop/collections#page",
        name: "All Collections — Cryptic Store",
        description:
          "Browse all Cryptic Store collections: Dare2Wear streetwear, Imitable Lives Egyptian luxury, and #YouKnowWeDoMagic services.",
        url: "https://crypticstore.shop/collections",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://crypticstore.shop/collections#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://crypticstore.shop",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Collections",
            item: "https://crypticstore.shop/collections",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          Collections — Dare2Wear, Imitable Lives & #YouKnowWeDoMagic | Cryptic
          Store
        </title>
        <meta
          name="description"
          content="Explore all Cryptic Store collections. Dare2Wear bold streetwear, Imitable Lives Egyptian luxury apparel, and #YouKnowWeDoMagic spiritual & entertainment services by Sacramento artist DJ MC Mysterious."
        />
        <meta
          name="keywords"
          content="Cryptic Store collections, Dare2Wear, Imitable Lives, YouKnowWeDoMagic, Sacramento streetwear, Sacramento boutique, DJ MC Mysterious, Egyptian streetwear, spiritual services Sacramento"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://crypticstore.shop/collections" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Collections — Cryptic Store | Sacramento Boutique"
        />
        <meta
          property="og:description"
          content="Browse all collections: Dare2Wear streetwear, Imitable Lives Egyptian luxury, and #YouKnowWeDoMagic services."
        />
        <meta
          property="og:url"
          content="https://crypticstore.shop/collections"
        />
        <meta property="og:site_name" content="Cryptic Store" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Collections — Cryptic Store"
        />
        <meta
          name="twitter:description"
          content="Dare2Wear · Imitable Lives · #YouKnowWeDoMagic. Explore all collections."
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero / Header */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(43,80%,40%,0.1)_0%,transparent_70%)]" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-4 text-white tracking-tight">
            Our <span className="text-primary">Collections</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Streetwear, ancient luxury & magic — explore everything Cryptic
            Store has to offer.
          </p>
        </div>
      </section>

      {/* Collection Cards */}
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-10 md:gap-14 max-w-5xl mx-auto">
          {collections.map((collection) => (
            <Link
              key={collection.to}
              to={collection.to}
              className="group block"
              aria-label={`Browse the ${collection.title} collection`}
            >
              <article className="relative overflow-hidden rounded-2xl border border-primary/15 bg-card hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_hsla(50,100%,50%,0.12)]">
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent md:hidden" />
                  </div>

                  {/* Content */}
                  <div className="relative flex flex-col justify-center p-8 md:p-10 lg:p-14">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                        <collection.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase text-primary">
                        {collection.subtitle}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {collection.title}
                    </h2>

                    <p className="text-muted-foreground mb-6 leading-relaxed text-base md:text-lg">
                      {collection.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {collection.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div>
                      <Button
                        size="lg"
                        className="font-bold shadow-[0_0_20px_hsla(50,100%,50%,0.3)] group-hover:shadow-[0_0_30px_hsla(50,100%,50%,0.5)] transition-all pointer-events-none"
                      >
                        {collection.cta}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
