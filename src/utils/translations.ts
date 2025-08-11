export const translations = {
  en: {
    about: "About me",
    contact: "Contact",
    projects: "Projects",
    introduction: "I'm Tomás, a web developer in training with a strong focus on backend development, although I also have solid knowledge of frontend. I mainly work with PHP, JavaScript, Laravel, and MySQL—technologies I'm most comfortable with and have the greatest command of.",
    experience: "I currently don't have work experience, but I'm actively seeking opportunities to keep growing as a developer, learning new tools, and facing real-world web development challenges.",
    technologies: "Technologies",
    gymTinajoDescription: "Gym Tinajo is a web platform developed to modernize the management of a local gym. It allows users to book classes, check schedules, and manage their rates quickly and easily. Designed with a focus on user experience, this application facilitates the entire booking process with just a few clicks, optimizing both the gym's operations and the convenience of its members.",
    gymTinajoImage: "Screenshot of Gym Tinajo",
    lanzaroTCGDescription: "LanzaroTCG is a web platform designed to facilitate the exchange of trading card game (TCG) cards such as Pokémon, Magic: The Gathering, Digimon, and One Piece. It allows users to manage their collections, propose and accept trades securely and easily. This project combines my passion for web development and the world of TCGs, offering a digital solution for a local community in Lanzarote that previously lacked a dedicated space for these exchanges. With intuitive functionalities and a focus on user experience, LanzaroTCG aims to connect collectors and foster interaction.",
    lanzaroTCGImage: "Screenshot of LanzaroTCG",
    lanzahostelDescription: "Lanzahostel is a web platform that connects workers and employers in the hospitality sector in Lanzarote. It allows users to search for job offers by name, company, or description, facilitating quick location of job opportunities. Users can explore available positions and access detailed information about each offer. The interface is designed to be simple and intuitive, focused on streamlining the search process. Lanzahostel helps improve the visibility of vacancies and supports the local hospitality sector's job dynamics.",
    lanzahostelImage: "Screenshot of Lanzahostel",
    viewOnGithub: "View on GitHub",
    viewOnYoutube: "Watch video on YouTube",
    viewOnline: "View project online",
  },
  es: {
    about: "Sobre mí",
    contact: "Contacto",
    projects: "Proyectos",
    introduction: "Soy Tomás, desarrollador web en formación con un fuerte enfoque en el desarrollo backend, aunque también con conocimientos sólidos en frontend. Principalmente trabajo con PHP, JavaScript, Laravel y MySQL, tecnologías con las que me siento más cómodo y en las que tengo mayor dominio.",
    experience: "Actualmente no cuento con experiencia laboral, pero busco activamente oportunidades para seguir creciendo como desarrollador, aprendiendo nuevas herramientas y enfrentándome a desafíos reales del desarrollo web.",
    technologies: "Tecnologías",
    gymTinajoDescription: "Gym Tinajo es una plataforma web desarrollada para modernizar la gestión de un gimnasio local. Permite a los usuarios reservar clases, consultar horarios y gestionar sus tarifas de forma rápida y sencilla. Diseñada con un enfoque en la experiencia del usuario, esta aplicación facilita todo el proceso de reserva con solo unos clics, optimizando tanto la operativa del gimnasio como la comodidad de sus miembros.",
    gymTinajoImage: "Captura de Gym Tinajo",
    lanzaroTCGDescription: "LanzaroTCG es una plataforma web diseñada para facilitar el intercambio de cartas de juegos de cartas coleccionables (TCG) como Pokémon, Magic: The Gathering, Digimon y One Piece. Permite a los usuarios gestionar sus colecciones, proponer y aceptar intercambios de manera segura y sencilla. Este proyecto combina mi pasión por el desarrollo web y el mundo de los TCG, ofreciendo una solución digital para una comunidad local en Lanzarote que antes no contaba con un espacio dedicado a estos intercambios. Con funcionalidades intuitivas y un enfoque en la experiencia del usuario, LanzaroTCG busca conectar coleccionistas y fomentar la interacción.",
    lanzaroTCGImage: "Captura de LanzaroTCG",
    lanzahostelDescription: "Lanzahostel es una plataforma web que conecta a trabajadores y empleadores del sector de hostelería en Lanzarote. Permite buscar ofertas de empleo por nombre, empresa o descripción, facilitando la localización rápida de oportunidades laborales. Los usuarios pueden explorar puestos disponibles y acceder a información detallada sobre cada oferta. La interfaz está diseñada para ser sencilla e intuitiva, enfocada en agilizar el proceso de búsqueda. Lanzahostel contribuye a mejorar la visibilidad de las vacantes y apoya la dinámica laboral del sector hostelero local.",
    lanzahostelImage: "Captura de Lanzahostel",
    viewOnGithub: "Ver en GitHub",
    viewOnYoutube: "Ver vídeo en YouTube",
    viewOnline: "Ver proyecto online",
  },
};

export type Language = keyof typeof translations;
export type Translations = typeof translations[Language];