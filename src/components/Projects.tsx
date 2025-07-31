import './styles/Projects.css';
import gymTinajoImage from '../img/gymtinajo.png';
import type { Translations } from '../utils/translations';
import { ProjectCard } from './ProjectCard';

export function Projects({t}: {t: Translations}) {
  return (
    <section id="projects" className="projects-section">
      <h2>{t.projects}</h2>
      
      <ProjectCard
        t={t}
        title="Gym Tinajo"
        description={t.gymTinajoDescription}
        technologies={["HTML5", "CSS3", "Laravel", "PHP", "MySQL", "JavaScript"]}
        imageSrc={gymTinajoImage}
        imageAlt={t.gymTinajoImage}
        githubUrl="https://github.com/tomasvillani/Proyecto-final-DAW"
        youtubeUrl="https://www.youtube.com/watch?v=3fXf20tTvhI"
        liveUrl="https://gymtinajo.up.railway.app/"
      />
    </section>
  );
}
