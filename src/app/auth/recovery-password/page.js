import RecoveryPasswordForm from "@/components/auth/RecoverryPasswordForm";
import { Container } from "@mui/material";


export default function RecoveryPassword() {

  return (
    <Container
      sx={{display:'flex', flexDirection:'column', alignItems:'center'}}
    >
      <RecoveryPasswordForm/>
    </Container>
  )
}
