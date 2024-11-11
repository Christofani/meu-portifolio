import { useState } from 'react';
import { FlagIcon } from 'react-flag-kit';

function Header() {
  const [language, setLanguage] = useState('pt-BR');

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    // Aqui você pode adicionar a lógica para mudar o idioma do conteúdo do seu portfólio
  };

  return (
    <header className="bg-slate-700 flex justify-between items-center p-5">
      {/* Select de idioma com bandeiras */}
      <div className="flex items-center">
        <FlagIcon code={language === 'pt-BR' ? 'BR' : 'US'} className="mr-2 w-6 h-6" />
        <select
          value={language}
          onChange={handleLanguageChange}
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          <option value="pt-BR">PT-BR</option>
          <option value="en-US">EN-US</option>
        </select>
      </div>

      <nav>
        <ul className="flex space-x-6 md:space-x-10 list-none p-0 text-sm md:text-base">
          <li>
            <a href="#home" className="text-white hover:text-gray-300 transition-colors duration-200">Home</a>
          </li>
          <li>
            <a href="#sobre_mim" className="text-white hover:text-gray-300 transition-colors duration-200">Sobre</a>
          </li>
          <li>
            <a href="#projetos" className="text-white hover:text-gray-300 transition-colors duration-200">Projetos</a>
          </li>
          <li>
            <a href="#contato" className="text-white hover:text-gray-300 transition-colors duration-200">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
