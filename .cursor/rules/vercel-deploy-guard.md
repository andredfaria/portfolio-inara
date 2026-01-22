# Rule: Vercel Deploy Guard - Proteção Absoluta contra Quebra de Deploy

## Contexto Crítico

**ESTA REGRA É OBRIGATÓRIA E TEM PRIORIDADE MÁXIMA.**

Esta regra garante que NENHUM código desenvolvido quebre o deploy na Vercel. Qualquer alteração que possa causar falha no build ou deploy DEVE ser bloqueada ou corrigida antes da implementação.

**Configuração Atual da Vercel:**
- Build Command: `npm run vercel-build`
- Output Directory: `build/`
- Framework: `create-react-app`
- Node.js: `>=20.0.0` (especificado em `.nvmrc` e `package.json`)
- Flag Crítica: `--legacy-peer-deps` (OBRIGATÓRIO no build)

---

## 1. Validação Obrigatória ANTES de Qualquer Alteração

### 1.1 Verificação de Build Command

**OBRIGATÓRIO:** Antes de modificar `package.json`, verificar:

- [ ] O script `vercel-build` existe e está correto
- [ ] O script `vercel-build` inclui `--legacy-peer-deps`
- [ ] O script `vercel-build` executa `react-scripts build`
- [ ] NÃO remover ou modificar o script `vercel-build` sem aprovação explícita

**Formato Esperado:**
```json
"vercel-build": "npm install --legacy-peer-deps && react-scripts build"
```

**BLOQUEIO ABSOLUTO:** Se você modificar este script e remover `--legacy-peer-deps`, o deploy IRÁ FALHAR.

### 1.2 Verificação de Node.js Version

**OBRIGATÓRIO:** Verificar compatibilidade de versão:

- [ ] `.nvmrc` especifica Node 20 (ou versão compatível >=20.0.0)
- [ ] `package.json` tem `"engines": { "node": ">=20.0.0" }`
- [ ] NÃO usar features do Node.js que requerem versão superior sem atualizar ambos os arquivos

### 1.3 Verificação de Dependências

**OBRIGATÓRIO:** Antes de adicionar/modificar dependências:

- [ ] Verificar se a dependência é compatível com React 18.3.1
- [ ] Verificar se a dependência não conflita com dependências existentes
- [ ] Se houver conflito de peer dependencies, garantir que `--legacy-peer-deps` resolve
- [ ] Testar instalação local antes de commitar: `npm install --legacy-peer-deps`

**BLOQUEIO:** Não adicionar dependências que quebrem o build sem resolver conflitos primeiro.

---

## 2. Validação de Código que Pode Quebrar o Build

### 2.1 Imports e Exports

**CHECKLIST OBRIGATÓRIO após qualquer alteração de imports:**

- [ ] Todos os imports existem e os caminhos estão corretos
- [ ] Imports de componentes usam caminhos relativos corretos
- [ ] Imports de assets (imagens, SCSS) usam caminhos corretos
- [ ] Não há imports circulares
- [ ] Todos os exports estão corretos
- [ ] Re-exports em `index.js` estão atualizados se necessário

**Ferramentas:**
```bash
# Verificar imports quebrados
grep -r "import.*from" src/ | verificar caminhos
read_lints: [arquivos modificados]
```

**BLOQUEIO:** Se houver import quebrado, o build FALHARÁ. Corrigir ANTES de prosseguir.

### 2.2 Sintaxe e Erros de Lint

**CHECKLIST OBRIGATÓRIO:**

- [ ] Executar `read_lints` em TODOS os arquivos modificados
- [ ] Corrigir TODOS os erros de lint antes de considerar completo
- [ ] Verificar que não há erros de sintaxe JavaScript
- [ ] Verificar que não há erros de sintaxe JSX
- [ ] Verificar que não há variáveis não utilizadas (podem causar warnings que quebram build em modo strict)

**Comando de Validação:**
```bash
read_lints: [caminho do arquivo]
```

**BLOQUEIO ABSOLUTO:** Erros de lint NÃO podem ser ignorados. O build da Vercel pode falhar com erros de lint.

### 2.3 Assets e Arquivos Estáticos

**CHECKLIST OBRIGATÓRIO:**

- [ ] Todos os caminhos de imagens estão corretos
- [ ] Imagens referenciadas existem em `src/assets/images/` ou `public/`
- [ ] Imports de SCSS usam caminhos relativos corretos
- [ ] Não há referências a arquivos que não existem
- [ ] Assets grandes estão otimizados (pode causar timeout no build)

