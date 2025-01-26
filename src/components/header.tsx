import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FlagIcon } from "react-flag-kit";
import "../Context/i18n.js"; // Importa a configuração do i18next

function Header() {
  const { t, i18n } = useTranslation(); // Hook para tradução
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage); // Altera o idioma
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gray-950 flex justify-between items-center p-5 relative font-bold">
      {/* Seletor de idioma com bandeiras */}
      <div className="flex items-center cursor-pointer">
        <FlagIcon
          code={i18n.language === "pt-BR" ? "BR" : "US"}
          className="mr-2 w-6 h-5"
        />
        <select
          value={i18n.language}
          onChange={handleLanguageChange}
          className="bg-gray-800 text-white p-2 rounded-full cursor-pointer"
          aria-label="Select language"
        >
          <option value="pt-BR">PT-BR</option>
          <option value="en-US">EN-US</option>
        </select>
      </div>

      {/* Ícone do menu em dispositivos móveis */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="text-white text-2xl"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navegação */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex absolute md:static top-full left-0 right-0 bg-gray-950 md:bg-transparent p-5 md:p-0 flex-col md:flex-row items-center md:space-x-10 text-sm md:text-base`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-10 list-none p-0">
          <li>
            <a
              href="#home"
              className="text-white hover:text-gray-400 transition-colors duration-200"
            >
              {t("home")}
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              {t("contact")}
            </a>
          </li>
          <li>
            <a
              href="#sobre_mim"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              {t("about")}
            </a>
          </li>
          <li>
            <a
              href="#projetos"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              {t("projects")}
            </a>
          </li>
          <li>
            <a
              href="#tragetoria"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              {t("trajectory")}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
