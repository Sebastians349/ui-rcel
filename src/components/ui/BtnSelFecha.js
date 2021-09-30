import { HStack } from '@chakra-ui/layout';
import React, { useState } from 'react';

const BtnSelFecha = () => {
  const dateChangeHandler = e => {
    setEnteredDate(e.target.value);
  };
  const [enteredDate, setEnteredDate] = useState('');
  return (
    <HStack>
      <input
        type="date"
        min="2012-01-01"
        max="2022-12-31"
        value={enteredDate}
        onChange={dateChangeHandler}
      />
    </HStack>
  );
};

export default BtnSelFecha;
