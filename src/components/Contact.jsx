import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, slideIn, textVariant } from '../utils/variants';
import InputWithLabel from './InputWithLabel';

const Contact = ({ isDarkMode }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      to_name: 'Eduardo',
      from_name: `${formData.name} ${formData.lastname}`,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_API_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert('Gracias. Me pondré en contacto contigo lo antes posible.');
          console.log('Email sent successfully!');
          formRef.current.reset();
          setFormData({
            name: '',
            lastname: '',
            email: '',
            phone: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          alert('Ahhh, algo salió mal. Inténtalo de nuevo.');
          console.log('Error sending email:', error);
        }
      );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText} ${
            isDarkMode ? 'text-secondary' : 'text-tertiary'
          }`}
        >
          Contácta<span className='text-primary'>Me</span>
        </h2>
      </motion.div>

      {/* <div className='grid md:grid-cols-2 gap-10 mt-5'> */}
      <div className='flex flex-col w-full justify-center items-center gap-10 mt-5'>
        <motion.div
          variants={fadeIn('right', 'tween', 0.5, 0.75)}
          className='flex flex-col w-full z-10'
        >
          <h3
            className={`text-[30px] font-bold ${
              isDarkMode ? 'text-white' : 'text-tertiary'
            }`}
          >
            Solo di Hola!
          </h3>
          <p className={`${isDarkMode ? 'text-white' : 'text-tertiary'} mb-5`}>
            Déjame saber tu comentario
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <InputWithLabel
              isDarkMode={isDarkMode}
              label='Name'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
            <InputWithLabel
              isDarkMode={isDarkMode}
              label='Email'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            <InputWithLabel
              isDarkMode={isDarkMode}
              label='Phone'
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
            />
            <InputWithLabel
              isDarkMode={isDarkMode}
              label='Message'
              type='text'
              name='message'
              value={formData.message}
              onChange={handleChange}
            />
            <button type='submit' className={`${styles.btn} max-w-xs mt-5 disabled:opacity-50`} >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
