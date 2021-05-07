import { Box, Badge, Image, Flex, HStack  } from "@chakra-ui/react";

export default function PaginationCities() {
    const property = {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      title: "Reino Unido",
      imageIcon: "./londres.svg"  
    }
    const cities = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Image of us",
        title: "Reino Unido",
        imageIcon: "./londres.svg"  
      }

    return (
     <Flex maxW="1160" height="700" flexDirection="row">
         <HStack spacing="50px"  position="absolute">
         
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
             PQP
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
            <Image src={property.imageIcon}  />
          </Box>
        </Box>  
      </Box>

      </HStack>

     </Flex>

     
 



    )

  }