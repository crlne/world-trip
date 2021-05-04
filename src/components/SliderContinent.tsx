
import { Box, Image, Flex  } from '@chakra-ui/react'
import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/components/navigation/navigation.min.css"
import "swiper/swiper.min.css";
import { SliderItems } from './SliderItems'

SwiperCore.use([Navigation, Pagination])


export default function SliderContinent() {
    return (
        <Box mt="3.25rem" mb="2.5rem" maxHeight="450px" width="1240px">
        <Swiper navigation grabCursor className="mySwiper" pagination={{ clickable: true }}> 

        <SwiperSlide>
          <SliderItems
            title="Europa"
            subtitle="O continente mais antigo"
            image="https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1070&q=80"
          />
        </SwiperSlide> 

        <SwiperSlide>
          <SliderItems
            title="Oceania"
            subtitle="Sydney, a maior e mais antiga cidade australiana"
            image="https://images.unsplash.com/photo-1513343987712-5da15ea2a9bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItems
            title="Ásia"
            subtitle="O berço de todas as principais religiões do mundo"
            image="https://images.unsplash.com/photo-1547211453-719b1bdec5f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItems
            title="América do Norte"
            subtitle="Golden Gate Bridge, San Francisco"
            image="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItems
            title="América do Sul"
            subtitle="Baía de Guanabara, Rio de Janeiro"
            image="https://images.unsplash.com/photo-1552428386-840770ff7588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItems
            title=" Antártida"
            subtitle="Conheça o continente mais frio da Terra"
            image="https://global.hurtigruten.com/globalassets/photos/destinations/antarctica/placesdestinations/south-georgia/2500x1250-elephant-island_chinstrap-penguins_dominic-barrington.jpg?width=1900&height=950&center=0.51,0.54&transform=DownResizeCrop"
          />
        </SwiperSlide>
   
      </Swiper>
        </Box>
      )
    
}