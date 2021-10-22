import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { Stack, HStack, VStack, Center } from '@chakra-ui/layout';
import BtnAdelante from '../components/ui/BtnAdelante';
import BtnAtras from '../components/ui/BtnAtras';
import OperacionHeader from '../components/ui/OperacionHeader';
import OperacionFilaInputs from '../components/ui/OperacionFilaInputs';

const DatosOperacion = () => {
  const [filaInputs, setfilaInputs] = useState([]);

  const addFilaInputs = () => {
    setfilaInputs(filaInputs => [...filaInputs, <OperacionFilaInputs />]);
  };
  // TODO FALTA ELIMINAR Y GUARDAR INPUTS.
  return (
    <Stack
      direction={['column', 'row']}
      alignItems="center"
      justifyContent="center"
      height="95vh"
    >
      <VStack boxShadow="md" borderRadius="xl" m={5}>
        <OperacionHeader />
        <OperacionFilaInputs padding={1} />
        <VStack p={1}>
          {filaInputs.map((item, i) => (
            <HStack key={i}>{item}</HStack>
          ))}
        </VStack>
        <Center p={1}>
          <Button size="xs" variant="outline" onClick={addFilaInputs}>
            Agregar línea descripción
          </Button>
        </Center>
        <HStack justify="space-evenly" p={3}>
          <BtnAtras hacia="/DatosReceptor" />
          <BtnAdelante hacia="/DatosConfirma" />
        </HStack>
      </VStack>
    </Stack>
  );
};

export default DatosOperacion;
