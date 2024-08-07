'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: 'rgba(21,31,40,0.8)',
      main: '#151F28',
      dark: '#607168 ',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f7eeda',
      main: '#BC9C22',
      dark: '#221d0e',
      contrastText: '#454032',
    },
    blackMask:{
      main: 'rgba(0,0,0,0.5)',
      contrastText: 'rgb(111,111,111)'
    },
    white:{
      main: 'rgba(255,255,255,0.5)'
    }
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;