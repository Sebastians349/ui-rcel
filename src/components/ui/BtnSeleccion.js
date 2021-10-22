import React from 'react';
import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  Button,
  MenuOptionGroup,
} from '@chakra-ui/react';
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
            <MenuOptionGroup title="Seleccione" type="radio">
              <MenuItemOption value="dir1">
                0001- Pasaje Kdorna 1998
              </MenuItemOption>
              <MenuItemOption value="dir2">0002- Malabia 1488</MenuItemOption>
              <MenuItemOption
                value="nuevo"
                onClick={() => alert('No Autorizado')}
              >
                Nuevo punto de venta
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
export default BtnSeleccion;
