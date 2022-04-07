import React from 'react';
import image from '../images/primenumbers.jpg';
import '../styles/Heading.css';

const Primenumber = () => {

  return (
    <div>
      <img src={image} alt="logo" className="image"/>
      <div className='headingText'> Prime Numbers </div>
    </div>
  )
};

export default Primenumber;