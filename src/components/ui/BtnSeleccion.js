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
            size="xs"
          >
            {isOpen ? 'Cerrar' : 'Abrir'}
          </MenuButton>
          <MenuList>
            <MenuItem>0001- Pasaje Kdorna 1998</MenuItem>
            <MenuItem>0002- Malabia 1488</MenuItem>
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
