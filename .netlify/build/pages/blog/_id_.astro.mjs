/* empty css                                   */
import { e as createAstro, f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_DQq-9Zo_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CHmWOWwN.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://tonpatron.fr");
async function getStaticPaths() {
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
  return articles.map((article) => ({
    params: { id: article.id }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
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
  const article = articles.find((a) => a.id === Astro2.params.id);
  if (!article) {
    throw new Error("Article non trouv\xE9");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${article.title} - Blog`, "description": article.content.slice(0, 150) + "..." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="max-w-4xl mx-auto"> <a href="/blog" class="text-blue-600 hover:text-blue-800 mb-8 inline-flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg>
Retour aux articles
</a> <article class="prose prose-blue max-w-none"> ${article.coverImage && renderTemplate`<img${addAttribute(article.coverImage, "src")}${addAttribute(article.title, "alt")} class="w-full h-64 object-cover rounded-lg mb-6">`} <h1 class="text-4xl font-bold mb-4">${article.title}</h1> <p class="text-gray-600 mb-8"> ${new Date(article.createdAt).toLocaleDateString()} </p> <div class="prose max-w-none text-gray-700"> <div${addAttribute({ __html: article.content }, "dangerouslySetInnerHTML")}></div> </div> </article> <div class="mt-12 border-t pt-8"> <h2 class="text-xl font-semibold mb-4">Articles similaires</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${articles.filter((a) => a.id !== article.id).slice(0, 2).map((related) => renderTemplate`<article class="bg-white rounded-lg shadow-sm"> <div class="p-6"> <h3 class="text-lg font-semibold mb-2"> <a${addAttribute(`/blog/${related.id}`, "href")} class="hover:text-blue-600"> ${related.title} </a> </h3> <p class="text-gray-600"> ${new Date(related.createdAt).toLocaleDateString()} </p> </div> </article>`)} </div> </div> </div> </div> ` })}`;
}, "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/blog/[id].astro", void 0);

const $$file = "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
