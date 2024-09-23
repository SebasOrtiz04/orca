'use client';

import { Stack, Grow, Typography, Button, Card, CardMedia, CardHeader, CardContent, CardActions, useTheme, TextField } from '@mui/material'
import {PinInput, PinInputField} from '@chakra-ui/pin-input'
import styles from './styles.module.css'

export default function ConfirmAccount() {
  
    const theme = useTheme();

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
                        <PinInput >
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
            
            <CardActions>                
                    <Button fullWidth color='secondary'>
                        reenviar código
                    </Button>
            </CardActions>
        </Card>
    </Grow>
  )
}
