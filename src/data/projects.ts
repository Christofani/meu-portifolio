import { ProjectProps } from "../types/ProjectType";
import imagenAgrix from "../images/agrix.webp";
import imagenLocalizador from "../images/localizador-museus.webp";
import minhaConta from "../images/minha-conta.webp"
import sistemaVotacao from "../images/voting.png";
import iChoveu from "../images/ichoveu.png";
import pixelsArt from "../images/pixels-art.webp";
import gerenciadorSenhas from "../images/gerenciador-de-senhas.webp";


const projects: ProjectProps[] = [
  {
    title: "Agrix",
    description:
      "O sistema Agrix foi pensado em trazer facilidade para testar a API Agrix e trazer um layout interativo. Ele é dividido em três roles: admin, manager e user. Cada papel pode ser testado de forma prática e interativa, com acessos e permissões diferentes.",
    appLink: "https://agrix-front-end.vercel.app",
    repoLink: "https://github.com/Christofani/projeto-agrix-front-end",
    image: imagenAgrix,
    badges: [
      "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
      "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white",
      "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
      "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white",
      "https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",
    ],
  },
  {
    title: "Localizador de museus",
    description: "O projeto Localizador de Museus foi desenvolvido para criar um sistema que permite o gerenciamento de museus e a busca pelo mais próximo a uma localização fornecida.",
    appLink: "",
    repoLink: "https://github.com/Christofani/projeto-localizador-de-museus",
    image: imagenLocalizador,
    badges: [
      "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
      "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white",
      "https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white"
    ],
  },
  {
    title: "Minha Conta",
    description: "O projeto My Account foi desenvolvido para auxiliar clientes da Íons Energia a gerenciar seu consumo de energia de maneira eficaz. Com este sistema, os clientes podem estimar suas contas de luz, registrar novos endereços e dispositivos eletrônicos, e até mesmo otimizar seus gastos com sugestões de uso reduzido.",
    appLink: "",
    repoLink: "https://github.com/Christofani/project-my-account",
    image: minhaConta,
    badges: [
      "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
      "https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white",
    ],
  },
  {
    title: "Sistema de Votação",
    description: "O projeto Voting System foi desenvolvido para consolidar os conhecimentos de Orientação a Objetos em Java, criando um sistema de votação simples e funcional. Com ele, você pode gerenciar candidatos e eleitores, realizar uma votação e apurar os resultados de maneira clara e objetiva",
    appLink: "",
    repoLink: "https://github.com/Christofani/projeto-sistema-de-votacao",
    image: sistemaVotacao,
    badges: [
      "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
      "https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white",
    ],
  },
  {
    title: "I Choveu",
    description: "Este projeto é um site de previsão do tempo, desenvolvido com o uso das tecnologias HTML, CSS e JavaScript. O site consome dados diretamente de uma API para fornecer previsões meteorológicas precisas aos usuários.",
    appLink: "",
    repoLink: "https://github.com/Christofani/project-iChoveu",
    image: iChoveu,
    badges: [
      "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"
    ],
  },
  {
    title: "Pixels Art",
    description: "O objetivo do Pixels Art é permitir aos usuários pintar blocos de forma aleatória, escolhendo cores diversas, além de poder limpar a tela quando desejarem. Durante a realização do projeto, foquei em desenvolver a lógica de programação, aplicando funções e utilizando o LocalStorage para melhorar a experiência do usuário.",
    appLink: "",
    repoLink: "https://github.com/Christofani/project-pixels-art",
    image: pixelsArt,
    badges: [
      "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"
    ],
  },
  {
    title: "Gerenciador de Senhas",
    description: "Auxiliar pessoas que têm dificuldades em lembrar suas senhas de serviços online. Com o Gerenciador de Senhas, centralize e organize todas as informações de login em um só lugar, proporcionando mais segurança e praticidade no acesso aos serviços.",
    appLink: "",
    repoLink: "https://github.com/Christofani/project-password-manager",
    image: gerenciadorSenhas,
    badges: [
      "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"
    ],
  },
];

export default projects;