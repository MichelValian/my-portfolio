// Layout Component
import ClientMenu from "./components/ClientMenu";
import localFont from "next/font/local";
import "./globals.css";
import OpenResumeButton from "./components/OpenResumeButton"; // Importa el nuevo componente

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Michel's portfolio",
  description: "Desarrolladora Front-End",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
       <link rel="icon" href="/my-photo.jpeg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Header, navegación, y contenido de la página */}
        <header className="fixed top-0 left-0 w-full bg-[var(--color-background)] text-[var(--color-text-primary)] shadow-md z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
            <h1 className="text-lg font-bold tracking-wider">
              <span className="text-[var(--color-accent)]">Michel Valian Navarro</span>
            </h1>
            <span className="text-[var(--color-accent)]"></span>
            <nav className="hidden md:block">
              <ul className="flex space-x-6 text-[var(--color-text-secondary)]">
                <li><a href="/">About</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/experience">Experience</a></li>
                <li><a href="/education">Education</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>

            {/* Usamos el componente de botón OpenResumeButton aquí */}
            <OpenResumeButton />

            <ClientMenu />
          </div>
        </header>

        <main className="pt-12 md:pt-12">
          {children}
        </main>
      </body>
    </html>
  );
}
