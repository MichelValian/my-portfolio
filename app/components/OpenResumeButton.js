// components/OpenResumeButton.js
"use client"; // Esto indica que este componente se ejecuta solo en el cliente.

export default function OpenResumeButton() {
  const openPDF = () => {
    // Abre el archivo PDF en una nueva pestaña
    window.open("/CV-m.pdf", "_blank");
  };

  return (
    <button
      onClick={openPDF}
      className="border border-[var(--color-accent)] text-[var(--color-accent)] px-4 py-2 rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-background)]"
    >
      Open Resume
    </button>
  );
}
