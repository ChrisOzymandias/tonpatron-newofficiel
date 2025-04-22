/* empty css                                */
import { f as createComponent, i as renderComponent, r as renderTemplate, u as unescapeHTML, m as maybeRenderHead } from '../chunks/astro/server_DQq-9Zo_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CHmWOWwN.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const title = "FAQ - Questions fr\xE9quentes - TonPatron";
  const description = "Trouvez les r\xE9ponses \xE0 vos questions sur TonPatron. Comment publier un avis, signaler un contenu inappropri\xE9, et plus encore.";
  const faqs = [
    {
      category: "G\xE9n\xE9ral",
      questions: [
        {
          q: "Qu'est-ce que TonPatron ?",
          a: "TonPatron est une plateforme qui permet aux employ\xE9s de partager leur exp\xE9rience professionnelle de mani\xE8re anonyme. Notre objectif est d'aider les candidats \xE0 faire des choix de carri\xE8re \xE9clair\xE9s en leur donnant acc\xE8s \xE0 des avis authentiques sur les entreprises."
        },
        {
          q: "Est-ce que c'est gratuit ?",
          a: "Oui, TonPatron est enti\xE8rement gratuit pour les utilisateurs. Vous pouvez consulter les avis et en publier sans aucun frais."
        },
        {
          q: "Comment garantissez-vous l'authenticit\xE9 des avis ?",
          a: "Nous utilisons plusieurs m\xE9canismes de v\xE9rification, notamment la validation des adresses email professionnelles et des syst\xE8mes de d\xE9tection automatique des avis suspects. Notre \xE9quipe de mod\xE9ration examine \xE9galement les signalements d'avis inappropri\xE9s."
        }
      ]
    },
    {
      category: "Publication d'avis",
      questions: [
        {
          q: "Puis-je publier un avis de mani\xE8re anonyme ?",
          a: "Oui, tous les avis sont publi\xE9s de mani\xE8re anonyme. Seul votre poste et votre d\xE9partement (si renseign\xE9) seront visibles publiquement."
        },
        {
          q: "Quelles sont les r\xE8gles pour publier un avis ?",
          a: "Les avis doivent \xEAtre respectueux, objectifs et bas\xE9s sur une exp\xE9rience r\xE9elle. \xC9vitez les attaques personnelles, le langage inappropri\xE9 et les informations confidentielles de l'entreprise."
        },
        {
          q: "Puis-je modifier mon avis apr\xE8s publication ?",
          a: "Oui, vous pouvez modifier votre avis dans les 30 jours suivant sa publication. Au-del\xE0, contactez notre support pour toute modification n\xE9cessaire."
        }
      ]
    },
    {
      category: "Entreprises",
      questions: [
        {
          q: "Comment ajouter une entreprise manquante ?",
          a: "Si vous ne trouvez pas une entreprise, vous pouvez la sugg\xE9rer via le formulaire d\xE9di\xE9. Notre \xE9quipe v\xE9rifiera les informations et l'ajoutera \xE0 notre base de donn\xE9es."
        },
        {
          q: "Je suis un repr\xE9sentant d'entreprise, comment g\xE9rer notre page ?",
          a: "Les entreprises peuvent cr\xE9er un compte professionnel pour g\xE9rer leur page, r\xE9pondre aux avis et partager des informations officielles. Contactez-nous pour plus d'informations."
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<header class="py-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-4xl font-bold mb-4">Questions fr\xE9quentes</h1> <p class="text-xl opacity-90">Tout ce que vous devez savoir sur TonPatron</p> </div> </header>  <div class="max-w-2xl mx-auto -mt-6"> <div class="bg-white rounded-xl shadow-lg p-4"> <div class="relative"> <input type="search" placeholder="Rechercher une question..." class="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> </div> </div>  <section class="py-12"> <div class="max-w-4xl mx-auto"> ', ` </div> </section>  <section class="py-12 bg-gray-50 -mx-4 px-4"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-2xl font-bold mb-4">Vous n'avez pas trouv\xE9 votre r\xE9ponse ?</h2> <p class="text-gray-600 mb-8">Notre \xE9quipe est l\xE0 pour vous aider</p> <a href="/contact" class="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
Contactez-nous
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </section>  <script type="application/ld+json">`, "<\/script> "])), maybeRenderHead(), faqs.map((category) => renderTemplate`<div class="mb-12"> <h2 class="text-2xl font-bold mb-6">${category.category}</h2> <div class="space-y-6"> ${category.questions.map(({ q, a }) => renderTemplate`<div class="bg-white rounded-lg shadow-sm p-6"> <h3 class="text-lg font-semibold text-gray-900 mb-3">${q}</h3> <p class="text-gray-600">${a}</p> </div>`)} </div> </div>`), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(
      (category) => category.questions.map(({ q, a }) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": a
        }
      }))
    )
  }))) })}`;
}, "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/faq.astro", void 0);

const $$file = "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
