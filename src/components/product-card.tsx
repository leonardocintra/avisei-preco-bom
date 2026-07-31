import { cn } from "@/lib/utils";
import type { ProductCardData } from "@/lib/types";

/**
 * Formatador BRL compartilhado para garantir consistência de "R$ XX,XX".
 */
const brlFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/**
 * Header do card: logo da varejista (placeholder) + nome.
 *
 * `retailerLogoSrc` é aceito na tipagem para extensibilidade futura
 * (a renderização de imagem real será feita via `next/image` em change
 * posterior, evitando o lint `noImgElement`).
 */
function ProductCardHeader({
  retailerName,
  retailerLogoSrc,
}: {
  retailerName: string;
  retailerLogoSrc?: string;
}) {
  // `retailerLogoSrc` é reservado para integração futura com next/image.
  void retailerLogoSrc;
  return (
    <div className="flex items-center gap-2">
      <div
        aria-hidden="true"
        className="flex h-6 w-6 items-center justify-center rounded bg-muted text-[10px] font-semibold text-muted-foreground"
      >
        {retailerName.charAt(0).toUpperCase()}
      </div>
      <span className="text-sm font-medium text-foreground">
        {retailerName}
      </span>
    </div>
  );
}

/**
 * Container de imagem do produto. Reserva aspect-ratio consistente
 * para receber imagens reais sem quebrar o layout.
 */
function ProductCardImage() {
  return (
    <div
      aria-label="Imagem do produto"
      role="img"
      className="relative w-full overflow-hidden rounded-md bg-muted aspect-[4/3]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 200 150"
        className="absolute inset-0 h-full w-full text-muted-foreground/40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="200" height="150" fill="currentColor" opacity="0.15" />
        <path
          d="M70 55h60a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8H70a8 8 0 0 1-8-8V63a8 8 0 0 1 8-8Zm30 18a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"
          fill="currentColor"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}

/**
 * Card de produto. Server Component — sem estado, sem handlers.
 * Layout fluido (w-full); o container pai é responsável por qualquer grid.
 */
export function ProductCard({
  retailerName,
  retailerLogoSrc,
  productName,
  couponDescription,
  price,
}: ProductCardData) {
  const formattedPrice = brlFormatter.format(price);

  return (
    <article
      className={cn(
        "flex w-full flex-col gap-3 rounded-lg border bg-card p-4 shadow-sm",
        "transition-colors hover:border-primary/40",
      )}
    >
      <ProductCardHeader
        retailerName={retailerName}
        retailerLogoSrc={retailerLogoSrc}
      />
      <ProductCardImage />
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold leading-snug text-foreground">
          {productName}
        </h3>
        <p className="text-sm font-normal text-muted-foreground">
          {couponDescription}
        </p>
      </div>
      <p className="text-2xl font-bold text-green-600 dark:text-green-500">
        {formattedPrice}
      </p>
    </article>
  );
}
