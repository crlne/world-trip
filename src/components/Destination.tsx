import { Center, Flex, Text, WrapItem, Image  } from "@chakra-ui/react";

export default function Destination() {
    return (
        <Flex maxWidth={1140} align="center" m="auto" justify="center" direction="row">
            <WrapItem mt="90" position="absolute"> 
            <Center w="90px" h="0" bg="gray.500" opacity="0.5" border="2px" ml="20%">   
            </Center>
        </WrapItem>

        <Flex mt="252">
            <Text fontSize="2rem" align="center" fontWeight="500" lineHeight="54px">
                Vamos nessa?
                <Text>
                    Então escolha o continente
                </Text> 
            </Text>
        </Flex>
        </Flex>
    )

}