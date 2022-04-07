import React, { useState } from 'react';
import apiClient from '../util/axios';
import Button from '../Components/Button';
import InputField from '../Components/InputField';

import '../styles/SingleForm.css';

const SingleInteger = () => {
  const [ number, setNumber ] = useState<string>('');
  const [ resultString, setResultString ] = useState<string>('');
  
  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await apiClient.post<boolean>(`/prime/singleInteger`, { number: parseInt(number) });
    if (result.data) {
      setResultString("Number you entered is a prime number")
    } else {
      setResultString("Number you entered is not a prime number")
    }
  }

  const renderResult = () => {
    return (
      <div className='singleResult'>
        {`Result: ${resultString}`}
      </div>
    )
  }

  return (
    <div className='singleBox'>
      <div className='singleInfo'> Enter single integer to see if it's a prime number </div>
      <form onSubmit={submitForm}>
        <InputField id="singleInteger" cb={setNumber} number={number} />
        <Button id="singleSubmit"> Submit </Button>
      </form>   
      
      {renderResult()}  
    </div>
  );
};

export default SingleInteger;