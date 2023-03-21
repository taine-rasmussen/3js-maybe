import {
  mobile,
  mui,
  web,
  chat,
  javascript,
  mySQL,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  pic,
  folio,
  meta,
  eda,
  ayt,
  flick,
  rails,
  shopify,
  carrent,
  socialapp,
  wordle,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Full stack web developer",
    icon: web,
  },
  {
    title: "React specialist",
    icon: mobile,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: 'rails',
    icon: rails
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: 'mySQL',
    icon: mySQL
  },
  {
    name: 'mui',
    icon: mui
  }
];

const experiences = [
  {
    title: "Junior Full Stack Engineer",
    company_name: "AskYourTeam",
    icon: ayt,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    link: 'https://www.askyourteam.com',
    points: [
      "Developed multiple features, including filterable user tables and bulk update functionalities, using React and building new APIs to support significant performance improvements. Streamlined permission- setting time for an organization of 200 from 9000 to just 30 seconds, resulting in a 30000% improvement in efficiency.",
      'Worked closely with UI/UX designers to implement responsive layouts and accessibility features using React, successfully translating Figma mockups into a more user-friendly application.',
      'Participated in code reviews and provided constructive feedback to other developers, leveraging my experience and knowledge of React.js and front-end development best practices to ensure code quality, maintainability, and scalability.',
      'Collaborated with senior developers in "T-shaped" cross-functional Agile teams to implement and maintain React best practices, resulting in streamlined development workflows and improved code quality.',
      'Contributed to various aspects of the technical stack, including continuous integration for automated testing, building and deploying the application, and integrating a feature flag solution to ensure consistent high-quality builds with zero downtime.',
    ],
  },
  {
    title: "Student",
    company_name: "Dev Academy Aotearoa",
    icon: eda,
    iconBg: "#E6DEDD",
    date: "Apr 2021 - Nov 2021",
    link: 'https://devacademy.co.nz',
    points: [
      "Gained hands-on experience with full-stack web development technologies, including JavaScript, React, Express, and Node.js, building multiple projects from scratch.",
      "Developed a strong foundation in software development processes and best practices, including version control, agile methodologies, and testing frameworks. - Jest, Cypress and Rspec.",
      'Discovered my hands-on learning style and learned how to focus on areas for improvement while seeking out new learning opportunities.',
      'Collaborated with other developers and stakeholders on various projects, honing my problem-solving and communication skills.'
    ]
  },
  {
    title: "Freelance photograhper",
    company_name: "Self employed",
    icon: pic,
    iconBg: "#E6DEDD",
    date: "Jul 2019 - Apr 2021",
    link: 'https://www.instagram.com/tainerasmussen/',
    points: [
      'Freelance photographer working across fashion and editorial clients working with both print and digital.'
    ]
  },
  {
    title: "Marketing executive / Customer advisor",
    company_name: "Flick Electic",
    icon: flick,
    iconBg: "#E6DEDD",
    date: "Nov 2017 - Nov 2020",
    link: 'https://www.flickelectric.co.nz/',
    points: [
      "Social media content manager.",
      "Content audits / maintaining and producing rolling content calendar.",
      "Subject matter expert / business account manager.",
      "CXA contact with dev team providing user feedback on internal tool design improvements.",
    ]
  }
];

const projects = [
  {
    name: "Social media app",
    description:
      "A full stack social media app. Users can browse timelines, profiles, add / remove friends, comment on posts and create their own post supporting image upload",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "materialUi",
        color: "pink-text-gradient",
      },
      {
        name: "Redux toolkit",
        color: "orange-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
      {
        name: "Node & Express",
        color: "green-text-gradient",
      }
    ],
    image: socialapp,
    source_code_link: "https://github.com/taine-rasmussen/social-app",
  },
  {
    name: "ChatGPT intergrated chat room",
    description:
      "The Chat Room app is a user-friendly platform that enables real-time communication and collaboration. Users can create and join chat rooms, exchange messages, upload and send images, manage user access, and utilize an AI bot powered by the OpenAI API to enhance conversations and productivity.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux toolkit",
        color: "orange-text-gradient",
      },
      {
        name: "Node & Express",
        color: "pink-text-gradient",
      },
      {
        name: "chatEngine.io",
        color: "blue-text-gradient",
      },
      {
        name: 'Openai',
        color: "green-text-gradient",
      }
    ],
    image: chat,
    source_code_link: "https://github.com/taine-rasmussen/chat",
  },
  {
    name: "Wordle",
    description:
      "Recreation of the popular puzzle game using React.js",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      }
    ],
    image: wordle,
    source_code_link: "https://github.com/taine-rasmussen/not-wordle",
  },
  {
    name: "Personal portfolio",
    description:
      "my little corner of the web, providing me with new portfolio while also exploring threeJS for the first time",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: folio,
    source_code_link: "https://github.com/taine-rasmussen/3js-maybe",
  },
];

export { services, technologies, experiences, projects };