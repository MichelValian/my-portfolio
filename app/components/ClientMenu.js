"use client"; // Asegura que este componente se ejecute solo en el cliente

import { useState } from "react";

export default function ClientMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Botón que solo se muestra en pantallas pequeñas */}
      <button
        className="md:hidden text-[var(--color-text-secondary)]"
        onClick={toggleMenu} // Cambiar estado al hacer clic
      >
        <span className="block w-6 h-0.5 bg-[var(--color-text-secondary)] mb-1"></span>
        <span className="block w-6 h-0.5 bg-[var(--color-text-secondary)] mb-1"></span>
        <span className="block w-6 h-0.5 bg-[var(--color-text-secondary)]"></span>
      </button>

      {/* Menú desplegable solo visible si 'isMenuOpen' es verdadero */}
      <nav className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-[var(--color-background)] p-4 absolute top-0 left-0 w-full`}>
        <ul className="space-y-4 text-[var(--color-text-secondary)]">
          <li><a href="/">About</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/experience">Experience</a></li>
          <li><a href="/education">Education</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}
