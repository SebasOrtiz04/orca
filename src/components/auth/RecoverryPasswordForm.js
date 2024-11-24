'use client';

import TextForm from '@/components/utils/textForm'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Grow, Typography, useTheme } from '@mui/material'

import { formInputsRecoveryPassword, recoverPasswordFormInisitalState, validatePAsswordRecoveryFormInitialState } from '@/lib/data/initialStates/authInitialStates';
import { useSelector } from 'react-redux';
import { handleValidateForm } from '@/lib/helpers';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RecoveryPasswordForm() {

  const theme = useTheme();
  const router = useRouter();

  const {isLoading} = useSelector(state => state.auth);


  const [form, setForm] = useState(recoverPasswordFormInisitalState);
  const [validateForm, setValidateForm] = useState(validatePAsswordRecoveryFormInitialState);
  const [formReady, setFormReady] = useState(false);

  const primaryMain = theme.palette.primary.main;
  const secondaryDark = theme.palette.secondary.dark;


  useEffect(()=>{
        const isformReady = handleValidateForm(validateForm);
        setFormReady(isformReady)
    },[validateForm])

  return (
    <Grow in>
        <Card sx={{width:'min(90vw, 400px)', backgroundColor:theme.palette.primary.contrastText}}>
            <CardHeader 
            title={'Recuperar contraseña'}
            subheader={'Salón Jardín Orca'}
            titleTypographyProps={{fontSize:42,color:primaryMain}}
            subheaderTypographyProps={{fontSize:28,color:secondaryDark}}/>
            <CardContent>
                <TextForm
                form={form}
                setForm={setForm}
                validateForm={validatePAsswordRecoveryFormInitialState}
                setValidateForm={setValidateForm}
                formInputs={formInputsRecoveryPassword}
                />
            </CardContent>
            <CardActions sx={{display:'flex', flexDirection:'column'}}>
                <Button 
                fullWidth 
                variant="contained" 
                startIcon={
                <Avatar sx={{backgroundColor:'transparent'}}>
                    {
                    isLoading.createAccount 
                    ? <CircularProgress size={15}/>
                    : <AlternateEmailIcon />
                    }
                </Avatar>
                } 
                disabled={!formReady || isLoading.createAccount} 
                onClick={() => handleSend()}
                >
                    Enviar correo
                </Button>
                <Button onClick={() => router.push('/auth/login')} >
                    <Typography variant="caption">
                        Iniciar sesión
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    </Grow>
  )
}
