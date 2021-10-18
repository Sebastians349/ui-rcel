import React from 'react';
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
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
            <MenuItem>IVA Responsable Inscripto</MenuItem>
            <MenuItem>IVA Sujeto Exento</MenuItem>
            <MenuItem>Consumidor Final</MenuItem>
            <MenuItem>Responsable Monotributo</MenuItem>
            <MenuItem>Sujeto No Categorizado</MenuItem>
            <MenuItem>Proveedor del Exterior</MenuItem>
            <MenuItem>Cliente del Exterior</MenuItem>
            <MenuItem>Monotributista Social</MenuItem>
            <MenuItem>Otros...</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
export default BtnIva;
