# Sedapps.ai - Marketing Website

## Structure

Ce dossier contient le **site web marketing statique** complètement séparé de l'application Sedapps.ai.

### Fichiers

- **index.html** - Page d'accueil marketing avec sections Hero, Features, How It Works, Pricing, CTA
- **styles.css** - Design Liquid Glass ultra-premium avec glassmorphism, ambient lights, animations
- **script.js** - Interactions JavaScript (smooth scroll, animations, navbar effects)

## Design

Le site utilise le design **Liquid Glass ultra-premium** avec :
- Glassmorphism avancé (blur 20-40px, transparences 5-10%)
- Ambient lighting animée (3 orbes bleu, purple, cyan)
- Glow effects sur les éléments interactifs
- Animations fluides (fade-in, float, pulse)
- Palette cohérente : noir pur + bleu + cyan + purple

## Navigation

- `/` → Redirige vers `/chat` (application)
- `/website/` → Site marketing statique (ce dossier)

## Déploiement

Pour servir le site marketing statiquement :
```bash
# Avec un serveur HTTP simple
python -m http.server 8000 --directory website

# Ou avec Node.js
npx http-server website
```

## Séparation Application vs Marketing

- **Application Sedapps.ai** : `/app` (Next.js, React, TypeScript)
  - `/chat` - Interface de chat AI
  - `/projects` - Gestion de projets
  - `/hebergement` - Plans d'hébergement
  - `/analytics` - Statistiques
  - `/team` - Gestion d'équipe
  - `/settings` - Paramètres

- **Site Marketing** : `/website` (HTML/CSS/JS statique)
  - Page d'accueil avec présentation
  - Features showcase
  - Pricing plans
  - CTA vers l'application
