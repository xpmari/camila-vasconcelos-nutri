/**
 * COMPONENT: LGPD BANNER & PRIVACY MODAL
 * Conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
 */

function renderLgpdBanner(config) {
  const compliance = config.compliance || {};
  if (!compliance.showLgpdBanner) return '';

  const modal = compliance.privacyModalContent || {};

  return `
    <!-- Banner Inferior de Cookies (LGPD) -->
    <div id="lgpd-banner" class="lgpd-banner hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-xs sm:text-sm text-slate-300 leading-relaxed text-center sm:text-left">
          ${compliance.lgpdBannerText || 'Utilizamos cookies essenciais para garantir o correto funcionamento e segurança da página, em conformidade com a LGPD.'}
        </div>
        <div class="flex items-center gap-3 flex-shrink-0">
          <button type="button" id="lgpd-open-modal" class="min-h-[44px] font-sans font-semibold text-xs text-slate-300 hover:text-white underline underline-offset-4 py-2 px-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FAF8F5]">
            Saber Mais
          </button>
          <button type="button" id="lgpd-accept-btn" class="min-h-[44px] bg-theme-primary hover:bg-theme-primary-hover text-[#FAF8F5] font-sans text-xs font-semibold py-2.5 px-6 rounded-full transition-colors shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FAF8F5] focus-visible:outline-offset-2">
            Concordar e Continuar
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de Política de Privacidade -->
    <div id="privacy-modal" class="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm hidden flex items-center justify-center p-4">
      <div data-lenis-prevent class="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
        
        <div class="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <h3 class="font-heading text-2xl font-medium tracking-[-0.025em] leading-[1.1] text-slate-900">
            ${modal.title || 'Política de Privacidade e LGPD'}
          </h3>
          <button type="button" id="privacy-modal-close" class="min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3E4D3A]" aria-label="Fechar">
            ✕
          </button>
        </div>

        <div class="prose prose-slate text-sm text-slate-600 leading-relaxed space-y-4 mb-8">
          <p>
            ${modal.text || 'Este site tem caráter exclusivamente informativo e de apresentação de serviços de saúde.'}
          </p>
          <h4 class="text-slate-900 font-bold text-sm">1. Coleta e Uso de Informações</h4>
          <p>
            Nenhum dado clínico, prontuário médico ou histórico de saúde é coletado ou armazenado por meio deste website. As mensagens enviadas voluntariamente pelo paciente por meio do aplicativo WhatsApp são protegidas por criptografia de ponta a ponta e processadas unicamente pela equipe de recepção para agendamentos.
          </p>
          <h4 class="text-slate-900 font-bold text-sm">2. Cookies de Navegação</h4>
          <p>
            Utilizamos apenas cookies essenciais para monitoramento de tráfego anônimo e segurança do servidor, sem rastreamento comportamental invasivo.
          </p>
          <h4 class="text-slate-900 font-bold text-sm">3. Seus Direitos</h4>
          <p>
            Em conformidade com o Artigo 18 da LGPD, você pode a qualquer momento solicitar a confirmação da existência de tratamento ou a eliminação de dados de contato fornecidos em nossa recepção.
          </p>
        </div>

        <div class="pt-4 border-t border-slate-100 flex justify-end">
          <button type="button" id="privacy-modal-dismiss" class="btn-primary-action text-xs py-2.5 px-6">
            Entendido
          </button>
        </div>

      </div>
    </div>
  `;
}

function initLgpdEvents() {
  const banner = document.getElementById('lgpd-banner');
  const acceptBtn = document.getElementById('lgpd-accept-btn');
  const openModalBtn = document.getElementById('lgpd-open-modal');
  const footerOpenModalBtn = document.getElementById('open-privacy-modal');
  const modal = document.getElementById('privacy-modal');
  const closeModalBtn = document.getElementById('privacy-modal-close');
  const dismissModalBtn = document.getElementById('privacy-modal-dismiss');

  let accepted = false;
  try {
    accepted = Boolean(localStorage.getItem('healthcare_lgpd_accepted'));
  } catch (e) {}

  // Verifica se já aceitou cookies
  if (banner && !accepted) {
    banner.classList.remove('hidden');
    if (document.body) document.body.classList.add('has-lgpd-banner');
  }

  if (acceptBtn && banner) {
    acceptBtn.addEventListener('click', () => {
      try {
        localStorage.setItem('healthcare_lgpd_accepted', 'true');
      } catch (e) {}
      banner.classList.add('hidden');
      if (document.body) document.body.classList.remove('has-lgpd-banner');
    });
  }

  const openModal = () => {
    if (modal) modal.classList.remove('hidden');
    if (window.lenisInstance && typeof window.lenisInstance.stop === 'function') {
      window.lenisInstance.stop();
    }
  };

  const closeModal = () => {
    if (modal) modal.classList.add('hidden');
    if (window.lenisInstance && typeof window.lenisInstance.start === 'function') {
      window.lenisInstance.start();
    }
  };

  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (footerOpenModalBtn) footerOpenModalBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (dismissModalBtn) dismissModalBtn.addEventListener('click', closeModal);
}

if (typeof window !== 'undefined') {
  window.renderLgpdBanner = renderLgpdBanner;
  window.initLgpdEvents = initLgpdEvents;
}

