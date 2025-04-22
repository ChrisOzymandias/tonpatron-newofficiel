/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, k as Fragment, h as addAttribute, j as renderHead } from '../../chunks/astro/server_DQq-9Zo_.mjs';
import 'kleur/colors';
import { s as supabase } from '../../chunks/supabaseClient_C-vXuWdx.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://tonpatron.fr");
async function get({ params, request }) {
  const siren = params.siren;
  const url = new URL(request.url);
  let nom = url.searchParams.get("nom") || "";
  let adresse = url.searchParams.get("adresse") || "";
  const categorie = url.searchParams.get("categorie") || "";
  const date_creation = url.searchParams.get("date_creation") || "";
  const activite = url.searchParams.get("activite") || "";
  const effectif = url.searchParams.get("effectif") || "";
  const code_postal = url.searchParams.get("code_postal") || "";
  const commune = url.searchParams.get("commune") || "";
  const nom_commercial = url.searchParams.get("nom_commercial") || "";
  const etablissements = url.searchParams.get("etablissements") || "";
  const etat = url.searchParams.get("etat") || "";
  try {
    const res = await fetch(`https://recherche-entreprises.api.gouv.fr/entreprises/${siren}`);
    if (res.ok) {
      const data = await res.json();
      nom = data.nom_raison_sociale || data.nom_complet || data.nom || nom;
      if (data.siege) {
        adresse = data.siege.adresse || [
          data.siege.adresse_ligne_1,
          data.siege.adresse_ligne_2,
          data.siege.adresse_ligne_3,
          data.siege.code_postal,
          data.siege.libelle_commune,
          data.siege.pays
        ].filter(Boolean).join(", ");
      }
      categorie = data.categorie_entreprise || categorie;
      date_creation = data.date_creation || date_creation;
      activite = data.activite_principale || activite;
      effectif = data.tranche_effectif_salarie || effectif;
      nom_commercial = data.siege && data.siege.nom_commercial || nom_commercial;
      code_postal = data.siege && data.siege.code_postal || code_postal;
      commune = data.siege && data.siege.libelle_commune || commune;
      etablissements = data.nombre_etablissements || etablissements;
      etat = data.etat_administratif || etat;
    }
  } catch (e) {
    console.error("API error:", e);
  }
  try {
    const { error } = await supabase.from("entreprises").upsert([
      {
        siren,
        nom,
        adresse,
        code_postal,
        ville: commune,
        // Mapping: API "commune" -> table "ville"
        pays: "France",
        // Valeur par défaut si non fournie
        secteur: categorie || null,
        // Mapping: API "categorie" -> table "secteur"
        categorie_juridique: null,
        date_creation,
        site_web: null,
        logo_url: null,
        effectif: effectif ? parseInt(effectif) : null,
        note_moyenne: null,
        // calculée plus tard
        nombre_avis: null,
        // calculé plus tard
        historique: null,
        // à remplir si besoin
        date_derniere_mise_a_jour: (/* @__PURE__ */ new Date()).toISOString(),
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }
    ], { onConflict: "siren" });
    if (error) {
      console.error("SUPABASE UPSERT ERROR:", error);
    }
  } catch (e) {
    console.error("Supabase upsert exception:", e);
  }
  return {
    props: { siren, nom, adresse, categorie, date_creation, activite, effectif, code_postal, commune, nom_commercial, etablissements, etat }
  };
}
const $$siren = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$siren;
  return renderTemplate(_a || (_a = __template(['<html lang="fr"> <head><meta charset="utf-8"><title>', '</title><meta name="description"', '><!-- Open Graph SEO --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', "><!-- Schema.org JSON-LD --><script type=\"application/ld+json\">{JSON.stringify({\n      '@context': 'https://schema.org',\n      '@type': 'Organization',\n      'name': Astro.props.nom || `SIREN ${Astro.props.siren}`,\n      'address': Astro.props.adresse || undefined,\n      'identifier': {\n        '@type': 'PropertyValue',\n        'propertyID': 'SIREN',\n        'value': Astro.props.siren\n      }\n    })}<\/script>", '</head> <body> <main class="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-16 mb-12"> ', " </main> </body></html>"], ['<html lang="fr"> <head><meta charset="utf-8"><title>', '</title><meta name="description"', '><!-- Open Graph SEO --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', "><!-- Schema.org JSON-LD --><script type=\"application/ld+json\">{JSON.stringify({\n      '@context': 'https://schema.org',\n      '@type': 'Organization',\n      'name': Astro.props.nom || \\`SIREN \\${Astro.props.siren}\\`,\n      'address': Astro.props.adresse || undefined,\n      'identifier': {\n        '@type': 'PropertyValue',\n        'propertyID': 'SIREN',\n        'value': Astro.props.siren\n      }\n    })}<\/script>", '</head> <body> <main class="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-16 mb-12"> ', " </main> </body></html>"])), Astro2.props.nom ? `Entreprise\xA0${Astro2.props.nom} (SIREN\xA0${Astro2.props.siren})` : `Entreprise\xA0SIREN\xA0${Astro2.props.siren}`, addAttribute(Astro2.props.nom ? `D\xE9couvrez les avis et informations sur ${Astro2.props.nom} (SIREN ${Astro2.props.siren}). Adresse : ${Astro2.props.adresse}` : `Fiche entreprise SIREN ${Astro2.props.siren} sur TonPatron.`, "content"), addAttribute(Astro2.props.nom ? `Entreprise\xA0${Astro2.props.nom} (SIREN\xA0${Astro2.props.siren})` : `Entreprise\xA0SIREN\xA0${Astro2.props.siren}`, "content"), addAttribute(Astro2.props.nom ? `D\xE9couvrez les avis et informations sur ${Astro2.props.nom} (SIREN ${Astro2.props.siren}). Adresse : ${Astro2.props.adresse}` : `Fiche entreprise SIREN ${Astro2.props.siren} sur TonPatron.`, "content"), addAttribute(`https://tonpatron.fr/entreprise/${Astro2.props.siren}`, "content"), addAttribute(Astro2.props.nom ? `Entreprise\xA0${Astro2.props.nom} (SIREN\xA0${Astro2.props.siren})` : `Entreprise\xA0SIREN\xA0${Astro2.props.siren}`, "content"), addAttribute(Astro2.props.nom ? `D\xE9couvrez les avis et informations sur ${Astro2.props.nom} (SIREN ${Astro2.props.siren}). Adresse : ${Astro2.props.adresse}` : `Fiche entreprise SIREN ${Astro2.props.siren} sur TonPatron.`, "content"), renderHead(), Astro2.props.nom ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <h1 class="text-3xl font-extrabold text-blue-700 mb-4">${Astro2.props.nom}</h1> <div class="mb-4 flex flex-col gap-1"> <div class="text-lg text-gray-700">${Astro2.props.adresse}</div> <div class="flex flex-wrap gap-2 mt-2"> <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">SIREN : ${Astro2.props.siren}</span> ${Astro2.props.nom_commercial && renderTemplate`<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Nom commercial : ${Astro2.props.nom_commercial}</span>`} ${Astro2.props.categorie && renderTemplate`<span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">Catégorie : ${Astro2.props.categorie}</span>`} ${Astro2.props.date_creation && renderTemplate`<span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">Créée le : ${Astro2.props.date_creation}</span>`} ${Astro2.props.activite && renderTemplate`<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">APE : ${Astro2.props.activite}</span>`} ${Astro2.props.effectif && renderTemplate`<span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-semibold">Effectif : ${Astro2.props.effectif}</span>`} ${Astro2.props.etablissements && renderTemplate`<span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-semibold">Établissements : ${Astro2.props.etablissements}</span>`} ${Astro2.props.etat && renderTemplate`<span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">Statut : ${Astro2.props.etat === "A" ? "Actif" : "Cess\xE9"}</span>`} ${Astro2.props.code_postal && renderTemplate`<span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">CP : ${Astro2.props.code_postal}</span>`} ${Astro2.props.commune && renderTemplate`<span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">Commune : ${Astro2.props.commune}</span>`} </div> </div> <h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Avis sur l'entreprise</h2>  ` })}` : renderTemplate`<section class="text-center"> <h1 class="text-3xl font-extrabold text-red-700 mb-4">Entreprise introuvable</h1> <p class="text-gray-700">Aucune donnée pour le SIREN ${Astro2.props.siren}</p> <a${addAttribute(`/entreprise/creer?siren=${Astro2.props.siren}`, "href")} class="mt-6 inline-block px-5 py-3 bg-blue-600 text-white rounded-lg">Créer une fiche</a> </section>`);
}, "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/entreprise/[siren].astro", void 0);

const $$file = "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/entreprise/[siren].astro";
const $$url = "/entreprise/[siren]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$siren,
  file: $$file,
  get,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
