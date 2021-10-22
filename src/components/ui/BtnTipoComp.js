import React from 'react';
import {
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  MenuOptionGroup,
  MenuItemOption,
} from '@chakra-ui/menu';
import { Button } from '@chakra-ui/button';
const BtnTipoComp = () => {
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
              <MenuItemOption value="factura">0001- Factura</MenuItemOption>
              <MenuItemOption value="notacred">
                0002- Nota de Crédito
              </MenuItemOption>
              <MenuItemOption value="notadeb">
                0003- Nota de Débito
              </MenuItemOption>
              <MenuItemOption
                value="otros"
                onClick={() =>
                  alert('Debe seleccionar una opción de las anteriores')
                }
              >
                Otros...{' '}
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default BtnTipoComp;
