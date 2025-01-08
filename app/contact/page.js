"use client";

import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Manejar cambios en los campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validar campos
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    } else {
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (!nameRegex.test(formData.name)) {
        errors.name = "Name can only contain letters.";
      }
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else {
      const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
      if (!emailRegex.test(formData.email)) {
        errors.email = "Please enter a valid email address.";
      }
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mldeqwyq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("Your message was sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setFormErrors({});
      } else {
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-background)] to-[var(--color-card)] text-[var(--color-text-primary)] px-6 pt-16 pb-6">
    {/* <main className="min-h-screen p-6 bg-[var(--color-background)] text-[var(--color-text-primary)] px-6 pt-16 pb-6"> */}
    
      {/* Título */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Contact me!</h1>

      {/* Formulario */}
      <div className="w-full max-w-lg sm:max-w-2xl bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-lg p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Campo Nombre */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full p-4 rounded-lg border border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)] outline-none transition-shadow"
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-2">{formErrors.name}</p>}
            </div>

            {/* Campo Email */}
            <div>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full p-4 rounded-lg border border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)] outline-none transition-shadow"
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>}
            </div>
          </div>

          {/* Campo Mensaje */}
          <div>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message here..."
              className="w-full p-4 rounded-lg border border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)] outline-none transition-shadow"
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-2">{formErrors.message}</p>
            )}
          </div>

          {/* Botón de Enviar */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full p-4 text-lg font-semibold rounded-full shadow-md transition-all duration-300 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[var(--color-accent)] text-[var(--color-background)] hover:bg-opacity-90"
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {formStatus && (
          <p className="mt-4 text-center text-[var(--color-accent)]">{formStatus}</p>
        )}
      </div>

      {/* Redes Sociales */}
      <div className="mt-8 flex space-x-6">
        <a
          href="https://www.linkedin.com/in/michel-valian-navarro-bb028a2a5"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
          
        >
          <FaLinkedin 
            className="w-8 h-8 text-[var(--color-text-secondary)]" 
            label="CSS"
          /> 
          
        </a>
        {/* <a
          href="https://github.com/MichelValian"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img src="/icons/github.svg" alt="GitHub" className="w-8 h-8" />
        </a>
        <a
          href="mailto:michel14.valian@gmail.com"
          className="hover:scale-110 transition-transform"
        >
          <img src="/icons/email.svg" alt="Email" className="w-8 h-8" />
        </a> */}
      </div>

      {/* Nota Final */}
      <div className="mt-8 w-full max-w-md sm:max-w-lg text-center">
        <p className="text-[var(--color-text-secondary)] text-sm sm:text-base italic">
          Thank you for taking the time to contact me! I will reply to you as
          soon as possible.
        </p>
      </div>
    </main>
  );
}







// "use client";

// import { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [formStatus, setFormStatus] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await fetch("https://formspree.io/f/mldeqwyq", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setFormStatus("Your message was sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setFormStatus("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       setFormStatus("Network error. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-background)] to-[var(--color-card)] text-[var(--color-text-primary)] px-6 pt-16 pb-6">
//       {/* Título */}
//       <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Contact me!</h1>

//       {/* Formulario */}
//       <div className="w-full max-w-lg sm:max-w-2xl bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-lg p-6 sm:p-8">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Campo Nombre */}
//           <div>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               placeholder="Enter your name"
//               className="w-full p-4 rounded-lg border border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)] outline-none transition-shadow"
//             />
//           </div>

//           {/* Campo Email */}
//           <div>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               placeholder="Enter your email"
//               className="w-full p-4 rounded-lg border border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)] outline-none transition-shadow"
//             />
//           </div>

//           {/* Campo Mensaje */}
//           <div>
//             <textarea
//               id="message"
//               name="message"
//               rows="5"
//               value={formData.message}
//               onChange={handleInputChange}
//               required
//               placeholder="Write your message here..."
//               className="w-full p-4 rounded-lg border border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)] outline-none transition-shadow"
//             ></textarea>
//           </div>

