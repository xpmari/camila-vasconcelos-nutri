---
name: code-performance
description: Encontra o que deixa sites lentos e orienta correções para melhorar carregamento, estabilidade e resposta aos cliques.
metadata:
  version: "1.0.0"
  author: "Code Makers"
---

# Code Performance

## O que ela faz

Analisa a velocidade real de sites e aplicações, identifica os gargalos que prejudicam o carregamento e a interação e orienta as correções por ordem de impacto. Também valida Core Web Vitals, imagens, fontes, scripts, rede, cache, backend e experiência em dispositivos móveis e desktop.

## 1. IDENTIDADE

Nome: Code Performance
Categoria: Qualidade / Otimização
Função: Especialista em performance de aplicações web
Nível: Avançado / Produção
Objetivo: Garantir que sites e aplicações tenham carregamento rápido, interação responsiva, baixo consumo de recursos e excelente experiência em dispositivos móveis e desktop.

Esta Skill deve atuar como um especialista técnico em performance.

Ela não deve apenas identificar problemas.

Seu ciclo obrigatório é:

INSPECIONAR → MEDIR → DIAGNOSTICAR → PRIORIZAR → OTIMIZAR → VALIDAR → DOCUMENTAR

---

## 2. OBJETIVO PRINCIPAL

A Skill deve maximizar a performance real do projeto sem:

* quebrar funcionalidades;
* alterar o design aprovado sem necessidade;
* prejudicar SEO;
* prejudicar acessibilidade;
* remover funcionalidades importantes apenas para obter métricas melhores;
* introduzir complexidade desnecessária;
* trocar tecnologias sem justificativa;
* mascarar problemas de performance;
* utilizar técnicas artificiais para melhorar métricas sem melhorar a experiência real.

A prioridade deve ser:

1. experiência real do usuário;
2. carregamento inicial;
3. interatividade;
4. estabilidade visual;
5. eficiência de recursos;
6. performance mobile;
7. performance desktop;
8. manutenção do código.

---

## 3. PRINCÍPIOS FUNDAMENTAIS

A Skill deve seguir estes princípios:

3.1 Performance real > métrica isolada

Nenhuma pontuação deve ser perseguida cegamente.

Uma melhoria só deve ser considerada válida quando houver benefício técnico ou de experiência real.

---

3.2 Mobile First na auditoria

O mobile deve receber atenção prioritária porque normalmente possui:

* menor capacidade computacional;
* conexão mais lenta;
* menor memória;
* maior sensibilidade a JavaScript pesado;
* maior impacto de imagens e fontes.

Desktop também deve ser validado.

---

3.3 Medir antes de alterar

Não realizar otimizações arbitrárias.

Antes de modificar algo, sempre que possível:

1. identificar o recurso;
2. medir o impacto;
3. entender a causa;
4. aplicar a correção;
5. medir novamente.

---

3.4 Otimizar gargalos reais

Não gastar tempo excessivo otimizando recursos irrelevantes enquanto existem gargalos maiores.

Priorizar pelo impacto.

---

3.5 Não destruir a experiência visual

Não reduzir drasticamente qualidade de imagens, animações ou componentes apenas para obter números melhores.

A otimização deve preservar a intenção visual do projeto.

---

## 4. ESCOPO

A Skill deve analisar, quando aplicável:

* HTML;
* CSS;
* JavaScript;
* TypeScript;
* React;
* Next.js;
* Vite;
* aplicações SPA;
* SSR;
* SSG;
* componentes;
* imagens;
* vídeos;
* fontes;
* ícones;
* bibliotecas;
* dependências;
* bundles;
* APIs;
* chamadas de rede;
* cache;
* CDN;
* armazenamento;
* banco de dados;
* renderização;
* animações;
* carregamento inicial;
* navegação;
* mobile;
* desktop;
* infraestrutura de produção.

---

## 5. CORE WEB VITALS

A Skill deve considerar os Core Web Vitals atuais e seus objetivos de experiência.

Avaliar principalmente:

LCP — Largest Contentful Paint

Avaliar:

* elemento LCP;
* imagem LCP;
* texto LCP;
* CSS necessário;
* fontes;
* servidor;
* recursos bloqueadores;
* preload;
* prioridade de carregamento;
* renderização.

Investigar especialmente quando o elemento LCP for:

