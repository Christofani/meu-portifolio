import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      mainStacks: "Main Stacks",
      learningStacks: "Stacks I'm Learning",
      welcomeText: "Hello!",
      name: "I'm Rodrigo",
      role: "FullStack Web Developer with focus on Back-end!",
      quote: '"Transforming yourself is the beginning of a great transformation in the world." – Mahatma Gandhi',
      mainStacksDescription: "Main Stacks are the technologies I have the most experience with and use daily in system development.",
      learningStacksDescription: "The 'Stacks I'm Learning' include technologies that I am in the process of learning and will soon be part of my main toolkit.",
      github: "GitHub",
      linkedin: "LinkedIn",
      gmail: "Gmail",
      whatsapp: "WhatsApp",
      downloadResume: "Download Resume",
      aboutMeTitle: "About Me",
      aboutMeText: "I am 26 years old, from São Paulo, and have been fascinated by technology since childhood. Initially, I followed different paths, such as Gastronomy and manual labor, but upon reconnecting with a childhood friend, I had my first contact with code, which sparked a passion for software development. I specialized in back-end at Trybe, focusing on Java and Spring Boot, and continue to study, pursuing a degree in Software Engineering and training at ONE (Oracle Next Education). My goal is to work as a junior developer or intern, always seeking efficient solutions that positively impact people's lives.",
      projectsTitle: "Projects",
      projectsDescription: "Here are some of my projects, ranging from the most recent to older ones.",
      projectsNote: "Note: Some projects are undergoing refactoring, and more projects will be added soon.",
      viewApp: "View Application",
      underConstruction: "🚧 Under Construction",
      viewRepo: "View Repository",
      technologies: "Technologies",
      agrixTitle: "Agrix",
      agrixDescription: "The Agrix system is designed to provide ease in testing the Agrix API and bring an interactive layout. It is divided into three roles: admin, manager, and user. Each role can be tested in a practical and interactive way, with different accesses and permissions.",
      localizadorMuseusTitle: "Museum Locator",
      localizadorMuseusDescription: "The Museum Locator project was developed to create a system that allows the management of museums and the search for the nearest one to a given location.",
      minhaContaTitle: "My Account",
      minhaContaDescription: "The My Account project was developed to help Íons Energia customers manage their energy consumption effectively. With this system, customers can estimate their electricity bills, register new addresses and electronic devices, and even optimize their expenses with reduced usage suggestions.",
      sistemaVotacaoTitle: "Voting System",
      sistemaVotacaoDescription: "The Voting System project was developed to consolidate Object-Oriented Programming knowledge in Java by creating a simple and functional voting system. With it, you can manage candidates and voters, conduct a vote, and tally the results in a clear and objective manner.",
      iChoveuTitle: "I Choveu",
      iChoveuDescription: "This project is a weather forecast site developed using HTML, CSS, and JavaScript technologies. The site consumes data directly from an API to provide accurate weather forecasts to users.",
      pixelsArtTitle: "Pixels Art",
      pixelsArtDescription: "The goal of Pixels Art is to allow users to paint blocks randomly, choosing different colors, and to be able to clear the screen when desired. During the project, I focused on developing the programming logic, applying functions, and using LocalStorage to enhance the user experience.",
      gerenciadorSenhasTitle: "Password Manager",
      gerenciadorSenhasDescription: "Helping people who have difficulty remembering their online service passwords. With the Password Manager, centralize and organize all login information in one place, providing more security and practicality in accessing services.",
      trajectoryTitle: "My Trajectory",
      trajectorySection1Title: "A little about my story",
      trajectorySection1Text: "Hello, my name is Rodrigo Christofani, I am 26 years old and I am from São Paulo. From a very early age, I have always been fascinated by technology and the transformative power it has in people's lives, offering practical and efficient solutions for everyday life. The path to software development was not direct, as I explored other areas before finding my true passion. After high school, I started a course in Gastronomy and worked in the field, but I felt that something was missing. I always had a natural ability to work with manual processes and, out of necessity, I started working with glass and mirrors, which allowed me to develop technical skills and carry out independent projects. With the improvement in my financial conditions, I decided to seek new horizons and it was when, upon reuniting with a childhood friend, I had my first contact with code and something awakened inside me. It was then that I realized that software development was the career I wanted to pursue. Since then, I have sought to learn about programming logic, algorithms, and programming languages through free courses.",
      trajectorySection2Title: "My journey so far",
      trajectorySection2Text: "After delving into programming logic and algorithms, I found Trybe, a programming school where I specialized in full-stack web development, divided into four modules: web development fundamentals, front-end, back-end, and computer science. At the end of the course, I chose to specialize in back-end, as it was the area I identified with the most and that brought me the most comfort. During the course, I participated in dynamics and simulations of real work environments, in addition to receiving guidance on career and soft skills, which prepared me better for the job market. After graduating, I continued to seek new knowledge because I know that technology is constantly evolving. Currently, I am studying Software Engineering at Cruzeiro do Sul Virtual, in the second semester, and I am also taking a course at ONE (Oracle Next Education), which covers three modules: Programming Logic, Java with Spring Boot, and Oracle Database.",
      trajectorySection3Title: "My goal",
      trajectorySection3Text: "My goal is to start my career as an intern or junior developer, applying my knowledge in modern technologies to develop innovative and efficient solutions. I have a great passion for problem-solving and providing facilities that positively impact people's lives. I constantly seek to learn and grow in the area, with the desire to contribute to projects that bring accessible and useful solutions for daily life. I am open to new opportunities that allow me to evolve professionally and make a difference in the world of technology.",
      allRightsReserved: "All rights reserved."
    }
  },
  pt: {
    translation: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      trajectory: "Trajetória",
      mainStacks: "Principais Stacks",
      learningStacks: "Stacks que Estou Aprendendo",
      welcomeText: "Olá!",
      name: "Eu sou o Rodrigo",
      role: "Desenvolvedor Web FullStack com foco em Back-end!",
      quote: '"Transformar a si mesmo é o começo de uma grande transformação no mundo." – Mahatma Gandhi',
      mainStacksDescription: "As 'Principais Stacks' são as tecnologias com as quais tenho mais experiência e que utilizo no meu dia a dia no desenvolvimento de sistemas.",
      learningStacksDescription: "As 'Stacks que Estou Aprendendo' incluem tecnologias que estou em processo de aprendizagem e que logo estarão no meu conjunto de ferramentas principais.",
      github: "GitHub",
      linkedin: "LinkedIn",
      gmail: "Gmail",
      whatsapp: "WhatsApp",
      downloadResume: "Baixar Currículo",
      aboutMeTitle: "Sobre Mim",
      aboutMeText: "Tenho 26 anos, sou natural de São Paulo e desde cedo sou fascinado por tecnologia. Inicialmente, segui caminhos diferentes, como a Gastronomia e trabalhos manuais, mas ao reencontrar um amigo de infância, tive meu primeiro contato com código, o que despertou uma paixão por desenvolvimento de software. Me especializei em back-end na Trybe, com foco em Java e Spring Boot, e continuo a estudar, cursando Engenharia de Software e formação na ONE (Oracle Next Education). Meu objetivo é atuar como desenvolvedor júnior ou estagiário, sempre buscando soluções que sejam eficientes e que impactem positivamente a vida das pessoas.",
      projectsTitle: "Projetos",
      projectsDescription: "Aqui estão alguns dos meus projetos, que vão desde os mais recentes até projetos mais antigos.",
      projectsNote: "Obs: Alguns projetos estão passando por refatoração e ainda serão adicionados outros projetos em breve.",
      viewApp: "Ver Aplicação",
      underConstruction: "🚧 Em Construção",
      viewRepo: "Ver Repositório",
      technologies: "Tecnologias",
      agrixTitle: "Agrix",
      agrixDescription: "O sistema Agrix foi pensado em trazer facilidade para testar a API Agrix e trazer um layout interativo. Ele é dividido em três roles: admin, manager e user. Cada papel pode ser testado de forma prática e interativa, com acessos e permissões diferentes.",
      localizadorMuseusTitle: "Localizador de Museus",
      localizadorMuseusDescription: "O projeto Localizador de Museus foi desenvolvido para criar um sistema que permite o gerenciamento de museus e a busca pelo mais próximo a uma localização fornecida.",
      minhaContaTitle: "Minha Conta",
      minhaContaDescription: "O projeto My Account foi desenvolvido para auxiliar clientes da Íons Energia a gerenciar seu consumo de energia de maneira eficaz. Com este sistema, os clientes podem estimar suas contas de luz, registrar novos endereços e dispositivos eletrônicos, e até mesmo otimizar seus gastos com sugestões de uso reduzido.",
      sistemaVotacaoTitle: "Sistema de Votação",
      sistemaVotacaoDescription: "O projeto Voting System foi desenvolvido para consolidar os conhecimentos de Orientação a Objetos em Java, criando um sistema de votação simples e funcional. Com ele, você pode gerenciar candidatos e eleitores, realizar uma votação e apurar os resultados de maneira clara e objetiva.",
      iChoveuTitle: "I Choveu",
      iChoveuDescription: "Este projeto é um site de previsão do tempo, desenvolvido com o uso das tecnologias HTML, CSS e JavaScript. O site consome dados diretamente de uma API para fornecer previsões meteorológicas precisas aos usuários.",
      pixelsArtTitle: "Pixels Art",
      pixelsArtDescription: "O objetivo do Pixels Art é permitir aos usuários pintar blocos de forma aleatória, escolhendo cores diversas, além de poder limpar a tela quando desejarem. Durante a realização do projeto, foquei em desenvolver a lógica de programação, aplicando funções e utilizando o LocalStorage para melhorar a experiência do usuário.",
      gerenciadorSenhasTitle: "Gerenciador de Senhas",
      gerenciadorSenhasDescription: "Auxiliar pessoas que têm dificuldades em lembrar suas senhas de serviços online. Com o Gerenciador de Senhas, centralize e organize todas as informações de login em um só lugar, proporcionando mais segurança e praticidade no acesso aos serviços.",
      trajectoryTitle: "Minha Trajetória",
      trajectorySection1Title: "Um pouco sobre minha história",
      trajectorySection1Text: "Olá, meu nome é Rodrigo Christofani, tenho 26 anos e sou natural de São Paulo. Desde muito cedo, sempre fui fascinado pela tecnologia e pelo poder transformador que ela tem na vida das pessoas, oferecendo soluções práticas e eficientes para o cotidiano. O caminho até o desenvolvimento de software não foi direto, pois explorei outras áreas antes de encontrar minha verdadeira paixão. Após o ensino médio, iniciei um curso de Gastronomia e atuei na área, mas percebia que algo estava faltando. Sempre tive uma habilidade natural para trabalhar com processos manuais e, por necessidade, comecei a trabalhar com vidros e espelhos, o que me permitiu desenvolver habilidades técnicas e realizar projetos independentes. Com a melhora nas minhas condições financeiras, decidi buscar novos horizontes e foi quando, ao reencontrar um amigo de infância, tive meu primeiro contato com código e algo despertou dentro de mim. Foi ali que percebi que o desenvolvimento de software era a carreira que eu queria seguir. Desde então, busquei aprender sobre lógica de programação, algoritmos e linguagens de programação por meio de cursos gratuitos.",
      trajectorySection2Title: "Minha trajetória até aqui",
      trajectorySection2Text: "Após me aprofundar em lógica de programação e algoritmos, encontrei a Trybe, uma escola de programação onde me especializei no desenvolvimento web full stack, dividido em quatro módulos: fundamentos do desenvolvimento web, front-end, back-end e ciência da computação. Ao final do curso, escolhi me especializar em back-end, pois foi a área que mais me identifiquei e que me trouxe maior conforto. Durante o curso, participei de dinâmicas e simulações de ambientes de trabalho reais, além de receber orientações sobre carreira e soft skills, o que me preparou melhor para o mercado de trabalho. Após me formar, continuei buscando novos conhecimentos, pois sei que a tecnologia está em constante evolução. Atualmente, estou cursando Engenharia de Software na Cruzeiro do Sul Virtual, no segundo semestre, e também estou realizando uma formação na ONE (Oracle Next Education), que abrange três módulos: Lógica de Programação, Java com Spring Boot e Banco de Dados Oracle.",
      trajectorySection3Title: "Meu objetivo",
      trajectorySection3Text: "Meu objetivo é iniciar minha carreira como estagiário ou desenvolvedor júnior, aplicando meus conhecimentos em tecnologias modernas para desenvolver soluções inovadoras e eficientes. Tenho uma grande paixão por resolver problemas e proporcionar facilidades que impactem positivamente a vida das pessoas. Busco constantemente aprender e crescer na área, com o desejo de contribuir para projetos que tragam soluções acessíveis e úteis para o dia a dia. Estou aberto a novas oportunidades que me permitam evoluir profissionalmente e fazer a diferença no mundo da tecnologia.",
      allRightsReserved: "Todos os direitos reservados."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
