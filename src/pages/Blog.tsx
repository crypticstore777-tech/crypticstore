import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, ArrowRight, Music, Crown, Eye, Disc3, Shirt, Flame, Wheat, Moon, Users, Leaf, Key } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import djHeroImage from "@/assets/dj-services-hero.jpeg";
import empathsImage from "@/assets/empaths-indigo-hero.jpg";
import sacDjsImage from "@/assets/blog-sacramento-djs.jpg";
import sacStreetwearImage from "@/assets/blog-sacramento-streetwear.jpg";
import ariesImage from "@/assets/blog-aries-zodiac.jpg";
import leoImage from "@/assets/blog-leo-zodiac.jpg";
import virgoImage from "@/assets/blog-virgo-zodiac.jpg";
import libraImage from "@/assets/blog-libra-zodiac.jpg";
import chroniclesHero from "@/assets/chronicles-hero.jpg";
import marieLaveauEmblem from "@/assets/marie-laveau-truth-emblem.jpg";
import cancerImage from "@/assets/blog-cancer-hero.jpg";
import geminiImage from "@/assets/blog-gemini-zodiac.jpg";
import taurusImage from "@/assets/blog-taurus-zodiac.jpg";
import papaLegbaImage from "@/assets/blog-papa-legba.jpg";

const blogPosts = [
{
  title: "Libra: The Weighing of the Heart — Hidden Secrets & September vs October Differences",
  description: "The ultimate Libra deep dive. The claws Libra was carved from, the only green star visible to the naked eye, the scales of Ma'at, decan breakdowns, and the real differences between September Libra and October Libra.",
  path: "/blog/libra-zodiac",
  image: libraImage,
  icon: Scale,
  date: "August 2026",
  color: "primary",
  glow: "hsla(340,60%,55%,0.35)"
},
{
  title: "Virgo: The Sacred Harvest — Hidden Secrets & August vs September Differences",
  description: "The ultimate Virgo deep dive. The star Spica, the wheat-maiden myth of Astraea and Isis, rare cosmic facts, decan breakdowns, and the real differences between August Virgo and September Virgo.",
  path: "/blog/virgo-zodiac",
  image: virgoImage,
  icon: Wheat,
  date: "August 2026",
  color: "primary",
  glow: "hsla(150,60%,45%,0.35)"
},
{
  title: "Leo: The Solar Lion — Hidden Secrets & July vs August Differences",
  description: "The ultimate Leo deep dive. Rare cosmic facts, the royal star Regulus, ancient lion mythology, decan breakdowns, and the real differences between July Leo and August Leo.",
  path: "/blog/leo-zodiac",
  image: leoImage,
  icon: Crown,
  date: "August 2026",
  color: "primary",
  glow: "hsla(45,100%,50%,0.35)"
},
{
  title: "Cancer: The Moon Child — Rare Facts, Decans & Lunar Magick",
  description: "The ultimate Cancer deep dive. Karkinos myth, the Beehive Cluster (M44), the Tropic of Cancer origin, Moon magick, decans, and famous Cancers led by Missy Elliott.",
  path: "/blog/cancer-zodiac",
  image: cancerImage,
  icon: Moon,
  date: "June 2026",
  color: "primary",
  glow: "hsla(210,60%,60%,0.35)"
},
{
  title: "Gemini: The Cosmic Twins — Rare Facts, Decans & Mercury Magick",
  description: "An accurate, lengthy Gemini deep dive. Castor & Pollux mythology, the Geminids meteor shower from asteroid 3200 Phaethon, decans, and the truth about the 'two-faced' label.",
  path: "/blog/gemini-zodiac",
  image: geminiImage,
  icon: Users,
  date: "May 2026",
  color: "primary",
  glow: "hsla(50,100%,50%,0.3)"
},
{
  title: "Aries: The Cosmic Ram — Deep Secrets & March vs April Differences",
  description: "The ultimate Aries deep dive. Rare cosmic facts, ancient mythology, decan breakdowns, and the powerful differences between March Aries and April Aries.",
  path: "/blog/aries-zodiac",
  image: ariesImage,
  icon: Flame,
  date: "April 2026",
  color: "primary",
  glow: "hsla(0,80%,50%,0.3)"
},
{
  title: "Taurus: The Cosmic Bull — Money Sign, Loyalty & Misunderstood Horns",
  description: "The ultimate Taurus deep dive. Why Taurus is the money sign, food as love, legendary loyalty, decans, and why Beyoncé's 'Six Inch' is pure Taurus energy.",
  path: "/blog/taurus-zodiac",
  image: taurusImage,
  icon: Leaf,
  date: "April 2026",
  color: "primary",
  glow: "hsla(140,50%,40%,0.3)"
},
{
  title: "Papa Legba: The Gatekeeper, Trickster & Father — True History of Vodun",
  description: "Restoring the accurate history of Vodun (One Source). Papa Legba as gatekeeper of the spirits, the Orishas in the Haitian Revolution, and the spiritual gifts of African descendants.",
  path: "/blog/papa-legba-vodun-history",
  image: papaLegbaImage,
  icon: Key,
  date: "April 2026",
  color: "purple-500",
  glow: "hsla(280,60%,40%,0.35)"
},
{
  title: "Best DJs in Sacramento: The Ultimate Guide",
  description: "Discover the best DJs in Sacramento CA for weddings, parties, corporate events & Sacramento Kings watch parties. Your complete guide to Sacramento's DJ scene.",
  path: "/blog/best-djs-sacramento",
  image: sacDjsImage,
  icon: Disc3,
  date: "March 2026",
  color: "primary",
  glow: "hsla(50,100%,50%,0.3)"
},
{
  title: "Sacramento Streetwear Boutiques: Best Urban Fashion in Sac",
  description: "Explore Sacramento's best streetwear boutiques and urban apparel. Bold graphic tees, Sacramento Kings–inspired fashion, and local brands making waves.",
  path: "/blog/sacramento-streetwear-boutiques",
  image: sacStreetwearImage,
  icon: Shirt,
  date: "March 2026",
  color: "primary",
  glow: "hsla(50,100%,50%,0.3)"
},
{
  title: "At the Crossroads: The Mysterious Connection Between Magic and Music",
  description: "From Robert Johnson's legendary crossroads deal to ancient shamanic traditions — explore the mystical bond between sound and spirit.",
  path: "/blog/crossroads-magic-music",
  image: djHeroImage,
  icon: Music,
  date: "January 2025",
  color: "primary",
  glow: "hsla(50,100%,50%,0.3)"
},
{
  title: "Marie Laveau: The Voodoo Queen of New Orleans",
  description: "The true history of New Orleans' most powerful spiritual figure — healer, herbalist, and community leader who shaped American spirituality.",
  path: "/blog/marie-laveau",
  image: marieLaveauEmblem,
  icon: Crown,
  date: "February 2026",
  color: "purple-500",
  glow: "hsla(280,60%,40%,0.35)"
},
{
  title: "Empaths & Indigo Children: The Souls Who Feel Everything",
  description: "Highly sensitive souls who perceive energy, emotions, and truths others miss. Explore the world of empaths, indigo auras, and spiritual sensitivity.",
  path: "/blog/empaths-indigo-children",
  image: empathsImage,
  icon: Eye,
  date: "February 2026",
  color: "indigo-500",
  glow: "hsla(240,70%,50%,0.35)"
}];


