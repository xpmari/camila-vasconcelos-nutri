/**
 * ==============================================================================
 * APP ORCHESTRATOR - NUTRIÇÃO & SAÚDE (Dra. Camila Vasconcelos)
 * Renderizador principal e orquestrador de ciclo de vida e interações
 * ==============================================================================
 */

/**
 * Inicializa a landing page de Nutrição
 */
function init() {
  const config = window.siteConfig || window.specialtyProfiles?.['nutricao-bem-estar'];

  if (!config) {
    console.error('Configuração de Nutrição não encontrada.');
    return;
  }

  window.siteConfig = config;

  // Garante o tema Jade Sky contínuo na raiz do documento
  if (document.body) {
    document.body.classList.add('has-jade-sky');
  }

  // 1. Atualiza Metatags e Schema.org no <head>
  if (window.setupSEO) {
    window.setupSEO(config);
  }

  // 2. Renderiza toda a árvore de componentes
  renderApp(config);

  // 3. Inicializa interações de UI (listener de scroll registrado uma única vez)
  initSmoothScroll();
  initHeaderInteractions();
  initTubelightNav();
  initFaqInteractions();
  initScrollAnimations();
  initZoomEntranceAnimations();
  if (window.initFocusPullCarousel) {
    window.initFocusPullCarousel();
  }
  if (window.initCareJourneyMotion) {
    window.initCareJourneyMotion();
  }
  if (window.initLgpdEvents) {
    window.initLgpdEvents();
  }
  if (window.initFloatingWhatsapp) {
    window.initFloatingWhatsapp();
  }
}

/**
 * Renderiza todos os componentes no container #app
 */
function renderApp(config) {
  const appContainer = document.getElementById('app');
  if (!appContainer) {
    console.error('Erro: Elemento #app não encontrado no DOM.');
    return;
  }

  const sections = config.sections || {};
  let pageHtml = '';

  // 21st.dev: Jade Sky Ambient Layer fixo em toda a página
  pageHtml += `<div class="jade-sky-ambient-layer" aria-hidden="true"></div>`;

  // Header Fixo
  if (sections.header?.enabled !== false && window.renderHeader) {
    pageHtml += window.renderHeader(config);
  }

  // Main Content Wrapper
  pageHtml += `<main id="main-content" class="relative z-10">`;

  // Hero Section
  if (sections.hero?.enabled !== false && window.renderHero) {
    pageHtml += window.renderHero(config);
  }

  // Barra de Indicadores Rápidos
  if (sections.quickStats?.enabled !== false && window.renderQuickStats) {
    pageHtml += window.renderQuickStats(config);
  }

  // Sobre o Profissional
  if (sections.about?.enabled !== false && window.renderAbout) {
    pageHtml += window.renderAbout(config);
  }

  // Áreas da Nutrição (FocusPullCarousel - renderizado em um único lugar)
  if (sections.focusPullCarousel?.enabled !== false && window.renderFocusPullCarousel) {
    pageHtml += window.renderFocusPullCarousel(config);
  }

  // Jornada de Cuidado em Zigue-Zague
  if (sections.careJourney?.enabled !== false && window.renderCareJourney) {
    pageHtml += window.renderCareJourney(config);
  }

  // Material Exclusivo Incluso (E-book + Mockup 3D)
  if (sections.ebookBonus?.enabled !== false && window.renderEbookBonus) {
    pageHtml += window.renderEbookBonus(config);
  }

  // Depoimentos Éticos (CFN)
  if (sections.testimonials?.enabled && window.renderTestimonials) {
    pageHtml += window.renderTestimonials(config);
  }

  // FAQ Interativo
  if (sections.faq?.enabled !== false && window.renderFaq) {
    pageHtml += window.renderFaq(config);
  }

  // Contato Unificado (CTA Final + Localização & Horários)
  if (sections.location?.enabled !== false && window.renderLocation) {
    pageHtml += window.renderLocation(config);
  }

  pageHtml += `</main>`;

  // Footer Completo
  if (sections.footer?.enabled !== false && window.renderFooter) {
    pageHtml += window.renderFooter(config);
  }

  // Banner LGPD & Modal de Privacidade
  if (window.renderLgpdBanner) {
    pageHtml += window.renderLgpdBanner(config);
  }

  // Botão Flutuante de WhatsApp
  if (window.renderFloatingWhatsapp) {
    pageHtml += window.renderFloatingWhatsapp(config);
  }

  appContainer.innerHTML = pageHtml;
}

