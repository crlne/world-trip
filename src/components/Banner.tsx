import { Flex, Image } from "@chakra-ui/react";

export default function Banner() {
    return (
        <Flex maxWidth={1480}>
            <Flex width={1440} height={368}>
            <Image src="./Banner.png" alt="banner pagina inicial" />

            </Flex>

        </Flex>
    )
}