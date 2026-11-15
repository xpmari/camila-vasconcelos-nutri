/**
 * COMPONENT: QUICK STATS
 * Barra de autoridade rápida com indicadores de dedicação e ética profissional
 */

function renderQuickStats(config) {
  const profile = config.profile || {};
  const stats = profile.quickStats || [];

  if (!stats.length) return '';

  const itemsHtml = stats.map(stat => `
    <div class="flex flex-col items-center sm:items-start text-center sm:text-left p-6 sm:p-6">
      <span class="font-mono text-3xl sm:text-[2.5rem] font-medium text-theme-primary tracking-[-0.03em] leading-[1.1] mb-2">
        ${stat.number}
      </span>
      <span class="text-sm font-semibold text-theme-primary mb-0.5">
        ${stat.label}
      </span>
      <span class="text-xs text-theme-muted leading-relaxed font-normal">
        ${stat.detail}
      </span>
    </div>
  `).join('');

  return `
    <section class="relative z-20 mt-2 sm:mt-4 lg:mt-6 pb-12 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white/85 backdrop-blur-md rounded-[2rem] shadow-xl border border-white/60 divide-y sm:divide-y-0 sm:divide-x divide-theme/30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        ${itemsHtml}
      </div>
    </section>
  `;
}

if (typeof window !== 'undefined') {
  window.renderQuickStats = renderQuickStats;
}

