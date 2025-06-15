import type { Translations } from "../utils/translations";

export function Navbar({t}: {t: Translations}) {
  return (
    <ul className="nav-links">
      <li><a href="#about">{t.about}</a></li>
      <li><a href="#projects">{t.projects}</a></li>
      <li><a href="#contact">{t.contact}</a></li>
    </ul>
  );
}