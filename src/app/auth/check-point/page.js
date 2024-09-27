'use client';

import { Stack, Grow, Typography, Button, Card, CardMedia, CardHeader, CardContent, CardActions, useTheme, TextField } from '@mui/material'

import CelebrationIcon from '@mui/icons-material/Celebration';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserCheckPoint, SetGetAuthUserStatus } from '@/redux/actions/AuthAction';
export default function CheckPoint() {
  
    const dispatch = useDispatch();
    const theme = useTheme();
    const router = useRouter();

    const {status} = useSelector(state => state.auth);

    useEffect(()=>{
      const interval = setInterval(()=> dispatch(GetUserCheckPoint()),1000)
      return () => {
        clearInterval(interval)
        dispatch(SetGetAuthUserStatus())
      }
    },[])

    useEffect(()=>{
      const {getAuthUser} = status
      if(getAuthUser !== 200) return
      router.push('/dashboard')
    },[status])

    const primaryText = theme.palette.primary.contrastText;
    const secondaryMain = theme.palette.secondary.main;
    
    return (
    <Grow in>
        <Card sx={{width:'min(90vw, 400px)',backgroundColor:'transparent'}}>
            <CardHeader
            avatar={<CelebrationIcon color='secondary' sx={{with:80,height:80}}/>}
            title={'Falta poco'}
            color='secondary'
            subheader={'Salón Jardín Orca'}
            titleTypographyProps={{fontSize:42,color:primaryText}}
            subheaderTypographyProps={{fontSize:28,color:secondaryMain}}
            />
            <CardContent>
                <Stack gap={2}>
                    <Typography variant='h6' color={'secondary.light'}>
                        !No cierres esta ventana! 
                    </Typography>
                    <Typography variant='h6' color={'secondary.light'}>
                        Te hemos enviado un código <span  style={{color:secondaryMain}}>por email</span> para validar tu cuenta 
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions >
              <Typography variant='body2' color={'primary.contrastText'}>
                ¿Ya confirmaste tu cuenta y no se ha iniciado sesión automáticamente?               
                <Button color='secondary' onClick={()=>router.push('/auth/login')}>
                  <Typography variant='caption'>
                    Inicia sesión de forma manual
                  </Typography>
                </Button>
              </Typography>
            </CardActions>
        </Card>
    </Grow>
  )
}
