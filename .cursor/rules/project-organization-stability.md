# Rule: Project Organization & Stability Guard

## Contexto

Esta regra estabelece protocolos obrigatórios para todas as alterações de código, ajustes e novas funcionalidades no projeto. O objetivo é garantir estabilidade, rastreabilidade e integridade do código antes e depois de qualquer modificação.

**Referências:**
- Padrões de commit: `.cursor/docs/STANDARDS.md`
- Arquitetura: `.cursor/docs/ARCHITECTURE.md`
- Convenções de código: `.cursor/docs/STANDARDS.md`

## 1. Análise de Impacto (Pré-Implementação)

Antes de escrever qualquer código ou fazer qualquer alteração, você DEVE executar a seguinte análise de impacto:

### 1.1 Identificação de Dependências

**Ações Obrigatórias:**

1. **Identificar arquivos que importam o componente/função sendo modificado:**
   ```bash
   # Use grep para buscar imports
   grep -r "nomeDoComponente" src/
   # Use codebase_search para busca semântica
   codebase_search "Onde o componente X é utilizado?"
   ```

2. **Verificar exports e imports:**
   - Liste todos os arquivos que importam o arquivo sendo modificado
   - Identifique se há re-exports em arquivos `index.js`
   - Verifique se a alteração quebra contratos de API (props, parâmetros, retornos)

3. **Verificar dependências de configuração:**
   - Verifique `package.json` para dependências afetadas
   - Verifique `vercel.json` para configurações de deploy
   - Verifique arquivos de configuração (`.nvmrc`, `browserslist`, etc.)

4. **Verificar variáveis de ambiente:**
   - Liste arquivos `.env*` que possam ser afetados
   - Verifique se a alteração requer novas variáveis de ambiente
   - Documente variáveis que precisam ser configuradas

5. **Verificar rotas e navegação:**
   - Se alterar rotas, verifique `routePaths.js` e `App.js`
   - Identifique links internos que podem ser afetados

### 1.2 Output Esperado

Antes de prosseguir, você DEVE apresentar:

```
## Análise de Impacto

### Arquivos a Modificar:
- [lista de arquivos]

### Arquivos Dependentes:
- [lista de arquivos que importam/usam o código modificado]

### Configurações Afetadas:
- [package.json, vercel.json, .env, etc.]

### Riscos Potenciais:
- [lista de riscos identificados]
- [impacto no servidor/deploy]
- [quebras de compatibilidade possíveis]
```

**IMPORTANTE:** Não prossiga com a implementação até apresentar esta análise.

## 2. Ciclo de Vida do Ajuste

### 2.1 Gerenciamento de Tarefas

Você DEVE manter o arquivo `.cursor/roadmap.md` atualizado durante toda a sessão:

1. **No início de cada nova solicitação:**
   - Abra/atualize `.cursor/roadmap.md`
   - Adicione uma nova seção com data/hora
   - Liste todas as tarefas relacionadas à solicitação

2. **Formato de Tarefas:**
   ```markdown
   ## [Data] - [Descrição da Solicitação]
   
   - [ ] TODO: Descrição da tarefa
   - [x] DONE: Tarefa concluída
   - [!] BLOCKER: Tarefa bloqueada (descrever motivo)
   ```

3. **Atualização em Tempo Real:**
   - Marque tarefas como `[x] DONE` imediatamente após conclusão
   - Marque como `[!] BLOCKER` se encontrar impedimentos
   - Adicione comentários explicativos quando necessário

4. **Identificação de Blockers:**
   - Se uma tarefa depende de outra, marque como BLOCKER até a dependência ser resolvida
   - Documente o motivo do bloqueio
   - Sugira alternativas se possível

### 2.2 Estrutura do Roadmap

O arquivo `.cursor/roadmap.md` deve seguir este formato:

```markdown
# Roadmap de Desenvolvimento

## [YYYY-MM-DD HH:MM] - [Título da Solicitação]

### Status Geral
- Total de tarefas: X
- Concluídas: Y
- Pendentes: Z
- Bloqueadas: W

### Tarefas
- [ ] TODO: Tarefa 1
- [x] DONE: Tarefa 2
- [!] BLOCKER: Tarefa 3 (motivo: aguardando X)

### Observações
- [notas relevantes]
```

## 3. Verificação de Integridade (Pós-Implementação)

Após escrever qualquer código, você DEVE executar as seguintes verificações:

### 3.1 Validação de Sintaxe

1. **Executar linter:**
   ```bash
   # Use read_lints para verificar erros
   read_lints [caminho dos arquivos modificados]
   ```

2. **Verificar erros de sintaxe:**
   - JavaScript/JSX: Verificar parênteses, chaves, ponto e vírgula
   - SCSS: Verificar sintaxe de pré-processador
   - JSON: Validar estrutura de arquivos de configuração

### 3.2 Verificação de Imports

1. **Verificar imports circulares:**
   - Mentalmente rastreie a cadeia de imports
   - Identifique se há dependências circulares (A → B → A)
   - Se encontrar, refatore para quebrar o ciclo

2. **Verificar ordem de imports:**
   - React primeiro
   - Bibliotecas externas
   - Componentes locais
   - Estilos por último
   - Conforme documentado em `.cursor/docs/STANDARDS.md`

3. **Verificar imports quebrados:**
   - Todos os imports devem apontar para arquivos existentes
   - Verificar paths relativos e absolutos
   - Verificar se exports correspondem aos imports

### 3.3 Simulação de Inicialização

Mentalmente simule o fluxo de inicialização:

