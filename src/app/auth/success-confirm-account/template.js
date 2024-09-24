'use client'

import { Box, Button, Container, Grow, useTheme } from "@mui/material";
import Image from "next/image";
import styles from './styles.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/navigation";

export default function Template({ children }) {
    
    const theme = useTheme();
    const router = useRouter();
    
    return (
        <Box sx={{position:'absolute', backgroundColor:theme.palette.primary.main, width:'100vw', minHeight:'100vh', top:0,left:0,zIndex:1200}}>
            <Container sx={{display:'flex',alignItems:'center',justifyContent:'flex-start',height:'100%', flexDirection:'column'}}>
                <Grow in>
                    <Image
                    srcSet='/img/Logos/orca_dorada.png'
                    src='/img/Logos/orca_dorada.png'
                    alt='Logo Orca Eventos Sociales'
                    priority
                    className={styles.img}
                    width={300}
                    height={200}
                    />
                </Grow>
            
                {children}
            </Container>
        </Box>)
  }