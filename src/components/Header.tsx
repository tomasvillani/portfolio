import './styles/Header.css';
import foto from '../img/tomas.jpeg'
import { Navbar } from './Navbar';

export function Header() {
  return (
    <header>
      <nav>
        <div className="name">
          <img src={foto} alt="Foto de Tomás" />
          Tomás Villani de Pedro
        </div>
        <Navbar/>
      </nav>
    </header>

  );
}
