# Capability: Product Card

## Purpose

 componente `ProductCard` exibe dados completos de um produto (varejista, imagem, nome, descrição do cupom e preço) em um card visual responsivo, como um React Server Component sem estado.

## Requirements

### Requirement: ProductCard exibe dados completos do produto
O componente `ProductCard` SHALL exibir os seguintes elementos em um único card visual:
- Logo da varejista (placeholder de imagem)
- Nome da varejista em texto
- Imagem do produto (placeholder)
- Nome do produto em destaque visual (peso e tamanho maiores que os demais textos descritivos)
- Descrição do cupom com destaque visual menor que o nome do produto
- Preço em destaque máximo (maior fonte, cor de âncula/verde, formato "R$ XX,XX")

O label do preço SHALL seguir o formato "R$ XX,XX" (real brasileiro, centavos separados por vírgula) para refletir convenção de moeda brasileira.

#### Scenario: Card renderiza todos os campos obrigatórios
- **WHEN** o `ProductCard` recebe um objeto `ProductCardData` com todos os campos preenchidos
- **THEN** o card exibe logo da varejista, nome da varejista, imagem do produto placeholder, nome do produto, descrição do cupom e preço formatado em "R$ XX,XX"

#### Scenario: Hierarquia visual do preço é máxima
- **WHEN** o card é renderizado
- **THEN** o preço possui a maior fonte do card, cor verde (`text-green-600`) e peso bold, sendo o elemento visual mais proeminente abaixo da imagem

#### Scenario: Nome do produto mais destacado que cupom
- **WHEN** o card é renderizado
- **THEN** o nome do produto tem peso semibold ou maior, enquanto a descrição do cupom tem peso normal e cor mais suave (muted), confirmando a hierarquia visual especificada

### Requirement: ProductCard é responsivo mobile-first
O card SHALL ser fluido em largura (`w-full`) e o container pai SHALL organizar múltiplos cards em um grid responsivo seguindo mobile-first: 1 coluna no mobile, 2 colunas em telas pequenas/médias (≥640px) e 3 colunas em telas grandes (≥1024px).

#### Scenario: Renderização mobile (1 coluna)
- **WHEN** a viewport tem largura menor que 640px
- **THEN** os cards são dispostos em 1 coluna, ocupando 100% da largura disponível

#### Scenario: Renderização tablet (2 colunas)
- **WHEN** a viewport tem largura entre 640px e 1023px (inclusive)
- **THEN** os cards são dispostos em 2 colunas com gap entre eles

#### Scenario: Renderização desktop (3 colunas)
- **WHEN** a viewport tem largura maior ou igual a 1024px
- **THEN** os cards são dispostos em 3 colunas com gap entre eles

### Requirement: ProductCard reserva espaço estruturado para imagem
O card SHALL conter um container de imagem com aspect-ratio definido (ex.: 4:3 ou 1:1) que pode receber tanto o placeholder SVG quanto uma imagem real futura sem quebrar o layout.

#### Scenario: Placeholder ocupa o espaço de imagem
- **WHEN** o card é renderizado sem uma URL de imagem real
- **THEN** um placeholder SVG inline preenche o container de imagem com um fundo neutro e um ícone genérico de produto, mantendo o aspect-ratio

#### Scenario: Container preserva dimensões ao receber imagem real
- **WHEN** uma imagem real for fornecida no futuro substituindo o placeholder
- **THEN** o container de imagem mantém o mesmo aspect-ratio e as dimensões do card não são alteradas

### Requirement: ProductCard é um Server Component sem estado
O componente `ProductCard` SHALL ser um React Server Component (sem diretiva "use client"), sem estado interno e sem dependência de handlers de evento do cliente. Toda informação exibida vem das props tipadas.

#### Scenario: Card sem interatividade client-side
- **WHEN** o card é renderizado em uma página
- **THEN** nenhum JavaScript adicional é enviado ao cliente para a renderização do card, confirmando que é um Server Component puro

### Requirement: Tipos de dados compartilhados do ProductCard
O projeto SHALL exportar uma interface TypeScript `ProductCardData` de `src/lib/types.ts` contendo os campos necessários para o card: identificação da varejista (nome e referência de logo), nome do produto, descrição do cupom e preço.

#### Scenario: Interface usada pelo componente
- **WHEN** o `ProductCard` é instanciado
- **THEN** suas props são tipadas com a interface `ProductCardData`, garantindo type-safety em tempo de compilação

### Requirement: Página inicial exibe card de exemplo
A página inicial (`src/app/page.tsx`) SHALL renderizar pelo menos um `ProductCard` com dados mockados de exemplo, substituindo o conteúdo boilerplate atual.

#### Scenario: Card de exemplo visível na home
- **WHEN** usuário acessa a rota `/` (página inicial)
- **THEN** um card de produto com dados mockados é exibido, demonstrando o funcionamento do componente
