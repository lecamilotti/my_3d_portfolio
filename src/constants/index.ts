import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  KanbanApp,
  Marcondes,
  cmcFinans,
  NTTdata,
  villasBoas,
  sass,
  tictactoe,
  threejs,
  jira,
  objectDetectioApp,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer React / Next.js",
    icon: web,
  },
  {
    title: "Mobile React Native / Expo",
    icon: mobile,
  },
  {
    title: "Backend with Node.js / Express",
    icon: backend,
  },
  {
    title: "3D Creator Three.js",
    icon: creator,
  },
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
    name: "TypeScript",
    icon: typescript,
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
    name: "sass",
    icon: sass,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

  {
    name: "Jira",
    icon: jira,
  },
];

const experiences = [
  {
    title: "FrontEnd Developer",
    company_name: "CMC Finans ApS / Sundhedplus.dk",
    icon: cmcFinans,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Current",
    points: [
      "Developed a client portal authenticated by MitID, enabling customers to securely access their loan information with personalized credentials. This feature provided users with a comprehensive overview of their loans, significantly reducing traffic to customer support and allowing the company to reallocate resources to other strategic initiatives.",
      "Achieved a significant impact by help creating an innovative app that revolutionized access to healthcare in Denmark, allowing users to effortlessly locate clinics and medical professionals.",
      "Demonstrated expertise in ReactJS, React Hooks, and Redux, delivering scalable, high-performance applications that enhance user experience.",
      "Consistently used CI/CD pipelines (Travis/CircleCI) and version control services (GIT/GitHub) to maintain code quality and streamline development processes.",
      "Regularly utilized JIRA and Kanban tools to manage tasks and track progress, contributing to efficient project management and team productivity.",
      "Employed Vagrant for backend development, and used Selenium and UILicious for frontend testing to ensure the reliability and quality of software.",
      "Fostered a collaborative work environment by actively engaging with senior developers, seeking guidance, and contributing to knowledge sharing and continuous learning.",
      "Demonstrated a commitment to personal growth and professional development by proactively pursuing new projects and opportunities to expand skills, driving career advancement.",
    ],
  },
  {
    title: "IT Field Engineer",
    company_name: "NTT Data",
    icon: NTTdata,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "inspect and installing new CISCO equipment and new technologies, and make sure that everything works smoothly and engineering designs are being followed.",
    ],
  },
  {
    title: "IT Consultant freelancer",
    company_name: "Villas Boas Imóveis",
    icon: villasBoas,
    iconBg: "#FFFFFF",
    date: "May 2014 - Feb 2022",
    points: [
      "I was responsible for upgrading all windows 7 user´s computers by upgrading to windows 10, the old dell server also changed the hardware and went through a complete upgrade, switching from the old windows 2003 server r2 to a new windows server 2012 adding VPN services connecting to the company's new branch office opened in 2017 with the Matrix data server and adding Hyper-V for better control of the file and print server, also maintaining the backup routine previously created and creating a new folder on the data server with confidential files, setting police access for specific people on the network.",
    ],
  },
  {
    title: "Windows server Admin / onsite Support",
    company_name: "Marcondes Da Mota Advocacia",
    icon: Marcondes,
    iconBg: "#FFFFFF",
    date: "Jul 2008 - Apr 2014",
    points: [
      "Install, configure and administer all features & services in Windows servers and Windows Workstations, maintain Window servers and workstations, problem isolation and resolution, administer Active Directory, DNS, DHC Server, Configure and Manage GPO ( Group Policy Objects ) to create a secure Windows Infrastructure, install and configure Windows Servers, 2003/2008, ISA servers 2006/2008, WSUS, Strong knowledge on administration, configuration, upgradation and maintenance on VMware and Microsoft Virtual PC, workstation experience with Windows, Win XP and 7. Install and configure Microsoft Exchange Server 2003, Maintain Microsoft Exchange e-mail accounts and public folder access through Microsft Exchange System Manager, Mailbox Management and strong knowledge on Symantec backup exec.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kanban Project",
    projectName: "Kanban",
    description:
      "My own kanban dashboard project. using dnd-kit for drag and drop.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "SaSS",
        color: "green-text-gradient",
      },
      {
        name: "dnd-kit",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "React-hooks",
        color: "green-text-gradient",
      },
    ],
    image: KanbanApp,
    source_code_link:
      "https://github.com/lecamilotti/my_3d_portfolio/tree/master/src/projects/Kanban",
    componentPath: "../projects/Kanban/index",
  },
  {
    name: "Object Detection App",
    projectName: "ObjectDetectionApp",
    description: "This is a simple app that can detect objects in live videos.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "coco-ssd model",
        color: "blue-text-gradient",
      },
      {
        name: "react-webcam",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
    ],
    image: objectDetectioApp,
    source_code_link: "https://github.com/lecamilotti/ObjectDetectionApp",
    componentPath: "../projects/ObjectDetection/index",
    warningMessage:
      "This project requires you to have a webcam and grant permission to access the camera.",
  },
  {
    name: "Tic Tac Toe",
    projectName: "TicTacToe",
    description:
      "a simple tic-tac-toe game, play with a friend or against the computer.",
    tags: [
      {
        name: "HTLM",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "canvas",
        color: "blue-text-gradient",
      },
    ],
    image: tictactoe,
    source_code_link:
      "https://github.com/lecamilotti/Tic-Tac-Toe-Game/tree/main/jogo%20da%20velha",
    componentPath: "",
    deployed_link:
      "https://leandrocamilottioldportfolio.netlify.app/jogo%20da%20velha/index.html",
  },
];

export { services, technologies, experiences, testimonials, projects };
