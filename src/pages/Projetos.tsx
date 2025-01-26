import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projetos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      id="projetos"
      className="py-16 bg-gray-900 w-full min-h-screen flex flex-col justify-center"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center text-white">
        Projetos
      </h2>
      <p className="text-lg text-white mb-8 text-center">
        Aqui estão alguns dos meus projetos, que vão desde os mais recentes até
        projetos mais antigos.
      </p>

      <div className="relative w-full mx-auto">
        {/* Botão de navegação para voltar */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-gray-700 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
        </button>
        {/* Carrossel de Projetos */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Movimento horizontal
            }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
        {/* Botão de navegação para avançar */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-gray-700 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <p className="text-sm text-white text-center italic mb-4">
          Obs: Alguns projetos estão passando por refatoração e ainda serão
          adicionados outros projetos em breve.
        </p>
      </div>
    </section>
  );
};

export default Projetos;
