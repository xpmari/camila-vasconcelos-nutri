/**
 * ==============================================================================
 * COMPONENTE: FOCUS PULL CAROUSEL (21st.dev adaptado para Vanilla JS)
 * Galeria horizontal estilo editorial com foco contínuo e rack focus de lente fotográfica
 * Zero dependências (Sem React, Sem Framer Motion, Sem bundlers)
 * Conformidade: CFM / CFN / CFO / CFP | Acessibilidade WCAG e prefers-reduced-motion
 * ==============================================================================
 */

// Procedural Landscape Generator (Fallback nativo do 21st.dev caso não haja imagem)
const FP_PALETTES = {
  dawn: { top: "#e7b7a5", bottom: "#f8e8d6", sun: "#fff4df", far: "#d2b2bb", near: "#3a2a3b", mist: "255,240,232" },
  alpine: { top: "#7ea5c8", bottom: "#e3ecf2", sun: "#ffffff", far: "#a9bfd0", near: "#1c3044", mist: "236,244,250" },
  dusk: { top: "#2a2450", bottom: "#ef8d60", sun: "#ffd9a6", far: "#93607c", near: "#18121f", mist: "255,196,160" },
  mist: { top: "#c4d0cb", bottom: "#eef1ec", sun: "#ffffff", far: "#aebcb5", near: "#2c3a33", mist: "246,248,245" },
  sage: { top: "#d9e4d5", bottom: "#f5f8f3", sun: "#ffffff", far: "#8fa08a", near: "#3e4d3a", mist: "240,246,238" }
};

