import { useState } from 'react';
import Flag from 'react-world-flags';

function Header() {
  const [language, setLanguage] = useState('pt-BR'); // Estado para o idioma

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Aqui você pode adicionar a lógica para mudar o idioma do conteúdo do seu portfólio
  };

  return (
    <header className="bg-slate-700 flex justify-between items-center p-5">
      {/* Select de idioma com bandeiras usando react-world-flags */}
      <select
        value={language}
        onChange={handleLanguageChange}
        className="bg-gray-800 text-white p-2 rounded-full"
      >
        <option value="pt-BR" className="flex items-center">
          <Flag code="BR" className="mr-2" /> PT-BR
        </option>
        <option value="en-US" className="flex items-center">
          <Flag code="US" className="mr-2" /> EN-US
        </option>
      </select>

      <nav>
        <ul className="flex space-x-10 list-none p-0">
          <li><a href="#sobre" className="text-white">Home</a></li>
          <li><a href="#projetos" className="text-white">Sobre</a></li>
          <li><a href="#habilidades" className="text-white">Projetos</a></li>
          <li><a href="#contato" className="text-white">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
