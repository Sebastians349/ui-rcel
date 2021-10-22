import React from 'react';
import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuOptionGroup,
  MenuList,
  Button,
} from '@chakra-ui/react';

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
            <MenuOptionGroup title="Seleccione" type="radio">
              <MenuItemOption value="fis">Fiscal ---</MenuItemOption>
              <MenuItemOption value="com">Comercial ---</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default BtnDomic;
