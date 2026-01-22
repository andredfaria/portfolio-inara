# Arquitetura do Sistema

## Visão Geral

O Portfolio Inara é uma Single Page Application (SPA) construída com React, seguindo o padrão **Component-Based Architecture**. A aplicação utiliza roteamento client-side para navegação entre páginas sem recarregamento completo, proporcionando uma experiência fluida ao usuário.

## Padrão Arquitetural

### Component-Based Architecture

A aplicação adota uma arquitetura baseada em componentes React funcionais, onde cada componente encapsula sua própria lógica, estado e apresentação. Esta abordagem promove:

- **Reutilização**: Componentes comuns (Header, Footer) são compartilhados entre páginas
- **Modularidade**: Cada feature/página possui seus próprios componentes organizados em diretórios
- **Manutenibilidade**: Separação clara de responsabilidades facilita manutenção e evolução

### Estrutura de Diretórios

```
src/
├── components/
│   ├── common/           # Componentes compartilhados
│   │   ├── Header.js     # Navegação e toggle de tema
│   │   └── Footer.js     # Formulário de contato e redes sociais
│   ├── Homepage/         # Página inicial
│   │   ├── Introduction.js
│   │   ├── AboutMe.js
│   │   └── VideoCarousel.js
│   ├── ResumePage/       # Página de currículo
│   │   └── ResumePage.js
│   └── TV/               # Página de portfólio TV/Rádio
│       ├── TVPage.js
│       └── InstagramEmbed.js
├── assets/
│   ├── images/          # Assets estáticos
│   └── scss/            # Estilos globais
├── App.js               # Configuração de rotas
├── routePaths.js        # Centralização de constantes de rotas
└── index.js             # Entry point da aplicação
```

## Fluxo de Dados

### Unidirectional Data Flow

A aplicação segue o padrão de fluxo unidirecional do React:

1. **Estado Local**: Componentes gerenciam estado interno via `useState` e `useEffect`
2. **Props Down**: Dados fluem de componentes pais para filhos via props
3. **Events Up**: Eventos são propagados via callbacks passados como props

### Gerenciamento de Estado

**Estado Local por Componente:**
- Cada componente mantém seu próprio estado quando necessário
- Exemplo: `Header` gerencia estado do menu hambúrguer e tema dark/light
- Exemplo: `Introduction` gerencia estado de verificação de horário ao vivo

**Persistência de Estado:**
- Tema dark/light: `localStorage` para persistência entre sessões
- Preferências do usuário são mantidas no navegador

**Sem Estado Global:**
- A aplicação não utiliza Context API ou Redux
- Comunicação entre componentes distantes é feita via props ou rotas

## Roteamento

### React Router v6

A aplicação utiliza React Router DOM v6.26.0 para roteamento client-side:

```javascript
// App.js - Configuração de rotas
<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="curriculo" element={<ResumePage />} />
  <Route path="televisao" element={<TV />} />
  <Route path="blog" element={<BlogPage />} />
  <Route path="blog/:slug" element={<BlogPost />} />
</Routes>
```

**Características:**
- Rotas declarativas usando componentes `<Route>`
- Rotas dinâmicas com parâmetros (`:slug`)
- Navegação programática via `Link` e `useNavigate`
- Scroll automático para topo ao mudar de rota (implementado via `useEffect`)

**Centralização de Rotas:**
- Arquivo `routePaths.js` centraliza constantes de rotas para evitar strings hardcoded
- Facilita manutenção e refatoração de URLs

## Sistema de Temas

### Implementação com CSS Variables

O sistema de temas claro/escuro é implementado através de CSS Variables (Custom Properties) e JavaScript:

**Mecanismo:**
1. Variáveis CSS definem cores dinâmicas no `:root`
2. JavaScript atualiza variáveis via `document.documentElement.style.setProperty()`
3. Preferência salva em `localStorage` para persistência

