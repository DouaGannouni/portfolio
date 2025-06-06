import './css/Projects.css';

function Projects() {
  return (
    <section className="projects-section">
      <h3>Projets</h3>
      <div className="projects-list">
        <div className="project-card project-animate">
          <h4>Plateforme immobilière Tunisie</h4>
          <p>Plateforme de mise en relation entre professionnels et clients dans le domaine de l'immobilier en Tunisie.</p>
          <span className="project-tag">Laravel 8</span>
        </div>
        <div className="project-card project-animate">
          <h4>Système d'information société IT</h4>
          <p>Système d'information pour une société de développement informatique, architecture MERN MVC avec base de données MySQL.</p>
          <span className="project-tag">MERN, MySQL</span>
        </div>
        <div className="project-card project-animate">
          <h4>Gestion de Projet Agile Scrum</h4>
          <p>Système de gestion de projet Agile orienté Scrum, avec gestion des sprints, tâches et équipes.</p>
          <span className="project-tag">MERN</span>
        </div>
        <div className="project-card project-animate">
          <h4>Plateforme Freelance</h4>
          <p>Plateforme web pour la mise en relation entre freelances et clients, gestion de missions et paiements.</p>
          <span className="project-tag">MERN</span>
        </div>
        <div className="project-card project-animate">
          <h4>Portfolio Personnel</h4>
          <p>Site web moderne pour présenter mon parcours, mes compétences et mes projets.</p>
          <span className="project-tag">ReactJS</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
