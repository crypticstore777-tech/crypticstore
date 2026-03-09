import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import musicHero from "@/assets/mc-mysterious-music-hero.jpg";

const Music = () => {
  return (
    <>
      <Helmet>
        <title>Music | MC Myster?ous - SoundCloud, Mixcloud & YouTube</title>
        <meta name="description" content="Listen to MC Myster?ous on SoundCloud, Mixcloud, and YouTube. Hip Hop DJ mixes, original tracks, and live sets." />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Navigation />
      <main style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${musicHero})` }}
            role="img"
            aria-label="MC Myster?ous with gold headphones - Sorcerer of Sound"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/80" />
          </div>
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-end items-center text-center pb-12">
            <h1
              className="text-4xl md:text-6xl font-black tracking-wider text-primary mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              MC Myster?ous
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
              Sorcerer of Sound — Mixes, originals & live sets across every platform.
            </p>
          </div>
        </section>

        {/* Tabbed Embeds */}
        <section className="container mx-auto px-4 py-12">
          <Tabs defaultValue="soundcloud" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-secondary">
              <TabsTrigger value="soundcloud" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                SoundCloud
              </TabsTrigger>
              <TabsTrigger value="mixcloud" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Mixcloud
              </TabsTrigger>
              <TabsTrigger value="youtube" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                YouTube
              </TabsTrigger>
            </TabsList>

            <TabsContent value="soundcloud" className="space-y-6">
              <h2 className="text-2xl font-bold text-primary" style={{ fontFamily: "'Orbitron', sans-serif" }}>SoundCloud</h2>
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  width="100%"
                  height="450"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/mcmysterious&color=%23e6a817&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  title="SoundCloud Player"
                />
              </div>
              
            </TabsContent>

            <TabsContent value="mixcloud" className="space-y-6">
              <h2 className="text-2xl font-bold text-primary" style={{ fontFamily: "'Orbitron', sans-serif" }}>Mixcloud</h2>
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  width="100%"
                  height="400"
                  src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=0&light=0&feed=%2Fmcmysterious%2F"
                  frameBorder="0"
                  allow="autoplay"
                  title="Mixcloud Player"
                />
              </div>
              
            </TabsContent>

            <TabsContent value="youtube" className="space-y-6">
              <h2 className="text-2xl font-bold text-primary" style={{ fontFamily: "'Orbitron', sans-serif" }}>YouTube</h2>
              <div className="rounded-lg overflow-hidden border border-border aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Wegjdo4mbpE?theme=dark"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube Player"
                />
              </div>
              
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Music;
