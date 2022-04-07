import React from 'react';

import '../styles/Input.css';

interface InputProps {
  id: string,
  number: string,
  cb: (value: React.SetStateAction<string>) => void
}

const InputField = ({ id, number, cb }: InputProps) => {
  return (
    <input
      id={id}
      value={number}
      onChange={(e) => cb(e.target.value)}
      type="number"
      className="field"
    />
  )
}

export default InputField;