import { type Language } from "../utils/translations";
import './styles/LanguageOptions.css';

type LanguageProps = {
    language: Language;
    setLanguage: (lang: Language) => void;
};

export function LanguageOptions({language,setLanguage}: LanguageProps) {
  return (
    <div className="language-options">
      <button onClick={() => setLanguage("es")} className={language == 'es' ? 'active' : ''}>ES</button>
      <button onClick={() => setLanguage("en")} className={language == 'en' ? 'active' : ''}>EN</button>
    </div>
  );
}
