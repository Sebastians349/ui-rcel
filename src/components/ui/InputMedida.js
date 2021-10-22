import { Button } from '@chakra-ui/button';
import { Text, VStack } from '@chakra-ui/layout';
import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/menu';
const InputMedida = () => {
  return (
    <VStack>
      <Text fontWeight="normal" color="purple.600" fontSize="xs">
        U.Med.
      </Text>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              colorScheme="blue"
              variant="outline"
              size="xs"
            >
              {isOpen ? 'Cerrar' : '...Abrir'}
            </MenuButton>

            <MenuList>
              <MenuOptionGroup title="Seleccione" type="radio">
                <MenuItemOption value="kg">Kilogramos</MenuItemOption>
                <MenuItemOption value="mt">Metros</MenuItemOption>
                <MenuItemOption value="mt2">Mts Cuad.</MenuItemOption>
                <MenuItemOption value="mt3">Mts Cub.</MenuItemOption>
                <MenuItemOption value="lt">Litros</MenuItemOption>
                <MenuItemOption value="uni">Unidades</MenuItemOption>
                <MenuItemOption value="pares">Pares</MenuItemOption>
                <MenuItemOption value="doc">Docenas</MenuItemOption>
                <MenuItemOption value="quil">Quilates</MenuItemOption>
                <MenuItemOption value="grs">Gramos</MenuItemOption>
                <MenuItemOption value="mill">Millares</MenuItemOption>
                <MenuItemOption value="hct">Hectolitros</MenuItemOption>
                <MenuItemOption value="uia">Uiacthor</MenuItemOption>
                <MenuItemOption value="bue">
                  La opción de arriba es excelente
                </MenuItemOption>
                <MenuItemOption value="bue2">Basta por favor</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </>
        )}
      </Menu>
    </VStack>
  );
};

export default InputMedida;
