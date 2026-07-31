/**
 * Dados necessários para renderizar um card de produto no portal.
 */
export interface ProductCardData {
  /** Nome da varejista (ex.: "Magazine Luiza", "Mercado Livre"). */
  retailerName: string;
  /** Referência opcional ao logo da varejista. Ausente usa placeholder. */
  retailerLogoSrc?: string;
  /** Nome do produto em destaque no card. */
  productName: string;
  /** Descrição do cupom/desconto, exibida com menor destaque visual. */
  couponDescription: string;
  /** Preço em reais (BRL). Formatado como "R$ XX,XX" na exibição. */
  price: number;
}
