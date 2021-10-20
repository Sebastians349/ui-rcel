import React from 'react';
import { Button } from '@chakra-ui/button';

const BtnElimina = () => {
  const eliminaFila = (id) => console.log('anda');

  return (
    <Button variant="outline" size="xs" onClick={eliminaFila}>
      X
    </Button>
  );
};

export default BtnElimina;
