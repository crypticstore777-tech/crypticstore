import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const AFFILIATE_URL =
  "https://www.incerunmen.com/products/mens-textured-drape-neck-sleeveless-tank-skuk65446?ref=qxkdxevy&utm_source=goaffpro&utm_medium=kocaff";

const PRODUCT = {
  title: "Mens Textured Drape Neck Sleeveless Tank",
  price: 22.69,
  currency: "USD",
  description:
    "A stylish textured drape neck sleeveless tank for men. Lightweight, breathable, and perfect for warm-weather layering. Unique drape neckline adds a fashion-forward edge to any outfit.",
  colors: ["White", "Khaki", "Yellow"],
  sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  images: [
    "https://www.incerunmen.com/cdn/shop/files/21353804-75f3-4c94-aa48-567f81b8aa5b.jpg?v=1721992161&width=800",
    "https://www.incerunmen.com/cdn/shop/files/025e4d9e-80b1-41e9-9494-609f67e6369c.jpg?v=1721992171&width=800",
    "https://www.incerunmen.com/cdn/shop/files/730ac624-6a4e-4817-b5e5-2b29016cc9df.jpg?v=1721992181&width=800",
  ],
};

const IncerunmenProduct = () => {
  const [selectedColor, setSelectedColor] = useState(PRODUCT.colors[0]);
  const [selectedSize, setSelectedSize] = useState(PRODUCT.sizes[0]);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleCheckout = () => {
    window.open(AFFILIATE_URL, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{PRODUCT.title} | Cryptic Store</title>
        <meta name="description" content={PRODUCT.description} />
        <link rel="canonical" href="https://crypticstore.lovable.app/partner/incerunmen-drape-tank" />
      </Helmet>

      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-foreground truncate max-w-[200px]">{PRODUCT.title}</li>
          </ol>
        </nav>

        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </Link>

        <article className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div className="space-y-4">
            <figure className="aspect-square overflow-hidden rounded-lg bg-secondary/20">
              <img
                src={PRODUCT.images[selectedImage]}
                alt={PRODUCT.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </figure>
            <div className="flex gap-2">
              {PRODUCT.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img src={img} alt={`${PRODUCT.title} view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <section className="space-y-6">
            <header>
              <Badge variant="outline" className="mb-2 text-xs">Partner Product — INCERUNMEN</Badge>
              <h1 className="text-4xl font-bold mb-4">{PRODUCT.title}</h1>
              <p className="text-3xl font-bold text-primary">
                ${PRODUCT.price.toFixed(2)} {PRODUCT.currency}
              </p>
            </header>

            <p className="text-muted-foreground leading-relaxed">{PRODUCT.description}</p>

            {/* Color selector */}
            <div>
              <label className="text-sm font-semibold mb-2 block">Color</label>
              <div className="flex flex-wrap gap-2">
                {PRODUCT.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div>
              <label className="text-sm font-semibold mb-2 block">Size</label>
              <div className="flex flex-wrap gap-2">
                {PRODUCT.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-success border-success">In Stock</Badge>
            </div>

            <Button size="lg" className="w-full" onClick={handleCheckout}>
              <ExternalLink className="mr-2 h-5 w-5" />
              Buy Now on INCERUNMEN
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              You'll be redirected to INCERUNMEN to complete your purchase. Use code <strong>NEW10</strong> for 10% off your first order.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default IncerunmenProduct;
