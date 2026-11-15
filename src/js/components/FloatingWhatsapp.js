/**
 * COMPONENT: FLOATING WHATSAPP
 * Atalho discreto e acessível, harmonizado à paleta oliva/sálvia, sem competir com os CTAs primários
 */

function renderFloatingWhatsapp(config) {
  const contact = config.contact || {};
  if (!contact.whatsapp) return '';

  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappDefaultMessage || 'Olá')}`;

  return `
    <a 
      id="floating-whatsapp-btn"
      href="${whatsappUrl}" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="floating-whatsapp is-hidden-above-fold group"
      aria-label="Agendar consulta pelo WhatsApp"
      title="Agendar consulta pelo WhatsApp"
      aria-hidden="true"
      tabindex="-1"
    >
      <span class="w-5 h-5 flex items-center justify-center shrink-0">
        ${window.getIcon ? window.getIcon('whatsapp') : ''}
      </span>
      <span class="hidden lg:inline font-sans font-semibold whitespace-nowrap">
        Agendar consulta
      </span>
    </a>
  `;
}

let _floatingWhatsappObserver = null;
let _floatingWhatsappScrollHandler = null;

function initFloatingWhatsapp() {
  if (_floatingWhatsappObserver) {
    _floatingWhatsappObserver.disconnect();
    _floatingWhatsappObserver = null;
  }
  if (_floatingWhatsappScrollHandler) {
    window.removeEventListener('scroll', _floatingWhatsappScrollHandler);
    window.removeEventListener('resize', _floatingWhatsappScrollHandler);
    _floatingWhatsappScrollHandler = null;
  }

  const btn = document.getElementById('floating-whatsapp-btn');
  if (!btn) return;

  const footer = document.querySelector('footer');
  let isOverFooter = false;

  const syncAriaAndTab = () => {
    const isHidden = btn.classList.contains('is-hidden-above-fold') || btn.classList.contains('is-hidden-over-footer');
    if (isHidden) {
      btn.setAttribute('aria-hidden', 'true');
      btn.setAttribute('tabindex', '-1');
    } else {
      btn.removeAttribute('aria-hidden');
      btn.removeAttribute('tabindex');
    }
  };

  const updateScrollVisibility = () => {
    const threshold = Math.min(340, Math.round((window.innerHeight || 800) * 0.42));
    const shouldHideAboveFold = (window.scrollY || window.pageYOffset || 0) < threshold;
    btn.classList.toggle('is-hidden-above-fold', shouldHideAboveFold);
    btn.classList.toggle('is-hidden-over-footer', isOverFooter);
    syncAriaAndTab();
  };

  let scrollTicking = false;
  _floatingWhatsappScrollHandler = () => {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(() => {
        scrollTicking = false;
        updateScrollVisibility();
      });
    }
  };

  window.addEventListener('scroll', _floatingWhatsappScrollHandler, { passive: true });
  window.addEventListener('resize', _floatingWhatsappScrollHandler, { passive: true });

  if (footer && 'IntersectionObserver' in window) {
    _floatingWhatsappObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isOverFooter = entry.isIntersecting;
        btn.classList.toggle('is-hidden-over-footer', isOverFooter);
        syncAriaAndTab();
      });
    }, {
      threshold: 0.08
    });

    _floatingWhatsappObserver.observe(footer);
  }

  updateScrollVisibility();
}

if (typeof window !== 'undefined') {
  window.renderFloatingWhatsapp = renderFloatingWhatsapp;
  window.initFloatingWhatsapp = initFloatingWhatsapp;
}
