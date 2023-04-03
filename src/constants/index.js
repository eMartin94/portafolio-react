import { AiFillInstagram, html5 } from '../assets'

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

export { navLink, experiences, projects }