import React from 'react';
import { Link } from '@chakra-ui/layout';
import { Button, Stack } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const BtnGenerico = props => {
  return (
    <Stack direction="row" spacing={4}>
      <Button
        width="300px"
        textAlign="left"
        leftIcon={props.icon}
        colorScheme="gray"
        variant="outline"
        boxShadow="xs"
        fontSize="sm"
      >
        <Link as={ReachLink} to="/PtosDeVenta">
          {props.name}
        </Link>
      </Button>
    </Stack>
  );
};

export default BtnGenerico;
