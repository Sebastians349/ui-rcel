import React from 'react';
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';

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
            <MenuItem>DNI / Libreta Electoral</MenuItem>
            <MenuItem>Carnet de Extranjero</MenuItem>
            <MenuItem>Registro Único de Contribuyentes</MenuItem>
            <MenuItem>Pasaporte</MenuItem>
            <MenuItem>Partida de Nacimiento</MenuItem>
            <MenuItem>Libreta de enrolamiento</MenuItem>
            <MenuItem>Otros...</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default BtnDni;
