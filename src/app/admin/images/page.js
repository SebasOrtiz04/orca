
import ImagesGalery from "@/components/admin/images/ImagesGalery";
import { AdminButton } from "@/components/utils/buttons";
import { Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export const metadata = {
    title: "Imagenes | CRM | Orca Eventos Sociales",
    description: "CRM Sitio web de Orca salón jardín, eventos sociales, fiestas de cumpleaños, XV años, bodas, banquetes, taquizas, carnitas, mixiotes, inflables, renta de salón, renta de eventos",
};

export default function ImagesPage() {
  return (
    <Box>
        <AdminButton icon={<AddIcon/>} url={'/admin/images/create-image'} label={'Agregar imagen'}/>
        <ImagesGalery admin/>
    </Box>
  )
}