function fpMulberry32(seed) {
  let a = seed >>> 0;
  return function() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function fpHexRgb(h) {
  const v = parseInt(h.replace("#", ""), 16);
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
}

function fpMixRgb(a, b, t) {
  const A = fpHexRgb(a);
  const B = fpHexRgb(b);
  return "rgb(" + A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(",") + ")";
}

function paintFpLandscape(seed, paletteName, w = 1200, h = 800) {
  if (typeof document === 'undefined') return '';
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  if (!g) return '';
  const P = FP_PALETTES[paletteName] || FP_PALETTES.sage;
  const r = fpMulberry32((seed || 1) * 104729 + 7);

  const sky = g.createLinearGradient(0, 0, 0, h * 0.72);
  sky.addColorStop(0, P.top);
  sky.addColorStop(1, P.bottom);
  g.fillStyle = sky;
  g.fillRect(0, 0, w, h);

  const sx = w * (0.22 + r() * 0.56);
  const sy = h * (0.26 + r() * 0.16);
  const halo = g.createRadialGradient(sx, sy, 0, sx, sy, w * 0.45);
  halo.addColorStop(0, "rgba(" + fpHexRgb(P.sun).join(",") + ",.85)");
  halo.addColorStop(0.08, "rgba(" + fpHexRgb(P.sun).join(",") + ",.55)");
  halo.addColorStop(1, "rgba(" + fpHexRgb(P.sun).join(",") + ",0)");
  g.fillStyle = halo;
  g.fillRect(0, 0, w, h);

  const layers = 5;
  for (let L = 0; L < layers; L++) {
    const k = L / (layers - 1);
    const base = h * (0.42 + k * 0.4);
    const amp = h * (0.07 + k * 0.1);
    const ph = [r(), r(), r(), r()].map(v => v * Math.PI * 2);
    const fr = [1.3 + r(), 3.1 + r() * 2, 7 + r() * 4, 17 + r() * 8];
    const ridge = x => {
      const u = x / w;
      return (
        base -
        amp *
          (0.55 * Math.sin(u * fr[0] + ph[0]) +
            0.28 * Math.sin(u * fr[1] + ph[1]) +
            0.12 * Math.abs(Math.sin(u * fr[2] + ph[2])) +
            0.05 * Math.sin(u * fr[3] + ph[3]))
      );
    };
    const mist = g.createLinearGradient(0, base - amp * 1.4, 0, base + amp * 0.4);
    mist.addColorStop(0, "rgba(" + P.mist + ",0)");
    mist.addColorStop(1, "rgba(" + P.mist + "," + (0.55 - k * 0.35).toFixed(2) + ")");
    g.fillStyle = mist;
    g.fillRect(0, base - amp * 1.4, w, amp * 1.8);

    const body = g.createLinearGradient(0, base - amp, 0, h);
    body.addColorStop(0, fpMixRgb(P.far, P.near, Math.pow(k, 1.3)));
    body.addColorStop(1, fpMixRgb(P.far, P.near, Math.min(1, Math.pow(k, 1.3) + 0.18)));
    g.fillStyle = body;
    g.beginPath();
    g.moveTo(0, h);
    for (let x = 0; x <= w; x += 6) g.lineTo(x, ridge(x));
    g.lineTo(w, h);
    g.closePath();
    g.fill();
  }
  return c.toDataURL('image/jpeg', 0.88);
}

/**
 * Retorna os slides padrões das Áreas da Nutrição
 */
function getDefaultFpSlides() {
  return [
    {
      image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=760&auto=format&fit=crop&q=75',
      title: 'Emagrecimento Saudável & Saúde Metabólica',
      caption: 'Estratégias focadas em saciedade, controle glicêmico e preservação de massa magra sem passar fome ou dietas restritivas.',
      alt: 'Prato saudável com alimentos funcionais frescos'
    },
    {
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=760&auto=format&fit=crop&q=75',
      title: 'Nutrição Esportiva & Performance',
      caption: 'Periodização de macronutrientes para praticantes de atividade física, corredores e atletas que buscam rendimento e recuperação.',
      alt: 'Treino, hidratação e performance esportiva'
    },
    {
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=760&auto=format&fit=crop&q=75',
      title: 'Microbiota & Saúde Intestinal',
      caption: 'Protocolos nutricionais para desinflamação, alívio de estufamento, síndrome do intestino irritável e equilíbrio da microbiota.',
      alt: 'Ingredientes naturais e fibras prebióticas saudáveis'
    },
    {
      image: 'assets/images/nutricao/nutricionista-jaleco-consulta.jpg',
      title: 'Interpretação Funcional de Exames',
      caption: 'Análise minuciosa de vitaminas, minerais, colesterol e marcadores inflamatórios para correção precisa de carências.',
      alt: 'Dra. Camila avaliando exames laboratoriais no consultório'
    },
    {
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=760&auto=format&fit=crop&q=75',
      title: 'Manejo de Doenças Crônicas & Longevidade',
      caption: 'Terapia nutricional coadjuvante no controle de glicemia, gordura no fígado (esteatose) e níveis pressóricos.',
      alt: 'Consulta atenciosa e orientação personalizada'
    },
    {
      image: 'assets/images/nutricao/nutricionista-hero-frutas.png',
      title: 'Reeducação Alimentar & Autonomia',
      caption: 'Consultas presenciais e online com aplicativo exclusivo de cardápio, lista de compras e canal direto para suporte contínuo.',
      alt: 'Dra. Camila Vasconcelos com frutas frescas e alimentação saudável'
    }
  ];
}

/**
 * Renderiza o componente Focus Pull Carousel em HTML puro
 */
function renderFocusPullCarousel(config) {
  const sectionConfig = config.sections?.focusPullCarousel || {};
  if (sectionConfig.enabled === false) {
    return '';
  }

  const isNutricao = config.id === 'nutricao-bem-estar';
  const sectionId = sectionConfig.id || (config.sections?.services?.enabled === false ? 'servicos' : 'vivencia');
  const tag = sectionConfig.tag || (isNutricao ? 'ÁREAS DA NUTRIÇÃO' : 'VIVÊNCIA & METODOLOGIA');
  const title = sectionConfig.title || (isNutricao ? 'Áreas de Atuação & Programas de Cuidado' : 'O cuidado em foco através dos detalhes');
  const subtitle = sectionConfig.subtitle || (isNutricao ? 'Deslize ou arraste a galeria para navegar pelas principais frentes de atendimento e encontrar o plano ideal para sua saúde e rotina.' : 'Deslize ou arraste a galeria para navegar pelos bastidores do atendimento, ambiente e condutas pensadas para sua melhor experiência.');
  const slides = (sectionConfig.slides && sectionConfig.slides.length > 0) ? sectionConfig.slides : getDefaultFpSlides(config);

  const initialSlide = slides[0] || {};
  const totalSlides = slides.length;

  const cardsHtml = slides.map((slide, idx) => {
    const isCurrent = idx === 0 ? 'true' : 'false';
    const imgSrc = slide.image || '';
    return `
      <button
        type="button"
        class="fp-card"
        data-index="${idx}"
        data-palette="${slide.palette || 'sage'}"
        data-seed="${slide.seed || idx + 1}"
        tabindex="-1"
        aria-label="Ver slide ${idx + 1}: ${slide.title || 'Detalhe'}"
        aria-current="${isCurrent}"
      >
        ${imgSrc ? `<img src="${imgSrc}" alt="${slide.alt || slide.title || ''}" width="760" height="475" draggable="false" loading="lazy" decoding="async" />` : ''}
      </button>
    `;
  }).join('');

  return `
    <section id="${sectionId}" class="py-16 md:py-24 bg-[#FAF8F5]/35 border-y border-theme/50 relative overflow-hidden" aria-label="${title}">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div class="max-w-2xl">
            <div class="badge-botanical mb-3">
              ${window.getIcon ? window.getIcon('sparkle', 'w-3.5 h-3.5') : ''}
              <span>${tag}</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-heading text-theme-primary font-medium tracking-[-0.015em] leading-[1.08]">
              ${title}
            </h2>
            <p class="mt-3 text-base sm:text-lg text-theme-muted leading-relaxed font-sans">
              ${subtitle}
            </p>
          </div>
          <div class="hidden sm:flex items-center gap-2 text-xs font-sans font-semibold text-theme-muted bg-white/90 px-4 py-2.5 rounded-full border border-theme shadow-sm">
            <svg class="w-4 h-4 text-primary animate-pulse" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
            <span>Arraste ou role para ajustar o foco</span>
          </div>
        </div>
      </div>

      <!-- Container Interativo do Carousel 21st.dev -->
      <div
        class="fp-root"
        tabindex="0"
        role="region"
        aria-roledescription="carousel"
        aria-label="${title}"
      >
        <div class="fp-track" data-drag="0">
          ${cardsHtml}
        </div>

        <div class="fp-meta">
          <div class="fp-cap" aria-live="polite">
            <div class="fp-title">${initialSlide.title || ''}</div>
            <div class="fp-sub">${initialSlide.caption || ''}</div>
          </div>

          <div class="fp-count">
            <b class="fp-curr">01</b> / <span class="fp-total">${String(totalSlides).padStart(2, '0')}</span>
          </div>

          <div class="fp-nav">
            <button type="button" class="fp-btn fp-btn-prev" aria-label="Slide anterior">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M10 12L6 8L10 4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button type="button" class="fp-btn fp-btn-next" aria-label="Próximo slide">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M6 4L10 8L6 12" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="fp-bar"><i class="fp-bar-fill"></i></div>
      </div>
    </section>
  `;
}

/**
 * Inicializa a física de rack focus contínuo, arraste de ponteiro e navegação
 */
function initFocusPullCarousel() {
  const root = document.querySelector('.fp-root');
  if (!root) return;

  // Limpa listeners/timers de inicializações anteriores para evitar memory leaks
  if (typeof window._fpCleanup === 'function') {
    window._fpCleanup();
    window._fpCleanup = null;
  }

  const track = root.querySelector('.fp-track');
  if (!track) return;

  const bar = root.querySelector('.fp-bar-fill');
  const currEl = root.querySelector('.fp-curr');
  const titleEl = root.querySelector('.fp-title');
  const subEl = root.querySelector('.fp-sub');
  const btnPrev = root.querySelector('.fp-btn-prev');
  const btnNext = root.querySelector('.fp-btn-next');
  const cards = Array.from(track.querySelectorAll('.fp-card'));

  if (!cards.length) return;

  // Carrega e armazena os dados dos slides a partir dos elementos ou config
  const currentConfig = window.siteConfig || {};
  const sectionConfig = currentConfig.sections?.focusPullCarousel || {};
  const slides = (sectionConfig.slides && sectionConfig.slides.length > 0)
    ? sectionConfig.slides
    : getDefaultFpSlides(currentConfig);

  // Pinta paisagem procedural de fallback se não houver imagem
  cards.forEach((card, i) => {
    const hasImg = card.querySelector('img');
    if (!hasImg) {
      const palette = card.dataset.palette || 'sage';
      const seed = parseInt(card.dataset.seed || i + 1, 10);
      const dataUrl = paintFpLandscape(seed, palette);
      if (dataUrl) {
        const img = document.createElement('img');
        img.src = dataUrl;
        img.alt = slides[i]?.alt || 'Paisagem natural sálvia';
        img.draggable = false;
        img.loading = 'lazy';
        img.decoding = 'async';
        card.appendChild(img);
      }
    }
  });

  let activeIndex = 0;
  let lastTouchTime = 0;
  let rafId = 0;
  let resizeRafId = 0;
  const blurBase = 7;
  const reducedMotionQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;

  // Cache de geometria para evitar layout thrashing (read → write) durante scroll
  let cachedCenters = [];
  let cachedCardW = 1;
  let cachedTrackClientW = 1;
  let cachedMaxScroll = 0;

  function measure() {
    if (!track) return;
    cachedTrackClientW = track.clientWidth || 1;
    cachedMaxScroll = Math.max(0, track.scrollWidth - cachedTrackClientW);
    cachedCardW = cards[0]?.offsetWidth || 1;
    cachedCenters = cards.map(card => card.offsetLeft + card.offsetWidth / 2);
  }

  /**
   * Cálculo de Rack Focus: aproximação da física de profundidade de campo
   */
  function focusOf(d, blurVal) {
    const a = Math.min(Math.abs(d), 1);
    return {
      scale: 1 - 0.14 * a,
      blur: Math.min(Math.abs(d), 2) * blurVal,
      opacity: 1 - 0.45 * a,
      saturate: 1 - 0.4 * a
    };
  }

  function triggerTextTransition(el, text) {
    if (!el || el.textContent === text) return;
    el.textContent = text || '';
    el.style.animation = 'none';
    requestAnimationFrame(() => {
      if (el) el.style.animation = '';
    });
  }

  function paint() {
    if (!track) return;
    if (!cachedCenters.length) measure();

    // Única leitura de DOM no frame (zero forced synchronous layout)
    const scrollLeft = track.scrollLeft;
    const mid = scrollLeft + cachedTrackClientW / 2;
    const isReduced = reducedMotionQuery ? reducedMotionQuery.matches : false;
    let nearestIdx = 0;
    let minDiff = Infinity;

    // Escritas em lote usando geometria cacheada
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const center = cachedCenters[i];
      const diff = Math.abs(center - mid);
      if (diff < minDiff) {
        minDiff = diff;
        nearestIdx = i;
      }

      const f = focusOf((center - mid) / cachedCardW, isReduced ? 0 : blurBase);
      card.style.transform = `scale(${f.scale.toFixed(4)})`;
      card.style.filter = f.blur > 0.05 ? `blur(${f.blur.toFixed(2)}px) saturate(${f.saturate.toFixed(3)})` : 'none';
      card.style.opacity = f.opacity.toFixed(3);
    }

    // Barra de progresso contínua
    if (bar && cachedMaxScroll > 0) {
      const p = Math.max(0, Math.min(1, scrollLeft / cachedMaxScroll));
      bar.style.transform = `scaleX(${p.toFixed(4)})`;
    }

    // Atualiza metadados apenas se o slide central mudou
    if (nearestIdx !== activeIndex) {
      activeIndex = nearestIdx;
      for (let idx = 0; idx < cards.length; idx++) {
        cards[idx].setAttribute('aria-current', idx === activeIndex ? 'true' : 'false');
      }

      if (currEl) {
        currEl.textContent = String(activeIndex + 1).padStart(2, '0');
      }

      const curSlide = slides[activeIndex];
      if (curSlide) {
        triggerTextTransition(titleEl, curSlide.title || '');
        triggerTextTransition(subEl, curSlide.caption || '');
      }
    }
  }

  function onScroll() {
    if (!rafId) {
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        paint();
      });
    }
  }

  function onResize() {
    if (!resizeRafId) {
      resizeRafId = requestAnimationFrame(() => {
        resizeRafId = 0;
        measure();
        paint();
      });
    }
  }

  track.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });

  let ro = null;
  if ('ResizeObserver' in window) {
    ro = new ResizeObserver(onResize);
    ro.observe(track);
  }

  function scrollToIndex(idx, smooth = true) {
    if (!track || !cards[idx]) return;
    if (!cachedCenters.length) measure();
    const isReduced = reducedMotionQuery ? reducedMotionQuery.matches : false;
    const targetLeft = cachedCenters[idx] - cachedTrackClientW / 2;
    track.scrollTo({
      left: targetLeft,
      behavior: smooth && !isReduced ? 'smooth' : 'auto'
    });
  }

  function step(dir) {
    lastTouchTime = performance.now();
    const nextIdx = (activeIndex + dir + cards.length) % cards.length;
    scrollToIndex(nextIdx);
  }

  if (btnPrev) btnPrev.onclick = () => step(-1);
  if (btnNext) btnNext.onclick = () => step(1);

  root.onkeydown = (e) => {
    if (e.key === 'ArrowRight') {
      step(1);
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      step(-1);
      e.preventDefault();
    }
  };

  // Arraste por mouse / Pointer Events nativo
  let dragData = null;
  let justDragged = false;

  track.onpointerdown = (e) => {
    lastTouchTime = performance.now();
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    dragData = {
      x: e.clientX,
      scrollLeft: track.scrollLeft,
      moved: false,
      pointerId: e.pointerId
    };
  };

  track.onpointermove = (e) => {
    if (!dragData) return;
    const dx = e.clientX - dragData.x;
    if (!dragData.moved && Math.abs(dx) > 5) {
      dragData.moved = true;
      track.dataset.drag = '1';
      try {
        track.setPointerCapture(dragData.pointerId);
      } catch (err) {}
    }
    if (dragData.moved) {
      track.scrollLeft = dragData.scrollLeft - dx;
    }
  };

  const endDrag = () => {
    if (!dragData) return;
    const moved = dragData.moved;
    dragData = null;
    lastTouchTime = performance.now();
    if (moved) {
      justDragged = true;
      setTimeout(() => { justDragged = false; }, 40);
      track.dataset.drag = '0';
      scrollToIndex(activeIndex);
    }
  };

  track.onpointerup = endDrag;
  track.onpointercancel = endDrag;

  cards.forEach((card, idx) => {
    card.onclick = (e) => {
      if (justDragged) {
        e.preventDefault();
        return;
      }
      lastTouchTime = performance.now();
      scrollToIndex(idx);
    };
  });

  // Autoplay discreto: só avança se a seção estiver visível e sem interação recente
  let isIntersecting = false;
  let io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
    }, { threshold: 0.2 });
    io.observe(root);
  } else {
    isIntersecting = true;
  }

  const autoplayInterval = 5500;
  const autoplayTimer = setInterval(() => {
    if (!isIntersecting || document.hidden || performance.now() - lastTouchTime < autoplayInterval) {
      return;
    }
    step(1);
  }, autoplayInterval);

  window._fpCleanup = () => {
    track.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
    if (ro) ro.disconnect();
    if (io) io.disconnect();
    clearInterval(autoplayTimer);
    if (rafId) cancelAnimationFrame(rafId);
    if (resizeRafId) cancelAnimationFrame(resizeRafId);
  };

  // Medição e pintura inicial sincronizada com o próximo frame de layout
  requestAnimationFrame(() => {
    measure();
    paint();
  });
}

// Exportações globais para o orquestrador do template mestre
window.renderFocusPullCarousel = renderFocusPullCarousel;
window.initFocusPullCarousel = initFocusPullCarousel;

