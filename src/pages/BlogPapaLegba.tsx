import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Flame, Star, Crown, Key, BookOpen, Dog, Music, Drumstick, Globe } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import papaLegbaImage from "@/assets/blog-papa-legba.jpg";
import { MC_MYSTERIOUS_SOCIAL_PROFILES } from "@/lib/seo-constants";
import { BlogShareButtons } from "@/components/BlogShareButtons";

const BlogPapaLegba = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Papa Legba: The Gatekeeper, Trickster & Father — True History of Vodun",
    "description": "Restoring the accurate, pre-colonial history of Vodun. Papa Legba as gatekeeper of the spirits, the Orishas in the Haitian Revolution, and the sacred gifts of African descendants.",
    "author": { "@type": "Person", "name": "MC Myster?ous" },
    "publisher": {
      "@type": "Organization",
      "name": "Cryptic Store",
      "sameAs": MC_MYSTERIOUS_SOCIAL_PROFILES,
    },
    "datePublished": "2026-04-26",
    "image": "https://crypticstore.shop/assets/blog-papa-legba.jpg",
    "keywords":
      "papa legba, vodun history, voodoo true history, haitian revolution orishas, bois caïman, dutty boukman, marie laveau, erykah badu everything is everything, african spirituality, lwa, west african religion",
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://crypticstore.shop/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://crypticstore.shop/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Papa Legba: True History of Vodun",
        item: "https://crypticstore.shop/blog/papa-legba-vodun-history",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Papa Legba: The Gatekeeper, Trickster & Father — True History of Vodun</title>
        <meta
          name="description"
          content="Restoring the accurate history of Vodun (one source). Papa Legba as gatekeeper, the Orishas in the Haitian Revolution, and the sacred gifts of African descendants."
        />
        <meta
          name="keywords"
          content="papa legba, vodun history, voodoo true history, haitian revolution orishas, bois caïman, dutty boukman, marie laveau, erykah badu everything is everything, african spirituality, lwa, west african religion, eshu, elegba"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://crypticstore.shop/blog/papa-legba-vodun-history" />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Papa Legba: The Gatekeeper, Trickster & Father — True History of Vodun"
        />
        <meta
          property="og:description"
          content="The accurate, pre-colonial history of Vodun. Papa Legba, the Orishas, and the spiritual gifts of African descendants."
        />
        <meta property="og:url" content="https://crypticstore.shop/blog/papa-legba-vodun-history" />
        <meta property="og:image" content="https://crypticstore.shop/assets/blog-papa-legba.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Papa Legba: True History of Vodun" />
        <meta
          name="twitter:description"
          content="Gatekeeper, Trickster, Father. The Orishas won the Haitian Revolution. Vodun means One Source."
        />
        <meta name="twitter:image" content="https://crypticstore.shop/assets/blog-papa-legba.jpg" />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="relative py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-background to-red-900/15" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsla(280,60%,40%,0.18)_0%,transparent_60%)]" />
          <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 mb-6 border border-purple-500/40">
                <Key className="h-4 w-4" />
                <span className="text-sm font-bold">The Cryptic Chronicles</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-4 text-foreground leading-tight">
                Papa Legba
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 mb-2 font-bold">
                The Fool · The Gatekeeper · The Trickster · The Father
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                The Original Accurate History of Vodun
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <BlogShareButtons url="https://crypticstore.shop/blog/papa-legba-vodun-history" title="Papa Legba: The Gatekeeper, Trickster & Father" />
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-72 md:w-[28rem] rounded-2xl overflow-hidden shadow-[0_0_50px_hsla(280,60%,40%,0.45)] border-2 border-purple-500/30">
                <img
                  src={papaLegbaImage}
                  alt="Papa Legba — elder African gatekeeper of the spirits at a moonlit crossroads with his sacred dog companion"
                  className="w-full h-auto object-cover"
                  width={1920}
                  height={1080}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-sm text-white/90 italic m-0 text-center">
                    Papa Legba — Eldest of the Lwa, Keeper of the Crossroads
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="overflow-hidden shadow-xl border-purple-500/20">
              <CardHeader className="bg-gradient-to-r from-purple-500/10 via-background to-red-900/10 pb-8">
                <div className="flex items-center gap-2 text-purple-300 mb-4">
                  <BookOpen className="h-6 w-6" />
                  <span className="text-sm font-bold uppercase tracking-wider">Spiritual History · Restoration of Truth</span>
                </div>
                <CardTitle className="text-3xl md:text-4xl font-black leading-tight">
                  Papa Legba: The Gatekeeper of the Spirits — and the Truth About Vodun
                </CardTitle>
                <CardDescription className="text-lg mt-4">
                  By MC Myster?ous · April 2026
                </CardDescription>
              </CardHeader>

              <CardContent className="prose prose-lg max-w-none py-8 px-6 md:px-10">

                {/* Intro — One Source */}
                <div className="mb-12">
                  <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                    The word <strong className="text-foreground">Vodun</strong> comes from the
                    {" "}<strong className="text-foreground">Fon language of West Africa</strong> — and it does not mean what
                    Hollywood taught you. It means <em className="text-foreground">spirit</em>. It means
                    {" "}<strong className="text-foreground">One Source</strong>. It is a worldview, a cosmology, and one
                    of the oldest continuously practiced spiritual systems on Earth — predating European contact by
                    thousands of years.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Long before "voodoo dolls" and zombie movies, the people of <strong className="text-foreground">Benin,
                    Togo, and Nigeria</strong> understood that all things — the rivers, the wind, the dead, the dreaming, the
                    drum — flow from a single divine source: <strong className="text-foreground">Mawu-Lisa</strong> (in
                    Fon cosmology) or <strong className="text-foreground">Olodumare</strong> (in Yoruba cosmology). Between
                    that source and humanity stand the <strong className="text-foreground">Orishas</strong> and the
                    {" "}<strong className="text-foreground">Lwa</strong> — sacred intermediaries, ancestors, and forces of nature.
                  </p>
                  <div className="bg-purple-500/10 rounded-lg p-6 my-6 border border-purple-500/30">
                    <p className="text-foreground font-medium italic m-0 text-lg">
                      "Everything is everything." — <span className="text-purple-300 not-italic font-bold">Erykah Badu</span>
                    </p>
                    <p className="text-muted-foreground text-sm mt-2 m-0">
                      Whether she meant to or not, the Black Magical Queen of neo-soul restated the most ancient Vodun truth
                      ever spoken: there is only One Source, and we are all connected to it.
                    </p>
                  </div>
                </div>

                <Separator className="my-10" />

                {/* Who Papa Legba Really Is */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Key className="h-8 w-8 text-purple-400 flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">Who Papa Legba Really Is</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Papa Legba</strong> is the
                    {" "}<strong className="text-foreground">gatekeeper between the world of the living and the world of the
                    spirits</strong>. He stands at every crossroads — physical and metaphysical — holding the key. In Haitian
                    Vodou, no ceremony begins, no prayer is heard, and no spirit may pass through to the human realm
                    {" "}<em>until Legba opens the gate</em>. To skip him is to speak into a closed door.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    During colonization, when African religions were violently outlawed, the practitioners of Vodun protected
                    their tradition by syncretizing the Lwa with Catholic saints. Papa Legba was hidden in plain sight as:
                  </p>
                  <ul className="space-y-2 mb-4 ml-4 text-muted-foreground">
                    <li><strong className="text-foreground">Saint Peter</strong> — the apostle entrusted with the keys to
                    heaven (the original Gatekeeper).</li>
                    <li><strong className="text-foreground">Saint Lazarus</strong> — the wounded, wandering elder accompanied
                    by faithful dogs.</li>
                    <li><strong className="text-foreground">Saint Anthony</strong> — patron of lost things, finder of paths,
                    in some Haitian houses.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    These were not "conversions." They were <strong className="text-foreground">acts of survival</strong> —
                    sacred genius dressed in the colonizer's clothing.
                  </p>
                </div>

                <Separator className="my-10" />

                {/* Fool, Trickster, Father */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Crown className="h-8 w-8 text-primary flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">The Fool, The Trickster, The Father</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Papa Legba wears three sacred faces, and to know him is to honor all three.
                  </p>
                  <div className="space-y-4 mb-4">
                    <div className="bg-card/50 border border-border rounded-lg p-5">
                      <h3 className="text-xl font-bold text-foreground mb-2">The Fool</h3>
                      <p className="text-muted-foreground m-0">
                        Like the Tarot's <strong className="text-foreground">Fool</strong> at card zero, Legba stands at the
                        threshold of every journey. He is innocence, beginning, and the courage to step into the unknown. The
                        "fool" in Vodun is not stupid — he is the one wise enough to start.
                      </p>
                    </div>
                    <div className="bg-card/50 border border-border rounded-lg p-5">
                      <h3 className="text-xl font-bold text-foreground mb-2">The Trickster</h3>
                      <p className="text-muted-foreground m-0">
                        As the cousin of the Yoruba <strong className="text-foreground">Eshu / Elegba</strong>, Legba is the
                        master of language, communication, and divine humor. He is the keeper of paths and the breaker of
                        false certainties. He laughs the lie out of you. He bends straight roads to teach you grace.
                      </p>
                    </div>
                    <div className="bg-card/50 border border-border rounded-lg p-5">
                      <h3 className="text-xl font-bold text-foreground mb-2">The Father</h3>
                      <p className="text-muted-foreground m-0">
                        Legba is the <strong className="text-foreground">eldest of the lwa</strong>. He must be greeted
                        {" "}<em>first</em>, before all others. He is the patient elder who has walked every road and waited
                        at every gate. To know him is to remember that the wisdom of fathers, ancestors, and elders opens
                        doors no force can break.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="my-10" />

                {/* The Dog Owner */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Dog className="h-8 w-8 text-amber-500 flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">The Dog Owner</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Papa Legba is almost always depicted with a <strong className="text-foreground">faithful dog at his
                    side</strong>. In Vodun cosmology, dogs are sacred messengers — they perceive what the living cannot.
                    They see the spirit world plainly. They guard the threshold between life and death.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This is not unique to West Africa. Ancient Kemet (Egypt) honored
                    {" "}<strong className="text-foreground">Anubis</strong>, the jackal-headed guide of souls. The Greeks
                    honored Hecate's hounds at the crossroads. The Norse honored Garm at the gate of Hel. Across every
                    ancient civilization, <em>dogs guard the gate</em>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    European folklore — under Christian influence — twisted this into the demonic "black dog" of the moors.
                    But for Vodun, the dog at Legba's side is sacred kin. To honor your dog is to honor the gatekeeper.
                  </p>
                </div>

                <Separator className="my-10" />

                {/* Villainized */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Flame className="h-8 w-8 text-red-500 flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">
                      Villainized by the Church, Hollywood & the Ignorant
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vodun has been one of the most slandered spiritual traditions in human history. The smear was deliberate
                    — and it had three engines.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">The Church</strong> recast every Orisha and Lwa as a "demon" during
                    the slave trade. To call African spirits divine would have meant admitting that the people they enslaved
                    had souls equal to their own. Demonizing Vodun was theological cover for genocide.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Hollywood</strong> took it further. Zombie films, "voodoo dolls,"
                    {" "}<em>Angel Heart</em>, <em>The Skeleton Key</em>, <em>American Horror Story: Coven</em>, countless
                    network procedurals — all of them turned a sacred religion into a horror prop. They cast Black
                    spirituality as a threat instead of a gift. (Note: <em>Coven</em> at least cast Angela Bassett as Marie
                    Laveau with reverence — but the genre as a whole has done immense damage.)
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">The ignorant</strong> still call Vodun "black magic" — without
                    knowing that the word literally means <em className="text-foreground">One Source</em>. The only thing
                    "black" about Vodun is that it survived in Black hands when the world tried to burn it out of them.
                  </p>
                </div>

                <Separator className="my-10" />

                {/* Offerings */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Drumstick className="h-8 w-8 text-amber-600 flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">Offerings & Sacred Correspondences</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    For those who wish to honor Papa Legba with respect — never as performance, always as relationship —
                    these are the traditional correspondences passed down by Haitian and West African elders:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-card/50 border border-border rounded-lg p-5">
                      <p className="text-sm uppercase tracking-wider text-purple-300 font-bold mb-1">Sacred Day</p>
                      <p className="text-foreground font-bold m-0">Monday</p>
                    </div>
                    <div className="bg-card/50 border border-border rounded-lg p-5">
                      <p className="text-sm uppercase tracking-wider text-purple-300 font-bold mb-1">Sacred Colors</p>
                      <p className="text-foreground font-bold m-0">Red & Black</p>
                    </div>
                    <div className="bg-card/50 border border-border rounded-lg p-5">
                      <p className="text-sm uppercase tracking-wider text-purple-300 font-bold mb-1">Offerings</p>
                      <p className="text-foreground font-bold m-0">Cigars · Candy · Tobacco · Rum · Coffee</p>
                    </div>
                    <div className="bg-card/50 border border-border rounded-lg p-5">
                      <p className="text-sm uppercase tracking-wider text-purple-300 font-bold mb-1">Sacred Number</p>
                      <p className="text-foreground font-bold m-0">3 — past, present, future</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Music & Drumming</strong> are central. Triplet rhythms, 3/4 meters,
                    and call-and-response chants are heard across Vodun ceremony — the heartbeat of the tradition. Drum is
                    not entertainment in Vodun. Drum <em>is</em> the gate.
                  </p>
                  <div className="bg-red-900/10 rounded-lg p-6 my-6 border border-red-700/30">
                    <p className="text-foreground font-medium m-0">
                      <strong>The First Rule:</strong> Always greet Papa Legba <em>first</em>. Before any other Lwa, before
                      any working, before any prayer. He opens the gate. Without him, no one hears you.
                    </p>
                  </div>
                </div>

                <Separator className="my-10" />

                {/* Haitian Revolution */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Flame className="h-8 w-8 text-orange-500 flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">
                      Haiti: The Revolution Won by the Orishas
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    History books love to celebrate the French Revolution. They are quieter about the
                    {" "}<strong className="text-foreground">Haitian Revolution</strong> — the only successful slave revolt
                    in human history, and the war that defeated <strong className="text-foreground">Napoleon Bonaparte's
                    army</strong> on Caribbean soil.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    On the night of <strong className="text-foreground">August 14, 1791</strong>, in a forest clearing called
                    {" "}<strong className="text-foreground">Bois Caïman</strong>, a Vodou ceremony was held that lit the
                    fuse of the revolution. It was led by the Jamaican-born houngan
                    {" "}<strong className="text-foreground">Dutty Boukman</strong> and the priestess
                    {" "}<strong className="text-foreground">Cécile Fatiman</strong>. The Orishas were called. A pact was
                    sworn. A black pig was sacrificed. And within a week, plantations across the northern plain were burning.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    By <strong className="text-foreground">1804</strong>, Haiti was free. The same French army that had
                    rolled across Europe was broken in the Caribbean by ancestral power, brilliant strategy, and the
                    unshakeable conviction that the spirits walked with them. Toussaint L'Ouverture and Jean-Jacques
                    Dessalines led the war on Earth — but the Lwa led the war on the other side of the gate.
                  </p>
                  <div className="bg-orange-500/10 rounded-lg p-6 my-6 border border-orange-500/30">
                    <p className="text-foreground font-medium italic m-0">
                      Vodun did not "help" the revolution. <strong>Vodun was the revolution.</strong> Spirit and rebellion
                      were one breath.
                    </p>
                  </div>
                </div>

                <Separator className="my-10" />

                {/* Spiritual Gifts */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="h-8 w-8 text-primary flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">
                      Ancient & Real Spiritual Gifts of African Descendants
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The descendants of the African diaspora carry inheritances that the world has tried for five centuries to
                    erase, mock, or commodify — and could not. These gifts are real. They live in the bloodline.
                  </p>
                  <ul className="space-y-3 mb-4 ml-4 text-muted-foreground">
                    <li><strong className="text-foreground">Ancestral memory</strong> — the dreams, the visions, the "feeling" you cannot explain.</li>
                    <li><strong className="text-foreground">Prophetic dreaming</strong> — visitations from those who came before, warnings, blessings.</li>
                    <li><strong className="text-foreground">Herbalism & root work</strong> — knowledge passed grandmother to grandchild, plant by plant.</li>
                    <li><strong className="text-foreground">Drum-rhythm consciousness</strong> — why your body knows the beat before your mind does.</li>
                    <li><strong className="text-foreground">Communal healing</strong> — the laying on of hands, the kitchen-table prayer, the shouted Amen.</li>
                    <li><strong className="text-foreground">Discernment of spirits</strong> — knowing the room the moment you walk in.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    These are not superstitions. They are <strong className="text-foreground">technologies of the soul</strong>
                    — older than any colonizer's calendar, more durable than any empire that tried to destroy them.
                  </p>
                </div>

                <Separator className="my-10" />

                {/* Erykah & modern Black mystics */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Music className="h-8 w-8 text-primary flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">
                      Erykah Badu & "Everything Is Everything"
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Erykah Badu</strong> — the Black Magical Queen of neo-soul — has
                    spent her entire career carrying Vodun cosmology into the radio. Her famous line
                    {" "}<em>"everything is everything"</em> is not a throwaway. It is a perfect modern restatement of the
                    Vodun principle of <strong className="text-foreground">One Source</strong>: every drum, every dream,
                    every dollar, every dog, every dead grandmother — all of it connected, all of it sacred, all of it the
                    same divinity in different clothes.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    She is not alone. <strong className="text-foreground">Solange's</strong> <em>A Seat at the Table</em>,
                    {" "}<strong className="text-foreground">Beyoncé's</strong> <em>Lemonade</em> (the Oshun water imagery is
                    explicit), <strong className="text-foreground">Lauryn Hill's</strong> entire body of work,
                    {" "}<strong className="text-foreground">FKA Twigs</strong>, <strong className="text-foreground">SZA</strong>,
                    {" "}<strong className="text-foreground">Janelle Monáe</strong> — the Black mystical tradition is loud in
                    contemporary music, and Vodun is its grandmother.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    To listen with open ears is to hear Papa Legba opening the gate at the start of every great Black record.
                  </p>
                </div>

                <Separator className="my-10" />

                {/* Closing */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="h-8 w-8 text-purple-400 flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">Honor the Gatekeeper</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vodun is not a costume. Papa Legba is not a horror trope. The Orishas are not metaphors. They are real
                    spiritual forces, honored by millions of practitioners worldwide today — in Benin, in Haiti, in Cuba, in
                    Brazil, in New Orleans, in every city where the African diaspora has made a home.
                  </p>
                  <div className="bg-primary/10 rounded-lg p-6 my-6 border border-primary/30">
                    <p className="text-foreground font-medium italic m-0">
                      "Before you ask anything, knock at the gate. Greet the elder. Honor the dog. Light the cigar. Pour the
                      rum. Then — and only then — speak your name into the dark and trust that you have been heard."
                    </p>
                    <span className="block mt-3 text-sm text-primary font-bold">— MC Myster?ous</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Read more in the Cryptic Chronicles:{" "}
                    <Link to="/blog/marie-laveau" className="text-primary hover:underline font-bold">
                      Marie Laveau: The Voodoo Queen of New Orleans
                    </Link>{" "}
                    and{" "}
                    <Link to="/blog/crossroads-magic-music" className="text-primary hover:underline font-bold">
                      At the Crossroads: The Mysterious Connection Between Magic and Music
                    </Link>.
                  </p>
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
            <p className="text-2xl font-bold text-foreground mb-2">#Youknowwedomagic</p>
            <p className="text-muted-foreground">Magic, History & One Source — by MC Myster?ous</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPapaLegba;
