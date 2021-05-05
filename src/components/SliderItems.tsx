import { Flex, Heading } from '@chakra-ui/react'

interface SliderItemProps {
  title: string
  subtitle: string
  image: string
}

export function SliderItems({ title, subtitle, image }: SliderItemProps) {
  return (
    <Flex
      height={[250, 450]}
         
      justify="center"
      align="center"
      direction="column"
      position="relative"
      background="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35))"
      
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1
      }}
    >
      <Heading fontSize="3rem" color="#F5F8FA">
        {title}
      </Heading>
      
      <Heading mt="4" fontSize="1.5rem" color="#DADADA">
        {subtitle}
      </Heading>
    </Flex>
  )
}