import { useEffect, useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight, Youtube, Facebook } from "lucide-react";
import { Button } from "./ui/button";

interface VideoEmbed {
  id: string;
  platform: "youtube" | "facebook";
  title: string;
  /** YouTube video ID or Facebook reel URL */
  videoId: string;
}

const VIDEOS: VideoEmbed[] = [
  {
    id: "yt-1",
    platform: "youtube",
    title: "The 916 DJ — MC Mysterious",
    videoId: "Wegjdo4mbpE",
  },
  {
    id: "fb-1",
    platform: "facebook",
    title: "MC Mysterious Facebook Reel",
    videoId: "https://www.facebook.com/reel/898925383058637/",
  },
  {
    id: "yt-2",
    platform: "youtube",
    title: "Hip Hop DJ Mix — Live Set",
    videoId: "p5Xwd1gNm2k",
  },
  {
    id: "yt-3",
    platform: "youtube",
    title: "MC Mysterious — TS Madison Event",
    videoId: "8WelQ5-uusk",
  },
  {
    id: "yt-4",
    platform: "youtube",
    title: "MC Mysterious — Live Performance",
    videoId: "Lxk2JgRvECs",
  },
  {
    id: "yt-5",
    platform: "youtube",
    title: "MC Mysterious — Music Video",
    videoId: "0O5G84M7Y4E",
  },
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
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
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
    // Load Facebook SDK for Facebook reels
    const hasFb = VIDEOS.some((v) => v.platform === "facebook");
    if (hasFb) {
      const existing = document.getElementById("facebook-jssdk");
      if (!existing) {
        const script = document.createElement("script");
        script.id = "facebook-jssdk";
        script.src =
          "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
      } else {
        (window as any).FB?.XFBML?.parse();
      }
    }
    const timer = setTimeout(updateScrollState, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Play className="h-7 w-7 text-primary" />
          <h2 className="text-3xl font-bold text-center">Latest Videos</h2>
        </div>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full shadow-[0_0_10px_hsla(50,100%,50%,0.5)]" />

        {/* Carousel */}
        <div className="relative group">
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
            {VIDEOS.map((video) => (
              <div
                key={video.id}
                className="flex-shrink-0 w-[340px] snap-center"
              >
                {video.platform === "youtube" ? (
                  <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-lg bg-black">
                    <div className="relative" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="px-4 py-3 flex items-center gap-2">
                      <Youtube className="h-4 w-4 text-red-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground truncate">
                        {video.title}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-lg">
                    <div
                      className="fb-video"
                      data-href={video.videoId}
                      data-width="340"
                      data-show-text="false"
                      data-allowfullscreen="true"
                    />
                    <div className="px-4 py-3 flex items-center gap-2 bg-card">
                      <Facebook className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground truncate">
                        {video.title}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="https://www.youtube.com/@mcmysterous999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 transition-colors font-semibold"
          >
            <Youtube className="h-5 w-5" />
            Subscribe on YouTube
          </a>
          <a
            href="https://www.instagram.com/mc_mysterious"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors font-semibold"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
