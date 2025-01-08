"use client";

export default function Education() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-background)] text-[var(--color-text-primary)] px-6 py-12">
      {/* Header */}
      <p className="text-lg text-[var(--color-text-secondary)] uppercase tracking-wider">
        My Education
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-center">
        Academic Journey
      </h1>
      <p className="text-center text-[var(--color-text-secondary)] max-w-prose sm:max-w-3xl">
        My academic journey reflects my dedication to technology and software development. 
        Below, you’ll find a timeline of my education.
      </p>

      {/* Work History Section */}
      <div className="timeline mt-12 w-full max-w-5xl">
        <div className="relative border-l border-[var(--color-accent)]">
            {/* Event 1 */}
            <div className="mb-10 ml-8 flex items-center group">
            <div className="absolute w-6 h-6 bg-[var(--color-accent)] rounded-full -left-3 group-hover:scale-125 transition-transform"></div>
              <div className="bg-[var(--color-card)] p-6 rounded-lg shadow-lg w-full group-hover:shadow-2xl transition-shadow">
                <div className="flex items-start justify-between">
                  {/* Información */}
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                      Ingeniería en Desarrollo y Gestión de Software
                    </h3>
                    <h2 translate="no" className="text-1xl font-bold text-[var(--color-text-secondary)] mb-2">
                      UTIM
                    </h2>
                    <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
                      2022 - 2024
                    </p>
                  </div>

                  {/* Logo ajustado */}
                  <img
                    src="/images/utlogo.png"
                    alt="University Logo"
                    className="h-[4.5rem] w-auto object-contain ml-4" // Ajusta la altura y agrega espacio entre el texto y el logo
                  />
                </div>

                {/* Descripción */}
                <p className="text-[var(--color-text-secondary)]">
                Focus on professional software design and development, with emphasis on web and mobile applications. I acquired advanced skills in end-to-end 
                web development, progressive web applications, user experience (UX/UI) and computer security. I complemented my training with knowledge in 
                software architecture, database administration and methodologies for IT project management, ensuring the ability to create modern, scalable 
                and user-centered solutions.
                </p>
              </div>
            </div>
             {/* Event 2 */}
            <div className="mb-10 ml-8 flex items-center group">
            <div className="absolute w-6 h-6 bg-[var(--color-accent)] rounded-full -left-3 group-hover:scale-125 transition-transform"></div>
              <div className="bg-[var(--color-card)] p-6 rounded-lg shadow-lg w-full group-hover:shadow-2xl transition-shadow">
                <div className="flex items-start justify-between">
                  {/* Información */}
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                      TSU en Tecnologías de la Información área Desarrollo de Software Multiplataforma
                    </h3>
                    <h2 translate="no" className="text-1xl font-bold text-[var(--color-text-secondary)] mb-2">
                      UTIM
                    </h2>
                    <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
                      2020 - 2022
                    </p>
                  </div>

                  {/* Logo ajustado */}
                  <img
                    src="/images/utlogo.png"
                    alt="University Logo"
                    className="h-[4.5rem] w-auto object-contain ml-4" // Ajusta la altura y agrega espacio entre el texto y el logo
                  />
                </div>

                {/* Descripción */}
                <p className="text-[var(--color-text-secondary)]">
                  Solid training in cross-platform software development with a focus on IoT, web applications, cloud databases and Industry 4.0 standards. 
                  Key domains include object-oriented programming, application design, development methodologies, and applied mathematical modeling. I culminated with 
                  a technical stay that reinforced my skills in real projects.
                </p>
              </div>
            </div>
           
        </div>
      </div>
    </main>
  );
}
