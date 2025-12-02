import { ShopifyProduct } from "@/lib/shopify";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { ShoppingCart, Package } from "lucide-react";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;
  
  const firstVariant = node.variants.edges[0]?.node;
  const firstImage = node.images.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!firstVariant) {
      toast.error("Product unavailable");
      return;
    }

    const cartItem = {
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${node.title} has been added to your cart.`,
    });
  };

  const handleAmazonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const searchQuery = encodeURIComponent(`Cryptic Store ${node.title}`);
    window.open(`https://www.amazon.com/s?k=${searchQuery}`, '_blank');
  };

  return (
    <Link to={`/product/${node.handle}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full group">
        <div className="aspect-square overflow-hidden bg-secondary/20 relative">
          {firstImage ? (
            <img
              src={firstImage.url}
              alt={firstImage.altText || node.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <span className="text-muted-foreground">No image</span>
            </div>
          )}
          
          {/* Amazon Badge */}
          <button
            onClick={handleAmazonClick}
            className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#FF9900] text-black text-xs font-bold hover:bg-[#FFB84D] transition-colors shadow-md"
            title="Find on Amazon"
          >
            <Package className="h-3 w-3" />
            <span>Also on Amazon</span>
          </button>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{node.title}</h3>
          
          <div className="flex items-center justify-between gap-2 mt-4">
            <p className="text-2xl font-bold">
              {price.currencyCode} ${parseFloat(price.amount).toFixed(2)}
            </p>
            
            <Button 
              onClick={handleAddToCart}
              size="icon"
              className="shrink-0"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
