# 🥗 Landing Page: Nutrição & Saúde (Dra. Camila Vasconcelos)

Landing page dedicada à clínica de Nutrição Clínica & Funcional da **Dra. Camila Vasconcelos (CRN-3 48.910)**, desenvolvida em HTML5, Tailwind CSS e Vanilla JS puro (zero bundlers, zero dependências externas).

---

## ✨ Destaques da Arquitetura e Design

1. **Tubelight NavBar:**
   - Desktop: barra de navegação fixa no topo com indicador luminoso e scrollspy via `IntersectionObserver`.
   - Mobile: dock inferior ergonômico com acesso rápido às seções principais.

2. **Hero Section Editorial com Jade Sky:**
   - **Jade Sky:** gradiente atmosférico fixo contínuo por toda a página em camada GPU dedicada (`.jade-sky-ambient-layer`).
   - **Fotografia em Destaque:** retrato PNG transparente recortado com fusão suave na base e carregamento prioritário (`preload` + `fetchpriority="high"`).
   - **Composição Botânica:** elementos decorativos de frutas, vegetais, salada e halter em grande escala ao fundo do bloco esquerdo.

3. **ShinyButton (`.shiny-cta`):**
   - Botões primários de conversão com borda cônica animada via CSS `@property`, textura sutil de micropontos e feixe luminoso *shimmer* na paleta Verde Oliva (`#3E4D3A`) e Sálvia (`#8FA08A`).

4. **Focus Pull Carousel — "Áreas da Nutrição":**
   - Carrossel horizontal interativo com física de profundidade de campo (*rack focus*), arrasto nativo, navegação por teclado e cache geométrico zero-reflow.

5. **Jornada de Cuidado em Zigue-Zague (`CareJourney.js`):**
   - Os 4 passos do acompanhamento nutricional distribuídos alternadamente (esquerda/direita) no desktop com alfinetes, paleta sálvia/creme e conector SVG pontilhado animado (empilhamento em coluna limpa no mobile).

6. **Localização, Depoimentos Éticos (CFN), FAQ & LGPD:**
   - Conformidade integral com o Código de Ética do Nutricionista (CFN) e LGPD (Lei nº 13.709/2018).

---

## 📁 Estrutura de Arquivos

```text
lp-medico/
├── index.html                               # Estrutura HTML principal e carregamento paralelo com defer
├── site.config.js                           # Vínculo direto com a configuração ativa de Nutrição
├── robots.txt                               # Diretivas de rastreamento para buscadores
├── sitemap.xml                              # Mapa da URL principal
├── assets/
│   ├── css/style.css                        # Tokens :root, Jade Sky, ShinyButton, Focus Pull e Jornada
│   └── images/
│       ├── nutricao/                        # Fotos reais da Dra. Camila e composição decorativa
│       ├── placeholder-clinic-nutricao.svg  # Fallback de consultório
│       ├── placeholder-doctor-nutricao.svg  # Fallback de retrato
│       └── placeholder-logo-nutricao.svg    # Logotipo e favicon
├── scratch/
│   ├── serve.js                             # Servidor estático local para testes
│   └── test_nutricao.js                     # Validação automatizada de integridade e assets
└── src/
    ├── config/profiles/
    │   └── nutricao.js                      # Dados, textos, serviços, jornada, FAQ e SEO
    └── js/
        ├── app.js                           # Orquestrador principal (init() + renderApp())
        ├── icons.js                         # Biblioteca de ícones SVG inline
        ├── seo.js                           # Metatags dinâmicas e Schema.org
        └── components/
            ├── Header.js
            ├── Hero.js
            ├── QuickStats.js
            ├── About.js
            ├── FocusPullCarousel.js
            ├── CareJourney.js
            ├── Testimonials.js
            ├── Faq.js
            ├── Location.js
            ├── CtaFinal.js
            ├── Footer.js
            ├── FloatingWhatsapp.js
            └── LgpdBanner.js
```

---

## 🚀 Como Visualizar e Validar

Para iniciar o servidor local usando Node:
```powershell
node scratch/serve.js
```
Em seguida, acesse `http://127.0.0.1:4173/` no navegador.

Para validar os scripts, o HTML renderizado e a existência de todas as imagens locais:
```powershell
node scratch/test_nutricao.js
```
