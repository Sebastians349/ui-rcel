import React from 'react';
import { Button } from '@chakra-ui/button';
import { BsChevronDoubleRight } from 'react-icons/bs';

const BtnAdelante = () => {
  return (
    <Button variant="outline" rightIcon={<BsChevronDoubleRight />}>
      Adelante
    </Button>
  );
};

export default BtnAdelante;
