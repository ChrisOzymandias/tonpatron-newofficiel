# Déploiement SSR Astro sur Netlify

## Prérequis
- Node.js >= 18
- Compte Netlify (gratuit)
- Projet Astro configuré avec l’adaptateur Netlify

## 1. Installer l’adaptateur Netlify
```
npm install @astrojs/netlify
```

## 2. Configurer `astro.config.mjs`
```js
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: 'https://tonpatron.fr', // adapte à ton domaine
});
```

## 3. Pousser sur GitHub
- Initialise un repo Git si besoin
- Commit & push tout le projet

## 4. Déployer sur Netlify
- Va sur https://app.netlify.com/
- Clique sur "Add new site" > "Import an existing project"
- Connecte ton GitHub et sélectionne le repo
- Netlify détecte Astro automatiquement
- Commande de build : `npm run build`
- Dossier de fonctions : `netlify/functions`
- Dossier de publication : `netlify/output/public` (détecté automatiquement)

## 5. Profiter du SSR
- Toutes les routes dynamiques fonctionnent (`/entreprise/[siren]`)
- SEO, performances, et dynamic rendering assurés

## 6. Limitations de l’offre gratuite
- 125 000 invocations de fonctions/mois (large pour la plupart des sites)
- 300 minutes de build/mois

## 7. Liens utiles
- [Astro + Netlify (docs officielles)](https://docs.astro.build/en/guides/deploy/netlify/)
- [Netlify Dashboard](https://app.netlify.com/)

---
*Pour toute question ou optimisation, voir le fichier `astro.config.mjs` ou la doc Astro/Netlify.*
