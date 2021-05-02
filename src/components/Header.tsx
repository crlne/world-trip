import { Flex, Image } from "@chakra-ui/react";

 export default function Header() {
  return (
    <Flex as="header" width="100%" height="6.25rem" background="white" px="6">
      <Flex
        maxWidth="1160px"
        width="100%"
        mx="auto"
        align="center"
        justify="center"
      >
        <Image src="./Logo.png" alt="World Trip" />
      </Flex>
    </Flex>
  );
}
