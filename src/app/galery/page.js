import ImagesGallery from '@/components/admin/images/ImagesGalery';
import { Title1 } from '@/components/utils/titles';
import {
    Container
} from '@mui/material';

export const metadata = {
  title: "Galería de Fotos | Orca Eventos Sociales",
  description: "Galería de fotos de Orca salón jardín, eventos sociales, fiestas de cumpleaños, XV años, bodas, banquetes, taquizas, carnitas, mixiotes, inflables, renta de salón, renta de eventos",
};

export default function PageGalery() {
  return (
    <Container sx={{marginY:15, minHeight:'calc(70vh - 100px)'}}>
      <Title1 title='Galería'/>
      <ImagesGallery/>
    </Container>
  )
}
