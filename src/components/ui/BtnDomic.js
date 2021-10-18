import React from 'react';
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';

const BtnDomic = () => {
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
            <MenuItem>Fiscal ---</MenuItem>
            <MenuItem>Comercial ---</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default BtnDomic;
