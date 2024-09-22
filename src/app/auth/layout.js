'use client'

import { Box, Button, ButtonGroup, Stack, useTheme } from "@mui/material";
import Image from "next/image";
import styles from './styles.module.css';
import { useRouter } from "next/navigation";

export default function AuthLayout({
    children, // will be a page or nested layout
  }) {

    const router = useRouter();
    const theme = useTheme();

    return (
      <Box sx={{width:'100vw',minHeight:'calc(100vh -  180px)',backgroundColor:theme.palette.primary.main}}>
        <Stack alignItems={'center'}>
            <Image
            srcSet='/img/Logos/orca_dorada.png'
            src='/img/Logos/orca_dorada.png'
            alt='Logo Orca Eventos Sociales'
            priority
            className={styles.img}
            width={300}
            height={200}
            />
            <main className={styles.main}>
                {children}
            </main>
            <nav className={styles.nav}>
                <ButtonGroup variant="contained" aria-label="Basic button group">
                    <Button
                    onClick={() => router.push('/auth/login')}
                    >
                        Iniciar sesión
                    </Button>
                    <Button
                    onClick={() => router.push('/auth/create-account')}
                    >
                        Registrarme
                    </Button>
                </ButtonGroup>
                <Button onClick={() => router.push('/')} color="secondary">
                    Volver
                </Button>
            </nav>
        </Stack>
      </Box>
    )
  }