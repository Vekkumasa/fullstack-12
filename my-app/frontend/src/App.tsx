import React from 'react';

import Heading from './Components/Heading';
import SingleIntegerForm from './Forms/SingleIntegerForm';
import MultipleIntegerForm from './Forms/MultipleIntegerForm';

console.log(process.env.REACT_APP_BACKEND_URL);

const App = () => {
  return (
    <div>
      <Heading />
      <SingleIntegerForm />
      <MultipleIntegerForm />
    </div>
  );
}

export default App;
