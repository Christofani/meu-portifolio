import Header from './components/header';
import Main from './components/Main';
import Footer from './components/Footer';
import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import './index.css';
import Contato from './components/Contato';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre';

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




// Componente App
function App() {
  return (
    <div className="font-sans">
      <Header />

      <AnimatedSection>
        <Main />
      </AnimatedSection>

      <AnimatedSection>
      <Sobre />
      </AnimatedSection>

      <AnimatedSection>
      <Projetos />
      </AnimatedSection>

      <AnimatedSection>
        <Contato />
      </AnimatedSection>

      <Footer />
    </div>
  );
}

export default App;
