'use client'

import { useEffect, useState } from 'react';
import { Container } from '@mui/material';

import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CollectionsIcon from '@mui/icons-material/Collections';
import CelebrationIcon from '@mui/icons-material/Celebration';

import { useSelector } from 'react-redux';
import Forbidden from '@/components/utils/Forbidden';
import { useRouter } from 'next/navigation';
import { restrictedPage } from '@/hooks/restrictedPage';

const actions = [
  { 
    icon: <HomeIcon />, 
    url:'/admin',
    name: 'Inicio' 
  },
  { 
    icon: <CollectionsIcon />, 
    url:'/admin/images',
    name: 'Imagenes' 
  },
  { 
    icon: <CelebrationIcon />, 
    url:'/admin/social-events',
    name: 'Paquetes' 
  },
  { 
    icon: <PersonIcon />, 
    url:'/admin/users',
    name: 'Usuarios' 
  },
];

const ToogleMenu = ({open,handleClose, handleOpen, customStyle}) => {

  const router = useRouter();

  const handleRedierct = url => {
    router.push(url)
  }

  return (
    <SpeedDial
      ariaLabel="SpeedDial tooltip example"
      sx={customStyle}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="down"
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen
          onClick={() => handleRedierct(action.url)}
        />
      ))}
    </SpeedDial>
  )
}

export default function AdminLayout({ children }) {

  
  const {user} = useSelector(state => state.auth)
  
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  restrictedPage(ready)

  useEffect(()=>{
    setReady(true)
    return () => setReady(false)
  },[])

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  if(!user?.admin)
    return <Forbidden/>


  return (
    <Box sx={{ height: '100%',transform: 'translateZ(0px)', flexGrow: 1, position:'relative'}}>
      <Backdrop open={open} sx={{zIndex:1000}} />
      <Container sx={{position:'relative',minHeight:'80vh'}}>
      <ToogleMenu open={open} customStyle={{ position: 'fixed', bottom:32, right: 40,display:{xs:'flex',md:'none'} }}  handleClose={handleClose} handleOpen={handleOpen} />
      <ToogleMenu open={open} customStyle={{ position: 'absolute', top:40, right: 40,display:{xs:'none',md:'flex'} }}  handleClose={handleClose} handleOpen={handleOpen} />
        {children}
        <Box height={120}/>
      </Container>
    </Box>
  );
}