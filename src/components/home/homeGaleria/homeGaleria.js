'use client'

import {ImageList, Container, ImageListItem} from '@mui/material';
import ImageFullScreen from '@/components/utils/imageFullScreen';
import { homeImages } from '@/lib/data/initialStates/homeGaleria';
import {useDispatch}  from 'react-redux';
import { OpenImage } from '@/redux/actions/FullImageActions';
import { Title1 } from '@/components/utils/titles';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function HomeGaleria() {

  const dispatch = useDispatch();

  return (
    <Container>

      <Title1 title='Galería' />
      <ImageFullScreen
      list={homeImages}
      />        
        <ImageList
        variant="quilted"
        cols={4}
        rowHeight={121}
        >
        {homeImages.map((item,key) => (
            <ImageListItem key={key} cols={item.cols || 1} rows={item.rows || 1} >
            <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                onClick={() => dispatch(OpenImage({list:homeImages,selected:key}))}
            />
            </ImageListItem>
        ))}
        </ImageList>
    </Container>
  );
}

