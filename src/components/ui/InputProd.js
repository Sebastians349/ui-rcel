import { Input } from '@chakra-ui/input';
import { Text, VStack } from '@chakra-ui/layout';
const InputProd = () => {
  return (
    <VStack>
      <Text fontWeight="normal" color="purple.600" fontSize="xs">
        Producto/Servicio
      </Text>
      <Input size="xs"></Input>
    </VStack>
  );
};

export default InputProd;