**Variáveis Principais:**
```css
--background-color    /* Cor de fundo principal */
--main-heading        /* Cor de títulos */
--sub-heading         /* Cor de subtítulos */
--paragraph           /* Cor de texto de parágrafos */
--aboutme-blogs-bg    /* Fundo de seções */
--resume-main-bg      /* Fundo da página de currículo */
```

**Componente Responsável:**
- `Header.js` gerencia o toggle e aplicação do tema
- Estado sincronizado com `localStorage` via `useEffect`

## Integrações Externas

### YouTube Embeds

**Implementação:**
- Vídeos incorporados via `<iframe>` com URLs do YouTube
- Carrossel Bootstrap controlado via jQuery para navegação
- Lazy loading habilitado para performance

**Localização:**
- `Homepage.js`: Carrossel de destaques na página inicial
- `TVPage.js`: Múltiplos carrosséis por categoria (Reportagens, TV e Rádio)

### Instagram Embeds

**Implementação:**
- Posts do Instagram incorporados via `<iframe>`
- Componente `InstagramEmbed.js` encapsula a lógica
- IDs de posts armazenados em array no componente pai

**Características:**
- Responsivo com grid Bootstrap
- Lazy loading para otimização

### FormSubmit.co

**Formulário de Contato:**
- Formulário HTML nativo com `action` apontando para FormSubmit.co
- Validação HTML5 nativa (`required` attributes)
- Submissão via POST direto ao serviço externo
- Não utiliza EmailJS (mesmo estando no `package.json`)

**Localização:**
- `Footer.js` - Componente `ContactForm`

### Service Worker (PWA)

**Registro:**
- Service Worker registrado em `index.js` via `serviceWorker.register()`
- Habilita funcionalidades de Progressive Web App
- Cache de assets para funcionamento offline

## Performance

### Otimizações Implementadas

1. **Lazy Loading de Imagens:**
   - Atributo `loading="lazy"` em imagens e iframes
   - Reduz carga inicial da página

2. **Code Splitting:**
   - React Router realiza code splitting automático por rota
   - Cada página carrega apenas seus componentes necessários

3. **Memoização:**
   - `useCallback` utilizado em handlers de eventos para evitar re-renders desnecessários
   - Exemplo: `handleNext` e `handlePrev` no carrossel

4. **Scroll Management:**
   - Scroll resetado para topo ao navegar entre rotas
   - Implementado via `useEffect` em componentes de página

## Dependências Legacy

### jQuery e Bootstrap Carousel

**Contexto:**
- O projeto utiliza jQuery para controle de carrosséis Bootstrap
- Dependência legada mantida para compatibilidade com carrosséis existentes

**Uso:**
```javascript
window.jQuery("#video-carrusel-inara").carousel("next");
window.jQuery("#video-carrusel-inara").carousel("prev");
```

**Considerações:**
- Verificação de existência do jQuery antes de uso (`typeof window !== "undefined" && window.jQuery`)
- Possível refatoração futura para solução React nativa

## Fluxo de Renderização

1. **Entry Point (`index.js`):**
   - Renderiza `<App />` dentro de `ReactDOM.createRoot()`
   - Envolvido em `<BrowserRouter>` para habilitar roteamento
   - Service Worker registrado

2. **App Component (`App.js`):**
   - Define estrutura de rotas
   - Importa estilos globais e CSS de bibliotecas externas

3. **Componentes de Página:**
   - Cada rota renderiza um componente de página completo
   - Páginas incluem `Header` e `Footer` como layout comum
   - Conteúdo específico renderizado no corpo

4. **Componentes Filhos:**
   - Componentes filhos renderizados dentro de páginas
   - Estado e props gerenciados localmente

## Considerações de Segurança

- Links externos utilizam `rel="noopener noreferrer"` para prevenir vulnerabilidades
- Formulários validados no cliente (HTML5) e servidor (FormSubmit.co)
- Service Worker registrado apenas em produção
- Iframes de terceiros (YouTube, Instagram) carregados com atributos de segurança apropriados
