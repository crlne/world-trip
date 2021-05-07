import { Box, Flex, Heading, Image, Text, HStack } from "@chakra-ui/react";
import Header from "../components/Header";
import { SliderItems } from "../components/SliderItems";
import PaginationCities  from "../components/PaginationCities";

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
            title=""
            subtitle=""
            image="./pagination.png"
          />
          <Text mt="-20" mx="150" fontSize="3rem" fontWeight="600" color="gray.50">Europa</Text>

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

          <Flex maxW="1160" height="700" ml="140" mt="150" flexDirection="column">  
            <Box maxW="246" height="54" position="absolute">
              <Text fontSize="2rem" fontWeight="500" lineHeght="54px" align="right" color="gray.500">
                  Cidades +100
                  </Text>
              </Box>

              <Box maxW="1160" height="700" flexDirection="row" mt="20">       
                <PaginationCities />
              </Box>
  
           
           
          </Flex>

        </>
    )
}