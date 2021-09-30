import React from 'react';
import { Button } from '@chakra-ui/button';
import { Link } from '@chakra-ui/layout';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { Link as ReachLink } from 'react-router-dom';

const BtnAdelante = () => {
  return (
    <Button variant="outline" rightIcon={<BsChevronDoubleRight />}>
      <Link as={ReachLink} to="/DatosEmision">
        Continuar
      </Link>
    </Button>
  );
};

export default BtnAdelante;
