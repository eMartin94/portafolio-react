import React, { useState } from 'react';
import classNames from 'classnames';

function InputWithLabel({
  isDarkMode,
  label,
  type = 'text',
  validate,
  id,
  ...rest
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    validateValue();
  };
  const handleChange = (e) => setValue(e.target.value);

  const labelClasses = classNames(
    'absolute left-2 transition-all duration-300',
    {
      'top-1/2 -translate-y-1/2 text-gray-400 text-sm':
        !isFocused && !value && !rest.value,
      '-top-6 text-gray-600 text-tertiary font-bold':
        (isFocused || value || rest.value) && label,
    },
    {
      'text-gray-400': !isFocused && !value && !isDarkMode,
      'text-white': (isFocused || value || rest.value) && label && isDarkMode,
    },
    {
      'text-red-500': !isValid && !isFocused,
    }
  );
  const validateValue = () => {
    if (type === 'email') {
      const isValidEmail = rest.value.match(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      );
      setIsValid(isValidEmail);
    } else if (type === 'tel') {
      const isValidPhone = rest.value.match(/^(\+?\d{1,3}[- ]?)?\d{9}$/);
      setIsValid(isValidPhone);
    } else {
      setIsValid(true);
    }
  };

  return (
    <div className='relative mb-10'>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <input
        id={id}
        className={`block w-full px-3 py-3 mt-1 rounded-md ${
          isDarkMode ? 'bg-gray-100 text-tertiary' : 'bg-tertiary text-white'
        } border-transparent focus:bg-opacity-90  focus:ring-0 outline-none`}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...rest}
      />
      {!isValid && !isFocused && (
        <p className='text-red-500 text-xs mt-1'>
          {type === 'email'
            ? 'El correo electrónico no es válido'
            : 'El número de teléfono no es válido'}
        </p>
      )}
    </div>
  );
}

export default InputWithLabel;
