import React from 'react';
import { Button } from '@chakra-ui/button';

const BtnElimina = () => {
  // CHECK TODO FALTA IMPLEMENTAR EL FILTER()
  const eliminaFila = id => console.log(id);

  return (
    <Button variant="outline" size="xs" onClick={eliminaFila}>
      X
    </Button>
  );
};

export default BtnElimina;
