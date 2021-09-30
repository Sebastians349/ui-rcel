import React from 'react';
import { Link } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Link as ReachLink } from 'react-router-dom';
import { BsChevronDoubleLeft } from 'react-icons/bs';

const BtnAtras = props => {
  return (
    <Button variant="outline" leftIcon={<BsChevronDoubleLeft />}>
      <Link as={ReachLink} to={props.hacia}>
        Volver
      </Link>
    </Button>
  );
};

export default BtnAtras;