document.addEventListener('DOMContentLoaded', init);

/**
 * Interações do Header (Menu Mobile e Efeito de Vidro na Rolagem)
 */
let _headerScrollHandler = null;

function initHeaderInteractions() {
  const header = document.getElementById('main-header');
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-menu-drawer');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (_headerScrollHandler) {
    window.removeEventListener('scroll', _headerScrollHandler);
    _headerScrollHandler = null;
  }

  // Efeito de sombra sutil na rolagem com throttle por rAF e guard de estado
  if (header) {
    let isScrolled = null;
    let scrollTicking = false;

    const updateHeaderState = () => {
      scrollTicking = false;
      const shouldBeScrolled = window.scrollY > 20;
      if (shouldBeScrolled === isScrolled) return;
      isScrolled = shouldBeScrolled;

      if (shouldBeScrolled) {
        document.body.classList.add('is-scrolled');
        header.classList.add('shadow-md', 'bg-[#FAF8F5]/95');
        header.classList.remove('bg-[#FAF8F5]/90');
      } else {
        document.body.classList.remove('is-scrolled');
        header.classList.remove('shadow-md', 'bg-[#FAF8F5]/95');
        header.classList.add('bg-[#FAF8F5]/90');
      }
    };

    _headerScrollHandler = () => {
      if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(updateHeaderState);
      }
    };

    window.addEventListener('scroll', _headerScrollHandler, { passive: true });
    updateHeaderState();
  }

  // Toggle do Menu Mobile
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = drawer.classList.contains('hidden');
      if (isExpanded) {
        drawer.classList.remove('hidden');
        hamburgerIcon?.classList.add('hidden');
        closeIcon?.classList.remove('hidden');
      } else {
        drawer.classList.add('hidden');
        hamburgerIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
      }
    });

    // Fecha o menu mobile ao clicar em um link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.add('hidden');
        hamburgerIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
      });
    });
  }
}

/**
 * Interações do Acordeão de FAQ
 */
function initFaqInteractions() {
  const faqButtons = document.querySelectorAll('.faq-button');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      if (!item) return;

      const isActive = item.classList.contains('active');

      // Fecha todos os outros itens para manter elegância minimalista
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBtn = otherItem.querySelector('.faq-button');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Animações Suaves de Entrada com IntersectionObserver (Fade In Up)
 */
let _scrollObserver = null;

function initScrollAnimations() {
  if (_scrollObserver) {
    _scrollObserver.disconnect();
    _scrollObserver = null;
  }

  const elements = document.querySelectorAll('.fade-in-up');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    _scrollObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    elements.forEach(el => _scrollObserver.observe(el));
  } else {
    elements.forEach(el => el.classList.add('is-visible'));
  }
}

/**
 * ==============================================================================
 * ZOOM DE ENTRADA (CARD ZOOM ENTRANCE)
 * Aciona quando o elemento estiver 20% visível (threshold: 0.2).
 * Transição de scale(0.92) e opacity: 0 para scale(1) e opacity: 1 em ~550ms.
 * Curva cubic-bezier(0.22, 1, 0.36, 1) com atraso escalonado limitado a 240ms.
 * Respeita prefers-reduced-motion e não gera layout shift.
 * ==============================================================================
 */
let _zoomObserver = null;
let _zoomCleanup = null;

