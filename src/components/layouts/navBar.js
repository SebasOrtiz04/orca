'use client'

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import CustomMenu from './menu';
import { OpenMenu } from '@/redux/actions/MenuActions';
import {useDispatch} from 'react-redux';
import {Container, useTheme} from '@mui/material'
import Link from 'next/link';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavBar() {

  const dispatch = useDispatch();
  const theme = useTheme();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      if (yPos > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      color='secondary'
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1}}>

      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 ,position:'fixed',right:10,bottom:20,zIndex:100,display:{xs:'block', md:'none'}}}
        onClick={() => dispatch(OpenMenu())}
      >
        <MenuIcon sx={{fontSize:'3rem'}} color='secondary.contrastText' />
      </IconButton>

      <AppBar position="fixed" 
      sx={{ display:'flex',justifyContent:'center',height:80,
      transition:'all',animationDuration:100,backgroundColor: isScrolled ? theme.palette.primary.light : theme.palette.primary.main
      }}
      >
        <Container>
        <Toolbar>


<Link href='/' className={styles.a}>
<Stack direction='row' gap={2} alignItems='center'>
<Image
  srcSet='/img/Logos/orca2.png'
  src='/img/Logos/orca2.png'
  alt='Logo Orca Eventos Sociales'
  priority
  width={80}
  height={80}
/>

<Typography
  variant="h6"
  color={'secondary.ligth'}
  noWrap
  component="div"
  sx={{ display: { xs: 'flex', sm: 'none' },color:theme.palette.secondary.light}}
>
  Orca
</Typography>

<Typography
  variant="h6"
  color={'secondary.ligth'}
  noWrap
  component="div"
  sx={{ display: { xs: 'none', sm: 'flex' },color:theme.palette.secondary.light}}
>
  Salón Jardín Orca
</Typography>
</Stack>
</Link>


{/* <Search>
  <SearchIconWrapper>
    <SearchIcon />
  </SearchIconWrapper>
  <StyledInputBase
    placeholder="Buscar..."
    inputProps={{ 'aria-label': 'search' }}
  />
</Search> */}

<Box sx={{ flexGrow: 1 }} />

<Stack direction={'row'} alignItems={'center'}>


<Button 
aria-label='navegar a página de contacto' 
onClick={()=>router.push('/galery')} 
color='secondary'
sx={{display:{xs:'none',md:'flex',color:theme.palette.secondary.light}}}
>
  Galería
</Button>


<Button 
aria-label='navegar a página de contacto' 
onClick={()=>router.push('/contact')} 
color='secondary'
sx={{display:{xs:'none',md:'flex'},color:theme.palette.secondary.light}}
>
  Contáctanos
</Button>
<IconButton 
  size="large" 
  aria-label="Enlace Facebook" 
  color="secondary"
  type='href'
  target='_blank'
  href='https://www.facebook.com/profile.php?id=61556546690736'
  sx={{color:theme.palette.secondary.light}}
  >
      <FacebookIcon />
</IconButton>
{/* <IconButton
  size="large"
  color="secondary"
  aria-label="open drawer"
  sx={{display: { xs: 'none', md: 'flex' },color:theme.palette.secondary.light}}
  onClick={() => dispatch(OpenMenu())}

>
  <MenuIcon/>
</IconButton> */}
</Stack>

<CustomMenu />
</Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}