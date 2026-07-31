## 1. Tipos compartilhados

- [x] 1.1 Criar arquivo `src/lib/types.ts` exportando a interface `ProductCardData` com os campos: `retailerName: string`, `retailerLogoSrc?: string`, `productName: string`, `couponDescription: string`, `price: number`
- [x] 1.2 Verificar que `src/lib/types.ts` não gera diagnostics TypeScript (rodar LSP ou `npx tsc --noEmit`)

## 2. Componente ProductCard

- [x] 2.1 Criar `src/components/product-card.tsx` com o subcomponente `ProductCardHeader` (logo placeholder + nome da varejista) dentro do mesmo arquivo
- [x] 2.2 Adicionar subcomponente `ProductCardImage` que renderiza um placeholder SVG inline com aspect-ratio consistente (ex.: 4:3) e cor de fundo neutra
- [x] 2.3 Implementar o `ProductCard` principal montando a estrutura: header no topo, imagem no centro, nome do produto (semibold), cupom (muted), preço (text-green-600, bold, text-2xl) — usando `cn` de `src/lib/utils.ts` para merges de classes
- [x] 2.4 Formatar o preço com Intl.NumberFormat em BRL (`pt-BR`, style currency) para exibir "R$ XX,XX"
- [x] 2.5 Garantir que o `ProductCard` é um Server Component (sem "use client", sem handlers de evento)
- [x] 2.6 Confirmar que o card é fluido em largura (`w-full`) e não assume contexto de grid interno

## 3. Página inicial com card de exemplo

- [x] 3.1 Substituir o conteúdo boilerplate de `src/app/page.tsx` por um container com grid responsivo: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4` dentro de um `<main>` com padding adequado
- [x] 3.2 Renderizar um `ProductCard` com dados mockados de exemplo (ex.: Magazine Luiza, produto "Fone Bluetooth", cupom "10% OFF", preço 89.90) dentro do grid
- [x] 3.3 Ajustar o container externo para centralizar e limitar largura máxima em telas grandes (ex.: `max-w-7xl mx-auto`)

## 4. Validação e qualidade

- [ ] 4.1 Rodar LSP diagnostics em `src/components/product-card.tsx`, `src/lib/types.ts` e `src/app/page.tsx` — nenhum erro
- [ ] 4.2 Rodar `npx next build` (ou `npm run build`) — build sem erros
- [ ] 4.3 Rodar `npm run lint` (Biome) — sem novos warnings/errors nos arquivos criados/modificados
- [ ] 4.4 Verificação visual: rodar `npm run dev`, abrir http://localhost:3000 e confirmar que o card de exemplo aparece com a hierarquia visual da referência `doc/img/cards.png` (preço verde e proeminente, nome do produto em semibold, cupom mais suave)
- [ ] 4.5 Verificação responsiva: redimensionar a viewport no navegador e confirmar 1 coluna no mobile, 2 em ≥640px e 3 em ≥1024px
