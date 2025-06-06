function Projects() {
  return (
    <section className="projects-section creative-section fade-in">
      <h3>Projects</h3>
      <div className="projects-list">
        <div className="project-card project-animate">
          <h4>Real Estate Platform Tunisia</h4>
          <p>Platform connecting professionals and clients in the real estate sector in Tunisia.</p>
          <span className="project-tag">Laravel 8 MVC</span>
        </div>
        <div className="project-card project-animate">
          <h4>IT Company Information System</h4>
          <p>Information system for a software development company, MERN MVC architecture with MySQL database.</p>
          <span className="project-tag">MERN MVC, MySQL</span>
        </div>
        <div className="project-card project-animate">
          <h4>Agile Scrum Project Management</h4>
          <p>Agile project management system oriented Scrum, with sprint, task and team management.</p>
          <span className="project-tag">MERN MVC</span>
        </div>
        <div className="project-card project-animate">
          <h4>Freelance Platform</h4>
          <p>Web platform connecting freelancers and clients, with mission and payment management.</p>
          <span className="project-tag">MERN MVC</span>
        </div>
        <div className="project-card project-animate">
          <h4>Personal Portfolio</h4>
          <p>Modern website to present my background, skills and projects.</p>
          <span className="project-tag">ReactJS</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