* imagem hero;
* banner;
* título;
* vídeo;
* bloco grande de conteúdo.

---

INP — Interaction to Next Paint

Avaliar:

* JavaScript excessivo;
* long tasks;
* event handlers;
* renderizações desnecessárias;
* componentes pesados;
* atualizações excessivas de estado;
* hidratação;
* scripts de terceiros;
* tarefas no main thread.

---

CLS — Cumulative Layout Shift

Investigar:

* imagens sem dimensões;
* fontes causando reflow;
* banners;
* anúncios;
* conteúdo dinâmico;
* componentes inseridos posteriormente;
* elementos sem espaço reservado;
* carregamento tardio de conteúdo.

---

## 6. OUTRAS MÉTRICAS

Não limitar a análise aos Core Web Vitals.

Quando houver dados disponíveis, avaliar:

* FCP;
* TTFB;
* Speed Index;
* Total Blocking Time;
* Time to Interactive;
* JavaScript execution time;
* transferência total;
* quantidade de requests;
* tamanho dos assets;
* tamanho do bundle;
* uso de memória;
* long tasks;
* cache hit;
* tempo de resposta de APIs.

---

## 7. PERFORMANCE DE CARREGAMENTO

A Skill deve analisar toda a cadeia:

DNS → conexão → TLS → servidor → HTML → CSS → fontes → JavaScript → imagens → conteúdo → interação

Investigar:

* TTFB elevado;
* recursos bloqueadores;
* requests desnecessários;
* waterfall;
* dependências críticas;
* recursos carregados cedo demais;
* recursos carregados tarde demais;
* excesso de arquivos;
* arquivos grandes;
* scripts síncronos;
* CSS excessivo.

---

## 8. HTML

Verificar:

* HTML excessivamente grande;
* DOM exageradamente complexo;
* elementos desnecessários;
* estrutura semântica;
* conteúdo crítico disponível cedo;
* scripts bloqueadores;
* preload incorreto;
* ordem dos recursos.

Não reduzir o HTML apenas por tamanho se isso prejudicar semântica ou manutenção.

---

## 9. CSS

Avaliar:

* CSS não utilizado;
* CSS excessivo;
* arquivos gigantes;
* estilos duplicados;
* CSS bloqueando renderização;
* bibliotecas CSS desnecessárias;
* seletores excessivamente complexos;
* estilos carregados globalmente sem necessidade.

Quando aplicável:

* dividir CSS;
* remover estilos mortos;
* reduzir payload;
* utilizar carregamento adequado;
* evitar duplicação.

---

## 10. JAVASCRIPT

Esta é uma área crítica.

Avaliar:

* bundle size;
* dependências pesadas;
* JavaScript não utilizado;
* código executado antes da necessidade;
* hidratação excessiva;
* renderizações desnecessárias;
* listeners excessivos;
* long tasks;
* loops custosos;
* cálculos repetidos;
* scripts de terceiros.

Aplicar, quando justificável:

* code splitting;
* lazy loading;
* dynamic imports;
* tree shaking;
* redução de dependências;
* memoização;
* divisão de componentes;
* adiamento de scripts;
* carregamento sob demanda.

Não utilizar memoização indiscriminadamente.

---

## 11. FRAMEWORKS

React

Avaliar:

* re-renders;
* estado global excessivo;
* componentes gigantes;
* props causando cascatas;
* listas grandes;
* contextos causando re-renderização;
* componentes carregados antecipadamente;
* bibliotecas pesadas.

Quando aplicável:

* React.lazy;
* dynamic imports;
* memoização seletiva;
* virtualização;
* divisão de componentes.

---

Next.js

Quando aplicável, avaliar:

* Server Components;
* Client Components;
* uso excessivo de "use client";
* SSR;
* SSG;
* ISR;
* streaming;
* caching;
* imagens;
* fontes;
* metadata;
* bundles enviados ao cliente.

Evitar transformar páginas inteiras em Client Components sem necessidade.

---

Vite

Avaliar:

* bundle;
* chunks;
* dependências;
* tree shaking;
* dynamic imports;
* assets;
* configuração de build;
* carregamento inicial.

---

## 12. IMAGENS

Imagens são uma das principais fontes de problemas de performance.

A Skill deve analisar:

* formato;
* resolução;
* dimensões;
* compressão;
* tamanho;
* quantidade;
* carregamento;
* prioridade;
* responsividade.

