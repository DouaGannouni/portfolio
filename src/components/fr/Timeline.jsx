import './css/Timeline.css';

function Timeline() {
  return (
    <section className="timeline-section">
      <h3>Parcours académique</h3>
      <div className="timeline">
        <div className="timeline-item timeline-animate">
          <div className="timeline-dot"></div>
          <div className="timeline-content timeline-content-flex">
            <div className="timeline-date">2024 - 2026</div>
            <div>
              <div className="timeline-school">EPI Digital School (EPI Sousse)</div>
              <div className="timeline-title">Cycle d’ingénieur en Génie Logiciel</div>
            </div>
          </div>
        </div>
        <div className="timeline-item timeline-animate">
          <div className="timeline-dot"></div>
          <div className="timeline-content timeline-content-flex">
            <div className="timeline-date">2023 - 2024</div>
            <div>
              <div className="timeline-school">ISET Mahdia</div>
              <div className="timeline-title">1ère Master Développement de services IoT</div>
            </div>
          </div>
        </div>
        <div className="timeline-item timeline-animate">
          <div className="timeline-dot"></div>
          <div className="timeline-content timeline-content-flex">
            <div className="timeline-date">2020 - 2023</div>
            <div>
              <div className="timeline-school">ISET Mahdia</div>
              <div className="timeline-title">Licence en technologie de l'informatique, spécialité développement des systèmes d'informations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
