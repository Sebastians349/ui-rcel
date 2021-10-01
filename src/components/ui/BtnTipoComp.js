import React from 'react';
import { MenuButton, Menu, MenuList, MenuItem } from '@chakra-ui/menu';
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
            <MenuItem>0001- Factura</MenuItem>
            <MenuItem>0002- Nota de Crédito</MenuItem>
            <MenuItem>0003- Nota de Débito</MenuItem>
            <MenuItem
              onClick={() =>
                alert('Debe seleccionar una opción de las anteriores')
              }
            >
              Otros...{' '}
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default BtnTipoComp;
