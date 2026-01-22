# Componentes e Sistema de Design

## Biblioteca de Componentes

### Componentes Comuns (Shared)

#### Header
**Localização**: `src/components/common/Header.js`

**Responsabilidades:**
- Navegação principal do site
- Toggle de tema dark/light
- Menu hambúrguer responsivo (mobile)
- Links para rotas principais

**Props**: Nenhuma (componente autônomo)

**Estado:**
- `show`: Controla visibilidade do menu mobile
- `darkTheme`: Estado do tema (sincronizado com localStorage)

**Features:**
- Persistência de tema via localStorage
- Aplicação dinâmica de CSS Variables para tema
- Menu responsivo com animação

**Dependências:**
- `react-hamburger-menu`: Ícone de menu
- `react-router-dom`: Navegação
- Imagens de tema (dark.png, light.png)

#### Footer
**Localização**: `src/components/common/Footer.js`

**Responsabilidades:**
- Formulário de contato
- Ícones de redes sociais
- Seção de contato

**Sub-componentes:**
- `ContactForm`: Formulário com FormSubmit.co
- `SocialIcons`: Links para Instagram, LinkedIn, WhatsApp

**Features:**
- Validação HTML5 nativa
- Integração com FormSubmit.co
- Links externos com segurança (`rel="noopener noreferrer"`)

### Componentes da Homepage

#### Introduction
**Localização**: `src/components/Homepage/Introduction/Introduction.js`

**Responsabilidades:**
- Apresentação inicial da jornalista
- Informações pessoais e profissionais
- Imagens decorativas

**Estado:**
- `isLive`: Verifica se está no horário de transmissão ao vivo (9h-11h, segunda a sexta)

**Features:**
- Verificação automática de horário via `setInterval`
- Cleanup de interval ao desmontar componente

#### AboutMe
**Localização**: `src/components/Homepage/AboutMe/AboutMe.js`

**Responsabilidades:**
- Seção "Confira meu trabalho"
- Botões de navegação para Portfólio e Currículo

**Features:**
- Botões com hover effects inline
- Links para rotas internas

#### VideoCarousel (na Homepage)
**Localização**: `src/components/Homepage/Homepage.js` (inline)

**Responsabilidades:**
- Carrossel de vídeos de destaques
- Navegação entre vídeos do YouTube

**Features:**
- Bootstrap Carousel controlado via jQuery
- Indicadores de slide
- Controles de navegação (prev/next)
- Lazy loading de iframes

### Componentes da Página TV

#### TVPage
**Localização**: `src/components/TV/TVPage.js`

**Responsabilidades:**
- Exibição de portfólio de trabalhos televisivos
- Múltiplos carrosséis por categoria
- Posts do Instagram

**Sub-componentes:**
- `VideoCarousel`: Carrossel por categoria
- `InstagramPosts`: Grid de posts do Instagram

**Features:**
- Categorização de vídeos (Reportagens, TV e Rádio)
- Função auxiliar `getCategoryId` para IDs únicos
- Múltiplos carrosséis independentes

#### InstagramEmbed
**Localização**: `src/components/TV/InstagramEmbed.js`

**Responsabilidades:**
- Renderização de post do Instagram via iframe
- Layout responsivo

**Props:**
- `post`: Objeto com `id` e `url` (ID do post Instagram)

**Features:**
- Iframe responsivo
- Lazy loading
- Altura mínima definida

### Componentes da Página de Currículo

#### ResumePage
**Localização**: `src/components/ResumePage/ResumePage.js`

**Responsabilidades:**
- Exibição completa do currículo profissional
- Informações pessoais, educação, experiência
- Download de PDF do currículo

**Features:**
- Layout em duas colunas (desktop)
- Informações de contato
- Links para redes sociais
- Download de PDF

## Sistema de Design

### Tipografia

**Fonte Principal**: Poppins
- **Aplicação**: Global via `font-family: Poppins`
- **Pesos**: 300 (light), 400 (regular)
- **Uso**: Títulos, parágrafos, botões, elementos de texto

**Hierarquia:**
- `h1, h2, h3, h4, h5, h6`: Font-weight 400
- Parágrafos: Font-weight 300
- Botões: Font-weight 400

### Paleta de Cores

#### Cores Principais
- **Primary**: `#8247E5` (Roxo)
  - Uso: Botões, links, destaques, bordas de título
  - Hover: `#6a3bc7`

#### Cores Dinâmicas (CSS Variables)

**Tema Claro:**
```css
--background-color: white
--main-heading: #1d1d1d
--sub-heading: #646464
--paragraph: #504f4f
--aboutme-blogs-bg: #faf8f8
--resume-main-bg: #EAEAEA
```

**Tema Escuro:**
```css
--background-color: #252525
--main-heading: white
--sub-heading: #aaa3a3
--paragraph: #6d6d6d
--aboutme-blogs-bg: #232323
--resume-main-bg: #1B1B1B
```

### Espaçamento

**Padrão**: Sistema de espaçamento consistente

- **Section Spacing**: `padding: 60px 0px 0px 0px`
- **Section Intro**: `padding-top: 85px`
- **Margens**: Utilização de classes Bootstrap (m-1, m-5, mt-3, etc.)

### Componentes de Botão

#### Primary Button
**Classe**: `.primary-btn`

**Estilos:**
```scss
.primary-btn {
  color: #ffffff;
  font-family: Poppins;
  font-weight: 400;
  letter-spacing: 1.1px;
  background-color: #8247E5;
  border: 0;
  font-size: 12px;
  padding: 7px 20px;
  border-radius: 4px;
  cursor: pointer;
}
```

**Variações:**
- Tamanho grande: `padding: 12px 28px`, `font-size: 12px`
- Hover: Mudança de cor e transformação (`translateY(-2px)`)

