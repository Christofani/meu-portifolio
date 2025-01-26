import { motion } from "framer-motion";

const Sobre = () => {
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
          Sobre Mim
        </motion.h2>

        {/* Seção 1: Um pouco sobre minha história */}
        <motion.div
          className="text-md md:text-lg text-white text-justify mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-cyan-400">
            Um pouco sobre minha história
          </h3>
          <p>
            Olá, meu nome é Rodrigo Christofani, tenho 26 anos e sou natural de
            São Paulo. Desde muito cedo, sempre fui fascinado pela tecnologia e
            pelo poder transformador que ela tem na vida das pessoas, oferecendo
            soluções práticas e eficientes para o cotidiano. O caminho até o
            desenvolvimento de software não foi direto, pois explorei outras
            áreas antes de encontrar minha verdadeira paixão. Após o ensino
            médio, iniciei um curso de Gastronomia e atuei na área, mas percebia
            que algo estava faltando. Sempre tive uma habilidade natural para
            trabalhar com processos manuais e, por necessidade, comecei a
            trabalhar com vidros e espelhos, o que me permitiu desenvolver
            habilidades técnicas e realizar projetos independentes. Com a
            melhora nas minhas condições financeiras, decidi buscar novos
            horizontes e foi quando, ao reencontrar um amigo de infância, tive
            meu primeiro contato com código e algo despertou dentro de mim. Foi
            ali que percebi que o desenvolvimento de software era a carreira que
            eu queria seguir. Desde então, busquei aprender sobre lógica de
            programação, algoritmos e linguagens de programação por meio de
            cursos gratuitos.
          </p>
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
            Minha trajetória até aqui
          </h3>
          <p>
            Após me aprofundar em lógica de programação e algoritmos, encontrei
            a Trybe, uma escola de programação onde me especializei no
            desenvolvimento web full stack, dividido em quatro módulos:
            fundamentos do desenvolvimento web, front-end, back-end e ciência da
            computação. Ao final do curso, escolhi me especializar em back-end,
            pois foi a área que mais me identifiquei e que me trouxe maior
            conforto. Durante o curso, participei de dinâmicas e simulações de
            ambientes de trabalho reais, além de receber orientações sobre
            carreira e soft skills, o que me preparou melhor para o mercado de
            trabalho. Após me formar, continuei buscando novos conhecimentos,
            pois sei que a tecnologia está em constante evolução. Atualmente,
            estou cursando Engenharia de Software na Cruzeiro do Sul Virtual, no
            segundo semestre, e também estou realizando uma formação na ONE
            (Oracle Next Education), que abrange três módulos: Lógica de
            Programação, Java com Spring Boot e Banco de Dados Oracle.
          </p>
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
            Meu objetivo
          </h3>
          <p>
            Meu objetivo é iniciar minha carreira como estagiário ou
            desenvolvedor júnior, aplicando meus conhecimentos em tecnologias
            modernas para desenvolver soluções inovadoras e eficientes. Tenho
            uma grande paixão por resolver problemas e proporcionar facilidades
            que impactem positivamente a vida das pessoas. Busco constantemente
            aprender e crescer na área, com o desejo de contribuir para projetos
            que tragam soluções acessíveis e úteis para o dia a dia. Estou
            aberto a novas oportunidades que me permitam evoluir
            profissionalmente e fazer a diferença no mundo da tecnologia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Sobre;
