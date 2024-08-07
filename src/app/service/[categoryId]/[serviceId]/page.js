'use client';

import ServiceAside from "@/components/service/ServiceAside";
import ServiceDetail from "@/components/service/ServiceDetail";
import ServiceHeader, { Hero } from "@/components/service/ServiceHero";
import ServiceMain from "@/components/service/ServiceMain";
import ServiceResume from "@/components/service/ServiceResume";
import { HomeButton } from "@/components/utils/buttons";
import GoogleMaps from "@/components/utils/googleMaps";
import { GetSocialEventsById } from "@/redux/actions/SocialEventActions";
import { Box, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ServicePage = ({ params }) => {

  const {categoryId, serviceId} = params;

  const dispatch = useDispatch();

  const [ready, setReady] = useState(false);

  useEffect(()=>{
    setReady(true);
    return () => setReady(false);
  },[])

  useEffect(()=>{
    if(!ready) return;
    dispatch(GetSocialEventsById({categoryId,serviceId}))
  },[ready])

  return (
    <Container sx={{marginTop:15, marginBottom:5}}>
      
      <Stack 
        direction={{xs:'column',lg:'row'}} 
        width={'100%'} 
        alignItems={'flex-start'} 
        justifyContent={'space-between'}
        sx={{marginBottom:8}}
      >
        <Box sx={{width:{xs:'100%',lg:'68%'}}}>
          <ServiceMain/>
        </Box>
        <Box  sx={{width:{xs:'100%',lg:'30%'}}}>
          <ServiceAside/>
        </Box>
      </Stack>

      <GoogleMaps/>
    </Container>
  );
};

export default ServicePage;
