import { AiFillInstagram, autocad, css3, excel, figma, git, html5, illustrator, java, javascript, mongodb, mysql, nodejs, photoshop, powerpoint, reactjs, tailwindcss, word } from '../assets'

const navLink = [
  {
    id: 'about',
    title: 'Sobre mi',
  },
  {
    id: 'work',
    title: 'Experiencia',
  },
  {
    id: 'project',
    title: 'Proyectos',
  },
  {
    id: 'contact',
    title: 'Contacto',
  },
]

const skills = [
  {
    name: 'Html 5',
    icon: html5,
  },
  {
    name: 'Css 3',
    icon: css3,
  },
  {
    name: 'Javascript',
    icon: javascript
  },
  {
    name: 'ReactJS',
    icon: reactjs
  },
  {
    name: 'Tailwindcss',
    icon: tailwindcss
  },
  {
    name: 'Java',
    icon: java
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'MySQL',
    icon: mysql
  },
  {
    name: 'Git',
    icon: git
  },
]

const otherSkills = [
  {
    name: 'Excel',
    icon: excel,
  },
  {
    name: 'Word',
    icon: word,
  },
  {
    name: 'Power Point',
    icon: powerpoint,
  },
  {
    name: 'Photoshop',
    icon: photoshop,
  },
  {
    name: 'Illustrator',
    icon: illustrator,
  },
  {
    name: 'Autocad',
    icon: autocad,
  },
  {
    name: 'Figma',
    icon: figma,
  },
]

const experiences = [
  {
    title: 'hola',
    company_name: 'hola sac',
    icon: AiFillInstagram,
    iconBg: '#15141b',
    date: '28-03-2023',
    points: [
      'sadasdas',
      'dasdasdas',
      'dasdasdas',
    ]
  }
]

const projects = [
  {
    name: '',
    description: '',
    tags: [
      {
        name: '',
        color: '',
      }
    ],
    image: '',
    source_code_link: ''
  }
]

export { navLink, skills, experiences, projects, otherSkills }