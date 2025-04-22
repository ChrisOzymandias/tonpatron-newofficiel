/* empty css                                         */
import { e as createAstro, f as createComponent, h as addAttribute, j as renderHead, r as renderTemplate } from '../../../../chunks/astro/server_DQq-9Zo_.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://tonpatron.fr");
const $$Creer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Creer;
  const siren = Astro2.params.siren;
  const nom = decodeURIComponent(Astro2.params.nomentreprise ?? "");
  return renderTemplate`<html lang="fr"> <head><title>Créer une fiche pour ${nom} | TonPatron</title><meta name="description"${addAttribute(`Ajoutez une fiche pour l'entreprise ${nom} (SIREN : ${siren}) non trouv\xE9e dans l'annuaire officiel.`, "content")}>${renderHead()}</head> <body> <main class="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-16 mb-12"> <h1 class="text-3xl font-bold text-blue-700 mb-4">Créer une fiche entreprise</h1> <div class="mb-4">Pour : <span class="font-semibold">${nom}</span> (SIREN : <span class="font-mono">${siren}</span>)</div> <form method="POST" action="#"> <label class="block mb-2 font-semibold">Nom de l'entreprise</label> <input type="text" name="nom"${addAttribute(nom, "value")} class="border rounded p-2 w-full mb-4" required> <label class="block mb-2 font-semibold">SIREN</label> <input type="text" name="siren"${addAttribute(siren, "value")} class="border rounded p-2 w-full mb-4" required> <label class="block mb-2 font-semibold">Votre avis</label> <textarea name="avis" class="border rounded p-2 w-full mb-4" rows="4" required></textarea> <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Créer la fiche</button> </form> <div class="mt-6 text-sm text-gray-500">Cette fiche sera visible sur TonPatron même si l'entreprise n'est pas dans l'annuaire officiel.</div> </main> </body></html>`;
}, "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/entreprise/[nomentreprise]/[siren]/creer.astro", void 0);

const $$file = "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/entreprise/[nomentreprise]/[siren]/creer.astro";
const $$url = "/entreprise/[nomentreprise]/[siren]/creer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Creer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
