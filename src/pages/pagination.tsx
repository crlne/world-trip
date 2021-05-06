import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import { SliderItems } from "../components/SliderItems";

interface SliderItemProps {
    title: string
    subtitle: string
    image: string
  }

export default function Pagination({ title, subtitle, image }: SliderItemProps) {
    return (
        <>
        <Header />
       
        <SliderItems
            title="Europa"
            subtitle=""
            image="./pagination.png"
          />

          <Box maxWidth={600} height={211} ml="140" mt="20">
              <Text fontSize="1.5rem" fontWeight="400" lineHeight="36px" align="justify">
                A Europa é, por convenção, um dos seis 
                continentes do mundo. Compreendendo a 
                península ocidental da Eurásia, a Europa 
                geralmente divide-se da Ásia a leste pela 
                divisória de águas dos montes Urais, o rio Ural, o
                mar Cáspio, o Cáucaso, e o mar Negro a sudeste
              </Text>
          </Box>

          <Box maxWidth={490} height={90} ml="810" position="absolute" mt="-150">
              <Text fontSize="3rem" fontWeight="600" color="yellow" lineHeight="36px" align="center">
                  50
                  <Heading color="gray.500" fontSize="1.5rem" fontWeight="600" lineHeight="72px">
                      países
                  </Heading>
              </Text>
          </Box>

          <Box maxWidth={490} height={90} ml="760" mt="-150">
          <Text fontSize="3rem" fontWeight="600" color="yellow" lineHeight="36px" align="center">
                  60
                  <Heading color="gray.500" fontSize="1.5rem" fontWeight="600" lineHeight="72px">
                      línguas
                  </Heading>
              </Text>
          </Box>

          <Box  mt="-90" ml="1114" position="absolute">
          <Text fontSize="3rem" fontWeight="600" color="yellow" lineHeight="36px" align="center">
                  27
                  <Heading color="gray.500" fontSize="1.5rem" fontWeight="600" lineHeight="72px">
                      cidades +100  <Image src="./Info.svg" position="absolute" ml="162" mt="-45" align="center"  />
                  </Heading>
              </Text>
          </Box>
         



          



        
        </>
    )
}