export const translations = {
  en: {
    about: "About me",
    contact: "Contact",
    projects: "Projects",
    introduction: "I'm Tomás, a web developer in training with a strong focus on backend development, although I also have solid knowledge of frontend. I mainly work with PHP, JavaScript, Laravel, and MySQL—technologies I'm most comfortable with and have the greatest command of.",
    experience: "I currently don't have work experience, but I'm actively seeking opportunities to keep growing as a developer, learning new tools, and facing real-world web development challenges.",
    technologies: "Technologies",
    gymTinajoDescription: "Gym Tinajo is a web platform developed to modernize the management of a local gym. It allows users to book classes, check schedules, and manage their rates quickly and easily. Designed with a focus on user experience, this application facilitates the entire booking process with just a few clicks, optimizing both the gym's operations and the convenience of its members.",
    gymTinajoGithub: "View on GitHub",
    gymTinajoYoutube: "Watch video on YouTube",
    gymTinajoOnline: "View project online",
  },
  es: {
    about: "Sobre mí",
    contact: "Contacto",
    projects: "Proyectos",
    introduction: "Soy Tomás, desarrollador web en formación con un fuerte enfoque en el desarrollo backend, aunque también con conocimientos sólidos en frontend. Principalmente trabajo con PHP, JavaScript, Laravel y MySQL, tecnologías con las que me siento más cómodo y en las que tengo mayor dominio.",
    experience: "Actualmente no cuento con experiencia laboral, pero busco activamente oportunidades para seguir creciendo como desarrollador, aprendiendo nuevas herramientas y enfrentándome a desafíos reales del desarrollo web.",
    technologies: "Tecnologías",
    gymTinajoDescription: "Gym Tinajo es una plataforma web desarrollada para modernizar la gestión de un gimnasio local. Permite a los usuarios reservar clases, consultar horarios y gestionar sus tarifas de forma rápida y sencilla. Diseñada con un enfoque en la experiencia del usuario, esta aplicación facilita todo el proceso de reserva con solo unos clics, optimizando tanto la operativa del gimnasio como la comodidad de sus miembros.",
    gymTinajoGithub: "Ver en GitHub",
    gymTinajoYoutube: "Ver vídeo en YouTube",
    gymTinajoOnline: "Ver proyecto online",
  },
};

export type Language = keyof typeof translations;
export type Translations = typeof translations[Language];