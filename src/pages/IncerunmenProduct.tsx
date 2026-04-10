import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { INCERUNMEN_PRODUCTS } from "@/lib/partner-products";

const IncerunmenProduct = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? INCERUNMEN_PRODUCTS[slug] : null;

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] ?? "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] ?? "");
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Product not found</h1>
          <Link to="/"><Button><ArrowLeft className="mr-2 h-4 w-4" />Back to Shop</Button></Link>
        </div>
      </div>
    );
  }

  const handleCheckout = () => window.open(product.affiliateUrl, "_blank");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{product.title} | Cryptic Store</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://crypticstore.lovable.app/partner/${slug}`} />
      </Helmet>

      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-foreground truncate max-w-[200px]">{product.title}</li>
          </ol>
        </nav>

        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />Back to Shop
          </Button>
        </Link>

        <article className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <figure className="aspect-square overflow-hidden rounded-lg bg-secondary/20">
              <img src={product.images[selectedImage]} alt={product.title} className="w-full h-full object-cover" loading="eager" />
            </figure>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button key={i} onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${selectedImage === i ? "border-primary" : "border-transparent"}`}>
                    <img src={img} alt={`${product.title} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <section className="space-y-6">
            <header>
              <Badge variant="outline" className="mb-2 text-xs">Partner Product — {product.brand}</Badge>
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)} {product.currency}</p>
            </header>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            <div>
              <label className="text-sm font-semibold mb-2 block">Color</label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <Button key={c} variant={selectedColor === c ? "default" : "outline"} size="sm" onClick={() => setSelectedColor(c)}>{c}</Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold mb-2 block">Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <Button key={s} variant={selectedSize === s ? "default" : "outline"} size="sm" onClick={() => setSelectedSize(s)}>{s}</Button>
                ))}
              </div>
            </div>

            <Badge variant="outline" className="text-success border-success">In Stock</Badge>

            <Button size="lg" className="w-full" onClick={handleCheckout}>
              <ExternalLink className="mr-2 h-5 w-5" />Buy Now on {product.brand}
            </Button>

            {product.promoCode && (
              <p className="text-xs text-muted-foreground text-center">
                You'll be redirected to {product.brand} to complete your purchase. Use code <strong>{product.promoCode}</strong> for {product.promoText}.
              </p>
            )}
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default IncerunmenProduct;
