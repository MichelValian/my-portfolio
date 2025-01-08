// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// // import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// // SwiperCore.use([Autoplay, Pagination, Navigation]);

// import { Navigation, Pagination, Autoplay } from "swiper"; // Importación correcta de los módulos

// // Usar los módulos con Swiper
// // Swiper.use([Navigation, Pagination, Autoplay]);

// const Modal = ({ isOpen, onClose, project }) => {
//   if (!isOpen || !project) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded-lg max-w-3xl w-full relative">
//         {/* Botón de cierre */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 bg-[var(--color-accent)] text-[var(--color-background)] text-3xl p-2 rounded-full transition-all duration-300 hover:bg-transparent hover:text-[var(--color-accent)] border-2 border-[var(--color-accent)]"
//         >
//           ×
//         </button>

//         {/* Título del proyecto */}
//         <h2 className="text-3xl font-semibold text-[var(--color-accent)] mb-4">
//           {project.name}
//         </h2>

//         {/* Descripción */}
//         <p className="text-1xl text-[var(--color-text-secondary)] mb-6">
//           {project.longDescription}
//         </p>

//         {/* Carrusel de imágenes */}
//         <Swiper
//           spaceBetween={10}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           navigation={true}
//           modules={[Navigation, Pagination, Autoplay]} // Registrar los módulos aquí
          
//           className="mb-6"
//         >
//           {project.images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
//                 <img
//                   src={image}
//                   alt={`Image ${index + 1}`}
//                   className="w-full h-full object-cover" // Ajuste dinámico de las imágenes al tamaño del contenedor
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Enlace o acción adicional */}
//         {project.link && (
//           <a
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
//           >
//             Ver más detalles
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Modal;



// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules"; // Actualización aquí

// export default function Modal({ isOpen, onClose, project }) {
//   if (!isOpen || !project) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg w-[90%] md:w-[60%] lg:w-[40%] relative">
//         {/* Botón para cerrar */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//         >
//           ×
//         </button>
//         {/* Título del proyecto */}
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">{project.name}</h2>
//         {/* Descripción larga */}
//         <p className="text-gray-600 mb-4">{project.longDescription}</p>

//         {/* Carrusel de imágenes */}
//         <Swiper
//           modules={[Navigation, Pagination]} // Actualización correcta
//           navigation
//           pagination={{ clickable: true }}
//           spaceBetween={30}
//           slidesPerView={1}
//         >
//           {project.images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={image}
//                 alt={`${project.name} Slide ${index + 1}`}
//                 className="rounded-lg w-full"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }




"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Importación de los módulos

export default function Modal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-[var(--color-background)] p-6 rounded-lg w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] relative shadow-lg"
      >
        {/* Botón para cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          ×
        </button>
        {/* Título del proyecto */}
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">{project.name}</h2>
        {/* Descripción larga */}
        <p className="text-[var(--color-text-secondary)] mb-4">{project.longDescription}</p>

        {/* Carrusel de imágenes */}
        <Swiper
          modules={[Navigation, Pagination]} // Configuración de los módulos
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${project.name} Slide ${index + 1}`}
                className="rounded-lg w-full h-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </div>
  );
}

