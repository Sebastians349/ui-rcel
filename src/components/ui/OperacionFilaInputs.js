import React from 'react';
import Inputcodigo from './InputCodigo';
import { Flex, Stack } from '@chakra-ui/layout';
import InputProd from './InputProd';
import BtnElimina from './BtnElimina';
import InputCantidad from './InputCantidad';
import InputMedida from './InputMedida';
import InputPrecioU from './InputPrecioU';
import ImpBonif from './ImpBonif';
import ImpBonifTotal from './ImpBonifTotal';
import ImpSubTotal from './ImpSubTotal';

const OperacionFilaInputs = () => {
  return (
    <Stack direction={['column', 'row']}>
      <Inputcodigo />;
      <InputProd />
      <InputCantidad />
      <InputMedida />
      <InputPrecioU />
      <ImpBonif />
      <ImpBonifTotal />
      <ImpSubTotal />
      <Flex alignSelf="flex-end">
        <BtnElimina />
      </Flex>
    </Stack>
  );
};

export default OperacionFilaInputs;
