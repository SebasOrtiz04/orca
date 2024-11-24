'use client'

import {Typography, Divider, Box, Grow} from '@mui/material'
import { useEffect, useState } from 'react'

export const Title1 = ({title}) =>{

    return(
        <Typography variant='h3' margin={'2rem'}>
            {title}
            <Divider/>
        </Typography>
    )
}

export const AdminTitle = ({title}) =>{

    const [ready, setReady] = useState(false)
    
    useEffect(()=>{
        setReady(true)
        return () => setReady(false)
    },[])

    return(
        <Box sx={{paddingTop:5}}>
            <Grow in={ready}>
                <Typography variant='h4' >
                    {title}
                </Typography>
            </Grow>
        </Box>
    )
}