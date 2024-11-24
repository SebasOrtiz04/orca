'use client';

import { Stack, Grow, Typography, Button, Card, CardMedia, CardHeader, CardContent, CardActions, useTheme } from '@mui/material'
import CelebrationIcon from '@mui/icons-material/Celebration';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserCheckPoint, ResendToken, SetGetAuthUserStatus } from '@/redux/actions/AuthAction';

export default function CheckPoint() {
    const dispatch = useDispatch();
    const theme = useTheme();
    const router = useRouter();

    // Ensure the code runs only on the client
    const [email, setEmail] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const searchParams = new URLSearchParams(window.location.search);
            setEmail(searchParams.get('email'));
        }
    }, []);

    const { status } = useSelector(state => state.auth);

    useEffect(() => {
        const interval = setInterval(() => dispatch(GetUserCheckPoint()), 5000);
        return () => {
            clearInterval(interval);
            dispatch(SetGetAuthUserStatus());
        };
    }, []);

    useEffect(() => {
        const { getAuthUser } = status;
        if (getAuthUser !== 200) return;
        router.push('/');
    }, [status]);

    const primaryText = theme.palette.primary.contrastText;
    const secondaryMain = theme.palette.secondary.main;

    return (
        <Grow in>
            <Card sx={{ width: 'min(90vw, 400px)', backgroundColor: 'transparent' }}>
                <CardHeader
                    avatar={<CelebrationIcon color='secondary' sx={{ with: 80, height: 80 }} />}
                    title={'Falta poco'}
                    color='secondary'
                    subheader={'Salón Jardín Orca'}
                    titleTypographyProps={{ fontSize: 42, color: primaryText }}
                    subheaderTypographyProps={{ fontSize: 28, color: secondaryMain }}
                />
                <CardContent>
                    <Stack gap={2}>
                        <Typography variant='h6' color={'secondary.light'}>
                            !No cierres esta ventana!
                        </Typography>
                        <Typography variant='h6' color={'secondary.light'}>
                            Te hemos enviado un código a tu email: <span style={{ color: secondaryMain }}>{email}</span> para validar tu cuenta
                        </Typography>
                    </Stack>
                </CardContent>
                <CardActions sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography variant='body2' color={'primary.contrastText'}>
                        ¿Ya confirmaste tu cuenta y no se ha iniciado sesión automáticamente?
                        <Button color='secondary' onClick={() => router.push('/auth/login')}>
                            <Typography variant='caption'>
                                Inicia sesión de forma manual
                            </Typography>
                        </Button>
                    </Typography>
                    <Button color='secondary' fullWidth onClick={() => dispatch(ResendToken(email))}>
                        Reenviar código
                    </Button>
                </CardActions>
            </Card>
        </Grow>
    );
}
