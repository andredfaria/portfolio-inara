# Padrões de Código e Convenções

## Convenções de Nomenclatura

### Componentes React
- **Padrão**: PascalCase
- **Exemplos**: `Homepage.js`, `Introduction.js`, `AboutMe.js`, `ResumePage.js`
- **Arquivos**: Nome do arquivo deve corresponder ao nome do componente exportado

### Funções e Variáveis
- **Padrão**: camelCase
- **Exemplos**: `handleTheme`, `handleNext`, `handlePrev`, `isLive`, `darkTheme`
- **Handlers**: Prefixo `handle` para funções de evento (ex: `handleClick`, `handleSubmit`)

### Constantes
- **Padrão**: camelCase para constantes locais, UPPER_SNAKE_CASE para constantes globais
- **Exemplos**: 
  - Locais: `videos`, `posts`, `category`
  - Globais: Constantes de rotas em `routePaths.js` (camelCase)

### Arquivos e Diretórios
- **Componentes**: PascalCase para arquivos de componentes (ex: `Header.js`)
- **Estilos**: Snake_case com underscore prefix para SCSS partials (ex: `_header.scss`, `_footer.scss`)
- **Diretórios**: PascalCase para diretórios de componentes (ex: `Homepage/`, `ResumePage/`)

### Classes CSS
- **Padrão**: kebab-case
- **Exemplos**: `section-spacing`, `about-me-heading`, `video-carousel`, `intro-text-col`

## Estrutura de Componentes

### Componentes Funcionais

Todos os componentes são funcionais utilizando Hooks:

```javascript
import React, { useState, useEffect } from "react";

const ComponentName = (props) => {
  // 1. Hooks de estado
  const [state, setState] = useState(initialValue);
  
  // 2. Hooks de efeito
  useEffect(() => {
    // Lógica de efeito
    return () => {
      // Cleanup
    };
  }, [dependencies]);
  
  // 3. Handlers e funções auxiliares
  const handleAction = () => {
    // Lógica
  };
  
  // 4. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

### Ordem de Declarações

1. **Imports**: React primeiro, depois bibliotecas externas, depois componentes locais, por último estilos
2. **Hooks**: `useState`, `useEffect`, `useCallback`, `useMemo` (nesta ordem quando múltiplos)
3. **Funções auxiliares**: Handlers e funções utilitárias
4. **Render**: JSX de retorno
5. **Export**: Default export no final

### Exemplo Completo

```javascript
// 1. Imports
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import SomeLibrary from "some-library";
import LocalComponent from "./LocalComponent";
import "./styles.scss";

// 2. Componente
const MyComponent = (props) => {
  // 3. Estado
  const [value, setValue] = useState(null);
  
  // 4. Efeitos
  useEffect(() => {
    // Efeito
  }, []);
  
  // 5. Callbacks
  const handleClick = useCallback(() => {
    // Handler
  }, []);
  
  // 6. Render
  return <div>Content</div>;
};

// 7. Export
export default MyComponent;
```

## Padrão de Commits

### Conventional Commits

O projeto utiliza o padrão **Conventional Commits** para mensagens de commit:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Tipos de Commit

- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Mudanças na documentação
- **style**: Formatação, ponto e vírgula faltando, etc. (não afeta código)
- **refactor**: Refatoração de código (sem mudança de funcionalidade)
- **perf**: Melhoria de performance
- **test**: Adição ou correção de testes
- **chore**: Mudanças em build, dependências, configurações

### Exemplos

```bash
feat: adiciona carrossel de vídeos na homepage
fix: corrige toggle de tema dark no mobile
docs: atualiza README com instruções de instalação
style: formata código com Prettier
refactor: extrai lógica de tema para hook customizado
perf: implementa lazy loading em imagens
test: adiciona testes para componente Header
chore: atualiza dependências do projeto
```

### Escopo Opcional

```bash
feat(header): adiciona menu hambúrguer responsivo
fix(footer): corrige validação de formulário de contato
docs(architecture): documenta fluxo de dados
```

## Tratamento de Erros

### Validação de Formulários

**HTML5 Nativa:**
- Atributos `required` em inputs obrigatórios
- Tipo `email` para validação de email nativa
- Validação no cliente antes do submit

**Exemplo:**
```javascript
<input
  type="email"
  name="email"
  className="form-control"
  placeholder="Seu e-mail"
  required
