import { useEffect } from "react";
import { Instagram } from "lucide-react";

interface ReelEmbed {
  url: string;
  caption?: string;
}

const REELS: ReelEmbed[] = [
  { url: "https://www.instagram.com/reel/DKpVeJvSdaT/", caption: "" },
  { url: "https://www.instagram.com/reel/DKm-P8gSNzO/", caption: "" },
  { url: "https://www.instagram.com/reel/DKkRBk7yrIb/", caption: "" },
];

export const InstagramReels = () => {
  useEffect(() => {
    // Load Instagram embed script
    const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Re-process embeds if script already loaded
      (window as any).instgrm?.Embeds?.process();
    }
  }, []);

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Instagram className="h-7 w-7 text-primary" />
          <h2 className="text-3xl font-bold text-center">Latest Reels</h2>
        </div>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full shadow-[0_0_10px_hsla(50,100%,50%,0.5)]" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {REELS.map((reel) => (
            <div key={reel.url} className="w-full max-w-[328px]">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={reel.url}
                data-instgrm-version="14"
                style={{
                  background: "transparent",
                  border: 0,
                  margin: "0 auto",
                  maxWidth: "328px",
                  minWidth: "280px",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/mcmysterious1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors font-semibold"
          >
            <Instagram className="h-5 w-5" />
            Follow @mcmysterious1
          </a>
        </div>
      </div>
    </section>
  );
};
