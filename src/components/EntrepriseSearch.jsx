import React, { useState, useEffect } from "react";

export default function EntrepriseSearch() {
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
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.results) setResults(data.results);
        else setResults([]);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError("Erreur lors de la recherche. Veuillez réessayer.");
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [query]);

  const handleClickEntreprise = (entreprise) => {
    // Préparer les infos à passer à la page de création si besoin
    const nom = encodeURIComponent(entreprise.nom_raison_sociale || entreprise.nom_complet || entreprise.nom || '');
    const siren = encodeURIComponent(entreprise.siren || '');
    const adresse = encodeURIComponent(
      [entreprise.adresse_ligne_1, entreprise.adresse_ligne_2, entreprise.adresse_ligne_3, entreprise.libelle_commune, entreprise.code_postal, entreprise.pays]
        .filter(Boolean).join(', ')
    );
    // On tente d'aller sur la fiche, sinon on pré-remplit la création
    window.location.href = `/entreprise/${siren}?nom=${nom}&adresse=${adresse}`;
  };

  return (
    <div className="w-full">
      <form onSubmit={e => e.preventDefault()} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 max-w-xl mx-auto">
        <input
          type="search"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher une entreprise, un métier..."
          className="w-full px-6 py-4 rounded-xl border-none focus:ring-4 focus:ring-blue-300 text-gray-900 text-lg shadow-lg placeholder-gray-400"
          aria-label="Rechercher une entreprise ou un métier"
          autoComplete="off"
        />
      </form>
      <div className="mt-6 max-w-xl mx-auto">
        {loading && <div className="text-blue-700 font-semibold">Recherche en cours...</div>}
        {error && <div className="text-red-600 font-semibold">{error}</div>}
        {results.length > 0 && (
          <ul className="bg-white rounded-xl shadow divide-y divide-gray-100 mt-4">
            {results.map((entreprise) => (
              <li
                key={entreprise.siren}
                className="p-4 hover:bg-blue-50 transition cursor-pointer"
                onClick={() => handleClickEntreprise(entreprise)}
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter') handleClickEntreprise(entreprise); }}
                aria-label={`Voir la fiche de ${entreprise.nom_raison_sociale || entreprise.nom_complet}`}
              >
                <div className="font-bold text-blue-700">{entreprise.nom_raison_sociale || entreprise.nom_complet}</div>
                <div className="text-sm text-gray-500">SIREN : {entreprise.siren}</div>
                <div className="text-sm text-gray-500">{entreprise.libelle_commune} ({entreprise.code_postal})</div>
              </li>
            ))}
          </ul>
        )}
        {results.length === 0 && query && !loading && !error && (
          <div className="text-gray-500 mt-4">Aucune entreprise trouvée.</div>
        )}
      </div>
    </div>
  );
}
