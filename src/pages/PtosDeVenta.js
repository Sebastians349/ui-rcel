import React from 'react';
import { Container, Text } from '@chakra-ui/layout';
import {
  Wrap,
  Center,
  VStack,
  Heading,
  WrapItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  HStack,
} from '@chakra-ui/react';

const PtosDeVenta = () => {
  return (
    <Wrap>
      <WrapItem>
        <Center w="400px" h="280px" boxShadow="xl" borderRadius="xl">
          <VStack>
            <Container maxW="sm" centerContent>
              <Heading
                fontSize="xx-small"
                fontWeight="bold"
                textTransform="uppercase"
                color="purple.600"
              >
                Puntos de Venta y tipos de comprobantes habilitados para
                impresión
              </Heading>
            </Container>
            <HStack>
              <Text
                textTransform="uppercase"
                fontWeight="semibold"
                fontSize="small"
              >
                punto de venta a utilizar
              </Text>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton isActive={isOpen}>
                      {isOpen ? 'Cerrar' : 'Abrir'}
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem onClick={() => alert('Kagebunshin')}>
                        Create a Copy
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>{' '}
            </HStack>
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default PtosDeVenta;
