import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { GoNote } from 'react-icons/go';

const BtnComprobantes = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Button
        leftIcon={<GoNote />}
        colorScheme="gray"
        variant="outline"
        boxShadow="xs"
        fontSize="sm"
      >
        Generar comprobantes
      </Button>
    </Stack>
  );
};

export default BtnComprobantes;
