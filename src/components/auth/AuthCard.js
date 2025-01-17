'use client';

import { Card, CardHeader, CardContent, CardActions, useTheme, Grow } from '@mui/material'

export default function AuthCard({
  title,
  children,
  actions
}) {
  
    const theme = useTheme();

    const primaryText = theme.palette.primary.contrastText;
    const primaryMain = theme.palette.secondary.main;
    const secondaryMain = theme.palette.secondary.main;
    
    return (
      <Grow in>
        
        <Card sx={{width:'min(90vw, 400px)',backgroundColor:'transparent'}}>
            <CardHeader
            title={title}
            color='secondary'
            subheader={'Salón Jardín Orca'}
            titleTypographyProps={{fontSize:42,color:primaryText}}
            subheaderTypographyProps={{fontSize:28,color:secondaryMain}}
            />
            <CardContent>
              {children}
            </CardContent>
            
            <CardActions>                
              {actions}
            </CardActions>
        </Card>
      </Grow>

  )
}
