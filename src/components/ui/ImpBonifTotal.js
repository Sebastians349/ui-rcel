import { Text, VStack } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
const ImpBonifTotal = () => {
  return (
    <VStack>
      <Text fontWeight="normal" color="purple.600" fontSize="xs">
        Imp. Bonif.
      </Text>
      <Input size="xs"></Input>
    </VStack>
  );
};

export default ImpBonifTotal;
