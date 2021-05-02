import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    yellow: " #FFBA08",
    gray : {
      "500": "#47585B",
      "200": "#999999",
      "50": "#F5F8FA",
    }
  },
  fonts: {
    heading: 'Poppins',
    boyd: 'Poppins',
  },
   styles: {
     global: {
       body: {
         bg: 'white',
         color: '#47585B'
        }
      }
   }
})