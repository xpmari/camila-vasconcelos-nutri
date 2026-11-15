/**
 * COMPONENT: HERO SECTION (EDITORIAL LAYERED POSTER)
 * Layout editorial em camadas no mobile e desktop:
 * 1. Fundo: Gradiente vertical do bege claro (#F5F2EB) no topo ao verde-musgo escuro (#1E2B22) na base.
 * 2. Topo: Header minimalista (nome à esquerda, botão/menu à direita) e subtítulo centralizado NUTRIÇÃO CLÍNICA & FUNCIONAL • CRN-3 48.910.
 * 3. Camadas centrais: Texto serifado gigante atrás (z-index: 1, opacity: 0.35, branco) escrito "CAMILA" e "VASCONCELOS" abaixo.
 *    Foto PNG transparente da Dra. Camila por cima do texto (z-index: 10), com degradê suave na base da foto para fundir com o fundo escuro.
 * 4. Base (z-index: 20): Sobrepondo a parte inferior da foto, duas pílulas (INDIVIDUAL e SUSTENTÁVEL),
 *    o H1 serifado branco "Nutrição descomplicada, para a sua vida.", o subtítulo curto e o botão "Agendar Consulta Nutricional".
 * 5. Responsivo: Foto visível no mobile e desktop dentro de min-h-[100svh].
 */

