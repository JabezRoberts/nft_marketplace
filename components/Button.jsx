import React from 'react';

const primaryBtn = 'nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:py-4 minlg:px-8 font-poppins font-semibold text-white';
const outlineBtn = 'border border-nft-red-violet bg-transparent font-poppins font-semibold text-sm minlg:text-lg py-2 px-6 minlg:py-4 minlg:px-8';

const Button = ({ btnName, classStyles, handleClick, btnType }) => (
  <button
    type="button"
    className={btnType === 'primary' ? `${primaryBtn} ${classStyles}` : `${outlineBtn} ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;
