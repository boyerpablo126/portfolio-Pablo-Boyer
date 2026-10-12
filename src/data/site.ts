/**
 * Contenu du portfolio — modifiez ce fichier en priorité.
 * Les titres et textes sont des exemples provisoires.
 * Les PDFs se trouvent dans /public/projets, les images dans /public/images.
 */
export const site = {
  firstName: "Prénom",
  lastName: "Nom",
  initials: "P.N",
  role: "Étudiant en architecture",
  school: "École d'architecture — à compléter",
  location: "Ville, France",
  email: "contact@exemple.fr", // IMPORTANT : renseigner la vraie adresse avant de publier.
  instagram: "",
  linkedin: "",

  // PAGE D'ACCUEIL
  heroKicker: "Portfolio d'architecture / 2024—2026",
  heroTitle: "Penser",
  heroEmphasis: "l'espace.",
  intro: "Une sélection de projets, de recherches et d'expérimentations autour de l'architecture.",

  // À PROPOS
  aboutTitle: "Dessiner des lieux,",
  aboutEmphasis: "imaginer des usages.",
  about: [
    "Une courte présentation viendra ici : parcours, sensibilité architecturale, inspirations.",
    "Un second paragraphe permettra de raconter une démarche, des intérêts ou une vision personnelle du projet."
  ],

  // PROJETS : l'ordre de la liste est l'ordre d'affichage.
  // Exemple : cover: "/images/projet-01.jpg", pdf: "/projets/projet-01.pdf"
  projects: [
    {
      id: "01",
      title: "Habiter autrement",
      category: "Projet d'atelier",
      year: "2026",
      description: "Présentation du projet à venir.",
      cover: "",
      pdf: ""
    },
    {
      id: "02",
      title: "Entre plein et vide",
      category: "Étude spatiale",
      year: "2026",
      description: "Présentation du projet à venir.",
      cover: "",
      pdf: ""
    },
    {
      id: "03",
      title: "Matière et lumière",
      category: "Recherche architecturale",
      year: "2025",
      description: "Présentation du projet à venir.",
      cover: "",
      pdf: ""
    }
  ],

  // OUTILS + SAVOIR-FAIRE
  tools: ["AutoCAD", "Revit", "SketchUp", "Photoshop", "InDesign", "À compléter"],
  capabilities: ["Conception architecturale", "Dessin technique", "Maquette", "À compléter"],

  // EXPÉRIENCES
  experiences: [
    { period: "2025 — aujourd'hui", title: "Études d'architecture", detail: "École à compléter" },
    { period: "20XX — 20XX", title: "Stage ou expérience", detail: "Entreprise, agence ou organisme à compléter" }
  ],

  // CONTACT
  contactTitle: "Un projet ?",
  contactEmphasis: "Parlons-en.",
  contactDescription: "Une question, une collaboration ou simplement envie d'échanger ? Laissez un message."
} as const;
