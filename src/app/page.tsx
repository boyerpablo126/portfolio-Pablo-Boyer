"use client";

import { useState, type FormEvent } from "react";
import { Sketch } from "@/components/Sketch";
import { site } from "@/data/site";

const navigation = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Projets", href: "#projets" },
  { label: "Outils", href: "#outils" },
  { label: "Expériences", href: "#experiences" },
  { label: "Contact", href: "#contact" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className="arrow" aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function SectionIntro({ number, name }: { number: string; name: string }) {
  return <div className="section-intro"><span className="section-index">{number}</span><span className="section-name">{name}</span><span className="section-rule" aria-hidden="true" /></div>;
}

function PdfLinks({ onNavigate }: { onNavigate?: () => void }) {
  return <>
    <p className="pdf-label">DOSSIERS DE PROJETS</p>
    {site.projects.map((project) => project.pdf
      ? <a key={project.id} href={project.pdf} onClick={onNavigate} target="_blank" rel="noopener noreferrer"><span>{project.id} / {project.title}</span><Arrow diagonal /></a>
      : <span className="pdf-unavailable" key={project.id}><span>{project.id} / {project.title}</span><small>Bientôt</small></span>
    )}
    <a href="#projets" onClick={onNavigate} className="pdf-overview">Explorer tous les projets <Arrow /></a>
  </>;
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    const subject = encodeURIComponent(`Contact depuis le portfolio — ${name}`);
    const body = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-topline"><span>FORMULAIRE DE CONTACT</span><span>01 / 03</span></div>
    <div className="field"><label htmlFor="contact-name">01. Votre nom</label><input id="contact-name" type="text" autoComplete="name" placeholder="Nom et prénom" value={name} onChange={(e) => setName(e.target.value)} required /></div>
    <div className="field"><label htmlFor="contact-email">02. Votre adresse e-mail</label><input id="contact-email" type="email" autoComplete="email" placeholder="nom@exemple.fr" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
    <div className="field"><label htmlFor="contact-message">03. Votre message</label><textarea id="contact-message" rows={4} placeholder="Parlez-moi de votre projet..." value={message} onChange={(e) => setMessage(e.target.value)} required /></div>
    <button type="submit" className="send-button">Ouvrir la messagerie <Arrow diagonal /></button>
    <p className="form-note">Le formulaire prépare un e-mail dans votre application de messagerie. Aucun message n'est envoyé automatiquement.</p>
  </form>;
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return <>
    <header className="site-header">
      <a href="#accueil" className="brand" onClick={closeMobile} aria-label="Retour à l'accueil">
        <span className="brand-mark">{site.initials}<span className="brand-dot">.</span></span>
        <span className="brand-caption">PORTFOLIO<br/>ARCHITECTURE</span>
      </a>
      <nav className="desktop-nav" aria-label="Navigation principale">
        {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
      </nav>
      <details className="pdf-menu">
        <summary>PROJETS PDF <span aria-hidden="true">⌄</span></summary>
        <div className="pdf-panel"><PdfLinks /></div>
      </details>
      <button className="mobile-menu-button" type="button" aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Fermer la navigation" : "Ouvrir la navigation"} onClick={() => setMobileOpen((prev) => !prev)}>
        <span className={mobileOpen ? "menu-lines open" : "menu-lines"}><i/><i/></span>
      </button>
      {mobileOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Navigation mobile">
        {navigation.map((item, i) => <a href={item.href} key={item.href} onClick={closeMobile}><span>{String(i + 1).padStart(2, "0")}</span>{item.label}<Arrow diagonal /></a>)}
        <details className="mobile-pdfs"><summary>PROJETS PDF <span aria-hidden="true">⌄</span></summary><div className="mobile-pdfs-content"><PdfLinks onNavigate={closeMobile}/></div></details>
      </nav>}
    </header>

    <main>
      <section id="accueil" className="hero shell">
        <div className="hero-text">
          <div className="eyebrow"><span className="eyebrow-line"/>{site.heroKicker}</div>
          <h1>{site.heroTitle}<br/><em>{site.heroEmphasis}</em></h1>
          <p className="hero-intro">{site.intro}</p>
          <div className="hero-actions"><a href="#projets" className="button-primary">Découvrir les projets <Arrow diagonal /></a><a href="#a-propos" className="button-underlined">En savoir plus <Arrow /></a></div>
          <div className="hero-person"><span className="hero-person-line"/><div><b>{site.firstName} {site.lastName}</b><small>{site.role}</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="drawing-surface">
            <div className="drawing-grid" aria-hidden="true"/>
            <div className="drawing-top"><span>FIGURE 001</span><span>ÉTUDE DE VOLUMES</span></div>
            <Sketch variant={1}/>
            <div className="drawing-cross cross-one" aria-hidden="true">+</div><div className="drawing-cross cross-two" aria-hidden="true">+</div>
            <div className="drawing-bottom"><span>AXONOMÉTRIE / RECHERCHE</span><span>ÉCH. 1:100</span></div>
          </div>
          <div className="hero-side-note">DESSIN — ESPACE — MATIÈRE</div>
        </div>
        <div className="hero-bottom"><span>TRAVAUX CHOISIS / {new Date().getFullYear()}</span><a href="#a-propos">FAIRE DÉFILER <span aria-hidden="true">↓</span></a></div>
      </section>

      <section id="a-propos" className="section about-section">
        <div className="shell">
          <SectionIntro number="01" name="À PROPOS"/>
          <div className="about-layout">
            <div className="about-heading"><h2>{site.aboutTitle}<br/><em>{site.aboutEmphasis}</em></h2><p className="about-quote">« Un portfolio en construction, une démarche en évolution. »</p></div>
            <div className="about-copy"><span className="micro-title">QUELQUES MOTS</span>{site.about.map((paragraph, index) => <p key={index}>{paragraph}</p>)}<div className="location"><span className="location-symbol" aria-hidden="true">⌖</span><span>{site.school}<br/>{site.location}</span></div></div>
          </div>
        </div>
      </section>

      <section id="projets" className="section projects-section">
        <div className="shell">
          <SectionIntro number="02" name="PROJETS"/>
          <div className="projects-heading"><div><span className="micro-title">TRAVAUX SÉLECTIONNÉS</span><h2>Une idée prend <em>forme.</em></h2></div><p>Plans, recherches et propositions architecturales. Les dossiers complets seront disponibles au format PDF.</p></div>
          <div className="projects-grid">
            {site.projects.map((project, index) => <article className={index === 0 ? "project-card project-featured" : "project-card"} key={project.id}>
              <div className={`project-image image-${index % 3}`}>
                {project.cover ? <img src={project.cover} alt={`Visuel du projet ${project.title}`}/> : <Sketch variant={index}/>} 
                <div className="project-image-top"><span>PROJET N°{project.id}</span><span>{project.year}</span></div>
                <div className="project-image-corner" aria-hidden="true">↗</div>
              </div>
              <div className="project-body"><div className="project-information"><p className="micro-title">{project.category} / {project.year}</p><h3>{project.title}</h3><p>{project.description}</p></div>{project.pdf ? <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="project-document">Consulter le PDF <Arrow diagonal /></a> : <span className="project-document unavailable">Dossier PDF à venir</span>}</div>
            </article>)}
          </div>
          <div className="project-section-footer"><span>{String(site.projects.length).padStart(2,"0")} PROJETS PRÉSENTÉS</span><span>DOCUMENTATION DISPONIBLE PROCHAINEMENT</span></div>
        </div>
      </section>

      <section id="outils" className="section tools-section">
        <div className="shell">
          <SectionIntro number="03" name="OUTILS & COMPÉTENCES"/>
          <div className="split-layout">
            <div className="split-heading"><h2>De l'esquisse<br/>au <em>projet.</em></h2><p>Les outils utilisés pour représenter, expérimenter et communiquer des idées.</p></div>
            <div className="tools-main"><p className="micro-title">LOGICIELS</p><div className="tools-list">{site.tools.map((tool, index) => <div className="tool-row" key={tool}><span className="tool-num">{String(index + 1).padStart(2,"0")}</span><span>{tool}</span><span className="tool-plus" aria-hidden="true">↗</span></div>)}</div><p className="micro-title skills-heading">SAVOIR-FAIRE</p><div className="skill-pills">{site.capabilities.map((capability) => <span key={capability}>{capability}</span>)}</div></div>
          </div>
        </div>
      </section>

      <section id="experiences" className="section experience-section">
        <div className="shell"><SectionIntro number="04" name="PARCOURS"/><div className="split-layout"><div className="split-heading"><h2>Parcours &<br/><em>expériences.</em></h2><p>Quelques étapes clés, entre formation, apprentissage et pratique.</p></div><div className="experience-list">{site.experiences.map((experience, index) => <article className="experience-item" key={`${experience.period}-${index}`}><span className="experience-date">{experience.period}</span><div><h3>{experience.title}</h3><p>{experience.detail}</p></div><span className="experience-mark" aria-hidden="true">↗</span></article>)}</div></div></div>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell"><SectionIntro number="05" name="CONTACT"/><div className="contact-layout"><div className="contact-heading"><div className="contact-spark">✳</div><h2>{site.contactTitle}<br/><em>{site.contactEmphasis}</em></h2><p>{site.contactDescription}</p><a className="contact-mail" href={`mailto:${site.email}`}>{site.email}<Arrow diagonal /></a><div className="social-links">{site.instagram && <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a>}{site.linkedin && <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}</div></div><ContactForm/></div></div>
      </section>
    </main>
    <footer className="site-footer"><div className="shell footer-inner"><a href="#accueil" className="footer-brand">{site.initials}<span>.</span></a><span>© {new Date().getFullYear()} {site.firstName} {site.lastName}. Portfolio d'architecture.</span><a href="#accueil">RETOUR EN HAUT ↑</a></div></footer>
  </>;
}
