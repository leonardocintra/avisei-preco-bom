## Context

O projeto "Avisei Preço BOM" é um portal de achadinhos que exibe promoções de varejistas brasileiros. Atualmente o projeto é um esqueleto Next.js 16 App Router com Tailwind CSS v4 e shadcn/ui já configurado. A página inicial (`src/app/page.tsx`) contém apenas boilerplate. Este change introduz o primeiro componente real: o card de produto.

A referência visual está em `doc/img/cards.png` — um card com: logo da varejista + nome no topo, imagem do produto no centro, nome do produto em destaque, descrição do cupom menos destacada, e preço proeminente (formato "R$ XX,XX") na base.

Stack: Next.js 16, React 19, TypeScript 5, Tailwind CSS v4, Biome (linter/formatter).

## Goals / Non-Goals

**Goals:**
- Componente `ProductCard` reutilizável, tipado, de apresentação pura (sem estado, sem fetch)
- Layout fiel à referência em `doc/img/cards.png`
- Responsivo mobile-first: 1 coluna no mobile, 2-3 colunas em telas maiores
- Espaço estruturado para imagens reais de produto e logo via placeholders SVG
- Card de exemplo renderizado na página inicial

**Non-Goals:**
- Integração com APIs reais de varejistas (Magalu, ML, Shopee, Amazon) — change futuro
- Sistema de roteamento para página de detalhe do produto
- Funcionalidade de "adicionar ao carrinho" ou redirecionamento para checkout
- Filtragem, busca ou ordenação de produtos
- Testes automatizados (unit/integration) — pode ser adicionado em change posterior
- Imagens reais — apenas placeholders neste change

## Decisions

### 1. Componente server-side por padrão (sem "use client")
**Decisão**: `ProductCard` será um React Server Component — sem estado, sem interatividade client-side neste change.
**Racional**: O card apenas exibe dados estáticos/mocks. Não há handlers de clique, hover state animado, ou qualquer interatividade que exija JavaScript no cliente. RSC evita overhead de hydration desnecessário.
**Alternativa considerada**: Adicionar "use client" preemptivamente caso interatividade futura. Rejeitado porque migrar de RSC para Client Component é trivial quando necessário, e deixar como RSC mantém o bundle menor.

### 2. Placeholders SVG inline ao invés de next/image
**Decisão**: Usar um componente de placeholder que renderiza um SVG inline (gradiente + ícone de produto genérico) ao invés de `next/image` para as imagens de produto e logo.
**Racional**: A solicitação exige "imagens fake". `next/image` com width/height conhecidos e `src` precisa de configuração `remotePatterns` para URLs externas, e com `fill` precisa de um container com positioning. DVs inline:
- Zero configuração em `next.config.ts`
- Sem dependência de assets externos
- Espaço visual reservado com aspect-ratio consistente
- Quando imagens reais chegarem, a troca para `next/image` é localizada ao componente de imagem
**Alternativa considerada**: Usar `next/image` com `fill` e uma URL placeholder. Rejeitado por adicionar complexidade de configuração prematura.

### 3. Tipos compartilhados em `src/lib/types.ts`
**Decisão**: Criar `src/lib/types.ts` exportando a interface `ProductCardData` (varejista, produto, cupom, preço). Comando `cn` de `src/lib/utils.ts` já existe e será usado para merges de classes.
**Racional**: Centraliza o contrato de dados que será usado pelo card e futuramente pelas fontes de dados. Evita tipos espalhados em múltiplos arquivos.

### 4. Estrutura de props componentes hijos
**Decisão**: `ProductCard` recebe a interface tipada completa e internamente renderiza subcomponentes `ProductCardHeader` (logo + nome varejista) e `ProductCardImage` (placeholder SVG). Estes subcomponentes ficam no mesmo arquivo `product-card.tsx` neste change para manter coesão.
**Racional**: Mantém o change pequeno e coeso. Se a complexidade crescer em changes futuros, extrair para arquivos próprios é trivial.

### 5. Grid responsivo no container pai (page.tsx), não no card
**Decisão**: O `ProductCard` é self-contained em largura fluida (`w-full`). O grid responsivo (`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`) vive na página inicial. O card não assume nada sobre o contexto de layout.
**Racional**: Reusabilidade — o mesmo card pode viver em outros layouts (lista, carrossel, etc.) sem mudanças internas.

### 6. Cores e hierarquia tipográfica
**Decisão**: Seguir a referência visual — preço em destaque com cor verde/âncula e fonte maior, nome do produto em peso semibold, cupom/desconto em peso normal e cor mais suave. Usar tokens do Tailwind (`text-2xl font-bold text-green-600` para preço, `text-base font-semibold` para nome, `text-sm text-muted-foreground` para cupom).
**Alternativa considerada**: Definir um design system próprio. Rejeitado neste change — alavancar tokens Tailwind + shadcn mantém velocidade.

## Risks / Trade-offs

- [Placeholder não representa fidelidade visual das imagens reais] → Mitigação: aspect-ratio consistente e container com fundo neutro, troca trivial quando imagens reais chegarem
- [Decisão de SVG inline pode parecer dispensável à primeira vista] → Mitigação: está documentada e localizada a um único subcomponente, fácil de substituir
- [Sem testes automatizados neste change] → Mitigação: validação visual manual + LSP diagnostics + `next build` sem erros como gates de qualidade
- [Próxima integração com APIs reais exigirá refatorar tipos de dados] → Mitigação: interface `ProductCardData` é minimal e extensível, campos são aditivos
