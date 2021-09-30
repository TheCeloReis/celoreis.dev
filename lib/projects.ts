type Project = {
  name: string;
  description: string;
  link?: string;
  thumbnail?: string;
  tags: string[];
};

const PortalTelemedicina: Project = {
  name: "Portal Telemedicina",
  description: "Aplicación web para la gestión de citas médicas.",
  link: "https://portaltelemedicina.com.br/",
  thumbnail: "img/portal-telemedicina.png",
  tags: [
    "vue",
    "javascript",
    "vuex",
    "d3",
    "javascript",
    "ngnix",
    "typescript",
    "test",
  ],
};

const WedClub: Project = {
  name: "WedClub",
  description:
    "A platform to facilitate the bride's and groom's journey. They optimize the entire process of hiring and managing suppliers.\n\n" +
    "During the first MVP and early exposition for investors, I worked in the front end. We are a small remote team of mostly full-stack developers, where I was the only frontend. During this project, I have done more design-related work and improvements.",
  link: "https://wedclub.com.com.br",
  thumbnail: "img/wedclub.png",
  tags: ["vue", "javascript", "vuex", "nuxt", "tailwind", "seo"],
};

const Bianca: Project = {
  name: "Bianca",
  description:
    "Startup creating a charging system. We built on top of the PIX, a modern Brazilian payment system. It's a platform to track and charge your clients, making contact with them using WhatsApp.\n\n" +
    "I built the entire frontend web app, discussing refinements and implementing the UI from scratch. ",
  link: "https://bianca.com.br",
  thumbnail: "img/bianca.png",
  tags: [
    "react",
    "typescript",
    "react-aria",
    "react-query",
    "tailwind",
    "design",
  ],
};

const Letras: Project = {
  name: "Letras",
  description: "A web app for Letras, a community of",
  link: "https://letras.mus.br",
  thumbnail: "img/letras.png",
  tags: [
    "react",
    "javascript",
    "typescript",
    "redux",
    "graphql",
    "unit test",
    "sass",
  ],
};

export const jobs = [Letras, PortalTelemedicina];

export const gigs = [WedClub, Bianca];
