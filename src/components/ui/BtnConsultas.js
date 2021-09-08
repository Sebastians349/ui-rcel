import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { GoSearch } from 'react-icons/go';

const BtnConsultas = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Button
        width="300px"
        textAlign="left"
        leftIcon={<GoSearch />}
        colorScheme="gray"
        variant="outline"
        boxShadow="sm"
        fontSize="sm"
      >
        Consultas
      </Button>
    </Stack>
  );
};

export default BtnConsultas;
