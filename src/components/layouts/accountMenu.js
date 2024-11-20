import { Fragment, useEffect, useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from 'next/navigation';
import { Box, Typography, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetAuthUser, HandleLogut } from '@/redux/actions/AuthAction';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
const buttonProps = {
    paper: {
      elevation: 0,
      sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: 'background.paper',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      },
    },
}

export default function AccountMenu() {

    const router = useRouter();
    const dispatch = useDispatch();
    const theme = useTheme();

    const {user} = useSelector(state => state.auth)
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [ready, setReady] = useState(false);
    const open = Boolean(anchorEl);
    
    useEffect(() => {
      setReady(true)
      return () => setReady(false)
    }, []);

    useEffect(() => {
      if(!ready) return
      dispatch(GetAuthUser());
    }, [ready]);

    const accountLinks = [
            {
                link : '/account/profile',
                icon : <Avatar />,
                auth:true,
                label : 'Perfil'
            },
            {
                link : '/account',
                icon : <Avatar />,
                auth:true,
                label : 'Mi cuenta'
            },
            {
                link : '/account/settings',
                icon : <Settings fontSize="small" />,
                auth:true,
                label : 'Configuración'
            },
    ]

    const authLinks = [
            // {
            //     link : '/auth/login',
            //     icon : <LoginIcon fontSize="small" />,
            //     auth:true,
            //     label : 'Iniciar sesión'
            // },
            // {
            //     link : '/auth/logout',
            //     icon : <Logout fontSize="small" />,
            //     auth:true,
            //     label : 'Cerrar sesión'
            // },
            {
              link : '/auth/create-account',
              icon : <PersonAdd fontSize="small" />,
              auth:true,
              label : 'Crear cuenta'
          },
    ]

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
      dispatch(HandleLogut())
    }

  return (
    <Fragment>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, display:'flex', justifyContent:'center', backgroundColor: theme.palette.secondary.light, color: theme.palette.primary.main }}>
                  {user && `${user?.firstName[0].toUpperCase()}${user?.lastName[0].toUpperCase()}` }
            </Avatar>
          </IconButton>
        </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={buttonProps}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {
            user && accountLinks.map(({link,icon, label, auth},i)=>(
                <MenuItem key={i} onClick={() => router.push(link)}>
                  <ListItemIcon>
                    {icon} 
                  </ListItemIcon>
                    {label}
                </MenuItem>
            ))            
        }
        { user && <Divider/>}
        <MenuItem 
          onClick={
            !user 
            ? () =>  router.push('/auth/login')
            : () => handleLogout()
          }>
            <ListItemIcon>
              {!user?.id ? <LoginIcon fontSize="small" /> : <Logout fontSize="small" /> } 
            </ListItemIcon>
              {!user ? 'Iniciar sesión' : 'Cerrar sesión'}
        </MenuItem>
        
        {
          user?.admin &&
          <MenuItem onClick={() => router.push('/admin')}>
              <ListItemIcon>
                <AdminPanelSettingsIcon fontSize="small" /> 
              </ListItemIcon>
                Administrador
          </MenuItem>
        }
        {
            !user && authLinks.map(({link,icon, label, auth},i)=>(
                <MenuItem key={i} onClick={() => router.push(link)}>
                  <ListItemIcon>
                    {icon} 
                  </ListItemIcon>
                    {label}
                </MenuItem>
            ))            
        }
      </Menu>
    </Fragment>
  );
}
