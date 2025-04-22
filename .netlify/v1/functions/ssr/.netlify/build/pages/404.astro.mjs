/* empty css                                */
import { f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DQq-9Zo_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CHmWOWwN.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = "Page non trouv\xE9e - TonPatron";
  const description = "La page que vous recherchez n'existe pas ou a \xE9t\xE9 d\xE9plac\xE9e.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4"> <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1> <h2 class="text-2xl font-semibold text-gray-700 mb-8">Page non trouvée</h2> <p class="text-gray-600 text-center max-w-md mb-8">
La page que vous recherchez n'existe pas ou a été déplacée. 
      Nous vous invitons à retourner à la page d'accueil.
</p> <div class="flex gap-4"> <a href="/" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
Retour à l'accueil
</a> <a href="/contact" class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
Nous contacter
</a> </div> </div> ` })}`;
}, "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/404.astro", void 0);

const $$file = "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
