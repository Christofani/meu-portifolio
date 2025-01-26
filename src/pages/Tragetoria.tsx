import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Tragetoria = () => {
  const { t } = useTranslation();

  return (
    <section
      id="tragetoria"
      className="min-h-screen flex items-center justify-center py-10 bg-gray-700"
    >
      <div className="w-full max-w-5xl text-center my-6 px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t("trajectoryTitle")}
        </motion.h2>

        {/* Seção 1: Um pouco sobre minha história */}
        <motion.div
          className="text-md md:text-lg text-white text-justify mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-cyan-400">
            {t("trajectorySection1Title")}
          </h3>
          <p>{t("trajectorySection1Text")}</p>
        </motion.div>

        <div className="w-full max-w-5xl border-t border-gray-600 my-8"></div>

        {/* Seção 2: Minha trajetória até aqui */}
        <motion.div
          className="text-md md:text-lg text-white text-justify mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-cyan-400">
            {t("trajectorySection2Title")}
          </h3>
          <p>{t("trajectorySection2Text")}</p>
        </motion.div>

        <div className="w-full max-w-5xl border-t border-gray-600 my-8"></div>

        {/* Seção 3: Meu objetivo */}
        <motion.div
          className="text-md md:text-lg text-white text-justify mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-cyan-400">
            {t("trajectorySection3Title")}
          </h3>
          <p>{t("trajectorySection3Text")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tragetoria;
