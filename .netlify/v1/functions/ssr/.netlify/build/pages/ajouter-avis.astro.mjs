/* empty css                                */
import { f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DQq-9Zo_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CHmWOWwN.mjs';
export { renderers } from '../renderers.mjs';

const $$AjouterAvis = createComponent(($$result, $$props, $$slots) => {
  const title = "Ajouter un avis d'employ\xE9 - TonPatron";
  const description = "Partagez votre exp\xE9rience professionnelle et aidez d'autres personnes \xE0 faire le bon choix de carri\xE8re.";
  const ratings = [
    { value: 5, label: "Excellent" },
    { value: 4, label: "Tr\xE8s bien" },
    { value: 3, label: "Moyen" },
    { value: 2, label: "M\xE9diocre" },
    { value: 1, label: "Mauvais" }
  ];
  const aspects = [
    "Salaire et avantages",
    "\xC9quilibre vie pro/perso",
    "Culture d'entreprise",
    "Opportunit\xE9s de carri\xE8re",
    "Management",
    "Formation"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<header class="py-12 bg-gradient-to-r from-green-600 to-green-800 text-white"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-4xl font-bold mb-4">Partagez votre expérience</h1> <p class="text-xl opacity-90">Aidez d'autres personnes à faire le bon choix de carrière</p> </div> </header>  <section class="py-12"> <div class="max-w-2xl mx-auto"> <form class="bg-white rounded-xl shadow-sm p-8"> <!-- Informations sur l'entreprise --> <div class="space-y-6 mb-8"> <h2 class="text-2xl font-semibold">Informations sur l'entreprise</h2> <div> <label class="block text-gray-700 mb-2" for="company">
Nom de l'entreprise *
</label> <input type="text" id="company" name="company" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Ex: Tech Solutions"> </div> <div> <label class="block text-gray-700 mb-2" for="position">
Votre poste *
</label> <input type="text" id="position" name="position" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Ex: Développeur Full Stack"> </div> <div> <label class="block text-gray-700 mb-2" for="department">
Service/Département
</label> <input type="text" id="department" name="department" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Ex: IT"> </div> </div> <!-- Note globale --> <div class="space-y-6 mb-8"> <h2 class="text-2xl font-semibold">Votre évaluation</h2> <div> <label class="block text-gray-700 mb-4">Note globale *</label> <div class="flex gap-4"> ${ratings.map(({ value, label }) => renderTemplate`<label class="flex-1"> <input type="radio" name="rating"${addAttribute(value, "value")} class="sr-only peer" required> <div class="text-center p-4 rounded-lg border border-gray-300 cursor-pointer peer-checked:bg-green-50 peer-checked:border-green-500 peer-checked:text-green-700 hover:bg-gray-50"> <div class="text-2xl mb-1">${value}</div> <div class="text-sm">${label}</div> </div> </label>`)} </div> </div> </div> <!-- Aspects spécifiques --> <div class="space-y-6 mb-8"> <h2 class="text-2xl font-semibold">Aspects spécifiques</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${aspects.map((aspect) => renderTemplate`<div> <label class="block text-gray-700 mb-2">${aspect}</label> <select${addAttribute(`aspect_${aspect.toLowerCase().replace(/\s+/g, "_")}`, "name")} class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"> <option value="">Sélectionner...</option> ${ratings.map(({ value, label }) => renderTemplate`<option${addAttribute(value, "value")}>${value} - ${label}</option>`)} </select> </div>`)} </div> </div> <!-- Avis détaillé --> <div class="space-y-6 mb-8"> <h2 class="text-2xl font-semibold">Votre avis détaillé</h2> <div> <label class="block text-gray-700 mb-2" for="pros">
Points positifs *
</label> <textarea id="pros" name="pros" required rows="4" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Qu'avez-vous apprécié dans cette entreprise ?"></textarea> </div> <div> <label class="block text-gray-700 mb-2" for="cons">
Points à améliorer *
</label> <textarea id="cons" name="cons" required rows="4" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Que pourrait améliorer l'entreprise ?"></textarea> </div> <div> <label class="block text-gray-700 mb-2" for="advice">
Conseils à la direction
</label> <textarea id="advice" name="advice" rows="4" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Quels conseils donneriez-vous à la direction ?"></textarea> </div> </div> <!-- Bouton de soumission --> <div class="flex justify-end"> <button type="submit" class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
Publier mon avis
</button> </div> </form> </div> </section>  <section class="py-12 bg-gray-50 -mx-4 px-4"> <div class="max-w-4xl mx-auto"> <h2 class="text-2xl font-semibold mb-8 text-center">Conseils pour rédiger un avis utile</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="text-center"> <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h3 class="font-semibold mb-2">Soyez précis</h3> <p class="text-gray-600">Donnez des exemples concrets de votre expérience</p> </div> <div class="text-center"> <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="font-semibold mb-2">Restez objectif</h3> <p class="text-gray-600">Partagez les points positifs et négatifs</p> </div> <div class="text-center"> <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path> </svg> </div> <h3 class="font-semibold mb-2">Soyez constructif</h3> <p class="text-gray-600">Proposez des suggestions d'amélioration</p> </div> </div> </div> </section> ` })}`;
}, "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/ajouter-avis.astro", void 0);

const $$file = "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/ajouter-avis.astro";
const $$url = "/ajouter-avis";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AjouterAvis,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
