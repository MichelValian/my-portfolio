"use client";

export default function Experience() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-background)] text-[var(--color-text-primary)] px-6 py-12">
      {/* Header */}
      <p className="text-lg text-[var(--color-text-secondary)] uppercase tracking-wider">
        My Experience
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-center">
        Work History
      </h1>
      <p className="text-center text-[var(--color-text-secondary)] max-w-prose sm:max-w-3xl">
        I've had the opportunity to contribute to several projects, taking on a
        variety of roles in frontend and backend development. Below is a
        summary of my professional journey:
      </p>

      {/* Timeline Section */}
      <div className="timeline mt-12 w-full max-w-5xl">
        <div className="relative border-l border-[var(--color-accent)]">
          {/* Event 1 */}
          <div className="mb-10 ml-8 flex items-center group">
            <div className="absolute w-6 h-6 bg-[var(--color-accent)] rounded-full -left-3 group-hover:scale-125 transition-transform"></div>
            <div className="bg-[var(--color-card)] p-6 rounded-lg shadow-lg w-full group-hover:shadow-2xl transition-shadow">
              <div className="flex items-start justify-between">
                {/* Information */}
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                    Full Stack Developer
                  </h3>
                  <h2 translate="no" className="text-1xl font-bold text-[var(--color-text-secondary)] mb-2">
                    CEECI
                  </h2>
                  <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
                    January 2024 - April 2024
                  </p>
                </div>

                {/* Logo */}
                <img
                  src="/images/ceeci-logo.png"
                  alt="CEECI Logo"
                  className="h-[4.5rem] w-auto object-contain ml-4"
                />
              </div>
              {/* Description */}
              <p className="text-[var(--color-text-secondary)]">
                I worked on both frontend and backend aspects, using modern
                technologies like Next.js, React, Express, Angular, Sequelize, and
                MySQL. I designed and developed interactive, user-friendly
                interfaces while implementing complex functionalities like real-time
                data management and dynamic form creation.
              </p>
              <p className="text-[var(--color-text-secondary)] mt-2">
                On the backend, I created robust RESTful APIs, managing user
                authentication and authorization, as well as integrating with
                databases using Sequelize and MySQL. I also implemented categorized
                data management systems, such as creating records, filtering, and
                updating information in real time.
              </p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="mb-10 ml-8 flex items-center group">
            <div className="absolute w-6 h-6 bg-[var(--color-accent)] rounded-full -left-3 group-hover:scale-125 transition-transform"></div>
            <div className="bg-[var(--color-card)] p-6 rounded-lg shadow-lg w-full group-hover:shadow-2xl transition-shadow">
              <div className="flex items-start justify-between">
                {/* Information */}
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                    Frontend Developer
                  </h3>
                  <h2 translate="no" className="text-1xl font-bold text-[var(--color-text-secondary)] mb-2">
                    Casa del Migrante
                  </h2>
                  <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
                    May 2022 - August 2022
                  </p>
                </div>

                {/* Logo */}
                
                <img
                  src="/images/casaMigrante-logo.jpg"
                  alt="Casas del Migrante Logo"
                  // className="h-[4.5rem] w-auto object-contain ml-4"
                  className="h-[4.5rem] w-[4.5rem] object-cover rounded-full ml-4"

                />
              </div>
              {/* Description */}
              <p className="text-[var(--color-text-secondary)]">
                I was responsible for the design, development, and optimization of
                the user interface for an interactive geolocation platform. I
                utilized technologies such as HTML5, CSS with Bootstrap,
                JavaScript, and specialized libraries like Leaflet and SimpleMaps
                to create a smooth and efficient user experience.
              </p>
              <p className="text-[var(--color-text-secondary)] mt-2">
                Additionally, I integrated the Google Maps API to provide
                real-time location visualization of migrant houses. My main focus
                was to ensure that the map interaction was intuitive and accessible
                for users, with customized markers and popups displaying detailed
                information for each location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}



// "use client";

// export default function Experience() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-background)] text-[var(--color-text-primary)] px-6 py-12">
//       {/* Header */}
//       <p className="text-lg text-[var(--color-text-secondary)] uppercase tracking-wider">
//         My Experience
//       </p>
//       <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-center">
//         Work History
//       </h1>
//       <p className="text-center text-[var(--color-text-secondary)] max-w-prose sm:max-w-3xl">
//         I've had the opportunity to contribute to several projects, taking on a
//         variety of roles in frontend and backend development. Below is a
//         summary of my professional journey:
//       </p>

//       {/* Timeline */}
//       <div className="mt-12 w-full max-w-5xl relative">
//         {/* Vertical line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-[var(--color-text-secondary)]"></div>

//         {/* Timeline items */}
//         <div className="space-y-12">
//           {/* Full Stack Developer at CEECI */}
//           <div className="relative flex flex-col sm:flex-row items-center">
//             {/* Dot */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 bg-[var(--color-accent)] w-6 h-6 rounded-full border-4 border-[var(--color-background)]"></div>

//             {/* Content */}
//             <div className="mt-8 sm:mt-0 sm:w-1/2 sm:pr-8 text-right">
//               <h2 className="text-2xl sm:text-2xl font-semibold mb-2">
//                 Full Stack Developer | CEECI
//               </h2>
//               <p className="text-sm text-[var(--color-text-secondary)] mb-4">
//                 January 2024 - April 2024
//               </p>
//               <p className="text-[var(--color-text-secondary)] mb-2">
//                 I worked on both frontend and backend aspects, using modern
//                 technologies like Next.js, React, Express, Angular, Sequelize, and
//                 MySQL. I designed and developed interactive, user-friendly
//                 interfaces while implementing complex functionalities like
//                 real-time data management and dynamic form creation.
//               </p>
//             </div>

