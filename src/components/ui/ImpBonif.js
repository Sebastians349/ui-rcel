import { Text, VStack } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
const ImpBonif = () => {
  return (
    <VStack>
      <Text fontWeight="normal" color="purple.600" fontSize="xs">
        % Bonif.
      </Text>
      {/* cambiar input  */}
      <Input size="xs"></Input>
    </VStack>
  );
};

export default ImpBonif;
