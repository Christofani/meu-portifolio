// components/ProjectCard.tsx

import { ProjectProps } from "../types/ProjectType";

const ProjectCard = ({
  title,
  description,
  appLink,
  repoLink,
  image,
  badges = [], // Recebe as badges como prop
}: ProjectProps) => (
  <div className="relative bg-gray-800 rounded-lg mx-auto flex flex-col lg:flex-row lg:w-2/3 w-full">
    {/* Imagem do Projeto */}
    <div
      className="relative shadow-md p-6 w-full lg:w-[50%] h-64 sm:h-80 md:h-96 mx-auto bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`, // Usa a imagem recebida como prop
      }}
    ></div>

    {/* Texto e Links */}
    <div className="relative z-10 w-full lg:w-[50%] p-6 flex flex-col">
      <h3 className="text-xl font-bold mb-4 text-center text-white">{title}</h3>
      {/* Descrição */}
      <p className="text-gray-300 mb-4 flex-grow whitespace-normal overflow-y-auto">
        {description}
      </p>
      <h4 className="text-lg font-semibold text-white ">Tecnologias:</h4>
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
        <a
          href={appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white w-full sm:w-1/2 text-center hover:bg-gray-700 bg-gray-500 p-2 font-medium rounded-xl"
        >
          Ver Aplicação
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white w-full sm:w-1/2 text-center hover:bg-gray-700 bg-gray-500 p-2 font-medium rounded-xl"
        >
          Ver Repositório
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