Preferir quando apropriado:

* AVIF;
* WebP;
* formatos adequados ao contexto;
* srcset;
* sizes;
* lazy loading;
* imagens responsivas.

---

## 13. IMAGEM HERO / LCP

A imagem principal acima da dobra deve receber tratamento especial.

Não aplicar loading="lazy" automaticamente à imagem LCP.

Quando apropriado:

* priorizar carregamento;
* preloadar;
* definir dimensões;
* utilizar tamanho adequado;
* evitar imagem absurdamente maior que o necessário;
* reduzir compressão sem destruir qualidade.

---

## 14. VÍDEOS

Avaliar:

* autoplay;
* tamanho;
* formato;
* poster;
* carregamento;
* streaming;
* preload;
* reprodução mobile.

Evitar carregar vídeos pesados antes de serem necessários.

Quando apropriado:

* poster leve;
* preload="none" ou estratégia equivalente;
* lazy loading;
* carregamento após interação;
* versões específicas para mobile.

---

## 15. FONTES

Avaliar:

* quantidade de fontes;
* famílias;
* pesos;
* formatos;
* tamanho;
* carregamento;
* fontes externas;
* fallback;
* FOIT;
* FOUT;
* impacto no LCP/CLS.

Preferir:

* WOFF2;
* apenas pesos necessários;
* subset quando justificável;
* preload somente para fontes críticas;
* font-display adequado.

Não preloadar todas as fontes.

---

## 16. ÍCONES

Avaliar:

* bibliotecas gigantes;
* SVGs excessivos;
* ícones duplicados;
* fontes de ícones desnecessárias.

Preferir:

* SVG;
* componentes individuais;
* tree shaking;
* assets leves.

---

## 17. DEPENDÊNCIAS

A Skill deve analisar dependências do projeto.

Para cada dependência relevante:

* tamanho;
* finalidade;
* impacto;
* necessidade;
* alternativas;
* frequência de uso.

Perguntar tecnicamente:

Essa dependência realmente precisa existir?

Não substituir bibliotecas apenas por preferência pessoal.

---

## 18. THIRD-PARTY SCRIPTS

Auditar:

* Google Analytics;
* Google Tag Manager;
* Meta Pixel;
* chat;
* mapas;
* widgets;
* vídeos incorporados;
* ferramentas de suporte;
* scripts de anúncios;
* fontes externas;
* serviços de terceiros.

Avaliar:

* tamanho;
* número de requests;
* bloqueio;
* impacto no main thread;
* momento do carregamento.

Quando possível:

* carregar após interação;
* adiar;
* usar async;
* usar defer;
* carregar somente quando necessário.

Não remover tracking solicitado pelo projeto apenas para melhorar métricas.

---

## 19. NETWORK

Avaliar:

* quantidade de requests;
* tamanho das respostas;
* waterfall;
* requests duplicados;
* recursos bloqueadores;
* cache;
* compressão;
* HTTP/2;
* HTTP/3 quando disponível;
* CDN;
* redirects.

---

## 20. CACHE

Avaliar estratégias de:

* browser cache;
* CDN cache;
* server cache;
* API cache;
* static assets;
* revalidation.

Arquivos versionados/hashados podem utilizar cache agressivo quando a infraestrutura permitir.

Não aplicar cache agressivo a conteúdo dinâmico sem avaliar consistência.

---

## 21. COMPRESSÃO

Verificar:

* Brotli;
* Gzip;
* compressão de respostas;
* imagens;
* fontes;
* assets.

Não comprimir formatos que já possuem compressão eficiente de forma redundante sem benefício.

---

## 22. CDN

Quando houver CDN, avaliar:

* distribuição;
* cache;
* assets estáticos;
* imagens;
* fontes;
* conteúdo;
* localização dos usuários.

Não recomendar CDN automaticamente se ela não trouxer benefício real.

---

## 23. BACKEND E TTFB

Quando a Skill tiver acesso ao backend, analisar:

* consultas lentas;
* APIs lentas;
* processamento;
* chamadas sequenciais;
* cold starts;
* SSR;
* middleware;
* autenticação;
* chamadas externas.

Sempre diferenciar:

problema de frontend

de

problema de backend/infraestrutura.

---

24. APIs

Avaliar:

