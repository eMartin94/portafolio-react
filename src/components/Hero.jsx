import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/variants';
import { photo, micv } from '../assets';
import { TypeAnimation } from 'react-type-animation';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineDownload,
  AiOutlineLoading,
} from 'react-icons/ai';

const Hero = () => {
  const [downloading, setDownloading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const downloadFile = async () => {
    try {
      const response = await fetch(micv);
      const contentLength = response.headers.get('content-length');
      const fileSize = parseFloat(contentLength) || 0;
      const connectionSpeed = 1024;
      const downloadTime =
        Math.ceil(fileSize / (connectionSpeed * 1024)) * 1000;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, downloadTime);
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleClick = async () => {
    if (!downloading && !completed) {
      setDownloading(true);
      try {
        await downloadFile();
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setCompleted(true);
        }, 200);
        setDownloading(false);
      }
    }
  };

  useEffect(() => {
    if (completed) {
      setDownloading(false);
      setTimeout(() => {
        setCompleted(false);
      }, 1000);
    }
  }, [completed]);

  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='relative w-full h-screen mx-auto'
    >
      <div
        className={` absolute inset-0 top-[70px] ${styles.paddingX} flex flex-row gap-5`}
      >
        <div
          className={`${styles.paddingY} grid md:grid-cols-2 grid-cols-1 gap-5 place-items-center w-full h-ful`}
        >
          <div className='flex flex-col w-full justify-center items-center md:items-start z-10 xl:pl-20'>
            <h1 className={`${styles.heroHeadText}`}>Martin Pizango</h1>
            <div className='w-full items-center md:items-start flex flex-col gap-2'>
              <span className={`${styles.heroSubText}`}>Soy</span>
              <TypeAnimation
                sequence={['Desarrollador!', 2000, 'Diseñador!', 2000]}
                cursor={true}
                repeat={Infinity}
                className='font-bold text-primary text-[30px] lg:text-[60px] sm:text-[45px] lg:leading-[98px]'
              />
            </div>
            <div className='mt-5'>
              <motion.p
                variants={textVariant()}
                className={`text-[14px] sm:text-[16px] text-white`}
              >
                Sígueme en mis redes sociales:
              </motion.p>
              <motion.ul
                variants={textVariant()}
                className='flex flex-row gap-5 mt-5 justify-center md:justify-start'
              >
                <li className={styles.socialList}>
                  <a href='https://www.facebook.com/' aria-label='Facebook' target='_blank' className={styles.iconSocialList}>
                    <AiFillFacebook />
                  </a>
                </li>
                <li className={styles.socialList}>
                  <a href='https://www.instagram.com/' aria-label='Instagram' target='_blank' className={styles.iconSocialList}>
                    <AiFillInstagram />
                  </a>
                </li>
                <li className={styles.socialList}>
                  <a href='https://github.com/eMartin94' aria-label='Github' target='_blank' className={styles.iconSocialList}>
                    <AiFillGithub />
                  </a>
                </li>
                <li className={styles.socialList}>
                  <a href='www.linkedin.com/in/emartinpizango' aria-label='LinkedIn' target='_blank' className={styles.iconSocialList}>
                    <AiFillLinkedin />
                  </a>
                </li>
              </motion.ul>
            </div>
            <div className='mt-10'>
              <motion.a
                variants={textVariant()}
                href={micv}
                className={`${styles.btn}`}
                download
                onClick={handleClick}
              >
                {downloading ? (
                  <>
                    <AiOutlineLoading className={`text-[20px] animate-spin`} />
                    Descargando...
                  </>
                ) : completed ? (
                  <>
                    <AiOutlineDownload
                      className={`${
                        downloading ? 'hidden' : 'block'
                      } text-[20px]`}
                    />
                    Exitoso!
                  </>
                ) : (
                  <>
                    <AiOutlineDownload
                      className={`${
                        downloading ? 'hidden' : 'block'
                      } text-[20px]`}
                    />
                    Descargar
                  </>
                )}
              </motion.a>
            </div>
          </div>
          <div className='relative md:flex w-full max-w-lg lg:justify-end justify-center hidden'>
            <svg
              viewBox='0 0 200 200'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute top-0 left-0'
              style={{ zIndex: 0 }}
              stroke='#5ed8d8'
            >
              <path
                d='M 0, 87.5
                  C 0, 23.625 23.625, 0 87.5, 0
                  S 175, 23.625 175, 87.5
                  151.375, 175 87.5, 175
                  0, 151.375 0, 87.5'
                fill='none'
                transform='rotate(-30, 100, 100) translate(12.5 12.5)'
              ></path>
            </svg>

            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
              <defs>
                <mask id='myMask'>
                  <path
                    d='M 0, 87.5
                      C 0, 23.625 23.625, 0 87.5, 0
                      S 175, 23.625 175, 87.5
                      151.375, 175 87.5, 175
                      0, 151.375 0, 87.5'
                    fill='white'
                    transform='rotate(-30, 100, 100) translate(12.5 12.5)'
                  ></path>
                </mask>
              </defs>
              <image
                xlinkHref={photo}
                width='200'
                height='200'
                mask='url(#myMask)'
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
