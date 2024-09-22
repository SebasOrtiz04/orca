'use client'

import TextForm from "@/components/utils/textForm";
import { formInputsLogin, loginFormInitialState, validateFormLoginInitialState } from "@/lib/data/initialStates/authInitialStates";
import { Button, Card, CardActions, CardContent, CardHeader, Grow, Typography, useTheme } from "@mui/material";
import { useState } from "react";

export default function Login() {

    const theme = useTheme();

    const [form, setForm] = useState(loginFormInitialState);
    const [validateForm, setValidateForm] = useState(validateFormLoginInitialState);
    
    return (
        <Grow in>
            <Card sx={{width:'min(90vw, 400px)', backgroundColor:theme.palette.primary.contrastText}}>
                <CardHeader title={'Iniciar sesión'}/>
                <CardContent>
                    <TextForm
                    form={form}
                    setForm={setForm}
                    validateForm={validateForm}
                    setValidateForm={setValidateForm}
                    formInputs={formInputsLogin}
                    />
                </CardContent>
                <CardActions sx={{display:'flex', flexDirection:'column'}}>
                    <Button fullWidth variant="contained">
                        Iniciar sesión
                    </Button>
                    <Button>
                        <Typography variant="caption">
                            olvidé mi contraseña
                        </Typography>
                    </Button>
                </CardActions>
            </Card>
        </Grow>
    )
}
