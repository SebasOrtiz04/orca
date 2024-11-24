'use client'

import { GetAllImages } from "@/redux/actions/ImageActions";
import { ImageList, Skeleton, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageItem from "./ImageItem";
import { useTheme } from "@mui/material/styles"; // Para usar el tema y los breakpoints

export default function ImagesGallery({admin = false}) {
  const dispatch = useDispatch();
  const { allImages, isLoading } = useSelector((state) => state.image);

  const [ready, setReady] = useState(false);

  const theme = useTheme(); // Obtiene el tema de Material-UI
  const isXs = useMediaQuery(theme.breakpoints.down("xs")); // Menos de 600px
  const isSm = useMediaQuery(theme.breakpoints.between("xs", "sm")); // Entre 600px y 900px
  const isMd = useMediaQuery(theme.breakpoints.between("sm", "md")); // Entre 900px y 1200px
  const isLg = useMediaQuery(theme.breakpoints.up("md")); // Más de 1200px

  useEffect(() => {
    setReady(true);
    return () => setReady(false);
  }, []);

  useEffect(() => {
    if (!ready) return;
    dispatch(GetAllImages());
  }, [ready]);

  // Definir columnas dependiendo del tamaño de pantalla
  const getCols = () => {
    if (isXs) return 1;
    if (isSm) return 2;
    if (isMd) return 3;
    if (isLg) return 4;
    return 1; // Default
  };

  return (
    <ImageList 
      // sx={{width: getCols() * 204}} 
      cols={getCols()}
    > {/* Ajusta el número de columnas */}
      {isLoading.getAll
        ? [...Array(4)].map((_, key) => (
            <Skeleton key={key} variant="rectangular" width={200} height={150} />
          ))
        : allImages.map(({ miniatureUrl, imageUrl, _id, imageName }) => (
            <ImageItem admin={admin} key={_id} image_id={_id} alt={imageName} src={imageUrl} miniatureSrc={miniatureUrl}/>
          ))}
    </ImageList>
  );
}
