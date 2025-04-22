/* empty css                                */
import { f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DQq-9Zo_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CHmWOWwN.mjs';
import { s as supabase } from '../chunks/supabaseClient_C-vXuWdx.mjs';
export { renderers } from '../renderers.mjs';

const $$Entreprises = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Liste des entreprises - TonPatron";
  const description = "Explorez notre base de donn\xE9es d'entreprises et d\xE9couvrez les avis des employ\xE9s. Filtrez par secteur, taille et localisation.";
  const { data: companies, error } = await supabase.from("entreprises").select("*");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<header class="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-4xl font-bold mb-4">Annuaire des entreprises</h1> <p class="text-xl opacity-90">Découvrez les meilleures entreprises selon leurs employés</p> </div> </header>  <section class="py-8 bg-gray-50 border-b"> <div class="max-w-6xl mx-auto"> <div class="flex flex-wrap gap-4 items-center justify-between"> <div class="flex gap-4"> <select class="px-4 py-2 rounded-lg border border-gray-300"> <option>Tous les secteurs</option> <option>Technologie</option> <option>Finance</option> <option>Santé</option> </select> <select class="px-4 py-2 rounded-lg border border-gray-300"> <option>Toutes les tailles</option> <option>1-50 employés</option> <option>51-200 employés</option> <option>201+ employés</option> </select> </div> <div class="relative"> <input type="search" placeholder="Rechercher une entreprise..." class="pl-10 pr-4 py-2 rounded-lg border border-gray-300 w-64"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> </div> </div> </section>  <section class="py-12"> <div class="max-w-6xl mx-auto"> ${error && renderTemplate`<div class="text-red-700 font-semibold mb-6">Erreur lors du chargement des entreprises.</div>`} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${companies && companies.length > 0 ? companies.map((company) => renderTemplate`<article class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition"> <div class="flex justify-between items-start mb-4"> <h2 class="text-xl font-semibold text-gray-900">${company.nom || company.name}</h2> <span class="inline-flex items-center bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full text-sm font-medium">
SIREN : ${company.siren} </span> </div> <p class="text-gray-600 mb-4">${company.adresse || "Adresse non renseign\xE9e"}</p> <div class="flex justify-between items-center"> <span class="text-sm text-gray-500">${company.categorie || "Type inconnu"}</span> <a${addAttribute(`/entreprise/${company.siren}`, "href")} class="text-blue-600 hover:text-blue-800">
Voir la fiche →
</a> </div> </article>`) : renderTemplate`<div class="col-span-full text-center text-gray-500 py-12">Aucune entreprise enregistrée pour le moment.</div>`} </div> </div> </section>  <nav class="py-8 flex justify-center"> <ul class="flex gap-2"> <li> <a href="#" class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">Précédent</a> </li> <li> <a href="#" class="px-4 py-2 rounded-lg border border-blue-600 bg-blue-600 text-white">1</a> </li> <li> <a href="#" class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">2</a> </li> <li> <a href="#" class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">3</a> </li> <li> <a href="#" class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">Suivant</a> </li> </ul> </nav> ` })}`;
}, "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/entreprises.astro", void 0);

const $$file = "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/entreprises.astro";
const $$url = "/entreprises";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Entreprises,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
