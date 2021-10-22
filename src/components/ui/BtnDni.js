import React from 'react';
import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuOptionGroup,
  MenuList,
  Button,
} from '@chakra-ui/react';

const BtnDni = () => {
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
              <MenuItemOption value="dni">
                DNI / Libreta Electoral
              </MenuItemOption>
              <MenuItemOption value="caex">Carnet de Extranjero</MenuItemOption>
              <MenuItemOption value="ruc">
                Registro Único de Contribuyentes
              </MenuItemOption>
              <MenuItemOption value="pas">Pasaporte</MenuItemOption>
              <MenuItemOption value="par">Partida de Nacimiento</MenuItemOption>
              <MenuItemOption value="lien">
                Libreta de enrolamiento
              </MenuItemOption>
              <MenuItemOption value="Otros">Otros...</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default BtnDni;
