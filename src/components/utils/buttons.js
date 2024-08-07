
'use client'

import { forwardRef, useState } from "react";
import { Button ,IconButton, Dialog, Slide, AppBar, Toolbar, Typography} from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

const whatsAppHRef = 'https://wa.me/2226622778?text=Hola,%20estoy%20interesado%20en%20el%20salón%20jardín.';

export const WhatsAppTextButton = ({text = 'Contáctanos',color='white',fullWidth=false}) =>{
    return(                 
        <Button aria-label='contactanos por whatsapp' endIcon={<WhatsAppIcon color='success'/>} color={color} size="large"
        href={whatsAppHRef} target='_blank' fullWidth={fullWidth}
        >
            {text}
        </Button>
    )
}

export const HomeButton = () =>{
    return(                 
        <Button aria-label='Inicio' startIcon={<HomeIcon />} size="large" href="/">
            Inicio
        </Button>
    )
}

export const WhatsAppIconButton = () =>{
    return(
        <IconButton size="large" aria-label='contactanos por whatsapp' href={whatsAppHRef} target='_blank'>
            <WhatsAppIcon  color="success" />
        </IconButton>
    )
}

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const GoogleCalendarButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>

        <Button onClick={openModal} variant='outlined' endIcon={<EditCalendarIcon/>}>
            
            <Typography>
            Agenda una cita informativa
            </Typography>
            
        </Button>

        <Dialog
        fullScreen
        open={isModalOpen}
        onClose={closeModal}
        TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <Button
                    edge="start"
                    color="inherit"
                    onClick={closeModal}
                    aria-label="close"
                    startIcon={<CloseIcon />}
                    >   
                        Cerrar Citas
                    </Button>
                </Toolbar>
            </AppBar>
                
            <iFrame
            title="Programar una cita"
            width="100%"
            height="100%"
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ29xVfcBlElxseideufVx4_3zJ_ueLDvvqmtdUnO2GgcXAAh8iZ6nr31HDpvvKZxjnn70wuk8rt?gv=true"
            sandBox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
            />
        </Dialog>


      </>
    );
  };