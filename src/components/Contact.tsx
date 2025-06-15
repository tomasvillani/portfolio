import type { Translations } from '../utils/translations';
import './styles/Contact.css'

export function Contact({t}:{t: Translations}) {
  return (
    <div className="contact" id='contact'>
      <p>{t.contact}:</p>
      <ul className="contact-list">
        <li>Email: <a href="mailto:tomasvillanidepedro@gmail.com">tomasvillanidepedro@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/tomasvillani" target="_blank" rel="noopener noreferrer">tomasvillani</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/tom%C3%A1s-villani-6037bb366/" target="_blank" rel="noopener noreferrer">Tomás Villani</a></li>
      </ul>
    </div>
  );
}