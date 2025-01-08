"use client";

import { useEffect } from "react";

export default function ClientComponent() {
  useEffect(() => {
    // Aquí puedes agregar lógica que se ejecute solo en el cliente
    console.log("Componente cargado en el cliente");
  }, []); // Dependencias vacías, solo se ejecuta una vez

  return <div>Este es un componente que usa useEffect en el cliente</div>;
}
