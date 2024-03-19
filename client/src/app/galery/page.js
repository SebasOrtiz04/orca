import Galery from '@/components/galery/Galery'
import { Title1 } from '@/components/utils/titles';
import {
    Container
} from '@mui/material';

export default function PageGalery() {
  return (
    <Container>
        <Title1 title='Galería'/>
      <Galery/>
    </Container>
  )
}
