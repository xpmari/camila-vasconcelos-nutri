/**
 * TEST RUNNER: Validação do Site de Nutrição (Dra. Camila Vasconcelos)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Mock mínimo de navegador
const mockAppEl = { innerHTML: '' };
global.window = {
  specialtyProfiles: {},
  addEventListener: () => {},
  removeEventListener: () => {},
  scrollTo: () => {},
  matchMedia: () => ({ matches: false })
};
global.requestAnimationFrame = () => 0;
global.document = {
  addEventListener: () => {},
  getElementById: (id) => (id === 'app' ? mockAppEl : null),
  querySelectorAll: () => [],
  querySelector: () => null,
  createElement: () => ({ setAttribute: () => {}, style: {}, classList: { add: () => {} }, textContent: '' }),
  body: { classList: { add: () => {}, remove: () => {} } },
  head: { appendChild: () => {} },
  title: ''
};

// 1. Carrega perfil de Nutrição, configuração e todos os scripts referenciados em index.html
const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const localScripts = [...indexHtml.matchAll(/<script[^>]+src="([^"]+)"/g)]
  .map(m => m[1])
  .filter(src => !src.startsWith('http'));

let allPassed = true;
function assert(label, condition, detail = '') {
  if (condition) {
    console.log(`  ✓ ${label}`);
  } else {
    console.error(`  ❌ FALHA: ${label}${detail ? ' — ' + detail : ''}`);
    allPassed = false;
  }
}

console.log('=== VALIDAÇÃO DO SITE DE NUTRIÇÃO ===\n');

// Verifica existência de todos os scripts referenciados no index.html
localScripts.forEach(src => {
  const fullPath = path.join(ROOT, src);
  assert(`Script existe no disco: ${src}`, fs.existsSync(fullPath));
  if (fs.existsSync(fullPath)) {
    const code = fs.readFileSync(fullPath, 'utf8');
    eval(code);
  }
});

// 2. Validação do siteConfig
const cfg = global.window.siteConfig;
assert('window.siteConfig carregado diretamente', !!cfg && cfg.id === 'nutricao-bem-estar');
assert('Nome e Título definidos', !!(cfg?.profile?.name && cfg?.profile?.title));
assert('Registro Profissional CRN definido', !!(cfg?.profile?.registration && cfg?.profile?.technicalLead));
assert('Headline e Subtítulo definidos', !!(cfg?.profile?.heroHeadline && cfg?.profile?.heroSubheadline));
assert('QuickStats (4 itens)', cfg?.profile?.quickStats?.length === 4);
assert('Sobre (Bio e Credenciais)', cfg?.profile?.about?.paragraphs?.length > 0 && cfg?.profile?.about?.credentials?.length > 0);
assert('Áreas da Nutrição (FocusPullCarousel >= 4 slides)', cfg?.sections?.focusPullCarousel?.slides?.length >= 4);
assert('Jornada de Cuidado (4 passos)', cfg?.sections?.careJourney?.steps?.length === 4);
assert('Depoimentos Éticos CFN ativos', cfg?.sections?.testimonials?.enabled === true && cfg?.sections?.testimonials?.items?.length >= 3);
assert('FAQ (>= 4 perguntas)', cfg?.sections?.faq?.items?.length >= 4);
assert('SEO & Schema.org configurados', !!(cfg?.seo?.siteTitle && cfg?.seo?.schemaType));
assert('Conformidade LGPD configurada', !!(cfg?.compliance?.showLgpdBanner && cfg?.compliance?.medicalDisclaimer));

// 3. Renderização completa via init() / renderApp(config)
if (typeof global.window.init === 'function') {
  global.window.init();
} else if (typeof global.window.renderApp === 'function') {
  global.window.renderApp(cfg);
} else {
  assert('renderApp disponível', false);
}

const html = mockAppEl.innerHTML;
assert('HTML renderizado com conteúdo', html.length > 10000, `${html.length} chars`);
assert("Ausência de 'undefined' ou 'null' no HTML", !html.includes('undefined') && !html.includes('null'));

// Verifica renderização única do FocusPullCarousel
const carouselCount = (html.match(/class="fp-track"/g) || []).length;
assert('FocusPullCarousel renderizado exatamente 1 vez', carouselCount === 1, `encontrado ${carouselCount}x`);

// Verifica Jade Sky ativo
assert('Camada global Jade Sky renderizada', html.includes('jade-sky-ambient-layer'));

// Verifica que não há referências residuais de outras especialidades ou removidos
const forbidden = ['placeholder-clinic.svg', 'DevToolbar', '#diferenciais', 'CurtainGallery'];
const residual = forbidden.filter(term => html.includes(term));
assert('Sem referências residuais a componentes removidos', residual.length === 0, residual.join(', '));

// 4. Verifica existência no disco de todas as imagens locais usadas no perfil e index.html
const assetRefs = new Set([
  cfg?.profile?.avatarUrl,
  cfg?.profile?.heroDecorativeUrl,
  cfg?.profile?.aboutPhotoUrl,
  cfg?.profile?.aboutSecondaryPhotoUrl,
  cfg?.profile?.logoUrl,
  cfg?.profile?.clinicPhotoUrl,
  ...(cfg?.sections?.focusPullCarousel?.slides || []).map(s => s.image)
].filter(img => img && !img.startsWith('http')));

const faviconMatch = indexHtml.match(/<link[^>]+rel="icon"[^>]+href="([^"]+)"/);
if (faviconMatch) assetRefs.add(faviconMatch[1]);

assetRefs.forEach(relPath => {
  assert(`Imagem local existe: ${relPath}`, fs.existsSync(path.join(ROOT, relPath)));
});

// 5. Verifica tokens CSS obrigatórios em assets/css/style.css
const css = fs.readFileSync(path.join(ROOT, 'assets/css/style.css'), 'utf8');
const requiredVars = [
  '--color-primary', '--color-primary-hover', '--color-primary-light',
  '--color-secondary', '--color-accent', '--color-bg-light',
  '--color-surface', '--color-surface-warm', '--color-text-main',
  '--color-text-muted', '--color-border',
  '--font-heading-family', '--font-heading', '--font-body'
];
const missingVars = requiredVars.filter(v => !css.includes(v));
assert('Todas as variáveis CSS presentes no style.css', missingVars.length === 0, missingVars.join(', '));
assert('Estilos Jade Sky presentes no style.css', css.includes('body.has-jade-sky') && css.includes('.jade-sky-ambient-layer'));

console.log('');
if (!allPassed) {
  console.error('❌ EXISTEM FALHAS NA VALIDAÇÃO ESTÁTICA!');
  process.exit(1);
}

// 6. Verificação HTTP real via scratch/serve.js (confirma zero 404s de scripts/imagens/CSS)
const { spawn } = require('child_process');
const http = require('http');

const srv = spawn(process.execPath, [path.join(__dirname, 'serve.js')], {
  stdio: ['ignore', 'pipe', 'pipe']
});

const routesToProbe = new Set([
  '/',
  '/assets/css/style.css',
  '/assets/fonts/Geist-Variable.woff2',
  '/assets/fonts/GeistMono-Variable.woff2',
  '/assets/images/placeholder-logo-nutricao.svg',
  '/assets/images/placeholder-clinic-nutricao.svg',
  '/assets/images/placeholder-doctor-nutricao.svg',
  '/robots.txt',
  '/sitemap.xml',
  ...localScripts.map(s => '/' + s),
  ...[...assetRefs].map(a => '/' + a)
]);

function httpGetStatus(urlPath) {
  return new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:4173' + urlPath, res => {
      res.resume();
      resolve({ urlPath, status: res.statusCode });
    }).on('error', reject);
  });
}

let serverChecked = false;
srv.stdout.on('data', async () => {
  if (serverChecked) return;
  serverChecked = true;
  try {
    const results = await Promise.all([...routesToProbe].map(httpGetStatus));
    const failures = results.filter(r => r.status !== 200);
    results.forEach(r => {
      assert(`HTTP ${r.status} -> ${r.urlPath}`, r.status === 200);
    });
    srv.kill();
    console.log('');
    if (allPassed && failures.length === 0) {
      console.log('🎉 TODOS OS TESTES DE NUTRIÇÃO E ROTAS HTTP PASSARAM COM SUCESSO!');
      process.exit(0);
    } else {
      console.error('❌ EXISTEM FALHAS NA VALIDAÇÃO HTTP!');
      process.exit(1);
    }
  } catch (err) {
    console.error('Erro ao testar serve.js:', err.message);
    srv.kill();
    process.exit(1);
  }
});

setTimeout(() => {
  if (!serverChecked) {
    console.error('❌ Timeout ao aguardar inicialização de serve.js');
    srv.kill();
    process.exit(1);
  }
}, 5000);