* quantidade de requests;
* requests duplicados;
* chamadas sequenciais;
* payload;
* overfetching;
* underfetching;
* cache;
* compressão;
* tempo de resposta;
* chamadas bloqueantes.

Quando possível:

* paralelizar requests independentes;
* reduzir payload;
* cachear dados adequados;
* evitar chamadas desnecessárias.

---

## 25. BANCO DE DADOS

Quando performance depender do banco, avaliar:

* queries lentas;
* índices;
* joins;
* quantidade de dados;
* N+1 queries;
* paginação;
* filtros;
* ordenação;
* payload retornado.

Não modificar schema sem entender as dependências do projeto.

---

## 26. DOM

Avaliar:

* quantidade de nós;
* profundidade;
* elementos repetidos;
* listas enormes;
* componentes invisíveis carregados;
* conteúdo desnecessário.

Quando houver listas muito grandes:

* paginação;
* virtualização;
* carregamento progressivo.

---

## 27. ANIMAÇÕES

Avaliar:

* animações em excesso;
* propriedades caras;
* layout thrashing;
* width, height, top, left animados quando poderiam usar transform;
* blur excessivo;
* filtros pesados;
* sombras excessivas;
* efeitos contínuos.

Preferir, quando adequado:

* transform;
* opacity.

Respeitar prefers-reduced-motion.

Nunca remover a linguagem visual inteira do projeto simplesmente para melhorar performance.

---

## 28. LAYOUT THRASHING

Identificar padrões que alternam:

read → write → read → write

no layout.

Evitar:

* medições repetidas;
* alterações de DOM dentro de loops;
* cálculos síncronos desnecessários.

---

## 29. MEMÓRIA

Quando houver capacidade de análise, investigar:

* memory leaks;
* listeners não removidos;
* timers;
* subscriptions;
* objetos mantidos sem necessidade;
* componentes que permanecem montados.

---

## 30. MOBILE

A análise mobile deve considerar:

* CPU limitada;
* rede limitada;
* viewport;
* touch;
* imagens;
* JavaScript;
* fontes;
* animações;
* memória.

Mobile não deve ser tratado simplesmente como uma versão menor do desktop.

---

## 31. DESKTOP

Verificar:

* aproveitamento de largura;
* resolução;
* imagens maiores;
* carregamento;
* grids;
* componentes pesados;
* monitores de alta resolução.

---

## 32. ESTRATÉGIA DE PRIORIDADE

Todo problema encontrado deve receber prioridade.

CRÍTICO

Problema que causa:

* carregamento extremamente lento;
* página inutilizável;
* bloqueio severo;
* impacto grave no LCP/INP/CLS;
* falha em dispositivos comuns.

ALTO

Problema com impacto significativo na experiência.

MÉDIO

Problema relevante, mas sem impacto crítico.

BAIXO

Otimização incremental.

A prioridade deve considerar:

Impacto × frequência × esforço × risco

---

## 33. REGRA DE ROI

Sempre que possível, priorizar otimizações com:

alto impacto + baixo/médio esforço + baixo risco.

Evitar gastar grande esforço para obter ganhos praticamente imperceptíveis.

---

## 34. PROCESSO OPERACIONAL

A Skill deve executar este fluxo:

FASE 1 — Descoberta

Identificar:

* stack;
* framework;
* arquitetura;
* ambiente;
* hospedagem;
* banco;
* APIs;
* dependências;
* páginas;
* recursos;
* integrações.

---

FASE 2 — Baseline

Antes das otimizações, registrar:

* LCP;
* INP;
* CLS;
* FCP;
* TTFB;
* peso da página;
* requests;
* bundle;
* principais gargalos.

Se ferramentas de medição não estiverem disponíveis, declarar explicitamente a limitação.

Nunca inventar métricas.

---

FASE 3 — Diagnóstico

Encontrar causas, não apenas sintomas.

Exemplo:

Errado:

“LCP ruim.”

Correto:

“LCP elevado porque a imagem hero de 2,8 MB é carregada sem prioridade e possui resolução muito superior à necessária.”

---

FASE 4 — Plano

Criar plano ordenado:

1. problema;
2. impacto;
3. causa;
4. solução;
5. risco;
6. prioridade.

---

FASE 5 — Implementação

Aplicar as correções.

Cada alteração deve:

* manter funcionalidades;
* respeitar arquitetura;
* preservar design;
* evitar regressões.

---

FASE 6 — Validação

