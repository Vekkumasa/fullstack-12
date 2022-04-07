import React, { useState } from 'react';
import apiClient from '../util/axios';
import { PrimeSum } from '../types';
import Button from '../Components/Button';
import InputField from '../Components/InputField';

import '../styles/MultipleForm.css'

const MultipleInteger = () => {
  const [ number, setNumber ] = useState<string>('');
  const [ numberArray, setNumberArray ] = useState<number[]>([]);
  const [ result, setResult ] = useState<PrimeSum | null>();

  const enterValue = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNumberArray(numberArray.concat(parseInt(number)));
  };

  const submitForm = async () => {
    const result = await apiClient.post<PrimeSum>(`/prime/multipleIntegers`, { numberArray });
    setResult(result.data);
    setNumberArray([]);
  };

  const renderEnteredValues = () => {
    return <div className='enteredValues'>{`Entered values: ${numberArray.join(", ")}`}</div>
  };

  const renderResult = () => {
    if (result) {
      return (
        <div className='multipleResult'>
          <div>{`Result: Sum: ${result?.sum}, ${result?.isPrime ? "Number you entered is a prime number" : "Number you entered is not a prime number"}`}</div>
        </div>
      );
    } else {
      return (
        <div className='multipleResult'> Result: </div>
      );
    }
  };

  return (
    <div className="multipleBox">
      <div className='multipleInfo'> Enter multiple integers to calculate the sum and find out if the sum is a prime number </div>
      <form onSubmit={enterValue}>
        <InputField id='addValue' number={number} cb={setNumber} />
        <Button id='addValueButton' children='Add value' />
        <Button id='multipleSubmit' children='Submit' onClick={() => submitForm()}/>
      </form>
      {renderEnteredValues()}
      {renderResult()} 
    </div>
  );
};

export default MultipleInteger;