1. **Entry Point (`src/index.js`):**
   - Verifique se todos os imports são válidos
   - Verifique se o componente raiz é renderizado corretamente

2. **App Component (`src/App.js`):**
   - Verifique se todas as rotas estão definidas
   - Verifique se os componentes de rota existem

3. **Componentes:**
   - Verifique se props esperadas são fornecidas
   - Verifique se hooks são usados corretamente
   - Verifique se não há dependências faltando

### 3.4 Testes e Validação

1. **Sugerir execução de testes:**
   ```bash
   npm test
   ```
   - Se houver testes automatizados, você DEVE sugerir sua execução
   - Documente quais testes foram executados e seus resultados

2. **Verificar build:**
   ```bash
   npm run build
   ```
   - Sugira verificação de build em produção
   - Identifique warnings ou erros de build

3. **Verificar servidor de desenvolvimento:**
   ```bash
   npm start
   ```
   - Sugira iniciar o servidor para verificação visual
   - Verifique se não há erros no console

### 3.5 Checklist de Integridade

Após cada alteração, confirme:

- [ ] Sintaxe validada (read_lints executado)
- [ ] Imports verificados (sem circulares, ordem correta)
- [ ] Fluxo de inicialização simulado mentalmente
- [ ] Testes sugeridos (se aplicável)
- [ ] Build verificado (se aplicável)
- [ ] Servidor inicia sem erros (sugerido ao usuário)

## 4. Protocolo de Commit

### 4.1 Commits Atômicos

Você DEVE sugerir commits atômicos seguindo estes princípios:

1. **Uma funcionalidade por commit:**
   - Cada commit deve representar uma mudança lógica completa
   - Evite misturar múltiplas funcionalidades não relacionadas
   - Se uma funcionalidade requer múltiplos arquivos, inclua todos no mesmo commit

2. **Commits pequenos e focados:**
   - Prefira múltiplos commits pequenos a um commit grande
   - Facilita revisão, rollback e debugging

### 4.2 Conventional Commits

Sempre use o padrão **Conventional Commits** conforme documentado em `.cursor/docs/STANDARDS.md`:

**Formato:**
```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

**Tipos:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Mudanças na documentação
- `style`: Formatação (não afeta código)
- `refactor`: Refatoração sem mudança de funcionalidade
- `perf`: Melhoria de performance
- `test`: Adição/correção de testes
- `chore`: Mudanças em build, dependências, configurações

**Escopo (opcional):**
- Nome do componente/feature afetado
- Exemplos: `feat(header):`, `fix(footer):`, `chore(build):`

### 4.3 Exemplos de Mensagens

**Bom:**
```
feat(homepage): adiciona carrossel de vídeos de destaques
fix(header): corrige toggle de tema dark no mobile
docs(architecture): atualiza documentação de fluxo de dados
refactor(footer): extrai componente ContactForm
chore(deps): atualiza react-router-dom para v6.26.0
```

**Ruim:**
```
Atualizações
fix bug
mudanças
```

### 4.4 Mensagens em Português

- Todas as mensagens de commit devem estar em **Português PT-BR**
- Use descrições claras e específicas
- Se necessário, adicione corpo explicando o "porquê" da mudança

### 4.5 Sugestão de Commits

Após concluir uma funcionalidade, você DEVE sugerir:

```bash
git add [arquivos modificados]
git commit -m "tipo(escopo): descrição da mudança"
```

**Exemplo completo:**
```bash
git add src/components/Homepage/Homepage.js
git add src/components/Homepage/VideoCarousel.js
git commit -m "feat(homepage): adiciona carrossel de vídeos com navegação"
```

## 5. Fluxo Completo de Trabalho

### 5.1 Sequência Obrigatória

Para cada solicitação de alteração, siga esta sequência:

1. **Análise de Impacto** (Seção 1)
   - Execute todas as verificações
   - Apresente o resumo de impacto
   - Aguarde confirmação implícita do usuário

2. **Atualização do Roadmap** (Seção 2)
   - Abra/atualize `.cursor/roadmap.md`
   - Liste todas as tarefas
   - Mantenha atualizado durante implementação

3. **Implementação**
   - Escreva o código seguindo padrões em `.cursor/docs/STANDARDS.md`
   - Atualize status das tarefas no roadmap

4. **Verificação de Integridade** (Seção 3)
   - Execute todas as verificações
   - Sugira testes e validações
   - Confirme checklist

5. **Protocolo de Commit** (Seção 4)
   - Sugira commits atômicos
   - Use Conventional Commits
   - Mensagens em Português PT-BR

### 5.2 Exceções

- **Leituras simples:** Para apenas ler arquivos sem alterações, pule análise de impacto
- **Documentação:** Para alterações apenas em `.md`, análise de impacto pode ser simplificada
- **Correções urgentes:** Em correções críticas, análise pode ser acelerada mas não omitida

## 6. Ferramentas Disponíveis

Você tem acesso às seguintes ferramentas para executar este protocolo:

- `grep`: Busca textual em arquivos
- `codebase_search`: Busca semântica no código
- `read_lints`: Validação de sintaxe e linting
- `read_file`: Leitura de arquivos para análise
- `list_dir`: Exploração de estrutura de diretórios

Use essas ferramentas conforme necessário em cada etapa do protocolo.

## 7. Notas Finais

- Esta regra é **obrigatória** para todas as alterações de código
- Não pule etapas mesmo para mudanças pequenas
- Quando em dúvida, seja mais conservador e faça mais verificações
- O objetivo é prevenir bugs e manter a estabilidade do projeto
