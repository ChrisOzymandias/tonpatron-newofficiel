/* empty css                                */
import { f as createComponent, i as renderComponent, m as maybeRenderHead, r as renderTemplate, h as addAttribute } from '../chunks/astro/server_DQq-9Zo_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CHmWOWwN.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

function EntrepriseSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setError("");
      return;
    }
    setLoading(true);
    setError("");
    const controller = new AbortController();
    fetch(
      `https://recherche-entreprises.api.gouv.fr/search?q=${encodeURIComponent(query)}&page=1&per_page=10`,
      { signal: controller.signal }
    ).then((res) => res.json()).then((data) => {
      if (data && data.results) setResults(data.results);
      else setResults([]);
    }).catch((err) => {
      if (err.name !== "AbortError") setError("Erreur lors de la recherche. Veuillez réessayer.");
    }).finally(() => setLoading(false));
    return () => controller.abort();
  }, [query]);
  const handleClickEntreprise = (entreprise) => {
    const params = new URLSearchParams({
      nom: entreprise.nom_raison_sociale || entreprise.nom_complet || entreprise.nom || "",
      siren: entreprise.siren || "",
      adresse: entreprise.siege && entreprise.siege.adresse || "",
      categorie: entreprise.categorie_entreprise || "",
      date_creation: entreprise.date_creation || "",
      activite: entreprise.activite_principale || "",
      effectif: entreprise.tranche_effectif_salarie || "",
      code_postal: entreprise.siege && entreprise.siege.code_postal || "",
      commune: entreprise.siege && entreprise.siege.libelle_commune || "",
      nom_commercial: entreprise.siege && entreprise.siege.nom_commercial || "",
      etablissements: entreprise.nombre_etablissements || "",
      etat: entreprise.etat_administratif || ""
    });
    window.location.href = `/entreprise/${entreprise.siren}?${params.toString()}`;
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsx("form", { onSubmit: (e) => e.preventDefault(), className: "flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 max-w-xl mx-auto", children: /* @__PURE__ */ jsx(
      "input",
      {
        type: "search",
        name: "q",
        value: query,
        onChange: (e) => setQuery(e.target.value),
        placeholder: "Rechercher une entreprise, un métier...",
        className: "w-full px-6 py-4 rounded-xl border-none focus:ring-4 focus:ring-blue-300 text-gray-900 text-lg shadow-lg placeholder-gray-400",
        "aria-label": "Rechercher une entreprise ou un métier",
        autoComplete: "off"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 max-w-xl mx-auto", children: [
      loading && /* @__PURE__ */ jsx("div", { className: "text-blue-700 font-semibold", children: "Recherche en cours..." }),
      error && /* @__PURE__ */ jsx("div", { className: "text-red-600 font-semibold", children: error }),
      results.length > 0 && /* @__PURE__ */ jsx("ul", { className: "bg-white rounded-xl shadow divide-y divide-gray-100 mt-4", children: results.map((entreprise) => /* @__PURE__ */ jsxs(
        "li",
        {
          className: "p-4 hover:bg-blue-50 transition cursor-pointer",
          onClick: () => handleClickEntreprise(entreprise),
          tabIndex: 0,
          onKeyDown: (e) => {
            if (e.key === "Enter") handleClickEntreprise(entreprise);
          },
          "aria-label": `Voir la fiche de ${entreprise.nom_raison_sociale || entreprise.nom_complet}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold text-blue-700", children: entreprise.nom_raison_sociale || entreprise.nom_complet }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: entreprise.siege && entreprise.siege.adresse ? entreprise.siege.adresse : "Adresse non disponible" })
          ]
        },
        entreprise.siren
      )) }),
      results.length === 0 && query && !loading && !error && /* @__PURE__ */ jsx("div", { className: "text-gray-500 mt-4", children: "Aucune entreprise trouvée." })
    ] })
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "TonPatron - Avis d'employ\xE9s sur les entreprises fran\xE7aises";
  const description = "TonPatron : trouvez et partagez des avis authentiques sur les employeurs et entreprises fran\xE7aises. Classements, t\xE9moignages, barom\xE8tre, FAQ, et conseils pour booster votre carri\xE8re et votre r\xE9f\xE9rencement.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <meta property="og:type" content="website"> <meta property="og:title"', '> <meta property="og:description"', '> <meta property="og:url" content="https://tonpatron.fr/"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"', '> <meta name="twitter:description"', `> <script type="application/ld+json">{JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'TonPatron',
      'url': 'https://tonpatron.fr/',
      'description': description
    })}<\/script> `])), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content")) })} <!-- Hero Section --> ${maybeRenderHead()}<section class="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-500 to-purple-600 text-white text-center overflow-hidden p-0 m-0"> <img src="/hero-modern.jpg" alt="Avis employés entreprises" class="absolute inset-0 w-full h-full object-cover object-center opacity-40" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-500 to-purple-700 opacity-70"></div> <div class="relative z-10 w-full max-w-3xl px-4 mx-auto flex flex-col items-center"> <h1 class="text-5xl md:text-7xl font-extrabold mb-8 drop-shadow-xl text-white">Avis d'employés sur les<br>entreprises Françaises</h1> <p class="text-xl md:text-2xl mb-10 font-medium drop-shadow-lg text-white">Évaluez et découvrez les avis sur plus de 4,5 millions d'entreprises françaises. Notes, salaires et conditions de travail.</p> ${renderComponent($$result, "EntrepriseSearch", EntrepriseSearch, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/components/EntrepriseSearch.jsx", "client:component-export": "default" })} <a href="#entreprises" class="btn btn-primary mt-8 text-lg shadow-xl">Découvrir les entreprises</a> </div> </section> <!-- Baromètre Section --> <section class="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50"> <div class="max-w-4xl mx-auto"> <h2 class="section-title">Le Baromètre des Entreprises Françaises</h2> <div class="flex flex-col md:flex-row items-center justify-center gap-8"> <div class="glass-card p-10 flex-1 min-w-[250px] text-center"> <div class="text-6xl font-extrabold text-yellow-400 mb-2 animate-bounce">3.3/5</div> <div class="text-gray-600 mb-4">Note moyenne nationale</div> <div class="flex flex-col gap-2 mt-6"> <div class="flex items-center justify-between text-lg"><span>Ambiance</span><span class="font-bold">3.6</span></div> <div class="flex items-center justify-between text-lg"><span>Salaire</span><span class="font-bold">3.2</span></div> <div class="flex items-center justify-between text-lg"><span>Équilibre</span><span class="font-bold">3.1</span></div> <div class="flex items-center justify-between text-lg"><span>Management</span><span class="font-bold">2.9</span></div> </div> </div> <div class="flex-1 min-w-[250px] flex justify-center"> <img src="/barometre-entreprise.svg" alt="Baromètre des entreprises" class="w-72 max-w-xs mx-auto drop-shadow-2xl animate-float"> </div> </div> </div> </section> <!-- Entreprises populaires Section --> <section id="entreprises" class="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"> <h2 class="section-title">Entreprises les mieux notées</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"> <!-- Exemple de carte entreprise --> <div class="glass-card p-8 flex flex-col items-center hover:scale-105 transition-transform duration-200 ease-in-out shadow-2xl"> <img src="/logo-exemple.svg" alt="Logo Entreprise" class="w-20 h-20 rounded-full mb-4 border-4 border-blue-200 bg-gray-50 shadow-lg"> <h3 class="text-xl font-bold mb-2 text-blue-800">Entreprise A</h3> <div class="flex items-center mb-2"> <span class="text-yellow-400 font-bold text-2xl mr-1">4.5</span> <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z"></path></svg> </div> <span class="text-gray-500 text-sm mb-2">Secteur : Tech</span> <a href="#" class="mt-2 btn btn-primary w-full">Voir les avis</a> </div> <!-- Ajouter d'autres cartes dynamiquement --> </div> </section> <!-- Comment ça marche Section --> <section class="py-20 bg-white"> <div class="max-w-6xl mx-auto"> <h2 class="section-title">Comment ça marche ?</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-10"> <div class="text-center glass-card p-10 flex flex-col items-center animate-fade-in-up"> <div class="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mb-6 shadow-lg"> <span class="text-4xl font-bold text-blue-700">1</span> </div> <h3 class="text-2xl font-semibold mb-4">Recherchez</h3> <p class="text-gray-700 text-lg">Trouvez l'entreprise qui vous intéresse</p> </div> <div class="text-center glass-card p-10 flex flex-col items-center animate-fade-in-up delay-100"> <div class="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mb-6 shadow-lg"> <span class="text-4xl font-bold text-green-700">2</span> </div> <h3 class="text-2xl font-semibold mb-4">Découvrez</h3> <p class="text-gray-700 text-lg">Lisez les avis d'employés actuels et anciens</p> </div> <div class="text-center glass-card p-10 flex flex-col items-center animate-fade-in-up delay-200"> <div class="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center mb-6 shadow-lg"> <span class="text-4xl font-bold text-yellow-700">3</span> </div> <h3 class="text-2xl font-semibold mb-4">Partagez</h3> <p class="text-gray-700 text-lg">Contribuez en partageant votre propre expérience</p> </div> </div> </div> </section> <!-- Témoignages Section --> <section class="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"> <h2 class="section-title">Ce que disent nos utilisateurs</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"> <!-- Exemple de carte témoignage --> <div class="glass-card p-8 flex flex-col items-center border-0 shadow-2xl hover:scale-105 transition-transform duration-200 ease-in-out"> <img src="/avatar-exemple.png" alt="Utilisateur" class="w-20 h-20 rounded-full mb-4 border-4 border-purple-200 bg-gray-50 shadow-lg"> <p class="text-gray-700 mb-4 italic text-lg">“Plateforme très utile pour comparer les entreprises avant de postuler. Les avis sont authentiques et variés.”</p> <span class="font-semibold text-blue-700">Sophie, RH</span> </div> <!-- Ajouter d'autres témoignages dynamiquement --> </div> </section> <!-- Section SEO & Référencement --> <section class="py-20 bg-white border-t border-blue-100"> <div class="max-w-5xl mx-auto"> <h2 class="section-title">SEO & Référencement</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"> <div> <p class="text-xl text-gray-700 mb-6">TonPatron est conçu pour offrir le meilleur référencement possible à chaque entreprise et à chaque avis publié. Grâce à une structure technique optimisée (balises meta, données structurées, rapidité), chaque fiche entreprise bénéficie d'une visibilité maximale sur Google et les moteurs de recherche.</p> <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2"> <li>URLs propres et optimisées</li> <li>Méta-données uniques pour chaque page</li> <li>Utilisation de Schema.org et JSON-LD</li> <li>Chargement rapide et responsive</li> <li>Liens internes entre entreprises, catégories, FAQ</li> </ul> <p class="text-gray-600 italic">Notre équipe surveille en permanence les évolutions SEO pour garantir la meilleure visibilité à nos utilisateurs.</p> </div> <div> <img src="/seo-illustration.svg" alt="SEO et référencement" class="w-full max-w-xs mx-auto drop-shadow-2xl"> </div> </div> <div class="mt-16"> <h3 class="text-2xl font-semibold text-blue-700 mb-6">FAQ SEO</h3> <div class="space-y-4"> <details class="bg-blue-50 rounded-xl p-5"> <summary class="font-semibold cursor-pointer">Comment TonPatron aide-t-il au référencement des entreprises ?</summary> <p class="mt-2 text-gray-700">Chaque fiche entreprise dispose de meta-données uniques, d'une structure technique optimisée, et d'une indexation rapide sur Google grâce à l'utilisation de Schema.org et d'un sitemap performant.</p> </details> <details class="bg-blue-50 rounded-xl p-5"> <summary class="font-semibold cursor-pointer">Puis-je améliorer le SEO de mon entreprise ?</summary> <p class="mt-2 text-gray-700">Oui : encouragez vos collaborateurs à laisser des avis, complétez les informations de votre fiche, et partagez le lien sur vos réseaux sociaux pour augmenter la visibilité.</p> </details> <details class="bg-blue-50 rounded-xl p-5"> <summary class="font-semibold cursor-pointer">Combien de temps pour être visible sur Google ?</summary> <p class="mt-2 text-gray-700">L'indexation est généralement rapide (quelques jours), mais dépend de la fréquence de passage des robots Google et du contenu publié.</p> </details> </div> </div> </div> </section> `;
}, "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/index.astro", void 0);

const $$file = "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
