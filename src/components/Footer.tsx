import { Contact } from "./Contact";
import './styles/Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Tomás Villani de Pedro</p>
      <Contact />
    </footer>
  );
}