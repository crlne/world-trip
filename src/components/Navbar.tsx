import { Image, Flex } from "@chakra-ui/react";


export default function Navbar() {
    return (
        <Flex width={1160} height={145} left={140} position="absolute" mt="50">
            <Image src="./Vector.svg" alt="vida norturna" w="85" height="85" />

            <Image src="./Praia.svg" ml="13%" alt="praia" w="85" height="85" />

            <Image src="./Moderno.svg" ml="15%" alt="moderno" w="85" height="85" />

            <Image src="./museum 1.svg" ml="15%" alt="clássico" w="85" height="85" />

            <Image src="./earth 1.svg" ml="16%" alt="saiba mais" w="85" height="85" />

        </Flex>

    )
}