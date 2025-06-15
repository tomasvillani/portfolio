import './styles/Projects.css';
import gymtinajoImage from '../img/gymtinajo.png';
import type { Translations } from '../utils/translations';

export function Projects({t}: {t: Translations}) {
  return (
    <section id="projects" className="projects-section">
      <h2>{t.projects}</h2>
      
      <div className="project-card">
        <div className="project-image">
          <img src={gymtinajoImage} alt="Captura de GymTinajo" />
        </div>

        <div className="project-info">
          <h3>Gym Tinajo</h3>
          <p>{t.gymTinajoDescription}</p>
          <p><strong>{t.technologies}:</strong> HTML5, CSS3, Laravel, PHP, MySQL, JavaScript</p>
          <div className="project-links">
            <a href="https://github.com/tomasvillani/Proyecto-final-DAW" target="_blank">{t.gymTinajoGithub}</a>
            <a href="https://www.youtube.com/watch?v=3fXf20tTvhI" target="_blank">{t.gymTinajoYoutube}</a>
            <a href="https://gymtinajo.up.railway.app/" target="_blank">{t.gymTinajoOnline}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
