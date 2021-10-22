import React from 'react';
import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuOptionGroup,
  MenuList,
  Button,
} from '@chakra-ui/react';

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
            <MenuOptionGroup title="Seleccione" type="radio">
              <MenuItemOption value="si">Si</MenuItemOption>
              <MenuItemOption value="no">No</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default BtnSiNo;
