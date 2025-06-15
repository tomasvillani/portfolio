import './styles/Header.css';
import foto from '../img/tomas.jpeg';
import { Navbar } from './Navbar';
import { LanguageOptions } from './LanguageOptions';
import { type Language, type Translations } from '../utils/translations';

type HeaderProps = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

export function Header({ language, setLanguage, t }: HeaderProps) {
  return (
    <header>
      <div className="header-top">
        <div className="name">
          <img src={foto} alt="Foto de Tomás" />
          Tomás Villani de Pedro
        </div>

        <LanguageOptions language={language} setLanguage={setLanguage} />
      </div>

      <nav>
        <Navbar t={t}/>
      </nav>
    </header>
  );
}