function initZoomEntranceAnimations() {
  // Limpeza completa de observadores, timers e listeners anteriores
  if (typeof _zoomCleanup === 'function') {
    _zoomCleanup();
    _zoomCleanup = null;
  }

  const rootEl = document.documentElement;
  const zoomElements = document.querySelectorAll('.zoom-in-entrance');
  if (!zoomElements.length) {
    if (rootEl && rootEl.classList) rootEl.classList.remove('has-zoom-observer');
    return;
  }

  const reducedQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  const prefersReducedMotion = reducedQuery ? reducedQuery.matches : false;

  const revealAllImmediately = () => {
    if (rootEl && rootEl.classList) rootEl.classList.remove('has-zoom-observer');
    zoomElements.forEach(el => {
      el.classList.add('is-visible');
      el.style.transitionDelay = '';
      el.style.willChange = 'auto';
    });
  };

  // Fallback imediato: sem IntersectionObserver ou com prefers-reduced-motion ativo
  if (!('IntersectionObserver' in window) || prefersReducedMotion) {
    revealAllImmediately();
    return;
  }

  // Ativa estado inicial scale(0.92) + opacity: 0 apenas quando JS + Observer iniciam com sucesso
  if (rootEl && rootEl.classList) rootEl.classList.add('has-zoom-observer');

  const cleanupTimers = new Set();

  function revealElement(el, useStagger) {
    if (el.classList.contains('is-visible')) return;
    const index = parseInt(el.getAttribute('data-zoom-index') || '0', 10);
    const delay = useStagger ? Math.min(Math.max(index, 0) * 60, 240) : 0;

    el.style.transitionDelay = `${delay}ms`;
    requestAnimationFrame(() => {
      el.classList.add('is-visible');
    });

    // Remove transitionDelay e will-change após concluir para manter hover instantâneo
    const timer = setTimeout(() => {
      cleanupTimers.delete(timer);
      el.style.transitionDelay = '';
      el.style.willChange = 'auto';
    }, 550 + delay + 80);
    cleanupTimers.add(timer);
  }

  _zoomObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealElement(entry.target, true);
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2 // Aciona uma única vez quando 20% do elemento estiver visível
  });

  zoomElements.forEach(el => _zoomObserver.observe(el));

  // Garante visibilidade imediata se o usuário navegar por teclado (Tab) antes dos 20%
  const onFocusIn = (e) => {
    const card = e.target && typeof e.target.closest === 'function'
      ? e.target.closest('.zoom-in-entrance')
      : null;
    if (card && !card.classList.contains('is-visible')) {
      revealElement(card, false);
      if (_zoomObserver) _zoomObserver.unobserve(card);
    }
  };
  document.addEventListener('focusin', onFocusIn);

  const onReducedChange = (e) => {
    if (e.matches) {
      revealAllImmediately();
      if (_zoomObserver) _zoomObserver.disconnect();
    }
  };
  if (reducedQuery && typeof reducedQuery.addEventListener === 'function') {
    reducedQuery.addEventListener('change', onReducedChange);
  }

  _zoomCleanup = () => {
    if (_zoomObserver) {
      _zoomObserver.disconnect();
      _zoomObserver = null;
    }
    document.removeEventListener('focusin', onFocusIn);
    if (reducedQuery && typeof reducedQuery.removeEventListener === 'function') {
      reducedQuery.removeEventListener('change', onReducedChange);
    }
    cleanupTimers.forEach(t => clearTimeout(t));
    cleanupTimers.clear();
  };
  window._zoomCleanup = _zoomCleanup;
}

/**
 * ==============================================================================
 * SMOOTH SCROLL PRINCIPAL (LENIS)
 * Contêiner alvo: window / document.documentElement (fluxo vertical principal)
 * ==============================================================================
 */
let _smoothScrollCleanup = null;

function scrollToTargetElement(targetEl, headerOffset, options = {}) {
  if (!targetEl) return;

  const offset = typeof headerOffset === 'number' ? headerOffset : 80;
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const immediate = Boolean(options.immediate || reducedMotion);

  if (window.lenisInstance && typeof window.lenisInstance.scrollTo === 'function') {
    window.lenisInstance.scrollTo(targetEl, {
      offset: -offset,
      immediate
    });
    return;
  }

  const targetTop = Math.max(0, targetEl.getBoundingClientRect().top + window.scrollY - offset);
  window.scrollTo({
    top: targetTop,
    behavior: immediate ? 'auto' : 'smooth'
  });
}

function initSmoothScroll() {
  if (typeof _smoothScrollCleanup === 'function') {
    _smoothScrollCleanup();
    _smoothScrollCleanup = null;
  }

  const reducedQuery = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null;

  let lenis = null;
  let rafId = null;
  let destroyed = false;

  const stopRaf = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  const destroyLenisInstance = () => {
    stopRaf();
    if (lenis && typeof lenis.destroy === 'function') {
      lenis.destroy();
    }
    lenis = null;
    window.lenisInstance = null;
  };

  const createLenisInstance = () => {
    if (destroyed || lenis) return;
    if (reducedQuery && reducedQuery.matches) return;
    if (typeof window.Lenis !== 'function') return;

    lenis = new window.Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.95,
      touchMultiplier: 1,
      overscroll: true,
      prevent: (node) => Boolean(
        node &&
        typeof node.closest === 'function' &&
        node.closest('[data-lenis-prevent], .fp-track, #privacy-modal')
      )
    });

    window.lenisInstance = lenis;

    const raf = (time) => {
      if (!lenis || destroyed) return;
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
  };

  createLenisInstance();

  const onReducedChange = (e) => {
    if (e.matches) {
      destroyLenisInstance();
    } else {
      createLenisInstance();
    }
  };

  if (reducedQuery && typeof reducedQuery.addEventListener === 'function') {
    reducedQuery.addEventListener('change', onReducedChange);
  }

  const onPageHide = () => {
    destroyLenisInstance();
  };
  window.addEventListener('pagehide', onPageHide);

  _smoothScrollCleanup = () => {
    destroyed = true;
    destroyLenisInstance();
    window.removeEventListener('pagehide', onPageHide);
    if (reducedQuery && typeof reducedQuery.removeEventListener === 'function') {
      reducedQuery.removeEventListener('change', onReducedChange);
    }
  };
  window._smoothScrollCleanup = _smoothScrollCleanup;
}

