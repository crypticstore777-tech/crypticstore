import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { Navigation } from "@/components/Navigation";
import { Skeleton } from "@/components/ui/skeleton";
import dare2wearHero from "@/assets/dare2wear-hero.jpg";

const Dare2Wear = () => {
  const { data: allProducts, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(50),
  });

  // Filter products that contain "Dare2Wear" or "Politely Toxic" in title
  const dare2wearProducts = allProducts?.filter(product => {
    const title = product.node.title.toLowerCase();
    return title.includes('dare') || 
           title.includes('toxic') || 
           title.includes('dare2wear');
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${dare2wearHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/90 text-primary-foreground mb-6 border border-primary shadow-lg">
            <span className="text-sm font-bold">DARE 2 WEAR</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-foreground drop-shadow-2xl">
            Bold Statements
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground mb-4 max-w-2xl mx-auto font-medium drop-shadow-lg">
            For those who refuse to blend in. Embrace confidence, defy conventions.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Dare2Wear Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Provocative statement pieces designed for those who live fearlessly. 
            Express yourself without apology.
          </p>
        </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dare2wearProducts.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
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
      </section>
      
      <footer className="border-t border-primary/20 py-8 px-4 mt-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="font-medium">&copy; 2025 Cryptic Store. Dare2Wear Collection. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dare2Wear;
