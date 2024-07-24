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
  docker,
  Marcondes,
  cmcFinans,
  NTTdata,
  villasBoas,
  sass,
  temporaryClose,
  jobit,
  tripguide,
  threejs,
  jira,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'React Native Developer aspirant',
    icon: mobile,
  },
  {
    title: 'Backend Developer Node.js',
    icon: backend,
  },
  {
    title: 'Creator of beautiful things',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'sass',
    icon: sass,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },

  {
    name: 'Jira',
    icon: jira,
  },
];

const experiences = [
  {
    title: 'FrontEnd Developer',
    company_name: 'CMC Finans ApS / Sundhedplus.dk',
    icon: cmcFinans,
    iconBg: '#E6DEDD',
    date: 'Feb 2022 - Current',
    points: [
      'Achieved a significant impact by developing an innovative app that revolutionized access to healthcare in Denmark, enabling users to easily find clinics and medical professionals.',
      'Showcased expertise in ReactJS, React Hooks, and Redux to deliver scalable and high-performing applications, resulting in an enhanced user experience.',
      'Streamlined development processes and promoted effective collaboration by using CI/CD pipelines (Travis/CircleCI) and utilizing version control services (GIT/GitHub).',
      'Enhanced project management and team productivity by using JIRA and Kanban tools, ensuring seamless workflow and efficient task allocation.',
      'Ensured the reliability and quality of the software by employing robust testing frameworks (Vagrant with Selenium) for backend endpoint testing and frontend interface validation.',
      'Fostered a collaborative and supportive work environment by actively collaborating with experienced senior developers, seeking their guidance, and contributing to knowledge sharing and continuous learning.',
      'Demonstrated a strong commitment to personal growth and professional development through proactive pursuit of new projects and opportunities to expand skills, driving career advancement.',
    ],
  },
  {
    title: 'IT Field Engineer',
    company_name: 'NTT Data',
    icon: NTTdata,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'inspect and installing new CISCO equipment and new technologies, and make sure that everything works smoothly and engineering designs are being followed.',
    ],
  },
  {
    title: 'IT Consultant freelancer',
    company_name: 'Villas Boas Imóveis',
    icon: villasBoas,
    iconBg: '#FFFFFF',
    date: 'May 2014 - Feb 2022',
    points: [
      "I was responsible for upgrading all windows 7 user´s computers by upgrading to windows 10, the old dell server also changed the hardware and went through a complete upgrade, switching from the old windows 2003 server r2 to a new windows server 2012 adding VPN services connecting to the company's new branch office opened in 2017 with the Matrix data server and adding Hyper-V for better control of the file and print server, also maintaining the backup routine previously created and creating a new folder on the data server with confidential files, setting police access for specific people on the network.",
    ],
  },
  {
    title: 'Windows server Admin / onsite Support',
    company_name: 'Marcondes Da Mota Advocacia',
    icon: Marcondes,
    iconBg: '#FFFFFF',
    date: 'Jan 2023 - Present',
    points: [
      'Install, configure and administer all features & services in Windows servers and Windows Workstations, maintain Window servers and workstations, problem isolation and resolution, administer Active Directory, DNS, DHC Server, Configure and Manage GPO ( Group Policy Objects ) to create a secure Windows Infrastructure, install and configure Windows Servers, 2003/2008, ISA servers 2006/2008, WSUS, Strong knowledge on administration, configuration, upgradation and maintenance on VMware and Microsoft Virtual PC, workstation experience with Windows, Win XP and 7. Install and configure Microsoft Exchange Server 2003, Maintain Microsoft Exchange e-mail accounts and public folder access through Microsft Exchange System Manager, Mailbox Management and strong knowledge on Symantec backup exec.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Kanban Project',
    description: 'My own kanban dashboard',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: temporaryClose,
    source_code_link: 'https://github.com/',
    componentPath: '../projects/Kanban/index',
  },
  {
    name: 'To be add',
    description: 'To be add',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: temporaryClose,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'To be add',
    description: 'To be add',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: temporaryClose,
    source_code_link: 'https://github.com/',
  },
  // {
  //   name: 'Job IT',
  //   description:
  //     'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'restapi',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'scss',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: 'https://github.com/',
  // },
  // {
  //   name: 'Trip Guide',
  //   description:
  //     'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: 'https://github.com/',
  // },
];

export { services, technologies, experiences, testimonials, projects };
