import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { GoNote } from 'react-icons/go';
import { Link as ReachLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const BtnComprobantes = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Button
        width="300px"
        leftIcon={<GoNote />}
        colorScheme="gray"
        variant="outline"
        boxShadow="xs"
        fontSize="sm"
      >
        <Link as={ReachLink} to="/PtosDeVenta">
          Generar comprobantes
        </Link>
      </Button>
    </Stack>
  );
};

export default BtnComprobantes;
