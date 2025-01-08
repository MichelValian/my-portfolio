"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-background)] text-[var(--color-text-primary)] p-6">
      <div className="flex flex-col-reverse sm:flex-row items-center sm:space-x-8 space-y-8 sm:space-y-0">
        {/* Texto y descripción */}
        <div className="text-center sm:text-left">
          <p className="text-lg text-[var(--color-text-secondary)] uppercase tracking-wider">
            Hi, my name is
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-2">
            Michel Valian Navarro.
          </h1>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[var(--color-text-secondary)]">
            I build things for the web.
          </h2>
          <p className="mt-6 text-center sm:text-left text-[var(--color-text-secondary)] max-w-3xl">
            I'm a passionate <span className="text-[var(--color-accent)]">web developer</span>  with experience in full-stack development. 
            While I have worked on both front-end and back-end projects, I have a strong inclination 
            towards <span className="text-[var(--color-accent)]">front-end development</span>. I thrive in designing and crafting user-friendly interfaces, 
            ensuring the user experience is intuitive and engaging. I specialize in transforming design 
            concepts into responsive, functional websites using modern technologies like React, Next.js, 
            and Angular. My expertise extends to connecting front-end with back-end systems, creating 
            seamless integrations that deliver smooth, dynamic applications. I enjoy the challenge of 
            making complex applications simple and visually appealing, and I’m always excited to bring 
            innovative solutions to life. With a keen eye for detail and a passion for clean, efficient 
            code, I am committed to creating experiences that not only meet but exceed user expectations.
          </p>
          <Link href="/projects">
            <button 
              className="mt-8 px-4 py-2 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-background)]">
              Check out my work!
            </button>
          </Link>
          
        </div>

        {/* Imagen de perfil */}
        <div className="w-40 sm:w-48 md:w-60 lg:w-72 xl:w-80">
          <img
            src="/images/my-photo.jpeg"  // Asegúrate de colocar la ruta correcta de tu imagen
            alt="Foto de Michel Navarro"
            className="w-full h-auto rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </main>
  );
}
