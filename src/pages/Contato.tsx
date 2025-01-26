import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import whatsapp from "../images/whatsapp_2504957.png";
import gmail from "../images/gmail_888853.png";
import linkedin from "../images/linkedin_2504923.png";
import github from "../images/github_2504911.png";

const Contato = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.2 } // Quando 20% da seção estiver visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Variantes de animação para cada item
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer
      id="contato"
      ref={sectionRef}
      className="bg-slate-700 text-white flex flex-col justify-between min-h-screen py-10 px-6"
    >
      {/* Seção de contato */}
      <motion.div
        className="flex flex-col items-center justify-center text-center py-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animar com base na visibilidade
        variants={itemVariants}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-6">Contato</h2>
        <p className="text-lg my-8">
          Entre em contato comigo através das redes sociais ou envie um email.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* GitHub */}
          <motion.a
            href="https://github.com/Christofani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-600 p-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.2 }} // Atraso para o segundo item
          >
            <img src={github} alt="GitHub" className="mr-2 w-8 h-8" />
            GitHub
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/devchristofani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-600 p-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.4 }} // Atraso para o terceiro item
          >
            <img src={linkedin} alt="LinkedIn" className="mr-2 w-8 h-8" />
            LinkedIn
          </motion.a>

          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=christofanir@gmail.com&su=Assunto&body=Escreva%20sua%20mensagem%20aqui"
            target="_blank"
            className="flex items-center text-white hover:text-gray-600 p-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img src={gmail} alt="Gmail" className="mr-2 w-8 h-8" />
            Enviar Email pelo Gmail
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/qr/R3VMFLWR5OSPB1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-600 p-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.8 }} // Atraso para o quinto item
          >
            <img src={whatsapp} alt="WhatsApp" className="mr-2 w-8 h-8" />
            WhatsApp
          </motion.a>
        </div>
      </motion.div>

      <motion.a
        href="/Curriculo_Rodrigo_Christofani-2025.pdf" // Substitua pelo caminho real do seu currículo
        download="Curriculo_Rodrigo_Christofani-2025.pdf"
        className="flex justify-center items-center bg-yellow-500 text-white p-4  rounded-lg hover:bg-yellow-600 transition duration-300 max-w-xs mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemVariants}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </span>{" "}
        Baixar Currículo
      </motion.a>

      {/* Informações de copyright */}
      <p className="text-sm text-center mt-6">
        © 2024 Rodrigo Christofani. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Contato;
