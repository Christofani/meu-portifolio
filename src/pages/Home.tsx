import minhafoto from "../images/minha-foto-ia.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Contato from "./Contato";

function Home() {
  const { t } = useTranslation();

  const stacks = {
    [t("mainStacks")]: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
    ],
    [t("learningStacks")]: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    ],
  };

  return (
    <main
      className="flex flex-col items-center  bg-slate-900 justify-center px-4 sm:px-10"
      id="home"
    >
      <div className="flex flex-col-reverse md:flex-row items-center my-6 justify-between w-full max-w-5xl mb-10">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left md:pr-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl font-rajdhani text-white ">
            {t("welcomeText")}
          </p>
          <p className="text-5xl sm:text-6xl font-rajdhani text-white mb-2">
            {t("name")}
          </p>
          <p className="text-2xl sm:text-3xl text-cyan-400 font-semibold mb-4">
            {t("role")}
          </p>
          <p className="italic text-white text-lg">{t("quote")}</p>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={minhafoto}
            alt={t("myPhoto")}
            className="rounded-full mt-2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
          />
        </motion.div>
      </div>

      <div className="w-full max-w-5xl border-t border-gray-600 my-8"></div>
      <Contato />
      <div className="w-full max-w-5xl border-t border-gray-600 my-8"></div>

      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          {t("mainStacks")}
        </h2>

        <div className="mb-8 text-white text-lg">
          <p className="text-center mb-4">{t("mainStacksDescription")}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4 text-center">
            {t("mainStacks")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {stacks[t("mainStacks")].map((icon, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center transform transition-all duration-300 hover:scale-150 hover:translate-y-[-10px] hover:shadow-[0_0_20px_#ffffff] rounded-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
              >
                <img
                  src={icon}
                  alt={`${t("stackIcon")} - ${index}`}
                  className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-md rounded-md"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-8 text-white text-lg">
          <p className="text-center mb-4">{t("learningStacksDescription")}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4 text-center">
            {t("learningStacks")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {stacks[t("learningStacks")].map((icon, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:translate-y-[25px] hover:shadow-[0_0_20px_#ffffff] rounded-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (index + stacks[t("mainStacks")].length) * 0.2,
                }}
              >
                <img
                  src={icon}
                  alt={`${t("stackIcon")} - ${index}`}
                  className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-md rounded-md"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