**Verificação:**
```bash
# Verificar se arquivos referenciados existem
grep -r "from.*assets" src/
grep -r "src=.*images" src/
```

**BLOQUEIO:** Arquivos não encontrados quebram o build. Verificar ANTES de commitar.

### 2.4 Variáveis de Ambiente

**CHECKLIST OBRIGATÓRIO:**

- [ ] Se usar variáveis de ambiente, verificar se estão configuradas na Vercel
- [ ] Não usar `process.env` sem fallback seguro
- [ ] Verificar que variáveis críticas estão documentadas
- [ ] Não depender de variáveis de ambiente que não existem (causa erro em runtime)

**Exemplo Seguro:**
```javascript
const apiUrl = process.env.REACT_APP_API_URL || 'https://default-url.com';
```

**BLOQUEIO:** Variáveis de ambiente não configuradas podem quebrar a aplicação em produção.

---

## 3. Validação Específica do React e Create React App

### 3.1 Componentes React

**CHECKLIST OBRIGATÓRIO:**

- [ ] Todos os componentes React seguem a estrutura correta
- [ ] Hooks são usados corretamente (não em loops ou condicionais)
- [ ] Não há referências a `window` ou `document` durante SSR (não aplicável aqui, mas manter em mente)
- [ ] Imports do React estão corretos: `import React from "react"`
- [ ] JSX está bem formado (tags fechadas, atributos corretos)

### 3.2 React Router

**CHECKLIST OBRIGATÓRIO:**

- [ ] Rotas estão definidas corretamente em `App.js`
- [ ] `BrowserRouter` está configurado em `index.js`
- [ ] Links usam `react-router-dom` corretamente
- [ ] Rotas dinâmicas (`:slug`) estão configuradas corretamente
- [ ] Não há rotas quebradas ou componentes não encontrados

**Verificação:**
```bash
# Verificar rotas
read_file: src/App.js
read_file: src/routePaths.js
```

### 3.3 SASS/SCSS

**CHECKLIST OBRIGATÓRIO:**

- [ ] Imports de SCSS usam caminhos corretos
- [ ] Sintaxe SCSS está correta (não há erros de compilação)
- [ ] Partials SCSS (`_*.scss`) são importados corretamente
- [ ] Variáveis CSS estão definidas corretamente
- [ ] Não há referências a classes CSS que não existem

**BLOQUEIO:** Erros de compilação SCSS quebram o build. Validar sintaxe antes de commitar.

---

## 4. Validação do vercel.json

### 4.1 Estrutura Obrigatória

**NUNCA modificar `vercel.json` sem verificar:**

- [ ] `buildCommand` está correto: `"npm run vercel-build"`
- [ ] `outputDirectory` está correto: `"build"`
- [ ] `framework` está correto: `"create-react-app"`
- [ ] `rewrites` está configurado para SPA routing
- [ ] JSON está bem formado (sem erros de sintaxe)

