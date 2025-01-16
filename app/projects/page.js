"use client";
import { useState } from "react";
import Modal from "../components/Modal"; // Importamos el componente Modal

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      name: "Gestor de registros fiscales",
      date: "2024",
      description: "A web application for efficient data management.",
      longDescription:
        "Gestor de registros fiscales is a lightweight application designed to perform create, read, update and delete operations on a database. Developed with MySQL, PHP with PDO, HTML5, CSS3, JavaScript and AJAX, this system ensures easy interaction and perfect answers. The application features a user-friendly interface and robust validation for each field, ensuring data integrity and avoiding errors during record creation and updating. For example, fields like 'social_reason_name' require input formats. specific, while others validate for empty fields, a maximum of valid character lengths or data types.",
      images: [
        "/images/crud-php1.png",
        "/images/crud-php2.png",
        "/images/crud-php3.png",
      ],
      technologies: ["PHP (PDO)", "MySQL", "JavaScript", "HTML5", "CSS3", "AJAX"],
      logo: ["/images/crud-php1.png"],
    },    
    {
      name: "Online Quiz",
      date: "2024",
      description: "Website that manages online questionnaires for education.",
      longDescription:
        "Online Quiz is a system designed for the CEEECI that facilitates the management of online exams. This project offers tools for both teachers and students. Teachers can create, edit and manage quizzes, assign them to specific groups and evaluate the results obtained. On the other hand, students can easily access the exams, answer them and obtain feedback on their performance. This system, developed with technologies such as Next.js, React, Material UI, Sequelize and MySQL, provides an intuitive and functional experience for online learning.",
      images: [
        "/images/online-quiz1.png",
        "/images/online-quiz2.png",
        "/images/online-quiz3.png",
        "/images/online-quiz4.png",
        "/images/online-quiz5.png",
        "/images/online-quiz6.png",
        "/images/online-quiz7.png",
        "/images/online-quiz8.png",
        "/images/online-quiz9.png",
      ],
      technologies: ["Next.js", "React", "Material UI", "MySQL", "Sequelize", "Vercel", "NextAuth", "React Hook Form", "Axios", "JWT" ],
      logo: ["/images/ceeci-school-logo2.png"],
    },
    {
      name: "SmartDeviceSolutions (web)",
      date: "2023",
      description: "Website that manages service orders for repair or maintenance of electronic devices.",
      longDescription:
        "The SmartDeviceSolutions project is a web solution designed comprehensively to facilitate the management and administration of repair orders for smart devices. Developed with Next.js and React, the system combines an interactive frontend with an efficient backend, implemented using Sequelize and MySQL for data management. The interface, built with Material UI, offers a modern and friendly user experience. This project is based on the agile Lean Startup method, allowing us to adapt to the client's requirements and optimize the design processes.",
      images: [
        "/images/smart-device1.png",
        "/images/smart-device2.png",
        "/images/smart-device3.png",
        "/images/smart-device4.png",
        "/images/smart-device5.png",
        "/images/smart-device6.png",
      ],
      technologies: ["Next.js", "React", "Material UI", "MySQL", "Sequelize", "Vercel", "NextAuth", "React Hook Form", "Axios", "JWT", "Nodemailer", "Formidable" ],
      logo: ["/images/logo-sds.png"],
    },
    {
      name: "SmartDeviceSolutions (mobile)",
      date: "2023",
      description: "Mobile application that manages orders for repair or maintenance services for electronic devices.",
      longDescription:
        "The mobile version of SmartDeviceSolutions is an application designed to offer a fluid and efficient experience in managing smart devices from anywhere. Developed with React Native and Expo, the application follows the hexagonal architecture, allowing high modularity and scalability to facilitate the integration of new functionalities. I was in charge of making the prototypes of all the interfaces, guaranteeing an intuitive design adapted to the user's needs. In addition, I developed the entire component module, both frontend and backend, ensuring effective integration between both layers.",
      images: [
        "/images/smart-device-movil1.png",
        "/images/smart-device-movil2.png",
      ],
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Axios",
        "JWT",
        "Hexagonal Architecture"
      ],
      logo: ["/images/logo-sds.png"],
    },
    {
      name: "Casas del Migrante",
      date: "2022",
      description:
        "Website with interactive maps to locate Casas del Migrante in Puebla.",
      longDescription:
        "Geolocation of Migrant Houses is a website that allows you to view the locations of migrant houses in two types of interactive maps. I worked on setting up custom bookmarks and pop-ups to show specific details of each location, thus improving the navigation and accessibility of the platform. I also implemented advanced filter options that allowed users to customize their display based on different criteria.",
      images: [
        "/images/casas-del-migrante1.png",
        "/images/casas-del-migrante2.png",
        "/images/casas-del-migrante3.png",
        "/images/casas-del-migrante4.png",
        "/images/casas-del-migrante5.png",
      ],
      technologies: ["JavaScript", "HTML5", "Bootstrap", "CSS", "Leaflet", "SimpleMaps"],
      logo: ["/images/logo-gdcdm.png"],
    },
    {
        name: "Smart Home",
        date: "2022",
        description:
          "Web and mobile application designed for customers to monitor the sensors installed in their homes and access information about the services offered by the organization. ",
        longDescription:
          "This project is a web application in which customers can monitor data such as temperature, humidity, motion detection and Bluetooth light control from the sensors installed in their home. In addition, the page offers a section with detailed information about the services provided by the organization, such as installation and maintenance of intelligent systems. On the other hand, administrators have a management panel that allows them to manage users, monitor the operation of the sensors and manage the services offered. This web development uses technologies such as Ionic 6, Angular, Firebase, Cordova and is complemented by an interactive mockup that simulates a smart home with sensors and actuators.",
        images: [
          "/images/smart-home1.png",
          "/images/smart-home2.png",
          "/images/smart-home3.png",
          "/images/smart-home4.png",
          "/images/smart-home5.png",
          "/images/smart-home6.png",
          "/images/smart-home7.png",
          "/images/smart-home8-admin.png",
          "/images/smart-home9-admin.png",
        ],
        technologies: ["TypeScript", "Angular", "Cordova", "Ionic 6", "Firebase"],
        logo: ["/images/logo-sh.png"],
      },
    {
        name: "RCVV-19",
        date: "2021",
        description:
            "Website that allows you to collect data from people vaccinated against covid 19, to have a sample of the population.",
        longDescription:
            "The covid 19 vaccination registration system is a system which allows visitors to the page to enter their data on the survey based on each person's experience in the vaccination carried out by the government, in order to store that data and be able to obtain a statistical result about this process.",
        images: [
            "/images/rcvv19-1.png",
            "/images/rcvv19-2.png",
            "/images/rcvv19-3.png",
            "/images/rcvv19-4.png",
        ],
        technologies: ["JavaScript", "HTML5", "Bootstrap", "CSS", "Leaflet", "SimpleMaps"],
        logo: ["/images/logo-rcvv19.jpg"],
    },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <main className="min-h-screen p-6 bg-[var(--color-background)] text-[var(--color-text-primary)] px-6 pt-16 pb-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          My Projects
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in frontend and backend development.
        </p>
      </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
            <div
                key={index}
                className="flex flex-col items-center bg-[var(--color-card)] text-[var(--color-text-primary)] p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 space-y-4 h-full"
            >
                {/* Logo */}
                <div className="w-full flex justify-center">
                <img
                    src={project.logo[0]} // Accede al logo
                    alt={`${project.name} logo`}
                    className="rounded-lg h-20 w-auto object-contain"
                />
                </div>

                {/* Nombre del Proyecto */}
                <h2 className="text-xl font-bold text-[var(--color-text-secondary)] text-center">
                {project.name}
                </h2>

                {/* Año  del Proyecto */}
                <h2 className="text-[14px] text-[var(--color-text-tertiary)] text-center">
                {project.date}
                </h2>

                {/* Descripción */}
                <p className="text-[var(--color-text-secondary)] text-center">
                {project.description}
                </p>

                {/* Tecnologías */} 
                <ul className="flex flex-wrap justify-center gap-2" translate="no">
                  {project.technologies.map((tech, i) => (
                    <li
                      key={i}
                      className="inline-block bg-[var(--color-tecn)] text-[var(--color-text-tertiary)] px-3 py-1 rounded-md text-[11px]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <button
                    onClick={() => openModal(project)}
                    className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-background)] rounded-full text-sm hover:bg-opacity-90 w-full"
                >
                    See project
                </button>
            </div>
            ))}
        </div>

        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal} project={currentProject} />
    </main>

  );
}
