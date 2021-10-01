import React from 'react';
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';

const BtnSiNo = () => {
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
          <MenuList fontSize="small" alignSelf="center">
            <MenuItem textAlign="center">Si</MenuItem>
            <MenuItem>No</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default BtnSiNo;
