import { motion } from "framer-motion";
import whatsapp from "../images/whatsapp_2504957.png";
import gmail from "../images/gmail_888853.png";
import linkedin from "../images/linkedin_2504923.png";
import github from "../images/github_2504911.png";

// Ajuste o caminho conforme necessário

const Contato = () => (

  <section id="contato" className="py-10 px-10 bg-gray-100 flex items-center justify-center">
    <motion.div
      className=" justify-center items-center text-center p-10 max-w-md w-full flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">Contato</h2>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Entre em contato comigo através das redes sociais ou envie um email.
      </p>
      <div className="flex space-x-4 justify-center">
        <a
          href="https://github.com/Christofani"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-800 hover:text-gray-600 p-10"
        >
          <img src={github} alt="GitHub" className="mr-2 w-8 h-8" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/devchristofani"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-800 hover:text-gray-600 p-10"
        >
          <img src={linkedin} alt="LinkedIn" className="mr-2 w-8 h-8" />
          LinkedIn
        </a>
        <a
          href="mailto:christofanir@gmail.com"
          className="flex items-center text-gray-800 hover:text-gray-600 p-10"
        >
          <img src={gmail} alt="Gmail" className="mr-2 w-8 h-8" />
          Email
        </a>
        <a
          href="https://wa.me/qr/R3VMFLWR5OSPB1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-800 hover:text-gray-600 p-10"
        >
          <img src={whatsapp} alt="WhatsApp" className="mr-2 w-8 h-8" />
          WhatsApp
        </a>


      </div>
    </motion.div>
  </section>

);

export default Contato;
