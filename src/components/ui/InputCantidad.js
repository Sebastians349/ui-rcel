import { Input } from '@chakra-ui/input';
import { Text, VStack } from '@chakra-ui/layout';
const InputCantidad = () => {
  return (
    <VStack>
      <Text fontWeight="normal" color="purple.600" fontSize="xs">
        Cantidad
      </Text>
      <Input placeholder="1" size="xs"></Input>
    </VStack>
  );
};

export default InputCantidad;
