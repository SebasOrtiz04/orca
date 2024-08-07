import { useState } from 'react';
import { homeImages } from "@/lib/data/initialStates/homeGaleria";
import { Box, ImageList, ImageListItem } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ServiceHero = () => {
  const [loaded, setLoaded] = useState(Array(homeImages.length).fill(false));

  const handleImageLoad = (index) => {
    setLoaded((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <ImageList
        sx={{ width: '100%', borderRadius: 5, display: { xs: 'none', sm: 'grid' } }}
        variant="quilted"
        cols={4}
        rowHeight={200}
      >
        {homeImages.slice(0, 4).map((item, index) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img
                {...srcset(item.img, 200, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: loaded[index] ? 'none' : 'blur(20px)',
                  transition: 'filter 0.5s ease-out',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
            </div>
          </ImageListItem>
        ))}
      </ImageList>

      <ImageList
        sx={{ width: '100%', borderRadius: 5, display: { xs: 'grid', sm: 'none' } }}
        variant="quilted"
        cols={1}
        rowHeight={400}
      >
        <ImageListItem cols={1} rows={1}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img
              {...srcset(homeImages[0].img, 400)}
              alt={homeImages[0].title}
              loading="lazy"
              onLoad={() => handleImageLoad(0)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: loaded[0] ? 'none' : 'blur(20px)',
                transition: 'filter 0.2s ease-out',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
          </div>
        </ImageListItem>
      </ImageList>
    </Box>
  );
};

export default ServiceHero;
