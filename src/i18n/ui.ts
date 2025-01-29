import React from "../components/icons/React.astro";
import Sql from "../components/icons/Sql.astro";
import Angular from "../components/icons/Angular.astro";
import Csharp from "../components/icons/Csharp.astro";
import Nextjs from "../components/icons/Nextjs.astro";
import Azure from "../components/icons/Azure.astro";
import Mongo from "../components/icons/Mongo.astro";
import Tailwind from "../components/icons/Tailwind.astro";
import Python from "../components/icons/Python.astro";
import Flutter from "../components/icons/Flutter.astro";
import Bootstrap from "../components/icons/Bootstrap.astro";
import JavaScript from "../components/icons/JavaScript.astro";
import TypeScript from "../components/icons/TypeScript.astro";
import Nodejs from "../components/icons/Nodejs.astro";
import Css from "../components/icons/Css.astro";
import VSCode from "../components/icons/VisualStudioCode.astro";
import VS from "../components/icons/VisualStudio.astro";
import Vercel from "../components/icons/Vercel.astro";
import Trello from "../components/icons/Trello.astro";
import Postgresql from "../components/icons/Postgresql.astro";
import Slack from "../components/icons/Slack.astro";

export const languages = {
  en: "English",
  es: "Spanish",
};

export const defaultLang = "en";

