import { Input } from '@chakra-ui/input';
import { Text, VStack } from '@chakra-ui/layout';
const InputMedida = () => {
  return (
    <VStack>
      <Text fontWeight="normal" color="purple.600" fontSize="xs">
        U. Medida
      </Text>
      <Input size="xs"></Input>
    </VStack>
  );
};

export default InputMedida;
