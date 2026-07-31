## Why

O portal "Achei Preço BOM" precisa de sua primeira peça de interface: o card de produto. Sem ele, não há como exibir as promoções de varejistas (Magazine Luiza, Mercado Livre, Shopee, Amazon, etc.) que são o coração do produto. Este change estabelece o componente fundamental sobre o qual toda a experiência do portal será construída.

## What Changes

- Criar componente `ProductCard` reutilizável em `src/components/` seguindo as convenções do Next.js 16 (App Router, server components por padrão)
- Exibir dados do produto: logo + nome da varejista, nome do produto (destacado), descrição do cupom (menos destacado) e preço
- Usar imagens placeholder/fake para produtos e logos, deixando espaço estruturado para imagens reais futuras
- Renderizar um card de exemplo na página inicial (`src/app/page.tsx`)
- Layout responsivo com mobile-first, cards fluindo em grid conforme a largura da tela
- Tipar os dados do card com uma interface TypeScript própria

## Capabilities

### New Capabilities
- `product-card`: Componente de card de produto exibindo varejista, produto, cupom e preço com layout responsivo mobile-first e placeholder de imagem

### Modified Capabilities
<!-- Nenhuma capability existente é modificada. Este é o primeiro change do projeto. -->

## Impact

- **Novos arquivos**: `src/components/product-card.tsx` (componente), `src/lib/types.ts` ou similar (tipos compartilhados)
- **Modificados**: `src/app/page.tsx` (substituir conteúdo boilerplate pelo card de exemplo)
- **Dependências**: Nenhuma nova — usa stack existente (Next.js 16, React 19, Tailwind CSS v4, shadcn/ui já configurado)
- **Sem backend**: Dados mockados/estáticos neste change; integração com APIs de varejistas virá em changes futuros
- **Sem testes automatizados ainda**: Validação visual neste change; testes podem ser adicionados em change posterior
