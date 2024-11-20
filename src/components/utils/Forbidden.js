import { Button, Container, Stack, Typography } from '@mui/material'
import LockPersonIcon from '@mui/icons-material/LockPerson';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/navigation';

export default function Forbidden() {

    const router = useRouter();

  return (
    <Container>
        <Stack  alignItems={'center'} gap={5} justifyContent={'center'} minHeight={'82vh'}>
            <LockPersonIcon color='primary' sx={{width:150, height:150}}/>
            
            <Stack direction={'row'} alignItems={'baseline'}>
                <Typography color='secondary.dark' variant='h2'>
                    403 
                </Typography>
                <Typography color='primary' variant='h3'>
                    Forbidden
                </Typography>
            </Stack>
            <Typography color='primary'>
                No tiene autorización para este recurso
            </Typography>
            <Button variant='outlined' startIcon={<HomeIcon/>} onClick={() => router.push('/')}>
                Ir al inicio
            </Button>
        </Stack>
    </Container>
  )
}
