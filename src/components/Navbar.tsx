import { Image, Flex, Heading } from "@chakra-ui/react";


export default function Navbar() {
    return (
        <Flex width={1160} height={145} left={140} position="absolute" mt="50">
            <Image src="./Vector.svg" alt="vida norturna" w="85" height="85" />
            <Heading size="1.5rem" mt="90" position="absolute" mx="-1%">vida noturna</Heading>

            <Image src="./Praia.svg" ml="13%" alt="praia" w="85" height="85" />
            <Heading size="1.5" mt="90" position="absolute" ml="22%">praia</Heading>
            
            <Image src="./Moderno.svg" ml="19%" alt="moderno" w="85" height="85" />
            <Heading size="1.5" mt="90" position="absolute" ml="46%">moderno</Heading>

            <Image src="./museum 1.svg" ml="15%" alt="clássico" w="85" height="85" />
            <Heading size="1.5" mt="90" position="absolute" ml="67%">clássico</Heading>

            <Image src="./earth 1.svg" ml="16%" alt="saiba mais" w="85" height="85" />
            <Heading size="1.5" mt="90" position="absolute" ml="91%">e mais...</Heading>

        </Flex>

    )
}