import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Music, Crown, Eye, Disc3, Shirt } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import djHeroImage from "@/assets/dj-services-hero.jpeg";
import empathsImage from "@/assets/empaths-indigo-hero.jpg";
import magicHeroImage from "@/assets/youknowwedomagic-hero.jpg";
import sacDjsImage from "@/assets/blog-sacramento-djs.jpg";
import sacStreetwearImage from "@/assets/blog-sacramento-streetwear.jpg";

const blogPosts = [
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
  image: magicHeroImage,
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
        <title>The Cryptic Chronicles | Cryptic Store Blog — Magic, Music & Mystery</title>
        <meta name="description" content="The Cryptic Chronicles — blog posts exploring magic, music, spiritual history, empaths, indigo children, and the mysteries of the unseen world. By MC Myster?ous." />
        <meta name="keywords" content="Cryptic Store blog, magic and music, Marie Laveau, empaths, indigo children, Robert Johnson, spiritual blog, MC Mysterious" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://crypticstore.lovable.app/blog" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Cryptic Chronicles | Cryptic Store Blog" />
        <meta property="og:description" content="Magic, Music & Mystery — blog posts by MC Myster?ous." />
        <meta property="og:url" content="https://crypticstore.lovable.app/blog" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Cryptic Chronicles | Cryptic Store Blog" />
        <meta name="twitter:description" content="Explore magic, music, and mystery with MC Myster?ous." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="relative py-20 md:py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-purple-900/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(50,100%,50%,0.08)_0%,transparent_60%)]" />
          <div className="container mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6 border border-primary/40">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-bold">The Cryptic Chronicles</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-4 text-foreground">
              The Cryptic Chronicles
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Stories of Magic, Music & Mystery — by MC Myster?ous
            </p>
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
              Magic & Spirit by MC Myster?ous
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>);

};

export default Blog;