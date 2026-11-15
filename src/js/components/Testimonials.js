/**
 * COMPONENT: TESTIMONIALS (MARQUEE INFINITO LIQUID GLASS - GOOGLE REVIEWS)
 * Carrossel contínuo da direita para a esquerda com efeito Liquid Glass,
 * 5 estrelas douradas, selo Google e conformidade ética (CFN).
 */

function getGoogleIconSvg(sizeClass = 'w-5 h-5') {
  return `
    <svg class="${sizeClass} shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24z"/>
      <path fill="#FBBC05" d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14z"/>
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96z"/>
    </svg>
  `;
}

function getGoldStarSvg() {
  return `<svg class="w-4 h-4 text-[#F59E0B] fill-current shrink-0" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
}

function renderTestimonialCards(items) {
  const avatarTones = [
    'bg-[#3E4D3A] text-[#FAF8F5]',
    'bg-[#6B7D66] text-[#FAF8F5]',
    'bg-[#2B5842] text-[#FAF8F5]',
    'bg-[#4B5E47] text-[#FAF8F5]',
    'bg-[#5C7057] text-[#FAF8F5]'
  ];

  return items.map((item, index) => {
    const starsHtml = Array(item.rating || 5).fill(getGoldStarSvg()).join('');
    const initial = (item.author || 'P').trim().charAt(0).toUpperCase();
    const toneClass = avatarTones[index % avatarTones.length];
    const metaText = item.meta || 'Consulta Presencial • Local Guide';

    return `
      <article class="w-80 shrink-0 rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-white/60 backdrop-blur-md border border-white/80 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div>
          <!-- Topo do Card: Avatar + Nome + Subtítulo + Ícone Google -->
          <div class="flex items-start justify-between gap-3 mb-3.5">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 rounded-full ${toneClass} flex items-center justify-center font-sans font-bold text-sm shrink-0 shadow-xs select-none" aria-hidden="true">
                ${initial}
              </div>
              <div class="min-w-0">
                <span class="block text-sm font-bold text-[#232B20] truncate">${item.author}</span>
                <span class="block text-xs text-theme-muted truncate font-normal">${metaText}</span>
              </div>
            </div>
            ${getGoogleIconSvg('w-5 h-5')}
          </div>

          <!-- 5 Estrelas Douradas + Selo de Verificação -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <div class="flex items-center gap-0.5" aria-label="Avaliação 5 de 5 estrelas">
              ${starsHtml}
            </div>
            <span class="inline-flex items-center gap-1 font-sans text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EBF5EF] text-[#1E6B45] border border-[#CFE6D8] whitespace-nowrap">
              <svg class="w-3 h-3 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>${item.verifiedLabel || 'Avaliação verificada'}</span>
            </span>
          </div>

          <!-- Texto do Depoimento -->
          <p class="font-sans text-sm text-[#232B20]/90 leading-relaxed font-normal">
            "${item.quote}"
          </p>
        </div>

        <!-- Rodapé do Card: Tag da Consulta + Selo Google -->
        <div class="mt-4 pt-3.5 border-t border-theme/40 flex items-center justify-between text-xs text-theme-muted">
          <span class="font-medium text-[11px] text-[#3E4D3A] bg-white/70 px-2.5 py-0.5 rounded-full border border-theme/30">${item.tag || 'Consulta Presencial'}</span>
          <div class="flex items-center gap-1.5 font-sans text-[11px] text-[#6B7D66]">
            <span>Google Review</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderTestimonials(config) {
  const testConfig = config.sections?.testimonials || {};
  if (!testConfig.enabled) return '';

  const items = testConfig.items || [];
  if (!items.length) return '';

  const cardsHtml = renderTestimonialCards(items);

  return `
    <section id="depoimentos" class="py-24 md:py-32 bg-[#FAF8F5]/40 border-t border-theme/50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Cabeçalho 5,0 • Avaliações no Google Meu Negócio -->
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16 fade-in-up">
          <span class="badge-botanical mb-3">
            ${testConfig.tag || 'AVALIAÇÕES NO GOOGLE'}
          </span>
          <h2 class="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-theme-primary tracking-[-0.015em] leading-[1.08] mb-5">
            ${testConfig.title || 'O que os pacientes comentam no Google'}
          </h2>

          <!-- Resumo estilo Google Meu Negócio -->
          <div class="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 px-5 py-2.5 rounded-full bg-white/95 border border-[#E3EAE0] shadow-sm mb-4">
            ${getGoogleIconSvg('w-5 h-5')}
            <span class="font-mono text-base font-bold text-[#232B20]">${testConfig.ratingScore || '5,0'}</span>
            <div class="flex items-center gap-0.5" aria-hidden="true">
              ${Array(5).fill(getGoldStarSvg()).join('')}
            </div>
            <span class="text-slate-300 hidden sm:inline">•</span>
            <span class="text-xs sm:text-sm font-medium text-theme-muted">
              ${testConfig.summaryLabel || 'Avaliações no Google Meu Negócio'}
            </span>
          </div>

          <p class="text-sm sm:text-base text-theme-muted leading-relaxed font-normal max-w-xl mx-auto">
            ${testConfig.subtitle || 'Comentários sobre pontualidade, escuta na consulta e praticidade do plano no aplicativo.'}
          </p>
        </div>

      </div>

      <!-- Marquee Infinito Horizontal com Máscara de Degradê nas Laterais -->
      <div class="testimonials-marquee-wrapper w-full">
        <div class="testimonials-marquee-track">
          <!-- 1º Conjunto de Cards -->
          <div class="flex gap-6 shrink-0">
            ${cardsHtml}
          </div>
          <!-- 2º Conjunto Duplicado para Loop Infinito Contínuo sem Buraco -->
          <div class="flex gap-6 shrink-0" aria-hidden="true">
            ${cardsHtml}
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Aviso Ético CFN -->
        <p class="text-xs text-theme-muted mt-8 text-center font-normal max-w-2xl mx-auto">
          ${testConfig.disclaimer || 'Modelo ilustrativo no formato Google Meu Negócio (em conformidade com o CFN). Na publicação, substitua pelas avaliações reais do seu perfil.'}
        </p>
      </div>
    </section>
  `;
}

if (typeof window !== 'undefined') {
  window.renderTestimonials = renderTestimonials;
}
