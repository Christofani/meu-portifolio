// src/components/Navbar.tsx
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link
            to="sobre_mim"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            Sobre Mim
          </Link>
        </li>
        <li>
          <Link
            to="contato"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}
