import React from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  MenuItemOption,
  MenuOptionGroup,
} from '@chakra-ui/react';
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
            <MenuOptionGroup title="Seleccione" type="radio">
              <MenuItemOption value="prod">0001 - Productos</MenuItemOption>
              <MenuItemOption value="serv">0002 - Servicios </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
export default BtnConceptos;
