/**
 * COMPONENT: ABOUT SECTION
 * Trajetória do profissional, compromisso ético e títulos de formação
 */

function renderAbout(config) {
  const profile = config.profile || {};
  const about = profile.about || {};
  const contact = config.contact || {};
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappDefaultMessage || 'Olá')}`;

  const paragraphsHtml = (about.paragraphs || []).slice(0, 1).map(p => `
    <p class="text-base sm:text-lg text-[#232B20]/90 leading-relaxed mb-6 font-normal max-w-2xl">
      ${p}
    </p>
  `).join('');

  const pillarsHtml = (about.pillars || []).map(pillar => `
    <li class="flex items-start gap-3">
      <div class="w-8 h-8 rounded-xl bg-theme-primary-light text-theme-primary flex items-center justify-center flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4" aria-hidden="true">
        ${window.getIcon ? window.getIcon(pillar.icon || 'leaf') : '✓'}
      </div>
      <p class="text-sm sm:text-[15px] text-theme-muted leading-snug pt-1">
        <strong class="font-semibold text-theme-primary">${pillar.lead}</strong>
        <span>${pillar.text}</span>
      </p>
    </li>
  `).join('');

  const credentialsHtml = (about.credentials || []).map(cred => {
    const iconName = typeof cred === 'string' ? 'badge' : (cred.icon || 'badge');
    const text = typeof cred === 'string' ? cred : (cred.text || '');
    return `
      <li class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-xl bg-white border border-theme text-theme-primary flex items-center justify-center flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4" aria-hidden="true">
          ${window.getIcon ? window.getIcon(iconName, 'badge') : '✓'}
        </div>
        <span class="text-sm font-normal text-theme-main leading-snug">
          ${text}
        </span>
      </li>
    `;
  }).join('');

  return `
    <section id="sobre" class="py-24 md:py-32 bg-white/45 overflow-hidden border-t border-theme/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Coluna Visual Assimétrica / Fotos em Camadas -->
          <div class="lg:col-span-5 order-2 lg:order-1 fade-in-up">
            <div class="relative">
              
              <!-- Moldura Principal (Sobre Dra. Camila Vasconcelos) -->
              <div class="rounded-[2rem] overflow-hidden shadow-xl border-4 border-[#FAF8F5] bg-[#FAF8F5] aspect-[4/5] relative">
                <img 
                  src="${profile.aboutPhotoUrl || 'assets/images/nutricao/sobre-camila.png'}" 
                  alt="Dra. Camila Vasconcelos em atendimento no consultório" 
                  width="1086"
                  height="1448"
                  class="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <!-- Card de Depoimento de Valores (Verde Oliva Nobre Flutuante) -->
              <div class="mt-6 sm:-mt-10 sm:ml-6 bg-theme-primary text-[#FAF8F5] p-6 sm:p-7 rounded-[1.75rem] shadow-2xl relative z-10 max-w-md border border-[#FAF8F5]/10">
                <div class="flex items-center gap-2.5 mb-3 text-theme-accent">
                  ${window.getIcon ? window.getIcon('leaf') : ''}
                  <span class="text-xs font-semibold uppercase tracking-[0.16em]">Compromisso Ético</span>
                </div>
                <p class="font-heading text-base sm:text-lg text-[#FAF8F5]/95 font-medium tracking-[-0.01em] leading-relaxed">
                  "${about.quote || 'Ouvir com atenção, investigar com rigor científico e tratar cada paciente como um ser integral.'}"
                </p>
                <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span class="text-xs font-medium text-[#FAF8F5]/80">${profile.name}</span>
                  <span class="font-mono text-xs text-theme-accent font-semibold">${profile.registration}</span>
                </div>
              </div>

            </div>
          </div>

          <!-- Coluna Textual da Direita -->
          <div class="lg:col-span-7 order-1 lg:order-2 fade-in-up">
            <span class="badge-botanical mb-4">
              ${about.tag || 'SOBRE A PROFISSIONAL'}
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-theme-primary tracking-[-0.015em] leading-[1.08] mb-5">
              ${about.title || 'Comer bem sem estresse ou culpa'}
            </h2>

            ${paragraphsHtml}

            ${pillarsHtml ? `
              <ul class="space-y-3.5 mb-7">
                ${pillarsHtml}
              </ul>
            ` : ''}

            <!-- Lista de Formação e Titulações em Grid Compacto -->
            <div class="bg-[#FAF8F5]/90 border border-theme rounded-2xl p-5 sm:p-6 mb-8">
              <h3 class="font-heading text-lg font-medium tracking-[-0.012em] leading-[1.2] text-theme-primary mb-4 flex items-center gap-2">
                <span class="text-theme-secondary [&>svg]:w-4 [&>svg]:h-4" aria-hidden="true">${window.getIcon ? window.getIcon('badge') : '★'}</span>
                <span>Formação Acadêmica e Títulos</span>
              </h3>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                ${credentialsHtml}
              </ul>
            </div>

            <!-- Botão de Ação -->
            <div>
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-action text-sm py-3.5 px-7">
                ${window.getIcon ? window.getIcon('whatsapp') : ''}
                <span>Agendar Consulta</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  `;
}

if (typeof window !== 'undefined') {
  window.renderAbout = renderAbout;
}

