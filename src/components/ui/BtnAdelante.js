import React from 'react';
import { Button } from '@chakra-ui/button';
import { BsChevronDoubleRight } from 'react-icons/bs';

const BtnAdelante = () => {
  return (
    <Button variant="outline" rightIcon={<BsChevronDoubleRight />}>
      Continuar
    </Button>
  );
};

export default BtnAdelante;
