import { Link } from 'react-router-dom';
import { useState } from 'react';

function Button({ children, disabled, to, type, onClick }) {
  const base = `
inline-block 
font-semibold 
tracking-wide 
uppercase 
transition 
duration-300 
text-violet-50 
hover:bg-green-700 
disabled:cursor-not-allowed
focus:outline-none
`;

  const style = {
    primary: base + 'px-4 text-sm py-3 rounded-lg md:px-6 md:py-4 bg-blue-700 ',
    round:
      base +
      'px-2.5 py-1 md:px-3 md:py-1.5 bg-yellow-600 hover:bg-red-700 rounded-full  ',
    small:
      base +
      'px-4 py-2 md:px-5 md:py-2.5 bg-yellow-800 hover:bg-red-700 rounded-full  ',
  };

  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={style[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
