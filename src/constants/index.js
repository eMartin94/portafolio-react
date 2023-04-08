import {
  autocad,
  bootstrap,
  consigueventas,
  css3,
  excel,
  figma,
  gecoi,
  git,
  hcg,
  html5,
  illustrator,
  java,
  javascript,
  megaoffice,
  mongodb,
  mysql,
  nodejs,
  photoshop,
  powerpoint,
  reactjs,
  tailwindcss,
  word,
} from '../assets';

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
];

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
    icon: javascript,
  },
  {
    name: 'ReactJS',
    icon: reactjs,
  },
  {
    name: 'Tailwindcss',
    icon: tailwindcss,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'Java',
    icon: java,
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
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'Git',
    icon: git,
  },
];

const otherSkills = [
  {
    name: 'Photoshop',
    icon: photoshop,
  },
  {
    name: 'Illustrator',
    icon: illustrator,
  },
  {
    name: 'Figma',
    icon: figma,
  },
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
    name: 'Autocad',
    icon: autocad,
  },
];

const experiences = [
  {
    title: 'Desarrollador Frontend',
    company_name: 'Grupo Consigueventas Inversiones E.I.R.L',
    icon: consigueventas,
    iconBgDark: '#fff',
    iconBgLight: '#15141b',
    colorDark: '#15141b',
    colorLight: '#fff',
    date: 'Septiembre 2022 - Febrero 2023',
    points: [
      'Diseño y desarrollo de componentes de interfaz de usuario utilizando React.',
      'Implementar y mantener el diseño visual de la aplicación.',
      'Participar en la planificación de las funcionalidades y en la priorización de las tareas.',
    ],
    achievement:
      'Implementación de características avanzadas de navegación y usabilidad en una aplicación web, como buscadores, filtros y menús desplegables.',
  },
  {
    title: 'Asesor Comercial',
    company_name: 'MegaOffice Perú S.A.C.',
    icon: megaoffice,
    iconBgDark: '#fff',
    iconBgLight: '#15141b',
    colorDark: '#15141b',
    colorLight: '#fff',
    date: 'Noviembre 2020 - Abril 2021',
    points: [
      'Consultoría en el amoblamiento de oficinas.', 
      'Registrar y actualizar información en la ERP Odoo.', 
      'Realizar seguimiento a clientes para fidelizar relación con la empresa.',
    ],
    achievement: 'Aumentar la cartera de clientes buscando nuevas oportunidades de venta.',
  },
  {
    title: 'Asistente de Logística',
    company_name: 'HCG Ingeniería S.A.C.',
    icon: hcg,
    iconBgDark: '#fff',
    iconBgLight: '#15141b',
    colorDark: '#15141b',
    colorLight: '#fff',
    date: 'Febrero 2020 - Marzo 2020',
    points: [
      'Planificar y participar en inventarios del almacén. ', 
      'Solicitar cotizaciones, evaluar y generar órdenes de compra.', 
      'Ingresar y registrar productos en el sistema de almacén',
    ],
    achievement: 'Implementación de Kardex para el seguimiento de entradas y salidas.',
  },
  {
    title: 'Asistente de Logística',
    company_name: 'Grupo Empresarial Eco ingenierías S.A.C.',
    icon: gecoi,
    iconBgDark: '#fff',
    iconBgLight: '#15141b',
    colorDark: '#15141b',
    colorLight: '#fff',
    date: 'Diciembre 2017 - Julio 2019',
    points: [
      'Evaluar y contratar servicios de transporte y alquiler de servicios.', 
      'Solicitar cotizaciones, evaluar y generar órdenes de compra.', 
      'Planificar y participar en inventarios del almacén.',
    ],
    achievement: 'Minimizar costos y asegurar el flujo continuo de la producción a un 90%',
  },
];

const projects = [
  {
    name: '',
    description: '',
    tags: [
      {
        name: '',
        color: '',
      },
    ],
    image: '',
    source_code_link: '',
  },
];

export { navLink, skills, experiences, projects, otherSkills };
