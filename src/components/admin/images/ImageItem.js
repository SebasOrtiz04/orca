
import { Backdrop, Box, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, ImageListItem, ImageListItemBar, Stack } from '@mui/material';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ImageDetail from './ImageDetail';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteImageById, GetAllImages, SetDeleteImageByIdtatus } from '@/redux/actions/ImageActions';

export default function ImageItem({ miniatureSrc,src, alt, priority, disabled = false, admin = false, image_id }) {

  const dispatch = useDispatch();

  const {isLoading, status} = useSelector(state => state.image)

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(status.deleteById !== 200) return
      dispatch(SetDeleteImageByIdtatus())
      dispatch(GetAllImages())
      setOpen(false)
  }, [status.deleteById])

  const handleOpen  = () => {

    if(disabled)
      return

    setOpen(true)
  }

  const handleDeleteImage = id => {

    if(!id || !admin) return
    dispatch(DeleteImageById(id))
  }

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md" >
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{width:'100%'}}>
            <DialogTitle>
              {alt}
            </DialogTitle>
            {
              admin &&
              <DialogActions>
                <IconButton onClick={() => handleDeleteImage(image_id)}>
                  {
                    isLoading.deleteById
                    ? <CircularProgress size={20} color='inherit'/>
                    : <DeleteIcon color='error'/>
                  }
                </IconButton>
              </DialogActions>
            }
          </Stack>
          <DialogContent
            sx={{display:'flex',justifyContent:'center',alignItems:'center', width:'fit-content'}}
          >
            <ImageDetail src={src} alt={alt} priority={priority} admin={admin}/>
          </DialogContent>
      </Dialog>
      <ImageListItem>
        <Image
          src={miniatureSrc ?? '/img/Galery/imageNotFount.svg'}
          alt={alt ?? ''}
          loading="lazy"
          width={200}
          height={150}
          style={{ objectFit: 'cover' }}
        />
          <ImageListItemBar
            sx={{width:200}}
            title={alt}
            subtitle='Orca Eventos Sociales'
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${alt}`}
                onClick={() => handleOpen()} // Abre el Backdrop al hacer clic en la imagen
              >
                <InfoIcon />
              </IconButton>
            }
          />
      </ImageListItem>
    </>
  );
}
