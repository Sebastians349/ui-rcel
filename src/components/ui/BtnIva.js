import React from 'react';
import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  Button,
  MenuOptionGroup,
} from '@chakra-ui/react';
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
            {isOpen ? 'Cerrar' : 'Abrir'}
          </MenuButton>
          <MenuList>
            <MenuOptionGroup title="Seleccione" type="radio">
              <MenuItemOption value="ra">
                IVA Responsable Inscripto
              </MenuItemOption>
              <MenuItemOption value="se">IVA Sujeto Exento</MenuItemOption>
              <MenuItemOption value="cf">Consumidor Final</MenuItemOption>
              <MenuItemOption value="rm">
                Responsable Monotributo
              </MenuItemOption>
              <MenuItemOption value="no">Sujeto No Categorizado</MenuItemOption>
              <MenuItemOption value="pe">Proveedor del Exterior</MenuItemOption>
              <MenuItemOption value="ce">Cliente del Exterior</MenuItemOption>
              <MenuItemOption value="ms">Monotributista Social</MenuItemOption>
              <MenuItemOption value="Otros">Otros...</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
export default BtnIva;