function renderHero(config) {
  const profile = config.profile || {};
  const contact = config.contact || {};
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappDefaultMessage || 'Olá! Gostaria de agendar uma consulta nutricional.')}`;

  return `
    <section 
      id="hero" 
      class="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden select-none"
      style="background: linear-gradient(180deg, #F5F2EB 0%, #1E2B22 100%);"
    >
      <span id="inicio" class="sr-only" aria-hidden="true"></span>

      <!-- =========================================================================
           1. TOPO: HEADER MINIMALISTA & SUBTÍTULO CENTRALIZADO
           ========================================================================= -->
      <header class="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-6 lg:pt-7">
        <div class="flex items-center justify-between gap-3 sm:gap-4">
          
          <!-- Nome à esquerda -->
          <a href="#hero" class="flex items-center gap-2 text-[#1E2B22] group focus:outline-none">
            <span class="font-serif text-base sm:text-xl lg:text-2xl font-medium tracking-tight group-hover:opacity-80 transition-opacity">
              ${profile.name || 'Dra. Camila Vasconcelos'}
            </span>
          </a>

          <!-- Subtítulo centralizado (Desktop & Tablet) -->
          <div class="hidden md:flex items-center justify-center">
            <span class="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#3E4D3A] px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-[#3E4D3A]/15 shadow-2xs">
              NUTRIÇÃO CLÍNICA &amp; FUNCIONAL <span class="mx-1 text-[#6B7D66]">•</span> ${profile.registration || 'CRN-3 48.910'}
            </span>
          </div>

          <!-- Botão / Menu à direita -->
          <div class="flex items-center gap-2 sm:gap-3">
            <a href="#sobre" class="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium text-[#1E2B22] hover:bg-black/5 transition-colors">
              <span>Sobre</span>
            </a>
            <a 
              href="${whatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold bg-[#1E2B22] text-[#F5F2EB] hover:bg-[#2A3B2F] active:scale-95 transition-all shadow-sm"
            >
              ${window.getIcon ? window.getIcon('whatsapp') : ''}
              <span>Agendar</span>
            </a>
          </div>

        </div>

        <!-- Subtítulo centralizado (Mobile) -->
        <div class="md:hidden mt-2 text-center">
          <span class="font-mono text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[#3E4D3A] inline-block px-3 py-0.5 rounded-full bg-white/55 backdrop-blur-sm border border-[#3E4D3A]/15 shadow-2xs">
            NUTRIÇÃO CLÍNICA &amp; FUNCIONAL • ${profile.registration || 'CRN-3 48.910'}
          </span>
        </div>
      </header>


      <!-- =========================================================================
           2. CAMADAS CENTRAIS: TIPOGRAFIA GIGANTE (z-1) + FOTO COM PRESENÇA (z-10)
           ========================================================================= -->
      <div class="relative z-10 flex-1 flex flex-col items-center justify-end w-full min-h-0 pt-2 sm:pt-4 overflow-visible">
        
        <!-- Camada 1: Texto Serifado Gigante Atrás da Foto (Cormorant Garamond, tracking-tight, opacidade suave) -->
        <div 
          aria-hidden="true" 
          class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-[1] text-center w-full px-2 transform -translate-y-6 sm:-translate-y-10 lg:-translate-y-14"
        >
          <span class="font-serif text-[18vw] sm:text-[15.5vw] lg:text-[13vw] xl:text-[12vw] font-normal tracking-tight text-white leading-[0.80] uppercase block" style="opacity: 0.28;">
            CAMILA
          </span>
          <span class="font-serif text-[13.5vw] sm:text-[11.8vw] lg:text-[10vw] xl:text-[9.2vw] font-normal tracking-tight text-white leading-[0.80] uppercase block" style="opacity: 0.28;">
            VASCONCELOS
          </span>
        </div>

        <!-- Camada 2: Foto PNG Transparente com Grande Escala e Fusão na Base (Sem sombras, caixas ou brilhos) -->
        <div class="relative z-10 flex justify-center items-end w-full max-w-xl sm:max-w-2xl lg:max-w-4xl px-2 sm:px-4 pointer-events-none bg-transparent">
          <img 
            src="${profile.avatarUrl}" 
            alt="${profile.name} - ${profile.title}" 
            width="682" 
            height="1024"
            class="hero-editorial-photo w-auto h-[64vh] sm:h-[70vh] md:h-[76vh] lg:h-[78vh] max-h-[560px] sm:max-h-[640px] md:max-h-[720px] lg:max-h-[750px] max-w-[94vw] sm:max-w-none object-contain object-bottom select-none bg-transparent"
            loading="eager"
            decoding="sync"
            fetchpriority="high"
          />
        </div>

      </div>


      <!-- =========================================================================
           3. BASE: PÍLULAS, H1 SERIFADO, SUBTÍTULO E BOTÃO (z-index: 20)
           Sobrepondo a parte inferior da foto para fundir com o texto
           ========================================================================= -->
      <div class="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 lg:pb-10 text-center flex flex-col items-center -mt-20 sm:-mt-28 md:-mt-36 lg:-mt-44 xl:-mt-48 pointer-events-auto">
        
        <!-- Duas pílulas: INDIVIDUAL e SUSTENTÁVEL -->
        <div class="inline-flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3">
          <span class="inline-flex items-center px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-white bg-black/30 sm:bg-white/10 backdrop-blur-md border border-white/25 shadow-md">
            INDIVIDUAL
          </span>
          <span class="inline-flex items-center px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-white bg-black/30 sm:bg-white/10 backdrop-blur-md border border-white/25 shadow-md">
            SUSTENTÁVEL
          </span>
        </div>

        <!-- H1 Serifado Branco com Itálico Editorial Contrastante -->
        <h1 class="font-serif text-[1.95rem] sm:text-4xl md:text-5xl lg:text-[3.35rem] xl:text-[3.75rem] font-medium text-white tracking-tight leading-[1.08] mb-1.5 sm:mb-2.5 max-w-2xl sm:max-w-3xl drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)]">
          Nutrição <span class="italic font-normal">descomplicada</span>, para a <span class="italic font-normal">sua vida.</span>
        </h1>

        <!-- Subtítulo Curto -->
        <p class="text-[13px] sm:text-sm md:text-base text-white/85 max-w-xs sm:max-w-xl mx-auto mb-4 sm:mb-5 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none drop-shadow-sm">
          ${profile.heroSubheadline || 'Planos alimentares sob medida para ganho de energia, saúde metabólica e autonomia no dia a dia.'}
        </p>

        <!-- Botão CTA Principal -->
        <div class="flex items-center justify-center w-full sm:w-auto">
          <a 
            href="${whatsappUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn-primary-action shiny-cta text-xs sm:text-base py-3.5 px-7 sm:px-9 justify-center shadow-2xl shadow-black/45 hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            ${window.getIcon ? window.getIcon('whatsapp') : ''}
            <span>Agendar Consulta Nutricional</span>
          </a>
        </div>

      </div>

    </section>
  `;
}

if (typeof window !== 'undefined') {
  window.renderHero = renderHero;
}
