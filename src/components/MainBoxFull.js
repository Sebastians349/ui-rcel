import React from 'react';
import { HStack, VStack, Center, Wrap, WrapItem } from '@chakra-ui/layout';
import BtnComprobantes from './ui/BtnComprobantes';
import BtnConsultas from './ui/BtnConsultas';
import BtnGenerico from './ui/BtnGenerico';
import { FiFilePlus } from 'react-icons/fi';
import { FaRegFilePowerpoint } from 'react-icons/fa';
import { GiSmokeBomb, GiMilkCarton, GiCow, GiSugarCane } from 'react-icons/gi';
import BtnAdelante from '../components/ui/BtnAdelante';
import BtnAtras from '../components/ui/BtnAtras';

const MainBoxFull = props => {
  return (
    <Wrap>
      <WrapItem>
        <Center padding={4} boxShadow="md" borderRadius="xl">
          <VStack>
            <BtnComprobantes />
            <BtnConsultas />
            <BtnGenerico
              icon={<FiFilePlus />}
              name="Datos Adicionales del comprobante"
              hacia="/PtosDeVenta"
            />
            <BtnGenerico
              icon={<FaRegFilePowerpoint />}
              name="ABM - Puntos de venta"
            />
            <BtnGenerico
              icon={<GiSmokeBomb />}
              name="Tabaco - Liquidación electrónica"
            />
            <BtnGenerico
              icon={<GiMilkCarton />}
              name="Lechería - Liquidación electrónica"
            />
            <BtnGenerico
              icon={<GiSugarCane />}
              name="Azúcar - Liquidación electrónica"
            />
            <BtnGenerico
              icon={<GiCow />}
              name="Hacienda - Liquidación electrónica"
            />
            <HStack justify="space-evenly" p={3}>
              <BtnAtras hacia="/home" />
              <BtnAdelante hacia="PtosDeVenta" />
            </HStack>
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default MainBoxFull;
