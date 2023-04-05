import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { photo, micv } from "../assets";
import { TypeAnimation } from "react-type-animation";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineDownload,
  AiOutlineLoading,
} from "react-icons/ai";

const Hero = () => {
  const [downloading, setDownloading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const downloadFile = async () => {
    try {
      const response = await fetch(micv);
      const contentLength = response.headers.get("content-length");
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
    // completed && setDownloading(false)
  }, [completed]);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={` absolute inset-0 top-[70px] ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div
          className={`${styles.paddingY} flex lg:flex-row flex-col gap-5 items-center w-full h-full justify-evenly `}
        >
          <div className="flex flex-col max-w-full sm:w-[55%] justify-center items-center lg:items-start">
            <h1 className={`${styles.heroHeadText}`}>Martin Pizango</h1>
            <div className="text-center lg:text-start flex flex-row lg:flex-col sm:flex-row gap-2">
              <span className={`${styles.heroSubText}`}>Soy</span>
              <TypeAnimation
                sequence={["Desarrollador!", 2000, "Diseñador!", 2000]}
                cursor={true}
                repeat={Infinity}
                className="font-bold text-primary text-[24px] lg:text-[60px] sm:text-[45px] xs:text-[30px] lg:leading-[98px]"
              />
            </div>
            {/* <p className="text-secondary mt-5 leading-7 text-[12px] sm:text-[14px] md:text-[16px]">
              Desarrollador web con experiencia en el diseño y desarrollo de
              aplicaciones web y móviles. Conocimientos sólidos en HTML, CSS,
              JavaScript y React. Con habilidades en el manejo de bases de datos
              y en la implementación de diseños responsivos. Conocimientos en
              metodologías ágiles y en la gestión de proyectos.
            </p> */}
            <div className="mt-5">
              <p className="text-white">Sígueme en mis redes sociales:</p>
              <ul className="flex flex-row gap-5 mt-2 justify-center lg:justify-start">
                <li className="border-2 border-white list-none rounded-full w-10 h-10 hover:border-primary text-white hover:text-primary transition-all duration-300">
                  <a
                    href=""
                    className="text-[20px] w-full h-full flex justify-center items-center"
                  >
                    <AiFillFacebook />
                  </a>
                </li>
                <li className="border-2 border-white list-none rounded-full w-10 h-10 hover:border-primary text-white hover:text-primary transition-all duration-300">
                  <a
                    href=""
                    className="text-[20px] w-full h-full flex justify-center items-center"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li className="border-2 border-white list-none rounded-full w-10 h-10 hover:border-primary text-white hover:text-primary transition-all duration-300">
                  <a
                    href=""
                    className="text-[20px] w-full h-full flex justify-center items-center"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="border-2 border-white list-none rounded-full w-10 h-10 hover:border-primary text-white hover:text-primary transition-all duration-300">
                  <a
                    href=""
                    className="text-[20px] w-full h-full flex justify-center items-center"
                  >
                    <AiFillLinkedin />
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:mt-10 mt-5">
              <a
                href={micv}
                className="flex gap-5 items-center justify-center bg-primary border-2 border-primary py-2 px-4 rounded-lg text-tertiary font-bold hover:text-primary hover:bg-transparent transition-all duration-200 ease-linear"
                download
                onClick={handleClick}
              >
                {/* <AiOutlineDownload className={`${downloading ? 'hidden' : 'block'} text-[20px]`} />
                
                {
                  downloading && <AiOutlineLoading className={`text-[20px] animate-spin`} />
                }
                <span>{downloading ? 'Descargando...' : 'Descargar'}</span> */}
                {downloading ? (
                  <>
                    <AiOutlineLoading className={`text-[20px] animate-spin`} />
                    Descargando...
                  </>
                ) : completed ? (
                  <>
                    <AiOutlineDownload
                      className={`${
                        downloading ? "hidden" : "block"
                      } text-[20px]`}
                    />
                    Exitoso!
                  </>
                ) : (
                  <>
                    <AiOutlineDownload
                      className={`${
                        downloading ? "hidden" : "block"
                      } text-[20px]`}
                    />
                    Descargar
                  </>
                )}
              </a>
            </div>
          </div>
          <div className="relative flex w-full max-w-lg lg:justify-end justify-center">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" 
              className="absolute top-0 left-0"
              style={{zIndex: 0}}
              stroke="#7FE9DE" strokeWidth={3}
            >
              <path
                d="M 0, 87.5
                  C 0, 23.625 23.625, 0 87.5, 0
                  S 175, 23.625 175, 87.5
                  151.375, 175 87.5, 175
                  0, 151.375 0, 87.5"
                fill="none"
                transform="rotate(-30, 100, 100) translate(12.5 12.5)"
              ></path>
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='z-10'>
              <defs>
                <mask id="myMask">
                  <rect width="100%" height="100%" fill="black" />
                  <path
                    d="M 0, 87.5
                C 0, 23.625 23.625, 0 87.5, 0
                S 175, 23.625 175, 87.5
                151.375, 175 87.5, 175
                0, 151.375 0, 87.5"
                    fill="white"
                    transform="rotate(-30, 100, 100) translate(12.5 12.5)"
                  ></path>
                </mask>
              </defs>
              <rect width="100%" height="100%" mask="url(#myMask)" />
              <image
                xlinkHref={photo}
                width="100%"
                height="100%"
                mask="url(#myMask)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