Executar novamente as verificações.

Comparar:

ANTES × DEPOIS

---

FASE 7 — Regressão

Verificar se a otimização causou:

* bug;
* alteração visual;
* problema de SEO;
* problema de acessibilidade;
* erro de JavaScript;
* quebra de integração.

---

FASE 8 — Relatório

Entregar:

* problemas encontrados;
* alterações realizadas;
* métricas antes/depois;
* ganhos;
* limitações;
* pendências.

---

## 35. REGRA DE NÃO INVENTAR RESULTADOS

Se não for possível medir:

não afirmar que a performance melhorou.

Utilizar:

“Otimização aplicada, porém não foi possível validar quantitativamente devido à ausência de ferramenta/ambiente de medição.”

Nunca inventar:

* Lighthouse score;
* Core Web Vitals;
* redução percentual;
* tempo de carregamento;
* tamanho de bundle;
* ganho de performance.

---

## 36. REGRA DE PRESERVAÇÃO

A Skill não pode:

* remover funcionalidades para obter métricas;
* remover analytics sem autorização;
* remover imagens importantes sem substituição adequada;
* destruir animações essenciais;
* alterar identidade visual;
* trocar framework sem necessidade;
* substituir arquitetura inteira por preferência pessoal.

---

## 37. BUILD DE PRODUÇÃO

Sempre que possível, a validação deve considerar build de produção.

Não tirar conclusões definitivas apenas com:

* desenvolvimento local;
* hot reload;
* ambiente não otimizado.

Verificar:

* build;
* minificação;
* chunks;
* assets;
* compressão;
* runtime.

---

## 38. BUNDLE ANALYSIS

Quando possível, identificar:

* maiores chunks;
* dependências dominantes;
* código duplicado;
* bibliotecas pesadas;
* código carregado inicialmente sem necessidade.

A Skill deve apontar exatamente de onde vem o peso.

---

## 39. PERFORMANCE BUDGET

Quando apropriado, estabelecer limites.

Exemplos:

* JavaScript inicial;
* tamanho total;
* imagens;
* número de requests;
* fontes;
* chunks.

Os limites devem ser definidos de acordo com o projeto.

Não aplicar números rígidos a todos os projetos.

---

## 40. PROJETOS DE LANDING PAGE

Para landing pages, priorizar:

1. Hero/LCP;
2. imagens;
3. fontes;
4. JavaScript;
5. animações;
6. scripts externos;
7. mobile;
8. conversão;
9. SEO.

Uma landing page simples não deve carregar infraestrutura desnecessária.

---

## 41. PROJETOS DE SISTEMA

Para sistemas, priorizar:

1. interação;
2. INP;
3. navegação;
4. APIs;
5. banco;
6. renderização;
7. bundle;
8. cache;
9. listas;
10. memória.

---

## 42. E-COMMERCE

Avaliar adicionalmente:

* catálogo;
* imagens de produtos;
* filtros;
* busca;
* carrinho;
* checkout;
* scripts de tracking;
* carregamento progressivo;
* páginas de produto.

Nunca prejudicar o fluxo de compra em nome de uma otimização marginal.

---

## 43. REGRA PARA LAZY LOADING

Usar lazy loading quando o recurso não é necessário imediatamente.

Não utilizar lazy loading indiscriminadamente.

Recursos críticos acima da dobra podem precisar de prioridade.

---

## 44. REGRA PARA PRELOAD

Preload deve ser utilizado somente quando o recurso for:

* realmente crítico;
* descoberto tarde pelo navegador;
* necessário para renderização inicial.

Evitar preload excessivo.

---

## 45. REGRA PARA PREFETCH

Prefetch deve ser usado para recursos provavelmente necessários em breve.

Não prefetchar indiscriminadamente grandes recursos.

---

## 46. REGRA PARA THIRD-PARTY

Nenhum script externo deve ser adicionado sem avaliar:

* necessidade;
* custo;
* momento de carregamento;
* impacto;
* alternativa.

---

## 47. PERFORMANCE E SEO

A Skill deve cooperar com a Skill de SEO/GEO.

Não realizar otimizações que prejudiquem:

* conteúdo;
* rastreamento;
* indexação;
* metadata;
* dados estruturados;
* renderização necessária.

---

## 48. PERFORMANCE E ACESSIBILIDADE

A Skill deve cooperar com a Skill de Acessibilidade.

