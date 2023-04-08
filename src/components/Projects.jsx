import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, slideIn, textVariant, zoomIn } from '../utils/variants'
import {
  AiFillEye,
  AiFillGithub,
} from 'react-icons/ai';

const Projects = ({ isDarkMode }) => {
  return (
    <>
      
        <motion.div variants={textVariant()}>
          <div>
            <h2
              className={`${styles.sectionHeadText} ${
                isDarkMode ? 'text-secondary' : 'text-tertiary'
              }`}
            >
              Mis <span className='text-primary'>Proyectos</span>
            </h2>
          </div>
        </motion.div>

        <motion.div variants={slideIn('up', 'tween', 0.5, 0.75)}>
        <div className='flex flex-wrap gap-4 justify-center mt-10'>
          {projects.map((project, i) => (
            <div
              key={i}
              className={`${
                isDarkMode ? 'bg-white text-tertiary' : 'bg-tertiary text-white'
              } xs:w-[260px] w-full rounded-2xl p-4 `}
            >
              <div className='box-img-project relative w-full cursor-pointer rounded-2xl'>
                <img
                  src={project.image}
                  alt={project.name}
                  className='w-full h-full rounded-2xl object-contain transition-all duration-300'
                />
                <div className='box-icons absolute top-0 w-full h-full flex justify-center items-center gap-4'>
                  <a href={project.source_code_link} target='_blank'>
                    <AiFillGithub className='w-[40px] h-[40px] text-white hover:text-primary transition-all duration-300 cursor-pointer drop-shadow-md' />
                  </a>
                  <a href={project.page_link} target='_blank'>
                    <AiFillEye className='w-[40px] h-[40px] text-white hover:text-primary transition-all duration-300 cursor-pointer drop-shadow-md' />
                  </a>
                </div>
              </div>
              <div className='mt-4'>
                <div>
                  <h3 className='font-bold'>{project.name}</h3>
                  <p className='text-[14px]'>{project.description}</p>
                </div>
                <div className='flex flex-wrap mt-2'>
                  {project.tags.map((tag, i) => (
                    <p key={i} className={`text-[12px] ${tag.color}`}>
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, 'project');
