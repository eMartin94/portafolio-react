import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/variants';
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

  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    validate();
  }, [formData]);

  const validate = () => {
    const isValidName = formData.name.length > 3;
    const isValidLastName = formData.lastname.length > 3;
    const isValidEmail = formData.email.match(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    );
    const isValidPhone = formData.phone.match(/^(\+?\d{1,3}[- ]?)?\d{9}$/);
    // return isValidEmail && isValidPhone;
    setIsValid(isValidEmail && isValidPhone && isValidName && isValidLastName);
  };

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

    // if (validate()) {
    if (isValid) {
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
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText} ${
            isDarkMode ? 'text-white' : 'text-tertiary'
          }`}
        >
          Contácta
          <span
            className={`${
              isDarkMode ? 'text-primary' : 'text-alternative'
            } capitalize`}
          >
            Me
          </span>
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
          <p className={`${isDarkMode ? 'text-white' : 'text-tertiary'} mb-10`}>
            Déjame saber tu comentario
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col w-full'
          >
            <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-5'>
              <InputWithLabel
                id='name'
                isDarkMode={isDarkMode}
                label='Name'
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
              <InputWithLabel
                id='lastname'
                isDarkMode={isDarkMode}
                label='Lastname'
                type='text'
                name='lastname'
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-5'>
              <InputWithLabel
                id='email'
                isDarkMode={isDarkMode}
                label='Email'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                validate={validate}
              />
              <InputWithLabel
                id='phone'
                isDarkMode={isDarkMode}
                label='Phone'
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                validate={validate}
              />
            </div>
            <textarea
              label='Message'
              type='text'
              rows={10}
              name='message'
              value={formData.message}
              onChange={handleChange}
              className={`w-full rounded-lg resize-none outline-none px-3 py-3 ${
                isDarkMode
                  ? 'bg-gray-100 text-tertiary'
                  : 'bg-tertiary text-white'
              }`}
              placeholder='Escribe tu comentario aquí'
            />
            <button
              type='submit'
              // className={`${styles.btn} `}
              className={`${styles.btn} ${
                isDarkMode
                  ? 'bg-primary border-primary text-tertiary hover:text-primary'
                  : 'bg-alternative border-alternative text-white hover:text-alternative'
              } max-w-xs mt-5 disabled:opacity-50`}
              disabled={!isValid}
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
