import { AdminTitle } from "@/components/utils/titles";
import { Box } from "@mui/material";

export default function ImagesLayout({children}) {
  return (
    <Box>
        <AdminTitle title="Imagenes"/>
        <Box sx={{marginTop:5}}>
            {children}
        </Box>
    </Box>
  )
}
