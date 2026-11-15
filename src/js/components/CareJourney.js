/**
 * COMPONENT: CARE JOURNEY (JORNADA DE CUIDADO)
 * Layout editorial em zigue-zague com alfinetes, conector pontilhado animado e paleta botânica sálvia/creme.
 * Totalmente responsivo em HTML5/Tailwind/CSS puro.
 */

function renderCareJourneyPin(colorClass) {
  return `
    <div
      aria-hidden="true"
      class="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#E3EAE0] shadow-sm flex items-center justify-center mx-auto mb-3.5 ${colorClass} transition-transform duration-300 group-hover:-translate-y-0.5"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 21a9 9 0 008.7-6.7M12 21a9 9 0 01-8.7-6.7M12 21V3m0 0a9 9 0 017.8 4.6M12 3a9 9 0 00-7.8 4.6"/>
      </svg>
    </div>
  `;
}

function renderCareJourney(config) {
  const journeyConfig = config.sections?.careJourney;
  if (!journeyConfig || journeyConfig.enabled === false) return '';

  const steps = journeyConfig.steps || [
    {
      step: '01',
      title: 'Questionário Pré-Consulta & Alinhamento',
      description: 'Antes mesmo do primeiro encontro, você preenche um formulário digital breve sobre sua rotina, horários, histórico familiar e sintomas digestivos.'
    },
    {
      step: '02',
      title: 'Consulta Dedicada & Bioimpedância InBody',
      description: 'Conversa aprofundada de 1h30 para investigar exames laboratoriais, rotina de sono e realização de bioimpedância tetrapolar de alta precisão.'
    },
    {
      step: '03',
      title: 'Cardápio Construído a Quatro Mãos',
      description: 'Nada de dietas prontas de gaveta. O seu plano alimentar é desenhado com você na consulta, respeitando seus gostos, cultura e orçamento.'
    },
    {
      step: '04',
      title: 'Aplicativo Exclusivo & Suporte Contínuo',
      description: 'Você recebe acesso ao app com receitas práticas, lista de compras e canal direto no WhatsApp para tirar dúvidas entre as consultas.'
    }
  ];

  // Paletas orgânicas alternadas em verde-claro, creme e sálvia
  const cardThemes = [
    {
      bg: 'bg-[#EBF1EA]/90',
      border: 'border-[#CFE0CB]',
      accent: 'text-[#3E4D3A]',
      pin: 'text-[#3E4D3A]'
    },
    {
      bg: 'bg-[#FAF5EB]/95',
      border: 'border-[#E8DEC8]',
      accent: 'text-[#6B7D66]',
      pin: 'text-[#6B7D66]'
    },
    {
      bg: 'bg-[#E2ECE0]/90',
      border: 'border-[#C3D7BE]',
      accent: 'text-[#3E4D3A]',
      pin: 'text-[#52654D]'
    },
    {
      bg: 'bg-[#F3F7F1]/95',
      border: 'border-[#D4E2D0]',
      accent: 'text-[#4F624A]',
      pin: 'text-[#6B7D66]'
    }
  ];

  // Posicionamento em zigue-zague para desktop e empilhamento sticky fluido no mobile
  const positions = [
    {
      posClass: 'sticky top-[90px] md:absolute md:top-0 md:left-[4%] lg:left-[8%] z-10',
      tiltClass: 'md:rotate-[1deg]'
    },
    {
      posClass: 'sticky top-[105px] md:absolute md:top-[160px] md:right-[4%] lg:right-[8%] z-20',
      tiltClass: 'md:-rotate-[1deg]'
    },
    {
      posClass: 'sticky top-[120px] md:absolute md:top-[560px] md:left-[4%] lg:left-[8%] z-30',
      tiltClass: 'md:rotate-[1deg]'
    },
    {
      posClass: 'sticky top-[135px] md:absolute md:top-[740px] md:right-[4%] lg:right-[8%] z-40',
      tiltClass: 'md:-rotate-[1deg]'
    }
  ];

  const stepsHtml = steps.slice(0, 4).map((item, index) => {
    const theme = cardThemes[index % cardThemes.length];
    const pos = positions[index % positions.length];
    const stepNumber = item.step || `0${index + 1}`;

    return `
      <div 
        class="zoom-in-entrance ${pos.posClass} relative w-full max-w-md mx-auto md:mx-0 md:w-[290px] lg:w-[325px] transition-all duration-300" 
        data-zoom-index="${index}"
      >
        <div class="group relative ${pos.tiltClass} transition-all duration-300 hover:z-50 hover:scale-[1.02] md:hover:rotate-0">
          <div class="bg-white/95 p-2 sm:p-2.5 rounded-[22px] sm:rounded-[24px] shadow-[0_16px_36px_-10px_rgba(62,77,58,0.14)] group-hover:shadow-[0_24px_48px_-12px_rgba(62,77,58,0.22)] border border-[#E3EAE0]/90 transition-shadow duration-300">
            
            ${renderCareJourneyPin(theme.pin)}

            <div class="${theme.bg} border ${theme.border} rounded-[16px] p-3.5 sm:p-5 md:p-6 flex flex-col relative overflow-hidden">
              ${item.image ? `
                <!-- Thumbnail / Foto de Apoio com Altura Compacta no Mobile -->
                <div class="w-full h-24 sm:h-32 md:h-auto md:aspect-[16/10] rounded-xl overflow-hidden mb-2.5 sm:mb-3 md:mb-4 border border-[#E3EAE0] shadow-2xs bg-white/70 shrink-0">
                  <img 
                    src="${item.image}" 
                    alt="${item.title}" 
                    width="480"
                    height="300"
                    class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ` : ''}
              <span class="font-mono text-2xl sm:text-3xl md:text-[2.75rem] font-medium ${theme.accent} tracking-[-0.03em] leading-none mb-1.5 sm:mb-2.5 md:mb-3.5">
                ${stepNumber}
              </span>
              <h3 class="font-heading text-base sm:text-xl md:text-2xl font-medium text-theme-primary tracking-[-0.015em] leading-[1.2] mb-1 sm:mb-2 md:mb-2.5">
                ${item.title}
              </h3>
              <p class="text-xs sm:text-[13px] md:text-sm text-theme-muted leading-relaxed font-normal">
                ${item.description}
              </p>
            </div>

          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section id="jornada" class="relative py-20 md:py-32 bg-[#FAF8F5]/40 border-t border-theme/50 overflow-visible md:overflow-hidden">
      
      <!-- Linhas Editoriais Horizontais Ultra-Sutis de Fundo -->
      <div
        aria-hidden="true"
        class="absolute inset-0 pointer-events-none opacity-[0.045]"
        style="background-image: linear-gradient(#3E4D3A 1px, transparent 1px); background-size: 100% 34px; -webkit-mask-image: radial-gradient(ellipse at center, black 45%, transparent 90%); mask-image: radial-gradient(ellipse at center, black 45%, transparent 90%);"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Cabeçalho da Seção -->
        <div class="text-center max-w-3xl mx-auto mb-14 md:mb-20 fade-in-up">
          <span class="badge-botanical mb-3">
            ${journeyConfig.tag || 'METODOLOGIA DE ATENDIMENTO'}
          </span>
          <h2 class="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-theme-primary tracking-[-0.015em] leading-[1.08] mb-4">
            ${journeyConfig.title || 'Como funciona sua jornada de cuidado nutricional'}
          </h2>
          <p class="text-base sm:text-lg text-theme-muted leading-relaxed font-normal">
            ${journeyConfig.subtitle || 'Um processo estruturado em 4 etapas para transformar sua relação com a alimentação sem radicalismos.'}
          </p>
        </div>

        <!-- Palco Zigue-Zague Desktop/Tablet & Empilhamento Sticky Fluido no Mobile -->
        <div class="journey-stage relative w-full max-w-[1000px] mx-auto flex flex-col space-y-8 sm:space-y-12 md:space-y-0 md:block h-auto md:h-[1140px] pb-12 md:pb-0">
          
          <!-- Linha Pontilhada Animada Conectando os 4 Passos (Desktop/Tablet) -->
          <svg
            aria-hidden="true"
            class="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
            viewBox="0 0 1000 1140"
            preserveAspectRatio="none"
          >
            <path
              d="M 250 200 C 480 200, 520 370, 750 370 C 860 370, 520 560, 250 760 C 250 890, 500 900, 750 900"
              stroke="currentColor"
              class="text-[#6B7D66]/60 journey-dashed-path"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              vector-effect="non-scaling-stroke"
            />
          </svg>

          <!-- Elemento Decorativo Animado por Motion Path (Folha Botânica) -->
          <div class="journey-motion-leaf" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none" class="w-full h-full drop-shadow-[0_4px_10px_rgba(62,77,58,0.22)]">
              <circle cx="18" cy="18" r="16" fill="#FAF8F5" fill-opacity="0.94" stroke="#6B7D66" stroke-opacity="0.45" stroke-width="1.2"/>
              <path d="M18 26.5C18 26.5 11.5 21 11.5 15.2C11.5 11.2 14.3 8.5 18 8.5C21.7 8.5 24.5 11.2 24.5 15.2C24.5 21 18 26.5 18 26.5Z" fill="#6B7D66" fill-opacity="0.22" stroke="#3E4D3A" stroke-width="1.6" stroke-linejoin="round"/>
              <path d="M18 12.5V23M18 17L20.8 14.4M18 19.2L15.2 16.8" stroke="#3E4D3A" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
          </div>

          ${stepsHtml}

        </div>

      </div>
    </section>
  `;
}

/**
 * Controlador de Motion Path Curvilíneo Responsivo (offset-path + fallback transform/opacity)
 * Alvos:
 * - [SELETOR]: .journey-motion-leaf
 * - [CONTÊINER]: .journey-stage
 * - [EVENTO OU ESTADO]: entrada da seção #jornada na viewport (IntersectionObserver) ou evento 'care-journey:replay'
 */
function initCareJourneyMotion() {
  if (typeof window._careJourneyCleanup === 'function') {
    window._careJourneyCleanup();
    window._careJourneyCleanup = null;
  }

  const section = document.getElementById('jornada');
  const stage = section ? section.querySelector('.journey-stage') : null;
  const leaf = stage ? stage.querySelector('.journey-motion-leaf') : null;
  if (!section || !stage || !leaf) return;

  const supportsOffsetPath = typeof CSS !== 'undefined' && typeof CSS.supports === 'function' &&
    CSS.supports('offset-path', 'path("M 0 0 L 10 10")') && typeof leaf.animate === 'function';
  const reducedQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;

  let activeAnim = null;
  let hasPlayed = false;
  let resizeRaf = 0;

  function computeResponsiveGeometry() {
    const w = stage.clientWidth || 320;
    const h = stage.clientHeight || 1140;
    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
      // Escala proporcional exata da curva SVG (viewBox 1000x1140) para a largura/altura reais do contêiner
      const x1 = +(0.25 * w).toFixed(1), y1 = +(0.175 * h).toFixed(1);
      const x2 = +(0.75 * w).toFixed(1), y2 = +(0.325 * h).toFixed(1);
      const x3 = +(0.25 * w).toFixed(1), y3 = +(0.667 * h).toFixed(1);
      const x4 = +(0.75 * w).toFixed(1), y4 = +(0.789 * h).toFixed(1);

      const pathStr = `M ${x1} ${y1} C ${+(0.48 * w).toFixed(1)} ${y1}, ${+(0.52 * w).toFixed(1)} ${y2}, ${x2} ${y2} C ${+(0.86 * w).toFixed(1)} ${y2}, ${+(0.52 * w).toFixed(1)} ${+(0.491 * h).toFixed(1)}, ${x3} ${y3} C ${x3} ${+(0.780 * h).toFixed(1)}, ${+(0.50 * w).toFixed(1)} ${y4}, ${x4} ${y4}`;
      const points = [
        { x: x1, y: y1, rot: 85 },
        { x: x2, y: y2, rot: 120 },
        { x: x3, y: y3, rot: -110 },
        { x: x4, y: y4, rot: 80 }
      ];
      return { pathStr, points };
    }

    // Mobile (< 768px): arco suave ao longo da coluna vertical respeitando margens seguras do contêiner
    const mxL = +Math.max(20, 0.08 * w).toFixed(1);
    const mxR = +Math.min(w - 20, 0.92 * w).toFixed(1);
    const yStart = +(0.05 * h).toFixed(1);
    const yMid1 = +(0.34 * h).toFixed(1);
    const yMid2 = +(0.66 * h).toFixed(1);
    const yEnd = +(0.93 * h).toFixed(1);

    const pathStr = `M ${mxL} ${yStart} C ${mxR} ${+(0.18 * h).toFixed(1)}, ${mxR} ${yMid1}, ${mxL} ${+(0.50 * h).toFixed(1)} C ${mxL} ${yMid2}, ${mxR} ${+(0.80 * h).toFixed(1)}, ${mxR} ${yEnd}`;
    const points = [
      { x: mxL, y: yStart, rot: 115 },
      { x: mxR, y: yMid1, rot: 165 },
      { x: mxL, y: yMid2, rot: 135 },
      { x: mxR, y: yEnd, rot: 150 }
    ];
    return { pathStr, points };
  }

  function applyStaticEndState(geom) {
    if (activeAnim) {
      activeAnim.cancel();
      activeAnim = null;
    }
    if (supportsOffsetPath) {
      leaf.style.setProperty('--journey-motion-path', `path("${geom.pathStr}")`);
      leaf.style.offsetDistance = '100%';
      leaf.style.transform = 'scale(1)';
      leaf.style.opacity = '0.92';
      leaf.classList.add('is-settled');
    } else {
      const last = geom.points[geom.points.length - 1];
      leaf.style.transform = `translate3d(${last.x - 17}px, ${last.y - 17}px, 0) scale(1)`;
      leaf.style.opacity = '0.92';
      leaf.classList.add('is-fallback-settled');
    }
  }

  function playMotion() {
    const geom = computeResponsiveGeometry();
    const isReduced = reducedQuery ? reducedQuery.matches : false;

    if (activeAnim) {
      activeAnim.cancel();
      activeAnim = null;
    }

    if (isReduced) {
      applyStaticEndState(geom);
      return;
    }

    leaf.classList.remove('is-settled', 'is-fallback-settled');

    if (supportsOffsetPath) {
      leaf.style.setProperty('--journey-motion-path', `path("${geom.pathStr}")`);
      activeAnim = leaf.animate(
        [
          { offsetDistance: '0%', opacity: 0, transform: 'scale(0.8)' },
          { offsetDistance: '10%', opacity: 0.95, transform: 'scale(1)', offset: 0.1 },
          { offsetDistance: '90%', opacity: 0.95, transform: 'scale(1)', offset: 0.9 },
          { offsetDistance: '100%', opacity: 0.92, transform: 'scale(1)' }
        ],
        {
          duration: 1200,
          easing: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
          fill: 'forwards'
        }
      );
      activeAnim.onfinish = () => {
        leaf.classList.add('is-settled');
      };
    } else if (typeof leaf.animate === 'function') {
      // Fallback com transform/opacity para navegadores sem offset-path
      const pts = geom.points;
      activeAnim = leaf.animate(
        [
          { transform: `translate3d(${pts[0].x - 17}px, ${pts[0].y - 17}px, 0) rotate(${pts[0].rot}deg) scale(0.8)`, opacity: 0 },
          { transform: `translate3d(${pts[1].x - 17}px, ${pts[1].y - 17}px, 0) rotate(${pts[1].rot}deg) scale(1)`, opacity: 0.95, offset: 0.35 },
          { transform: `translate3d(${pts[2].x - 17}px, ${pts[2].y - 17}px, 0) rotate(${pts[2].rot}deg) scale(1)`, opacity: 0.95, offset: 0.7 },
          { transform: `translate3d(${pts[3].x - 17}px, ${pts[3].y - 17}px, 0) rotate(0deg) scale(1)`, opacity: 0.92 }
        ],
        {
          duration: 1200,
          easing: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
          fill: 'forwards'
        }
      );
      activeAnim.onfinish = () => {
        leaf.classList.add('is-fallback-settled');
      };
    } else {
      applyStaticEndState(geom);
    }
    hasPlayed = true;
  }

  function handleResize() {
    if (resizeRaf) return;
    resizeRaf = requestAnimationFrame(() => {
      resizeRaf = 0;
      const geom = computeResponsiveGeometry();
      if (supportsOffsetPath) {
        leaf.style.setProperty('--journey-motion-path', `path("${geom.pathStr}")`);
      }
      if (hasPlayed && (!activeAnim || activeAnim.playState === 'finished')) {
        applyStaticEndState(geom);
      }
    });
  }

  // Inicializa path antes de entrar na tela para evitar salto no primeiro frame
  const initialGeom = computeResponsiveGeometry();
  if (supportsOffsetPath) {
    leaf.style.setProperty('--journey-motion-path', `path("${initialGeom.pathStr}")`);
  }
  if (reducedQuery && reducedQuery.matches) {
    applyStaticEndState(initialGeom);
    hasPlayed = true;
  }

  let io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasPlayed) {
          playMotion();
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    io.observe(section);
  } else {
    playMotion();
  }

  let ro = null;
  if ('ResizeObserver' in window) {
    ro = new ResizeObserver(handleResize);
    ro.observe(stage);
  } else {
    window.addEventListener('resize', handleResize, { passive: true });
  }

  const onReplay = () => playMotion();
  document.addEventListener('care-journey:replay', onReplay);

  const onReducedChange = (e) => {
    if (e.matches) {
      applyStaticEndState(computeResponsiveGeometry());
    }
  };
  if (reducedQuery && typeof reducedQuery.addEventListener === 'function') {
    reducedQuery.addEventListener('change', onReducedChange);
  }

  window.restartCareJourneyMotion = playMotion;

  window._careJourneyCleanup = () => {
    if (io) io.disconnect();
    if (ro) ro.disconnect();
    else window.removeEventListener('resize', handleResize);
    document.removeEventListener('care-journey:replay', onReplay);
    if (reducedQuery && typeof reducedQuery.removeEventListener === 'function') {
      reducedQuery.removeEventListener('change', onReducedChange);
    }
    if (resizeRaf) cancelAnimationFrame(resizeRaf);
    if (activeAnim) {
      activeAnim.cancel();
      activeAnim = null;
    }
  };
}

if (typeof window !== 'undefined') {
  window.renderCareJourney = renderCareJourney;
  window.initCareJourneyMotion = initCareJourneyMotion;
}
