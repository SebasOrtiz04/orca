import {Typography, Divider, Box} from '@mui/material'

export const Title1 = ({title}) =>{

    return(
        <Typography variant='h3' margin={'2rem'}>
            {title}
            <Divider/>
        </Typography>
    )
}

export const AdminTitle = ({title}) =>{

    return(
        <Box sx={{paddingTop:5}}>
        <Typography variant='h4' >
            {title}
        </Typography>
        </Box>
    )
}