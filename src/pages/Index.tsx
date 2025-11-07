import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { Navigation } from "@/components/Navigation";
import { Sparkles } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(20),
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 px-4 border-b border-primary/20">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground mb-6 border border-primary/30">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-bold">Welcome to Cryptic Store</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-foreground drop-shadow-lg">
            Magic & Music Unleashed
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto font-medium">
            Your one-stop shop for everything magic and music by Hip Hop DJ MC Myster?ous
          </p>
          
          <div className="mt-8 p-6 bg-card border border-primary/20 rounded-lg max-w-2xl mx-auto shadow-lg">
            <h2 className="text-2xl font-bold mb-3 text-primary">Imitable Lives Collection</h2>
            <p className="text-muted-foreground leading-relaxed">
              Inspired by the ancient lovers Marc Anthony and Cleopatra, who ran a social club called the Imitable Livers Club, celebrating their legendary love of drinking and living life to the fullest.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
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
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Sparkles className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4">No products found</h2>
              <p className="text-muted-foreground mb-6">
                We're getting ready to launch our amazing collection. Check back soon!
              </p>
              <p className="text-sm text-muted-foreground">
                In the meantime, tell me what products you'd like to see and I'll add them for you!
              </p>
            </div>
          </div>
        )}
      </section>
      
      <footer className="border-t border-primary/20 py-8 px-4 mt-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="font-medium">&copy; 2025 Cryptic Store. Magic & Music by DJ MC Myster?ous. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
