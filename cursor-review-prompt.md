# Prompt para Revisão de Design System no Cursor

Cole este prompt no Cursor para solicitar a revisão do seu projeto.

---

```
Revise este projeto de design system de forma completa e critique com rigor. Analise cada arquivo e retorne um relatório estruturado com problemas encontrados e correções sugeridas. Seja direto — sem explicações óbvias ou redundantes.

## Escopo da revisão

### 1. Arquitetura e estrutura
- A organização de pastas segue um padrão claro e escalável?
- Existe separação adequada entre tokens, primitivos, componentes compostos e utilitários?
- Há barrel exports bem configurados sem circular dependencies?
- O tree-shaking funciona corretamente? Há side effects desnecessários?

### 2. Tokens e variáveis
- Os design tokens seguem uma nomenclatura semântica (ex: `color-surface-primary` em vez de `color-blue-500`)?
- Existe uma camada de abstração entre tokens primitivos e tokens semânticos?
- Os tokens estão preparados para theming (dark mode, white-label, etc.)?
- Há valores hardcoded que deveriam ser tokens?

### 3. Qualidade do código
- Identifique código verboso que pode ser simplificado sem perder clareza.
- Há duplicação de lógica, estilos ou tipos entre componentes?
- As interfaces e tipos estão bem definidos, sem `any`, `as` desnecessários ou tipos muito genéricos?
- Props seguem convenções consistentes (nomenclatura, ordenação, defaults)?
- Cada componente tem uma responsabilidade única e bem definida?

### 4. Segurança
- Há vulnerabilidades em dependências (verifique versões)?
- Existe sanitização adequada para props que aceitam conteúdo dinâmico (innerHTML, URLs, etc.)?
- Componentes que renderizam conteúdo do usuário estão protegidos contra XSS?
- Há exposição de informações sensíveis em logs, comentários ou configurações?
- As dependências externas são realmente necessárias ou podem ser substituídas por implementações internas leves?

### 5. Acessibilidade
- Todos os componentes interativos têm roles ARIA corretos?
- A navegação por teclado funciona em todos os componentes interativos?
- Há contraste suficiente nos tokens de cor definidos?
- Labels, focus traps e live regions estão implementados onde necessário?

### 6. Performance
- Há re-renders desnecessários? Componentes que deveriam ser memoizados?
- CSS/estilos geram especificidade excessiva ou bundles grandes?
- Imports pesados que poderiam ser lazy-loaded?
- Animações usam propriedades que forçam layout/paint (evitar `top`, `left`, `width`, `height` em favor de `transform` e `opacity`)?

### 7. API dos componentes
- As props são intuitivas para quem vai consumir o design system?
- Há consistência entre componentes similares (ex: todos usam `variant`, `size`, `disabled` da mesma forma)?
- Componentes suportam composição (slots, children, render props) em vez de configs monolíticas?
- Refs são forwarded corretamente?
- Eventos nativos do DOM são propagados (`...rest` spread)?

### 8. Documentação e DX
- Cada componente exportado tem JSDoc ou comentários úteis (não óbvios)?
- Há exemplos de uso nos comentários ou storybook?
- Os nomes de props, componentes e tokens são autoexplicativos?
- Mensagens de erro e warnings em dev são claras e acionáveis?

## Formato da resposta

Para cada problema encontrado:

**[Categoria] Arquivo: caminho/do/arquivo**
- **Problema**: descrição objetiva
- **Severidade**: crítica | alta | média | baixa
- **Correção**: código ou instrução específica

No final, inclua:
- Um resumo com contagem de problemas por severidade
- As 5 melhorias de maior impacto que eu deveria priorizar
- Uma nota sobre a saúde geral do projeto (de 1 a 10) com justificativa em uma frase
```
