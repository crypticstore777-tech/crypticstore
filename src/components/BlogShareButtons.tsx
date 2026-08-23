import { Twitter, Facebook, MessageCircle, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface BlogShareButtonsProps {
  /** Canonical URL of the post — share links stay in sync with this. */
  url: string;
  title: string;
  className?: string;
}

/**
 * Social share buttons (X / Twitter, Facebook, WhatsApp) for blog articles.
 * The share URL is always derived from the canonical link passed in.
 */
export const BlogShareButtons = ({ url, title, className = "" }: BlogShareButtonsProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
  };

  const open = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer,width=600,height=600");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard");
    } catch {
      toast.error("Couldn't copy link");
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`} aria-label="Share this article">
      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-1">Share:</span>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-9 w-9 border-primary/40 hover:bg-primary/10 hover:text-primary"
        onClick={() => open(shareLinks.x)}
        aria-label="Share on X"
      >
        <Twitter className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-9 w-9 border-primary/40 hover:bg-primary/10 hover:text-primary"
        onClick={() => open(shareLinks.facebook)}
        aria-label="Share on Facebook"
      >
        <Facebook className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-9 w-9 border-primary/40 hover:bg-primary/10 hover:text-primary"
        onClick={() => open(shareLinks.whatsapp)}
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-9 w-9 border-primary/40 hover:bg-primary/10 hover:text-primary"
        onClick={copyLink}
        aria-label="Copy link"
      >
        <Link2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
