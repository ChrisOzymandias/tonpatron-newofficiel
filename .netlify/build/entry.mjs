import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BfLhClDv.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin/blog.astro.mjs');
const _page3 = () => import('./pages/ajouter-avis.astro.mjs');
const _page4 = () => import('./pages/blog/_id_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/categories.astro.mjs');
const _page7 = () => import('./pages/entreprise/creer.astro.mjs');
const _page8 = () => import('./pages/entreprise/_nomentreprise_/_siren_/creer.astro.mjs');
const _page9 = () => import('./pages/entreprise/_siren_.astro.mjs');
const _page10 = () => import('./pages/entreprises.astro.mjs');
const _page11 = () => import('./pages/faq.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/blog.astro", _page2],
    ["src/pages/ajouter-avis.astro", _page3],
    ["src/pages/blog/[id].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/categories.astro", _page6],
    ["src/pages/entreprise/creer.astro", _page7],
    ["src/pages/entreprise/[nomentreprise]/[siren]/creer.astro", _page8],
    ["src/pages/entreprise/[siren].astro", _page9],
    ["src/pages/entreprises.astro", _page10],
    ["src/pages/faq.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0be3ab94-16e5-42be-a84a-d793f8cb902d"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
