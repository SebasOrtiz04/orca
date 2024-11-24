import Carrucel from '@/components/home/rootCarrucel/rootCarrucel';
import Services from '@/components/home/services/services';
import React from 'react'
import {Box} from '@mui/material'
import { VideoPaneo } from '@/components/home/videoPaneo/videoPaneo';
import HomeContact from '@/components/home/homeContact/homeContact';
import HomeGaleria from '@/components/home/homeGaleria/homeGaleria';

export const metadata = {
  title: "Inicio | Orca Eventos Sociales",
  description: "Sitio web de Orca salón jardín, eventos sociales, fiestas de cumpleaños, XV años, bodas, banquetes, taquizas, carnitas, mixiotes, inflables, renta de salón, renta de eventos",
};

export default function Home() {
  
  return (
    <Box sx={{maxWidth:'100vw',overflowX:'hidden'}}>
      <Carrucel/>
      <Services/>
      <VideoPaneo/>
      <HomeGaleria/>
      <HomeContact/>
    </Box>
  )
}
