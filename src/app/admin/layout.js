'use client'

import { useState } from 'react';
import { Container } from '@mui/material';

import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import HomeIcon from '@mui/icons-material/Home';

const actions = [
  { 
    icon: <SaveIcon />, 
    name: 'Clientes' 
  },
  { 
    icon: <PrintIcon />, 
    name: 'Galería' 
  },
  { 
    icon: <ShareIcon />, 
    name: 'Paquetes' 
  },
  { 
    icon: <HomeIcon />, 
    name: 'Inicio' 
  },
];

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: '100%',transform: 'translateZ(0px)', flexGrow: 1, position:'relative'}}>
      <Backdrop open={open} />
      <Container sx={{position:'relative',minHeight:'80vh'}}>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'fixed', bottom:32, right: 40 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        // direction="right"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
        {children}
      </Container>
    </Box>
  );
}