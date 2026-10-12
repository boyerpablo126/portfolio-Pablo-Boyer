# Portfolio d'architecture — Maquette V2

Site Next.js / React / TypeScript, sans bibliothèque d'UI externe. Mise en page responsive, contenu centralisé, accès aux dossiers PDF, formulaire mailto (provisoire).

## 1. Lancer dans VS Code

Ouvrir **ce dossier** dans VS Code. Puis, dans le terminal :

```bash
npm install
npm run dev
```

Ouvrir <http://localhost:3000>.

## 2. Modifier le contenu

Tout le contenu d'exemple est dans **`src/data/site.ts`** : nom, textes, logiciels, compétences, projets et expériences.

### Ajouter un projet terminé en PDF

1. Déposer le PDF dans `public/projets/` (par exemple `public/projets/maison-moderne.pdf`).
2. Dans `src/data/site.ts`, renseigner `pdf: "/projets/maison-moderne.pdf"`.
3. Pour sa photo de couverture, déposer une image dans `public/images/` puis renseigner `cover: "/images/maison-moderne.jpg"`.
4. À la sauvegarde, le projet apparaît sur la page, et le PDF devient accessible depuis la carte ET le menu « Projets PDF ».

**Important :** remplacer l'adresse `contact@exemple.fr` par celle du propriétaire avant toute publication. Les logiciels et projets actuels sont fictifs et ne doivent pas être présentés comme ses réalisations.

## 3. Déployer sur GitHub + Vercel

À la racine du dossier :

```bash
git init
git add .
git commit -m "Portfolio architecture — maquette V2"
```

Créer un **dépôt GitHub vide**, puis suivre les instructions GitHub pour ajouter son `remote` et pousser la branche `main` (`git branch -M main`, `git remote add origin URL`, `git push -u origin main`). Sur Vercel : **Add New > Project > Import Git Repository**, sélectionner le dépôt, laisser les paramètres Next.js détectés, puis **Deploy**. Les mises à jour ultérieures se publient via `git add .`, `git commit -m "..."`, `git push`.

Si le dépôt existe déjà, ne pas relancer `git init` ni réajouter le remote : intégrer simplement les fichiers mis à jour dans le projet courant.

## Structure

- `src/app/page.tsx` : structure, navigation, sections, contact.
- `src/app/globals.css` : tous les styles, couleurs et responsive.
- `src/data/site.ts` : **textes et projets à renseigner**.
- `src/components/Sketch.tsx` : dessins architecturaux provisoires (SVG).
- `public/projets/` : PDF réels à déposer.
- `public/images/` : couvertures réelles à déposer.

## Formulaire de contact

Pour l'instant, les champs préparent un e-mail puis lancent l'application de messagerie (`mailto:`). **Ce n'est pas un formulaire envoyé automatiquement**. Un service (Resend, Formspree, etc.) sera nécessaire si l'on veut une réception directe.
