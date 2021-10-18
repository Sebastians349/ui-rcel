import React from 'react';
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
const BtnConceptos = () => {
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
            <MenuItem>0001 - Productos</MenuItem>
            <MenuItem>0002 - Servicios </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
export default BtnConceptos;
