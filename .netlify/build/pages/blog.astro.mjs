/* empty css                                */
import { f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DQq-9Zo_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CHmWOWwN.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Blog - TonPatron";
  const description = "D\xE9couvrez nos articles sur les tendances du march\xE9 du travail et les meilleures pratiques en entreprise.";
  const articles = [
    {
      id: "1",
      title: "Bienvenue sur notre blog",
      content: "<p>Bienvenue sur notre blog !</p>",
      coverImage: "",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    }
    // Ajoutez d'autres articles ici
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="flex justify-between items-center mb-8"> <h1 class="text-3xl font-bold">Blog</h1> <div class="flex gap-4"> <input type="search" placeholder="Rechercher un article..." class="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <select class="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="">Trier par</option> <option value="date">Date</option> <option value="popularite">Popularité</option> </select> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${articles.map((article) => renderTemplate`<article class="bg-white rounded-lg shadow-sm overflow-hidden"> ${article.coverImage && renderTemplate`<img${addAttribute(article.coverImage, "src")}${addAttribute(article.title, "alt")} class="w-full h-48 object-cover">`} <div class="p-6"> <h2 class="text-xl font-semibold mb-2"> <a${addAttribute(`/blog/${article.id}`, "href")} class="hover:text-blue-600"> ${article.title} </a> </h2> <p class="text-gray-600 mb-4"> ${new Date(article.createdAt).toLocaleDateString()} </p> <div class="prose max-w-none text-gray-700 mb-4"> <div${addAttribute({ __html: article.content }, "dangerouslySetInnerHTML")}></div> </div> <a${addAttribute(`/blog/${article.id}`, "href")} class="inline-flex items-center text-blue-600 hover:text-blue-800">
Lire la suite
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </article>`)} </div> </div> ` })}`;
}, "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
