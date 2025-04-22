/* empty css                                */
import { f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DQq-9Zo_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CHmWOWwN.mjs';
export { renderers } from '../renderers.mjs';

const $$Categories = createComponent(($$result, $$props, $$slots) => {
  const title = "Cat\xE9gories d'entreprises - TonPatron";
  const description = "Explorez les avis d'employ\xE9s par secteur d'activit\xE9. Trouvez les meilleures entreprises dans chaque domaine.";
  const categories = [
    {
      name: "Technologie",
      icon: "\u{1F4BB}",
      count: 156,
      subcategories: ["Logiciel", "Hardware", "Services Cloud", "IA"]
    },
    {
      name: "Finance",
      icon: "\u{1F4B0}",
      count: 89,
      subcategories: ["Banque", "Assurance", "Investissement", "Fintech"]
    },
    {
      name: "Sant\xE9",
      icon: "\u{1F3E5}",
      count: 124,
      subcategories: ["H\xF4pitaux", "Biotech", "Pharmacie", "E-sant\xE9"]
    },
    {
      name: "\xC9ducation",
      icon: "\u{1F4DA}",
      count: 78,
      subcategories: ["\xC9coles", "Formation", "EdTech", "Recherche"]
    },
    {
      name: "Commerce",
      icon: "\u{1F6CD}\uFE0F",
      count: 203,
      subcategories: ["Retail", "E-commerce", "Grande distribution", "Luxe"]
    },
    {
      name: "Industrie",
      icon: "\u{1F3ED}",
      count: 167,
      subcategories: ["Automobile", "A\xE9ronautique", "\xC9nergie", "Construction"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<header class="py-12 bg-gradient-to-r from-green-600 to-blue-600 text-white"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-4xl font-bold mb-4">Explorez par catégorie</h1> <p class="text-xl opacity-90">Découvrez les entreprises par secteur d'activité</p> </div> </header>  <div class="max-w-2xl mx-auto py-8"> <div class="relative"> <input type="search" placeholder="Rechercher une catégorie..." class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> </div>  <section class="py-12"> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${categories.map((category) => renderTemplate`<article class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"> <div class="flex items-center gap-4 mb-4"> <span class="text-4xl">${category.icon}</span> <div> <h2 class="text-xl font-semibold">${category.name}</h2> <p class="text-gray-600">${category.count} entreprises</p> </div> </div> <div class="space-y-2"> ${category.subcategories.map((sub) => renderTemplate`<a${addAttribute(`/categories/${category.name.toLowerCase()}/${sub.toLowerCase()}`, "href")} class="block py-2 px-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-blue-600 transition"> ${sub} </a>`)} </div> <div class="mt-6 pt-4 border-t"> <a${addAttribute(`/categories/${category.name.toLowerCase()}`, "href")} class="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
Voir toutes les entreprises
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </article>`)} </div> </div> </section>  <section class="py-16 bg-gray-50 -mx-4 px-4"> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="text-center"> <div class="text-4xl font-bold text-blue-600 mb-2">1,000+</div> <p class="text-gray-600">Entreprises répertoriées</p> </div> <div class="text-center"> <div class="text-4xl font-bold text-blue-600 mb-2">20+</div> <p class="text-gray-600">Secteurs d'activité</p> </div> <div class="text-center"> <div class="text-4xl font-bold text-blue-600 mb-2">10,000+</div> <p class="text-gray-600">Avis d'employés</p> </div> </div> </div> </section> ` })}`;
}, "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/categories.astro", void 0);

const $$file = "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/categories.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Categories,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
