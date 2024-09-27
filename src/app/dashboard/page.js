'use client'

import { Title1 } from "@/components/utils/titles";
import { restrictedPage } from "@/hooks/restrictedPage";
import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";

export default function page() {

  
  const [ ready, setReady] = useState();
  restrictedPage(ready)

  useEffect(()=>{
    setReady(true)
    return () => setReady(false)
  },[])


  return (
    <Container sx={{minHeight:'82vh',paddingTop:1}}>
      <Title1 title={'Dashboard'}/>
    </Container>
  )
}
