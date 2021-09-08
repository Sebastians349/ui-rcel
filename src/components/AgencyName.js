import React from 'react';
import { Text } from '@chakra-ui/layout';

const numeroRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const numeroAgencia = numeroRandom(0, 9);

const AgencyName = () => {
  // FIX fetchearlo

  return <Text color="gray.600">Agencia Nro {numeroAgencia}</Text>;
};

export default AgencyName;
