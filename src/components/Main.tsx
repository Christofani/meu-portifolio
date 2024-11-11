// src/components/Main.tsx
import minhafoto from "../images/Imagem do WhatsApp de 2024-10-27 à(s) 18.56.16_9fe3c1ad.jpg";
import { motion } from "framer-motion";

function Main() {
  return (
    <main className="flex items-center justify-center min-h-screen px-10" id="home">
      <div className="flex items-center justify-between w-full max-w-4xl">
        {/* Seção com o texto à esquerda */}
        <motion.div
          className="w-full md:w-1/2 pr-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl font-rajdhani">Olá !</p>
          <p className="text-5xl font-rajdhani">Eu sou o Rodrigo </p>
          <p className="italic text-gray-700">
            "Transformar a si mesmo é o começo de uma grande transformação no mundo." – Mahatma Gandhi
          </p>
        </motion.div>

        {/* Seção com a imagem à direita */}
        <motion.div
          className="w-full md:w-1/2 flex justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={minhafoto} alt="minha-foto" className="rounded-full w-80 h-80" />
        </motion.div>
      </div>
    </main>
  );
}

export default Main;
