import React from 'react';
import MainBox from '../components/MainBox';
import UserBox from '../components/UserBox';
import { Stack } from '@chakra-ui/layout';
const Seleccion = () => {
  return (
    <Stack
      direction={['column', 'row']}
      spacing="15px"
      justifyContent="space-evenly"
      alignItems="center"
      height="80vh"
    >
      <UserBox />
      <MainBox />
    </Stack>
  );
};

export default Seleccion;