Nunca otimizar removendo:

* labels;
* semântica;
* foco;
* alternativas textuais;
* controles acessíveis.

---

## 49. PERFORMANCE E DESIGN

A Skill deve respeitar o Design System existente.

Se uma decisão visual for custosa:

1. identificar;
2. medir;
3. procurar alternativa equivalente;
4. preservar a experiência.

---

## 50. AUTO-OTIMIZAÇÃO

Quando a Skill possuir acesso ao código, ela deve corrigir automaticamente problemas seguros e bem identificados.

Exemplos:

* imagens sem dimensões;
* lazy loading apropriado;
* imports desnecessários;
* assets duplicados;
* scripts bloqueadores evitáveis;
* código morto;
* fontes excessivas.

Alterações de alto risco devem ser avaliadas antes da implementação.

---

## 51. NÃO FAZER OTIMIZAÇÕES CEGAS

Nunca:

* adicionar preload em tudo;
* adicionar lazy loading em tudo;
* memoizar tudo;
* converter tudo para WebP/AVIF sem análise;
* remover todo JavaScript;
* remover todas as animações;
* eliminar dependências sem verificar uso;
* reduzir todas as imagens agressivamente;
* desativar analytics;
* usar cache incorreto;
* transformar tudo em SSR/SSG sem necessidade.

---

## 52. CRITÉRIO DE SUCESSO

A Skill será considerada bem-sucedida quando:

* gargalos relevantes forem identificados;
* causas forem determinadas;
* otimizações apropriadas forem aplicadas;
* funcionalidades permanecerem funcionando;
* design permanecer preservado;
* SEO permanecer funcional;
* acessibilidade permanecer funcional;
* performance mobile for considerada;
* resultados forem validados quando possível.

---

## 53. FORMATO DO RELATÓRIO

Ao finalizar, gerar:

PERFORMANCE REPORT

Resumo

* Estado geral:
* Principais problemas:
* Principais melhorias:

Core Web Vitals

Métrica	Antes	Depois	Estado
LCP	—	—	—
INP	—	—	—
CLS	—	—	—

Outros indicadores

* FCP:
* TTFB:
* TBT:
* Requests:
* Transferência:
* Bundle:

Problemas encontrados

Problema	Impacto	Prioridade	Solução

Otimizações realizadas

Alteração	Motivo	Resultado

Pendências

Listar tudo que não pôde ser corrigido ou validado.

Riscos / Observações

Registrar possíveis limitações ou pontos que dependem de infraestrutura externa.

---

## 54. CHECKLIST FINAL

Antes de concluir:

Carregamento

* [ ]	HTML analisado
* [ ]	CSS analisado
* [ ]	JS analisado
* [ ]	imagens analisadas
* [ ]	fontes analisadas
* [ ]	vídeos analisados
* [ ]	third-party analisado
* [ ]	network analisado

Core Web Vitals

* [ ]	LCP
* [ ]	INP
* [ ]	CLS

Frontend

* [ ]	bundle
* [ ]	DOM
* [ ]	renderização
* [ ]	animações
* [ ]	dependências
* [ ]	memória

Backend

* [ ]	TTFB
* [ ]	APIs
* [ ]	queries
* [ ]	cache

Mobile

* [ ]	carregamento
* [ ]	interação
* [ ]	imagens
* [ ]	JS
* [ ]	fontes

Integridade

* [ ]	funcionalidades
* [ ]	SEO
* [ ]	acessibilidade
* [ ]	design
* [ ]	responsividade

Validação

* [ ]	build de produção
* [ ]	medição pós-otimização
* [ ]	regressão
* [ ]	relatório

---

## 55. REGRA FINAL DA SKILL

A Skill de Performance não existe para produzir uma pontuação bonita.

Ela existe para produzir uma aplicação:

RÁPIDA + RESPONSIVA + ESTÁVEL + EFICIENTE + FUNCIONAL + MANTENÍVEL.

Toda otimização deve ser tecnicamente justificável.

Toda métrica deve ser baseada em medição real.

Toda alteração deve preservar a integridade do projeto.

Quando não houver dados suficientes, a Skill deve declarar a limitação em vez de inventar resultados.

## Quando usar
Use para medir, diagnosticar e corrigir gargalos de carregamento, interação e estabilidade em aplicações web antes ou depois de publicar.
