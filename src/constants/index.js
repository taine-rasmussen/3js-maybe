import {
  mobile,
  mui,
  web,
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
  meta,
  eda,
  ayt,
  flick,
  rails,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack developer",
    icon: web,
  },
  {
    title: "React specialists",
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
      "Developed a new filterable user table feature using React, integrating infinite scroll, pagination functionality, sortable columns, a searchable table, and pop-out modals with detailed information display. Increasing the feature's usability and enhancing the user experience. Created and updated multiple APIs to optimize feature performance and ensure data integrity. Conducted thorough testing and debugging, resulting in a seamless and user - friendly experience for automated report viewers",
      'Developed React components for a robust bulk changes feature that enables users to efficiently manage and set permissions at scale. Integrated this front end with new APIs to support the feature, resulting in significant performance improvements. Streamlined permission-setting time for an organization size of 200 from 9000 seconds to just 30 seconds, demonstrating a remarkable 30000% improvement in efficiency.',
      'Translated complex Figma designs and wireframes into high-quality responsive user interface components with React.js, working closely with the design team to ensure accuracy and seamless integration with our product.',
      'Reviewed application requirements and interface designs to ensure compatibility with our product, collaborating with the product and design teams to identify potential areas for improvement and providing valuable feedback on functionality and user experience. Conducted extensive testing and debugging, identifying and resolving issues in a timely manner to minimize impact on project deadlines.',
      'Participated in code reviews and provided constructive feedback to other developers, leveraging my experience and knowledge of React.js and front-end development best practices to ensure code quality, maintainability, and scalability.',
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
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ]
  },
  {
    title: "Freelance photograhper",
    company_name: "Self employed",
    icon: pic,
    iconBg: "#E6DEDD",
    date: "Jul 2019 - Apr 2021",
    link: 'https://devacademy.co.nz',
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ]
  },
  {
    title: "Marketing executive / Customer advisor",
    company_name: "Flick Electic",
    icon: flick,
    iconBg: "#E6DEDD",
    date: "Nov 2017 - Nov 2020",
    link: 'https://devacademy.co.nz',
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ]
  }
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };