'use client';

import { Stack, Grow, Typography, Button, Card, CardMedia, CardHeader, CardContent, CardActions, useTheme, TextField } from '@mui/material'
import {PinInput, PinInputField} from '@chakra-ui/pin-input'
import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostConfirmAccount } from '@/redux/actions/AuthAction';
import { useRouter } from 'next/navigation';

const regexPin = /^\d{6}$/

export default function ConfirmAccount() {
  
    const router = useRouter();
    const dispatch = useDispatch();
    const theme = useTheme();

    const {status } = useSelector(state => state.auth);

    const [pin, setPin] = useState('')

    useEffect(()=>{
        const testPin = regexPin.test(pin)
        if(!testPin) return;
        dispatch(PostConfirmAccount({token:pin}))
    },[pin])

    useEffect(()=>{
        const { confirmAccount} = status

        if(confirmAccount === 404)
            setPin('')

        if(confirmAccount !== 200 ) return
        
        console.log(confirmAccount);
        router.push('/auth/success-confirm-account');

    },[status.confirmAccount])

    const primaryText = theme.palette.primary.contrastText;
    const secondaryMain = theme.palette.secondary.main;
    
    return (
    <Grow in>
        <Card sx={{width:'min(90vw, 400px)',backgroundColor:'transparent'}}>
            <CardHeader
            title={'Confirma tu cuenta'}
            color='secondary'
            subheader={'Salón Jardín Orca'}
            titleTypographyProps={{fontSize:42,color:primaryText}}
            subheaderTypographyProps={{fontSize:28,color:secondaryMain}}
            />
            <CardContent>
                <Stack gap={2}>
                    <Typography variant='h6' color={'secondary.light'}>
                        Ingresa el código de recibiste <span  style={{color:secondaryMain}}>por email</span> 
                    </Typography>
                    <Stack direction={'row'} width={'100%'} alignItems={'center'} justifyContent={'space-evenly'}>
                        <PinInput value={pin} onChange={e => setPin(e)}>
                            <PinInputField  className={styles.fieldInput}/>
                            <PinInputField  className={styles.fieldInput}/>
                            <PinInputField  className={styles.fieldInput}/>
                            <PinInputField  className={styles.fieldInput}/>
                            <PinInputField  className={styles.fieldInput}/>
                            <PinInputField  className={styles.fieldInput}/>
                        </PinInput>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    </Grow>
  )
}
