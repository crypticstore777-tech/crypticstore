import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Flame, Star, Crown, Heart, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import heroImage from "@/assets/youknowwedomagic-hero.jpg";
import marieLaveauImage from "@/assets/marie-laveau-portrait.jpg";
import { MC_MYSTERIOUS_SOCIAL_PROFILES } from "@/lib/seo-constants";

const BlogMarieLaveau = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Marie Laveau: The Voodoo Queen of New Orleans",
    "description": "Explore the true history of Marie Laveau, the legendary Voodoo Queen of New Orleans — herbalist, healer, community leader, and the most powerful spiritual figure in American history.",
    "author": {
      "@type": "Person",
      "name": "MC Myster?ous"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cryptic Store",
      "sameAs": MC_MYSTERIOUS_SOCIAL_PROFILES
    },
    "datePublished": "2026-02-26",
    "keywords": "Marie Laveau, Voodoo Queen, New Orleans, Louisiana Voodoo, herbalist, healer, gris-gris, Saint Louis Cemetery, French Quarter, Christophe Glapion"
  };

  return (
    <>
      <Helmet>
        <title>Marie Laveau: The Voodoo Queen of New Orleans | Cryptic Store Blog</title>
        <meta name="description" content="The true history of Marie Laveau — New Orleans' legendary Voodoo Queen, herbalist, healer, and community leader. Born 1801, her legacy endures to this day." />
        <meta name="keywords" content="Marie Laveau, Voodoo Queen, New Orleans Voodoo, Louisiana Voodoo, herbalist, healer, gris-gris, French Quarter, Saint Louis Cemetery, Cryptic Store" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://crypticstore.lovable.app/blog/marie-laveau" />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Marie Laveau: The Voodoo Queen of New Orleans" />
        <meta property="og:description" content="The true history of Marie Laveau — herbalist, healer, and the most powerful Voodoo Queen in American history." />
        <meta property="og:url" content="https://crypticstore.lovable.app/blog/marie-laveau" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marie Laveau: The Voodoo Queen of New Orleans" />
        <meta name="twitter:description" content="The true history of the legendary Voodoo Queen of New Orleans." />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Blog Hero */}
        <section className="relative py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-primary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsla(280,60%,40%,0.15)_0%,transparent_60%)]" />
          <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 mb-6 border border-purple-500/40">
                <Crown className="h-4 w-4" />
                <span className="text-sm font-bold">The Cryptic Chronicles</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-4 text-foreground">
                Marie Laveau
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                The Voodoo Queen of New Orleans
              </p>
            </div>
            <div className="flex-1 flex justify-center">
                <div className="relative w-72 md:w-96 rounded-2xl overflow-hidden shadow-[0_0_40px_hsla(280,60%,40%,0.4)] border-2 border-purple-500/30">
                  <img
                    src={marieLaveauImage}
                    alt="Portrait of Marie Laveau, the Voodoo Queen of New Orleans, in 19th century Creole attire with a white tignon head wrap"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-sm text-white/90 italic m-0 text-center">Marie Laveau — The Voodoo Queen of New Orleans</p>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="overflow-hidden shadow-xl border-purple-500/20">
              <CardHeader className="bg-gradient-to-r from-purple-500/10 via-background to-primary/10 pb-8">
                <div className="flex items-center gap-2 text-purple-400 mb-4">
                  <BookOpen className="h-6 w-6" />
                  <span className="text-sm font-bold uppercase tracking-wider">Historical Feature</span>
                </div>
                <CardTitle className="text-3xl md:text-4xl font-black leading-tight">
                  Marie Laveau: The Voodoo Queen of New Orleans — Her True Story
                </CardTitle>
                <CardDescription className="text-lg mt-4">
                  By MC Myster?ous • February 2026
                </CardDescription>
              </CardHeader>
              
              <CardContent className="prose prose-lg max-w-none py-8 px-6 md:px-10">

                {/* Introduction */}
                <div className="mb-12">
                  <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                    Few figures in American spiritual history command as much reverence and mystery as <strong className="text-foreground">Marie Catherine Laveau</strong>. Born on September 10, 1801, in New Orleans' French Quarter, she rose to become the undisputed Voodoo Queen of New Orleans — a healer, herbalist, midwife, community leader, and the most influential practitioner of Louisiana Voodoo in history.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    But the real Marie Laveau was far more complex than the legends suggest. She was a devout Catholic, a shrewd businesswoman, a compassionate nurse during yellow fever epidemics, and a fierce advocate for the condemned. Her story is one of power wielded not through fear, but through intelligence, faith, and an unshakeable connection to her community.
                  </p>
                </div>


                <Separator className="my-10" />

                {/* Early Life */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Star className="h-8 w-8 text-purple-500 flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">Early Life & Heritage</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Marie Catherine Laveau was born a <strong className="text-foreground">free woman of color</strong> in the French Quarter of New Orleans. At the time of her birth, Louisiana was still under Spanish colonial administration, though it had been restored to the French Republic by treaty a year prior.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Her mother, <strong className="text-foreground">Marguerite Henry (known as D'Arcantel)</strong>, was a free woman of African, European, and Native American ancestry. Her father is believed to have been Charles Laveau, possibly the son of Charles Laveau Trudeau, a white Louisiana Creole politician — though historical records are inconsistent on this point due to varying spellings in colonial documents.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    On August 4, 1819, Marie married <strong className="text-foreground">Jacques Paris</strong>, a free man of color who had emigrated from Saint-Domingue (modern-day Haiti) in the wake of the Haitian Revolution. Their marriage certificate is still preserved at Saint Louis Cathedral in New Orleans. The couple had two daughters, Félicité and Angèle, who are presumed to have died in childhood. Jacques Paris disappeared from city records after 1822 and is believed to have died in Baton Rouge in 1823.
                  </p>
                </div>

                <Separator className="my-10" />

                {/* Partnership with Glapion */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Heart className="h-8 w-8 text-rose-500 flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">Life with Christophe Glapion</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Following Jacques Paris's death, Marie entered a domestic partnership with <strong className="text-foreground">Christophe Dominick Duminy de Glapion</strong>, a nobleman of French descent. The two lived together until his death in 1855, and their union produced seven documented children according to birth and baptismal records: François-Auguste, Marie-Louise "Caroline," Marie-Angélie, Célestin Albert, Arcange, Félicité, Marie-Philomène, and Marie-Héloïse Eucharist Glapion.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Tragically, only <strong className="text-foreground">Marie-Héloïse and Marie-Philomène</strong> survived into adulthood. Some reports claim the couple had as many as fifteen children, though historians believe this figure may include grandchildren as well.
                  </p>
                </div>

                <Separator className="my-10" />

                {/* Career */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Crown className="h-8 w-8 text-primary flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">Rise of the Voodoo Queen</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Marie Laveau was a dedicated practitioner of Voodoo, but she was also a shrewd entrepreneur. She operated a <strong className="text-foreground">beauty parlor</strong> where she served as a hairdresser for the wealthiest families of New Orleans. This position gave her extraordinary access — she listened to the gossip of elite women and gathered intelligence from their servants, whom she either paid or treated for ailments.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    She used this inside knowledge during her Voodoo consultations with wealthy Orleanians, enhancing her reputation as a clairvoyant and providing practical advice alongside spiritual counsel. She also sold <strong className="text-foreground"><em>gris-gris</em></strong> — protective charms and talismans — to help her clients achieve their desires.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Laveau performed her spiritual services in three main locations: her home on <strong className="text-foreground">St. Ann Street</strong>, at <strong className="text-foreground">Congo Square</strong> (a gathering place for the enslaved and free Black community), and at <strong className="text-foreground">Lake Pontchartrain</strong>. She was the third woman to hold the title of Voodoo Queen of New Orleans — preceded by Sanité Dédé and Marie Saloppé — but she became by far the most powerful and enduring.
                  </p>
                  <div className="bg-purple-500/10 rounded-lg p-6 my-6 border border-purple-500/30">
                    <p className="text-foreground font-medium italic m-0">
                      Marie Laveau maintained her authority throughout her leadership. An attempt to challenge her was made in 1850, but she held firm. Due to her immense influence, New Orleans Voodoo lost a significant number of adherents after her death.
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Her daughter, <strong className="text-foreground">Marie Laveau II</strong> (1827–c. 1862), also practiced rootwork, conjure, and Louisiana Voodoo alongside traditional Roman Catholicism. The younger Marie was known for more theatrical public ceremonies, including inviting attendees to <strong className="text-foreground">St. John's Eve rituals on Bayou St. John</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Legends also tell of Laveau keeping a snake she named <strong className="text-foreground">Zombi</strong>, after an African deity — though like much of her magical career, this has never been substantiated by historical records.
                  </p>
                </div>

                <Separator className="my-10" />

                {/* Community Work */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="h-8 w-8 text-primary flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">Healer, Nurse & Community Leader</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Beyond her spiritual practice, Marie Laveau was deeply dedicated to her community. During the devastating <strong className="text-foreground">yellow fever epidemic of 1878</strong>, she cared for the sick by providing herbal remedies and prayers for the afflicted — putting herself at considerable personal risk.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    She was also known to <strong className="text-foreground">visit condemned prisoners</strong> on death row, preparing their last meals and praying with them. Her daughter Philomène later confirmed in an interview with the <em>Picayune</em> that only Catholic traditions were observed during these visits. Marie also frequently sought pardons or commutations of sentences for those she favored — and was often successful.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A reporter from the <em>New Orleans Republican</em> described her in 1871 as <strong className="text-foreground">"a devout and acceptable member of the Catholic communion."</strong> This duality — devout Catholic and powerful Voodoo Queen — was central to who she was. She saw no contradiction between the two, blending African spiritualism, Native American traditions, and Roman Catholic saints into a uniquely American spiritual practice.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Her other community activities included providing lessons to women in her community and performing rituals for those in need <strong className="text-foreground">without charge</strong>.
                  </p>
                </div>

                <Separator className="my-10" />

                {/* Death & Legacy */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Flame className="h-8 w-8 text-orange-500 flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">Death & Enduring Legacy</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Marie Catherine Laveau died peacefully at her home on <strong className="text-foreground">June 15, 1881</strong>, at the age of 79. On June 17, the <em>Daily Picayune</em> announced her passing. Her funeral was lavish, attended by a diverse audience that included members of New Orleans' white elite — a remarkable testament to the respect she commanded across racial lines in the post-Civil War South.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At the time of her death, <em>The New York Times</em>, the <em>Daily Picayune</em>, the <em>Daily States</em>, and other publications described her as a <strong className="text-foreground">"woman of great beauty, intellect, and charisma who was also pious, charitable, and a skilled herbal healer."</strong>
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    She is generally believed to be interred in <strong className="text-foreground">plot 347 of the Glapion family crypt in Saint Louis Cemetery No. 1</strong> in New Orleans. For decades, visitors drew three Xs on the tomb's surface, turned around three times, knocked, and called out their wishes. Those whose wishes were granted would return, circle the Xs, and leave an offering.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Oral tradition even states that some people reported seeing Marie Laveau in town <em>after</em> her supposed death — adding one final layer of mystery to an already extraordinary life.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Due to continued vandalism, access to Saint Louis Cemetery No. 1 has been restricted since March 2015 — visitors must enter with a tour guide. The Archdiocese of New Orleans implemented this change specifically to protect the Laveau family tombs.
                  </p>
                </div>

                <Separator className="my-10" />

                {/* Cultural Impact */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="h-8 w-8 text-blue-500 flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">Literary & Cultural Impact</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Marie Laveau's legacy extends far beyond the cemetery walls. Pioneering anthropologist and author <strong className="text-foreground">Zora Neale Hurston</strong> discussed Laveau at length in her 1935 book <em>Mules and Men</em>, based on interviews with Luke Turner, who identified himself as Laveau's grandnephew. Hurston documented the incantations and rituals Turner reported learning under Laveau's tutelage.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    African-American artist <strong className="text-foreground">Renee Stout</strong> frequently uses Laveau as a visual motif in her work, and Laveau has appeared in countless novels, television series, songs, and films — including <em>American Horror Story: Coven</em>, where she was portrayed by Angela Bassett.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Though often called a "witch" in popular culture, Marie Laveau is more accurately described as a <strong className="text-foreground">Voodoo priestess</strong> and <strong className="text-foreground">Voodoo Queen</strong> — a spiritual leader who blended African, Native American, and Catholic traditions into something entirely her own.
                  </p>
                </div>

                <Separator className="my-10" />

                {/* Connection to Cryptic Store */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="h-8 w-8 text-primary flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">Why She Matters to Us</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Marie Laveau embodies what we celebrate at Cryptic Store — the courage to walk between worlds, to honor ancient traditions while forging new paths, and to use your gifts in service of your community. She didn't ask for permission. She didn't wait to be accepted. She became the most powerful spiritual figure in a city that tried to contain her.
                  </p>
                  <div className="bg-primary/10 rounded-lg p-6 my-6 border border-primary/30">
                    <p className="text-foreground font-medium italic m-0">
                      "Marie Laveau reminds us that real power doesn't come from fear or secrecy — it comes from knowledge, compassion, and the fearless blending of traditions that others want to keep separate. That's the spirit behind everything we do."
                    </p>
                    <span className="block mt-3 text-sm text-primary font-bold">— MC Myster?ous</span>
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* Back to Blog */}
            <div className="text-center mt-8">
              <Link to="/blog" className="text-primary hover:text-primary/80 font-bold transition-colors">
                ← Back to The Cryptic Chronicles
              </Link>
            </div>
          </div>
        </section>

        {/* Brand CTA */}
        <section className="py-12 px-4 bg-gradient-to-r from-background via-purple-500/10 to-background border-t border-purple-500/20">
          <div className="container mx-auto text-center">
            <p className="text-2xl font-bold text-foreground mb-2">
              #Youknowwedomagic
            </p>
            <p className="text-muted-foreground">
              Magic & History by MC Myster?ous
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>);

};

export default BlogMarieLaveau;