import { motion } from 'framer-motion'

// import SectionWrapper from '../hoc'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { otherSkills, skills } from '../constants'
import { fadeIn, textVariant } from '../utils/variants'

const Skills = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <h2 className={`${styles.sectionHeadText} text-center sm:text-start`}>Skills</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.95)}
        className='flex flex-wrap justify-center gap-10 mt-5'
      >
        {
          skills.map((skill) => (
            <div
              className='sm:w-20 sm:h-20 w-10 h-10 transition-all duration-300'
              key={skill.name}
            >
              <img 
                src={skill.icon} 
                className={`w-full h-full hover:scale-105 hover:rotate-3 transition-all duration-500`}
              />
            </div>
          ))
        }
      </motion.div>

      <hr className='my-10 border-primary opacity-30'></hr>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.95)}
        className='flex flex-wrap justify-center gap-10 mt-10'
      >

        {
          otherSkills.map((other) => (
            <div
              className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] transition-all duration-300'
              key={other.name}
            >
              <img 
                src={other.icon} 
                className={`w-full h-full hover:scale-105 hover:rotate-3 transition-all duration-500`}
              />
            </div>
          ))
        }
      </motion.div>
    </>
  )
}

export default SectionWrapper(Skills, '')