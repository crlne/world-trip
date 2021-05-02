import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";


export default function Navbar() {
    return (
        <Flex width={1160} height={145} left={140} position="absolute">
            <Image src="./Vector.svg" alt="vida norturna" w="85" height="85" />

            <Image src="./Praia.svg" ml="20" alt="praia" w="85" height="85" />

            <Image src="./Moderno.svg" ml="20" alt="moderno" w="85" height="85" />

            <Image src="./museum 1.svg" ml="20" alt="clássico" w="85" height="85" />

            <Image src="./earth 1.svg" ml="20" alt="saiba mais" w="85" height="85" />




        </Flex>

    )
}