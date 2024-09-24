'use client';

import { Grow, Card, CardHeader, CardContent,useTheme, Typography} from '@mui/material'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostConfirmAccount } from '@/redux/actions/AuthAction';

const regexPin = /^\d{6}$/

export default function SuccessConfirmAccount() {
  
    const dispatch = useDispatch();
    const theme = useTheme();

    const [pin, setPin] = useState('')

    useEffect(()=>{
        const testPin = regexPin.test(pin)
        if(!testPin) return;
        dispatch(PostConfirmAccount({token:pin}))
    },[pin])

    const primaryText = theme.palette.primary.contrastText;
    const secondaryMain = theme.palette.secondary.main;
    
    return (
    <Grow in>
        <Card sx={{width:'min(90vw, 400px)',backgroundColor:'transparent'}}>
            <CardHeader
            title={'¡Cuenta confirmada exitosamente!'}
            color='secondary'
            subheader={'Salón Jardín Orca'}
            titleTypographyProps={{fontSize:42,color:primaryText}}
            subheaderTypographyProps={{fontSize:28,color:secondaryMain}}
            />
            <CardContent>
                <Typography variant='h5' color='primary.contrastText'>
                    Ya puedes cerrar esta ventana, gracias por el tiempo.
                </Typography>
            </CardContent>
            
        </Card>
    </Grow>
  )
}
