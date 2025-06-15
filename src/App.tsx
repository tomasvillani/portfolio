import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { type Language, translations } from './utils/translations';

function App() {
  const [language, setLanguage] = useState<Language>('es');
  const t = translations[language];

  return (
    <>
      <Header language={language} setLanguage={setLanguage} t={t}/>
      <About t={t} />
      <Projects t={t} />
      <Footer t={t} />
    </>
  );
}

export default App;
