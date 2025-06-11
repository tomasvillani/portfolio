import './styles/About.css';
import htmlLogo from '../img/html.png';
import cssLogo from '../img/css3.png';
import jsLogo from '../img/js.png';
import tsLogo from '../img/ts.png';
import reactLogo from '../img/react.png';
import bootstrapLogo from '../img/bootstrap.png';
import jqueryLogo from '../img/jquery.png';
import phpLogo from '../img/php.png';
import nodeLogo from '../img/nodejs.png';
import pythonLogo from '../img/python.png';
import laravelLogo from '../img/laravel.png';
import mysqlLogo from '../img/mysql.png';

export function About() {
  return (
    <section id="about">
      <h2>Sobre mí</h2>
      <p>
        Soy Tomás, desarrollador web en formación con un fuerte enfoque 
        en el desarrollo backend, aunque también con conocimientos sólidos 
        en frontend. Principalmente trabajo con PHP, JavaScript, Laravel y MySQL, 
        tecnologías con las que me siento más cómodo y en las que tengo mayor dominio.
      </p>
      <p>
        Actualmente no cuento con experiencia laboral, pero busco activamente 
        oportunidades para seguir creciendo como desarrollador, aprendiendo nuevas 
        herramientas y enfrentándome a desafíos reales del desarrollo web.
      </p>

      <h3>Frontend</h3>
      <div className="tech-grid">
        <div><img src={htmlLogo} alt="HTML" /><span>HTML</span></div>
        <div><img src={cssLogo} alt="CSS" /><span>CSS</span></div>
        <div><img src={jsLogo} alt="JavaScript" /><span>JavaScript</span></div>
        <div><img src={tsLogo} alt="TypeScript" /><span>TypeScript</span></div>
        <div><img src={reactLogo} alt="React" /><span>React</span></div>
        <div><img src={bootstrapLogo} alt="Bootstrap" /><span>Bootstrap</span></div>
        <div><img src={jqueryLogo} alt="jQuery" /><span>jQuery</span></div>
      </div>

      <h3>Backend</h3>
      <div className="tech-grid">
        <div><img src={phpLogo} alt="PHP" /><span>PHP</span></div>
        <div><img src={nodeLogo} alt="Node.js" /><span>Node.js</span></div>
        <div><img src={pythonLogo} alt="Python" /><span>Python</span></div>
        <div><img src={laravelLogo} alt="Laravel" /><span>Laravel</span></div>
        <div><img src={mysqlLogo} alt="MySQL" /><span>MySQL</span></div>
      </div>
    </section>
  );
}
