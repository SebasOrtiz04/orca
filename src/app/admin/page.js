import { AdminTitle } from '@/components/utils/titles'
import { Box } from '@mui/material'


export const metadata = {
    title: "CRM | Orca Eventos Sociales",
    description: "CRM Sitio web de Orca salón jardín, eventos sociales, fiestas de cumpleaños, XV años, bodas, banquetes, taquizas, carnitas, mixiotes, inflables, renta de salón, renta de eventos",
};

export default function AdminHome() {

    
  return (
    <Box>
      <AdminTitle title={'Adminstrador'}/>
    </Box>
  )
}
