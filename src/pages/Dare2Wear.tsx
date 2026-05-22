import { useQuery } from "@tanstack/react-query";
import { getProductsByCollection } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Helmet } from "react-helmet";
import dare2wearHero from "@/assets/dare2wear-collection-hero.jpg";

const Dare2Wear = () => {
  const { data: dare2wearProducts, isLoading } = useQuery({
    queryKey: ['products', 'dare2wear'],
    queryFn: () => getProductsByCollection('Dare2Wear', 50),
  });

  // Structured data for collection page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dare2Wear Collection - Bold Streetwear & Statement Fashion",
    description: "Shop the Dare2Wear Collection at Cryptic Store. Bold streetwear, provocative statement pieces, and urban fashion for those who dare to be different.",
    url: "https://cryptic-store.lovable.app/collections/dare2wear",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: dare2wearProducts?.length || 0,
      itemListElement: dare2wearProducts?.slice(0, 10).map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.node.title,
          url: `https://cryptic-store.lovable.app/product/${product.node.handle}`,
          image: product.node.images.edges[0]?.node.url,
          offers: {
            "@type": "Offer",
            price: product.node.priceRange.minVariantPrice.amount,
            priceCurrency: product.node.priceRange.minVariantPrice.currencyCode
          }
        }
      })) || []
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dare2Wear Collection - Sacramento Streetwear & Bold Apparel | Cryptic Store Boutique</title>
        <meta name="description" content="Shop the Dare2Wear Collection at Cryptic Store, Sacramento's boldest boutique. Streetwear, urban apparel & statement fashion by Sacramento artist DJ MC Mysterious. Sacramento Kings black & gold vibes. Free shipping over $75." />
        <meta name="keywords" content="Dare2Wear collection, Sacramento streetwear, Sacramento apparel, Sacramento boutique, Sacramento fashion, bold streetwear Sacramento, urban apparel Sacramento, graphic tees, Sacramento artist, DJ MC Mysterious, Sacramento Kings apparel, trending streetwear, bestselling fashion, politely toxic, hip hop clothing, Youknowwedomagic" />
        <link rel="canonical" href="https://crypticstore.shop/collections/dare2wear" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dare2Wear Collection - Bold Streetwear USA | Cryptic Store" />
        <meta property="og:description" content="Shop the Dare2Wear Collection. Bold streetwear and provocative statement pieces for those who dare to be different. Free shipping over $75 USA. #Youknowwedomagic" />
        <meta property="og:url" content="https://crypticstore.shop/collections/dare2wear" />
        <meta property="og:image" content="https://cryptic-store.lovable.app/dare2wear-og.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dare2Wear Collection - Bold Streetwear | Cryptic Store" />
        <meta name="twitter:description" content="Shop bold streetwear and statement fashion at Cryptic Store. Dare to be different." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${dare2wearHero})` }}
          role="img"
          aria-label="Dare2Wear Collection - Bold streetwear fashion with black leather jackets and vibrant yellow accents"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/90 text-primary-foreground mb-6 border border-primary shadow-lg">
            <span className="text-sm font-bold tracking-wider">DARE 2 WEAR</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-foreground drop-shadow-2xl tracking-tight">
            DARE<span className="text-primary">2</span>WEAR
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/90 mb-2 font-light tracking-widest uppercase">
            Collection
          </p>
          
          <p className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto font-medium drop-shadow-lg">
            Bold statements for those who refuse to blend in. Embrace confidence, defy conventions.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <main className="container mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Shop the Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Provocative statement pieces designed for those who live fearlessly. 
            Express yourself without apology.
          </p>
        </header>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : dare2wearProducts && dare2wearProducts.length > 0 ? (
          <section aria-label="Dare2Wear Products">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dare2wearProducts.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-4">No Dare2Wear Products Yet</h3>
              <p className="text-muted-foreground mb-6">
                We're curating our boldest pieces. Check back soon for fearless fashion!
              </p>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Dare2Wear;