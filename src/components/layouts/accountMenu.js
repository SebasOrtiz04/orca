import { Fragment, useState } from 'react';

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

    const router = useRouter()
    const [anchorEl, setAnchorEl] = useState(null);
  
    const open = Boolean(anchorEl);
    
    const accountLinks = [
        // [
        //     {
        //         link : '/account/profile',
        //         icon : <Avatar />,
        //         label : 'Perfil'
        //     },
        //     {
        //         link : '/account',
        //         icon : <Avatar />,
        //         label : 'Mi cuenta'
        //     },
        //     {
        //         link : '/account/settings',
        //         icon : <Settings fontSize="small" />,
        //         label : 'Configuración'
        //     },
        // ],
        [
            {
                link : '/auth/create-account',
                icon : <PersonAdd fontSize="small" />,
                label : 'Crear cuenta'
            },
            {
                link : '/auth/login',
                icon : <LoginIcon fontSize="small" />,
                label : 'Iniciar sesión'
            },
            // {
            //     link : '/auth/logout',
            //     icon : <Logout fontSize="small" />,
            //     label : 'Cerrar sesión'
            // },
        ],
    ]

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

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
            <Avatar sx={{ width: 32, height: 32, backgroundColor: 'transparent' }}>
                
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
            accountLinks.map((sublist,key)=>(
                <>
                    { key > 0 && <Divider/>}  
                    {
                        sublist.map(({link,icon, label},i)=>(
                            <MenuItem key={`${key}${i}`} onClick={() => router.push(link)}>
                                <ListItemIcon>
                                    {icon} 
                                </ListItemIcon>
                                {label}
                            </MenuItem>
                        ))
                    }
                </>             
            ))
        }
      </Menu>
    </Fragment>
  );
}
