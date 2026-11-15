/**
 * COMPONENT: LOCATION, HOURS & FINAL CTA (UNIFIED CONTACT FOLD)
 * Última dobra única reunindo chamada principal de agendamento, endereço e horários (sem Jade Sky)
 */

function renderLocation(config) {
  const locConfig = config.sections?.location || {};
  if (locConfig.enabled === false) return '';

  const ctaConfig = config.sections?.ctaFinal || {};
  const contact = config.contact || {};
  const address = contact.address || {};
  const hours = contact.hours || [];
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    contact.whatsappDefaultMessage || 'Olá! Gostaria de informações sobre atendimento.'
  )}`;

  const hoursHtml = hours.map(h => `
    <div class="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm py-2.5 border-b border-white/10 last:border-0">
      <span class="font-normal text-[#FAF8F5]/75">${h.days}</span>
      <span class="font-mono font-medium text-[#FAF8F5]">${h.time}</span>
    </div>
  `).join('');

  return `
    <section id="localizacao" class="relative py-24 md:py-32 bg-[#263123] text-[#FAF8F5] overflow-hidden border-t border-[#344130]">

      <!-- Luz orgânica sutil no fundo escuro -->
      <div aria-hidden="true" class="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] bg-[#6B7D66]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          <!-- Coluna Esquerda: CTA Principal de Agendamento -->
          <div class="lg:col-span-6 fade-in-up text-left">
            <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-7 font-sans">
              <span class="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" aria-hidden="true"></span>
              <span class="text-xs font-semibold tracking-[0.14em] uppercase text-[#FAF8F5]/90">
                Horários disponíveis para esta semana
              </span>
            </div>

            <h2 class="font-heading text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-medium tracking-[-0.015em] leading-[1.08] text-[#FAF8F5] mb-5">
              ${ctaConfig.title || 'Pronto para cuidar da sua saúde com uma nutrição acolhedora e ética?'}
            </h2>

            <p class="text-base sm:text-lg text-[#FAF8F5]/80 leading-relaxed max-w-xl mb-8 font-normal">
              ${ctaConfig.subtitle || 'Atendimento presencial no Jardim Paulista ou online por teleconsulta. Escolha o melhor horário para você.'}
            </p>

            <div class="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-action shiny-cta text-sm sm:text-base py-4 px-8 justify-center">
                ${window.getIcon ? window.getIcon('whatsapp') : ''}
                <span>${ctaConfig.buttonText || 'Agendar Consulta no WhatsApp'}</span>
              </a>

              ${contact.phone ? `
                <a href="tel:${contact.phone.replace(/[^0-9]/g, '')}" class="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3.5 rounded-full border border-white/20 text-sm font-medium text-[#FAF8F5]/90 hover:text-white hover:bg-white/10 transition-colors">
                  ${window.getIcon ? window.getIcon('phone') : ''}
                  <span>${contact.phone}</span>
                </a>
              ` : ''}
            </div>
          </div>

          <!-- Coluna Direita: Card Unificado de Localização & Horários -->
          <div class="lg:col-span-6 fade-in-up">
            <div class="zoom-in-entrance bg-[#1E271C]/95 border border-[#3B4A37] rounded-[2rem] p-7 sm:p-9 shadow-2xl space-y-6" data-zoom-index="0">

              <!-- Bloco 1: Endereço & Rotas -->
              <div class="flex items-start gap-4">
                <div class="w-11 h-11 rounded-2xl bg-[#2D3929] text-[#A8BEA2] border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                  ${window.getIcon ? window.getIcon('map-pin') : ''}
                </div>
                <div class="min-w-0 flex-1">
                  <span class="font-mono text-[11px] font-semibold text-[#A8BEA2] uppercase tracking-[0.14em]">
                    Consultório Presencial & Teleconsulta
                  </span>
                  <h3 class="font-heading text-xl sm:text-2xl font-medium text-[#FAF8F5] tracking-[-0.015em] leading-snug mt-1 mb-2">
                    ${address.name || 'Espaço Clínico'}
                  </h3>
                  <p class="text-sm text-[#FAF8F5]/75 leading-relaxed font-normal">
                    ${address.street}<br>
                    ${address.neighborhood} • ${address.city} - ${address.state} • CEP ${address.zip}
                  </p>
                  ${address.accessibilityNote ? `
                    <p class="text-xs text-[#FAF8F5]/65 leading-relaxed mt-2.5">
                      ${address.accessibilityNote}
                    </p>
                  ` : ''}
                  ${address.googleMapsUrl ? `
                    <a href="${address.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A8BEA2] hover:text-[#FAF8F5] mt-3.5 transition-colors underline underline-offset-4">
                      <span>Abrir localização no Google Maps</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  ` : ''}
                </div>
              </div>

              <div class="border-t border-white/10"></div>

              <!-- Bloco 2: Horários de Atendimento -->
              <div class="flex items-start gap-4">
                <div class="w-11 h-11 rounded-2xl bg-[#2D3929] text-[#A8BEA2] border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                  ${window.getIcon ? window.getIcon('clock') : ''}
                </div>
                <div class="min-w-0 flex-1">
                  <span class="font-mono text-[11px] font-semibold text-[#A8BEA2] uppercase tracking-[0.14em]">
                    Horários de Atendimento
                  </span>
                  <div class="mt-2">
                    ${hoursHtml}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

if (typeof window !== 'undefined') {
  window.renderLocation = renderLocation;
}
