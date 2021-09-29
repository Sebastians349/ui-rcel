import { Button } from '@chakra-ui/button';
import React from 'react';
// import { ChevronLeftIcon } from '@chakra-ui/icons';
import { BsChevronDoubleLeft } from 'react-icons/bs';

const BtnAtras = () => {
  return (
    <Button variant="outline" leftIcon={<BsChevronDoubleLeft />}>
      Volver
    </Button>
  );
};

export default BtnAtras;
