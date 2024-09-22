'use client'

import TextForm from "@/components/utils/textForm";
import { formInputsCreateAccount, createAccountFormInitialState, validateFormCreateAccountInitialState } from "@/lib/data/initialStates/authInitialStates";
import { handleValidateForm } from "@/lib/helpers";
import { MostrarAlerta } from "@/redux/actions/AlertaAction";
import { Button, Card, CardActions, CardContent, CardHeader, Grow, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function CreateAccount() {

    const dispatch = useDispatch();
    const theme = useTheme();

    const [form, setForm] = useState(createAccountFormInitialState);
    const [validateForm, setValidateForm] = useState(validateFormCreateAccountInitialState);
    const [formReady, setFormReady] = useState(false);

    useEffect(()=>{
      
      const helpMessage = setInterval(()=>{
        dispatch(MostrarAlerta({msg:'Recuerda llenar todos los campos de manera correcta para poder crear tu cuenta',severity:'info'}))
      },[60000])
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
      console.log(validateForm)
      const isformReady = handleValidateForm(validateForm);
      setFormReady(isformReady)
    },[validateForm])

    return (
      <Grow in>
        <Card sx={{width:'min(90vw, 400px)', backgroundColor:theme.palette.primary.contrastText}}>
            <CardHeader title={'Crear cuenta'}/>
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
                <Button fullWidth variant="contained" disabled={!formReady}>
                    Iniciar sesión
                </Button>
            </CardActions>
        </Card>
      </Grow>
    )
}
