'use client'

import { Card, CardContent, CardHeader, Grow, LinearProgress, Typography, useTheme } from "@mui/material";

export default function CheckPoint() {
  
  const theme = useTheme();

  return (
    <Grow in>
        <Card sx={{width:'min(90vw, 400px)', backgroundColor:theme.palette.primary.contrastText}}>
            <CardHeader title={'Valida tu cuenta'}/>
            <CardContent>
              <Typography>
                Te hemos enviado un correo electrónico
              </Typography>
              <LinearProgress/>
            </CardContent>
        </Card>
    </Grow>
  )
}
