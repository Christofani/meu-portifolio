import { useState } from "react";

interface ProjectProps {
  title: string;
  description: string;
  appLink: string;
  repoLink: string;
}

const ProjectCard = ({ title, description, appLink, repoLink }: ProjectProps) => (
  <div className="bg-gray-100 shadow-md rounded-lg p-6 w-[50%] mx-auto">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="flex justify-between">
      <a
        href={appLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        Ver Aplicação
      </a>
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        Ver Repositório
      </a>
    </div>
  </div>
);

const Projetos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: ProjectProps[] = [
    {
      title: "Projeto 1",
      description: "Descrição do projeto 1.",
      appLink: "https://link-da-aplicacao1.com",
      repoLink: "https://github.com/link-do-repositorio1",
    },
    {
      title: "Projeto 2",
      description: "Descrição do projeto 2.",
      appLink: "https://link-da-aplicacao2.com",
      repoLink: "https://github.com/link-do-repositorio2",
    },
    {
      title: "Projeto 3",
      description: "Descrição do projeto 3.",
      appLink: "https://link-da-aplicacao3.com",
      repoLink: "https://github.com/link-do-repositorio3",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="projetos" className="py-20 px-10 bg-white">
      <h2 className="text-3xl font-semibold mb-6 text-center">Projetos</h2>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Aqui estão alguns dos meus projetos mais recentes, incluindo desenvolvimento full-stack e aplicações em nuvem com AWS.
      </p>
      <div className="relative w-full max-w-6xl mx-auto">
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-800 z-10"
        >
          ←
        </button>
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-[50%] flex-shrink-0">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-800 z-10"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Projetos;
