/**
 * COMPONENT: EBOOK BONUS SECTION
 * Apresenta o guia digital exclusivo incluso na consulta com mockup 3D editorial personalizável
 */

function renderEbookBonus(config) {
  const ebook = config.sections?.ebookBonus;
  if (!ebook || ebook.enabled === false) return '';

  const profile = config.profile || {};
  const contact = config.contact || {};
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    ebook.whatsappMessage ||
    contact.whatsappDefaultMessage ||
    'Olá! Gostaria de agendar minha consulta nutricional e saber mais sobre o e-book incluso.'
  )}`;

  const bookTitle = ebook.bookTitle || 'Guia de Organização Alimentar & Receitas Práticas';
  const bookSubtitle = ebook.bookSubtitle || 'Combinações equilibradas, leitura de rótulos e planejamento semanal sem complicação.';
  const bookEdition = ebook.bookEdition || 'EDIÇÃO CLÍNICA • PDF INTERATIVO';
  const previewPages = ebook.previewChapters || [
    { num: '01', label: 'Montagem prática de refeições' },
    { num: '02', label: '+30 receitas doces e salgadas' },
    { num: '03', label: 'Guia de mercado e rótulos' }
  ];

  const highlightsHtml = (ebook.highlights || [
    {
      icon: 'sparkle',
      title: '+30 receitas práticas:',
      detail: 'opções do café ao jantar com ingredientes acessíveis.'
    },
    {
      icon: 'clipboard-check',
      title: 'Guia de compras e rótulos:',
      detail: 'escolha melhores produtos sem armadilhas de marketing.'
    },
    {
      icon: 'activity',
      title: 'Substituições inteligentes:',
      detail: 'varie o cardápio respeitando rotina e orçamento.'
    },
    {
      icon: 'calendar',
      title: 'Planejamento semanal:',
      detail: 'passo a passo simples para ganhar tempo na cozinha.'
    }
  ]).map(item => `
    <li class="flex items-start gap-3">
      <div class="w-8 h-8 rounded-xl bg-theme-primary-light text-theme-primary flex items-center justify-center flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4" aria-hidden="true">
        ${window.getIcon ? window.getIcon(item.icon || 'check', 'check') : '✓'}
      </div>
      <p class="text-sm sm:text-[15px] text-theme-muted leading-snug pt-1">
        <strong class="font-semibold text-theme-primary">${item.title}</strong>
        ${item.detail ? `<span>${item.detail}</span>` : ''}
      </p>
    </li>
  `).join('');

  const previewChaptersHtml = previewPages.map(ch => `
    <div class="flex items-center gap-2.5 py-1.5 border-b border-[#E3EAE0]/70 last:border-0">
      <span class="font-mono text-[10px] font-semibold text-[#6B7D66]">${ch.num}</span>
      <span class="text-[11px] font-medium text-[#232B20] truncate">${ch.label}</span>
    </div>
  `).join('');

  return `
    <section id="ebook" class="py-24 md:py-32 bg-white/45 border-t border-theme/50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <!-- Coluna Visual: Palco Editorial com Mockup 3D do E-book -->
          <div class="lg:col-span-6 fade-in-up">
            <div class="ebook-mockup-stage relative bg-[#FAF8F5]/85 backdrop-blur-sm border border-[#E3EAE0] rounded-[2rem] p-6 sm:p-10 sm:pb-16 lg:p-12 lg:pb-16 flex flex-col sm:flex-row items-center justify-center min-h-[420px] sm:min-h-[490px]">
              
              <!-- Luz orgânica sutil atrás do mockup -->
              <div
                aria-hidden="true"
                class="absolute inset-0 rounded-[2rem] pointer-events-none"
                style="background: radial-gradient(circle at 42% 45%, rgba(143, 160, 138, 0.22) 0%, rgba(250, 248, 245, 0) 68%);"
              ></div>

              <!-- Selo Superior do Mockup -->
              <div class="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#E3EAE0] shadow-sm absolute top-5 left-5 z-20">
                <span class="w-1.5 h-1.5 rounded-full bg-[#3E4D3A]"></span>
                <span class="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#3E4D3A]">
                  Incluso sem custo adicional
                </span>
              </div>

              <!-- Livro 3D Hardcover Personalizado -->
              <div class="ebook-book-wrapper relative z-10 sm:-translate-x-14 lg:-translate-x-16 sm:-translate-y-4">
                <div class="ebook-book" role="img" aria-label="Mockup do e-book ${bookTitle} de ${profile.name}">
                  <div class="ebook-book-pages" aria-hidden="true"></div>
                  <div class="ebook-book-cover">
                    <div class="ebook-book-spine" aria-hidden="true"></div>
                    <div class="ebook-book-inner">
                      <div class="flex items-center justify-between gap-2">
                        <span class="font-mono text-[9px] sm:text-[10px] tracking-[0.14em] uppercase text-[#E8DEC8]/85">
                          ${bookEdition}
                        </span>
                        <span class="w-7 h-7 rounded-full bg-white/10 border border-[#E8DEC8]/25 flex items-center justify-center text-[#E8DEC8] shrink-0" aria-hidden="true">
                          ${window.getIcon ? window.getIcon('botanical-branch') : ''}
                        </span>
                      </div>

                      <div class="my-auto pt-3 pb-2">
                        <span class="block w-8 h-[1.5px] bg-[#8FA08A] mb-3"></span>
                        <p class="font-heading text-xl sm:text-[1.4rem] font-medium tracking-[-0.02em] leading-[1.15] text-[#FAF8F5] mb-2.5">
                          ${bookTitle}
                        </p>
                        <p class="text-[11px] sm:text-xs text-[#EBF1EA]/80 leading-relaxed max-w-[92%]">
                          ${bookSubtitle}
                        </p>
                      </div>

                      <div class="pt-3 border-t border-white/15 flex items-center justify-between gap-2">
                        <div class="min-w-0">
                          <span class="block text-[11px] font-semibold text-[#FAF8F5] truncate">${profile.name || 'Dra. Camila Vasconcelos'}</span>
                          <span class="block font-mono text-[9px] text-[#8FA08A] tracking-wider uppercase">${profile.registration || 'CRN-3 48.910'}</span>
                        </div>
                        <span class="font-mono text-[9px] px-2 py-0.5 rounded bg-white/10 text-[#E8DEC8] shrink-0">
                          PDF
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Card Flutuante: Prévia do Sumário / Página Interna -->
              <div class="zoom-in-entrance relative sm:absolute sm:bottom-5 sm:right-5 mt-7 sm:mt-0 w-full max-w-[270px] sm:w-[258px] bg-white/95 rounded-2xl border border-[#E3EAE0] p-4 shadow-[0_18px_38px_-12px_rgba(62,77,58,0.18)] z-20" data-zoom-index="0">
                <div class="flex items-center justify-between gap-2 mb-2.5">
                  <span class="font-mono text-[10px] font-semibold uppercase tracking-[0.09em] text-[#6B7D66] whitespace-nowrap">
                    Por dentro do guia
                  </span>
                  <span class="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#EBF1EA] text-[#3E4D3A] font-semibold whitespace-nowrap shrink-0">
                    ${ebook.pagesLabel || '48 págs.'}
                  </span>
                </div>
                <div class="space-y-0.5">
                  ${previewChaptersHtml}
                </div>
              </div>

            </div>
          </div>

          <!-- Coluna Textual: Valor do Bônus -->
          <div class="lg:col-span-6 fade-in-up">
            <span class="badge-botanical mb-4">
              <span aria-hidden="true">${window.getIcon ? window.getIcon('book-open') : ''}</span>
              <span>${ebook.tag || 'MATERIAL EXCLUSIVO INCLUSO'}</span>
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-theme-primary tracking-[-0.015em] leading-[1.08] mb-4">
              ${ebook.title || 'E-book exclusivo para facilitar a sua rotina'}
            </h2>

            <p class="text-base sm:text-lg text-[#232B20]/90 leading-relaxed mb-6 font-normal max-w-xl">
              ${ebook.subtitle || 'Incluso gratuitamente na consulta: um <strong>guia digital ilustrado</strong> para preparar refeições rápidas, ir ao mercado e manter a constância.'}
            </p>

            <ul class="space-y-3 mb-8">
              ${highlightsHtml}
            </ul>

            <div class="pt-6 border-t border-theme flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-action text-sm py-3.5 px-7 justify-center">
                ${window.getIcon ? window.getIcon('whatsapp') : ''}
                <span>${ebook.ctaText || 'Agendar Consulta + Receber Guia'}</span>
              </a>
              <span class="font-mono text-[11px] text-theme-muted tracking-tight">
                ${ebook.footnote || 'Entrega digital gratuita após a consulta'}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

if (typeof window !== 'undefined') {
  window.renderEbookBonus = renderEbookBonus;
}

