import HeroContact from '@/components/contact/heroContact'
import HomeContact from '@/components/home/homeContact/homeContact'
import Box from '@mui/material/Box'

export const metadata = {
  title: "Contacto | Orca Eventos Sociales",
  description: "Sitio web de Orca salón jardín, eventos sociales, fiestas de cumpleaños, XV años, bodas, banquetes, taquizas, carnitas, mixiotes, inflables, renta de salón, renta de eventos",
};

export default function RootContact() {
  return (
    <Box>
      <HeroContact/>
      <HomeContact/>
    </Box>
  )
}
