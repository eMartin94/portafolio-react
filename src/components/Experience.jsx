import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import { AiFillStar } from 'react-icons/ai';

const Experience = ({ isDarkMode }) => {
  return (
    <>
      <div>
        <h2
          className={`${styles.sectionHeadText} ${
            isDarkMode ? 'text-white' : 'text-tertiary'
          }`}
        >
          Mi{' '}
          <span
            className={`${
              isDarkMode ? 'text-primary' : 'text-alternative'
            } capitalize`}
          >
            {' '}
            Experiencia
          </span>
        </h2>
      </div>

      <VerticalTimeline lineColor={`${isDarkMode ? '#fff' : '#15141b'}`}>
        {experiences.map((exp, i) => (
          <VerticalTimelineElement
            key={i}
            className={isDarkMode ? 'dark' : ''}
            contentStyle={{
              background: `${isDarkMode ? exp.iconBgDark : exp.iconBgLight}`,
              color: `${isDarkMode ? exp.colorDark : exp.colorLight}`,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${
                isDarkMode ? exp.iconBgDark : exp.iconBgLight
              }`,
            }}
            date={exp.date}
            iconStyle={{
              // background: `${isDarkMode ? exp.iconBgDark : exp.iconBgLight}`,
              color: `${isDarkMode ? exp.colorDark : exp.colorLight}`,
            }}
            icon={
              <img
                src={exp.icon}
                className={`vertical-timeline-element-icon ${
                  isDarkMode ? 'shdw-dark' : 'shdw-light'
                }`}
              />
            }
          >
            <div>
              <h3 className='vertical-timeline-element-title uppercase font-bold '>
                {exp.title}
              </h3>
              {/* <hr /> */}
              <p className='vertical-timeline-element-subtitle underline underline-offset-4'>
                {exp.company_name}
              </p>
            </div>
            <ul className='mt-4 pl-4'>
              {exp.points.map((point, i) => (
                <li key={i} className='list-disc text-[14px]'>
                  {point}
                </li>
              ))}
            </ul>
            <div>
              <p>Logro:</p>
              <span className='text-[14px]'>{exp.achievement}</span>
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{
            background: ` ${isDarkMode ? '#fff' : '#15141b'}`,
            color: `${isDarkMode ? '#15141b' : '#fff'}`,
          }}
          icon={<AiFillStar />}
        />
      </VerticalTimeline>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
