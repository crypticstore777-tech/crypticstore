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
      "https://www.incerunmen.com/cdn/shop/products/rB9kfWBv9_-AOFawAANuPOispWM535.jpg?v=1617953419&width=800",
      "https://www.incerunmen.com/cdn/shop/products/rB9kfV_HM1-AVCx3AAZgfILwqWQ695.jpg?v=1617953429&width=800",
      "https://www.incerunmen.com/cdn/shop/products/rB9kfV_HM2CAHqc6AAY1R_BU9xc552.jpg?v=1617953438&width=800",
    ],
    affiliateUrl:
      "https://www.incerunmen.com/products/mens-stand-up-collar-long-sleeved-robes-skug63065?ref=qxkdxevy&utm_source=goaffpro&utm_medium=kocaff",
    brand: "INCERUNMEN",
    promoCode: "NEW10",
    promoText: "10% off your first order",
  },
  "incerunmen-draped-neck-tee": {
    title: "Mens Solid Color Draped Neck Half Sleeve T-Shirt",
    price: 28.64,
    currency: "USD",
    description:
      "A sleek solid color draped neck half sleeve t-shirt for men. Features an elegant draped neckline and relaxed half-sleeve cut for a modern, fashion-forward look. Lightweight and comfortable for everyday wear or layered styling.",
    colors: ["Black", "White", "Khaki"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    images: [
      "https://www.incerunmen.com/cdn/shop/files/039c2742-f47c-492a-832f-1d16b0401a0f.jpg?v=1774947657&width=800",
      "https://www.incerunmen.com/cdn/shop/files/7f2b4cc2-7ea2-4a49-a6f9-ef9bd59ffbeb.jpg?v=1774947668&width=800",
      "https://www.incerunmen.com/cdn/shop/files/04b2fe97-7479-4757-b061-e828069ff5f2.jpg?v=1774947678&width=800",
    ],
    affiliateUrl:
      "https://www.incerunmen.com/products/mens-solid-color-draped-neck-half-sleeve-t-shirt-skul57779?ref=qxkdxevy&utm_source=goaffpro&utm_medium=kocaff",
    brand: "INCERUNMEN",
    promoCode: "NEW10",
    promoText: "10% off your first order",
  },
};
