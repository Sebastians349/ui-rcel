import React from 'react';
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
const BtnSeleccion = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            colorScheme="teal"
            variant="outline"
            size="sm"
          >
            {isOpen ? 'Cerrar' : '... Abrir'}
          </MenuButton>
          <MenuList>
            <MenuItem>0001- Dirección</MenuItem>
            <MenuItem onClick={() => alert('No Autorizado')}>
              Nuevo punto de venta
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
export default BtnSeleccion;