/**
 * ==============================================================================
 * TUBELIGHT NAVBAR SCROLLSPY, ÂNCORAS E HISTÓRICO (21ST.DEV INTEGRATION)
 * Gerencia a aba ativa, deslocamento da lâmpada, âncoras internas e histórico
 * ==============================================================================
 */
let _tubelightObserver = null;
let _tubelightNavCleanup = null;

function initTubelightNav() {
  if (_tubelightObserver) {
    _tubelightObserver.disconnect();
    _tubelightObserver = null;
  }
  if (typeof _tubelightNavCleanup === 'function') {
    _tubelightNavCleanup();
    _tubelightNavCleanup = null;
  }

  const navItems = document.querySelectorAll('.tubelight-nav-item');

  function setActiveTarget(targetId) {
    navItems.forEach(item => {
      if (item.getAttribute('data-nav-target') === targetId) {
        item.classList.add('is-active');
      } else {
        item.classList.remove('is-active');
      }
    });
  }

  const navigateToHash = (rawHash, updateHistory = true) => {
    if (!rawHash || !rawHash.startsWith('#') || rawHash.length <= 1) return false;

    const targetId = rawHash.slice(1);
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return false;

    setActiveTarget(targetId);

    const headerOffset = targetId === 'hero' ? 0 : 80;

    if (updateHistory && window.location.hash !== `#${targetId}` && window.history && typeof window.history.pushState === 'function') {
      window.history.pushState(null, '', `#${targetId}`);
    }

    if (!targetEl.hasAttribute('tabindex')) {
      targetEl.setAttribute('tabindex', '-1');
    }
    targetEl.focus({ preventScroll: true });

    scrollToTargetElement(targetEl, headerOffset);
    return true;
  };

  // Delegação única para links âncora internos (#sobre, #jornada, #hero, nav, rodapé)
  const onDocumentAnchorClick = (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }

    const anchor = e.target && typeof e.target.closest === 'function'
      ? e.target.closest('a[href^="#"]')
      : null;
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (navigateToHash(href, true)) {
      e.preventDefault();
    }
  };

  const onHistoryNavigation = () => {
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      navigateToHash(hash, false);
      return;
    }

    if (window.lenisInstance && typeof window.lenisInstance.scrollTo === 'function') {
      const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.lenisInstance.scrollTo(0, { immediate: Boolean(reducedMotion) });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  document.addEventListener('click', onDocumentAnchorClick);
  window.addEventListener('hashchange', onHistoryNavigation);
  window.addEventListener('popstate', onHistoryNavigation);

  _tubelightNavCleanup = () => {
    document.removeEventListener('click', onDocumentAnchorClick);
    window.removeEventListener('hashchange', onHistoryNavigation);
    window.removeEventListener('popstate', onHistoryNavigation);
  };

  if (!navItems.length) return;

  // ScrollSpy com IntersectionObserver
  const sectionsToObserve = ['hero', 'sobre', 'servicos', 'jornada', 'depoimentos', 'faq', 'localizacao'];
  const observedEls = sectionsToObserve.map(id => document.getElementById(id)).filter(Boolean);

  if ('IntersectionObserver' in window && observedEls.length) {
    _tubelightObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveTarget(entry.target.id);
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    });

    observedEls.forEach(el => _tubelightObserver.observe(el));
  }
}

if (typeof window !== 'undefined') {
  window.init = init;
  window.renderApp = renderApp;
  window.initSmoothScroll = initSmoothScroll;
  window.initZoomEntranceAnimations = initZoomEntranceAnimations;
  window.initTubelightNav = initTubelightNav;
}
