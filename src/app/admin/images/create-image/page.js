import FormImage from "@/components/admin/images/FormImage";
import { AdminButton } from "@/components/utils/buttons";
import { Box } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const metadata = {
    title: "Agregar Imagen | CRM | Orca Eventos Sociales",
    description: "CRM Sitio web de Orca salón jardín, eventos sociales, fiestas de cumpleaños, XV años, bodas, banquetes, taquizas, carnitas, mixiotes, inflables, renta de salón, renta de eventos",
};

export default function CreateImage() {
  return (
    <Box >
        <AdminButton icon={<ArrowBackIcon/>} url={'/admin/images'} label={'Mis Imagenes'}/>
        <FormImage/>
    </Box>
  )
}
