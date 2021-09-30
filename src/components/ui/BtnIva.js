import React from 'react';
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
const BtnIva = () => {
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
            {isOpen ? 'Cerrar' : '... Abrir'}
          </MenuButton>
          <MenuList>
            <MenuItem>0001- Dirección</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
export default BtnIva;