//             {/* Image */}
//             <div className="w-20 h-20 sm:w-40 sm:h-40 flex-shrink-0 rounded-full overflow-hidden bg-[var(--color-card)] sm:ml-8">
//               <img
//                 src="/images/ceeci-logo.png"
//                 alt="CEECI Logo"
//                 className="object-contain w-full h-full"
//               />
//             </div>
//           </div>

//           {/* Frontend Developer at Casas del Migrante */}
//           <div className="relative flex flex-col sm:flex-row-reverse items-center">
//             {/* Dot */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 bg-[var(--color-accent)] w-6 h-6 rounded-full border-4 border-[var(--color-background)]"></div>

//             {/* Content */}
//             <div className="mt-8 sm:mt-0 sm:w-1/2 sm:pl-8 text-left">
//               <h2 className="text-2xl sm:text-2xl font-semibold mb-2">
//                 Frontend Developer | Casa del Migrante
//               </h2>
//               <p className="text-sm text-[var(--color-text-secondary)] mb-4">
//                 May 2022 - August 2022
//               </p>
//               <p className="text-[var(--color-text-secondary)] mb-2">
//                 I was responsible for the design, development, and optimization of
//                 the user interface for an interactive geolocation platform. I
//                 utilized technologies such as HTML5, CSS with Bootstrap,
//                 JavaScript, and specialized libraries like Leaflet and SimpleMaps
//                 to create a smooth and efficient user experience.
//               </p>
//             </div>

//             {/* Image */}
//             <div className="w-20 h-20 sm:w-40 sm:h-40 flex-shrink-0 rounded-full overflow-hidden bg-[var(--color-card)] sm:mr-8">
//               <img
//                 src="/images/casaMigrante-logo.jpg"
//                 alt="Casas del Migrante Logo"
//                 className="object-contain w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }




// "use client";

// export default function Experience() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-background)] text-[var(--color-text-primary)] px-6 py-12">
//       {/* Header */}
//       <p className="text-lg text-[var(--color-text-secondary)] uppercase tracking-wider">
//         My Experience
//       </p>
//       <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-center">
//         Work History
//       </h1>
//       <p className="text-center text-[var(--color-text-secondary)] max-w-prose sm:max-w-3xl">
//         I've had the opportunity to contribute to several projects, taking on a
//         variety of roles in frontend and backend development. Below is a
//         summary of my professional journey:
//       </p>

//       {/* Work History Section */}
//       <div className="mt-12 w-full max-w-5xl space-y-12">
//         {/* Full Stack Developer at CEECI */}
//         <div className="bg-[var(--color-card)] text-[var(--color-text-primary)] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col sm:flex-row sm:items-center gap-6">
//           {/* Image/logo */}
//           <img
//             src="/images/ceeci-logo.png"
//             alt="CEECI Logo"
//             className="w-20 h-20 object-contain mx-auto sm:mx-0"
//           />

//           {/* Content */}
//           <div className="flex flex-col text-center sm:text-left">
//             <h2 className="text-2xl sm:text-2xl font-semibold mb-2">
//               Full Stack Developer | CEECI
//             </h2>
//             <p className="text-sm text-[var(--color-text-secondary)] mb-4">
//               January 2024 - April 2024
//             </p>
//             <p className="text-[var(--color-text-secondary)] mb-2">
//               I worked on both frontend and backend aspects, using modern
//               technologies like Next.js, React, Express, Angular, Sequelize, and
//               MySQL. I designed and developed interactive, user-friendly
//               interfaces while implementing complex functionalities like
//               real-time data management and dynamic form creation.
//             </p>
//             <p className="text-[var(--color-text-secondary)] mb-2">
//               On the backend, I created robust RESTful APIs, managing user
//               authentication and authorization, as well as integrating with
//               databases using Sequelize and MySQL. I also implemented categorized
//               data management systems, such as creating records, filtering, and
//               updating information in real time.
//             </p>
//             <p className="text-[var(--color-text-secondary)]">
//               Additionally, I focused on enhancing the user experience,
//               ensuring smooth interaction with the platforms by using
//               technologies like Material UI and validation tools like React
//               Hook Form. My goal was always to create scalable, efficient, and
//               maintainable solutions.
//             </p>
//           </div>
//         </div>

//         {/* Frontend Developer at Casas del Migrante */}
//         <div className="bg-[var(--color-card)] text-[var(--color-text-primary)] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col sm:flex-row sm:items-center gap-6">
//           {/* Image/logo */}
//           <img
//             src="/images/casaMigrante-logo.jpg"
//             alt="Casas del Migrante Logo"
//             className="w-20 h-20 object-contain mx-auto sm:mx-0"
//           />

//           {/* Content */}
//           <div className="flex flex-col text-center sm:text-left">
//             <h2 className="text-2xl sm:text-2xl font-semibold mb-2">
//               Frontend Developer | Casa del Migrante
//             </h2>
//             <p className="text-sm text-[var(--color-text-secondary)] mb-4">
//               May 2022 - August 2022
//             </p>
//             <p className="text-[var(--color-text-secondary)] mb-2">
//               I was responsible for the design, development, and optimization of
//               the user interface for an interactive geolocation platform. I
//               utilized technologies such as HTML5, CSS with Bootstrap,
//               JavaScript, and specialized libraries like Leaflet and SimpleMaps
//               to create a smooth and efficient user experience.
//             </p>
//             <p className="text-[var(--color-text-secondary)]">
//               Additionally, I integrated the Google Maps API to provide
//               real-time location visualization of migrant houses. My main focus
//               was to ensure that the map interaction was intuitive and
//               accessible for users, with customized markers and popups
//               displaying detailed information for each location.
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
