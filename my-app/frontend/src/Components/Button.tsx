import React from 'react';

import '../styles/Input.css';

interface props {
  onClick?: () => Promise<void>,
  id: string,
  children: React.ReactChild
}

const Button = ({onClick, id, children}: props, ) => {
  return (
    <button id={id} className='button' type="submit" onClick={onClick}> {children} </button>
  )
}

export default Button;