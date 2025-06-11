import './styles/Projects.css';
import gymtinajoImage from '../img/gymtinajo.png';

export function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Proyectos</h2>
      
      <div className="project-card">
        <div className="project-image">
          <img src={gymtinajoImage} alt="Captura de GymTinajo" />
        </div>

        <div className="project-info">
          <h3>Gym Tinajo</h3>
          <p>
            Gym Tinajo es una plataforma web desarrollada para modernizar 
            la gestión de un gimnasio local. Permite a los usuarios reservar 
            clases, consultar horarios y gestionar sus tarifas de forma rápida 
            y sencilla. Diseñada con un enfoque en la experiencia del usuario, 
            esta aplicación facilita todo el proceso de reserva con solo unos clics, 
            optimizando tanto la operativa del gimnasio como la comodidad de sus miembros.
          </p>
          <p><strong>Tecnologías:</strong> HTML5, CSS3, Laravel, PHP, MySQL, JavaScript</p>
          <div className="project-links">
            <a href="https://github.com/tomasvillani/Proyecto-final-DAW" target="_blank">Ver en GitHub</a>
            <a href="https://www.youtube.com/watch?v=3fXf20tTvhI" target="_blank">Ver vídeo en YouTube</a>
            <a href="https://gymtinajo.up.railway.app/" target="_blank">Ver proyecto online</a>
          </div>
        </div>
      </div>
    </section>
  );
}