### Grid System

**Framework**: Bootstrap Grid

**Breakpoints:**
- Mobile: `< 768px` (col-12)
- Tablet: `768px - 1024px` (col-md-*)
- Desktop: `> 1024px` (col-lg-*)

**Uso:**
```jsx
<div className="row">
  <div className="col-12 col-lg-6">Content</div>
  <div className="col-12 col-lg-6">Content</div>
</div>
```

## Padrões de Estilização

### SCSS Structure

**Global Styles**: `src/assets/scss/style.scss`
- Reset e normalizações
- Variáveis CSS
- Estilos globais de tipografia
- Classes utilitárias (`.primary-btn`, `.section-spacing`)

**Component Styles**: `_componentName.scss`
- Estilos específicos do componente
- Escopo local quando possível
- Uso de classes BEM-like quando necessário

### CSS Variables

**Aplicação Dinâmica:**
```javascript
document.documentElement.style.setProperty('--variable-name', 'value');
```

**Uso em SCSS:**
```scss
.element {
  color: var(--main-heading);
  background: var(--background-color);
}
```

### Responsividade

**Abordagem**: Mobile First

**Media Queries:**
```scss
@media only screen and (max-width: 991px) {
  // Estilos mobile/tablet
}
```

**Breakpoints:**
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

**Classes Responsivas:**
- `d-none d-lg-block`: Oculto no mobile, visível no desktop
- `d-block d-lg-none`: Visível no mobile, oculto no desktop

## Acessibilidade

### Atributos ARIA

**Implementação:**
- `aria-label`: Links e botões sem texto visível
- `aria-hidden`: Elementos decorativos
- `aria-current`: Item ativo em navegação
- `aria-expanded`: Estado de menu expandido/colapsado

**Exemplos:**
```jsx
<button aria-label="Toggle navigation" aria-expanded={show}>
<span className="visually-hidden">Anterior</span>
```

### Semantic HTML

**Elementos Utilizados:**
- `<header>`: Cabeçalho
- `<nav>`: Navegação
- `<main>`: Conteúdo principal (implícito)
- `<section>`: Seções de conteúdo
- `<footer>`: Rodapé

### Navegação por Teclado

- Links e botões focáveis
- Indicadores de foco visíveis
- Ordem lógica de tabulação

### Contraste

- Cores de texto e fundo atendem requisitos WCAG
- Tema dark/light mantém contraste adequado

### Alt Texts

**Padrão:**
- Todas as imagens têm `alt` descritivo
- Imagens decorativas podem usar `alt=""` (vazio)
- Imagens informativas têm descrição completa

**Exemplos:**
```jsx
<img src={image} alt="Perfil de Inara Angra" />
<img src={decorative} alt="" aria-hidden="true" />
```

## Componentes de Formulário

### Input Fields

**Estilos:**
```scss
.form-control {
  background-color: var(--background-color);
  border: 1px solid #4a4a4a;
  border-radius: 8px;
  color: var(--main-heading);
  font-family: Poppins;
  font-size: 16px;
  padding: 16px 20px;
}
```

**Estados:**
- Focus: Borda roxa (`#8247E5`)
- Hover: Borda roxa
- Placeholder: Cor `var(--sub-heading)`

### Textarea

**Características:**
- `resize: vertical`
- Altura mínima: `140px`
- Mesmos estilos de input

### Submit Button

**Estilos:**
- Largura total em formulários
- Background roxo com hover effect
- Transição suave

## Carrosséis

### Bootstrap Carousel

**Implementação:**
- Controle via jQuery (legacy)
- Indicadores de slide
- Controles prev/next
- Transições automáticas

**Estrutura:**
```jsx
<div className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">...</div>
  <div className="carousel-inner">...</div>
  <button className="carousel-control-prev">...</button>
  <button className="carousel-control-next">...</button>
</div>
```

## Ícones e Assets

### Ícones

**Biblioteca**: Lucide React
- Ícones SVG escaláveis
- Customizáveis via props

**Imagens Estáticas:**
- Localização: `src/assets/images/`
- Formatos: PNG, JPG, SVG
- Lazy loading implementado

### Otimização de Imagens

- `loading="lazy"` em imagens abaixo da dobra
- Alt texts descritivos
- Tamanhos apropriados para uso

## Animações e Transições

### Transições CSS

**Padrão:**
```scss
transition: all 0.3s ease;
```

**Aplicação:**
- Hover em botões
- Mudanças de tema
- Transformações (translateY)

### Animações

- Menu hambúrguer: Animação de rotação
- Carrossel: Transições suaves entre slides

## Tema Dark/Light

### Implementação Técnica

**Mecanismo:**
1. Estado em `Header.js` sincronizado com localStorage
2. CSS Variables atualizadas via JavaScript
3. Aplicação global via `:root`

**Toggle:**
- Botão no Header (desktop e mobile)
- Ícone muda conforme tema atual
- Persistência entre sessões

### Variáveis de Tema

Todas as cores principais são variáveis CSS que mudam conforme o tema:
- Backgrounds
- Textos (headings, paragraphs)
- Fundos de seções
- Elementos de UI

## Boas Práticas de Componentes

### Props

- Props desestruturadas quando múltiplas
- Valores padrão para props opcionais
- Type checking mental (TypeScript não utilizado)

### Estado

- Estado local quando possível
- localStorage para persistência
- Cleanup de effects e intervals

### Performance

- `useCallback` para handlers passados como props
- Lazy loading de assets pesados
- Memoização quando necessário

### Reutilização

- Componentes comuns extraídos (Header, Footer)
- Funções auxiliares reutilizáveis
- Estilos compartilhados via SCSS global
