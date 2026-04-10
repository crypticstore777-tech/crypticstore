export interface PartnerProduct {
  title: string;
  price: number;
  currency: string;
  description: string;
  colors: string[];
  sizes: string[];
  images: string[];
  affiliateUrl: string;
  brand: string;
  promoCode?: string;
  promoText?: string;
}

export const INCERUNMEN_PRODUCTS: Record<string, PartnerProduct> = {
  "incerunmen-drape-tank": {
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
    affiliateUrl:
      "https://www.incerunmen.com/products/mens-textured-drape-neck-sleeveless-tank-skuk65446?ref=qxkdxevy&utm_source=goaffpro&utm_medium=kocaff",
    brand: "INCERUNMEN",
    promoCode: "NEW10",
    promoText: "10% off your first order",
  },
  "incerunmen-stand-collar-robe": {
    title: "Mens Stand-Up Collar Long-Sleeved Robes",
    price: 25.89,
    currency: "USD",
    description:
      "Elegant men's stand-up collar long-sleeved robe. A refined, modern take on traditional robes with a structured mandarin collar and full-length silhouette. Perfect for lounging or making a bold streetwear statement.",
    colors: ["Black", "White", "Gray"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    images: [
      "https://www.incerunmen.com/cdn/shop/files/21353804-75f3-4c94-aa48-567f81b8aa5b.jpg?v=1721992161&width=800",
    ],
    affiliateUrl:
      "https://www.incerunmen.com/products/mens-stand-up-collar-long-sleeved-robes-skug63065?ref=qxkdxevy&utm_source=goaffpro&utm_medium=kocaff",
    brand: "INCERUNMEN",
    promoCode: "NEW10",
    promoText: "10% off your first order",
  },
};
