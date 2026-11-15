/**
 * COMPONENT: HEADER / NAVBAR
 * Navegação fixa, logotipo responsivo, links suaves e botão de agendamento WhatsApp
 */

function renderHeader(config) {
  const profile = config.profile || {};
  const contact = config.contact || {};
  const sections = config.sections || {};
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappDefaultMessage || 'Olá')}`;

  const navItems = [
    { id: 'hero', name: 'Início', shortName: 'Início', href: '#hero', icon: 'home', show: true },
    { id: 'sobre', name: 'Sobre', shortName: 'Sobre', href: '#sobre', icon: 'user', show: sections.about?.enabled },
    { id: 'servicos', name: 'Áreas da Nutrição', shortName: 'Áreas', href: '#servicos', icon: 'activity', show: sections.focusPullCarousel?.enabled !== false },
    { id: 'jornada', name: 'Jornada', shortName: 'Jornada', href: '#jornada', icon: 'clock', show: sections.careJourney?.enabled !== false },
    { id: 'depoimentos', name: 'Depoimentos', shortName: 'Relatos', href: '#depoimentos', icon: 'star', show: sections.testimonials?.enabled },
    { id: 'faq', name: 'Dúvidas', shortName: 'Dúvidas', href: '#faq', icon: 'message-circle', show: sections.faq?.enabled },
    { id: 'localizacao', name: 'Contato', shortName: 'Contato', href: '#localizacao', icon: 'map-pin', show: sections.location?.enabled }
  ].filter(l => l.show);

  // Itens mais relevantes para o dock inferior mobile (máximo 5 para ergonomia touch)
  const mobileCoreIds = ['hero', 'sobre', 'servicos', 'jornada', 'localizacao'];
  const mobileNavItems = navItems.filter(item => mobileCoreIds.includes(item.id));

  const desktopTubelightHtml = navItems.map((item, idx) => `
    <a href="${item.href}" class="tubelight-nav-item ${idx === 0 ? 'is-active' : ''}" data-nav-target="${item.id}">
      <span>${item.name}</span>
      <div class="tubelight-lamp"></div>
    </a>
  `).join('');

  const mobileTubelightHtml = mobileNavItems.map((item, idx) => `
    <a href="${item.href}" class="tubelight-nav-item ${idx === 0 ? 'is-active' : ''}" data-nav-target="${item.id}">
      <span class="w-[18px] h-[18px] flex items-center justify-center" aria-hidden="true">${window.getIcon ? window.getIcon(item.icon) : ''}</span>
      <span>${item.shortName || item.name}</span>
      <div class="tubelight-lamp"></div>
    </a>
  `).join('');

  return `
    <!-- Top Header Bar com Logo e CTA -->
    <header id="main-header" class="fixed top-0 left-0 right-0 z-40 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-theme transition-all duration-300">
      <div class="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between gap-2 lg:gap-4 h-20">
          
          <!-- Logotipo / Nome do Especialista -->
          <a href="#hero" class="flex items-center gap-2 sm:gap-2.5 xl:gap-3 group min-w-0 flex-1 lg:flex-initial lg:shrink-0">
            <img src="${profile.logoUrl}" alt="${profile.name}" width="40" height="40" decoding="async" class="h-8 w-8 sm:h-9 sm:w-9 xl:h-10 xl:w-10 shrink-0 object-contain transition-transform group-hover:scale-105" onerror="this.style.display='none'">
            <div class="flex flex-col min-w-0">
              <span class="font-heading text-[15px] sm:text-lg xl:text-xl font-medium text-theme-primary leading-[1.1] tracking-[-0.018em] truncate sm:whitespace-nowrap">${profile.name}</span>
              <span class="text-[8px] sm:text-[9px] xl:text-[10px] font-semibold text-theme-secondary tracking-[0.06em] sm:tracking-[0.10em] xl:tracking-[0.14em] uppercase truncate sm:whitespace-nowrap">${profile.title}</span>
            </div>
          </a>

          <!-- Tubelight NavBar Central Desktop (Convertido do 21st.dev) -->
          <nav class="hidden lg:flex items-center justify-center min-w-0">
            <div class="tubelight-nav-container">
              ${desktopTubelightHtml}
            </div>
          </nav>

          <!-- CTA Desktop & Mobile -->
          <div class="flex items-center gap-3 shrink-0">
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-action header-cta-btn text-[11px] sm:text-xs uppercase tracking-wider">
              ${window.getIcon ? window.getIcon('whatsapp') : ''}
              <span>Agendar</span>
            </a>
          </div>

        </div>
      </div>
    </header>

    <!-- Tubelight Mobile Bottom Dock (21st.dev Floating Navigation) -->
    <div class="tubelight-mobile-dock lg:hidden">
      <div class="tubelight-nav-container shadow-2xl">
        ${mobileTubelightHtml}
      </div>
    </div>
  `;
}

if (typeof window !== 'undefined') {
  window.renderHeader = renderHeader;
}

