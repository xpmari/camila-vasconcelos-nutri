/**
 * COMPONENT: FOOTER
 * Rodapé ético com dados legais, CRM/RQE, Responsável Técnico e conformidade LGPD
 */

function renderFooter(config) {
  const profile = config.profile || {};
  const contact = config.contact || {};
  const address = contact.address || {};
  const compliance = config.compliance || {};
  const social = contact.social || {};

  const currentYear = new Date().getFullYear();

  return `
    <footer class="relative z-10 bg-[#1C241A] text-[#FAF8F5]/80 pt-20 pb-28 lg:pb-12 border-t border-[#2D3929]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          <!-- Coluna 1: Marca & Dados Principais (5 colunas) -->
          <div class="lg:col-span-5">
            <div class="flex items-center gap-3 mb-4">
              <img src="${profile.logoUrl}" alt="${profile.name}" width="36" height="36" loading="lazy" decoding="async" class="h-9 w-9 brightness-200 object-contain" onerror="this.style.display='none'">
              <div>
                <span class="font-heading text-xl font-medium tracking-[-0.025em] text-[#FAF8F5] block leading-[1.1]">${profile.name}</span>
                <span class="text-[11px] text-[#8FA08A] font-semibold tracking-[0.14em] uppercase">${profile.title}</span>
              </div>
            </div>

            <p class="text-sm text-[#FAF8F5]/70 leading-relaxed mb-6 max-w-sm font-normal">
              ${profile.bioShort || profile.heroSubheadline || ''}
            </p>

            <!-- Registro Profissional em Destaque -->
            <div class="p-4 rounded-2xl bg-[#263123] border border-[#344130] text-xs text-[#FAF8F5]/85 max-w-sm mb-4">
              <span class="block font-semibold text-[#FAF8F5] mb-0.5">Registro Profissional:</span>
              <span class="font-mono text-[#8FA08A] font-medium">${profile.registration}</span>
              <span class="block text-[11px] text-[#FAF8F5]/60 mt-1">${profile.technicalLead}</span>
            </div>

            <!-- Redes Sociais -->
            <div class="flex items-center gap-3 pt-2">
              ${social.instagram ? `
                <a href="${social.instagram}" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl bg-[#263123] hover:bg-[#3E4D3A] hover:text-white text-[#FAF8F5]/70 flex items-center justify-center transition-colors border border-white/10" aria-label="Instagram">
                  <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              ` : ''}
              ${social.linkedin ? `
                <a href="${social.linkedin}" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl bg-[#263123] hover:bg-[#3E4D3A] hover:text-white text-[#FAF8F5]/70 flex items-center justify-center transition-colors border border-white/10" aria-label="LinkedIn">
                  <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              ` : ''}
            </div>
          </div>

          <!-- Coluna 2: Navegação Rápida (3 colunas) -->
          <div class="lg:col-span-3">
            <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Navegação</h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="#hero" class="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" class="hover:text-white transition-colors">Sobre o Profissional</a></li>
              <li><a href="#servicos" class="hover:text-white transition-colors">Áreas da Nutrição</a></li>
              <li><a href="#jornada" class="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#depoimentos" class="hover:text-white transition-colors">Experiência dos Pacientes</a></li>
              <li><a href="#faq" class="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
              <li><a href="#localizacao" class="hover:text-white transition-colors">Localização e Contato</a></li>
            </ul>
          </div>

          <!-- Coluna 3: Endereço & Canais Diretos (4 colunas) -->
          <div class="lg:col-span-4">
            <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Consultório</h4>
            <div class="space-y-3 text-sm text-[#FAF8F5]/75">
              <p>
                <strong class="text-[#FAF8F5] block">${address.name}</strong>
                ${address.street}<br>
                ${address.neighborhood} • ${address.city} - ${address.state}
              </p>
              ${contact.phone ? `<p><strong class="text-[#FAF8F5]/95">Telefone:</strong> ${contact.phone}</p>` : ''}
              ${contact.email ? `<p><strong class="text-[#FAF8F5]/95">E-mail:</strong> ${contact.email}</p>` : ''}
              <p><strong class="text-[#FAF8F5]/95">WhatsApp:</strong> +${contact.whatsapp}</p>
            </div>
          </div>

        </div>

        <!-- Disclaimer Ético (CFN) -->
        <div class="py-6 border-b border-white/10 text-xs text-[#FAF8F5]/65 leading-relaxed">
          <p>
            ${compliance.medicalDisclaimer || 'Aviso Legal: Conteúdo de caráter informativo em conformidade com o Código de Ética do Nutricionista (CFN). Os planos alimentares são individualizados após avaliação presencial ou online.'}
          </p>
        </div>

        <!-- Linha Inferior com Copyright e LGPD -->
        <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/65">
          <p>© ${currentYear} ${profile.name}. Todos os direitos reservados.</p>
          <div class="flex items-center gap-6">
            <button type="button" id="open-privacy-modal" class="hover:text-white transition-colors underline underline-offset-4">
              Política de Privacidade (LGPD)
            </button>
            <a href="#hero" class="hover:text-white transition-colors">
              Voltar ao topo ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  `;
}

if (typeof window !== 'undefined') {
  window.renderFooter = renderFooter;
}

