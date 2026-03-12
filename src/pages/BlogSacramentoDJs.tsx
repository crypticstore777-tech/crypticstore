import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Disc3, MapPin, Star, Music, PartyPopper, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import heroImg from "@/assets/blog-sacramento-djs.jpg";

const BlogSacramentoDJs = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Best DJs in Sacramento: The Ultimate Guide to Sacramento's DJ Scene",
    description: "Discover the best DJs in Sacramento CA. From weddings and corporate events to clubs and private parties — Sacramento's top mobile DJs and entertainment.",
    author: { "@type": "Person", name: "MC Myster?ous", sameAs: MC_MYSTERIOUS_SOCIAL_PROFILES },
    publisher: { "@type": "Organization", name: "Cryptic Store", sameAs: MC_MYSTERIOUS_SOCIAL_PROFILES },
    datePublished: "2026-03-10",
    keywords: "best DJs Sacramento, Sacramento DJ, Sacramento wedding DJ, Sacramento mobile DJ, Sacramento party DJ, top DJs Sacramento CA, MC Mysterious",
  };

  return (
    <>
      <Helmet>
        <title>Best DJs in Sacramento CA — Top Mobile DJ Guide 2026 | Cryptic Store Blog</title>
        <meta name="description" content="Looking for the best DJ in Sacramento? Our guide covers Sacramento's top DJs for weddings, parties, corporate events & Kings watch parties. Book MC Myster?ous today." />
        <meta name="keywords" content="best DJs Sacramento, Sacramento DJ, Sacramento wedding DJ, top DJ Sacramento CA, mobile DJ Sacramento, Sacramento party DJ, Sacramento corporate DJ, Sacramento Kings DJ, MC Mysterious Sacramento, hire DJ Sacramento" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://crypticstore.lovable.app/blog/best-djs-sacramento" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Best DJs in Sacramento CA — Top Mobile DJ Guide 2026" />
        <meta property="og:description" content="Sacramento's best DJs for weddings, parties & events. Book now." />
        <meta property="og:url" content="https://crypticstore.lovable.app/blog/best-djs-sacramento" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best DJs in Sacramento CA" />
        <meta name="twitter:description" content="The ultimate guide to Sacramento's top DJs." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
          <img src={heroImg} alt="Sacramento DJ performing live with gold stage lighting" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-10">
            <Link to="/blog" className="inline-flex items-center gap-1 text-primary mb-4 hover:underline text-sm font-bold">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary mb-4 w-fit">
              <MapPin className="h-3.5 w-3.5" />
              <span className="text-xs font-bold tracking-wide">Sacramento, CA</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              Best DJs in <span className="text-primary">Sacramento</span>
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">March 2026 · 8 min read</p>
          </div>
        </section>

        {/* Content */}
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Sacramento's entertainment scene is booming — and at the heart of every unforgettable event is a great DJ. Whether you're planning a <strong>Sacramento wedding</strong>, a corporate gala downtown, a Kings watch party, or a private celebration, finding the right DJ can make or break your night.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 flex items-center gap-3">
            <Disc3 className="h-7 w-7 text-primary" />
            What Makes a Great Sacramento DJ?
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The best DJs in Sacramento aren't just track-spinners — they're entertainers, crowd-readers, and energy architects. A top-tier Sacramento mobile DJ brings:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Professional-grade sound systems tuned to any venue size",
              "Dynamic lighting packages that transform spaces",
              "MC and hosting skills that keep the crowd engaged",
              "Deep knowledge of Sacramento's music culture — from hip hop to hyphy",
              "Reliability and professionalism for Sacramento weddings and corporate events",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <Separator className="my-10" />

          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 flex items-center gap-3">
            <Music className="h-7 w-7 text-primary" />
            Sacramento's DJ Scene: A Rich History
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Sacramento has always been a melting pot of music culture. From the legendary hip hop scene that gave rise to artists like Mozzy and Brotha Lynch Hung, to the thriving club and festival circuit — Sacramento DJs carry a unique energy that blends West Coast flavor with capital city swagger.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The city's connection to the <strong>Sacramento Kings</strong> amplifies the entertainment scene even further. Game nights, watch parties, and post-game celebrations all demand DJs who understand Sacramento's pulse — the pride, the energy, and the culture.
          </p>

          <Separator className="my-10" />

          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 flex items-center gap-3">
            <PartyPopper className="h-7 w-7 text-primary" />
            Types of Events Sacramento DJs Cover
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: "Weddings", desc: "Ceremony, cocktail hour, reception — seamless transitions all night" },
              { title: "Corporate Events", desc: "Galas, conferences, team celebrations with professional polish" },
              { title: "Private Parties", desc: "Birthdays, anniversaries, house parties with custom playlists" },
              { title: "Club Nights", desc: "High-energy sets for Sacramento's nightlife venues" },
              { title: "Kings Watch Parties", desc: "Sacramento Kings game nights with hype and crowd energy" },
              { title: "Festivals & Pop-ups", desc: "Outdoor stages and Sacramento community events" },
            ].map((event) => (
              <div key={event.title} className="p-4 rounded-xl bg-card border border-border">
                <h3 className="font-bold text-foreground mb-1">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.desc}</p>
              </div>
            ))}
          </div>

          <Separator className="my-10" />

          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
            MC Myster?ous: Sacramento's Own
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            When it comes to Sacramento DJs who bring the full package — music, energy, professionalism, and that unmistakable Sactown swagger — <strong>MC Myster?ous</strong> stands out. As the founder of Cryptic Store and Mysterious Enterprise LLC, MC Myster?ous isn't just a DJ — he's a Sacramento artist, boutique owner, and cultural force.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            With premium sound systems, custom lighting, and MC skills honed across countless Sacramento events, MC Myster?ous delivers the kind of experience that turns a good event into an unforgettable one. From intimate Sacramento weddings to high-energy Kings celebrations, every set is tailored to the moment.
          </p>

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-center">
            <h3 className="text-2xl font-black text-foreground mb-2">Ready to Book Sacramento's Best DJ?</h3>
            <p className="text-muted-foreground mb-6">Get in touch with MC Myster?ous for your next Sacramento event.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="font-bold shadow-[0_0_20px_hsla(50,100%,50%,0.3)]">
                <Link to="/dj-services">View DJ Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold border-primary/40">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogSacramentoDJs;
