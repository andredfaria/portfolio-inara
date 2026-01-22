# Stack Tecnológica

## Visão Geral

O Portfolio Inara é construído com tecnologias modernas do ecossistema React, utilizando Create React App como base e ferramentas complementares para funcionalidades específicas.

## Runtime e Ambiente

### Node.js
- **Versão Mínima**: >=20.0.0
- **Gerenciador de Versão**: `.nvmrc` especifica Node 20
- **Ambiente**: Desenvolvimento local e produção (Vercel)

### Gerenciador de Pacotes
- **npm**: Gerenciador padrão
- **bun**: Suportado (lockfile `bun.lockb` presente)
- **Instalação**: `npm install` ou `bun install`

## Framework e Biblioteca Principal

### React
- **Versão**: 18.3.1
- **Tipo**: Biblioteca JavaScript para construção de interfaces
- **Padrão**: Componentes funcionais com Hooks
- **React DOM**: 18.3.1 (renderização no navegador)

### Create React App (CRA)
- **Versão**: react-scripts 5.0.0
- **Build Tool**: Webpack (configurado internamente pelo CRA)
- **Transpilação**: Babel
- **Hot Reload**: Habilitado em desenvolvimento

## Roteamento

### React Router DOM
- **Versão**: 6.26.0
- **Tipo**: Roteamento client-side
- **Componentes Principais**:
  - `BrowserRouter`: Provider de roteamento
  - `Routes` e `Route`: Definição de rotas
  - `Link`: Navegação declarativa
- **Features**: Rotas dinâmicas, nested routes

## Estilização

### SASS/SCSS
- **Versão**: 1.77.8
- **Tipo**: Pré-processador CSS
- **Uso**: Arquivos `.scss` e `_*.scss` (partials)
- **Estrutura**:
  - `style.scss`: Estilos globais
  - `_*.scss`: Módulos por componente (ex: `_header.scss`, `_footer.scss`)

### CSS Variables (Custom Properties)
- **Uso**: Sistema de temas dinâmico
- **Aplicação**: Cores e valores dinâmicos baseados em tema
- **Manipulação**: JavaScript via `setProperty()`

### Bootstrap (Parcial)
- **Uso**: Classes utilitárias e grid system
- **Carrossel**: Bootstrap Carousel via jQuery
- **Grid**: Sistema de colunas responsivas

## Bibliotecas de UI e Componentes

### React Toastify
- **Versão**: 10.0.5
- **Uso**: Notificações toast elegantes
- **Estilização**: Customizada via CSS global

### React Tabs
- **Versão**: 6.0.2
- **Uso**: Componente de abas (se aplicável)

### React Responsive Carousel
- **Versão**: 3.2.23
- **Status**: Presente no package.json, uso não confirmado (carrosséis usam Bootstrap)

### React Hamburger Menu
- **Versão**: 1.2.1
- **Uso**: Ícone de menu hambúrguer no Header mobile

## Ícones e Assets

### Lucide React
- **Versão**: 0.439.0
- **Tipo**: Biblioteca de ícones SVG
- **Uso**: Ícones vetoriais escaláveis

### Assets Estáticos
- **Localização**: `src/assets/images/`
- **Formato**: PNG, JPG, SVG
- **Otimização**: Lazy loading implementado

## Validação e Formulários

### Validator
- **Versão**: 13.12.0
- **Uso**: Validação de dados (email, strings, etc.)

### FormSubmit.co
- **Tipo**: Serviço externo de formulários
- **Uso**: Processamento de formulário de contato
- **Método**: POST direto via HTML form
- **Nota**: EmailJS está no package.json mas não é utilizado

### EmailJS (Não Utilizado)
- **Versão**: 3.2.0
- **Status**: Presente no package.json mas não implementado
- **Substituído por**: FormSubmit.co

## Ferramentas de Desenvolvimento

### TypeScript (Dev Dependency)
- **Versão**: 3.9.10
- **Status**: Instalado mas projeto é JavaScript puro
- **Tipos**: @types/node, @types/react, @types/react-dom instalados

### ESLint
- **Configuração**: Extends `react-app` e `react-app/jest`
- **Padrão**: Regras do Create React App

### Testing Library
- **@testing-library/react**: 13.4.0
- **@testing-library/jest-dom**: 5.17.0
- **@testing-library/user-event**: 13.5.0
- **Uso**: Testes de componentes React

## Build e Deploy

### Build Tool
- **react-scripts build**: Gera bundle de produção
- **Output**: Pasta `build/` com assets otimizados
- **Otimizações**: Minificação, code splitting, tree shaking

### Vercel
- **Plataforma**: Deploy e hosting
- **Configuração**: `vercel.json`
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `build`
- **Framework**: create-react-app
- **Rewrites**: SPA routing (todas as rotas → `/index.html`)

### Scripts NPM

```json
{
  "start": "react-scripts start",           // Desenvolvimento (porta 3000)
  "dev": "react-scripts start",              // Alias para start
  "build": "npm install --legacy-peer-deps && react-scripts build",
  "vercel-build": "npm install --legacy-peer-deps && react-scripts build",
  "test": "react-scripts test",             // Testes unitários
  "eject": "react-scripts eject"            // Ejetar configuração CRA
}
```

**Nota**: `--legacy-peer-deps` necessário devido a conflitos de dependências.

## Dependências Legacy

### jQuery
- **Versão**: 3.7.1
- **Uso**: Controle de carrosséis Bootstrap
- **Status**: Dependência legada, possível refatoração futura

## PWA e Performance

### Service Worker
- **Registro**: Automático via `serviceWorker.js`
- **Funcionalidade**: Cache de assets, offline support
- **Status**: Habilitado em produção

### Web Vitals
- **Versão**: 2.1.4
- **Uso**: Métricas de performance (Core Web Vitals)

## Browsers Suportados

### Produção
```json
">0.2%",
"not dead",
"not op_mini all"
```

### Desenvolvimento
```json
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
```

## Estrutura de Dependências

### Dependencies (Produção)
- React e React DOM: Core framework
- React Router DOM: Roteamento
- SASS: Pré-processador CSS
- React Toastify: Notificações
- Validator: Validação
- Lucide React: Ícones
- jQuery: Controle de carrosséis (legacy)
- EmailJS: Instalado mas não utilizado

### DevDependencies
- TypeScript: Tipos (projeto é JS)
- @types/*: Definições de tipos
- Testing Library: Testes

## Configurações Especiais

### Engines (package.json)
```json
"engines": {
  "node": ">=20.0.0"
}
```

### ESLint Config
```json
"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest"
  ]
}
```

## Ambiente de Desenvolvimento

### Requisitos
- Node.js >= 20.0.0
- npm ou bun
- Navegador moderno (Chrome, Firefox, Safari)

### Setup
```bash
# Instalar dependências
npm install
# ou
bun install

# Iniciar servidor de desenvolvimento
npm start
# Acessa em http://localhost:3000
```

### Variáveis de Ambiente
- Arquivos `.env.local`, `.env.development.local`, `.env.production.local` suportados
- Gitignored para segurança

## Observações Técnicas

1. **Legacy Peer Deps**: Necessário devido a conflitos de versões entre dependências
2. **EmailJS vs FormSubmit**: EmailJS instalado mas não utilizado; FormSubmit.co é a solução atual
3. **TypeScript**: Instalado mas projeto é JavaScript puro
4. **jQuery**: Dependência legada para carrosséis; possível refatoração futura
5. **Bootstrap Carousel**: Utilizado via jQuery, não via React Bootstrap
