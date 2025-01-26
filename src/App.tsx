import Header from './components/header';
import Home from "./pages/Home";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import "./index.css";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import Tragetoria from "./pages/Tragetoria";
import Footer from "./components/footer";

// Animação de aparecimento com suavidade
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.1 },
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
      animate={isInView ? "animate" : "initial"}
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
    <div className="font-sans bg-gray-900">
      <Header />

      <AnimatedSection>
        <Home />
      </AnimatedSection>

      <AnimatedSection>
        <Sobre />
      </AnimatedSection>

      <AnimatedSection>
        <Projetos />
      </AnimatedSection>

      <AnimatedSection>
        <Tragetoria />
      </AnimatedSection>

      <Footer />
    </div>
  );
}

export default App;
