import { ProjectProps } from "../types/ProjectType";
import { useTranslation } from "react-i18next";

const ProjectCard = ({
  titleKey,
  descriptionKey,
  appLink,
  repoLink,
  image,
  badges = [], // Recebe as badges como prop
}: ProjectProps) => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gray-800 rounded-lg mx-auto flex flex-col lg:flex-row lg:w-2/3 w-full">
      {/* Imagem do Projeto */}
      <div
        className="relative rounded-lg shadow-md w-full lg:w-[50%] h-64 sm:h-80 md:h-96 mx-auto bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`, // Usa a imagem recebida como prop
        }}
      ></div>

      {/* Texto e Links */}
      <div className="relative z-10 w-full lg:w-[50%] p-6 flex flex-col">
        <h3 className="text-xl font-bold mb-4 text-center text-white">
          {t(titleKey)}
        </h3>
        {/* Descrição */}
        <p className="text-gray-300 mb-4 flex-grow whitespace-normal overflow-y-auto">
          {t(descriptionKey)}
        </p>
        <h4 className="text-lg font-semibold text-white ">
          {t("technologies")}:
        </h4>
        <div className="my-4 flex flex-wrap gap-2">
          {/* Renderiza os badges dinamicamente */}
          {badges.map((badge, index) => (
            <img
              key={index}
              src={badge}
              alt={`badge-${index}`}
              className="w-22 h-auto"
            />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-auto">
          {/* Link para Ver Aplicação */}
          <a
            href={appLink || "#"} // Define um link padrão vazio
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white w-full sm:w-1/2 text-center ${
              appLink
                ? "hover:bg-gray-700 bg-gray-500"
                : "bg-gray-400 cursor-not-allowed"
            } p-2 font-medium rounded-xl`}
            style={{ pointerEvents: appLink ? "auto" : "none" }}
          >
            {appLink ? t("viewApp") : t("underConstruction")}
          </a>

          {/* Link para Ver Repositório */}
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white w-full sm:w-1/2 text-center hover:bg-gray-700 bg-gray-500 p-2 font-medium rounded-xl"
          >
            {t("viewRepo")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
