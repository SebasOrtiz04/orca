'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: 'rgba(21,31,40,0.8)',
      main: '#151f28',
      dark: '#363f47 ',
      contrastText: '#fefdfd',
    },
    secondary: {
      light: '#f2ebda',
      main: '#c5b16e',
      dark: '#a28d23',
      contrastText: '#4f4519',
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