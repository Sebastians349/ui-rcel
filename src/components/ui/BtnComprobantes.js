import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { GoNote } from 'react-icons/go';
import { Link as ReachLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const BtnComprobantes = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Link as={ReachLink} to="/PtosDeVenta">
        <Button
          size="xs"
          leftIcon={<GoNote />}
          colorScheme="gray"
          variant="outline"
          boxShadow="xs"
          fontSize="sm"
        >
          Generar comprobantes
        </Button>
      </Link>
    </Stack>
  );
};

export default BtnComprobantes;