**Estrutura Esperada:**
```json
{
  "buildCommand": "npm run vercel-build",
  "outputDirectory": "build",
  "framework": "create-react-app",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**BLOQUEIO ABSOLUTO:** Modificações incorretas em `vercel.json` quebram o deploy completamente.

---

## 5. Teste de Build Local Obrigatório

### 5.1 Simulação do Build da Vercel

**OBRIGATÓRIO:** Antes de considerar qualquer alteração completa, você DEVE:

1. **Sugerir execução do build de produção:**
   ```bash
   npm run vercel-build
   ```

2. **Verificar que o build completa sem erros:**
   - [ ] Build não retorna erros
   - [ ] Build não retorna warnings críticos
   - [ ] Pasta `build/` é criada com sucesso
   - [ ] Arquivos estáticos estão na pasta `build/`

3. **Se o build falhar:**
   - [ ] NÃO prosseguir com a alteração
   - [ ] Corrigir TODOS os erros
   - [ ] Testar novamente até passar

**BLOQUEIO:** Se o build local falhar, o deploy na Vercel TAMBÉM falhará. Corrigir ANTES de commitar.

### 5.2 Validação de Output

**Após build bem-sucedido, verificar:**

- [ ] Pasta `build/` contém `index.html`
- [ ] Pasta `build/` contém pasta `static/` com JS e CSS
- [ ] Não há arquivos faltando que são referenciados
- [ ] Tamanho do build é razoável (não excede limites da Vercel)

---

## 6. Checklist Final Antes de Commit

**OBRIGATÓRIO:** Antes de considerar qualquer alteração pronta para commit, verificar:

### Build e Deploy
- [ ] Script `vercel-build` está intacto e correto
- [ ] `vercel.json` está correto e não foi modificado incorretamente
- [ ] Node.js version é compatível (>=20.0.0)
- [ ] Build local foi testado e passou: `npm run vercel-build`

### Código
- [ ] Todos os imports estão corretos e arquivos existem
- [ ] Não há erros de lint (`read_lints` executado)
- [ ] Não há erros de sintaxe
- [ ] Todos os assets referenciados existem
- [ ] Componentes React estão corretos
- [ ] Rotas do React Router estão corretas
- [ ] SCSS compila sem erros

### Dependências
- [ ] Dependências adicionadas são compatíveis
- [ ] `--legacy-peer-deps` resolve conflitos se necessário
- [ ] `package.json` está bem formado (JSON válido)

### Variáveis e Configuração
- [ ] Variáveis de ambiente têm fallbacks seguros
- [ ] Não há referências a configurações locais que não existem em produção

---

## 7. Comandos de Validação Obrigatórios

**SEMPRE executar estes comandos antes de considerar completo:**

```bash
# 1. Verificar erros de lint
read_lints: [arquivos modificados]

# 2. Testar build de produção (SIMULA VERCEL)
npm run vercel-build

# 3. Verificar estrutura do build
ls -la build/
```

**Se qualquer comando falhar, BLOQUEAR a alteração até corrigir.**

---

## 8. Casos Especiais e Armadilhas Comuns

### 8.1 Flag --legacy-peer-deps

**CRÍTICO:** Este projeto REQUER `--legacy-peer-deps` devido a conflitos de dependências.

**NUNCA:**
- Remover esta flag do script `vercel-build`
- Modificar o script sem incluir esta flag
- Adicionar dependências que quebrem mesmo com esta flag

### 8.2 Imports de Assets

**Problema comum:** Imports de imagens quebram se o caminho estiver errado.

**Solução:**
- Sempre usar imports relativos: `import image from "../../assets/images/image.png"`
- Verificar que o arquivo existe antes de usar
- Não usar caminhos absolutos que dependem do sistema de arquivos local

### 8.3 React Router e SPA

**Problema comum:** Rotas quebram em produção se `vercel.json` não tiver rewrites.

**Solução:**
- NUNCA remover os rewrites do `vercel.json`
- Garantir que todas as rotas estão configuradas em `App.js`

### 8.4 Dependências com Conflitos

**Problema comum:** Adicionar dependências que conflitam e quebram o build.

**Solução:**
- Sempre testar `npm install --legacy-peer-deps` antes de commitar
- Verificar compatibilidade com React 18.3.1
- Se necessário, atualizar dependências conflitantes

---

## 9. Protocolo de Emergência

### Se o Deploy Quebrar

**Ações Imediatas:**

1. **Reverter commit que quebrou** (se possível)
2. **Identificar erro específico** nos logs da Vercel
3. **Reproduzir localmente:** `npm run vercel-build`
4. **Corrigir o problema**
5. **Testar build local novamente**
6. **Fazer novo commit com fix**

**NUNCA fazer deploy de código que não passou no build local.**

---

## 10. Integração com Outras Regras

Esta regra trabalha em conjunto com:
- `.cursor/rules/project-organization-stability.md` - Análise de impacto
- `.cursor/docs/STANDARDS.md` - Padrões de código
- `.cursor/docs/ARCHITECTURE.md` - Estrutura do projeto

**Prioridade:** Esta regra (Vercel Deploy Guard) tem PRIORIDADE MÁXIMA sobre outras regras quando há conflito relacionado a deploy.

---

## Notas Finais

**LEMBRE-SE:**
- Um build quebrado na Vercel = Site fora do ar
- Prevenção é melhor que correção
- Sempre testar build local antes de commitar
- `--legacy-peer-deps` é OBRIGATÓRIO
- `vercel.json` é SAGRADO - não modificar sem cuidado extremo

**Esta regra existe para GARANTIR que o site SEMPRE esteja no ar. Não ignore nenhum checklist.**
