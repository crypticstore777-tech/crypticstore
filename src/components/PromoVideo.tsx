const PromoVideo = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary font-body text-xs tracking-[0.4em] mb-3">
          YOU KNOW WE DO MAGIC
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-8">
          DREAM · DARE · DRIP
        </h2>
        <div className="relative mx-auto w-full max-w-sm rounded-xl overflow-hidden border border-border bg-card shadow-2xl">
          <video
            className="w-full h-auto block"
            src="/cryptic-promo.mp4"
            poster="/cryptic-promo-poster.jpg"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Cryptic Store promotional video"
          />
        </div>
        <p className="text-muted-foreground text-sm mt-6">
          Tap the speaker icon for sound.
        </p>
      </div>
    </section>
  );
};

export default PromoVideo;
