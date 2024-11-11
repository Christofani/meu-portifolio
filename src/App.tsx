import Header from './components/header';
import Main from './components/Main';
import Footer from './components/Footer';
import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import './index.css';
import Contato from './components/Contato';

// Animação de aparecimento com suavidade
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.10 }
};

interface AnimatedSectionProps {
  children: ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // 'once: false' permite repetir a animação

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      transition={{ duration: 0.8 }}
      variants={fadeInUp} // Usando o fadeInUp aqui
    >
      {children}
    </motion.div>
  );
};

// Seção Sobre
const Sobre = () => (
  <AnimatedSection>
    <section id="sobre_mim" className="py-20 px-10 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6">Sobre Mim</h2>
      <p className="text-lg text-gray-700">
        Sou desenvolvedor apaixonado por tecnologia, sempre buscando aprender e crescer na área. Tenho experiência em JavaScript, TypeScript, e estou explorando o desenvolvimento back-end com Java.
      </p>
    </section>
  </AnimatedSection>
);

// Seção Projetos
const Projetos = () => (
  <AnimatedSection>
    <section id="projetos" className="py-20 px-10 bg-white">
      <h2 className="text-3xl font-semibold mb-6">Projetos</h2>
      <p className="text-lg text-gray-700">
        Aqui estão alguns dos meus projetos mais recentes, incluindo desenvolvimento full-stack e aplicações em nuvem com AWS.
      </p>
      {/* Aqui você pode adicionar cards de projetos, usando Tailwind para o layout */}
    </section>
  </AnimatedSection>
);


// Componente App
function App() {
  return (
    <div className="font-sans">
      {/* Cabeçalho fixo para facilitar a navegação */}
      <Header />

      {/* Main: seção principal */}
      <AnimatedSection>
        <Main />
      </AnimatedSection>

      {/* Seção Sobre */}
      <Sobre />

      {/* Seção Projetos */}
      <Projetos />

      <AnimatedSection>
        <Contato />

      </AnimatedSection>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default App;