/>
```

### Try-Catch

Para operações assíncronas ou que possam falhar:

```javascript
const handleAsyncAction = async () => {
  try {
    const result = await someAsyncOperation();
    // Sucesso
  } catch (error) {
    console.error("Erro na operação:", error);
    // Tratamento de erro (ex: toast de erro)
  }
};
```

### Validação de Dependências Externas

Verificação de existência antes de uso:

```javascript
if (typeof window !== "undefined" && window.jQuery) {
  window.jQuery("#element").carousel("next");
}
```

## Organização de Arquivos

### Estrutura por Feature

Componentes organizados por funcionalidade/página:

```
components/
├── common/          # Componentes compartilhados
├── Homepage/        # Feature: Página inicial
├── ResumePage/      # Feature: Currículo
└── TV/              # Feature: Portfólio TV
```

### Arquivos por Componente

Cada componente pode ter:
- `ComponentName.js`: Código do componente
- `_componentName.scss`: Estilos do componente
- `index.js`: Re-export para facilitar imports

**Exemplo:**
```
Introduction/
├── Introduction.js
├── _introduction.scss
└── index.js          # export { default } from './Introduction';
```

### Imports de Estilos

- Estilos globais: Importados em `App.js` ou `index.js`
- Estilos de componente: Importados no próprio componente
- Ordem: Sempre no final dos imports

```javascript
import React from "react";
import Component from "./Component";
import "./_component.scss";  // Último import
```

## Padrões de Estilização

### SCSS Modules

- Partials SCSS: Prefixo `_` (ex: `_header.scss`)
- Importação: `@import` ou `import` direto
- Escopo: Classes globais ou módulos por componente

### CSS Variables

Uso de variáveis CSS para temas dinâmicos:

```css
:root {
  --background-color: white;
  --main-heading: #1d1d1d;
}
```

Aplicação:
```javascript
document.documentElement.style.setProperty('--background-color', '#252525');
```

### Inline Styles

Uso limitado para estilos dinâmicos ou específicos:

```javascript
<div style={{ display: 'flex', gap: '20px' }}>
```

**Preferência**: SCSS para estilos estáticos, inline apenas quando necessário.

## Gerenciamento de Estado

### useState

Para estado local simples:

```javascript
const [value, setValue] = useState(initialValue);
```

### useEffect

Para efeitos colaterais:

```javascript
useEffect(() => {
  // Efeito
  return () => {
    // Cleanup
  };
}, [dependencies]);
```

### useCallback

Para memoização de funções:

```javascript
const handleAction = useCallback(() => {
  // Lógica
}, [dependencies]);
```

### localStorage

Para persistência de preferências:

```javascript
// Leitura
const [theme, setTheme] = useState(
  JSON.parse(localStorage.getItem("darkTheme")) || false
);

// Escrita
localStorage.setItem("darkTheme", JSON.stringify(theme));
```

## Acessibilidade

### Atributos ARIA

- `aria-label`: Para elementos sem texto visível
- `aria-hidden`: Para elementos decorativos
- `aria-current`: Para indicar item ativo

### Semantic HTML

- Uso de elementos semânticos: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Headings hierárquicos: `<h1>`, `<h2>`, `<h3>`, etc.

### Alt Texts

Todas as imagens devem ter `alt` descritivo:

```javascript
<img src={image} alt="Descrição da imagem" />
```

### Links Externos

Sempre incluir `rel="noopener noreferrer"`:

```javascript
<a href="url" target="_blank" rel="noopener noreferrer">
```

## Performance

### Lazy Loading

Imagens e iframes com `loading="lazy"`:

```javascript
<img src={image} alt="alt" loading="lazy" />
<iframe src={url} loading="lazy" />
```

### Memoização

Uso de `useCallback` para handlers passados como props:

```javascript
const handleClick = useCallback(() => {
  // Lógica
}, [dependencies]);
```

### Scroll Management

Reset de scroll ao mudar de rota:

```javascript
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
```

## Comentários e Documentação

### Comentários no Código

- Comentários explicativos para lógica complexa
- Comentários em português (PT-BR)
- Evitar comentários óbvios

### JSDoc (Opcional)

Para funções complexas:

```javascript
/**
 * Verifica se está no horário de transmissão ao vivo
 * @returns {boolean} true se estiver entre 9h-11h de segunda a sexta
 */
const checkLiveTime = () => {
  // Lógica
};
```

## Boas Práticas

### Imports

1. React primeiro
2. Bibliotecas externas
3. Componentes locais
4. Estilos por último

### Exports

- Default export para componentes principais
- Named exports para utilitários (se aplicável)

### Props

- Props desestruturadas quando múltiplas
- Props opcionais com valores padrão

```javascript
const Component = ({ prop1, prop2 = defaultValue }) => {
  // Uso
};
```

### Condicionais no JSX

Uso de operadores ternários ou `&&`:

```javascript
{condition && <Component />}
{condition ? <ComponentA /> : <ComponentB />}
```

### Keys em Lists

Sempre fornecer `key` única em listas:

```javascript
{items.map((item) => (
  <Component key={item.id} item={item} />
))}
```
