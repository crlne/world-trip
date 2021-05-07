import { Box, Badge, Image, Flex, HStack, SimpleGrid  } from "@chakra-ui/react";

export default function PaginationCities() {
    const property = {
      imageUrl: "./londres.png",
      imageAlt: "Rear view of modern home with pool",
      title: "Reino Unido",
      imageIcon: "./londres.svg"  
    }
    const cities = {
        imageUrl: "./paris.png",
        imageAlt: "View of street paris",
        title: "França",
        imageIcon: "./banholanda.svg"  
      }

      const roma = {
        imageUrl: "./roma.png",
        imageAlt: "Bridge Roma",
        title: "Itália",
        imageIcon: "./banfranca.svg" 
      }

      const praga = {
        imageUrl: "./praga.png",
        imageAlt: "View of the city", 
        title: "Republica Tcheca",
        imageIcon: "./banrep.svg" 
      }

      const holanda = {
        imageUrl: "./amsterda.png",
        imageAlt: "View of the city",
        title: "Holanda",
        imageIcon: "./banitalia.svg" 
      }

    return (
     <Flex maxW={1160} height="700">
       
       
       <SimpleGrid columns={4} spacing={10}>
        <Box maxW="256" h="279" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={property.imageUrl} alt={property.imageAlt} />

        <Box p="6" >
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" fontSize="1rem" fontWeight="600">
             Londres
            </Badge>     
          </Box>
  
          <Box
            mt="2"
            fontWeight="500"
            as="h4"
            lineHeight="26px"
            isTruncated
            color="gray.200"
            fontSize="1rem"
          >
            {property.title}
          </Box>

          <Box d="flex" alignItems="center" position="absolute" w="30" h="30" ml="40" mt="-50" py="2">
            <Image src={property.imageIcon}  />
          </Box>
        </Box>  
      </Box>

      <Box maxW="256" h="279" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={cities.imageUrl} alt={cities.imageAlt} />
        <Box p="6" >
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" fontSize="1rem" fontWeight="600">
             Paris
            </Badge>   
          </Box>
          <Box
            mt="2"
            fontWeight="500"
            as="h4"
            lineHeight="26px"
            isTruncated
            color="gray.200"
            fontSize="1rem"
          >
            {cities.title}
          </Box>
          <Box d="flex" alignItems="center" position="absolute" w="30" h="30" ml="40" 
           mt="-50" py="2">
            <Image src={cities.imageIcon}  />
          </Box>
        </Box>  
      </Box>

      <Box maxW="256" h="279" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={roma.imageUrl} alt={roma.imageAlt} />
        <Box p="6" >
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" fontSize="1rem" fontWeight="600">
             Roma
            </Badge>   
          </Box>
          <Box
            mt="2"
            fontWeight="500"
            as="h4"
            lineHeight="26px"
            isTruncated
            color="gray.200"
            fontSize="1rem"
          >
            {roma.title}
          </Box>
          <Box d="flex" alignItems="center" position="absolute" w="30" h="30" ml="40" 
           mt="-50" py="2">
            <Image src={roma.imageIcon}  />
          </Box>
        </Box>  
      </Box>


      <Box maxW="256" h="279" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={praga.imageUrl} alt={praga.imageAlt} />
        <Box p="6" >
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" fontSize="1rem" fontWeight="600">
             Praga
            </Badge>   
          </Box>
          <Box
            mt="2"
            fontWeight="500"
            as="h4"
            lineHeight="26px"
            isTruncated
            color="gray.200"
            fontSize="1rem"
          >
            {praga.title}
          </Box>
          <Box d="flex" alignItems="center" position="absolute" w="30" h="30" ml="40" 
           mt="-50" py="2">
            <Image src={praga.imageIcon}  />
          </Box>
        </Box>  
      </Box>

      <Box maxW="256" h="279" borderWidth="1px" borderRadius="lg" overflow="hidden">  
        <Image src={holanda.imageUrl} alt={holanda.imageAlt} />
        <Box p="6" >
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" fontSize="1rem" fontWeight="600">
             Amsterdã
            </Badge>   
          </Box>
          <Box
            mt="2"
            fontWeight="500"
            as="h4"
            lineHeight="26px"
            isTruncated
            color="gray.200"
            fontSize="1rem"
          >
            {holanda.title}
          </Box>
          <Box d="flex" alignItems="center" position="absolute" w="30" h="30" ml="40" 
           mt="-50" py="2">
            <Image src={holanda.imageIcon}  />
          </Box>
        </Box>  
      </Box>
    
      </SimpleGrid>
     </Flex>

     
 



    )

  }