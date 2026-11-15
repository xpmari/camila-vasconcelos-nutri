global.window = global;
require('../src/config/profiles/nutricao.js');
require('../src/js/components/Hero.js');

const html = global.renderHero(global.specialtyProfiles['nutricao-bem-estar']);
console.log('Has drop-shadow on photo:', html.includes('drop-shadow-[0_25px_45px'));
const match = html.match(/class="(hero-editorial-photo[^"]*)"/);
console.log('Hero photo classes:', match ? match[1] : 'not found');
const h1Match = html.match(/<h1[\s\S]*?<\/h1>/);
console.log('H1 renderizado:\n', h1Match ? h1Match[0] : 'not found');
const camilaMatch = html.match(/CAMILA[\s\S]*?VASCONCELOS/);
console.log('Texto Gigante:\n', camilaMatch ? camilaMatch[0] : 'not found');
