import ImagesGallery from '@/components/admin/images/ImagesGalery';
import Galery from '@/components/galery/Galery'
import { Title1 } from '@/components/utils/titles';
import {
    Container
} from '@mui/material';

export default function PageGalery() {
  return (
    <Container sx={{marginY:15}}>
      <Title1 title='Galería'/>
      <ImagesGallery/>
    </Container>
  )
}
