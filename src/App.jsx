import './App.css';
import douaImg from './assets/doua.png';
import { useRef, useState } from 'react';
import AboutFR from './components/fr/About';
import TimelineFR from './components/fr/Timeline';
import SkillsFR from './components/fr/Skills';
import ProjectsFR from './components/fr/Projects';
import ContactFR from './components/fr/Contact';
import FooterFR from './components/fr/Footer';
import AboutEN from './components/en/About';
import TimelineEN from './components/en/Timeline';
import SkillsEN from './components/en/Skills';
import ProjectsEN from './components/en/Projects';
import ContactEN from './components/en/Contact';
import FooterEN from './components/en/Footer';

function App() {
  const [lang, setLang] = useState('fr');
  const aboutRef = useRef(null);
  const timelineRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sélection dynamique des composants selon la langue
  const About = lang === 'fr' ? AboutFR : AboutEN;
  const Timeline = lang === 'fr' ? TimelineFR : TimelineEN;
  const Skills = lang === 'fr' ? SkillsFR : SkillsEN;
  const Projects = lang === 'fr' ? ProjectsFR : ProjectsEN;
  const Contact = lang === 'fr' ? ContactFR : ContactEN;
  const Footer = lang === 'fr' ? FooterFR : FooterEN;

  return (
    <div className="portfolio-bg">
      <div className="top-nav-wrapper">
        <nav className="top-nav">
          <button
            className="lang-switch-btn"
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            aria-label={lang === 'fr' ? 'Changer la langue en anglais' : 'Switch language to French'}
          >
            <span role="img" aria-label="globe" style={{marginRight: '7px', fontSize: '1.2em'}}>🌐</span>
            {lang === 'fr' ? 'FR | EN' : 'EN | FR'}
          </button>
          <button onClick={() => scrollToSection(aboutRef)}>{lang === 'fr' ? 'À propos' : 'About'}</button>
          <button onClick={() => scrollToSection(timelineRef)}>{lang === 'fr' ? 'Parcours' : 'Education'}</button>
          <button onClick={() => scrollToSection(skillsRef)}>{lang === 'fr' ? 'Compétences' : 'Skills'}</button>
          <button onClick={() => scrollToSection(projectsRef)}>{lang === 'fr' ? 'Projets' : 'Projects'}</button>
          <button onClick={() => scrollToSection(contactRef)}>{lang === 'fr' ? 'Contact' : 'Contact'}</button>
          <a href="/cv-doua-gannouni.pdf" download className="cv-btn">CV</a>
        </nav>
      </div>
      <div className="portfolio-container creative">
        <header className="portfolio-header creative-header">
          <div className="avatar avatar-photo" tabIndex={0} title="Doua Gannouni">
            <img src={douaImg} alt="Doua Gannouni" />
          </div>
          <div>
            <h1>Doua Gannouni</h1>
            <h2>{lang === 'fr' ? 'Étudiante en 4ème année Génie Logiciel à EPI Digital School Sousse' : '4th year Software Engineering student at EPI Digital School Sousse'}</h2>
            <p className="subtitle">{lang === 'fr' ? "Passionnée par le développement logiciel, l'IoT et les technologies modernes" : "Passionate about software development, IoT and modern technologies"}</p>
          </div>
        </header>
        <main>
          <div ref={aboutRef}><About /></div>
          <div ref={timelineRef}><Timeline /></div>
          <div ref={skillsRef}><Skills /></div>
          <div ref={projectsRef}><Projects /></div>
          <div ref={contactRef}><Contact /></div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
