import { ProductCard } from "@/components/product-card";
import type { ProductCardData } from "@/lib/types";

const sampleCards: ProductCardData[] = [
  {
    id: 1,
    retailerName: "Magazine Luiza",
    productName: "Fone Bluetooth",
    couponDescription: "10% OFF no cupom",
    price: 89.9,
  },
  {
    id: 2,
    retailerName: "Mercado Livre",
    productName: "Smartwatch",
    couponDescription: "Frete grátis",
    price: 129.9,
  },
  {
    id: 3,
    retailerName: "Amazon",
    productName: "Caixa de Som",
    couponDescription: "15% OFF no cupom",
    price: 199.9,
  },
  {
    id: 4,
    retailerName: "Amazon",
    productName: "Caixa de Som",
    couponDescription: "15% OFF no cupom",
    price: 199.9,
  },
  {
    id: 5,
    retailerName: "Amazon",
    productName: "Caixa de Som",
    couponDescription: "15% OFF no cupom",
    price: 199.9,
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-center text-2xl font-bold text-foreground">
        Avisei Preço BOM!
      </h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sampleCards.map((card) => (
          <ProductCard key={`${card.id}-${card.productName}`} {...card} />
        ))}
      </div>
    </main>
  );
}
