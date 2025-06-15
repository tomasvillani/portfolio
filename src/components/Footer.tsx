import type { Translations } from "../utils/translations";
import { Contact } from "./Contact";
import './styles/Footer.css';

export function Footer({t}:{t: Translations}) {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Tomás Villani de Pedro</p>
      <Contact t={t}/>
    </footer>
  );
}