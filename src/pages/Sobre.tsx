import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Sobre = () => {
  const { t } = useTranslation();

  return (
    <section
      id="sobre_mim"
      className="min-h-screen flex items-center justify-center py-10 bg-gray-700"
    >
      <div className="w-full max-w-5xl text-center my-6 px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl md:text-4xl font-bold mb-8">
            {t("aboutMeTitle")}
          </h3>
        </motion.h2>

        {/* Seção 1: Um pouco sobre minha história */}
        <motion.div
          className="text-md md:text-lg text-white text-justify mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p>{t("aboutMeText")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Sobre;
