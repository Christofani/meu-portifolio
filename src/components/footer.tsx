import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-800 text-center text-white py-6">
      <p className="text-sm">
        © 2024 Rodrigo Christofani. {t("allRightsReserved")}
      </p>
    </footer>
  );
};

export default Footer;
