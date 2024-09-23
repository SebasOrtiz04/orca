'use client'

import TextForm from "@/components/utils/textForm";
import { formInputsCreateAccount, createAccountFormInitialState, validateFormCreateAccountInitialState } from "@/lib/data/initialStates/authInitialStates";
import { handleValidateForm } from "@/lib/helpers";
import { MostrarAlerta } from "@/redux/actions/AlertaAction";
import { PostCreateAccount, SetCreateAccounStatus } from "@/redux/actions/AuthAction";
import { Button, Card, CardActions, CardContent, CardHeader, Grow, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CreateAccount() {

    const dispatch = useDispatch();
    const theme = useTheme();
    const router = useRouter();

    const {status} = useSelector(state => state.auth);

    const [form, setForm] = useState(createAccountFormInitialState);
    const [validateForm, setValidateForm] = useState(validateFormCreateAccountInitialState);
    const [formReady, setFormReady] = useState(false);

    useEffect(()=>{
      
      const helpMessage = setInterval(()=>{
        dispatch(MostrarAlerta({msg:'Recuerda llenar todos los campos de manera correcta para poder crear tu cuenta',severity:'info'}))
      },[180000])
      return () => clearInterval(helpMessage)
    },[])

    useEffect(()=>{
      const {password, passwordConfirmation} = form;
      const samePasswords = password === passwordConfirmation;
      
      const newConfig = {
        ...validateForm,
        passwordConfirmation:{
          ...validateForm.passwordConfirmation,
          status:samePasswords
        }
      }
      
      if(newConfig.passwordConfirmation.status === validateForm.passwordConfirmation.status)
      return

      setValidateForm(newConfig)

    },[validateForm])

    useEffect(()=>{
      const isformReady = handleValidateForm(validateForm);
      setFormReady(isformReady)
    },[validateForm])

    useEffect(()=>{
      const {createAccount} = status
      if(createAccount === 201){
        dispatch(SetCreateAccounStatus())
        router.push('/auth/check-point')
        return
      }

      if(createAccount === 409){
        const newConfig = {
          ...form,
          email:'',
          password:'',
          passwordConfirmation:''
        }
        setForm(newConfig)
        return
      }

    },[status])

    const primaryMain = theme.palette.primary.main;
    const secondaryDark = theme.palette.secondary.dark;

    const handleSend = () => {
      const cookedform = {
        ...form,
        'password-confirmation' : form.passwordConfirmation
      }
      dispatch(PostCreateAccount(cookedform))
    }

    return (
      <Grow in>
        <Card sx={{width:'min(90vw, 400px)', backgroundColor:theme.palette.primary.contrastText}}>
            <CardHeader 
            title={'Crear cuenta'}
            subheader={'Salón Jardín Orca'}
            titleTypographyProps={{fontSize:42,color:primaryMain}}
            subheaderTypographyProps={{fontSize:28,color:secondaryDark}}/>
            <CardContent>
                <TextForm
                form={form}
                setForm={setForm}
                validateForm={validateForm}
                setValidateForm={setValidateForm}
                formInputs={formInputsCreateAccount}
                />
            </CardContent>
            <CardActions sx={{display:'flex', flexDirection:'column'}}>
                <Button fullWidth variant="contained" disabled={!formReady} onClick={() => handleSend()}>
                    Crear cuenta
                </Button>
                <Button onClick={() => router.push('/auth/login')}>
                    <Typography variant="caption">
                      ya tengo cuenta, iniciar sesión
                    </Typography>
                </Button>
            </CardActions>
        </Card>
      </Grow>
    )
}
