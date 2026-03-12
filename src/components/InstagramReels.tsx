import { useEffect, useRef, useState } from "react";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface ReelEmbed {
  url: string;
  platform: "instagram" | "facebook";
}

const REELS: ReelEmbed[] = [
  { url: "https://www.facebook.com/reel/898925383058637/", platform: "facebook" },
  { url: "https://www.instagram.com/mc_mysterious/reel/DVsSlyfjlkC/", platform: "instagram" },
];

export const InstagramReels = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 360;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  useEffect(() => {
    const hasFb = REELS.some((r) => r.platform === "facebook");
    if (hasFb) {
      const existing = document.getElementById("facebook-jssdk");
      if (!existing) {
        const script = document.createElement("script");
        script.id = "facebook-jssdk";
        script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
      } else {
        (window as any).FB?.XFBML?.parse();
      }
    }

    const hasIg = REELS.some((r) => r.platform === "instagram");
    if (hasIg) {
      const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
      if (!existing) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
        (window as any).instgrm?.Embeds?.process();
      }
    }

    // Recheck scroll after embeds load
    const timer = setTimeout(updateScrollState, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Instagram className="h-7 w-7 text-primary" />
          <h2 className="text-3xl font-bold text-center">Latest Reels</h2>
        </div>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full shadow-[0_0_10px_hsla(50,100%,50%,0.5)]" />

        {/* Carousel */}
        <div className="relative group">
          {/* Left Arrow */}
          {canScrollLeft && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur border border-border shadow-lg rounded-full h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur border border-border shadow-lg rounded-full h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {REELS.map((reel) => (
              <div
                key={reel.url}
                className="flex-shrink-0 w-[340px] snap-center"
              >
                {reel.platform === "facebook" ? (
                  <div
                    className="fb-video"
                    data-href={reel.url}
                    data-width="340"
                    data-show-text="false"
                    data-allowfullscreen="true"
                  />
                ) : (
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={reel.url}
                    data-instgrm-version="14"
                    style={{
                      background: "transparent",
                      border: 0,
                      margin: 0,
                      maxWidth: "340px",
                      minWidth: "280px",
                      width: "100%",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
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
