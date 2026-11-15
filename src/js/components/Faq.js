/**
 * COMPONENT: FAQ (PERGUNTAS FREQUENTES)
 * Acordeão interativo com respostas transparentes sobre consultas e agendamento
 */

function renderFaq(config) {
  const faqConfig = config.sections?.faq || {};
  if (!faqConfig.enabled) return '';

  const items = faqConfig.items || [];
  if (!items.length) return '';

  const itemsHtml = items.map((item, index) => {
    return `
      <div class="faq-item border-b border-theme last:border-b-0">
        <button type="button" class="faq-button group py-6" data-faq-index="${index}" aria-expanded="false">
          <span class="font-sans text-base sm:text-lg font-semibold text-theme-primary group-hover:text-theme-secondary transition-colors pr-4 text-left">
            ${item.question}
          </span>
          <span class="faq-icon text-theme-secondary flex-shrink-0">
            ${window.getIcon ? window.getIcon('chevron-down') : '▼'}
          </span>
        </button>
        <div class="faq-content">
          <p class="text-sm sm:text-base text-theme-muted leading-relaxed pr-6 pb-6 font-normal">
            ${item.answer}
          </p>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section id="faq" class="py-24 md:py-32 bg-white/45 border-t border-theme/50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16 fade-in-up">
          <span class="badge-botanical mb-3">
            ${faqConfig.tag || 'DÚVIDAS FREQUENTES'}
          </span>
          <h2 class="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-theme-primary tracking-[-0.015em] leading-[1.08] mb-4">
            ${faqConfig.title || 'Respostas para suas principais dúvidas'}
          </h2>
          <p class="text-base sm:text-lg text-theme-muted leading-relaxed font-normal">
            ${faqConfig.subtitle || 'Transparência total sobre consultas, cobertura de reembolso e formas de agendamento.'}
          </p>
        </div>

        <div class="bg-white/85 rounded-3xl border border-theme/80 shadow-sm px-6 sm:px-10 divide-y divide-theme">
          ${itemsHtml}
        </div>

      </div>
    </section>
  `;
}

if (typeof window !== 'undefined') {
  window.renderFaq = renderFaq;
}

