'use client'

import TextForm from "@/components/utils/textForm";
import { formInputsLogin, loginFormInitialState, validateFormLoginInitialState } from "@/lib/data/initialStates/authInitialStates";
import { handleValidateForm } from "@/lib/helpers";
import { Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Grow, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginIcon from '@mui/icons-material/Login';
import { HandleLogin } from "@/redux/actions/AuthAction";

export default function Login() {

    const theme = useTheme();
    const router = useRouter();
    const dispatch = useDispatch();

    const {isLoading} = useSelector(state => state.auth);

    const [form, setForm] = useState(loginFormInitialState);
    const [formReady, setFormReady] = useState(loginFormInitialState);
    const [validateForm, setValidateForm] = useState(validateFormLoginInitialState);
    const primaryMain = theme.palette.primary.main;
    const secondaryDark = theme.palette.secondary.dark;

    useEffect(()=>{
        const isformReady = handleValidateForm(validateForm);
        setFormReady(isformReady)
    },[validateForm])

    const handleSend = () => {
        dispatch(HandleLogin(form))
    }

    return (
        <Grow in>
            <Card sx={{width:'min(90vw, 400px)', backgroundColor:theme.palette.primary.contrastText}}>
            <CardHeader 
            title={'Iniciar sesión'}
            subheader={'Salón Jardín Orca'}
            titleTypographyProps={{fontSize:42,color:primaryMain}}
            subheaderTypographyProps={{fontSize:28,color:secondaryDark}}/>
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
                    <Button 
                        fullWidth 
                        variant="contained" 
                        disabled={!formReady}
                        startIcon={
                            isLoading.login
                            ? <CircularProgress size={18} />
                            : <LoginIcon fontSize="medium"/>
                        }
                        onClick={() => handleSend()}
                    >
                        Iniciar sesión
                    </Button>
                    <Button fullWidth onClick={() => router.push('/auth/recovery-password')}>
                        <Typography variant="caption">
                            olvidé mi contraseña
                        </Typography>
                    </Button>
                    <Button fullWidth onClick={() => router.push('/auth/create-account')}>
                        <Typography variant="caption">
                            ¿No tienes cuenta?, crea una
                        </Typography>
                    </Button>
                </CardActions>
            </Card>
        </Grow>
    )
}
