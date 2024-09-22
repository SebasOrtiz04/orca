'use client'

import { useTheme } from '@emotion/react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import { GoogleCalendarButton, WhatsAppTextButton } from '../utils/buttons'
import { heroContactStyles } from '@/app/styles/contactStyles'

const {gridChild} = heroContactStyles;

export default function HeroContact() {
  
    const theme = useTheme();

    const contacts = [
        {
            label:'+52 22 26 62 27 78',
            icon:<PhoneIphoneIcon/>
        },
        {
            label:'ventas@salonorca.com',
            icon:<EmailIcon/>,
        }
    ]

    const buttons = [
        <GoogleCalendarButton/>,
        <WhatsAppTextButton color='primary'/>
    ]

  return (
    <Box sx={{overflow:'hidden'}}>
      
      <Stack alignItems={'center'} sx={{width:'100%',background:theme.palette.primary.main,}}>
        <Image
            srcSet='/img/Logos/orcaSalon_sin_fondo.png'
            src='/img/Logos/orcaSalon_sin_fondo.png'
            alt='Logo Orca Eventos Sociales'
            priority
            width={500}
            height={500}
          />
      </Stack>
      <Container maxWidth={'md'}>
        <Card sx={{marginTop:-10}}>
            <CardHeader  
            title={
                <Typography variant='h1' sx={{fontSize:30}}>
                    Contáctanos
                </Typography>
            } 
            />

            <CardContent>
                <Grid container xs={12} gap={{xs:2}}>
                    {
                        contacts.map(({label,icon,button},key)=>(
                            <Grid item xs={12} sm={5} key={key}  sx={gridChild}>
                                {icon} 
                                <Typography variant='body1'>
                                    {label}
                                </Typography>
                            </Grid>                            
                        ))
                    }      
                    {
                        buttons.map( el => (
                            <Grid item xs={12} sm={5} sx={gridChild}>
                                {el}
                            </Grid>
                        ))
                    }            
                </Grid>
            </CardContent>
        </Card>
      </Container>


    </Box>
  )
}
