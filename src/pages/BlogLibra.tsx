import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Scale, Star, ArrowLeft, Sparkles, Moon, Sun, Zap, Shield, Heart, Feather } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import heroImg from "@/assets/blog-libra-zodiac.jpg";
import { MC_MYSTERIOUS_SOCIAL_PROFILES } from "@/lib/seo-constants";

const BlogLibra = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Libra: The Weighing of the Heart — Hidden Secrets, Rare Facts & September vs October Libra Explained",
    description:
      "An in-depth exploration of the Libra zodiac sign. Rare cosmic facts, the green star Zubeneschamali, the scales of Maat, decan breakdowns, and the real differences between September Libra and October Libra.",
    author: { "@type": "Person", name: "MC Mysterious", sameAs: MC_MYSTERIOUS_SOCIAL_PROFILES },
    publisher: { "@type": "Organization", name: "Cryptic Store", sameAs: MC_MYSTERIOUS_SOCIAL_PROFILES },
    datePublished: "2026-08-24",
    keywords:
      "Libra zodiac, September Libra vs October Libra, Libra facts, Libra personality, Libra astrology, Zubeneschamali, Libra decans, zodiac deep dive, Libra rare facts, Libra secrets",
  };

  return (
    <>
      <Helmet>
        <title>Libra Zodiac Deep Dive | Cryptic Store Blog</title>
        <meta
          name="description"
          content="Libra zodiac deep dive: rare facts, the green star Zubeneschamali, the scales of Maat, and the real difference between September and October Libras."
        />
        <meta
          name="keywords"
          content="Libra zodiac, September Libra, October Libra, Libra personality, Libra traits, Libra decan, Libra mythology, Libra rare facts, Zubeneschamali, zodiac deep dive, MC Mysterious astrology"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://crypticstore.shop/blog/libra-zodiac" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Libra: The Weighing of the Heart — Rare Facts & September vs October Differences" />
        <meta property="og:description" content="Hidden secrets of the Libra zodiac. The green star, the scales of Maat, the decans, and September vs October Libra explained." />
        <meta property="og:url" content="https://crypticstore.shop/blog/libra-zodiac" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Libra Zodiac Deep Dive | Cryptic Chronicles" />
        <meta name="twitter:description" content="Rare cosmic facts about Libra — September vs October differences revealed." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
          <img
            src={heroImg}
            alt="Golden cosmic scales weighing a feather against a glowing heart, with the Libra constellation and the green star Zubeneschamali in a starfield"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-10">
            <Link to="/blog" className="inline-flex items-center gap-1 text-primary mb-4 hover:underline text-sm font-bold">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary mb-4 w-fit">
              <Scale className="h-3.5 w-3.5" />
              <span className="text-xs font-bold tracking-wide">Zodiac Deep Dive</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              Libra: The <span className="text-primary">Weighing of the Heart</span>
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">August 2026 · 16 min read</p>
          </div>
        </section>

        {/* Content */}
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Libra (September 23 – October 22) got handed the zodiac's weakest press kit: nice, indecisive, likes pretty
            things. The truth is heavier. Libra is the{" "}
            <strong>only sign in the zodiac represented by an object instead of a living creature</strong> — and the object
            is a judgment instrument. Not a mirror. Not a flower. A set of scales, the tool civilizations built to decide
            what is fair, what is owed, and who walks free.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            And there are two very different sets of scales. The September Libra is pure Venus — charming, romantic,
            aesthetically ruthless. The October Libra carries Saturn or Mercury, and behaves like another sign entirely. In
            this deep dive: the claws Libra was carved out of, the only green star visible to the naked eye, rare cosmic
            facts, the decan split, and the spiritual work hidden inside the most underestimated sign in the sky.
          </p>

          <Separator className="my-10" />

          {/* Mythology */}
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 flex items-center gap-3">
            <Star className="h-7 w-7 text-primary" />
            Ancient Origins &amp; Mythology
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Libra is the newest of the twelve — and it was taken from something else. To the Babylonians and early Greeks,
            these stars were the <strong>Chelae</strong>, the <em>Claws of the Scorpion</em>. Libra's two brightest stars
            still carry the receipts in their Arabic names: <strong>Zubenelgenubi</strong> ("the southern claw") and{" "}
            <strong>Zubeneschamali</strong> ("the northern claw"). Every Libra is standing in the space where a scorpion's
            grip used to be. The sign of peace was cut out of the sign of the sting — which is why Libras are so fluent in
            conflict they'd rather not have.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The Romans made the swap official, and the reason was practical: the <strong>autumn equinox</strong> once fell
            in these stars, the moment when day and night weigh exactly the same. Rome — an empire obsessed with law,
            contracts, and the balance of accounts — saw a scale in the sky and named it one. Libra is the only
            constellation the ancient world essentially <em>legislated</em> into existence.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The deeper root is <strong>Egyptian</strong>. In the Hall of Two Truths, the dead person's heart was placed on
            a scale against the feather of <strong>Ma'at</strong>, goddess of truth and cosmic order. Heavier than the
            feather and the soul was devoured; balanced, and it passed. This is Libra's real inheritance and it is not
            polite: the scales are a <strong>judgment of the heart</strong>, and Libra spends a lifetime deciding what
            weight a thing truly carries.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The Greeks kept the theme by placing the scales in the hand of <strong>Astraea</strong> — the star-maiden of
            justice who is the constellation Virgo, standing right next to Libra. Virgo does the discerning; Libra does the
            deciding. In <strong>Vedic astrology</strong> the sign is <em>Tula</em>, the balance, and it is the only sign
            where <strong>Saturn is exalted</strong>: the planet of hard law finds its highest expression in the sign of
            fairness. Libra isn't soft. Libra is where the sternest planet in the sky does its best work.
          </p>

          <Separator className="my-10" />

          {/* Star */}
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 flex items-center gap-3">
            <Sparkles className="h-7 w-7 text-primary" />
            Zubeneschamali: The Only Green Star You Can See
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Libra's brightest star, <strong>Zubeneschamali</strong> (Beta Librae), is the sky's most famous anomaly: it is
            the one naked-eye star repeatedly described by observers as <strong>green</strong>. Physics says stars don't
            look green to the human eye — the color curves don't allow it — and yet report after report, century after
            century, comes back the same. Nobody has fully settled the argument.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Its sibling, <strong>Zubenelgenubi</strong> (Alpha Librae), is a wide double you can split with binoculars —
            two stars that look like one until you look closer. A scale, and a pair. The whole constellation is built out
            of things that only reveal their true nature under attention.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Traditional astrology treats the two claws as a moral fork: the northern star was read as fortune, honor, and
            fair reward; the southern star as loss and the price of injustice. Same constellation, two outcomes, decided by
            conduct. Ancient astrologers were saying what Libras already know — that the scale tips based on what you put
            on it.
          </p>

          <Separator className="my-10" />

          {/* Rare facts */}
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 flex items-center gap-3">
            <Zap className="h-7 w-7 text-primary" />
            Rare &amp; Little-Known Libra Facts
          </h2>
          <div className="space-y-5 mb-8">
            {[
              {
                title: "The Only Sign That Isn't Alive",
                text: "Eleven signs are animals, humans, or hybrids. Libra alone is an object — a tool. Traditional astrologers read this as the sign's whole riddle: Libra's power is impersonal. It works best when it stops taking sides and simply measures. It suffers most when it forgets it is allowed to be a person too.",
              },
              {
                title: "Libra Was Carved Out of Scorpio's Claws",
                text: "For most of recorded history these stars belonged to the Scorpion. Libra's star names still translate as 'the northern claw' and 'the southern claw.' The zodiac's gentlest sign is made of the predator's grip — which is why a truly angry Libra is so unsettling. The claws remember.",
              },
              {
                title: "Saturn Is Exalted in Libra — and the Sun Is in Fall",
                text: "The sign of harmony is the exaltation of the hardest planet in astrology, and the fall of the Sun itself. Translation: Libra excels at structure, law, and long commitments, but struggles with pure self-assertion. The ego dims here so the relationship can be seen. That single dignity table explains almost every Libra complaint.",
              },
              {
                title: "It's a Cardinal Sign — Libras Initiate",
                text: "Cardinal signs start seasons: Aries opens spring, Cancer summer, Capricorn winter, and Libra opens autumn. Libra is not passive. It initiates through relationship — the introduction, the proposal, the negotiation, the truce. Aries charges the field alone; Libra brings the other party to the table and changes the outcome anyway.",
              },
              {
                title: "The Seventh House Isn't Just Marriage — It's 'Open Enemies'",
                text: "Libra's house governs partners, contracts, and, in traditional texts, declared opponents. Same house. Astrology understood long ago that the person who truly opposes you and the person who truly partners you occupy the identical psychological seat: both are the mirror. Libras attract both, often in the same decade.",
              },
              {
                title: "Libra Holds One of Astronomy's Most Famous Habitable-Zone Systems",
                text: "The red dwarf Gliese 581 sits in Libra, and its planets dominated the 'Earth 2.0' headlines of the 2000s — including worlds claimed, disputed, and re-argued as potentially habitable. Even Libra's exoplanets can't get a verdict. The sign of the unfinished decision, written into the sky.",
              },
              {
                title: "Libra Rules the Kidneys — the Body's Balancing Organ",
                text: "Medical astrology assigns Libra the kidneys, lower back, and skin. The kidney's actual job is homeostasis: filtering what stays and what goes to keep the body's chemistry in balance. The organ of equilibrium belongs to the sign of equilibrium. Libra stress classically lands in the lower back — the body carrying an unbalanced load.",
              },
              {
                title: "Libra's Shadow Sign Is Aries — and It's the Whole Lesson",
                text: "Opposite the scales sits the ram: raw, selfish, immediate. Libra's growth edge isn't 'be nicer,' it's 'say the unpopular thing out loud.' The healthiest Libras have an Aries switch they can flip — and the unhealthiest ones swallow the objection, stay pleasant, and resent you for a year.",
              },
              {
                title: "Opal and Lapis: The Diplomat's Stones",
                text: "Libra's classic stone is opal — a stone that shows a different color depending on the angle you view it from, which is either the perfect Libra metaphor or a warning. The underused ally is lapis lazuli, the old stone of truth-telling, carried when a Libra needs to state a position instead of surveying the room.",
              },
              {
                title: "Libra Season Is the Year's Balance Point",
                text: "Libra opens at the autumn equinox, the one moment when light and dark are equal before the dark takes over. Every culture with a harvest festival scheduled its reckoning here. Libra season is not about staying balanced — it's about the brief instant of balance before a decision has to be made.",
              },
            ].map((fact, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border border-border">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                  {fact.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{fact.text}</p>
              </div>
            ))}
          </div>

          <Separator className="my-10" />

          {/* Decans */}
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 flex items-center gap-3">
            <Moon className="h-7 w-7 text-primary" />
            September Libra vs. October Libra: The Cosmic Divide
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Libra splits into three <strong>decans</strong> of ten degrees, each with a different sub-ruler. The gap is wide
            enough that a September Libra and a late-October Libra will argue they aren't the same sign — politely, of
            course, and for about forty minutes.
          </p>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-900/20 to-background border border-rose-500/20 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Heart className="h-6 w-6 text-rose-300" />
              <h3 className="text-xl font-black text-foreground">First Decan: September 23 – October 2</h3>
            </div>
            <p className="text-xs text-rose-300 font-bold mb-3 tracking-wider uppercase">Ruled by Venus · Pure Libra · The Charmer</p>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              Double Venus, undiluted. These are the <strong>magnetic Libras</strong> — the ones who walk into a room and
              rearrange its temperature without saying anything. Romance is not a hobby for this decan, it's an operating
              system, and beauty registers to them as a physical need rather than a preference.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Effortless social gravity — people relax around them on contact",
                "Aesthetically exacting; a wrong-looking room genuinely lowers their mood",
                "Falls in love with potential, then negotiates with reality later",
                "Virgo-cusp born (Sep 23–24) hide a sharp analytical edge under the charm",
                "Conflict-avoidant to a fault — will absorb a slight rather than name it",
                "Gifted at first impressions, styling, hospitality, branding, taste",
                "Anxiety shows up as people-pleasing and delayed honesty",
                "Spiritual lesson: Being liked is not the same as being known",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-foreground">
                  <Scale className="h-4 w-4 text-rose-300 mt-0.5 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-900/25 to-background border border-sky-500/20 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-6 w-6 text-sky-300" />
              <h3 className="text-xl font-black text-foreground">Second Decan: October 3 – October 12</h3>
            </div>
            <p className="text-xs text-sky-300 font-bold mb-3 tracking-wider uppercase">Sub-ruled by Saturn/Uranus (Aquarius influence) · The Reformer</p>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              Aquarius turns Libra's fairness into <strong>principle</strong>. This is the decan that stops caring whether
              the room approves and starts caring whether the system is just. Cooler, stranger, more independent — the
              Libras who will lose a friendship over a stance and consider it a fair trade.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Justice as ideology, not etiquette — they argue the principle",
                "Detached under pressure; can discuss their own life like a case file",
                "Original taste — allergic to trends, drawn to the unusual",
                "Excellent strategists, organizers, lawyers, activists, designers of systems",
                "Needs freedom inside a relationship or the whole thing suffocates",
                "Shadow: coldness, stubborn contrarianism, principle over people",
                "Friend groups are wide, chosen, and fiercely defended",
                "Spiritual lesson: Fairness without warmth is just arithmetic",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-foreground">
                  <Star className="h-4 w-4 text-sky-300 mt-0.5 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-900/20 to-background border border-amber-500/20 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Feather className="h-6 w-6 text-amber-300" />
              <h3 className="text-xl font-black text-foreground">Third Decan: October 13 – October 22</h3>
            </div>
            <p className="text-xs text-amber-300 font-bold mb-3 tracking-wider uppercase">Sub-ruled by Mercury (Gemini influence) · The Negotiator</p>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              Mercury hands the scales a <strong>voice</strong>. This is the most verbal, quick-witted Libra — the one who
              wins the argument while making you feel good about losing it. Writers, hosts, deal-makers, comedians,
              publicists, DJs who can read a crowd in eight seconds.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Dangerous conversationalists — persuasive without sounding like it",
                "Mentally restless; boredom is their true enemy, not conflict",
                "Reads a room's dynamics instantly and adjusts the register",
                "Scorpio cusp (Oct 21–22) adds intensity, depth, and a long memory",
                "Curious about people to the point of collecting them",
                "Shadow: saying the pleasing thing instead of the true thing, twice",
                "Thrives in media, music, sales, law, and any stage with a microphone",
                "Spiritual lesson: Charm is a tool — decide what you're building with it",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-foreground">
                  <Sparkles className="h-4 w-4 text-amber-300 mt-0.5 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator className="my-10" />

          {/* Table */}
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 flex items-center gap-3">
            <Shield className="h-7 w-7 text-primary" />
            September vs. October Libra: At a Glance
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-3 font-bold text-foreground">Trait</th>
                  <th className="text-left p-3 font-bold text-foreground">September Libra (23–30)</th>
                  <th className="text-left p-3 font-bold text-foreground">October Libra (1–22)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Ruling Energy", "Pure Venus — warm, romantic, magnetic", "Saturn/Mercury blend — principled then persuasive"],
                  ["Temperament", "Gracious, harmonizing, quietly anxious", "Cooler, sharper, more independent"],
                  ["How They Decide", "Feels for the fairest outcome", "Argues to the correct one"],
                  ["Core Anxiety", "Being disliked", "Being wrong — or being owned"],
                  ["Romantic Style", "Devoted, aesthetic, courtship-driven", "Needs freedom, conversation, and a real equal"],
                  ["Career Drive", "Beauty, hospitality, styling, branding, art", "Law, media, activism, strategy, music, design"],
                  ["Conflict Mode", "Avoids, absorbs, then withdraws", "Engages, debates, and can go cold"],
                  ["Shadow Side", "People-pleasing, indecision, resentment", "Detachment, contrarianism, charm without candor"],
                  ["Spiritual Gift", "Grace — makes others feel weighed fairly", "Justice — will carry the unpopular side"],
                  ["Hidden Fear", "That being needed is the only reason they're kept", "That closeness costs autonomy"],
                  ["Life Lesson", "Choose yourself out loud", "Let someone in past the argument"],
                ].map(([trait, sep, oct], i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="p-3 font-bold text-foreground">{trait}</td>
                    <td className="p-3 text-muted-foreground">{sep}</td>
                    <td className="p-3 text-muted-foreground">{oct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Separator className="my-10" />

          {/* Spiritual */}
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 flex items-center gap-3">
            <Heart className="h-7 w-7 text-primary" />
            The Spiritual Dimension of Libra
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Esoteric astrology gives Libra the keynote <em>"I choose the way which leads between the two great lines of
            force."</em> Not the middle as a compromise — the middle as a <strong>path</strong>. Libra's spiritual function
            is to hold two true things at once without collapsing into either. That is genuinely difficult work, and it is
            why so many Libras look calm while running a private tribunal at three in the morning.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">The scales' path moves through three stages:</p>
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-foreground mb-1">Stage 1: The Pleaser</h3>
              <p className="text-sm text-muted-foreground">
                Balance mistaken for agreement. The Libra becomes whatever keeps the peace, mirrors everyone, and quietly
                loses track of their own position. The charm is real; the self is on hold.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-foreground mb-1">Stage 2: The Diplomat</h3>
              <p className="text-sm text-muted-foreground">
                The Libra learns to hold a position <em>and</em> the relationship at the same time. They become the person
                everyone trusts to mediate — the one who can say the hard thing without detonating the room. Where most
                mature Libras live.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-foreground mb-1">Stage 3: The Judge of the Heart</h3>
              <p className="text-sm text-muted-foreground">
                The highest expression: fairness fused with courage. This Libra decides — publicly, at cost, without needing
                the verdict to be popular. It's the Aries integration, and it's what the scales were always for.
              </p>
            </div>
          </div>

          <Separator className="my-10" />

          {/* Element */}
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 flex items-center gap-3">
            <Feather className="h-7 w-7 text-primary" />
            Libra &amp; the Element of Air
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            As <strong>cardinal air</strong>, Libra's job is to <em>initiate through connection</em>. Gemini gathers
            information, Aquarius broadcasts it, Libra <strong>relates</strong> it — putting two things side by side to see
            what they're worth against each other. Every Libra thought is comparative. That's not indecision; that's the
            method.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            In alchemy, Libra corresponds to <strong>Sublimation</strong> — the stage where matter passes straight into
            vapor and rises, leaving the heavy residue behind. Not destruction. <em>Elevation.</em> Every Libra life runs
            that pattern: raise the conflict to a level where it can finally be resolved.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Libra's ritual tools are rose, vanilla, thyme, copper, mirrors, and rose quartz — Venusian, softening, relational.
            Friday is Libra's day. A Libra who wants to reset does it by making one clean decision alone, with nobody's
            input: for this sign, choosing without a second opinion is the actual spiritual exercise.
          </p>

          <Separator className="my-10" />

          {/* Compatibility */}
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 flex items-center gap-3">
            <Heart className="h-7 w-7 text-primary" />
            Who Can Actually Handle a Libra
          </h2>
          <div className="space-y-4 mb-8">
            {[
              { pair: "Libra + Gemini / Aquarius", note: "Air on air. Conversation as a love language, endless mental play, easy social chemistry. Risk: everything gets discussed and nothing gets decided." },
              { pair: "Libra + Aries", note: "The opposition, and the most transformative match Libra can have. Aries says the blunt thing Libra has been circling for weeks. Exhausting, clarifying, hard to quit." },
              { pair: "Libra + Leo / Sagittarius", note: "Fire warms air. Leo adores being adored and Libra adores adoring; Sagittarius brings adventure and honesty. Works when Libra's charm isn't mistaken for agreement." },
              { pair: "Libra + Cancer / Capricorn", note: "Cardinal square — powerful, tense, often serious. Cancer wants emotional certainty, Capricorn wants commitment; Libra wants time. If they build, they build for decades." },
              { pair: "Libra + Taurus", note: "Venus siblings, very different tempos. Beautiful home, aligned taste, real sensuality — but Taurus digs in where Libra keeps weighing. Peace depends on who blinks." },
              { pair: "Libra + Scorpio / Pisces", note: "Water demands the depth Libra keeps diplomatic. Scorpio will not accept a pleasant answer; Pisces dissolves the whole scale. Transformative if Libra tells the truth early." },
            ].map((c, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border border-border">
                <h3 className="font-bold text-foreground mb-1">{c.pair}</h3>
                <p className="text-sm text-muted-foreground">{c.note}</p>
              </div>
            ))}
          </div>

          <Separator className="my-10" />

          {/* Famous */}
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">Famous Libras Who Prove the Pattern</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { name: "Cardi B", date: "October 11", note: "Second decan — Aquarius-sub charge. Says the unfiltered thing on principle, then charms the fallout. Libra with the Aries switch fully installed." },
              { name: "Snoop Dogg", date: "October 20", note: "Third decan — Mercury's negotiator. The most universally liked man in music, fluent in every room, still exactly himself." },
              { name: "Will Smith", date: "September 25", note: "First decan — pure Venus. Built a career on likability and charm as craft, and learned the cost of the pleasing image the hard way." },
              { name: "Serena Williams", date: "September 26", note: "First decan — Venus by name and nature. Grace and beauty wrapped around a competitive engine that never once conceded a point." },
              { name: "John Lennon", date: "October 9", note: "Second decan — the reformer. Wrote the world's most famous peace anthems and picked fights with entire governments to do it." },
              { name: "Gandhi", date: "October 2", note: "Venus-to-Saturn edge. Non-violence as a strategy of pure, immovable justice — the scales as a weapon, wielded gently." },
            ].map((p, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border border-border">
                <h3 className="font-bold text-foreground">{p.name}</h3>
                <p className="text-xs text-primary font-bold mb-1">{p.date}</p>
                <p className="text-sm text-muted-foreground">{p.note}</p>
              </div>
            ))}
          </div>

          <Separator className="my-10" />

          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">The Bottom Line: Libra Is Judgment, Not Niceness</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The indecision people mock in Libra is the same faculty that makes them indispensable. Libra is the one who
            actually weighs it — the offer, the friendship, the excuse, the version of the story you left out. That weighing
            costs something. Living with a mind that keeps a running trial of every relationship is genuinely tiring, and
            Libras almost never mention it, because mentioning it would be unbalanced.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            September Libras carry the undiluted Venus — warm, romantic, magnetic, allergic to ugliness in any form. October
            Libras carry that same instinct hardened by Saturn into principle or sharpened by Mercury into persuasion.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            All of them run the same ancient program: <strong>weigh it honestly, then choose.</strong> The scales in the sky
            were cut from a scorpion's claws and handed to the goddess of truth. What looks like hesitation was always a
            verdict being formed — and when a Libra finally sets it down, it holds.
          </p>

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-center">
            <h3 className="text-2xl font-black text-foreground mb-2">#Youknowwedomagic</h3>
            <p className="text-muted-foreground mb-6">Explore more cosmic chronicles and mystical deep dives by MC Mysterious.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="font-bold shadow-[0_0_20px_hsla(340,60%,55%,0.3)]">
                <Link to="/blog">Explore More Articles</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold border-primary/40">
                <Link to="/youknowwedomagic">Magic &amp; Spirit</Link>
              </Button>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogLibra;
