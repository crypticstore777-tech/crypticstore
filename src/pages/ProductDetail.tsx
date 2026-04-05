import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductByHandle } from "@/lib/shopify";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Helmet } from "react-helmet";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const addItem = useCartStore(state => state.addItem);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', handle],
    queryFn: () => getProductByHandle(handle!),
    enabled: !!handle,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-8 w-32 mb-8" />
          <div className="grid md:grid-cols-2 gap-8">
            <Skeleton className="aspect-square w-full" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Product not found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const selectedVariant = product.variants.edges[selectedVariantIndex]?.node;
  const firstImage = product.images.edges[0]?.node;
  const price = parseFloat(selectedVariant?.price.amount || '0');
  const currencyCode = selectedVariant?.price.currencyCode || 'USD';

  // Generate rich structured data for SEO
  const allImages = product.images.edges.map((img: any) => img.node.url);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: allImages,
    sku: product.variants?.edges?.[0]?.node?.id?.split('/').pop() || '',
    brand: {
      "@type": "Brand",
      name: "Cryptic Store"
    },
    category: "Apparel & Accessories > Clothing",
    offers: {
      "@type": "Offer",
      url: `https://crypticstore.lovable.app/product/${handle}`,
      priceCurrency: currencyCode,
      price: price.toFixed(2),
      availability: selectedVariant?.availableForSale 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "USD"
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US"
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 3, unitCode: "DAY" },
          transitTime: { "@type": "QuantitativeValue", minValue: 3, maxValue: 7, unitCode: "DAY" }
        }
      },
      seller: {
        "@type": "Organization",
        name: "Cryptic Store",
        url: "https://crypticstore.lovable.app"
      }
    },
    aggregateRating: undefined,
    additionalProperty: product.options?.map((opt: any) => ({
      "@type": "PropertyValue",
      name: opt.name,
      value: opt.values.join(", ")
    }))
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://crypticstore.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "Dare2Wear", item: "https://crypticstore.lovable.app/collections/dare2wear" },
      { "@type": "ListItem", position: 3, name: product.title, item: `https://crypticstore.lovable.app/product/${handle}` }
    ]
  };

  const handleAddToCart = async () => {
    if (!selectedVariant) return;

    await addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || []
    });
    toast.success("Added to cart", {
      description: `${product.title} has been added to your cart.`,
    });
  };

  // Generate SEO-friendly meta description
  const metaDescription = product.description 
    ? `${product.description.slice(0, 140)}... Shop now at Cryptic Store. Premium streetwear USA. #Youknowwedomagic`
    : `Shop ${product.title} at Cryptic Store. Premium streetwear by DJ MC Myster?ous. Free shipping over $75 USA. #Youknowwedomagic`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{product.title} | Cryptic Store - Premium Streetwear USA</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`${product.title}, streetwear USA, urban fashion 2025, Cryptic Store, Dare2Wear, Imitable Lives, graphic tee America, DJ MC Mysterious, trending fashion, bestselling streetwear, Youknowwedomagic, premium apparel`} />
        <link rel="canonical" href={`https://crypticstore.com/product/${handle}`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content={`${product.title} | Cryptic Store`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={`https://crypticstore.com/product/${handle}`} />
        {firstImage && <meta property="og:image" content={firstImage.url} />}
        <meta property="product:price:amount" content={price.toFixed(2)} />
        <meta property="product:price:currency" content={currencyCode} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.title} | Cryptic Store`} />
        <meta name="twitter:description" content={metaDescription} />
        {firstImage && <meta name="twitter:image" content={firstImage.url} />}
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/collections/dare2wear" className="hover:text-foreground transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-foreground truncate max-w-[200px]">{product.title}</li>
          </ol>
        </nav>

        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </Link>

        <article className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <figure className="aspect-square overflow-hidden rounded-lg bg-secondary/20">
            {firstImage ? (
              <img
                src={firstImage.url}
                alt={firstImage.altText || `${product.title} - Cryptic Store streetwear`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <span className="text-muted-foreground">No image available</span>
              </div>
            )}
          </figure>

          <section className="space-y-6">
            <header>
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              <p className="text-3xl font-bold text-primary">
                {currencyCode} ${price.toFixed(2)}
              </p>
            </header>

            {product.description && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            )}

            {product.options && product.options.length > 0 && (
              <div className="space-y-4">
                {product.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <label className="text-sm font-semibold mb-2 block">{option.name}</label>
                    <div className="flex flex-wrap gap-2">
                      {option.values.map((value, valueIndex) => {
                        const variantIndex = product.variants.edges.findIndex(
                          ({ node }) => node.selectedOptions.some(
                            opt => opt.name === option.name && opt.value === value
                          )
                        );
                        const isSelected = selectedVariantIndex === variantIndex;
                        
                        return (
                          <Button
                            key={valueIndex}
                            variant={isSelected ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedVariantIndex(variantIndex)}
                          >
                            {value}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2">
              {selectedVariant?.availableForSale ? (
                <Badge variant="outline" className="text-success border-success">In Stock</Badge>
              ) : (
                <Badge variant="outline" className="text-destructive border-destructive">Out of Stock</Badge>
              )}
            </div>

            <Button
              size="lg"
              className="w-full"
              onClick={handleAddToCart}
              disabled={!selectedVariant?.availableForSale}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;