const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Cryptic Store Sacramento</title>
        <meta name="description" content="Explore culture, music, astrology & Sacramento lifestyle on the Cryptic Store blog by MC Mysterious." />
        <meta name="keywords" content="Sacramento blog, Sacramento DJ blog, Sacramento streetwear, Sacramento fashion, Cryptic Store blog, magic and music, Marie Laveau, empaths, MC Mysterious Sacramento" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://crypticstore.lovable.app/blog" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Cryptic Chronicles | Cryptic Store Blog" />
        <meta property="og:description" content="Magic, Music & Mystery — blog posts by MC Mysterious." />
        <meta property="og:url" content="https://crypticstore.lovable.app/blog" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Cryptic Chronicles | Cryptic Store Blog" />
        <meta name="twitter:description" content="Explore magic, music, and mystery with MC Mysterious." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="relative pt-8 md:pt-12 pb-10 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(50,100%,50%,0.08)_0%,transparent_65%)]" />
          <div className="container mx-auto relative z-10 max-w-5xl">
            <h1 className="sr-only">The Cryptic Chronicles — Stories of Magic, Music &amp; Mystery by MC Mysterious</h1>
            <div className="rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_40px_hsla(50,100%,50%,0.15)]">
              <img
                src={chroniclesHero}
                alt="The Cryptic Chronicles — The Zodiac Codex: golden zodiac wheel with all twelve constellations on a black starfield"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid gap-10">
              {blogPosts.map((post) => {
                const Icon = post.icon;
                return (
                  <Link key={post.path} to={post.path} className="group block">
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-muted/30 hover:border-primary/30">
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="md:w-80 flex-shrink-0">
                          <div className="relative h-56 md:h-full overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy" />
                            
                            
                          </div>
                        </div>
                        {/* Content */}
                        <CardHeader className="flex-1 justify-center py-6 md:py-8">
                          <div className="flex items-center gap-2 text-primary mb-2">
                            <Icon className="h-5 w-5" />
                            <span className="text-xs font-bold uppercase tracking-wider">{post.date}</span>
                          </div>
                          <CardTitle className="text-2xl md:text-3xl font-black leading-tight group-hover:text-primary transition-colors mb-3">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="text-base mb-4">
                            {post.description}
                          </CardDescription>
                          <div>
                            <Button variant="outline" size="sm" className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              Read Article <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardHeader>
                      </div>
                    </Card>
                  </Link>);

              })}
            </div>
          </div>
        </section>

        {/* Brand CTA */}
        <section className="py-12 px-4 bg-gradient-to-r from-background via-primary/10 to-background border-t border-primary/20">
          <div className="container mx-auto text-center">
            <p className="text-2xl font-bold text-foreground mb-2">
              #Youknowwedomagic
            </p>
            <p className="text-muted-foreground">
              Magic & Spirit by MC Mysterious
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>);

};

export default Blog;