//           {/* Botón de Enviar */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`w-full p-4 text-lg font-semibold rounded-full shadow-md transition-all duration-300 ${
//               isLoading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-[var(--color-accent)] text-[var(--color-background)] hover:bg-opacity-90"
//             }`}
//           >
//             {isLoading ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//         {formStatus && (
//           <p className="mt-4 text-center text-[var(--color-accent)]">
//             {formStatus}
//           </p>
//         )}
//       </div>

//       {/* Redes Sociales */}
//       <div className="mt-8 flex space-x-6">
//         <a
//           href="https://www.linkedin.com/in/tu-perfil"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:scale-110 transition-transform"
//         >
//           <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
//         </a>
//         <a
//           href="https://github.com/tu-usuario"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:scale-110 transition-transform"
//         >
//           <img src="/icons/github.svg" alt="GitHub" className="w-8 h-8" />
//         </a>
//         <a
//           href="mailto:tu-email@gmail.com"
//           className="hover:scale-110 transition-transform"
//         >
//           <img src="/icons/email.svg" alt="Email" className="w-8 h-8" />
//         </a>
//       </div>

//       {/* Nota Final */}
//       <div className="mt-8 w-full max-w-md sm:max-w-lg text-center">
//         <p className="text-[var(--color-text-secondary)] text-sm sm:text-base italic">
//           Thank you for taking the time to contact me! I will reply to you as
//           soon as possible.
//         </p>
//       </div>
//     </main>
//   );
// }




// export default function Contact() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-background)] to-[var(--color-card)] text-[var(--color-text-primary)] px-6 pt-16 pb-6">
//     {/* <main className="min-h-screen p-6 bg-[var(--color-background)] text-[var(--color-text-primary)] px-6 pt-16 pb-6"> */}
     
//       {/* Título */}
//       <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
//         Contact me!
//       </h1>

//       {/* Contenedor del Formulario */}
//       <div className="w-full max-w-lg sm:max-w-2xl bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-lg p-6 sm:p-8">
//         <form
//           action="https://formspree.io/f/tu_form_id"
//           method="POST"
//           className="space-y-6"
//         >
//           {/* Nombre */}
//           <div>
//             {/* <label
//               htmlFor="name"
//               className="block text-lg font-medium text-[var(--color-text-secondary)] mb-2"
//             >
//               Name
//             </label> */}
//             <input
//               type="text"
//               id="name"
//               name="name"
//               required
//               placeholder="Enter your name"
//               className="w-full p-4 rounded-lg border border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)] outline-none transition-shadow"
//             />
//           </div>

//           {/* Correo Electrónico */}
//           <div>
//             {/* <label
//               htmlFor="email"
//               className="block text-lg font-medium text-[var(--color-text-secondary)] mb-2"
//             >
//               Email
//             </label> */}
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               placeholder="Enter your email"
//               className="w-full p-4 rounded-lg border border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)] outline-none transition-shadow"
//             />
//           </div>

//           {/* Mensaje */}
//           <div>
//             {/* <label
//               htmlFor="message"
//               className="block text-lg font-medium text-[var(--color-text-secondary)] mb-2"
//             >
//               Message
//             </label> */}
//             <textarea
//               id="message"
//               name="message"
//               rows="5"
//               required
//               placeholder="Write your message here..."
//               className="w-full p-4 rounded-lg border border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)] outline-none transition-shadow"
//             ></textarea>
//           </div>

//           {/* Botón */}
//           <button
//             type="submit"
//             className="w-full p-4 text-lg font-semibold bg-[var(--color-accent)] text-[var(--color-background)] rounded-full hover:bg-opacity-90 shadow-md transition-all duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* Elemento Decorativo */}
//       <div className="mt-8 w-full max-w-md sm:max-w-lg text-center">
//         <p className="text-[var(--color-text-secondary)] text-sm sm:text-base italic">
//            Thank you for taking the time to contact me! I will reply to you as soon as possible.
//         </p>
//       </div>
//     </main>
//   );
// }
