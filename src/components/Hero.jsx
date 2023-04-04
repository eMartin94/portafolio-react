import React from "react";
import { styles } from "../styles";
import { photo } from "../assets";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={` absolute inset-0 top-[70px] ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div
          className={`${styles.paddingY} flex lg:flex-row flex-col gap-5 items-center w-full h-full justify-around`}
        >
          <div className="flex flex-col">
            <h1 className={`${styles.heroHeadText}`}>Martin Pizango</h1>
            <div className="">
              <span className={`${styles.heroSubText}`}>Soy un </span>
              <TypeAnimation
                sequence={["Desarrollador!", 2000, "Diseñador!", 2000]}
                cursor={true}
                repeat={Infinity}
                className="font-bold text-primary text-[24px] lg:text-[60px] sm:text-[45px] xs:text-[30px] lg:leading-[98px]"
              />
            </div>
            <p className="text-secondary mt-5 leading-7 text-[12px] sm:text-[14px] md:text-[16px]">
              Desarrollador web con experiencia en el diseño y desarrollo de
              aplicaciones web y móviles. Conocimientos sólidos en HTML, CSS,
              JavaScript y React. Con habilidades en el manejo de bases de datos
              y en la implementación de diseños responsivos. Conocimientos en
              metodologías ágiles y en la gestión de proyectos.
            </p>
          </div>
          <div className="flex rounded-full w-full justify-center">
            <img
              src={photo}
              alt="photo"
              className="object-cover relative rounded-2xl max-w-[450px] drop-shadow-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
