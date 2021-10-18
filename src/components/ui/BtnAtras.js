import React from 'react';
import { Link } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Link as ReachLink } from 'react-router-dom';
import { BsChevronDoubleLeft } from 'react-icons/bs';

const BtnAtras = props => {
  return (
    <Link as={ReachLink} to={props.hacia}>
      <Button size="sm" variant="outline" leftIcon={<BsChevronDoubleLeft />}>
        Volver
      </Button>
    </Link>
  );
};

export default BtnAtras;
