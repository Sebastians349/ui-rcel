import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  ChevronDownIcon,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import React from 'react';

const BtnUnidades = () => {
  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default BtnUnidades;