export const content = {
  es: {
    nav: {
      home: "INICIO",
      exp: "EXPERIENCIA",
      project: "PROYECTOS",
      skill: "SKILLS",
      about: "SOBRE MI",
    },
    hero: {
      name: "Mi nombre es Deyvi Tabora",
      available: "Disponibilidad inmediata",
      description:
        "Soy un <span class='font-semibold text-sm md:text-xl text-[#3b82f6]' >desarrollador full-stack</span > con amplia experiencia en desarrollo y despliegue de software. Mi motivación está impulsada por la innovación continua y un fuerte compromiso con la excelencia técnica, lo cual se refleja en mi trabajo colaborativo con equipos de desarrollo.",
      socialMedia: [
        {
          title: "LinkedIn",
        },
        {
          title: "GitHub",
        },
        {
          title: "Correo",
        },
        {
          title: "Mi cv",
        },
      ],
      years: "Años de experiencia",
      projects: "Proyectos realizados",
      softSkills: "Habilidades de desarrollo",
    },
    experience: {
      title: "EXPERIENCIA PROFESIONAL",
      more: "Ver más",
      keySkills: "Habilidades clave",
      listExperiences: [
        {
          title: "Desarrollador full-stack",
          company: "Grupo Empresarial Platino",
          date: "Agosto 2021 - Diciembre 2024",
          description:
            "Propuse, planifiqué y gestioné proyectos de desarrollo de software alineados con las estrategias y objetivos de la empresa. Coordiné al equipo de desarrollo y participé activamente en el seguimiento de proyectos de implementación con terceros. Mi trabajo se centró en desarrollar soluciones personalizadas, integrar sistemas externos, gestionar servidores y bases de datos en la nube, impulsar la mejora continua y apoyar los objetivos estratégicos de la empresa.",
          skills: [
            {
              icon: Csharp,
            },
            {
              icon: Angular,
            },
            {
              icon: React,
            },
            {
              icon: Nextjs,
            },
            {
              icon: TypeScript,
            },
            {
              icon: Tailwind,
            },
            {
              icon: Flutter,
            },
            {
              icon: Sql,
            },
            {
              icon: Azure,
            },
          ],
        },
        {
          title: "Desarrollador de software",
          company: "International Systems Group",
          date: "Agosto 2019 - Mayo 2021",
          description:
            "Trabajé como desarrollador de software especializado en la creación de soluciones escalables y personalizadas. Contribuí tanto al desarrollo frontend como al backend, enfocándome en el diseño e implementación de aplicaciones modernas y módulos personalizados para sistemas empresariales y plataformas existentes.",
          skills: [
            {
              icon: Csharp,
            },
            {
              icon: Python,
            },
            {
              icon: React,
            },
            {
              icon: Angular,
            },
            {
              icon: TypeScript,
            },
            {
              icon: Bootstrap,
            },
            {
              icon: Flutter,
            },
            {
              icon: Sql,
            },
            {
              icon: Mongo,
            },
          ],
        },
        {
          title: "Desarrollador de software jr",
          company: "Grupo Leitz",
          date: "Enero 2019 - Junio 2019",
          description:
            "Contribuí al desarrollo y mantenimiento de aplicaciones web, gestioné bases de datos y realicé pruebas de aseguramiento de la calidad para garantizar la estabilidad del sistema.",
          skills: [
            {
              icon: Csharp,
            },
            {
              icon: JavaScript,
            },
            {
              icon: Sql,
            },
            {
              icon: Bootstrap,
            },
          ],
        },
      ],
    },
    projects: {
      title: "PROYECTOS RECIENTES",
      codeReview: "Ver código",
      preview: "Vista previa",
      items: [
        {
          title: "ITSync",
          description:
            "Es una herramienta para la gestión de activos tecnológicos, incluyendo equipos y licencias de software. Permite controlar asignaciones, mantenimiento y estados, centralizando la información en un solo lugar. Ideal para departamentos de TI que buscan eficiencia y organización.",
          stack: [
            {
              title: "Angular",
              icon: Angular,
            },
            {
              title: "ASP .NET",
              icon: Csharp,
            },
            {
              title: "MSSQL",
              icon: Sql,
            },
            {
              title: "Tailwind",
              icon: Tailwind,
            },
          ],
          codeReview: "https://github.com/",
          preview: "https://github.com/",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      skillsList: [
        {
          title: "Backend",
          description:
            "A lo largo de mi carrera como desarrollador de software, me he destacado principalmente en el desarrollo backend, que es mi fortaleza y donde me desempeño con mayor eficacia, trabajando con diversas tecnologías, patrones y arquitecturas de software.",
          items: [
            {
              icon: Csharp,
            },
            {
              icon: Nodejs,
            },
            {
              icon: Python,
            },
            {
              icon: TypeScript,
            },
            {
              icon: JavaScript,
            },
            {
              icon: Sql,
            },
            {
              icon: Mongo,
            },
            {
              icon: Postgresql,
            },
          ],
        },
        {
          title: "Frontend",
          description:
            "Tengo la capacidad de trabajar con varios frameworks y bibliotecas para el desarrollo frontend, donde mis habilidades más fuertes se enfocan en Angular y React, y suelo utilizar Tailwind CSS para el estilizado.",
          items: [
            {
              icon: Angular,
            },
            {
              icon: React,
            },
            {
              icon: Nextjs,
            },
            {
              icon: Flutter,
            },
            {
              icon: JavaScript,
            },
            {
              icon: Tailwind,
            },
            {
              icon: Bootstrap,
            },
            {
              icon: Css,
            },
          ],
        },
        {
          title: "Herramientas y Nube",
          description:
            "Me encantan las herramientas creadas por Microsoft, por lo que su uso destaca en mi rutina diaria. Además, los servicios de nube privada que ofrecen son una de las habilidades que quiero desarrollar aún más.",
          items: [
            {
              icon: VS,
            },
            {
              icon: VSCode,
            },
            {
              icon: Vercel,
            },
            {
              icon: Trello,
            },
            {
              icon: Slack,
            },
            {
              icon: Azure,
            },
          ],
        },
      ],
    },
    aboutMe: {
      title: "ACERCA DE MI",
      firstParagraph:
        "Soy un estudiante de Ingeniería en Sistemas de 25 años de Honduras. Me apasiona el fútbol y soy un fiel seguidor de la Juventus. Me considero una persona competitiva y perfeccionista, siempre esforzándome por dar lo mejor de mí en todo lo que hago. En mi tiempo libre, suelo pasar mucho tiempo con mis amigos jugando videojuegos o hablando sobre series y anime.",
      secondParagraph:
        "La tecnología es una de mis mayores pasiones, no solo como una herramienta profesional, sino también como un medio para innovar y aprender continuamente. Siempre trabajo en fortalecer mis debilidades y actualmente me estoy enfocando en mejorar mi inglés, que está en un nivel intermedio (B1). Este objetivo no solo es un logro personal, sino también una forma de ampliar mis oportunidades de crecimiento profesional.",
      thirdParagraph:
        "Para mí, el desarrollo de software representa un proceso continuo de aprendizaje y mejora personal y profesional. Mi enfoque está en superar cualquier desafío que requiera creatividad y dedicación, esforzándome por expandir mis habilidades y marcar la diferencia en cada proyecto y reto que enfrento a lo largo de mi carrera profesional.",
    },
    footer: {
      contact: "Contáctame",
      description:
        "¿Estás listo para llevar el proceso de selección al siguiente nivel?",
      createdBy: "Creado por",
    },
  },
  en: {
    nav: {
      home: "HOME",
      exp: "EXPERIENCE",
      project: "PROJECTS",
      skill: "SKILLS",
      about: "ABOUT ME",
    },
    hero: {
      name: "I'm Deyvi Tabora",
      available: "Available to work",
      description:
        "I'm a <span class='font-semibold text-sm md:text-xl text-[#3b82f6]' >full-stack developer</span > with extensive experience in software development and deployment. My motivation is driven by continuous innovation and a strong commitment to achieving technical excellence, which is reflected in my collaborative work with development teams.",
      socialMedia: [
        {
          title: "LinkedIn",
        },
        {
          title: "GitHub",
        },
        {
          title: "Correo",
        },
        {
          title: "Mi cv",
        },
      ],
      years: "Years of experience",
      projects: "Complete projects",
      softSkills: "Software skills",
    },
    experience: {
      title: "PROFESSIONAL EXPERIENCE",
      more: "See more",
      keySkills: "Key skills",
      listExperiences: [
        {
          title: "Full-stack Developer",
          company: "Platino Business Group",
          date: "August 2021 – December 2024",
          description:
            "I proposed, planned, and managed software development projects aligned with the company’s strategies and objectives. I coordinated the development team and actively participated in monitoring third-party implementation projects. My work focused on developing custom solutions, integrating external systems, managing cloud-based servers and databases, driving continuous improvement, and supporting the company's strategic goals.",
          skills: [
            {
              icon: Csharp,
            },
            {
              icon: Angular,
            },
            {
              icon: React,
            },
            {
              icon: Nextjs,
            },
            {
              icon: TypeScript,
            },
            {
              icon: Tailwind,
            },
            {
              icon: Flutter,
            },
            {
              icon: Sql,
            },
            {
              icon: Azure,
            },
          ],
        },
        {
          title: "Software Developer",
          company: "International Systems Group",
          date: "August 2019 – May 2021",
          description:
            "I worked as a software developer specializing in creating scalable, tailored solutions. I contributed to both frontend and backend development, focusing on the design and implementation of modern applications and custom modules for enterprise systems and existing platforms.",
          skills: [
            {
              icon: Csharp,
            },
            {
              icon: Python,
            },
            {
              icon: React,
            },
            {
              icon: Angular,
            },
            {
              icon: TypeScript,
            },
            {
              icon: Bootstrap,
            },
            {
              icon: Flutter,
            },
            {
              icon: Sql,
            },
            {
              icon: Mongo,
            },
          ],
        },
        {
          title: "Jr Software Developer",
          company: "Leitz Group",
          date: "January 2019 – June 2019",
          description:
            "I contributed to the development and maintenance of web applications, managed databases, and conducted quality assurance testing to ensure system stability.",
          skills: [
            {
              icon: Csharp,
            },
            {
              icon: JavaScript,
            },
            {
              icon: Sql,
            },
            {
              icon: Bootstrap,
            },
          ],
        },
      ],
    },
    projects: {
      title: "RECENT PROJECTS",
      codeReview: "Repository",
      preview: "Preview",
      items: [
        {
          title: "ITSync",
          description:
            "Is a tool for managing technological assets, including equipment and software licenses. It allows control of assignments, maintenance, and statuses, centralizing information in one place. Ideal for IT departments seeking efficiency and organization.",
          stack: [
            {
              title: "Angular",
              icon: Angular,
            },
            {
              title: "ASP .NET",
              icon: Csharp,
            },
            {
              title: "MSSQL",
              icon: Sql,
            },
            {
              title: "Tailwind",
              icon: Tailwind,
            },
          ],
          codeReview: "https://github.com/",
          preview: "https://github.com/",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      skillsList: [
        {
          title: "Backend",
          description:
            "Throughout my career as a software developer, I have excelled primarily in backend development, which is my strength, and in which I perform most effectively, working with various technologies, patterns, and software architectures.",
          items: [
            {
              icon: Csharp,
            },
            {
              icon: Nodejs,
            },
            {
              icon: Python,
            },
            {
              icon: TypeScript,
            },
            {
              icon: JavaScript,
            },
            {
              icon: Sql,
            },
            {
              icon: Mongo,
            },
            {
              icon: Postgresql,
            },
          ],
        },
        {
          title: "Frontend",
          description:
            "I have the ability to work with various frameworks and libraries for frontend development, where my strongest skills are focused on Angular and React, which I usually work with for styling using Tailwind Css.",
          items: [
            {
              icon: Angular,
            },
            {
              icon: React,
            },
            {
              icon: Nextjs,
            },
            {
              icon: Flutter,
            },
            {
              icon: JavaScript,
            },
            {
              icon: Tailwind,
            },
            {
              icon: Bootstrap,
            },
            {
              icon: Css,
            },
          ],
        },
        {
          title: "Tools & cloud",
          description:
            "I love the tools created by Microsoft, which is why using them stands out in my daily routine. Additionally, the private cloud services they provide are one of my skills that I want to develop even further.",
          items: [
            {
              icon: VS,
            },
            {
              icon: VSCode,
            },
            {
              icon: Vercel,
            },
            {
              icon: Trello,
            },
            {
              icon: Slack,
            },
            {
              icon: Azure,
            },
          ],
        },
      ],
    },
    aboutMe: {
      title: "ABOUT ME",
      firstParagraph:
        "I'm a 25-year-old Systems Engineering student from Honduras. I'm passionate about soccer and a loyal Juventus fan. I consider myself a competitive and perfectionist individual, always striving to give my best in everything I do. In my free time, I usually spend a lot of time with my friends playing video games or discussing series and anime.",
      secondParagraph:
        "Technology is one of my greatest passions, not just as a professional tool but also as a means to innovate and continuously learn. I always work on strengthening my weaknesses, and I'm currently focusing on improving my English, which is at an intermediate level (B1). This goal is not only a personal milestone but also a way to expand my professional growth opportunities.",
      thirdParagraph:
        "For me, software development represents a continuous process of learning and self-improvement, both professionally and personally. My focus is on overcoming any challenge that demands creativity and dedication, pushing myself to expand my skills and make a difference in every project and challenge I face throughout my professional career.",
    },
    footer: {
      contact: "Contact me",
      description:
        "Are you ready to take the selection process to the next level?",
      createdBy: "Created by",
    },
  },
} as const;
