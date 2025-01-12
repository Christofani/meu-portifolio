import minhafoto from "../images/minha-foto-ia.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <main
      className="flex items-center my-6 bg-slate-900 justify-center px-4 sm:px-10 min-h-screen"
      id="home"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-4xl">
        {/* Seção com o texto à esquerda */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left md:pr-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl font-rajdhani text-white mb-4">Olá!</p>
          <p className="text-4xl sm:text-5xl font-rajdhani text-white mb-4">
            Eu sou o Rodrigo
          </p>
          <p className="italic text-white">
            "Transformar a si mesmo é o começo de uma grande transformação no
            mundo." – Mahatma Gandhi
          </p>
        </motion.div>

        {/* Seção com a imagem à direita */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={minhafoto}
            alt="minha-foto"
            className="rounded-full mt-2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
          />
        </motion.div>
      </div>
    </main>
  );
}

export default Home;
