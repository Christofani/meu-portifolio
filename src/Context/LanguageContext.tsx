import { createContext, useContext, useState, ReactNode } from "react";
import i18n from "i18next";

type Language = "pt-BR" | "en-US";

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  loading: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt-BR");
  const [loading, setLoading] = useState(false);

  const changeLanguage = (language: Language) => {
    setLoading(true); // Inicia o carregamento
    i18n.changeLanguage(language, () => {
      setLanguage(language); // Atualiza o idioma
      setLoading(false); // Finaliza o carregamento
    });
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, loading }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
